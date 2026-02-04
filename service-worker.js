const CACHE_NAME = "hidden-history-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./locations.js",
  "./manifest-v2.json",

  "./icon-180-final.png",
  "./icon-192-final.png",
  "./icon-512-final.png",
  "./splash-2732.png",

  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  const id = event.notification.data;

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true })
      .then(clientList => {
        for (const client of clientList) {
          client.focus();
          // send a message to the page to open the location
          client.postMessage({ action: "open-location", id });
          return;
        }
        // if no clients open, open a new window with the hash
        return self.clients.openWindow(`./#${id}`);
      })
  );
});
