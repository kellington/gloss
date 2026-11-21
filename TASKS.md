# Tasks

**Now** is 1–2 items. **Next** is what the agent proposes at the start of a
session. **Later** is a holding pen, not a backlog.

Keep Now + Next under ~10 items between them. Later can breathe, but anything
sitting there untouched across two milestones gets deleted, not re-filed.

When Done gets long, move it to `project/status/` history or drop it — git log
is the real record. Don't let this file become the project's second STATE.md.

## Now

Actively being worked on right now.

- [ ] Read Chapter 1 at the new levels (Simple, Advanced, Original) in the hosted app and note what is off in `project/ideas/feedback-c01.md`.

- [ ] Read-along audio: Rob does `project/deploy/GOOGLE-TTS-SETUP.md`; then add the `google` provider, trial voices on 5 passages, regenerate Chapter 1, commit. Steps in the diary (2026-11-21).

## Next

The next handful, ordered.

- [ ] Make word-help colours follow the labels (green Learn, grey Definition, blue Name), on Rob's OK.
- [ ] Review the reading notes; revise `c01.adaptations.json` and `scripts/adaptation-brief.md`; confirm the paragraph 24 reading.
- [ ] Author `c02.adaptations.json` to the brief and process Chapter 2 into `data/monte-cristo/c02.json` and `c02.js`.
- [ ] Milestone checkpoint: rewrite PLAN.md and reconcile PROJECT.md with the new levels and the live D1 setup.
- [ ] Decide whether the reader should show several paragraphs per screen.

## Later

Small near-term ideas that don't deserve an issue yet.

- [ ] Audio: offline caching, sentence highlight at the Simple level, R2 storage once there are many chapters.
- [ ] Add an in-app chapter picker once more than one chapter is processed.
- [ ] Optional: wire Workers Builds (deploy on push to `main`) — separate gate card.
- [ ] Add a small smoke-test checklist or browser test for file-mode reader interactions.

## Done (recent)

Cleared at each milestone.

- [x] Read-along audio prototype with the macOS `say` voice: generator script, Listen bar, Chapter 1 audio (2026-11-21, uncommitted).
- [x] Reader layout: side-by-side compare, compact level buttons, chapter/passage heading, Previous / Next under the text (2026-11-21, PR #7).
- [x] Replace Plain/Guided with Simple (A2) and Advanced (B2); rebuild Chapter 1; deploy and merge (2026-11-20, PR #5).
- [x] Deploy Gates 1–7: Gloss live at `gloss.minus1over12.com` with Mac ↔ iPhone sync and offline reading (2026-10-16).
- [x] Recreate `.venv` after the folder rename (2026-10-16).
- [x] Replace starter project docs with Multi-Read product docs.
- [x] Build first static adaptive-reader visual slice.
- [x] Add chapter-by-chapter processing workflow.
- [x] Process Chapter 1 from the Monte-Cristo EPUB.
- [x] Analyze Chapter 1 vocabulary against the available volume with spaCy, FLELex, and Lexique; generate vocabulary records and a difficulty map.
- [x] Rebuild Chapter 1 and the static reader with vocabulary guidance and selected Plain substitutions.

---

**Bigger than a session?** Most work doesn't need more than a line here. But if
an item will run for several sessions, has hard out-of-scope boundaries, or will
be driven by `/goal`, copy `optional/subtask.md` to `tasks/<slug>.md` and link
it from the section above:

```
- [ ] Auth migration → tasks/auth-migration.md
```

Don't create the `tasks/` folder until something actually needs it.
