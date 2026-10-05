/**
 * service-worker.js
 * Service Worker para execução 100% offline do jogo "Cards e Dungeons" em celulares e navegadores.
 */

const CACHE_NAME = 'cards-dungeons-v1.1.0';

const PRECACHE_ASSETS = [
  './',
  './index.html',
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
  // Ignora requisições não-GET ou extensões do navegador
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Retorna do cache e atualiza em segundo plano (Stale-While-Revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        // Fallback offline para navegação
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
