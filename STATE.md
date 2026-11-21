# State

*Last updated: 2026-11-21*

## Summary

Gloss is live at `https://gloss.minus1over12.com/` (Cloudflare Worker + D1 + Access, PWA). On 2026-11-19/20 the three reading levels were replaced: **Simple (A2)**, **Advanced (B2)** and **Original** (DECISIONS 2026-11-20). Chapter 1 is rebuilt with authored A2 and B2 text for all 141 paragraphs and a separate vocabulary list per level. Saved progress from the old levels is discarded; Rob is restarting the book from passage 1. Deployed 2026-11-20 and merged in PR #5; Rob confirmed it looks good on the hosted site. On 2026-11-21 the reader layout was reworked (PR #7) and redeployed from `main` (Worker version `6dfe2b60…`). Later on 2026-11-21 a read-along audio prototype was built locally: it is **not committed and not deployed**, and the macOS voice it uses is too robotic, so Rob chose Google Cloud TTS as the next voice.

## What's working

- Hosted app `https://gloss.minus1over12.com/` behind Access (policy `lecteurs`); D1 `gloss` (WNAM) holds learner state; Worker version `6dfe2b60…` = `main` d5a4267.
- Static browser app in `index.html`, `src/app.js`, and `src/styles.css`. Levels: Simple (A2, highlighted), Advanced (B2, highlighted), Original (unmarked). Sidebar vocabulary and word help follow the level; labels are Learn / Definition / Name.
- Chapter 1 data in `data/monte-cristo/c01.json` (schema v3). Authored source is `c01.adaptations.json`; the authoring prompt is `scripts/adaptation-brief.md`.
- `scripts/process_chapter.py` merges the adaptations with the EPUB text, enforces the 20-word Simple cap and writes `c01.level-check.json` (FLELex check per level). Result: Simple 0 words above A2 outside its 20 supported words; Advanced 1 flagged word, inside a glossed idiom.
- Learner state has a version (`STATE_VERSION = 2` in `src/app.js`); older saved state, local or in D1, is replaced with a fresh one.
- Reader layout: compact one-row level buttons on the phone; heading "Chapter N. Passage X of Y"; Previous / Next side by side under the text, returning the view to the heading; Compare original shows the source beside the passage on wide screens (1100px and up) and under it on narrow ones, and is hidden in Original.
- Read-along audio, local working tree only: `scripts/generate_audio.py` makes one clip per passage per level plus `c01.audio.json` with sentence timings; the reader has a Listen bar (play/pause, speed, sentence highlight, auto-advance, tap a sentence to replay). Chapter 1 is generated with the macOS voice Thomas (423 clips, 52 min, 18 MB). Checked in Chrome on the Mac at `http://localhost:8789/` with the sound muted.
- Feedback scratch file in `project/ideas/feedback-c01.md`; level notes in `data/monte-cristo/c01.simplification-notes.md`.

## In progress

- Rob's fresh read of Chapter 1 at the new levels in the hosted app. Collect notes in `project/ideas/feedback-c01.md`, then revise `c01.adaptations.json` or the brief before authoring Chapter 2.

- Read-along audio: waiting on Rob to do `project/deploy/GOOGLE-TTS-SETUP.md` (Google Cloud project, billing, `gcloud` login). Then add a `google` provider to `scripts/generate_audio.py`, trial 5 passages in two or three French voices, regenerate Chapter 1, and commit. Ordered steps are in the diary, 2026-11-21 "Audio next steps".

## Known issues

- Audio: the `say` voice is very robotic (Rob, 2026-11-21). Nobody has listened in Safari or on the iPhone. Audio is not cached for offline use. Simple has one block per passage, so no sentence highlight there.
- Audio and its manifest are gitignored: a deploy only includes them if they were generated on the deploying Mac first. Without them the Listen bar is hidden.
- `say` can stall when several run at once (one run hung about 5 minutes). A timeout and retry were added; that path has not fired since.

- Simple and Advanced are authored by Claude in-session and checked only against a word list (FLELex). Grammar level and readability have not been reviewed by Rob or a French teacher.
- Paragraph 24 (*ne point escompter pour 25,000 francs de bénéfice*) is read as "worth more than 25,000 francs"; unconfirmed.
- The reader pages one paragraph at a time (141 passages in Chapter 1).
- Word-help colours are a leftover of the old teach / simplify / light-gloss classes and do not match the Learn / Definition / Name labels. Proposed: green = Learn, grey = Definition, blue = Name; waiting on Rob.
- The 2026-11-21 layout was checked at phone width in a desktop browser, not on the iPhone.
- The learner model is naive: lookup and translation counts are rough friction signals.
- Frequency counts cover the 55-chapter available volume, not the entire novel. `c01.difficulty-map.json` still describes the old B1-ish teach/simplify rules.
- No sentence translations; the reader hides `Show meaning`.
- The installed iPhone app was not tested after the 2026-11-20 deploy.

## Business snapshot

No separate business workstream yet.

## Environment / setup

Only what's non-obvious about the dev loop. Stable commands and stack facts
belong in CLAUDE.md's Project Reference, not here — this file is rewritten
constantly and reference material rots in it.

Canonical app URL: `https://gloss.minus1over12.com/` (live 2026-10-16). Dev/fallback: vault dashboard `http://127.0.0.1:8765/gloss/` (local-only, no sync). Redeploy = `npm run deploy` from a clean `main`, Rob's go-ahead each time. `.venv` recreated 2026-10-16 (uv, Python 3.13, `requirements-processing.txt`, `fr_core_news_sm`).

The Knowledge vault dashboard serves this repo from `/Users/rob/Documents/GitHub/Rob/Knowledge` via LaunchAgent `com.robkellington.vault-dashboard` on `127.0.0.1:8765`. `python3 -m http.server 5173` is only a fallback. D1 is the real progress store; dashboard `localStorage`, `file://` and `localhost:5173` state are throwaway.

## Open questions

- Which Google voice? Decide after the 5-passage trial.
- Audio storage at volume: about 18 MB per chapter in Worker static assets is fine for a few chapters; R2 is the likely home for all 55.
- Should audio work offline in the installed app?
- PROJECT.md does not mention audio; add it to the success criteria or scope at the milestone checkpoint?
- Does Simple read without difficulty, and is Advanced clearly between Simple and Dumas? (Rob's reading pass.)
- Should the reader show more than one paragraph per screen?
- Drop the "Chapter 1 is ready for a fresh read…" line under the heading to save room?
- Are sentence meanings still wanted now that Simple exists?
- PLAN.md drift: the v0.1 milestone and its Definition of Done still describe plain / guided / original and a B1-ish target; three built items are unchecked. Needs the milestone checkpoint.
- PROJECT.md drift: success criteria name plain, guided and original; Non-Goals exclude sync and cloud infrastructure, contradicting the live D1 setup (DECISIONS 2026-10-12). Asked in STATUS-SUMMARY.
- The 2026-11-20 deploy ran from `vscode` before the merge, against "deploy from a clean `main`" (DECISIONS 2026-10-16). `main` now matches. Keep the rule, or allow deploy-then-merge?

## Resolved this session

- 2026-11-21: Read-along audio prototype built and smoke-tested locally (uncommitted). Anthropic has no text-to-speech API; Google Cloud TTS chosen; setup steps written to `project/deploy/GOOGLE-TTS-SETUP.md`.
- 2026-11-21: Compare original fixed (it rendered off-screen and looked dead); level buttons, heading and Previous / Next reworked (9dec207, PR #7); deployed from `main`.
- 2026-11-20: Levels replaced with Simple (A2) / Advanced (B2) / Original; Chapter 1 rebuilt; reader and processor updated (879c311). Deployed, then pushed and merged to `main` (PR #5) on Rob's instruction.
- 2026-11-20: The feedback items on unclear "Eased in Plain" / "Light gloss" labels and unhighlighted *gréé* / *arrimé* are addressed.
- 2026-10-17 (unattended refresh): status page and STATUS-SUMMARY refreshed; merged in PR #4.
