import {precacheAndRoute} from 'workbox-precaching';
precacheAndRoute(self.__WB_MANIFEST);
// importScripts('https://www.jsonkk.com/utils/workbox-sw.js');
import {registerRoute} from 'workbox-routing';
import * as strategies from 'workbox-strategies';
console.log(registerRoute);
if(registerRoute && strategies){
  // workbox.core.setCacheNameDetails({
  //   prefix: 'sw-tools',
  //   suffix: 'v1',
  //   precache: 'precache',
  //   runtime: 'runtime-cache'
  // });

  // workbox.skipWaiting();
  // workbox.clientsClaim();

  // workbox.precaching.precacheAndRoute(self.__precacheManifest);
  registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/g,
    // Use the cache if it's available
    new strategies.CacheFirst({
      // Use a custom cache name
      cacheName: 'image-cache',
      plugins: [
        // new workbox.expiration.Plugin({
        //   // Cache only 20 images
        //   // maxEntries: 300,
        //   // Cache for a maximum of a week
        //   maxAgeSeconds: 7 * 24 * 60 * 60,
        // })
      ],
    })
  );

  registerRoute(
    // Cache CSS files
    /.*\.js/,
    // Use cache but update in the background ASAP
    new strategies.NetworkFirst({
      // Use a custom cache name
      cacheName: 'js-cache',
    })
  );

  registerRoute(
    /.*\.html/,
    new strategies.CacheFirst({
      cacheName: 'image-cache-html'
    })
  );
  

  registerRoute(
    /^https:\/\/avatar01\.jiaoliuqu\.com\/.*$/g,
    new strategies.CacheFirst({
      cacheName: 'image-cache-online'
    })
  );
}
else{
  console.log('workbox id loaded bad');
}