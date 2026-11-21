#!/usr/bin/env python3
"""Generate read-along audio for a processed chapter.

Reads the chapter JSON written by process_chapter.py and writes, per passage and level:

  data/<book>/audio/cNN/cNN-pNNN-<level>.m4a   one clip per passage per level
  data/<book>/cNN.audio.json                   manifest with sentence start/end times

Each sentence is synthesised on its own and the clip is assembled here, so the sentence
timings are exact and the reader can highlight the sentence being spoken.

Standard library only. Needs ffmpeg on PATH. The default provider is the macOS `say`
command, which is free and offline.

Switching TTS engine: add a class with the same three members as SayProvider
(`name`, `settings()`, `synthesize(text, out_path)`) and register it in PROVIDERS.
A provider may write any audio format ffmpeg can read (mp3, wav, aiff, ...); this script
normalises it. Nothing else here, in the manifest, or in the reader depends on the engine.
Clips are skipped when their text and voice settings are unchanged, so a paid engine is
only billed for new or edited passages. Use --limit to trial a voice on a few passages.

Usage:
  python3 scripts/generate_audio.py --chapter data/monte-cristo/c01.json
  python3 scripts/generate_audio.py --chapter data/monte-cristo/c01.json --voice Jacques --limit 5
"""

import argparse
import hashlib
import json
import shutil
import subprocess
import tempfile
import wave
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

LEVELS = ("simple", "advanced", "original")
SAMPLE_RATE = 24000  # mono 16-bit working format
SENTENCE_GAP = 0.35  # seconds of silence between sentences
CLIP_TAIL = 0.6  # seconds of silence after a passage, before the reader moves on
ASSEMBLY_VERSION = 1  # bump to force regeneration when the assembly above changes


class SayProvider:
    """macOS built-in speech synthesis. List French voices with: say -v '?' | grep fr_"""

    name = "say"
    suffix = ".aiff"

    def __init__(self, voice=None, rate=None):
        self.voice = voice or "Thomas"
        self.rate = rate

    def settings(self):
        return {"voice": self.voice, "rate": self.rate}

    def synthesize(self, text, out_path):
        command = ["say", "-v", self.voice, "-o", str(out_path)]
        if self.rate:
            command += ["-r", str(self.rate)]
        # Text goes through stdin: dialogue lines start with a dash and would parse as options.
        # `say` occasionally stalls forever when several run at once, so time out and retry.
        for attempt in range(4):
            try:
                subprocess.run([*command, "-f", "-"], input=text.encode("utf-8"), check=True, timeout=30 + len(text) // 10)
                return
            except subprocess.TimeoutExpired:
                print(f"  say stalled, attempt {attempt + 1} of 4")
        raise SystemExit("say kept stalling; rerun to resume (finished clips are kept)")


PROVIDERS = {"say": SayProvider}


def run_ffmpeg(*args):
    subprocess.run(["ffmpeg", "-nostdin", "-loglevel", "error", "-y", *args], check=True)


def silence(seconds):
    return b"\x00\x00" * int(SAMPLE_RATE * seconds)


def sentence_pcm(provider, text, work, stem):
    raw = work / f"{stem}{provider.suffix}"
    wav = work / f"{stem}.wav"
    provider.synthesize(text, raw)
    run_ffmpeg("-i", str(raw), "-ac", "1", "-ar", str(SAMPLE_RATE), "-c:a", "pcm_s16le", str(wav))
    with wave.open(str(wav), "rb") as reader:
        return reader.readframes(reader.getnframes())


def build_clip(provider, sentences, out_path):
    """Synthesise each sentence, join them, and return (duration, sentence timings)."""
    with tempfile.TemporaryDirectory() as tmp:
        work = Path(tmp)
        pcm = bytearray()
        timings = []
        for index, sentence in enumerate(sentences):
            if index:
                pcm += silence(SENTENCE_GAP)
            start = len(pcm) / 2 / SAMPLE_RATE
            pcm += sentence_pcm(provider, sentence["text"], work, f"s{index:03d}")
            timings.append({"id": sentence["id"], "start": round(start, 3), "end": round(len(pcm) / 2 / SAMPLE_RATE, 3)})
        pcm += silence(CLIP_TAIL)
        joined = work / "clip.wav"
        with wave.open(str(joined), "wb") as writer:
            writer.setnchannels(1)
            writer.setsampwidth(2)
            writer.setframerate(SAMPLE_RATE)
            writer.writeframes(bytes(pcm))
        out_path.parent.mkdir(parents=True, exist_ok=True)
        run_ffmpeg("-i", str(joined), "-c:a", "aac", "-b:a", "48k", "-movflags", "+faststart", str(out_path))
        return round(len(pcm) / 2 / SAMPLE_RATE, 3), timings


def clip_hash(provider, sentences):
    payload = [ASSEMBLY_VERSION, provider.name, provider.settings(), SENTENCE_GAP, CLIP_TAIL, [s["text"] for s in sentences]]
    return hashlib.sha256(json.dumps(payload, ensure_ascii=False, sort_keys=True).encode("utf-8")).hexdigest()[:12]


def main():
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--chapter", type=Path, required=True, help="Chapter JSON, e.g. data/monte-cristo/c01.json")
    parser.add_argument("--provider", choices=sorted(PROVIDERS), default="say")
    parser.add_argument("--voice", help="Provider voice name (say default: Thomas)")
    parser.add_argument("--rate", type=int, help="Provider speaking rate (say: words per minute)")
    parser.add_argument("--levels", default=",".join(LEVELS), help="Comma-separated levels to generate")
    parser.add_argument("--limit", type=int, help="Only the first N passages (for trialling a voice)")
    parser.add_argument("--force", action="store_true", help="Regenerate clips even when unchanged")
    parser.add_argument("--jobs", type=int, default=4, help="Clips generated in parallel")
    args = parser.parse_args()

    if not shutil.which("ffmpeg"):
        raise SystemExit("ffmpeg not found on PATH")
    levels = [level for level in args.levels.split(",") if level]
    if unknown := set(levels) - set(LEVELS):
        raise SystemExit(f"unknown level(s): {', '.join(sorted(unknown))}")

    chapter = json.loads(args.chapter.read_text(encoding="utf-8"))
    chapter_id = chapter["chapterId"]
    data_dir = args.chapter.parent
    audio_dir = data_dir / "audio" / chapter_id
    manifest_path = data_dir / f"{chapter_id}.audio.json"
    provider = PROVIDERS[args.provider](voice=args.voice, rate=args.rate)

    # Every clip the chapter could have; existing manifest entries outside this run are kept.
    all_clips = {
        f"{passage['id']}-{level}": passage["representations"][level]["sentences"]
        for passage in chapter["passages"] for level in LEVELS
    }
    selected = [
        f"{passage['id']}-{level}"
        for passage in chapter["passages"][: args.limit] for level in levels
    ]
    previous = json.loads(manifest_path.read_text(encoding="utf-8"))["clips"] if manifest_path.exists() else {}
    clips = {clip_id: entry for clip_id, entry in previous.items() if clip_id in all_clips}

    def generate(clip_id):
        sentences = all_clips[clip_id]
        digest = clip_hash(provider, sentences)
        out_path = audio_dir / f"{clip_id}.m4a"
        if not args.force and clips.get(clip_id, {}).get("hash") == digest and out_path.exists():
            return clip_id, None
        duration, timings = build_clip(provider, sentences, out_path)
        return clip_id, {
            "file": out_path.relative_to(data_dir).as_posix(),
            "hash": digest,
            "duration": duration,
            "sentences": timings,
        }

    made = 0
    try:
        with ThreadPoolExecutor(max_workers=max(1, args.jobs)) as pool:
            for clip_id, entry in pool.map(generate, selected):
                if entry:
                    clips[clip_id] = entry
                    made += 1
                    print(f"  {clip_id}  {entry['duration']:.1f}s")
    finally:
        # Always written, so an interrupted run keeps the clips it already paid for.
        ordered = {clip_id: clips[clip_id] for clip_id in all_clips if clip_id in clips}
        manifest = {
            "schemaVersion": 1,
            "chapterId": chapter_id,
            "provider": provider.name,
            "settings": provider.settings(),
            "clips": ordered,
        }
        manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        if audio_dir.exists():
            keep = {Path(entry["file"]).name for entry in ordered.values()}
            for stale in audio_dir.glob("*.m4a"):
                if stale.name not in keep:
                    stale.unlink()

    total = sum(entry["duration"] for entry in ordered.values())
    size = sum((data_dir / entry["file"]).stat().st_size for entry in ordered.values())
    print(f"{chapter_id}: {made} generated, {len(selected) - made} unchanged; "
          f"{len(ordered)} clips, {total / 60:.1f} min, {size / 1e6:.1f} MB -> {manifest_path}")


if __name__ == "__main__":
    main()
