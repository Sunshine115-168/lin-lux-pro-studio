// Service Worker file: Enables PWA features (installation, manifest).
// For this AI app, we keep the file simple to ensure API connectivity.

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install event triggered.');
});

self.addEventListener('fetch', (e) => {
  // We avoid caching to ensure real-time AI access.
});