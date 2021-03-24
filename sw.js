const PWA_CAM = "PWA_CAM";
const assets = ["/", "/index.html", "/css/style.css", "/js/camera.js"];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(PWA_CAM).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((response) => {
            return response || fetch(fetchEvent.request);
        })
    );
});
