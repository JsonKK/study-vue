const WorkboxPlugin = require('workbox-webpack-plugin');
// const { config } = require('vue/types/umd');

// 导出模块
module.exports = {
  devServer:{
    port : 8090,
    disableHostCheck: true
  },
  css: {                // css相关配置
    sourceMap: false, // 开启 CSS source maps?
    // loaderOptions: {
    //   less: {
    //     javascriptEnabled: true
    //   }
    // },             // css预设器配置项
    modules: false, // 启用 CSS modules for all css / pre-processor files.,
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: []
      }
    }
  },
  // chainWebpack:config => {
  //   config.plugin('workbox')
  // },
   // ...other vue-cli plugin options...
   pwa: {
    msTileColor : 'black',
    themeColor : '#d466ff',
    // name: '恋爱博物馆',
    // short_name: "love M",
    // start_url: ".",
    // theme_color: "#d466ff",
    // msTileColor: '#000000',
    // appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // icons: [
    //   {
    //     src: "./img/icons/android-chrome-192x192.png", 
    //     sizes: "192x192", 
    //     type: "image/png"
    //   }
    // ],
    // background_color: "#f19494",
    // display: "standalone",
    // // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: './sw.js',
    //   // ...other Workbox options...
    // }
  }
}