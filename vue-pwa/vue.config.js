const WorkboxPlugin = require('workbox-webpack-plugin');

// 导出模块
module.exports = {
  configureWebpack : {
    plugins : [
      new WorkboxPlugin.InjectManifest({
        swSrc: './src/service-worker.js'
      })
    ]
  }
}