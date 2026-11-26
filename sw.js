/* ThuongNhoQuan: chạy được khi mất mạng.
   Mở lần đầu có mạng, các lần sau dùng bản đã lưu và tự cập nhật ngầm. */
const CACHE = "tnq-2611-e1556";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./logo.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS.map((u) => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;
  const fonts = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com"
    || (url.hostname === "www.gstatic.com" && url.pathname.startsWith("/firebasejs/"));
  if (!sameOrigin && !fonts) return;

  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req, { ignoreSearch: true });
      const network = fetch(req, sameOrigin ? { cache: "no-cache" } : undefined)
        .then((res) => {
          if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);
      if (cached) return cached;
      const res = await network;
      if (res) return res;
      if (req.mode === "navigate") return cache.match("./index.html");
      return Response.error();
    })
  );
});
