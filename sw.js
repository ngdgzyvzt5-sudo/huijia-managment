const CACHE='huijia-v64-unified-controls';
const FILES=['./','./index.html','./jszip.min.js','./repair-report-template.xlsx','./manifest.webmanifest','./icon-v55.svg','./apple-touch-icon-v55.png','./icon-192-v55.png','./icon-512-v55.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('huijia-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)))});
