'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".well-known/assetlinks.json": "4d4cb2bd1c33ca23dd2589b964b36c80",
".well-known/apple-app-site-association": "58b6acd92dff39b72194b84f634888c8",
"CNAME": "4ed0c06dea6e5ba1c314318f4fd93a26",
"icons/logo.png": "aee469723b034005ded9de36c62c304e",
"icons/facebook.png": "35a9a1655893a48c83e32a956c58d413",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/location.png": "c759d1809fd21c9ab3cb9f102ba23b53",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/calendar.png": "d5130156cecd73b802e9c58bf8e37c10",
"icons/phone.png": "e308a328701b00a013bdcd97bd148c7c",
"icons/whatsapp.png": "0cbef9a4ea4fa0501a2e8fe3efaa5ca1",
"icons/instagram.png": "ce697f0a66e0e1cfdff8564bbc7b4395",
"icons/twitter.png": "5bbd2f6e37eb510db7cbac105068f85d",
"favicon.png": "7b421e85b592e800927edb62c1086707",
"images/locally_communities.png": "4466b6e44f9731e6c48d49e68497a496",
"images/locally_communities_abstract.png": "d20a7fd3a52af6ddc29e68e0f36adf61",
"manifest.json": "3c75fa5368dc92a0b5c3bbbab1296706",
"index.html": "2e9d09b20889d16a6f0ff4fe3c97a583",
"/": "2e9d09b20889d16a6f0ff4fe3c97a583",
"_config.yaml": "95b9185565555f2b4405dff033ce56c8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/NOTICES": "1e42faf3fe1b9cde9399444d534d520c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/AssetManifest.json": "28b49774062cdd28eb078fc83d6bb867",
"assets/assets/images/logo.png": "aee469723b034005ded9de36c62c304e",
"assets/assets/images/ruben/rubenarbol.png": "6f46f98e5112ad4fa9863dcefd120b4d",
"assets/assets/images/ruben/rubenlocation.png": "559b1d1a2674bacb9e54af4ea9a36cf1",
"assets/assets/images/ruben/rubenfotografia.png": "1ac4a02f0afacbc82d1ddbb977857610",
"assets/assets/images/ruben/rubenbienvenido.png": "a728a1d26399823daf2f7a6e81e6c11c",
"assets/assets/images/ruben/rubenlocalevents.png": "6e8d5f307a95d921dae5ffca9838ff46",
"assets/assets/images/ruben/rubenregalo.png": "af259b036078238bb00674a4ed04e922",
"assets/assets/images/ruben/3.0x/rubenarbol.png": "5c223b0ef4e3f51cbb1a2d75a7a6e216",
"assets/assets/images/ruben/3.0x/rubenlocation.png": "a40ef15b2ef60ce616c267a48842a14b",
"assets/assets/images/ruben/3.0x/rubenfotografia.png": "d5deb7bd788fd0ee3b38ef0ce588aa8a",
"assets/assets/images/ruben/3.0x/rubenbienvenido.png": "fe247190e8edea2025f51d33a1ad175a",
"assets/assets/images/ruben/3.0x/rubenlocalevents.png": "f3c2dec30a9cfa99e476f9b0a342415f",
"assets/assets/images/ruben/3.0x/rubenregalo.png": "00afab7e09dab1e93b7406d14dbbb466",
"assets/assets/images/ruben/3.0x/rubenevento.png": "e8bfdc335cc67ecc052a04fc70aeab96",
"assets/assets/images/ruben/3.0x/rubentienda.png": "49b831cf0526b922c98d0fbfcc727041",
"assets/assets/images/ruben/rubenevento.png": "3873272411a2755cfed94b9a1ee7b82e",
"assets/assets/images/ruben/rubentienda.png": "8f6b99d8204c88ad2d2e0f93abebc99b",
"assets/assets/images/ruben/2.0x/rubenarbol.png": "bdef0ea27eb8b374e6a9772700facc6d",
"assets/assets/images/ruben/2.0x/rubenlocation.png": "93d48ee08135eb0e7736668a60be2010",
"assets/assets/images/ruben/2.0x/rubenfotografia.png": "b6bc12a252ba1f080b97e0e465d708a9",
"assets/assets/images/ruben/2.0x/rubenbienvenido.png": "8f613a4fd53672587e448c5b4e759651",
"assets/assets/images/ruben/2.0x/rubenlocalevents.png": "0050b1739a1217a44070123820377c10",
"assets/assets/images/ruben/2.0x/rubenregalo.png": "39d33153ae81468e39eefa67e3515d6e",
"assets/assets/images/ruben/2.0x/rubenevento.png": "7f3c1f44d348dc7d9721e946b74405ef",
"assets/assets/images/ruben/2.0x/rubentienda.png": "10281a9a1c9d55ff7fe3745d700e7dc6",
"assets/assets/fonts/Inter-Medium-slnt=0.ttf": "5ff1f2a9a78730d7d0c309320ff3c9c7",
"assets/assets/fonts/Inter-Regular-slnt=0.ttf": "515cae74eee4925d56e6ac70c25fc0f6",
"assets/assets/fonts/Inter-Thin-slnt=0.ttf": "35b7cf4cc47ac526b745c7c29d885f60",
"assets/assets/fonts/Inter-Bold-slnt=0.ttf": "91e5aee8f44952c0c14475c910c89bb8",
"assets/assets/fonts/Inter-SemiBold-slnt=0.ttf": "ec60b23f3405050f546f4765a9e90fec",
"assets/assets/fonts/Inter-ExtraLight-slnt=0.ttf": "909744bbb5a7ede41ce522a1507e952c",
"assets/assets/fonts/Inter-ExtraBold-slnt=0.ttf": "bd9525f1099e9f5845f6aef2956e9fb8",
"assets/assets/fonts/Inter-Light-slnt=0.ttf": "6ffbefc66468b90d7af1cbe1e9f13430",
"assets/assets/fonts/Inter-Black-slnt=0.ttf": "5f2ce7df2a2e8570f4c32a44414df347",
"assets/FontManifest.json": "235d572af77cec0b8e70c9af2e109389",
"main.dart.js": "bf10391bff0e0b880e2f2f58d5c0eceb",
"version.json": "5c5215408fe0114e546097707c9dfd62",
"exxacon_locals/somos.jpeg": "013cfa8a76eea1f609ea97fc55276d38",
"exxacon_locals/exacon.jpeg": "f56b8bd3e1e12bcc972b49b328d84675",
"exxacon_locals/casabustamante.jpeg": "6d79ad09d336272ca2fb31d992c09632",
"exxacon_locals/egana.jpeg": "d5a44b6d4cb711183fa2c7ac49927772",
"exxacon_locals/walk.jpeg": "3a10c910005fb1922b4758489fd9cdad",
"exxacon_locals/cuvee.png": "ea1ffb07dd187925caf92fb510951cd9",
"exxacon_locals/lift.png": "08bb50f417431f8a277b96547fbc212b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
