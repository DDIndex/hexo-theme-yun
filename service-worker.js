/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.50be7f47.css",
    "revision": "e61547f238d2617f769384effa195531"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.59f29d2e.js",
    "revision": "a583dde2f2c33b69482c51e0ab27b701"
  },
  {
    "url": "assets/js/11.b15dd8a6.js",
    "revision": "2cfe6031835c8020b5a770850d227819"
  },
  {
    "url": "assets/js/12.44888fd0.js",
    "revision": "2a0ccdd798fc188f9e1bf390b3829f08"
  },
  {
    "url": "assets/js/13.52f8d904.js",
    "revision": "3e0914e0cb33f0587924e1d162d1f9da"
  },
  {
    "url": "assets/js/14.ca4b8d45.js",
    "revision": "53cf75d3f679b488ecba47e201a09468"
  },
  {
    "url": "assets/js/15.ce6c3d27.js",
    "revision": "3b62025b5b83fa3cb5d49072d1856618"
  },
  {
    "url": "assets/js/16.fbca2683.js",
    "revision": "b331dd43c511002a527341a43d0f342e"
  },
  {
    "url": "assets/js/17.c78d168d.js",
    "revision": "7f39d163016e00f75eb02b4caabedde9"
  },
  {
    "url": "assets/js/18.d69c7a54.js",
    "revision": "a8bfd6c41fb239d7317e614af0fcaf36"
  },
  {
    "url": "assets/js/2.9d87224e.js",
    "revision": "7509b73b774897a73bb3f992a5de8dd2"
  },
  {
    "url": "assets/js/3.aa97e589.js",
    "revision": "b4a2dd5ee008fd9ef0c9261cea06c73a"
  },
  {
    "url": "assets/js/4.68a542bf.js",
    "revision": "cd79d2067b3dbcf3ecabc34d2b243d91"
  },
  {
    "url": "assets/js/5.209351dc.js",
    "revision": "1a4bc2bdbcb9d08bf1ae4d7b1f9f0a1b"
  },
  {
    "url": "assets/js/6.2fec8c98.js",
    "revision": "d8653011fff51b6a0e67f5782c6233c5"
  },
  {
    "url": "assets/js/7.b3cf3ece.js",
    "revision": "daccce7f6840e5d5cfbd27ac5d9b5567"
  },
  {
    "url": "assets/js/8.755f0e1e.js",
    "revision": "34289b2af2ebb8babc2d1610e904008f"
  },
  {
    "url": "assets/js/9.dea933c4.js",
    "revision": "2157e7108cc02c9775de63a6d3520255"
  },
  {
    "url": "assets/js/app.d63871dc.js",
    "revision": "0607c96aab4887bb7c16109b5ed3dba9"
  },
  {
    "url": "en/guide/index.html",
    "revision": "d7d5139b6acdfa0fe115e5a212b66aec"
  },
  {
    "url": "en/index.html",
    "revision": "a26fad3f776e782ef4aaa4048c819354"
  },
  {
    "url": "guide/about.html",
    "revision": "11da837e973c674945cfc0c5b00a6eb7"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "ce87a5b7665e244d30a610b545e9d438"
  },
  {
    "url": "guide/config.html",
    "revision": "03bf41f32871f53c242b993c29987da6"
  },
  {
    "url": "guide/faq.html",
    "revision": "e1ebe4a83ba08723258df6e269ec59ed"
  },
  {
    "url": "guide/index.html",
    "revision": "bb52fb4a4985c2129550f24d6950f331"
  },
  {
    "url": "guide/page.html",
    "revision": "d02fdbdca6ea203747e0d853f1ccfa8b"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "2f1a257dd5c7edc6d2ec69b7ad213bdf"
  },
  {
    "url": "guide/Todo.html",
    "revision": "2d18331e634f8adabfbd082df8a905d8"
  },
  {
    "url": "index.html",
    "revision": "9a55cc65fd3fe843aa16df1c88adf243"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "logo.png",
    "revision": "bb35d0cf00948250fd08e4663c133e12"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
