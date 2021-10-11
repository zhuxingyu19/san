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

var precacheConfig = [["/sanarchives/2020/06/index.html","3914f95808b32f2a6775db68f5401935"],["/sanarchives/2020/06/page/2/index.html","cdad90550928c5c1a72f053af8fede7b"],["/sanarchives/2020/06/page/3/index.html","345f4710a2fe371be407ece50e034b36"],["/sanarchives/2020/06/page/4/index.html","99002c1df5ee4de733a55fd2eb4396d1"],["/sanarchives/2020/06/page/5/index.html","42d5579327cbab339002b2b9e009753d"],["/sanarchives/2020/06/page/6/index.html","ce9b30a00babf20ac08eee6f1be8a8e4"],["/sanarchives/2020/07/index.html","9450492171ac09f9680f878e6505d0ce"],["/sanarchives/2020/10/index.html","5eaaff77638825fb7c2464d9e021d4f8"],["/sanarchives/2020/index.html","f7024f7f7e9ac757c7da2678efe275c7"],["/sanarchives/2020/page/2/index.html","dfb3256a2c5a655baa318e2a1388d251"],["/sanarchives/2020/page/3/index.html","83b4396542fff2e83e8baf5abf57ae6f"],["/sanarchives/2020/page/4/index.html","33ab24bc147eb78b1ade8564799835fc"],["/sanarchives/2020/page/5/index.html","9197afe8efe3c82e27fcf16b868fd704"],["/sanarchives/2020/page/6/index.html","61f569f3de4d4dcfc8320cbec6667cfe"],["/sanarchives/2021/10/index.html","93d8fb57d1ee90acdb0f170ca3c4ef46"],["/sanarchives/2021/10/page/2/index.html","4111fd37937cac7a8f2df8d1d591690d"],["/sanarchives/2021/index.html","ae0dc51b437cb793dbdaf149f5564452"],["/sanarchives/2021/page/2/index.html","e6fcd1f5bcaef7777e4ebe846f7d3bc2"],["/sanarchives/index.html","ab26993a2542ded9eb2a9b98f507f0d1"],["/sanarchives/page/2/index.html","7da1cba61218ea81511a17628e6b2071"],["/sanarchives/page/3/index.html","cec28f86c72e9643f9471d36f9c1f3d4"],["/sanarchives/page/4/index.html","b57a78b9250713e3416d03ab9676ec83"],["/sanarchives/page/5/index.html","169b5ea42ba97ad31da0077f1c8ae65b"],["/sanarchives/page/6/index.html","f8ce6eab7820dee3215982f050ae187d"],["/sanarchives/page/7/index.html","0f94fc436f6825c38de1173a6ee1c036"],["/sanarchives/page/8/index.html","ab0db8c02b3aa29b7dfd40fe1296e5f1"],["/sancategories/doc/index.html","be9bd4b757cc38a53d8bcd93bab8619d"],["/sancategories/practice/index.html","4e00023b4bdeaa1ee126cf1031337250"],["/sancategories/practice/page/2/index.html","d7d704bbd6ebdd584fe861faccbef38e"],["/sancategories/practice/page/3/index.html","58fa3a7f40c1aa55df269030a681a653"],["/sancategories/practice/page/4/index.html","daddab4a14b4e898298ee475f8ddb257"],["/sancategories/tutorial/index.html","294660769c82c2639e3c8934ca9cbe21"],["/sancategories/tutorial/page/2/index.html","3e68308f742c15d5b506a7e6eab823a1"],["/sancategories/tutorial/page/3/index.html","cada0081a6739b076737cd2312a89e8b"],["/sancategories/tutorial/page/4/index.html","9fd955af1ee9c7cc95dd6e67fa8f41e4"],["/sancss/article.css","1466f88ac23ec652897ede3fb6d7aeb6"],["/sancss/bootstrap.min.css","920f984bd041d7ab8cceade3e5805efc"],["/sancss/code.css","dbd2986caea443e5aaae6275e1b7ed14"],["/sancss/codemirror.css","288352df06a67ee35003b0981da414ac"],["/sancss/font-awesome.min.css","bb53ad7bffecc0014d64553e96501dce"],["/sancss/site.css","a69acb7758fb6586f505f007d960da3b"],["/sancss/style.css","d7c9feb685b822297cba8540448e2e04"],["/sandoc/api/index.html","d24decd0d37607d4477f2a3029e719f8"],["/sandoc/main-members/index.html","1ffab5f2d452eea047751a58ba837182"],["/sanen/doc/api/index.html","3e399326a0affe4c2f419aafe9218e43"],["/sanen/doc/main-members/index.html","55e08dfafbf3b04773bdbae825da60fe"],["/sanen/example/index.html","664350eed9fc440c450bc98290368614"],["/sanen/index.html","e8371e79f87a0dc4cd7c9f133d616d5e"],["/sanen/practice/array-deep-updates-trigger-view/index.html","c03d4570b4a8f8785910557aa012a088"],["/sanen/practice/auto-camel/index.html","3f0e9136d06ddb929023e81064eec2ef"],["/sanen/practice/can-we-use-dom/index.html","26aacee3c3abb287e41dd4ba26d0ba8e"],["/sanen/practice/child-to-grandparent/index.html","b05a9bf1206b23cc28aa906f1b92b477"],["/sanen/practice/child-to-parent/index.html","9ae1fa2e0e73109261a0302950ad1ac3"],["/sanen/practice/data-invalid/index.html","8eb7937a8008691c0197d98cdc586db6"],["/sanen/practice/data-valid/index.html","207696744ee15767f14a7e91ce53e6ea"],["/sanen/practice/dynamic-parent-child/index.html","2e20d233b336bf40235b28a5be057fa5"],["/sanen/practice/how-to-show-or-hide-an-element/index.html","bc12d3619c42370ad9d3cab126c06f59"],["/sanen/practice/index.html","4608aa15401534113bdf3199c89b2a6e"],["/sanen/practice/parent-to-child/index.html","429442c9fe051c1b38a49dd3f2bf8de2"],["/sanen/practice/position-absolute-dom/index.html","e160aa372457e975ea36c7304f3c5010"],["/sanen/practice/question-and-answer/index.html","1bdeddb62ee9ec885f86414d4ff50b61"],["/sanen/practice/san-composition-api/index.html","ad60244ab2ab6243220261a2bfca2ace"],["/sanen/practice/san-router-spa/index.html","3de765c45cf9dc5fa1f88d91b550ce78"],["/sanen/practice/san-store-spa/index.html","3fb1aea9f3a6224b77ce56229a2cd3ff"],["/sanen/practice/traverse-object/index.html","1fb1ac5f13d8deac02024558f8677bbc"],["/sanen/tutorial/background/index.html","a8fb8e0b12b84a5e11de640bf1244c15"],["/sanen/tutorial/component/index.html","4734cf0c43a97aa046e3964aefa5ed16"],["/sanen/tutorial/data-checking/index.html","8e7f55c42de790abfbd80771d3bd32de"],["/sanen/tutorial/data-method/index.html","ee712db6fc1e2e3e47b8d6ee26b82fa2"],["/sanen/tutorial/event/index.html","ae3d1a6099b951cf337573486a6d9a28"],["/sanen/tutorial/for/index.html","1bc071a36623df11342ebe8cbabe9c6b"],["/sanen/tutorial/form/index.html","abc2ad549d3045e0e0b0a146c3d263ea"],["/sanen/tutorial/if/index.html","617bf109da75178f2cdae3adea13cc44"],["/sanen/tutorial/reverse-flag/index.html","a10cc4569298b9152eb97d12ef7ee330"],["/sanen/tutorial/reverse/index.html","ad6d1964561e423883309b488d03d9f4"],["/sanen/tutorial/setup/index.html","e6f4437fe3ccc1deec183558b72b4ded"],["/sanen/tutorial/slot/index.html","997a0b0df9b21ce55814c4b1ad402529"],["/sanen/tutorial/ssr-before-3.8/index.html","cd51137aa70464e8c2af6ef80754237f"],["/sanen/tutorial/ssr/index.html","0ad2904633aab00b35899e60a7bb735f"],["/sanen/tutorial/start/index.html","86a28e9b6ddf9ac43969d2397bdb2486"],["/sanen/tutorial/style/index.html","2d3a869ef0ade0f225ee4fa2853fbaba"],["/sanen/tutorial/template/index.html","db4509c1958d3552a150d3109b81d766"],["/sanen/tutorial/transition/index.html","803846fa20e078cf5c88afef8ea7cabf"],["/sanexample/index.html","cdd059b112ed92d5cefe87900cd332cb"],["/sanfonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/sanfonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/sanfonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/sanfonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/sanimg/1.svg","d77034c37b417ef76096294de4c111bb"],["/sanimg/2.svg","fbf700664340cb41d83923a47b6e5160"],["/sanimg/3.svg","8989fb841451b7664ee31e1eda9b352b"],["/sanimg/4.svg","c7877b3cdf76c4e42dc841b1475145cc"],["/sanimg/5.svg","15c4e12ae689624dd1fb60b41a6d1ab1"],["/sanimg/6.svg","6fa71561eebdb75f7130e6d27c0d4402"],["/sanimg/7.svg","2f9f621f0455799eee836216db3cd585"],["/sanimg/8.svg","4730d9e16181617f8a75217e0a2ac23e"],["/sanimg/9.svg","28caa5650d8cbc6013f0ce9f8e6c6458"],["/sanimg/Search.svg","085ea4ef80349f1f33dc700b59932d20"],["/sanimg/Shape.svg","63ce11af494c6a2b84a5408a67814ba6"],["/sanimg/b_api.svg","e46ba603c241202ed66faef1bcb089b4"],["/sanimg/b_compass.svg","c8e132fa14a6c3328be175332c9a645b"],["/sanimg/b_design.svg","9c210ba39ad228a5c8cffa3db043b04b"],["/sanimg/b_mater.svg","9f8ad7d278d795f199bdf96c71243095"],["/sanimg/b_router.svg","8558806bc930f0ccc5d30050fe05fe07"],["/sanimg/b_store.svg","6ee10d6029b0e2a0fc6344e493efc248"],["/sanimg/b_trail.svg","6c3f8673381087390064c8d5394816ba"],["/sanimg/b_update.svg","3f30b8e8a5d022e2bb2dbeb0f72a0dee"],["/sanimg/banner-md.png","1bcfe22f30df09874804ebbad7eb0330"],["/sanimg/banner-santd.png","e237ae4ffeadae5f9aac8842f5383bef"],["/sanimg/discussion.svg","72f77ec5ba8e59c9c2b00f0e16e7c6a3"],["/sanimg/github.svg","ab014a9cc0591bda97b2225753dc6c16"],["/sanimg/github2.svg","8f9a62a9b2f440411f490122cfc00090"],["/sanimg/icons/icon-128x128.png","360e8b077017ca3f8faffb1d2dc964c5"],["/sanimg/icons/icon-144x144.png","2cac5e49e8deb470ef8d695fed8a0784"],["/sanimg/icons/icon-152x152.png","ff8a6e62206508f799e4e33dfc23a6d1"],["/sanimg/icons/icon-192x192.png","b82502d56ce18f3c4a5cbb34aab37312"],["/sanimg/icons/icon-384x384.png","52fa46d5e222a4ec290f9ba93377f606"],["/sanimg/icons/icon-512x512.png","89dc6cdd8d62328a43c8f7be5bde8841"],["/sanimg/icons/icon-72x72.png","8f98a06550f027282907ac005cafb3f0"],["/sanimg/icons/icon-96x96.png","49b0e139682345a8f578f0546a56bfba"],["/sanimg/life-cycle.png","9af0f2266923f3bdf107f717115b1ce7"],["/sanimg/logo-colorful.svg","25149c80cd625edfedcc6115dda17775"],["/sanimg/logo.svg","1bdf6b3d2b668fe5062e473e2b1860ff"],["/sanimg/logo2.png","50f59e2d6f907dbdf5720270ac745812"],["/sanimg/lowpoly.jpg","cfee0ad50ba60a1525c5b2dc3c020ac7"],["/sanimg/macbook.png","8d96db30d032572134832662ca85fc0b"],["/sanimg/pen.svg","86c390dc94bb381ac836b3635f25f47a"],["/sanimg/san-perf.png","a80f3a58d1c6a7c44b33ed90d56ff89c"],["/sanimg/search02.svg","7d27bda890fcbd9decd5d246a01c3a42"],["/sanindex.html","b5a8025fb3d4da9837cf1259f5c99cfa"],["/sanjs/anime.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/sanjs/bodymovin.min.js","40163e612f8d80acaac737f25b3641a2"],["/sanjs/codemirror.js","11af3980de7da80eacd742ecd9c37cf7"],["/sanjs/jquery-1.10.2.js","e3f24f23b859cf718282e3806ed5ce38"],["/sanjs/layout_control.js","84758cffe8e45f3a6723064605f2e5c3"],["/sanjs/script.js","eeaf47f0de9c0e891705805a70138616"],["/sanjs/stickUp.min.js","2a407130f9ed2b66cdd21407c203c149"],["/sanpage/2/index.html","260f3c95382bf3fb9d24639415024257"],["/sanpage/3/index.html","5f14b674c63bf6b16f3b52a453a1d6bf"],["/sanpage/4/index.html","365b3baf0c516ed75916520e99e4f591"],["/sanpage/5/index.html","72aed83edf86ec82ef21a681908a803a"],["/sanpage/6/index.html","d80aced3310213653ee04f8dc91feed2"],["/sanpage/7/index.html","11d4383b75507eff6e4fd45d42fd123e"],["/sanpage/8/index.html","59f53300fe556fd0bab555fa695619e3"],["/sanpractice/array-deep-updates-trigger-view/index.html","1d870347adbb85abcbe2f872a796034f"],["/sanpractice/auto-camel/index.html","363058c2806967328bfa1144c3fe9108"],["/sanpractice/can-we-use-dom/index.html","97d6a6ecf0e094a6ca6a235a91e04dc4"],["/sanpractice/child-to-grandparent/index.html","b936f5f94f7263458d53dd271927bde6"],["/sanpractice/child-to-parent/index.html","dde79d4bbe55e110a36544ccb5edb27a"],["/sanpractice/data-invalid/index.html","faffb164402b7da7811255e2ee6d2a90"],["/sanpractice/data-valid/index.html","9491f62150c497826491c554ab72fa30"],["/sanpractice/dynamic-parent-child/index.html","03f51eb4922e324c74a797b7905bacdc"],["/sanpractice/how-to-show-or-hide-an-element/index.html","87a6f58abfbe18359853fb225b03926a"],["/sanpractice/ie-compatibility/index.html","b9a6d41d8df54be432c0c10d9af3b0cf"],["/sanpractice/index.html","b645633c96de8a1d1ce9523defa44adf"],["/sanpractice/parent-to-child/index.html","7d955aab3b1e3777f091d50c167d19fc"],["/sanpractice/position-absolute-dom/index.html","dcf9c563e29aa814ce88d54037138583"],["/sanpractice/question-and-answer/index.html","c6d57c741f978cb20add1c28c9543e7a"],["/sanpractice/san-composition-api/index.html","1fe6ff8a9953ed929cee0d63294011b3"],["/sanpractice/san-router-spa/index.html","ac47460197d9a5e5b0b2d240031e548b"],["/sanpractice/san-store-spa/index.html","9c0a91ca36fdf43d715a9d3d87c45434"],["/sanpractice/traverse-object/index.html","56524956b7c6aa823933eb9959553671"],["/santutorial/background/index.html","ba289c0181b6b06c4d23c96058416a55"],["/santutorial/component/index.html","aa70458a415881d6f39034d51bfea480"],["/santutorial/data-checking/index.html","816df5b31ba1e909bbc7b4b6caa2db64"],["/santutorial/data-method/index.html","f95b50886ab174538a7b0bb7c2fe5cdd"],["/santutorial/event/index.html","b2695fc709b769f63eb5b62616e76319"],["/santutorial/for/index.html","8d1ec4f542b8b04a05b643eb6917085e"],["/santutorial/form/index.html","d77babd7983a075d590546872cbbde1d"],["/santutorial/if/index.html","abd6be6c86ddd8eb4b52df9147b35450"],["/santutorial/reverse-flag/index.html","34943e443bfadd1db47733c5cf182b5f"],["/santutorial/reverse/index.html","ff26c3838fef4b128b0dd0bf8933971c"],["/santutorial/setup/index.html","fda80d34914610bc39db4edd218a9cb4"],["/santutorial/slot/index.html","49d7dae4380b2a27d950c3cc4748da8c"],["/santutorial/ssr-before-3.8/index.html","3bab5eba9e1665ec89f4df45d5f560c8"],["/santutorial/ssr/index.html","3a40e286fa388e6e1cea572da21d3130"],["/santutorial/start/index.html","84e735bf1bf89fd3ccdd6d93097089a3"],["/santutorial/style/index.html","bab388287f07d103c9a1c53e5def947e"],["/santutorial/template/index.html","2a3f01762b8819f48fee099a49127fb4"],["/santutorial/transition/index.html","c854861668238d0d4a7f42d007e84305"]];
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







