// Cloudflare Access JWT verification using WebCrypto only (no dependency).
// Ported from ../pickem/worker/access.ts.
// Token: `Cf-Access-Jwt-Assertion` header (set by Access on every proxied request),
// falling back to the `CF_Authorization` cookie.
// Checks: RS256 signature against the team JWKS, `iss` == team domain, `aud` contains the
// application AUD tag, `exp`/`nbf` with 60 s skew, and a non-empty `email` claim.

const KEY_TTL_MS = 10 * 60 * 1000;
const SKEW_S = 60;
let cache = null; // { teamDomain, fetchedAt, keys: Map<kid, CryptoKey> }

function b64urlToBytes(input) {
  const b64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const padded = b64 + "=".repeat((4 - (b64.length % 4)) % 4);
  const bin = atob(padded);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

function decodeJson(part) {
  return JSON.parse(new TextDecoder().decode(b64urlToBytes(part)));
}

async function loadKeys(teamDomain, force) {
  const now = Date.now();
  if (!force && cache && cache.teamDomain === teamDomain && now - cache.fetchedAt < KEY_TTL_MS) {
    return cache.keys;
  }
  const res = await fetch(`${teamDomain}/cdn-cgi/access/certs`);
  if (!res.ok) throw new Error(`Access certs fetch failed: ${res.status}`);
  const body = await res.json();
  const keys = new Map();
  for (const jwk of body.keys ?? []) {
    if (!jwk.kid || jwk.kty !== "RSA") continue;
    const key = await crypto.subtle.importKey(
      "jwk",
      jwk,
      { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
      false,
      ["verify"]
    );
    keys.set(jwk.kid, key);
  }
  if (keys.size === 0) throw new Error("Access certs contained no RSA keys");
  cache = { teamDomain, fetchedAt: now, keys };
  return keys;
}

export async function verifyAccessJwt(token, teamDomain, aud) {
  if (!teamDomain || !aud) throw new Error("Access not configured (ACCESS_TEAM_DOMAIN / ACCESS_AUD)");
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("malformed token");

  const header = decodeJson(parts[0]);
  const payload = decodeJson(parts[1]);
  if (header.alg !== "RS256" || typeof header.kid !== "string") throw new Error("unexpected alg/kid");

  let key = (await loadKeys(teamDomain, false)).get(header.kid);
  if (!key) key = (await loadKeys(teamDomain, true)).get(header.kid); // key rotation
  if (!key) throw new Error("unknown signing key");

  const valid = await crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    key,
    b64urlToBytes(parts[2]),
    new TextEncoder().encode(`${parts[0]}.${parts[1]}`)
  );
  if (!valid) throw new Error("bad signature");

  const now = Math.floor(Date.now() / 1000);
  if (typeof payload.exp !== "number" || payload.exp < now - SKEW_S) throw new Error("expired");
  if (typeof payload.nbf === "number" && payload.nbf > now + SKEW_S) throw new Error("not yet valid");
  if (payload.iss !== teamDomain) throw new Error("wrong issuer");
  const auds = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!auds.includes(aud)) throw new Error("wrong audience");
  if (typeof payload.email !== "string" || !payload.email.includes("@")) throw new Error("no email claim");

  return { email: payload.email.trim().toLowerCase() };
}
