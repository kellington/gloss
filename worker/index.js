// Gloss Worker: static assets (allowlist: worker/build-public.mjs) + a tiny learner-state API.
//   GET /api/state  -> { state, updatedAt }   (state null / updatedAt 0 when nothing stored)
//   PUT /api/state  <- { state: {...}, updatedAt: <ms> }
//                   -> { state, updatedAt, applied }   last-write-wins on updatedAt
// Auth: Cloudflare Access sits in front of the whole hostname; the Worker re-verifies the
// Access JWT and keys state by its email claim. Local `wrangler dev` uses DEV_USER_EMAIL,
// honoured only when the request host is localhost/127.0.0.1.

import { verifyAccessJwt } from "./access.js";

const MAX_BODY_BYTES = 256 * 1024;
const MAX_FUTURE_MS = 24 * 60 * 60 * 1000; // reject client clocks more than a day ahead

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/state") {
      try {
        return await handleState(request, env, url);
      } catch (error) {
        console.error("api/state error:", error && error.message);
        return json({ error: "internal" }, 500);
      }
    }
    if (url.pathname.startsWith("/api/")) return json({ error: "not found" }, 404);
    return env.ASSETS.fetch(request);
  }
};

async function handleState(request, env, url) {
  const email = await identify(request, env, url);
  if (!email) return json({ error: "unauthorized" }, 401);

  if (request.method === "GET") {
    return json(await readState(env, email));
  }

  if (request.method === "PUT") {
    if (!(request.headers.get("content-type") ?? "").toLowerCase().startsWith("application/json")) {
      return json({ error: "content-type must be application/json" }, 415);
    }
    const declared = Number(request.headers.get("content-length") ?? "0");
    if (declared > MAX_BODY_BYTES) return json({ error: "body too large" }, 413);
    const text = await request.text();
    if (new TextEncoder().encode(text).length > MAX_BODY_BYTES) return json({ error: "body too large" }, 413);

    let body;
    try {
      body = JSON.parse(text);
    } catch {
      return json({ error: "invalid json" }, 400);
    }
    const { state, updatedAt } = body ?? {};
    if (!state || typeof state !== "object" || Array.isArray(state)) return json({ error: "state must be an object" }, 400);
    if (!Number.isSafeInteger(updatedAt) || updatedAt <= 0) return json({ error: "updatedAt must be a positive integer (ms)" }, 400);
    if (updatedAt > Date.now() + MAX_FUTURE_MS) return json({ error: "updatedAt is in the future" }, 400);

    const result = await env.DB.prepare(
      `INSERT INTO learner_state (email, state, updated_at, server_updated_at)
       VALUES (?1, ?2, ?3, ?4)
       ON CONFLICT(email) DO UPDATE SET
         state = excluded.state,
         updated_at = excluded.updated_at,
         server_updated_at = excluded.server_updated_at
       WHERE excluded.updated_at >= learner_state.updated_at`
    ).bind(email, JSON.stringify(state), updatedAt, Date.now()).run();

    const applied = (result.meta?.changes ?? 0) > 0;
    return json({ ...(await readState(env, email)), applied });
  }

  return json({ error: "method not allowed" }, 405, { allow: "GET, PUT" });
}

async function readState(env, email) {
  const row = await env.DB.prepare("SELECT state, updated_at FROM learner_state WHERE email = ?1")
    .bind(email).first();
  if (!row) return { state: null, updatedAt: 0 };
  return { state: JSON.parse(row.state), updatedAt: row.updated_at };
}

async function identify(request, env, url) {
  const isLocal = url.hostname === "localhost" || url.hostname === "127.0.0.1";
  if (isLocal && env.DEV_USER_EMAIL) {
    return env.DEV_USER_EMAIL.trim().toLowerCase();
  }

  const token = request.headers.get("cf-access-jwt-assertion") ?? readCookie(request, "CF_Authorization");
  if (!token) return null;
  try {
    const { email } = await verifyAccessJwt(token, env.ACCESS_TEAM_DOMAIN, env.ACCESS_AUD);
    const headerEmail = request.headers.get("cf-access-authenticated-user-email");
    if (headerEmail && headerEmail.trim().toLowerCase() !== email) {
      console.warn("Access email header does not match JWT claim");
      return null;
    }
    return email;
  } catch (error) {
    console.warn("Access JWT rejected:", error.message);
    return null;
  }
}

function readCookie(request, name) {
  const header = request.headers.get("cookie") ?? "";
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return rest.join("=");
  }
  return null;
}

function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...extraHeaders
    }
  });
}
