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

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/sanarchives/2020/06/index.html","b9aa541c35d93d1d4728a326222969b4"],["/sanarchives/2020/06/page/2/index.html","e201acf0ff1603a5d8346ebd3bd83465"],["/sanarchives/2020/06/page/3/index.html","b255ea0e598623275d22a31b723a49e7"],["/sanarchives/2020/06/page/4/index.html","f502818b8b705e2c040e7f062ea6ccee"],["/sanarchives/2020/06/page/5/index.html","bc86dfb19e2dc3369828bcb4abd296fe"],["/sanarchives/2020/06/page/6/index.html","447cc09f8bcd52ee43d38b40ba337d17"],["/sanarchives/2020/06/page/7/index.html","a5af154f01651e7e48b199c7711eaae8"],["/sanarchives/2020/06/page/8/index.html","facae3b35617d66f171b88dbde4cc03a"],["/sanarchives/2020/index.html","131f8570833dbc79f1798967550d7427"],["/sanarchives/2020/page/2/index.html","e1fdbccea408009c729212c5af4f635e"],["/sanarchives/2020/page/3/index.html","7ce1b99e3d7a6947477f88a4c66ddf30"],["/sanarchives/2020/page/4/index.html","9e322357b24a5fb8619985a43e06f8b8"],["/sanarchives/2020/page/5/index.html","7c4e0d8a6919863387130be4ca2e62bd"],["/sanarchives/2020/page/6/index.html","160f56b5295558a3dbc9c1ec074df096"],["/sanarchives/2020/page/7/index.html","6318d2e49bb7401962510193c65ea2cb"],["/sanarchives/2020/page/8/index.html","6a03afd0995c0bdc7e035f5d77e938db"],["/sanarchives/index.html","78a0c0b7b4845a43bac13290f7c4d84c"],["/sanarchives/page/2/index.html","13891054d37f2542e2f283dc60e8df8e"],["/sanarchives/page/3/index.html","89adbf56e73c3331ce008918fe487a19"],["/sanarchives/page/4/index.html","7909edc9a6d4f412686fa578d8d4618c"],["/sanarchives/page/5/index.html","89faf4050d62ab670f4be62cc6a55661"],["/sanarchives/page/6/index.html","cc9466e725d3e00a7958adb8f097b7be"],["/sanarchives/page/7/index.html","839d5287a0729ff92edc9230e1f0f1cd"],["/sanarchives/page/8/index.html","dd649014e74f63498e222b005028f749"],["/sancategories/doc/index.html","77dd3ea911024d77249692b991b48f15"],["/sancategories/practice/index.html","2e3e6b4d110dd5c49f0b2c5b3f2c48ac"],["/sancategories/practice/page/2/index.html","a69fa8d347f6be3fcd3ea675ec60dcac"],["/sancategories/practice/page/3/index.html","4c26366bc562aba25deb8223852896d7"],["/sancategories/practice/page/4/index.html","f0fab2ad2d8865868d2a03f2f9318122"],["/sancategories/tutorial/index.html","3c5974af2a6b0461844b7646daf30f8b"],["/sancategories/tutorial/page/2/index.html","bedca137cc375dc09e532e63d50c4d94"],["/sancategories/tutorial/page/3/index.html","e33693a313a286226f02d194f25461e6"],["/sancategories/tutorial/page/4/index.html","6cee85241291ded4d0cf52ae9d8fa9be"],["/sancss/article.css","1466f88ac23ec652897ede3fb6d7aeb6"],["/sancss/bootstrap.min.css","920f984bd041d7ab8cceade3e5805efc"],["/sancss/code.css","dbd2986caea443e5aaae6275e1b7ed14"],["/sancss/codemirror.css","288352df06a67ee35003b0981da414ac"],["/sancss/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/sancss/site.css","0571a8ba6f9364b70777ded914a0a50e"],["/sancss/style.css","d7c9feb685b822297cba8540448e2e04"],["/sandoc/api/index.html","1d5be570eaeb67d9520fe1feff5fc124"],["/sandoc/main-members/index.html","cf6cc40d68bde16a8fd337e4d1d6ed2e"],["/sanen/doc/api/index.html","88b284e923dfcbaabf5fc7681c403587"],["/sanen/doc/main-members/index.html","80eb0864ea1b874d798e4b12b48ab11a"],["/sanen/example/index.html","acb6e296c45a90f1215efbca9a1b9f39"],["/sanen/index.html","6978006ba56b57becaa86e4fbecf4ee9"],["/sanen/practice/array-deep-updates-trigger-view/index.html","078d1a124334761e23a1eab2580baf1a"],["/sanen/practice/auto-camel/index.html","64a7db6b82256c8a5c22272c3d6b1c41"],["/sanen/practice/can-we-use-dom/index.html","1d1c997bb10be393877dd802b798cfc5"],["/sanen/practice/child-to-grandparent/index.html","84711474bcdbc373bee52b54ee470b6c"],["/sanen/practice/child-to-parent/index.html","13e784903c940beb293685950e7f5200"],["/sanen/practice/data-invalid/index.html","370f0e8aaa4d4ea1b8a2fb38012ad94a"],["/sanen/practice/data-valid/index.html","63627d5b4ff7e0901056f64be889cdc0"],["/sanen/practice/dynamic-parent-child/index.html","728bbbbc6c21ae1a394147384ed4b415"],["/sanen/practice/how-to-show-or-hide-an-element/index.html","4cdf923851e165f309675a401fdc1e6d"],["/sanen/practice/index.html","980bc955ea5e7d9f0f0ab3e44ecd3f4a"],["/sanen/practice/parent-to-child/index.html","b829b0d1c1ffbcea9582cecb063d8e4e"],["/sanen/practice/position-absolute-dom/index.html","3f57b8b49f1213db98430b5b7311ace0"],["/sanen/practice/question-and-answer/index.html","5ded558f86398f5fe97116c3a4d7086f"],["/sanen/practice/san-router-spa/index.html","9e51da233c9fcbd07041ebd65165a87e"],["/sanen/practice/san-store-spa/index.html","45251ce49c895e66c50ba346eedc0668"],["/sanen/practice/traverse-object/index.html","58ad2412162058e7ad68371aeadb04dc"],["/sanen/tutorial/background/index.html","ebdc91a98c6f86dbec92674232793b1c"],["/sanen/tutorial/component/index.html","2644a6e421cbd8d33aa6c7ca26db7d79"],["/sanen/tutorial/data-checking/index.html","c3807ef354e877a613a83f0c03b58199"],["/sanen/tutorial/data-method/index.html","b19cd3168f229cc6a06f3f75c52d8116"],["/sanen/tutorial/event/index.html","3ae34bbbb707620f6283f5ea6040a050"],["/sanen/tutorial/for/index.html","1d36fce06f40a87b9d3f952ef19fbb8e"],["/sanen/tutorial/form/index.html","68c049a64a23fef7ef17b493f7375dca"],["/sanen/tutorial/if/index.html","c12392a64904e52ff4437635b0d81022"],["/sanen/tutorial/reverse-flag/index.html","33642fde33c35198bf4406b04447c514"],["/sanen/tutorial/reverse/index.html","30fe66de304250442fa25a6234a8581f"],["/sanen/tutorial/setup/index.html","2d6875bb2b6c6a5b37888dfba5a1e7e1"],["/sanen/tutorial/slot/index.html","6d8973389dc78b343123eb4b9228ed8b"],["/sanen/tutorial/ssr-before-3.8/index.html","57a16f3b519ea26f2aa3d12f03cf6020"],["/sanen/tutorial/ssr/index.html","279b1a84dda86138a194e228aa7f39ac"],["/sanen/tutorial/start/index.html","dee136edf5059b3f6a71c4da44ec55f2"],["/sanen/tutorial/style/index.html","1154c21dd513ade9e70ebc24056c61d0"],["/sanen/tutorial/template/index.html","3903efc7be8ad796e3c8e9df54f82e8a"],["/sanen/tutorial/transition/index.html","46c1bab52394f7530eb62f532a8493b4"],["/sanexample/index.html","8aa81ee3e8b453fb4a445fbd58fab423"],["/sanfonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/sanfonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/sanfonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/sanfonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/sanimg/1.svg","d77034c37b417ef76096294de4c111bb"],["/sanimg/2.svg","fbf700664340cb41d83923a47b6e5160"],["/sanimg/3.svg","8989fb841451b7664ee31e1eda9b352b"],["/sanimg/4.svg","c7877b3cdf76c4e42dc841b1475145cc"],["/sanimg/5.svg","15c4e12ae689624dd1fb60b41a6d1ab1"],["/sanimg/6.svg","6fa71561eebdb75f7130e6d27c0d4402"],["/sanimg/7.svg","2f9f621f0455799eee836216db3cd585"],["/sanimg/8.svg","4730d9e16181617f8a75217e0a2ac23e"],["/sanimg/9.svg","28caa5650d8cbc6013f0ce9f8e6c6458"],["/sanimg/Search.svg","085ea4ef80349f1f33dc700b59932d20"],["/sanimg/Shape.svg","63ce11af494c6a2b84a5408a67814ba6"],["/sanimg/b_api.svg","e46ba603c241202ed66faef1bcb089b4"],["/sanimg/b_compass.svg","c8e132fa14a6c3328be175332c9a645b"],["/sanimg/b_design.svg","9c210ba39ad228a5c8cffa3db043b04b"],["/sanimg/b_mater.svg","9f8ad7d278d795f199bdf96c71243095"],["/sanimg/b_router.svg","8558806bc930f0ccc5d30050fe05fe07"],["/sanimg/b_store.svg","6ee10d6029b0e2a0fc6344e493efc248"],["/sanimg/b_trail.svg","6c3f8673381087390064c8d5394816ba"],["/sanimg/b_update.svg","3f30b8e8a5d022e2bb2dbeb0f72a0dee"],["/sanimg/banner-md.png","1bcfe22f30df09874804ebbad7eb0330"],["/sanimg/banner-santd.png","e237ae4ffeadae5f9aac8842f5383bef"],["/sanimg/github.svg","ab014a9cc0591bda97b2225753dc6c16"],["/sanimg/github2.svg","8f9a62a9b2f440411f490122cfc00090"],["/sanimg/icons/icon-128x128.png","360e8b077017ca3f8faffb1d2dc964c5"],["/sanimg/icons/icon-144x144.png","2cac5e49e8deb470ef8d695fed8a0784"],["/sanimg/icons/icon-152x152.png","ff8a6e62206508f799e4e33dfc23a6d1"],["/sanimg/icons/icon-192x192.png","b82502d56ce18f3c4a5cbb34aab37312"],["/sanimg/icons/icon-384x384.png","52fa46d5e222a4ec290f9ba93377f606"],["/sanimg/icons/icon-512x512.png","89dc6cdd8d62328a43c8f7be5bde8841"],["/sanimg/icons/icon-72x72.png","8f98a06550f027282907ac005cafb3f0"],["/sanimg/icons/icon-96x96.png","49b0e139682345a8f578f0546a56bfba"],["/sanimg/life-cycle.png","a42f7cf9b1dd363efe19ddf6cbcc11c2"],["/sanimg/logo-colorful.svg","25149c80cd625edfedcc6115dda17775"],["/sanimg/logo.svg","1bdf6b3d2b668fe5062e473e2b1860ff"],["/sanimg/logo2.png","50f59e2d6f907dbdf5720270ac745812"],["/sanimg/lowpoly.jpg","cfee0ad50ba60a1525c5b2dc3c020ac7"],["/sanimg/macbook.png","8d96db30d032572134832662ca85fc0b"],["/sanimg/pen.svg","86c390dc94bb381ac836b3635f25f47a"],["/sanimg/san-perf.png","a80f3a58d1c6a7c44b33ed90d56ff89c"],["/sanimg/search02.svg","7d27bda890fcbd9decd5d246a01c3a42"],["/sanindex.html","a7d12877d81f98ad31eeb4b8766d9214"],["/sanjs/bodymovin.min.js","40163e612f8d80acaac737f25b3641a2"],["/sanjs/codemirror.js","11af3980de7da80eacd742ecd9c37cf7"],["/sanjs/jquery-1.10.2.js","e3f24f23b859cf718282e3806ed5ce38"],["/sanjs/layout_control.js","84758cffe8e45f3a6723064605f2e5c3"],["/sanjs/script.js","536985cb34cdea52711130cb34549ace"],["/sanjs/stickUp.min.js","2a407130f9ed2b66cdd21407c203c149"],["/sanpage/2/index.html","17bdbfe3471dbeaa8a3558994b2e62b8"],["/sanpage/3/index.html","0ba9771a4b6f25b8b62d7382b1f97810"],["/sanpage/4/index.html","568fb4fcebeef240ffc6e6384ce91727"],["/sanpage/5/index.html","b8740fd9b6403cb691a89cdc7c5b69da"],["/sanpage/6/index.html","67d9fcce6136e8c85c2a40f8e31ca3e0"],["/sanpage/7/index.html","6e469f729f76f53c08ffd62695e233ce"],["/sanpage/8/index.html","5e23266e61ba930f014f62e2656bf04c"],["/sanpractice/array-deep-updates-trigger-view/index.html","e73e4f1d4a451b6c42cab27ca3d2ee5b"],["/sanpractice/auto-camel/index.html","f1d9d9cd609c5c497dc9bc2a2445750a"],["/sanpractice/can-we-use-dom/index.html","24b3d674478022387c1b13e1e4e45e78"],["/sanpractice/child-to-grandparent/index.html","a2965af21f92dd1f9bba56cda0f15a79"],["/sanpractice/child-to-parent/index.html","ecfa6fa7f1c859e1bcb1245723ef1114"],["/sanpractice/data-invalid/index.html","07087aa4811e68b2b5cea5d445f684cd"],["/sanpractice/data-valid/index.html","6b77bc0b1fc7083e3fd111c1d0ff7754"],["/sanpractice/dynamic-parent-child/index.html","a00a803a1ad2f6bfe61242849da70db3"],["/sanpractice/how-to-show-or-hide-an-element/index.html","6df887b5b39ca95ac6c405ae7d5861b6"],["/sanpractice/ie-compatibility/index.html","d0545ec41bc670940eb18a5aea605b16"],["/sanpractice/index.html","e7b7738d367f2484d8a466a20687ebe9"],["/sanpractice/parent-to-child/index.html","d53944b36dc26ee3bfaeea98c31f956d"],["/sanpractice/position-absolute-dom/index.html","090c07b2a048f737353832111c1f44cb"],["/sanpractice/question-and-answer/index.html","0cca6b0d4b8b8b85e99be30033338c0f"],["/sanpractice/san-router-spa/index.html","62964a416996ac947bf7ed7bf04307fe"],["/sanpractice/san-store-spa/index.html","69a57b2d6c048290075b093b033a5543"],["/sanpractice/traverse-object/index.html","18ccf65ea63176d21998b7c5b8d73e12"],["/santutorial/background/index.html","511a36f97c0dded4244895e93cc4bea3"],["/santutorial/component/index.html","354d9dbb6405f9cff5382a500106dd13"],["/santutorial/data-checking/index.html","4e32856c2463bff84c7fac7106aff879"],["/santutorial/data-method/index.html","da3e0501ded1aeef61b8c5cba03008b0"],["/santutorial/event/index.html","c45df5584f9c15723266ee3b2ec4e53d"],["/santutorial/for/index.html","5a09524a1d4905aa490c9b261c3ecc8e"],["/santutorial/form/index.html","c7e6819e1596bc8c483ccdb396936059"],["/santutorial/if/index.html","1db42d73ac34dc8518d2b43d0257fc03"],["/santutorial/reverse-flag/index.html","b0316f4a12e6f57e2ea1333b7c445213"],["/santutorial/reverse/index.html","aa2859059af98b7eb362e847f105252a"],["/santutorial/setup/index.html","16c3959fd848ffe19a3932b04f0dffec"],["/santutorial/slot/index.html","f544475f5ce0d00231238653a0c26223"],["/santutorial/ssr-before-3.8/index.html","547109ea22fb1a8233d57b6a79346ab8"],["/santutorial/ssr/index.html","9b14336f2f0852ab5b538482ccaa5e38"],["/santutorial/start/index.html","cb580cacc490759d39f9f38e1f706a8e"],["/santutorial/style/index.html","69ec977dfb4d2b436790c892ba5dd448"],["/santutorial/template/index.html","3165ae5199636be64533d10671c61e17"],["/santutorial/transition/index.html","63efba347330ea42c2cd68bf5e65efd5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







