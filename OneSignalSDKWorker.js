importScripts("https://onesignal.com");

const CACHE_NAME = 'Balance-Order-System-v2.6.1';
const ASSETS = ['index.html', 'manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});
