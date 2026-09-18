importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

const CACHE_NAME = 'Balance-Order-System-v2.6.1';
const ASSETS = ['index.html', 'manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// 在 Service Worker 檔案中 (sw.js)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 如果快取中有，直接回傳快取；若沒有，才向伺服器發送請求
      return cachedResponse || fetch(event.request);
    })
  );
});
