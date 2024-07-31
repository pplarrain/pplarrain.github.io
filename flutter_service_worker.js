'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "_config.yaml": "95b9185565555f2b4405dff033ce56c8",
"assets/NOTICES": "c50a43cf89cd28f7eebe27130d1ca672",
"assets/FontManifest.json": "b396e1b758abb3b099b7a892d3f43ee6",
"assets/assets/fonts/Inter-Thin-slnt=0.ttf": "35b7cf4cc47ac526b745c7c29d885f60",
"assets/assets/fonts/Nunito-SemiBold.ttf": "45db66b4d9dff8842f4a8e5e3deb2f94",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/Inter-Light-slnt=0.ttf": "6ffbefc66468b90d7af1cbe1e9f13430",
"assets/assets/fonts/Inter-Bold-slnt=0.ttf": "91e5aee8f44952c0c14475c910c89bb8",
"assets/assets/fonts/Nunito-Black.ttf": "18f25c22e665649aaf09be87bc6f23bb",
"assets/assets/fonts/Nunito-ExtraBold.ttf": "004ce174f09a95594c74016b9a8333e8",
"assets/assets/fonts/Inter-SemiBold-slnt=0.ttf": "ec60b23f3405050f546f4765a9e90fec",
"assets/assets/fonts/Nunito-Medium.ttf": "108670f0b05efd5a10ca1afce69e28a3",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/Nunito-Light.ttf": "42405ee88f303e033d1ff57280f9cffc",
"assets/assets/fonts/Inter-Medium-slnt=0.ttf": "5ff1f2a9a78730d7d0c309320ff3c9c7",
"assets/assets/fonts/Inter-Black-slnt=0.ttf": "5f2ce7df2a2e8570f4c32a44414df347",
"assets/assets/fonts/Inter-ExtraBold-slnt=0.ttf": "bd9525f1099e9f5845f6aef2956e9fb8",
"assets/assets/fonts/Nunito-ExtraLight.ttf": "4c3094fa4bad68656f343116ebb3dae0",
"assets/assets/fonts/Inter-ExtraLight-slnt=0.ttf": "909744bbb5a7ede41ce522a1507e952c",
"assets/assets/fonts/Inter-Regular-slnt=0.ttf": "515cae74eee4925d56e6ac70c25fc0f6",
"assets/assets/images/community/MATEA.png": "36aa829664f6ce914e1431986c968fd6",
"assets/assets/images/community/ABUELA@3x.png": "9c4607ecdabd4a6bdf3a46907df4b34e",
"assets/assets/images/community/Onboard%25202@2x.png": "e1789aee195a744ece6554801580609e",
"assets/assets/images/community/Onboard%25202.png": "40b8206b8b6ea96baa2e466b7f9e1782",
"assets/assets/images/community/Group%25209@3x.png": "05da0df72f5b79cee1b69e3367b3528e",
"assets/assets/images/community/Group%25209.png": "b93fdec0f64ebf98324680924d0c36d5",
"assets/assets/images/community/MATEA@2x.png": "c0ab2690b6178e064b6f1ecfc0619af8",
"assets/assets/images/community/sellonmap.png": "9ccc1e9b0bfc745370f3d5e1153dec58",
"assets/assets/images/community/Group%25209@2x.png": "5e133e7b4270a8accd0e6eb402b0612d",
"assets/assets/images/community/ABUELA@2x.png": "a0fd3428363491929854f14ab49a0109",
"assets/assets/images/community/ABUELA.png": "2b803f66821cdca3ac629240fbc034a1",
"assets/assets/images/community/Onboard%25203@2x.png": "c34ab053009d27e64a903aa2cc89b2bb",
"assets/assets/images/community/Onboard%25203@3x.png": "9cf03e6c908ce9f9bb7ec5b7b42e8ade",
"assets/assets/images/community/ANTEOJOS@3x.png": "61c5c2f1b7971bd198775429c1f2922f",
"assets/assets/images/community/Onboard1@2x.png": "90b1ee9ece26a31f9e804fbde17cc332",
"assets/assets/images/community/sellonmap@3x.png": "dcae1f7b765ccc1236a93fe6e0412426",
"assets/assets/images/community/Onboard1.png": "96ac80b1a6811442c855269ce29626db",
"assets/assets/images/community/Onboard%25202@3x.png": "d8ae8727c15a2e759a07e94003de2c65",
"assets/assets/images/community/Group%25202@3x.png": "703e04c42ffd3d43566245574e4e5908",
"assets/assets/images/community/HIPSTER.png": "be32e31e28c49ca160940aa5058ad641",
"assets/assets/images/community/PELAO.png": "c82fcfe05b2cd89511307112604ed7b1",
"assets/assets/images/community/Bitmap@3x.png": "12db0709acb1bb28f2971049eb96ad57",
"assets/assets/images/community/YO.png": "47d4bb9eaaec533f609fc8f2d73ef0a7",
"assets/assets/images/community/HIPSTER@3x.png": "60b543bb3ca9e2f5221c097f38b7a749",
"assets/assets/images/community/sellonmap@2x.png": "5e95ee984d11594ddb54280be62577f3",
"assets/assets/images/community/PELAO@2x.png": "d8ec059399e813773c7688e668b3fb34",
"assets/assets/images/community/Bitmap.png": "28b68b8a239b5975a2dc2194911c0a93",
"assets/assets/images/community/YO@2x.png": "d561abd0ff5ed08b51435b6f4780968c",
"assets/assets/images/community/Bitmap@2x.png": "9dfe5d185a1a0384239abb61572ea04d",
"assets/assets/images/community/PELAO@3x.png": "d733a787d28383b68b6cb86f3ce5ed8e",
"assets/assets/images/community/HIPSTER@2x.png": "bbf452977af1490141feb653f386d6f9",
"assets/assets/images/community/Onboard1@3x.png": "b98b787fcac609d09e35a6bc37af4508",
"assets/assets/images/community/ANTEOJOS.png": "372ac68eeb28ec159486deedfa3ba86e",
"assets/assets/images/community/MATEA@3x.png": "7279ec9a7d7e5336950e9e081f684507",
"assets/assets/images/community/Group%25202@2x.png": "96d15aeee0cb95a095b50a99459747b9",
"assets/assets/images/community/YO@3x.png": "e6b3db29430d133fbbf4cff94aaaa532",
"assets/assets/images/community/Group%25202.png": "29b93f1029c33b53ffd3ad7823dd21ca",
"assets/assets/images/community/Onboard%25203.png": "146fac344a759aa4eff09b4b2659e632",
"assets/assets/images/community/ANTEOJOS@2x.png": "f365e4193edbe1b022d908556d5164b3",
"assets/assets/images/logo.png": "aee469723b034005ded9de36c62c304e",
"assets/assets/images/ruben/rubenlocalevents.png": "6e8d5f307a95d921dae5ffca9838ff46",
"assets/assets/images/ruben/rubenfotografia.png": "1ac4a02f0afacbc82d1ddbb977857610",
"assets/assets/images/ruben/rubenregalo.png": "af259b036078238bb00674a4ed04e922",
"assets/assets/images/ruben/rubenlocation.png": "559b1d1a2674bacb9e54af4ea9a36cf1",
"assets/assets/images/ruben/3.0x/rubenlocalevents.png": "f3c2dec30a9cfa99e476f9b0a342415f",
"assets/assets/images/ruben/3.0x/rubenfotografia.png": "d5deb7bd788fd0ee3b38ef0ce588aa8a",
"assets/assets/images/ruben/3.0x/rubenregalo.png": "00afab7e09dab1e93b7406d14dbbb466",
"assets/assets/images/ruben/3.0x/rubenlocation.png": "a40ef15b2ef60ce616c267a48842a14b",
"assets/assets/images/ruben/3.0x/rubenarbol.png": "5c223b0ef4e3f51cbb1a2d75a7a6e216",
"assets/assets/images/ruben/3.0x/rubenevento.png": "e8bfdc335cc67ecc052a04fc70aeab96",
"assets/assets/images/ruben/3.0x/rubentienda.png": "49b831cf0526b922c98d0fbfcc727041",
"assets/assets/images/ruben/3.0x/rubenbienvenido.png": "fe247190e8edea2025f51d33a1ad175a",
"assets/assets/images/ruben/rubenarbol.png": "6f46f98e5112ad4fa9863dcefd120b4d",
"assets/assets/images/ruben/rubenevento.png": "3873272411a2755cfed94b9a1ee7b82e",
"assets/assets/images/ruben/rubentienda.png": "8f6b99d8204c88ad2d2e0f93abebc99b",
"assets/assets/images/ruben/2.0x/rubenlocalevents.png": "0050b1739a1217a44070123820377c10",
"assets/assets/images/ruben/2.0x/rubenfotografia.png": "b6bc12a252ba1f080b97e0e465d708a9",
"assets/assets/images/ruben/2.0x/rubenregalo.png": "39d33153ae81468e39eefa67e3515d6e",
"assets/assets/images/ruben/2.0x/rubenlocation.png": "93d48ee08135eb0e7736668a60be2010",
"assets/assets/images/ruben/2.0x/rubenarbol.png": "bdef0ea27eb8b374e6a9772700facc6d",
"assets/assets/images/ruben/2.0x/rubenevento.png": "7f3c1f44d348dc7d9721e946b74405ef",
"assets/assets/images/ruben/2.0x/rubentienda.png": "10281a9a1c9d55ff7fe3745d700e7dc6",
"assets/assets/images/ruben/2.0x/rubenbienvenido.png": "8f613a4fd53672587e448c5b4e759651",
"assets/assets/images/ruben/rubenbienvenido.png": "a728a1d26399823daf2f7a6e81e6c11c",
"assets/assets/images/appicon/Untitlediuhiuhi.png": "6c092f4a01cc0997bf0a393e3c5fc0d4",
"assets/assets/images/appicon/Untitlediuhiuhi@3x.png": "e5bb8ea9b8b01514df73ea0d641eb059",
"assets/assets/images/appicon/Untitlediuhiuhi@2x.png": "3c61792ac7d20fbe31a5ec9391add9d7",
"assets/assets/images/null_user_profile_pic.jpeg": "f4bd75478e593ca5e8299c7fc50a18ab",
"assets/assets/images/product_no_image.jpg": "78faa66a7466eb48e25397afed69bbf6",
"assets/assets/images/landing/3.0x/locally_text_logo.png": "a2f2f56cecc795d1b3892110a62390c4",
"assets/assets/images/landing/locally_text_logo.png": "21f81eba0bb43427175eb5aedad6175f",
"assets/assets/images/landing/Logo%2520letras%2520blancas@3x.png": "d59049d5497bfc8513fb4bad65a7a498",
"assets/assets/images/landing/2.0x/locally_text_logo.png": "ab3a6e6c93de7491cfb4f1f27582879f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.json": "4d330bc19c184da18ef491ef99604c7e",
"assets/packages/fluttericon/lib/fonts/Elusive.ttf": "23f24df0388819e94db2b3c19841841c",
"assets/packages/fluttericon/lib/fonts/FontAwesome5.ttf": "221b27a41202ddd33990e299939e4504",
"assets/packages/fluttericon/lib/fonts/Brandico.ttf": "791921e9b25210e2551b6eda3f86c733",
"assets/packages/fluttericon/lib/fonts/Typicons.ttf": "3386cae1128e52caf268508d477fb660",
"assets/packages/fluttericon/lib/fonts/Zocial.ttf": "c29d6e34d8f703a745c6f18d94ce316d",
"assets/packages/fluttericon/lib/fonts/Iconic.ttf": "34e12214307f5f7cf7bc62086fbf55a3",
"assets/packages/fluttericon/lib/fonts/Octicons.ttf": "7242d2fe9e36eb4193d2bc7e521779bf",
"assets/packages/fluttericon/lib/fonts/Fontelico.ttf": "3a1e1cecf0a3eae6be5cba3677379ba2",
"assets/packages/fluttericon/lib/fonts/Entypo.ttf": "58edfaf27b1032ea4778b69297c02b5a",
"assets/packages/fluttericon/lib/fonts/LineariconsFree.ttf": "276b1d61e45eb9b2dde9482545d9e3ac",
"assets/packages/fluttericon/lib/fonts/MfgLabs.ttf": "09daa533ea11600a98e3148b7531afe3",
"assets/packages/fluttericon/lib/fonts/WebSymbols.ttf": "4fd66aa74cdc6e5eaff0ec916ac269c6",
"assets/packages/fluttericon/lib/fonts/Meteocons.ttf": "8b9c7982496155bb39c67eaf2a243731",
"assets/packages/fluttericon/lib/fonts/FontAwesome.ttf": "799bb4e5c577847874f20bd0e9b38a9d",
"assets/packages/fluttericon/lib/fonts/RpgAwesome.ttf": "99232001effca5cf2b5aa92cc3f3e892",
"assets/packages/fluttericon/lib/fonts/Maki.ttf": "9ecdcd7d24a2461a55d532b86b2740bd",
"assets/packages/fluttericon/lib/fonts/Linecons.ttf": "2d0ac407ed11860bf470cb01745fb144",
"assets/packages/fluttericon/lib/fonts/ModernPictograms.ttf": "5046c536516be5b91c15eb7795e0352d",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"CNAME": "4ed0c06dea6e5ba1c314318f4fd93a26",
"index.html": "f3ef487df2e0bc4ee6ab2ad6d3c66743",
"/": "f3ef487df2e0bc4ee6ab2ad6d3c66743",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"main.dart.js": "76e92a4b71766e3348632095151a87bc",
"images/locally_communities.png": "4466b6e44f9731e6c48d49e68497a496",
"images/locally_communities_abstract.png": "d20a7fd3a52af6ddc29e68e0f36adf61",
"icons/logo.png": "aee469723b034005ded9de36c62c304e",
"icons/whatsapp.png": "0cbef9a4ea4fa0501a2e8fe3efaa5ca1",
"icons/twitter.png": "5bbd2f6e37eb510db7cbac105068f85d",
"icons/location.png": "c759d1809fd21c9ab3cb9f102ba23b53",
"icons/phone.png": "e308a328701b00a013bdcd97bd148c7c",
"icons/instagram.png": "ce697f0a66e0e1cfdff8564bbc7b4395",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/facebook.png": "35a9a1655893a48c83e32a956c58d413",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/calendar.png": "d5130156cecd73b802e9c58bf8e37c10",
"exxacon_locals/casabustamante.jpeg": "6d79ad09d336272ca2fb31d992c09632",
"exxacon_locals/walk.jpeg": "3a10c910005fb1922b4758489fd9cdad",
"exxacon_locals/cuvee.png": "ea1ffb07dd187925caf92fb510951cd9",
"exxacon_locals/exacon.jpeg": "f56b8bd3e1e12bcc972b49b328d84675",
"exxacon_locals/lift.png": "08bb50f417431f8a277b96547fbc212b",
"exxacon_locals/somos.jpeg": "013cfa8a76eea1f609ea97fc55276d38",
"exxacon_locals/egana.jpeg": "d5a44b6d4cb711183fa2c7ac49927772",
".well-known/apple-app-site-association": "58b6acd92dff39b72194b84f634888c8",
".well-known/assetlinks.json": "4d4cb2bd1c33ca23dd2589b964b36c80",
"manifest.json": "3c75fa5368dc92a0b5c3bbbab1296706",
"version.json": "f364c470c17a5d65b4cf7a0a069d59bf",
"favicon.png": "7b421e85b592e800927edb62c1086707"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
