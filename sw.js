self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("mi-cache").then(cache => {
      return cache.addAll(["/", "/index.html", "/icon-192.png"]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => {
      return resp || fetch(e.request);
    })
  );
});
