# Gloss — deploy gate cards

Written by Gage on 2026-10-12. Plan reference: DECISIONS.md, 2026-10-12, "Host on Cloudflare with cross-device sync".
**Rob runs every gate, one at a time, in order, from `/Users/rob/Documents/GitHub/Rob/gloss`.**
Paste each gate's output back before moving to the next one.

**Run log — all 7 gates passed 2026-10-16** (deployed from `main` fcf3d48, Worker version `a810be38-99df-4a87-9ca8-1b7cfb977eaa`):
- Gate 2: D1 `gloss` created in WNAM, id `25a1dde7-35f0-4c48-8da1-ed2e56c138cf`.
- Gate 4 as built: app named `gloss` (lowercase), policy named `lecteurs` (Allow, Include Emails = Rob's address), Path empty, 1-month session, One-time PIN only. In the 2026 dashboard the AUD is under Access controls › Applications › gloss › **Additional settings** › "Application Audience (AUD) Tag" › Token (not Overview). Team domain confirmed `worldcities-trips` for account `fce41409…`.
- Gate 6: zone export diff showed only the SOA serial; the Worker-managed `gloss` record doesn't appear in exports. `/` and `/api/state` both 302 to Access with `kid` = AUD.
- Gate 7: Rob confirmed Mac ↔ iPhone sync, home-screen app and offline reading work.

Order matters:
1. The Access app (Gate 4) exists **before** the hostname is attached (Gate 6), so `gloss.minus1over12.com` is never publicly reachable.
2. `workers_dev: false` and `preview_urls: false` mean the first deploy (Gate 5) has no public URL at all.

| Gate | Action | Class |
|---|---|---|
| 1 | Check the wrangler login (log in only if needed) | credentials |
| 2 | Create the remote D1 database `gloss` | remote-data / billing (Free tier) |
| 3 | Apply migration 0001 to remote D1 | remote-data |
| 4 | Create the Cloudflare Access application + policy | Zero Trust config |
| 5 | First deploy of Worker `gloss` (no public hostname) | deploy |
| 6 | Attach the custom domain `gloss.minus1over12.com` | DNS/zone |
| 7 | End-to-end check on the Mac, then install on the iPhone | verify |

Between Gates 2/4 and the next gate, Gage writes two values into `wrangler.jsonc` (`database_id`, `ACCESS_AUD`) and re-runs the local checks below.

---

## Local rehearsal evidence (preconditions for all gates)

Collected 2026-10-12 with `npm run dev` (wrangler 4.136.3, local D1, `DEV_USER_EMAIL` passed via `--var`, localhost only).

- `npm run db:migrate:local`: `0001_learner_state.sql ✅`, "2 commands executed successfully".
- Assets served (200): `/`, `/src/app.js`, `/src/styles.css`, `/sw.js`, `/manifest.json`, `/assets/monte-cristo-cover.jpg`, `/assets/icons/icon-180.png`, `/data/monte-cristo/c01.json`.
- **Not served (404):** both `Books/*.epub`, `/Books/`, `/README.md`, `/CLAUDE.md`, `/DECISIONS.md`, `/STATE.md`, `/package.json`, `/wrangler.jsonc`, `/scripts/process_chapter.py`, `/project/ideas/feedback-c01.md`, `/optional/README.md`, `/migrations/…sql`, `/worker/index.js`, `/worker/access.js`, `/.claude/…`, `/data/monte-cristo/c01.js|tokens|vocabulary|README`, `/data/lexical-sources/`, `/.gitignore`, `/node_modules/…`.
- API: GET empty → `{"state":null,"updatedAt":0}`.
  - PUT t=1000 → `applied:true`.
  - PUT older t=500 → `applied:false`, state unchanged.
  - PUT t=2000 → `applied:true`.
  - Bad JSON 400, wrong content type 415, array state 400, future `updatedAt` 400, 300 KB body 413, DELETE 405, `/api/nope` 404.
- Prod auth path (Host header `gloss.minus1over12.com`): no token, forged email header only, or garbage JWT → **401** each time. Static `/` still 200.
- `worker/access.js` offline JWT test (local RSA key + local JWKS): a valid token is accepted. Wrong aud, expired, wrong iss, no email, unknown kid, tampered payload and empty AUD are all rejected.
- Headless two-device sync test of `src/app.js` against the local Worker: 13/13 pass.
  - Covered: adopt-on-load, debounced push, second device adopts, flush on background, re-pull on focus, reset clears remote and propagates.
  - Vault-dashboard and unreachable-host contexts stay local-only and don't throw.
- No existing data is migrated (start fresh, per the decision), so S1/S2 backup and restore-test are **N/A**: the remote DB starts empty.

Re-run before Gate 5 (Rob or Gage, local only): `npm run dev`, then in a second terminal
`curl -s -o /dev/null -w '%{http_code}\n' "http://localhost:8789/Books/el-ingenioso-hidalgo-don-quijote-de-la-mancha-2012.epub"` → `404`.

---

GATE 1: Check the wrangler login on this Mac            Plan ref: DECISIONS 2026-10-12
Class: credentials
Preconditions (evidence pasted): `npx wrangler --version` → `4.136.3` (local devDependency).
Blast radius: local auth token only. You're probably already logged in from pickem/ZouZou.
Do exactly:
  1. `npx wrangler whoami`
  2. Only if it says you're not authenticated: `npx wrangler login` (a browser opens; approve it).
Expect: `whoami` shows your email and the account that holds the `minus1over12.com` zone and the pickem/zouzou Workers.
Verify: the account ID shown matches the one in the dashboard URL when you open Workers & Pages.
Rollback card: trigger = wrong account shown · action = `npx wrangler logout`, then log in again with the right account · data-loss window = none · rehearsed = N/A.
Paste back: the `whoami` output. **Mask the account ID if you like. Never paste tokens.**

---

GATE 2: Create remote D1 database `gloss`                  Plan ref: DECISIONS 2026-10-12
Class: remote-data (new empty resource, D1 Free tier)
Preconditions: Gate 1 passed. Local migration evidence above.
Blast radius: creates one new, empty D1 database. Doesn't touch ZouZou's `zouzou` D1 or any other resource.
Do exactly: `npx wrangler d1 create gloss`
  If it asks whether to add the binding to your config, answer **No**. Gage edits `wrangler.jsonc` by hand so the comments and binding stay intact.
  (Location: default/automatic. ZouZou chose WNAM. Add `--location wnam` only if you want the same; the plan is silent on this.)
Expect: "Successfully created DB 'gloss'" plus a `database_id` UUID.
Verify: `npx wrangler d1 list` shows `gloss`.
Rollback card: trigger = wrong name/account · action = `npx wrangler d1 delete gloss` (empty DB, so no data loss) · who = Rob · data-loss window = none · rehearsed = N/A.
Paste back: the full create output (the `database_id` isn't a secret). **Gage then replaces `00000000-…` in `wrangler.jsonc`.**

---

GATE 3: Apply migration 0001 to remote D1                 Plan ref: DECISIONS 2026-10-12
Class: remote-data (schema only, empty DB)
Preconditions: Gate 2 output pasted; `wrangler.jsonc` `database_id` updated by Gage; local `npm run db:migrate:local` evidence above (same file, `migrations/0001_learner_state.sql`).
Blast radius: creates table `learner_state` in D1 `gloss` only.
Do exactly: `npm run db:migrate:remote`  (= `wrangler d1 migrations apply DB --remote`); answer **yes** when prompted.
Expect: a table listing `0001_learner_state.sql │ ✅`.
Verify (read-only): `npx wrangler d1 execute DB --remote --command "SELECT name FROM sqlite_master WHERE type='table' AND name='learner_state'"` → one row, `learner_state`.
Rollback card: trigger = migration error or wrong DB · action = `npx wrangler d1 delete gloss` and redo Gates 2–3 (no user data exists yet) · data-loss window = none (learner state starts fresh) · mechanism limit = N/A before first use · rehearsed = yes, locally (evidence above).
Paste back: the migrate output and the verify query output.

---

GATE 4: Create the Cloudflare Access application for gloss.minus1over12.com     Plan ref: DECISIONS 2026-10-12
Class: Zero Trust config (account-level, same team as pickem: `worldcities-trips`)
Preconditions: none from the earlier gates. Must be done **before Gate 6**.
Blast radius: adds one new self-hosted Access app scoped to the hostname `gloss.minus1over12.com` only.
- Doesn't change "Geeks Pick'em" or any other Access app, or the login page / OTP identity provider settings.
- Don't touch any existing policy or app while you're there.
Do exactly (dashboard, one step per line):
  1. dash.cloudflare.com › Zero Trust › Access › Applications › **Add an application** › **Self-hosted**.
  2. Application name = `Gloss`
  3. Session duration = `1 month` (same as pickem; fewer phone re-logins)
  4. Add public hostname: Subdomain = `gloss`, Domain = `minus1over12.com`, **Path = leave empty**. An empty path covers every path, including `/api/*`, `/sw.js` and `/manifest.json`. Don't add a second hostname or path.
  5. Identity providers: **One-time PIN** only (same as pickem). Leave "instant auth" on if offered.
  6. Policy: Add a policy › Name = `Rob only` › Action = **Allow** › Include › Selector = **Emails** › Value = `<your email address>` (exactly one email). No other include rules. **No Bypass or Service Auth policies.**
  7. Leave CORS settings off (the app is same-origin). Leave cookie settings at defaults.
  8. Save.
  9. Open the new app › **Overview** (or Basic information) › copy the **Application Audience (AUD) Tag**.
Expect: the app is listed with domain `gloss.minus1over12.com` and policy `Rob only`.
Verify: Access › Applications shows exactly one app for `gloss.minus1over12.com`. After Gate 6, Gate 7 step 1 proves the whole hostname is behind Access.
Rollback card: trigger = wrong hostname/policy · action = Access › Applications › Gloss › Delete, then recreate · data-loss window = none · note = if this app is deleted **after** Gate 6, the hostname is public. Static pages would be readable, but the API still fails closed (401: no valid JWT), so detach the domain first (Gate 6 rollback).
Paste back: the AUD tag (it's not a secret) and a confirmation that Path is empty and the only policy is "Rob only". **Gage then puts the AUD into `wrangler.jsonc` `ACCESS_AUD`.**
If the dashboard refuses to create an app for a hostname with no DNS record yet: **stop** and tell Alice. Don't attach the domain first.

---

GATE 5: First deploy of Worker `gloss` (no public hostname yet)    Plan ref: DECISIONS 2026-10-12
Class: deploy
Preconditions:
- Gates 2–4 done.
- `wrangler.jsonc` has the real `database_id` and `ACCESS_AUD`. Gage re-runs local checks after editing and pastes them.
- Asset 404 check above re-run.
- `git status` reviewed (deploy uses the working tree).
Blast radius:
- Creates Worker `gloss` in the account. `workers_dev: false` and `preview_urls: false`, so it's reachable on **no** hostname until Gate 6.
- Doesn't touch Workers `pickem` or `zouzou`. Doesn't touch DNS.
Do exactly: `npm run deploy`  (= `wrangler deploy`; wrangler first runs `node worker/build-public.mjs`, which copies only the allowlist into `public/`)
Expect:
- `[custom build] build-public: 10 files -> public/`, listing exactly the files in the evidence above.
- Then an upload of ~10 assets, bindings `env.DB (gloss)`, `env.ASSETS`, `ACCESS_TEAM_DOMAIN`, `ACCESS_AUD`, and a Version ID.
- **No `DEV_USER_EMAIL` binding.** If you see one, stop.
- Wrangler may warn that there are no routes or workers.dev URL. That's expected.
Verify: dashboard › Workers & Pages › `gloss` › Settings › Bindings shows D1 `gloss` and the two vars. Domains & Routes shows nothing yet.
Rollback card: trigger = wrong files in the build list, a `DEV_USER_EMAIL` binding, or bindings wrong · action = dashboard › Workers & Pages › gloss › Settings › Delete (nothing is public, so nothing is lost) · data-loss window = none · rehearsed = build/asset list rehearsed locally.
Paste back: the full deploy output.

---

GATE 6: Attach custom domain gloss.minus1over12.com to Worker `gloss`       Plan ref: DECISIONS 2026-10-12
Class: DNS/zone
Preconditions: Gate 4 done (the Access app exists for this exact hostname); Gate 5 deploy output pasted; `dig +short gloss.minus1over12.com` currently returns nothing.
Blast radius (zone `minus1over12.com` serves FOUR projects; this adds ONE record and changes none):
  - minus1over12.com apex/www (S3): unaffected. No apex/www record changes.
  - DuckBoard (`duckboard` CNAME → CloudFront + ACM validation CNAME): unaffected. Don't touch either record.
  - pick'em (`geeks-pickem` AAAA 100:: managed + Email Routing MX/TXT + Resend records): unaffected. Different name, no mail changes.
  - ZouZou (`zouzou` AAAA 100:: managed): unaffected. Different name.
  - New: `gloss` AAAA `100::` proxied, **managed by the Worker** (read-only in DNS). No zone-wide settings change: no HSTS, Always-Use-HTTPS, rate-limit or proxy toggles.
Do exactly (dashboard):
  1. Before: dash › minus1over12.com › DNS › Records › **Import and Export** › **Export**. Save as `~/gloss-backups/minus1over12.com-zone-before-gate6.txt` (outside git).
  2. dash › Workers & Pages › `gloss` › Settings › **Domains & Routes** › **Add** › **Custom domain**.
  3. Domain = `gloss.minus1over12.com` › Add domain.
  4. Wait until the status shows Active (certificate issued; usually a few minutes).
  5. After: export the zone again to `~/gloss-backups/minus1over12.com-zone-after-gate6.txt`.
Expect: the custom domain is listed as Active. DNS › Records shows a new `gloss` AAAA `100::` record marked as Worker-managed.
Verify:
  - `diff ~/gloss-backups/minus1over12.com-zone-before-gate6.txt ~/gloss-backups/minus1over12.com-zone-after-gate6.txt` → only `gloss` line(s) added (plus the SOA serial).
  - `dig +short gloss.minus1over12.com AAAA` → Cloudflare addresses.
  - `curl -sI https://gloss.minus1over12.com/` → `302` with `location:` on `worldcities-trips.cloudflareaccess.com` (Access is in front).
  - `curl -sI https://gloss.minus1over12.com/api/state` → also a `302` to cloudflareaccess.com. **Not** 200, and not 401 from the Worker.
  - `curl -sI "https://gloss.minus1over12.com/Books/el-ingenioso-hidalgo-don-quijote-de-la-mancha-2012.epub"` → 302 to Access, which is expected. The 404-behind-Access check happens in Gate 7.
Rollback card: trigger = any non-302 response without login, an unexpected diff line, or anything sibling-looking · action = Workers & Pages › gloss › Settings › Domains & Routes › `gloss.minus1over12.com` › Remove (this removes the managed record) · who = Rob · data-loss window = none (state in D1 is untouched) · mechanism limit = none · rehearsed = no (dashboard-only). The ZouZou/pickem precedent is the same mechanism.
Paste back: the diff output, the two `curl -sI` header blocks (status + location lines only), and the dig output.

---

GATE 7: End-to-end check on the Mac, then install on the iPhone           Plan ref: DECISIONS 2026-10-12
Class: verify (no infra change)
Preconditions: Gates 1–6 done.
Do exactly — Mac (Safari or Chrome):
  1. Open `https://gloss.minus1over12.com/` › Access login page "Rob's sites" › enter your email › enter the PIN from the email › the reader loads, titled "Gloss".
  2. In the same browser open `https://gloss.minus1over12.com/api/state` → `{"state":null,"updatedAt":0}` the first time (fresh start).
  3. Open `https://gloss.minus1over12.com/Books/el-ingenioso-hidalgo-don-quijote-de-la-mancha-2012.epub` → **404**. Also `/README.md` → 404.
  4. Back on the reader, press Next twice, wait ~3 s, reload `/api/state` → `passageIndex` is 2 and `updatedAt` is recent.
Do exactly — iPhone (Safari):
  5. Open `https://gloss.minus1over12.com/` in **Safari** › log in with email + PIN › the reader should open at passage 3 (synced from the Mac).
  6. Share button › **Add to Home Screen** › name shows "Gloss" with the cover icon › Add.
  7. Open Gloss from the Home Screen. It opens full-screen, with no Safari bar. iOS keeps a separate login for home-screen apps, so expect a **second** Access login here: email › open Mail › copy the PIN › switch back › paste.
  8. Press Next once, then switch to the Mac and focus the tab › within a few seconds it shows the same passage.
  9. Offline check: on the iPhone, open Gloss once while online, then turn on Airplane Mode, close it completely and reopen it › the chapter still loads from cache. Press Next (stays local) › turn Airplane Mode off › focus the app › the Mac picks up the change after its next focus.
Expect: every step above works.
Verify: the step 8 and 9 outcomes. On the Mac, `/api/state` shows the latest `updatedAt`.
Rollback card: trigger = **login loop inside the home-screen app** (step 7 never gets past Access) · action = delete the home-screen icon and read in a Safari tab instead (sync still works there). Gage can switch the manifest `display` to `browser` and drop `apple-mobile-web-app-capable`, so the icon opens Safari. Code-only change, then redeploy via a fresh Gate 5 card · data-loss window = none · rehearsed = no (needs a real iPhone + Access).
Paste back: pass/fail per step, and the `/api/state` JSON from step 4.

---

## Name map — every place "gloss" (and the old app name) appears

Product name **Gloss** (decided 2026-10-12; was placeholder `reader`). GitHub repo `kellington/gloss`; local folder `Rob/gloss` (renamed 2026-10-12).

| Where | Value | Notes |
|---|---|---|
| `wrangler.jsonc` `name` | `gloss` | Worker name; must equal the dashboard Worker name |
| `wrangler.jsonc` `d1_databases[0].database_name` | `gloss` | remote D1 name (Gate 2) |
| `wrangler.jsonc` header comment | "gloss" | — |
| `sw.js` `CACHE_VERSION` | `gloss-v1` | bump the suffix when the precache list changes |
| `manifest.json` `name` / `short_name` | `Gloss` | home-screen label |
| `index.html` `<title>`, `apple-mobile-web-app-title`, `<h1 id="title">` | `Gloss` | h1 is replaced by the book title once the chapter loads |
| `worker/index.js`, `sw.js` header comments | "Gloss" | cosmetic |
| `package.json` `description` | "Gloss: …" | `name` stays `multi-read` (folder name) |
| Cloudflare: Worker, D1, Access app name, custom domain | `gloss`, `gloss`, `Gloss`, `gloss.minus1over12.com` | created in Gates 2/4/5/6; renaming later = new resources + a fresh gate set |
| This file | `gloss` throughout | — |

Deliberately **not** renamed:
- localStorage keys `multi-read-v0.1` / `multi-read-v0.1-sync`. Renaming them would orphan existing vault-dashboard progress.
- npm scripts use the binding `DB`, not the database name, so they're rename-proof.
- (Repo folder and vault-dashboard path moved to `Rob/gloss` / `/gloss/` on 2026-10-13.)

## Not covered by these gates
- Workers Builds (CI deploy on push) is not set up. Deploys are manual (Gate 5 pattern). Wiring Builds is a separate card if wanted.
- No zone-wide settings (HSTS, Always-Use-HTTPS, rate limiting) are proposed.
