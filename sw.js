self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

// No response caching.
// The AI request remains live and is never replaced by preset responses.
self.addEventListener("fetch", event => {});