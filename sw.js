// Gloss service worker: offline app shell + chapter data.
// Strategy: network-first for same-origin GETs (fresh when online), cache fallback when offline.
// /api/* is never cached; sync is handled (and queued) by src/app.js.
// Bump CACHE_VERSION when the precache list changes.

const CACHE_VERSION = "gloss-v1";
const PRECACHE = [
  "./",
  "./src/app.js",
  "./src/styles.css",
  "./assets/monte-cristo-cover.jpg",
  "./data/monte-cristo/c01.json",
  "./manifest.json",
  "./assets/icons/icon-180.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  if (url.pathname.includes("/api/") || url.pathname.startsWith("/cdn-cgi/")) return;

  event.respondWith(networkFirst(request));
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_VERSION);
  try {
    const response = await fetch(request);
    // Only cache plain same-origin 200s: never Access login redirects or errors.
    if (response.ok && response.type === "basic" && !response.redirected) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    if (request.mode === "navigate") {
      const shell = await cache.match("./");
      if (shell) return shell;
    }
    throw error;
  }
}
