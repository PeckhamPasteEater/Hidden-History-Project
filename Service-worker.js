self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("tour-cache").then(cache =>
      cache.addAll([
        "./",
        "index.html",
        "style.css",
        "script.js",
        "tourData.js"
      ])
    )
  );
});
