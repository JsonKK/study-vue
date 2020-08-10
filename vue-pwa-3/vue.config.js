// Inside vue.config.js
module.exports = {
  // ...other vue-cli plugin options...
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
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './sw.js',
      // ...other Workbox options...
    }
  }
}