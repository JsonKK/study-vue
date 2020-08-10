// Inside vue.config.js
module.exports = {
  devServer:{
    port : 7000,
    disableHostCheck: true
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