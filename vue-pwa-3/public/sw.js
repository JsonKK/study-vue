'use strict';
// 引用workbox插件
importScripts('./workbox-sw.js');
//使用阿里的CDN
// importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');
//如果插件引用成功会在全局定义一个workbox对象
if(workbox){
  //告诉workbox-cli workbox-sw插件文件位置
  workbox.setConfig({
    modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
  });
  workbox.routing.registerRoute(
    // 正则匹配文件
    /.*\.(?:png|jpg|jpeg|svg|gif|ico)/g,
    // 使用缓存有限策略
    workbox.strategies.cacheFirst({
      // 定义缓存名称
      cacheName: 'image-cache',
      plugins: [
        // 使用文件管理插件
        new workbox.expiration.Plugin({
          // 最多存储多少个文件
          // maxEntries: 300,
          // 最长存储时间，单位秒
          maxAgeSeconds: 7 * 24 * 60 * 60,
        })
      ],
    })
  );

  workbox.routing.registerRoute(
    // 存储js文件
    /.*\.js/,
    // 使用本地资源优先策略
    workbox.strategies.cacheFirst({
      cacheName: 'js-cache',
    })
  );

  workbox.routing.registerRoute(
    /.*\.html/,
    //使用远程资源有限策略
    workbox.strategies.networkFirst({
      cacheName: 'cache-html'
    })
  );

  workbox.routing.registerRoute(
    /^localhost/g,
    workbox.strategies.cacheFirst({
      cacheName: 'cache-html'
    })
  );
  

  workbox.routing.registerRoute(
    /^https:\/\/avatar01\.jiaoliuqu\.com\/.*$/g,
    // 远程跨域资源保存
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'image-cache-online',
    })
  );
}
else{
  console.log('workbox bad!!!!!')
}

