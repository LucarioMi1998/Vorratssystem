self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('vorratstracker-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',  // Stelle sicher, dass du die richtigen Dateipfade verwendest
                '/script.js',
                '/icon.png',
                '/icon-512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
