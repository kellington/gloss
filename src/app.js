const STORAGE_KEY = "multi-read-v0.1";
const CHAPTER_URL = "data/monte-cristo/c01.json";
const CHAPTER_WRAPPER_URL = "data/monte-cristo/c01.js";
const STATE_VERSION = 2; // 2: levels became simple / advanced / original; older saved state is discarded
const difficultyOrder = ["simple", "advanced", "original"];

let activeChapter = null;
let glossary = {};
let passages = [];

const els = {
  title: document.querySelector("#title"),
  subtitle: document.querySelector("#subtitle"),
  sourceMeta: document.querySelector("#sourceMeta"),
  modeButtons: document.querySelector("#modeButtons"),
  modeDescription: document.querySelector("#modeDescription"),
  passageText: document.querySelector("#passageText"),
  comparison: document.querySelector("#comparison"),
  comparisonText: document.querySelector("#comparisonText"),
  helpPanel: document.querySelector("#helpPanel"),
  helpTitle: document.querySelector("#helpTitle"),
  helpBody: document.querySelector("#helpBody"),
  helpNote: document.querySelector("#helpNote"),
  helpAnalysis: document.querySelector("#helpAnalysis"),
  vocabularyFocus: document.querySelector("#vocabularyFocus"),
  learnerStats: document.querySelector("#learnerStats"),
  recommendation: document.querySelector("#recommendation"),
  eventLog: document.querySelector("#eventLog"),
  compareToggle: document.querySelector("#compareToggle"),
  resetButton: document.querySelector("#resetButton"),
  previousPassage: document.querySelector("#previousPassage"),
  nextPassage: document.querySelector("#nextPassage"),
  passageProgress: document.querySelector("#passageProgress"),
  chapterStatus: document.querySelector("#chapterStatus"),
  audioBar: document.querySelector("#audioBar"),
  audioToggle: document.querySelector("#audioToggle"),
  audioSpeed: document.querySelector("#audioSpeed"),
  audioStatus: document.querySelector("#audioStatus")
};

const state = loadState();

loadChapter().then((chapter) => {
  activeChapter = chapter;
  glossary = chapter.glossary;
  passages = chapter.passages;
  render();
  loadAudioManifest();
}).catch((error) => {
  console.error(error);
  els.subtitle.textContent = "Chapter data could not be loaded.";
  els.passageText.innerHTML = `<p class="load-error">Could not load ${escapeHtml(CHAPTER_URL)}. Use the vault dashboard URL or regenerate the chapter data.</p>`;
});

function defaultState() {
  return {
    version: STATE_VERSION,
    mode: "simple",
    passageIndex: 0,
    events: [],
    translationsOpen: [],
    currentHelp: null,
    compareOpen: false
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved?.version !== STATE_VERSION) return defaultState();
    return { ...defaultState(), ...saved };
  } catch {
    return defaultState();
  }
}

async function loadChapter() {
  if (location.protocol === "http:" || location.protocol === "https:") {
    const response = await fetch(CHAPTER_URL);
    if (!response.ok) {
      throw new Error(`Failed to load ${CHAPTER_URL}: ${response.status}`);
    }
    return response.json();
  }

  if (window.MultiReadChapter) {
    return window.MultiReadChapter;
  }

  await loadScript(CHAPTER_WRAPPER_URL);
  if (window.MultiReadChapter) {
    return window.MultiReadChapter;
  }

  throw new Error("No chapter data available for this protocol.");
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  writeSyncMeta({ updatedAt: Date.now(), dirty: true });
  schedulePush();
}

// --- Cross-device sync -------------------------------------------------------
// localStorage stays the working copy; the Worker API (D1) is the shared store.
// Whole-blob last-write-wins on updatedAt. If the API is unreachable (file://,
// vault dashboard, python http.server, offline, Access session expired) sync
// fails silently and the app keeps working from localStorage. Unsent changes
// stay marked dirty and are pushed on the next online/focus/visibility event.

const SYNC_KEY = `${STORAGE_KEY}-sync`;
const SYNC_URL = "api/state"; // relative: /api/state in production, harmless 404 under /gloss/ (vault dashboard)
const PUSH_DELAY_MS = 2000;
const syncEnabled = location.protocol === "http:" || location.protocol === "https:";
let pushTimer = null;
let pullInFlight = false;

function readSyncMeta() {
  try {
    return { updatedAt: 0, dirty: false, ...JSON.parse(localStorage.getItem(SYNC_KEY)) };
  } catch {
    return { updatedAt: 0, dirty: false };
  }
}

function writeSyncMeta(meta) {
  localStorage.setItem(SYNC_KEY, JSON.stringify(meta));
}

function startSync() {
  if (!syncEnabled) return;
  pullRemote();
  window.addEventListener("focus", pullRemote);
  window.addEventListener("online", () => pushLocal().then(pullRemote));
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") pullRemote();
    else pushLocal({ keepalive: true });
  });
}

function schedulePush() {
  if (!syncEnabled) return;
  clearTimeout(pushTimer);
  pushTimer = setTimeout(pushLocal, PUSH_DELAY_MS);
}

async function pullRemote() {
  if (!syncEnabled || pullInFlight) return;
  pullInFlight = true;
  try {
    const response = await fetch(SYNC_URL, { cache: "no-store", headers: { accept: "application/json" } });
    if (!response.ok) return;
    const remote = await response.json();
    const meta = readSyncMeta();
    if (remote.state && remote.state.version !== STATE_VERSION) {
      // Stored progress predates the current levels: replace it with this device's fresh state.
      writeSyncMeta({ updatedAt: Date.now(), dirty: true });
      await pushLocal();
    } else if (remote.state && remote.updatedAt > meta.updatedAt) {
      adoptRemote(remote);
    } else if (meta.dirty) {
      await pushLocal();
    }
  } catch {
    // API unreachable or not JSON (e.g. an Access login redirect): stay local-only.
  } finally {
    pullInFlight = false;
  }
}

async function pushLocal({ keepalive = false } = {}) {
  if (!syncEnabled) return;
  clearTimeout(pushTimer);
  const meta = readSyncMeta();
  if (!meta.dirty) return;
  try {
    const response = await fetch(SYNC_URL, {
      method: "PUT",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({ state, updatedAt: meta.updatedAt }),
      keepalive
    });
    if (!response.ok) return;
    const remote = await response.json();
    if (readSyncMeta().updatedAt !== meta.updatedAt) return; // edited while in flight; next push covers it
    if (remote.applied) {
      writeSyncMeta({ updatedAt: meta.updatedAt, dirty: false });
    } else if (remote.state?.version === STATE_VERSION && remote.updatedAt > meta.updatedAt) {
      adoptRemote(remote); // another device wrote later
    }
  } catch {
    // Offline or API missing: leave dirty for the next attempt.
  }
}

function adoptRemote(remote) {
  const next = { ...defaultState(), ...remote.state };
  if (!difficultyOrder.includes(next.mode)) next.mode = "simple";
  if (!Number.isInteger(next.passageIndex) || next.passageIndex < 0) next.passageIndex = 0;
  if (!Array.isArray(next.events)) next.events = [];
  if (!Array.isArray(next.translationsOpen)) next.translationsOpen = [];
  for (const key of Object.keys(state)) delete state[key];
  Object.assign(state, next);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  writeSyncMeta({ updatedAt: remote.updatedAt, dirty: false });
  if (activeChapter) render();
}

async function resetState() {
  // Overwrite (not delete) so last-write-wins also carries the reset to other devices.
  for (const key of Object.keys(state)) delete state[key];
  Object.assign(state, defaultState());
  saveState();
  await Promise.race([pushLocal({ keepalive: true }), new Promise((resolve) => setTimeout(resolve, 3000))]);
  window.location.reload();
}

function registerServiceWorker() {
  // Production (https) only, plus local `npm run dev` on :8789. Kept off the vault
  // dashboard and python fallback so dev edits are never served stale from a cache.
  const isWranglerDev = location.hostname === "localhost" && location.port === "8789";
  if (!("serviceWorker" in navigator) || !(location.protocol === "https:" || isWranglerDev)) return;
  navigator.serviceWorker.register("sw.js").catch((error) => console.warn("Service worker not registered", error));
}

function getPassage() {
  if (!passages[state.passageIndex]) {
    state.passageIndex = 0;
  }
  return passages[state.passageIndex];
}

function recordEvent(type, payload = {}) {
  state.events.unshift({
    type,
    payload,
    mode: state.mode,
    at: new Date().toISOString()
  });
  state.events = state.events.slice(0, 25);
  saveState();
  renderModel();
}

function tokenize(text, keys) {
  const terms = new Map();
  for (const key of keys) {
    const entry = glossary[key];
    if (!entry) continue;
    for (const form of [entry.headword, ...(entry.forms ?? [])]) {
      if (form) terms.set(form.toLocaleLowerCase("fr"), key);
    }
  }
  if (!terms.size) return escapeHtml(text);

  const pattern = new RegExp(`(?<![\\p{L}\\p{N}])(?:${[...terms.keys()]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp).join("|")})(?![\\p{L}\\p{N}])`, "giu");
  let result = "";
  let end = 0;
  for (const match of text.matchAll(pattern)) {
    const key = terms.get(match[0].toLocaleLowerCase("fr"));
    result += escapeHtml(text.slice(end, match.index));
    result += `<button class="word-help" data-key="${escapeHtml(key)}" data-classification="${escapeHtml(glossary[key].classification ?? "teach")}" type="button">${escapeHtml(match[0])}</button>`;
    end = match.index + match[0].length;
  }
  return result + escapeHtml(text.slice(end));
}

function render() {
  const passage = getPassage();
  const current = passage.representations[state.mode];
  els.title.textContent = passage.book;
  els.subtitle.textContent = `${passage.title} · ${current.label} · ${current.level}`;
  els.modeDescription.textContent = current.description;
  els.sourceMeta.textContent = `${passage.author} · French source text`;
  els.previousPassage.disabled = state.passageIndex === 0;
  els.nextPassage.disabled = state.passageIndex === passages.length - 1;
  els.passageProgress.textContent = `Chapter ${activeChapter.chapterNumber}. Passage ${state.passageIndex + 1} of ${passages.length}`;
  els.chapterStatus.textContent = state.passageIndex === passages.length - 1
    ? `End of Chapter ${activeChapter.chapterNumber}. Capture feedback before moving on.`
    : `Chapter ${activeChapter.chapterNumber} is ready for a fresh read. Notice where wording or word help feels off.`;

  els.modeButtons.innerHTML = difficultyOrder.map((mode) => {
    const item = passage.representations[mode];
    const selected = mode === state.mode ? "true" : "false";
    return `<button class="mode-button" type="button" aria-pressed="${selected}" data-mode="${mode}">
      <span>${item.label}</span>
      <small>${item.level}</small>
    </button>`;
  }).join("");

  els.passageText.innerHTML = current.sentences.map((sentence) => {
    const isOpen = state.translationsOpen.includes(sentence.id);
    const hasTranslation = Boolean(sentence.translation);
    return `<article class="sentence" data-sentence="${sentence.id}">
      <p>${state.mode === "original" ? escapeHtml(sentence.text) : tokenize(sentence.text, current.vocabularyKeys ?? [])}</p>
      ${hasTranslation ? `<div class="sentence-actions">
        <button class="text-button translation-toggle" type="button" data-sentence="${sentence.id}">
          ${isOpen ? "Hide meaning" : "Show meaning"}
        </button>
      </div>
      <p class="translation ${isOpen ? "is-open" : ""}">${escapeHtml(sentence.translation)}</p>` : ""}
    </article>`;
  }).join("");

  // Comparing only makes sense for the rewritten levels; Original is the source itself.
  const canCompare = state.mode !== "original";
  const comparing = canCompare && state.compareOpen;
  els.compareToggle.closest(".toggle-row").hidden = !canCompare;
  els.compareToggle.checked = state.compareOpen;
  els.comparison.hidden = !comparing;
  els.comparison.parentElement.classList.toggle("is-comparing", comparing);
  els.comparisonText.innerHTML = passage.originalComparison.map((line) => `<p>${escapeHtml(line)}</p>`).join("");

  // Each level has its own vocabulary: the words that need support in this text.
  const focus = current.vocabularyKeys ?? [];
  els.vocabularyFocus.innerHTML = focus.length
    ? focus.map((key) => {
      const entry = glossary[key];
      return `<button type="button" data-key="${escapeHtml(key)}" data-classification="${escapeHtml(entry.classification ?? "keep")}">${escapeHtml(entry.headword)}<span>${vocabularyLabel(entry)}</span></button>`;
    }).join("")
    : "<p>No words need support in this passage.</p>";

  bindInteractions();
  renderHelp();
  renderModel();
  syncAudio();
}

function bindInteractions() {
  els.modeButtons.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const nextMode = button.dataset.mode;
      if (nextMode === state.mode) return;
      state.mode = nextMode;
      state.translationsOpen = [];
      recordEvent("mode_change", { mode: nextMode });
      saveState();
      render();
    });
  });

  els.passageText.querySelectorAll(".word-help").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentHelp = button.dataset.key;
      recordEvent("lookup", { key: button.dataset.key });
      renderHelp();
    });
  });

  els.vocabularyFocus.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentHelp = button.dataset.key;
      recordEvent("lookup", { key: button.dataset.key });
      renderHelp();
    });
  });

  els.passageText.querySelectorAll(".translation-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const sentenceId = button.dataset.sentence;
      if (state.translationsOpen.includes(sentenceId)) {
        state.translationsOpen = state.translationsOpen.filter((id) => id !== sentenceId);
      } else {
        state.translationsOpen.push(sentenceId);
        recordEvent("translation", { sentenceId });
      }
      saveState();
      render();
    });
  });
}

function vocabularyLabel(entry) {
  if (entry.properNoun) return "Name";
  if (entry.classification === "teach") return "Learn";
  return "Definition";
}

function renderHelp() {
  const entry = glossary[state.currentHelp];

  if (!entry) {
    els.helpTitle.textContent = "Tap a highlighted word";
    els.helpBody.textContent = "Contextual help appears here without taking you away from the passage.";
    els.helpNote.textContent = "Lookups are counted locally as a friction signal.";
    els.helpAnalysis.textContent = "";
    return;
  }

  els.helpTitle.textContent = entry.headword;
  els.helpBody.textContent = entry.meaning;
  els.helpNote.textContent = entry.note;
  const treatment = entry.properNoun
    ? "Name: know who or what it is."
    : entry.classification === "teach" ? "Learn this: it returns later in this volume." : "";
  const recurrence = entry.futureFrequency == null ? "" : ` ${entry.futureFrequency} later occurrence${entry.futureFrequency === 1 ? "" : "s"} in the available volume.`;
  els.helpAnalysis.textContent = `${treatment}${recurrence}`.trim();
}

function renderModel() {
  const passage = getPassage();
  const counts = getCounts();
  const recommendation = recommend(counts);

  els.learnerStats.innerHTML = `
    <li><strong>${counts.lookups}</strong><span>lookups</span></li>
    <li><strong>${counts.translations}</strong><span>translations</span></li>
    <li><strong>${counts.modeChanges}</strong><span>level changes</span></li>
    <li><strong>${passage.representations[state.mode].label}</strong><span>current text</span></li>
  `;

  els.recommendation.innerHTML = `
    <strong>${recommendation.title}</strong>
    <span>${recommendation.body}</span>
  `;

  els.eventLog.innerHTML = state.events.length
    ? state.events.slice(0, 8).map((event) => `<li>${formatEvent(event)}</li>`).join("")
    : "<li>No reading events yet.</li>";
}

function getCounts() {
  return state.events.reduce((counts, event) => {
    if (event.type === "lookup") counts.lookups += 1;
    if (event.type === "translation") counts.translations += 1;
    if (event.type === "mode_change") counts.modeChanges += 1;
    return counts;
  }, { lookups: 0, translations: 0, modeChanges: 0 });
}

function recommend(counts) {
  const passage = getPassage();
  const currentIndex = difficultyOrder.indexOf(state.mode);
  const friction = counts.lookups + counts.translations * 2;

  if (friction >= 5 && currentIndex > 0) {
    const easier = passage.representations[difficultyOrder[currentIndex - 1]].label;
    return {
      title: `Try ${easier} next`,
      body: "Several help requests suggest the current representation is costing attention."
    };
  }

  if (friction <= 1 && currentIndex < difficultyOrder.length - 1) {
    const harder = passage.representations[difficultyOrder[currentIndex + 1]].label;
    return {
      title: `Try ${harder} next`,
      body: "Very little help was needed, so the next harder representation may be productive."
    };
  }

  return {
    title: "Stay here",
    body: "The signal is mixed or still sparse. Keep reading at this representation."
  };
}

function formatEvent(event) {
  const passage = getPassage();
  const time = new Date(event.at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  if (event.type === "lookup") return `${time}: looked up ${glossary[event.payload.key]?.headword ?? event.payload.key}`;
  if (event.type === "translation") return `${time}: opened sentence meaning`;
  if (event.type === "mode_change") return `${time}: changed to ${passage.representations[event.payload.mode]?.label ?? event.payload.mode}`;
  if (event.type === "passage_change") return `${time}: moved to passage ${event.payload.passageIndex + 1}`;
  return `${time}: ${event.type}`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  })[char]);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

els.compareToggle.addEventListener("change", () => {
  state.compareOpen = els.compareToggle.checked;
  recordEvent("compare_toggle", { visible: state.compareOpen });
  saveState();
  render();
  if (state.compareOpen) els.comparison.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

function goToPassage(index) {
  if (index < 0 || index > passages.length - 1) return;
  state.passageIndex = index;
  state.translationsOpen = [];
  state.currentHelp = null;
  recordEvent("passage_change", { passageIndex: state.passageIndex });
  saveState();
  render();
  els.passageProgress.scrollIntoView({ block: "start" });
}

els.previousPassage.addEventListener("click", () => goToPassage(state.passageIndex - 1));
els.nextPassage.addEventListener("click", () => goToPassage(state.passageIndex + 1));

// --- Read-along audio --------------------------------------------------------
// Optional: clips and their sentence timings come from scripts/generate_audio.py.
// With no manifest (not generated, file://, offline) the audio bar stays hidden.
// The reader only knows clip files and timings, never which TTS engine made them.

const AUDIO_MANIFEST_URL = "data/monte-cristo/c01.audio.json";
const AUDIO_BASE = "data/monte-cristo/";
const AUDIO_RATES = [0.75, 0.9, 1, 1.25];
const player = new Audio();
player.preload = "none";
let audioManifest = null;
let audioClipId = null;
let listening = false; // the reader asked to listen; carries across passages and levels
let spokenSentenceId = null;

async function loadAudioManifest() {
  if (location.protocol !== "http:" && location.protocol !== "https:") return;
  try {
    const response = await fetch(AUDIO_MANIFEST_URL, { cache: "no-cache" });
    if (!response.ok) return;
    const manifest = await response.json();
    if (!manifest?.clips) return;
    audioManifest = manifest;
    syncAudio();
  } catch {
    // No audio for this chapter (or a non-JSON 404 page): the reader works without it.
  }
}

function currentClip() {
  const id = `${getPassage().id}-${state.mode}`;
  const clip = audioManifest?.clips[id];
  return clip ? { id, ...clip } : null;
}

function audioRate() {
  return AUDIO_RATES.includes(state.audioRate) ? state.audioRate : 1;
}

// Point the player at the clip for the passage and level on screen. Called by every render().
function syncAudio() {
  if (!audioManifest) return;
  const clip = currentClip();
  if ((clip?.id ?? null) !== audioClipId) {
    player.pause();
    audioClipId = clip?.id ?? null;
    if (clip) {
      player.src = `${AUDIO_BASE}${clip.file}?v=${clip.hash}`;
      if (listening) playAudio();
    } else {
      player.removeAttribute("src");
      listening = false;
    }
  }
  renderAudio();
}

function playAudio() {
  listening = true;
  player.defaultPlaybackRate = audioRate();
  player.playbackRate = audioRate();
  player.play().catch((error) => {
    if (error.name === "AbortError") return; // superseded by a passage or level change
    listening = false;
    renderAudio();
  });
}

function renderAudio() {
  if (!audioManifest) return;
  const clip = currentClip();
  const playing = Boolean(clip) && listening && !player.paused;
  els.audioBar.hidden = false;
  els.audioToggle.disabled = !clip;
  els.audioToggle.textContent = playing ? "Pause" : "Listen";
  els.audioToggle.setAttribute("aria-pressed", playing ? "true" : "false");
  els.audioSpeed.textContent = `${audioRate()}×`;
  els.audioStatus.textContent = !clip ? "No audio for this passage yet."
    : listening && clip.sentences.length > 1 ? "Tap a sentence to hear it again." : "";
  els.passageText.classList.toggle("is-listening", listening && Boolean(clip));
  renderSpeaking();
}

function renderSpeaking() {
  const clip = currentClip();
  let speaking = null;
  // A one-sentence passage is not highlighted: the whole card would light up.
  if (clip && listening && clip.sentences.length > 1) {
    for (const sentence of clip.sentences) {
      if (player.currentTime >= sentence.start) speaking = sentence.id;
    }
  }
  let node = null;
  els.passageText.querySelectorAll(".sentence").forEach((item) => {
    const active = item.dataset.sentence === speaking;
    item.classList.toggle("is-speaking", active);
    if (active) node = item;
  });
  if (node && speaking !== spokenSentenceId) node.scrollIntoView({ behavior: "smooth", block: "nearest" });
  spokenSentenceId = speaking;
}

player.addEventListener("timeupdate", renderSpeaking);
player.addEventListener("play", renderAudio);
player.addEventListener("pause", renderAudio);
player.addEventListener("ended", () => {
  if (state.passageIndex < passages.length - 1) {
    goToPassage(state.passageIndex + 1); // still listening, so the next clip starts itself
  } else {
    listening = false;
    renderAudio();
  }
});

els.audioToggle.addEventListener("click", () => {
  if (!currentClip()) return;
  if (listening && !player.paused) {
    listening = false;
    player.pause();
  } else {
    playAudio();
  }
});

els.audioSpeed.addEventListener("click", () => {
  state.audioRate = AUDIO_RATES[(AUDIO_RATES.indexOf(audioRate()) + 1) % AUDIO_RATES.length];
  player.defaultPlaybackRate = audioRate();
  player.playbackRate = audioRate();
  saveState();
  renderAudio();
});

// While listening, tapping a sentence (not a word-help button) replays from there.
els.passageText.addEventListener("click", (event) => {
  if (!listening || event.target.closest("button") || String(window.getSelection())) return;
  const sentenceId = event.target.closest(".sentence")?.dataset.sentence;
  const sentence = currentClip()?.sentences.find((item) => item.id === sentenceId);
  if (!sentence) return;
  player.currentTime = sentence.start;
  playAudio();
});

els.resetButton.addEventListener("click", () => {
  resetState();
});

// Last, so the sync constants above are initialised before use.
startSync();
registerServiceWorker();
