/**
 * service-worker.js
 * Service Worker para execução 100% offline do jogo "Cards e Dungeons" em celulares e navegadores.
 */

const CACHE_NAME = 'cards-dungeons-v2.1.0-dark-fantasy-overhaul';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './dev-board.html',
  './manifest.json',
  './css/main.css',
  './css/cards.css',
  './css/combat.css',
  './css/map.css',
  './css/modal.css',
  './css/cinematic.css',
  './js/game.bundle.js',
  './assets/ui/icon-192.png',
  './assets/ui/icon-512.png',
  './assets/ui/icon.ico',
  './assets/ui/chest_reward.png',
  './assets/ui/menu_logo_emblem.png',
  './assets/sprites/hero.jpg',
  './assets/sprites/rogue.jpg',
  './assets/sprites/mage.jpg',
  './assets/sprites/dragon.jpg',
  './assets/sprites/golem.jpg',
  './assets/sprites/lich.jpg',
  './assets/sprites/rat.jpg',
  './assets/sprites/skeleton.jpg',
  './assets/sprites/goblin.jpg',
  './assets/sprites/cultist.jpg',
  './assets/sprites/shaman.jpg',
  './assets/sprites/burrower.jpg',
  './assets/sprites/gargoyle.jpg',
  './assets/sprites/minotaur.jpg',
  './assets/sprites/specter.jpg',
  './assets/sprites/fire_elemental.jpg',
  './assets/sprites/merchant.jpg',
  './assets/backgrounds/catacombs.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('Pre-cache parcial em service worker:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Ignora requisições não-GET ou esquemas não-HTTP
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  const url = new URL(event.request.url);
  const isCodeOrDoc = event.request.mode === 'navigate' || 
                      url.pathname.endsWith('.html') || 
                      url.pathname.endsWith('.css') || 
                      url.pathname.endsWith('.js') ||
                      url.pathname.endsWith('/') ||
                      url.search.includes('v=');

  if (isCodeOrDoc) {
    // Network-First para páginas e código: Garante atualizações imediatas em produção
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
          }
          return networkResponse;
        })
        .catch(() => {
          // Se estiver offline ou a rede falhar, utiliza a cópia do cache local
          return caches.match(event.request, { ignoreSearch: true }).then((cached) => {
            if (cached) return cached;
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
          });
        })
    );
    return;
  }

  // Cache-First para imagens, áudios e outros assets estáticos
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        return networkResponse;
      });
    })
  );
});
