importScripts('https://www.jsonkk.com/utils/workbox-sw.js');
import {registerRoute} from 'workbox-routing';
import * as strategies from 'workbox-strategies';

if(registerRoute && strategies){
  console.log(workbox);
  // workbox.core.setCacheNameDetails({
  //   prefix: 'sw-tools',
  //   suffix: 'v1',
  //   precache: 'precache',
  //   runtime: 'runtime-cache'
  // });

  // workbox.skipWaiting();
  // workbox.clientsClaim();

  // workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/g,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
      // Use a custom cache name
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.Plugin({
          // Cache only 20 images
          // maxEntries: 300,
          // Cache for a maximum of a week
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  );

  workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.js/,
    // Use cache but update in the background ASAP
    new workbox.strategies.StaleWhileRevalidate({
      // Use a custom cache name
      cacheName: 'js-cache',
    })
  );

  workbox.routing.registerRoute(
    /.*\.html/,
    workbox.strategies.cacheFirst({
      cacheName: 'image-cache-html'
    })
  );
  

  workbox.routing.registerRoute(
    /^https:\/\/avatar01\.jiaoliuqu\.com\/.*$/g,
    workbox.strategies.cacheFirst({
      cacheName: 'image-cache-online'
    })
  );
}
else{
  console.log('workbox id loaded bad');
}