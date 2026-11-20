# Adaptation brief: Simple (A2) and Advanced (B2)

This is the prompt used to author `data/monte-cristo/cNN.adaptations.json`.
Give it to the model together with the chapter's numbered source paragraphs.
`scripts/process_chapter.py` then merges the result with the Original text and
checks each level against FLELex (`cNN.level-check.json`).

The reader has three levels. Original is the EPUB text, untouched. The other
two are written, paragraph by paragraph, so that switching level keeps the
reader at the same place in the story.

## Simple — A2

Write the most basic version of the story. The reader should get through it
without difficulty and without help.

- One Simple text for every source paragraph, in the same order. Keep who
  speaks, what happens and what is decided. Drop description, nautical detail,
  place names that do not matter later and rhetorical flourishes.
- Narrate in the present tense. In dialogue use the present, passé composé,
  imparfait and futur proche only. No passé simple, no subjunctive, no
  conditional, no inversion beyond fixed questions (`Avez-vous…?`).
- Short sentences, one idea each. Prefer two short sentences to one clause
  with `qui`, `dont` or a participle.
- Everyday A1–A2 words: `bateau`, not `navire` or `bâtiment`; `donner`, not
  `remettre`; `beaucoup de gens`, not `la foule`.
- **At most 20 words in the whole chapter may need support.** Choose the ones
  the story cannot do without and that return later in the book (`armateur`,
  `équipage`, `second`). List them under `vocabulary.simple` with a plain
  English meaning and a one-line note. Every other content word must be A2 or
  lower, a name, or a transparent English cognate listed in `transparentWords`.
- Make implicit things explicit when a beginner would miss them (who "il" is,
  why a flag is lowered), but do not add events.

## Advanced — B2

Rewrite the full chapter in modern, natural B2 French.

- Keep every event, every line of dialogue and the tone. Nothing is cut.
- Keep the passé simple and Dumas's sentence shape where a B2 reader can
  follow it. Replace the imperfect subjunctive, archaic turns (`ne … point`,
  `eût fait`) and obsolete senses with their modern equivalents.
- Replace rare nautical jargon with general words (`huniers` → `voiles
  hautes`), but keep the recurring vocabulary of the book (`navire`,
  `armateur`, `matelot`, `mouillage`, `cargaison`).
- List under `vocabulary.advanced` every word a B2 reader may not know:
  anything above B2, nautical terms that remain, idioms, names and places. Use
  a string to reuse an entry from the source-text glossary in
  `process_chapter.py`; use an object (`headword`, optional `forms`, `meaning`,
  `note`) for a new one. Meanings are for this context, not dictionary lists.

## Check and revise

Run the processor. It prints, per level, the words FLELex places above the
target that are not supported, and writes them to `cNN.level-check.json`.

- Simple must end at **0 above A2** with **20 or fewer supported words**: reword
  the sentence, or swap the word into the 20.
- Advanced: add remaining flagged words to `vocabulary.advanced` or reword.
- `transparentWords` is for English cognates (`danger`, `cabine`) and for
  checker misses on basic words (`fils`, `mois`). Keep it short and honest.
