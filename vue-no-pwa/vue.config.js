const WorkboxPlugin = require('workbox-webpack-plugin');
// const { config } = require('vue/types/umd');

// 导出模块
module.exports = {
  devServer:{
    port : 8091,
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
  }
}