'use strict';
//使用阿里的CDN
importScripts('./workbox-sw.js');
// importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');
console.log(workbox);
if(workbox){
  workbox.setConfig({
    modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
  });
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
    workbox.strategies.cacheFirst({
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
  console.log('workbox bad!!!!!')
}

