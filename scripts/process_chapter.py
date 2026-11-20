#!/usr/bin/env python3
import argparse
import html
import json
import re
import zipfile
from html.parser import HTMLParser
from pathlib import Path

from vocabulary import (
    analyze_volume,
    build_records,
    chapter_tokens,
    chapter_sources,
    difficulty_map,
    enrich_glossary,
    level_check,
    load_flelex,
    load_lexique,
    load_lexique_forms,
    load_nlp,
    loose_fold,
)


GLOSSARY = {
    "vigie": ("lookout; watch post", "Can mean the watcher or the lookout position."),
    "trois-mâts": ("three-masted ship", "A sailing vessel with three masts."),
    "Pharaon": ("the ship's name", "Dantes is second mate on this vessel."),
    "Smyrne": ("Smyrna, now Izmir in Turkey", "One of the Pharaon's eastern Mediterranean ports."),
    "Trieste": ("a port city on the Adriatic", "Another stop on the Pharaon's route."),
    "Naples": ("Naples", "The last named port before Marseille."),
    "pilote côtier": ("coastal pilot", "A local specialist who guides ships through harbor waters."),
    "aussitôt": ("immediately, at once", "Often marks quick action in narration."),
    "château d'If": ("fortress on an island off Marseille", "This place becomes important later in the novel."),
    "navire": ("ship, vessel", "A more formal word than bateau."),
    "bâtiment": ("vessel, ship", "In this chapter it is nautical, not a building."),
    "armateur": ("shipowner", "A person or company that equips and operates merchant ships."),
    "curieux": ("curious onlookers", "As a noun here, people who gather to watch."),
    "mouillage": ("anchoring; anchorage", "The act or place of anchoring a ship."),
    "haubans": ("stays, rigging cables", "Cables that support a mast."),
    "beaupré": ("bowsprit", "A spar projecting from the front of a sailing ship."),
    "huniers": ("topsails", "Sails set above the lower sails."),
    "foc": ("jib", "A triangular sail near the front of a ship."),
    "brigantine": ("spanker sail", "A fore-and-aft sail on the after mast."),
    "allure": ("bearing, pace, manner of moving", "Here it describes the ship's slow, sad entrance."),
    "bord": ("on board", "A bord means aboard a ship."),
    "barque": ("small boat", "A small craft used in the harbor."),
    "anse": ("cove, small bay", "A coastal indentation."),
    "muraille": ("side, wall", "Here, the side of the ship."),
    "chargement": ("cargo", "The goods carried by the ship."),
    "cargaison": ("cargo", "The load of goods on a vessel."),
    "fièvre cérébrale": ("brain fever", "An older expression for a severe fever affecting the brain."),
    "matelots": ("sailors", "Members of the ship's crew."),
    "écoutes": ("sheets", "Ropes used to control sails."),
    "drisses": ("halyards", "Ropes used to raise sails."),
    "cargues": ("clewlines or brails", "Ropes used to gather in sails."),
    "hamac": ("hammock", "Used here in the burial at sea description."),
    "boulet": ("cannonball", "Used as a weight in the burial at sea."),
    "escompter": ("to discount; to reckon on", "Here, to count a voyage's profit in advance."),
    "comptable": ("accountant, purser", "Danglars's role aboard the Pharaon."),
    "obséquieux": ("obsequious", "Overly deferential to superiors."),
    "subordonnés": ("subordinates", "People lower in rank."),
    "relâche": ("stopover", "A pause in a voyage."),
    "douane": ("customs", "Officials who inspect goods entering port."),
    "consigne": ("port authority office", "Here, harbor administration."),
    "Canebière": ("La Canebiere", "A famous street in Marseille."),
    "Dantès": ("Edmond Dantès", "The young sailor serving aboard the Pharaon."),
    "Edmond": ("Edmond Dantès", "The young sailor at the center of the story."),
    "Morrel": ("Morrel", "The shipowner who trusts Dantès."),
    "Danglars": ("Danglars", "The ship's accountant, uneasy about Dantès."),
    "Leclère": ("Captain Leclère", "The Pharaon's captain, whose death is reported in this chapter."),
    "Marseille": ("Marseille", "The French port where the Pharaon returns."),
    "capitaine": ("captain", "The commander of a ship."),
    "équipage": ("crew", "The people working on a ship."),
    "empereur": ("emperor", "In this story, Napoleon."),
    "lettre": ("letter", "Letters and messages drive several later plot turns."),
    "espérance": ("hope", "Here, Dantès's hope of becoming captain."),
    "pavillon": ("flag", "The ship's flag is lowered to mark mourning."),
    "douaniers": ("customs officers", "Officials checking the ship's cargo and papers."),
    "besogne": ("work, task", "A familiar word for work; here, part of a decision has been made."),
    "tristesse": ("sadness", "The mood on board after the captain's death."),
    "résolution": ("determination", "Dantès's calm resolve in the face of danger."),
    "interlocuteur": ("person being spoken to", "The person in the conversation with Dantès."),
    "rames": ("oars", "The blades used to propel the small boat."),
    "gréé": ("rigged", "Fitted with masts, ropes and sails."),
    "arrimé": ("stowed, loaded", "With its cargo packed and secured."),
}

LEVELS = ("simple", "advanced", "original")
SIMPLE_SUPPORT_LIMIT = 20  # words per chapter that may need support in Simple

GLOSSARY_FORMS = {
    "trois-mats": ["trois-màts"],
    "pilote-cotier": ["pilote côtier"],
    "chateau-d-if": ["château d’If", "château d'If"],
    "ecoutes": ["écoutes"],
}


class ChapterParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_p = False
        self.current = []
        self.paragraphs = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "p" and attrs.get("class") == "p-indent":
            self.in_p = True
            self.current = []

    def handle_endtag(self, tag):
        if tag == "p" and self.in_p:
            text = normalize_text("".join(self.current))
            if text:
                self.paragraphs.append(text)
            self.in_p = False
            self.current = []

    def handle_data(self, data):
        if self.in_p:
            self.current.append(data)


def normalize_text(value):
    value = html.unescape(value)
    value = value.replace("\u00a0", " ")
    value = re.sub(r"\s+", " ", value)
    value = re.sub(r"\s+([,.;:!?])", r"\1", value)
    value = value.strip()
    value = re.sub(r"^LE\b", "Le", value)
    value = value.replace("LE 24 février 1815", "Le 24 février 1815")
    return value


def split_sentences(paragraph):
    if paragraph.startswith("—"):
        return [paragraph]
    parts = re.split(r"(?<=[.!?])\s+(?=[A-ZÀ-Ý—])", paragraph)
    sentences = [part.strip() for part in parts if part.strip()]
    return sentences or [paragraph]


def adapted_text(value):
    """Normalise authored Simple/Advanced text to the same conventions as the source."""
    value = normalize_text(value.replace("'", "’"))
    return value.replace("« ", "«\u00a0").replace(" »", "\u00a0»")


def load_adaptations(path, paragraph_count):
    data = json.loads(Path(path).read_text(encoding="utf-8"))
    rows = data["paragraphs"]
    if [row["n"] for row in rows] != list(range(1, paragraph_count + 1)):
        raise SystemExit(f"{path}: expected paragraphs 1..{paragraph_count} in order")
    for row in rows:
        for level in ("simple", "advanced"):
            if not row.get(level, "").strip():
                raise SystemExit(f"{path}: paragraph {row['n']} has no {level} text")
            row[level] = adapted_text(row[level])
    if len(data["vocabulary"]["simple"]) > SIMPLE_SUPPORT_LIMIT:
        raise SystemExit(f"{path}: Simple supports {len(data['vocabulary']['simple'])} words; the limit is {SIMPLE_SUPPORT_LIMIT}")
    return data


def apostrophe_variants(forms):
    out = []
    for form in forms:
        out += [form, form.replace("'", "’"), form.replace("’", "'")]
    return list(dict.fromkeys(out))


def glossary_keys_for(text, entries=None, level=None):
    lower = loose_fold(text)
    keys = []
    for key, entry in (entries or GLOSSARY).items():
        if level and level not in entry.get("levels", ()):
            continue
        forms = [key] if isinstance(entry, tuple) else [entry["headword"], *(entry.get("forms") or [])]
        for form in forms:
            pattern = r"(?<!\w)" + re.escape(loose_fold(form)) + r"(?!\w)"
            if re.search(pattern, lower):
                keys.append(slug(key))
                break
    return keys


def slug(value):
    value = value.lower()
    value = value.replace("è", "e").replace("é", "e").replace("ê", "e")
    value = value.replace("à", "a").replace("â", "a")
    value = value.replace("î", "i").replace("ï", "i")
    value = value.replace("ô", "o")
    value = value.replace("ù", "u").replace("û", "u")
    value = value.replace("ç", "c")
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def sentence_objects(passages, prefix, source=""):
    return [
        {
            "id": f"{prefix}-s{index + 1:02d}",
            "text": sentence,
            "translation": "",
            "source": source,
        }
        for index, sentence in enumerate(passages)
    ]


def build_glossary(adaptations, records, chapter_text, later_text):
    glossary = {}
    for key, (meaning, note) in GLOSSARY.items():
        glossary[slug(key)] = {"headword": key, "meaning": meaning, "note": note, "levels": ["original"]}
    enrich_glossary(glossary, records, chapter_text, later_text)
    for key, forms in GLOSSARY_FORMS.items():
        glossary[key]["forms"] = forms if key == "ecoutes" else list(dict.fromkeys(glossary[key]["forms"] + forms))

    # Level vocabulary: a string reuses a source-text entry; an object defines a new one.
    authored = {}
    for level in ("simple", "advanced"):
        for item in adaptations["vocabulary"][level]:
            if isinstance(item, str):
                key = slug(item)
                if key not in glossary:
                    raise SystemExit(f"{level} vocabulary: no glossary entry for {item!r}")
            else:
                key = slug(item["headword"])
                if key not in glossary and key not in authored:
                    authored[key] = {
                        "headword": item["headword"], "meaning": item["meaning"], "note": item["note"],
                        "levels": [], "authoredForms": [item["headword"], *item.get("forms", [])],
                    }
            entry = glossary.get(key) or authored[key]
            if level not in entry["levels"]:
                entry["levels"].append(level)
    enrich_glossary(authored, records, chapter_text, later_text)
    for entry in authored.values():
        # Authored entries match only the forms written for them, never a lemma's whole family.
        entry["forms"] = entry.pop("authoredForms")
        if entry["headword"][:1].isupper():
            entry["properNoun"], entry["classification"] = True, "ignore_or_gloss"
    glossary.update(authored)
    for entry in glossary.values():
        entry["forms"] = apostrophe_variants(entry["forms"])
        entry["levels"] = [level for level in LEVELS if level in entry["levels"]]
    return glossary


def build_chapter(epub, chapter_path, chapter_id, chapter_number, title, records, volume_chapters, source_info, adaptations):
    with zipfile.ZipFile(epub) as archive:
        source_html = archive.read(chapter_path).decode("utf-8")

    parser = ChapterParser()
    parser.feed(source_html)
    rows = adaptations["paragraphs"]
    levels = adaptations["levels"]

    chapter_text = " ".join(parser.paragraphs)
    later_text = " ".join(
        paragraph
        for number, _, paragraphs in volume_chapters
        if number > chapter_number
        for paragraph in paragraphs
    )
    glossary = build_glossary(adaptations, records, chapter_text, later_text)

    passages = []
    for index, paragraph in enumerate(parser.paragraphs, start=1):
        passage_id = f"{chapter_id}-p{index:03d}"
        row = rows[index - 1]
        original = split_sentences(paragraph)
        units = {
            "simple": [row["simple"]],  # short sentences read better as one block
            "advanced": split_sentences(row["advanced"]),
            "original": original,
        }
        sources = {"simple": "authored-a2", "advanced": "authored-b2", "original": "original"}
        representations = {}
        for level in LEVELS:
            representations[level] = {
                **levels[level],
                "sentences": sentence_objects(units[level], f"{passage_id}-{level}", sources[level]),
                "vocabularyKeys": glossary_keys_for(" ".join(units[level]), glossary, level),
            }
        passages.append({
            "id": passage_id,
            "sequence": index,
            "title": title,
            "book": "Le Comte de Monte-Cristo",
            "author": "Alexandre Dumas",
            "sourceEpub": str(epub),
            "sourceChapter": chapter_path,
            "sourceParagraph": index,
            "sourceNote": "Original is the EPUB chapter text. Simple (A2) and Advanced (B2) are authored rewrites from the chapter's adaptations file.",
            "representations": representations,
            "originalComparison": original,
        })

    return {
        "schemaVersion": 3,
        "bookId": "monte-cristo",
        "chapterId": chapter_id,
        "chapterNumber": chapter_number,
        "title": title,
        "status": "levels-a2-b2-original-first-pass",
        "nextChapterId": f"c{chapter_number + 1:02d}",
        "source": {
            "epub": str(epub),
            "file": chapter_path,
            "paragraphCount": len(parser.paragraphs),
            "adaptations": f"{chapter_id}.adaptations.json",
        },
        "levels": list(LEVELS),
        "processingNotes": [
            "Original retains the EPUB source text.",
            "Simple is an authored A2 retelling, paragraph by paragraph, with at most 20 supported words in the chapter.",
            "Advanced is an authored B2 rewrite that keeps every event and line of dialogue.",
            "Each level has its own vocabulary: representations carry vocabularyKeys and glossary entries list their levels.",
            "Recurrence counts use the 55-chapter available volume, not the complete novel.",
            "Sentence translations are blank.",
        ],
        "vocabularyAnalysis": source_info,
        "passages": passages,
        "glossary": glossary,
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--epub", required=True)
    parser.add_argument("--chapter-path", required=True)
    parser.add_argument("--chapter-id", required=True)
    parser.add_argument("--title", required=True)
    parser.add_argument("--out-json", required=True)
    parser.add_argument("--out-js", required=True)
    parser.add_argument("--flelex", type=Path, help="Local FLELex TSV/CSV source (optional)")
    parser.add_argument("--lexique", type=Path, help="Local Lexique TSV/CSV source (optional)")
    parser.add_argument("--out-vocabulary", type=Path, help="Defaults beside --out-json")
    parser.add_argument("--out-difficulty-map", type=Path, help="Defaults beside --out-json")
    parser.add_argument("--out-tokens", type=Path, help="Defaults beside --out-json")
    parser.add_argument("--adaptations", type=Path, help="Authored Simple/Advanced text and vocabulary. Defaults beside --out-json")
    parser.add_argument("--out-level-check", type=Path, help="Defaults beside --out-json")
    args = parser.parse_args()

    chapter_number = int(args.chapter_id.removeprefix("c"))
    volume_chapters = chapter_sources(Path(args.epub), ChapterParser)
    nlp = load_nlp()
    counts, forms, token_count = analyze_volume(volume_chapters, nlp)
    flelex = load_flelex(args.flelex)
    lexique = load_lexique(args.lexique)
    records = build_records(volume_chapters, counts, forms, flelex, lexique, chapter_number)
    chapter_paragraphs = next(paragraphs for number, _, paragraphs in volume_chapters if number == chapter_number)
    tokens = chapter_tokens(chapter_paragraphs, args.chapter_id, nlp)
    source_info = {
        "volumeChapters": len(volume_chapters),
        "analyzedContentTokens": token_count,
        "tokenizer": "spaCy fr_core_news_sm",
        "flelex": args.flelex.name if args.flelex else None,
        "lexique": args.lexique.name if args.lexique else None,
        "vocabularyFile": f"{args.chapter_id}.vocabulary.json",
        "difficultyMapFile": f"{args.chapter_id}.difficulty-map.json",
        "tokensFile": f"{args.chapter_id}.tokens.json",
        "levelCheckFile": f"{args.chapter_id}.level-check.json",
    }
    out_json = Path(args.out_json)
    adaptations_path = args.adaptations or out_json.with_name(f"{args.chapter_id}.adaptations.json")
    adaptations = load_adaptations(adaptations_path, len(chapter_paragraphs))
    chapter = build_chapter(Path(args.epub), args.chapter_path, args.chapter_id, chapter_number, args.title, records, volume_chapters, source_info, adaptations)

    # Check each authored level against its CEFR target (FLELex), outside its supported words.
    form_lemmas = load_lexique_forms(args.lexique)
    checks = {}
    for level in ("simple", "advanced"):
        supported = [
            form for entry in chapter["glossary"].values() if level in entry["levels"]
            for form in [entry["headword"], *entry["forms"]]
        ]
        checks[level] = level_check(
            [row[level] for row in adaptations["paragraphs"]], nlp, flelex,
            adaptations["levels"][level]["level"], supported, adaptations.get("transparentWords", ()), form_lemmas,
        )
        checks[level]["supportedWords"] = sum(1 for entry in chapter["glossary"].values() if level in entry["levels"])
        print(f"{level}: {checks[level]['words']} words, {checks[level]['supportedWords']} supported, "
              f"{len(checks[level]['aboveTarget'])} above {checks[level]['target']}, {len(checks[level]['unmatched'])} unmatched")
    out_level_check = args.out_level_check or out_json.with_name(f"{args.chapter_id}.level-check.json")
    out_js = Path(args.out_js)
    out_vocabulary = args.out_vocabulary or out_json.with_name(f"{args.chapter_id}.vocabulary.json")
    out_difficulty_map = args.out_difficulty_map or out_json.with_name(f"{args.chapter_id}.difficulty-map.json")
    out_tokens = args.out_tokens or out_json.with_name(f"{args.chapter_id}.tokens.json")
    out_json.parent.mkdir(parents=True, exist_ok=True)
    out_js.parent.mkdir(parents=True, exist_ok=True)
    out_vocabulary.parent.mkdir(parents=True, exist_ok=True)
    out_difficulty_map.parent.mkdir(parents=True, exist_ok=True)
    out_tokens.parent.mkdir(parents=True, exist_ok=True)
    out_json.write_text(json.dumps(chapter, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    out_js.write_text("window.MultiReadChapter = " + json.dumps(chapter, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    out_vocabulary.write_text(json.dumps({"source": source_info, "records": records}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    out_difficulty_map.write_text(json.dumps(difficulty_map(records), ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    out_level_check.write_text(json.dumps(checks, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    out_tokens.write_text(json.dumps({"chapterId": args.chapter_id, "tokens": tokens}, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
