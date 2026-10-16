# Decisions

Append-only log of meaningful decisions. Never edit past entries — if a
decision is reversed, add a new entry that references the old one.

## How to write an entry

```
## [YYYY-MM-DD] — Short title

**Decision:** What we decided, in one sentence.
**Why:** The reasoning that drove it.
**Trade-off:** What we're giving up.
**Impact:** What changes because of this (code, scope, process).
```

Keep entries short. If you need more than ~8 lines, you're probably
writing a design doc, which belongs elsewhere.

---

## [2026-09-28] — Keep v0.1 static and local

**Decision:** Build the first reader slice as static HTML, CSS, and vanilla JavaScript.
**Why:** The interesting question is the adaptive reading loop, not framework setup or infrastructure.
**Trade-off:** No production app architecture yet.
**Impact:** The prototype runs with `python3 -m http.server 5173` and stores learner events only in browser `localStorage`.

## [2026-09-28] — Serve through vault dashboard

**Decision:** Treat `http://127.0.0.1:8765/multi-read/` as the canonical local app URL.
**Why:** The Knowledge vault dashboard provides an always-on HTTP origin and avoids `file://` browser limits.
**Trade-off:** The dashboard is read-only static hosting, so app writes still stay in `localStorage`.
**Impact:** The app can fetch chapter JSON directly; `localStorage` under `127.0.0.1:8765` is the real progress store.

## [2026-10-12] — Host on Cloudflare with cross-device sync

**Decision:** Host the reader on a Cloudflare Worker (static assets) behind Cloudflare Access, with learner state synced through a small Worker API backed by D1, on a custom subdomain. Supersedes the vault-dashboard entry above as the canonical reading environment.
**Why:** Rob reads more on his iPhone away from the Mac; the Mac-local origin can't reach the phone or sync progress.
**Trade-off:** Adds infrastructure (wrangler dev dependency, a deploy step, DNS), and breaks the "no backend" purity of v0.1. Sync is last-write-wins on one state blob, which is fine for a single reader and wrong for concurrent edits.
**Impact:** `localStorage` becomes a cache; D1 is the progress store. Static assets must exclude `Books/`, `scripts/`, `project/` and protocol files. Existing local progress is not migrated (start fresh). `127.0.0.1:8765/multi-read/` becomes a dev/fallback context.

## [2026-10-12] — Rename the product to Gloss

**Decision:** Rename Multi-Read to **Gloss**, hosted at `gloss.minus1over12.com`; GitHub repo renamed to `kellington/gloss`.
**Why:** "Multi-Read" was dull; a gloss is a note explaining a word in context, which is the core interaction. Short enough to type on a phone.
**Trade-off:** Rename churn across docs, the vault notes and the workspace README. The local folder stays `Rob/multi-read/` for now, so the vault-dashboard dev URL `127.0.0.1:8765/multi-read/` is unchanged.
**Impact:** Worker, D1 database and subdomain are named `gloss`. Project docs say Gloss; Knowledge vault and workspace references are updated via handoffs.

## [2026-10-12] — Rename local folder to Rob/gloss

**Decision:** Move the repo folder from `Rob/multi-read/` to `Rob/gloss/`, with a temporary symlink `Rob/multi-read → gloss`.
**Why:** Rob wants the name consistent everywhere; supersedes "folder stays for now" in the rename entry above.
**Trade-off:** The vault dashboard hard-codes `../multi-read`; the symlink keeps `127.0.0.1:8765/multi-read/` working until the Knowledge session moves the route. `.venv` has absolute paths and must be recreated.
**Impact:** Open future sessions in `Rob/gloss/`. Remove the symlink once the vault route points at `../gloss`.

## [2026-10-16] — Deploy from main; Gloss live

**Decision:** Gloss is live at `gloss.minus1over12.com`. Deploys run `npm run deploy` from a clean, committed `main`; the `VScode-&-Codex` work branch is retired.
**Why:** The deployed Worker should match a commit on the default branch; the branch was already fully merged (PR #3).
**Trade-off:** Deploys stay manual (no Workers Builds), so each one needs Rob's go-ahead and a git-status check.
**Impact:** Vault-dashboard URL is dev/fallback only. Access app `gloss` / policy `lecteurs` and D1 `gloss` (WNAM) are the production resources.
