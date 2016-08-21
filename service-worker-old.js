/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';





// /* eslint-disable quotes, comma-spacing */
// var PrecacheConfig = [["/bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","df7848e8df60dfc3ddaef86845914e37"],["/bower_components/app-layout/app-drawer/app-drawer.html","5f00d3d4ef46df22c5c3dc6e361ab15d"],["/bower_components/app-layout/app-header-layout/app-header-layout.html","893a47cb8cb722eebdc22c4cc8007d05"],["/bower_components/app-layout/app-header/app-header.html","e5b01aeb8a13089154a3e5b340868086"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","350fc37d1d1c7044c213567b6039da09"],["/bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","1eaa9e05144414be49e4ee23e16ceca2"],["/bower_components/app-layout/app-scroll-effects/effects/blend-background.html","4723ce7f6429640a812ad866ddddb719"],["/bower_components/app-layout/app-scroll-effects/effects/fade-background.html","3929482c600a21680def557965850501"],["/bower_components/app-layout/app-scroll-effects/effects/material.html","271fe6e745f1a9581a6e01cb3aadce21"],["/bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","391d025dcffee3f042c9d2bdd83be377"],["/bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","21886b073d93530ccaf667163fccf8ba"],["/bower_components/app-layout/app-scroll-effects/effects/resize-title.html","e78249dd83abc97d40411e4032250c77"],["/bower_components/app-layout/app-scroll-effects/effects/waterfall.html","a21d6a2fc019eb59d10586aada74313e"],["/bower_components/app-layout/app-toolbar/app-toolbar.html","bf8d516030e7d6a31d8b7fc4a7c22051"],["/bower_components/app-layout/helpers/helpers.html","95b52c0c05f77b65bc1b5dc0715d2495"],["/bower_components/app-route/app-location.html","52b3d8b5ecbb838b41bd9bd0ae556cca"],["/bower_components/app-route/app-route-converter-behavior.html","0e5b36ae9988a88bb30729fdb99a5d94"],["/bower_components/app-route/app-route.html","624ca199d36389f3db04597a593548ec"],["/bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-client.html","ff8e3130825f7c870844a28fa28b3eb4"],["/bower_components/app-storage/app-indexeddb-mirror/app-indexeddb-mirror.html","13385e6bb1786296f603d21b281cc7ed"],["/bower_components/app-storage/app-indexeddb-mirror/common-worker.html","b2c800e151abaa31663f8e96d1be296b"],["/bower_components/app-storage/app-network-status-behavior.html","da5ca8e23c23932448b728ee17c1234e"],["/bower_components/app-storage/app-storage-behavior.html","009d20c8051259c21d6095736d7213ab"],["/bower_components/firebase/firebase.js","b8a5875d4fb69bbb240a47db7738ff7e"],["/bower_components/font-roboto/roboto.html","09500fd5adfad056ff5aa05e2aae0ec5"],["/bower_components/geo-location/geo-location.html","b88b96e22411da94b590a8de58f8accc"],["/bower_components/google-apis/google-maps-api.html","e4eb1641cec251f631cec2f569e8a551"],["/bower_components/google-map/google-map-marker.html","d4432d8c2b75325d455c0f975d76107a"],["/bower_components/google-map/google-map.html","f8b665c2abb72b7b661a5e465146aac7"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","a3bd031e39dde38cb8e619f670ee50f7"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","b9a8e766d0ab03a5d13e275754ec3d54"],["/bower_components/iron-behaviors/iron-button-state.html","6565a80d1af09299c1201f8286849c3b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","6fd1055c2c04382401dc910a0db569c6"],["/bower_components/iron-flex-layout/iron-flex-layout.html","3987521c615734e4fe403f9acecfea54"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-icon/iron-icon.html","23fe3af4b80a767dc9ec5e2e0ac5ab42"],["/bower_components/iron-icons/iron-icons.html","c8f9154ae89b94e658e4a52eee690a16"],["/bower_components/iron-icons/maps-icons.html","071389c5d61ac4ab2f39dc1d784ece94"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8fb45b1b4668dae069f5efb5004c2af4"],["/bower_components/iron-input/iron-input.html","3e393eda6c241be2817ce0acc512bcf6"],["/bower_components/iron-jsonp-library/iron-jsonp-library.html","2278dab473da8287511ea8f8eb30144d"],["/bower_components/iron-location/iron-location.html","b999e8754a2e8fdde266884e47cefa04"],["/bower_components/iron-location/iron-query-params.html","4939f7b89ff899694a27bd1563543184"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-pages/iron-pages.html","5872a2ad58225c94b14ddea747f67cbd"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","e93449ccd4312e4e30060c87bd52ed25"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","0185cbe8d7139c9e92af3a9af67feb17"],["/bower_components/iron-selector/iron-multi-selectable.html","46d6620acd7bad986d81097d9ca91692"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/paper-behaviors/paper-button-behavior.html","edddd3f97cf3ea944f3a48b4154939e8"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-button/paper-button.html","3f061a077ee938fac479622156071296"],["/bower_components/paper-icon-button/paper-icon-button.html","2a75de00f858ae1e894ab21344464787"],["/bower_components/paper-input/paper-input-addon-behavior.html","de7b482dc1fb01847efba9016db16206"],["/bower_components/paper-input/paper-input-behavior.html","3960579058d3ba0a74ae7b67b78f53c2"],["/bower_components/paper-input/paper-input-char-counter.html","94c2003f281325951e3bf5b927a326bb"],["/bower_components/paper-input/paper-input-container.html","e3c61b8a6e35b134c99c09381ef48067"],["/bower_components/paper-input/paper-input-error.html","b90f3a86d797f1bdbbb4d158aeae06ab"],["/bower_components/paper-input/paper-input.html","f708f70df27e8323533cd893dba835b0"],["/bower_components/paper-material/paper-material-shared-styles.html","d0eeeb696e55702f3a38ef1ad0058f59"],["/bower_components/paper-ripple/paper-ripple.html","e22bc21b61184cb28125d16f9d80fb59"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/shadow.html","7fd97f2613eb356e1bb901e37c3e8980"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/paper-toggle-button/paper-toggle-button.html","1167f1efdeb31dce3099a48f6e836015"],["/bower_components/polymer/polymer-micro.html","7739e37db5581472b91925e5fa9bde55"],["/bower_components/polymer/polymer-mini.html","9e9dfb157eae29a59c98343288d4d120"],["/bower_components/polymer/polymer.html","2dce719d53b7ea549067d3d21a2b2c29"],["/bower_components/polymerfire/firebase-app.html","c13dbf9342a6412ac40fea3ead9b8096"],["/bower_components/polymerfire/firebase-auth.html","3835b22698c323c20447adc93cd794ae"],["/bower_components/polymerfire/firebase-common-behavior.html","d0d6e3c959711eaba4cdca62b4d483c0"],["/bower_components/polymerfire/firebase-database-behavior.html","7d3625b60cc874e2599c201f581a8b8c"],["/bower_components/polymerfire/firebase-document.html","bf81bc1d7bfcff836aa8209d8cb2ada8"],["/bower_components/polymerfire/firebase-query.html","d601530bf7e81af73c5b9d7893d87fb9"],["/bower_components/polymerfire/firebase.html","4f28951d4ca113234446d04a53364b10"],["/bower_components/polymerfire/polymerfire.html","ffc2b814331fab50a4a263beb093848b"],["/bower_components/promise-polyfill/Promise-Statics.js","70aae9f4cda9742d6bf080f4a0b739ab"],["/bower_components/promise-polyfill/Promise.js","5afb14fd81497aca81bf25929d65b02d"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/promise-polyfill/promise-polyfill.html","97dd009429dbc654aa105abcd0dfb927"],["/index.html","f3fa10825b940c635fa57da0c425280e"],["/src/my-app.html","88308bb357e2b74e06afbeddeced9552"],["/src/my-icons.html","d957def570bfda7fffb60e6caa896006"],["/src/my-view1.html","8fb2a19a8e97150d380e47c43e0bf82b"],["/src/my-view2.html","5040821fcbf2a3bbc09648b962459519"],["/src/my-view3.html","6cce17d4654664173a42b85a7f7bca02"],['/bower_components/IDB/idb.js'],['/src/indexDbController.js']];
// /* eslint-enable quotes, comma-spacing */
// var CacheNamePrefix = 'sw-precache-v1--' + (self.registration ? self.registration.scope : '') + '-';


// var IgnoreUrlParametersMatching = [/^utm_/];



// var addDirectoryIndex = function (originalUrl, index) {
//     var url = new URL(originalUrl);
//     if (url.pathname.slice(-1) === '/') {
//       url.pathname += index;
//     }
//     return url.toString();
//   };

// var getCacheBustedUrl = function (url, param) {
//     param = param || Date.now();

//     var urlWithCacheBusting = new URL(url);
//     urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
//       'sw-precache=' + param;

//     return urlWithCacheBusting.toString();
//   };

// var isPathWhitelisted = function (whitelist, absoluteUrlString) {
//     // If the whitelist is empty, then consider all URLs to be whitelisted.
//     if (whitelist.length === 0) {
//       return true;
//     }

//     // Otherwise compare each path regex to the path of the URL passed in.
//     var path = (new URL(absoluteUrlString)).pathname;
//     return whitelist.some(function(whitelistedPathRegex) {
//       return path.match(whitelistedPathRegex);
//     });
//   };

// var populateCurrentCacheNames = function (precacheConfig,
//     cacheNamePrefix, baseUrl) {
//     var absoluteUrlToCacheName = {};
//     var currentCacheNamesToAbsoluteUrl = {};

//     precacheConfig.forEach(function(cacheOption) {
//       var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
//       var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
//       currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
//       absoluteUrlToCacheName[absoluteUrl] = cacheName;
//     });

//     return {
//       absoluteUrlToCacheName: absoluteUrlToCacheName,
//       currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
//     };
//   };

// var stripIgnoredUrlParameters = function (originalUrl,
//     ignoreUrlParametersMatching) {
//     var url = new URL(originalUrl);

//     url.search = url.search.slice(1) // Exclude initial '?'
//       .split('&') // Split into an array of 'key=value' strings
//       .map(function(kv) {
//         return kv.split('='); // Split each 'key=value' string into a [key, value] array
//       })
//       .filter(function(kv) {
//         return ignoreUrlParametersMatching.every(function(ignoredRegex) {
//           return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
//         });
//       })
//       .map(function(kv) {
//         return kv.join('='); // Join each [key, value] array into a 'key=value' string
//       })
//       .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

//     return url.toString();
//   };


// var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
// var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
// var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

// function deleteAllCaches() {
//   return caches.keys().then(function(cacheNames) {
//     return Promise.all(
//       cacheNames.map(function(cacheName) {
//         return caches.delete(cacheName);
//       })
//     );
//   });
// }

// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     // Take a look at each of the cache names we expect for this version.
//     Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
//       return caches.open(cacheName).then(function(cache) {
//         // Get a list of all the entries in the specific named cache.
//         // For caches that are already populated for a given version of a
//         // resource, there should be 1 entry.
//         return cache.keys().then(function(keys) {
//           // If there are 0 entries, either because this is a brand new version
//           // of a resource or because the install step was interrupted the
//           // last time it ran, then we need to populate the cache.
//           if (keys.length === 0) {
//             // Use the last bit of the cache name, which contains the hash,
//             // as the cache-busting parameter.
//             // See https://github.com/GoogleChrome/sw-precache/issues/100
//             var cacheBustParam = cacheName.split('-').pop();
//             var urlWithCacheBusting = getCacheBustedUrl(
//               CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

//             var request = new Request(urlWithCacheBusting,
//               {credentials: 'same-origin'});
//             return fetch(request).then(function(response) {
//               if (response.ok) {
//                 return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
//                   response);
//               }

//               console.error('Request for %s returned a response status %d, ' +
//                 'so not attempting to cache it.',
//                 urlWithCacheBusting, response.status);
//               // Get rid of the empty cache if we can't add a successful response to it.
//               return caches.delete(cacheName);
//             });
//           }
//         });
//       });
//     })).then(function() {
//       return caches.keys().then(function(allCacheNames) {
//         return Promise.all(allCacheNames.filter(function(cacheName) {
//           return cacheName.indexOf(CacheNamePrefix) === 0 &&
//             !(cacheName in CurrentCacheNamesToAbsoluteUrl);
//           }).map(function(cacheName) {
//             return caches.delete(cacheName);
//           })
//         );
//       });
//     }).then(function() {
//       if (typeof self.skipWaiting === 'function') {
//         // Force the SW to transition from installing -> active state
//         self.skipWaiting();
//       }
//     })
//   );
// });

// if (self.clients && (typeof self.clients.claim === 'function')) {
//   self.addEventListener('activate', function(event) {
//     event.waitUntil(self.clients.claim());
//   });
// }

// self.addEventListener('message', function(event) {
//   if (event.data.command === 'delete_all') {
//     console.log('About to delete all caches...');
//     deleteAllCaches().then(function() {
//       console.log('Caches deleted.');
//       event.ports[0].postMessage({
//         error: null
//       });
//     }).catch(function(error) {
//       console.log('Caches not deleted:', error);
//       event.ports[0].postMessage({
//         error: error
//       });
//     });
//   }
// });


// self.addEventListener('fetch', function(event) {
//   if (event.request.method === 'GET') {
//     var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
//       IgnoreUrlParametersMatching);
  

//     var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
//     var directoryIndex = 'index.html';
//     if (!cacheName && directoryIndex) {
//       urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
//       cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
//     }

//     var navigateFallback = '/index.html';
//     // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
//     // supported yet:
//     // https://code.google.com/p/chromium/issues/detail?id=540967
//     // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
//     if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
//         event.request.headers.get('accept').includes('text/html') &&
//         /* eslint-disable quotes, comma-spacing */
//         isPathWhitelisted([], event.request.url)) {
//         /* eslint-enable quotes, comma-spacing */
//       var navigateFallbackUrl = new URL(navigateFallback, self.location);
//       cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
//     }

//     if (cacheName) {
//       event.respondWith(
//         // Rely on the fact that each cache we manage should only have one entry, and return that.
//         caches.open(cacheName).then(function(cache) {
//           return cache.keys().then(function(keys) {
//             return cache.match(keys[0]).then(function(response) {
//               if (response) {
//                 return response;
//               }
//               // If for some reason the response was deleted from the cache,
//               // raise and exception and fall back to the fetch() triggered in the catch().
//               throw Error('The cache ' + cacheName + ' is empty.');
//             });
//           });
//         }).catch(function(e) {
//           console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
//           return fetch(event.request);
//         })
//       );
//     }
//   }
// });


// self.addEventListener("push", function(event) {
//   console.log("Event: Push", event);

//   var title = "Push notification demo";
//   var body = "You have received a notification";
//   var tag = "demo";
//   var icon = "./images/rain.png";

//   event.waitUntil(
//     self.registration.showNotification(title, {
//       body: body,
//       tag: tag,
//       icon: icon
//     })
//   );
// });


