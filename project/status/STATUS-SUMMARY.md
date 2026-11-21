---
name: Gloss
tagline: "Adaptive French reading prototype (Le Comte de Monte-Cristo), formerly Multi-Read — hosted at gloss.minus1over12.com with D1 cross-device sync"
group: Personal
profile: Personal Project
priority: 21
status: "Live since 2026-10-16 (Cloudflare Worker + D1 + Access; Mac and iPhone sync confirmed). Rob is doing the fresh Chapter 1 reading pass in the hosted app before Chapter 2 is processed; PLAN checklist still lags 3 built items."
generated: 2026-10-17
questions_for_rob:
  - question: "Read-along audio: do the Google Cloud TTS setup in project/deploy/GOOGLE-TTS-SETUP.md, then give the project ID, a go-ahead to spend (5-passage trial or all of Chapter 1) and a voice name if you picked one."
    blocks: "The audio keeps the robotic macOS voice; the Google provider can't be added or trialled."
    asked: 2026-11-21
  - question: "Commit the read-along audio work on vscode now (prototype with the macOS voice), or wait for the Google voice? Also OK the drafted DECISIONS entry on audio?"
    blocks: "The audio prototype stays uncommitted in the working tree and DECISIONS.md has no audio entry."
    asked: 2026-11-21
  - question: "PROJECT.md non-goals still exclude sync, cloud infrastructure and storing learning data outside the browser, but Gloss now runs on Cloudflare with D1 sync. Update PROJECT.md to match DECISIONS 2026-10-12?"
    blocks: "PROJECT.md contradicts the live setup; agents can't reconcile it without your call."
    asked: 2026-10-17
  - question: "Run the milestone checkpoint (rewrite PLAN.md, prune TASKS.md)? PLAN.md and PROJECT.md still describe plain / guided / original; the levels are now Simple (A2), Advanced (B2), Original."
    blocks: "PLAN.md stays stale and the next milestone (reading pass at the new levels, then C02) isn't formally set."
    asked: 2026-10-17
  - question: "After reading Chapter 1 at the new levels: is Simple easy enough and Advanced hard enough, and is the paragraph 24 reading ('worth more than 25,000 francs') right?"
    blocks: "Chapter 2 can't be authored until the Chapter 1 levels and the adaptation brief are confirmed."
    asked: 2026-11-20
  - question: "Make word-help colours follow the labels (green = Learn, grey = Definition, blue = Name)? Today's colours are left over from the old modes."
    blocks: "Colours in the text and sidebar stay inconsistent with the labels."
    asked: 2026-11-21
  - question: "The 2026-11-20 deploy ran from vscode before the merge to main. Keep 'deploy only from a clean main', or allow deploy-then-merge?"
    blocks: "Nothing today; decides how the next deploy is run."
    asked: 2026-11-20
---
