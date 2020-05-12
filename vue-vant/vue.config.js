// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const webpack = require("webpack")
const envConfig = require("./env.config")

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === 'production'
  ? './'
  : '/'

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  // baseUrl: BASE_URL,
  publicPath: BASE_URL,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可`
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('_n', resolve('node_modules'))
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('_utils', resolve('src/utils'))
      .set('underscore-extend', resolve('src/utils/underscore-extend'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  devServer : envConfig.devServer,
  // devServer : {
  //   port: "10002",
  //   open: false,
  //   proxy : {
  //     '/rest' : {
  //       // target: `http://192.168.5.119:8443`,        // tjq
  //       target: `http://192.168.5.116:8443`,        // lsd
  //       // target: `http://192.168.105.39:8443`,    // zhw
  //       //target: 'http://192.168.5.78:8888',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/rest': ''
  //       }        
  //     }     
  //   }
  // },
  configureWebpack : {
    plugins : [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      })
    ]
  }
}
