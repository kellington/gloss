// Copies ONLY the runtime files into public/ (the Worker's static-asset directory).
// This list IS the deploy allowlist: anything not matched here is never uploaded.
// Never add: Books/ (EPUBs), scripts/, project/, optional/, migrations/, worker/,
// data/lexical-sources/, protocol *.md files, .claude/, SECRETS*, .env*.
// Run automatically by wrangler (wrangler.jsonc "build") before every `dev` and `deploy`.
// The app itself still runs unbuilt from the repo root (vault dashboard, python http.server).

import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public");

const FILES = [
  "index.html",
  "sw.js",
  "manifest.json",
  "src/app.js",
  "src/styles.css",
  "assets/monte-cristo-cover.jpg"
];

// Directory + filename pattern pairs (non-recursive).
const PATTERNS = [
  ["assets/icons", /^icon-\d+\.png$/],
  // Runtime chapter JSON plus the optional read-along manifest; not tokens/vocabulary/difficulty-map/.js
  ["data/monte-cristo", /^c\d{2}(\.audio)?\.json$/]
];

// Read-along clips from scripts/generate_audio.py: gitignored and optional, one folder per chapter.
const AUDIO_ROOT = "data/monte-cristo/audio";
const AUDIO_CLIP = /^c\d{2}-p\d{3}-(simple|advanced|original)\.m4a$/;

if (relative(root, out) !== "public") throw new Error(`refusing to clean unexpected path ${out}`);
rmSync(out, { recursive: true, force: true });

const copied = [];
function copy(rel) {
  const src = join(root, rel);
  if (!existsSync(src)) throw new Error(`allowlisted file missing: ${rel}`);
  mkdirSync(dirname(join(out, rel)), { recursive: true });
  cpSync(src, join(out, rel));
  copied.push(rel);
}

for (const rel of FILES) copy(rel);
for (const [dir, pattern] of PATTERNS) {
  for (const name of readdirSync(join(root, dir)).sort()) {
    if (pattern.test(name)) copy(`${dir}/${name}`);
  }
}

let clips = 0;
if (existsSync(join(root, AUDIO_ROOT))) {
  for (const chapter of readdirSync(join(root, AUDIO_ROOT)).sort()) {
    if (!/^c\d{2}$/.test(chapter)) continue;
    for (const name of readdirSync(join(root, AUDIO_ROOT, chapter)).sort()) {
      if (!AUDIO_CLIP.test(name)) continue;
      copy(`${AUDIO_ROOT}/${chapter}/${name}`);
      copied.pop(); // counted below, not listed one by one
      clips += 1;
    }
  }
}

console.log(`build-public: ${copied.length} files + ${clips} audio clips -> public/\n  ${copied.join("\n  ")}`);
