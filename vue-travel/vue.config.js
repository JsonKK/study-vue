const path = require('path');

module.exports = {
  // assetsDir : 'static',
  devServer : {
    //端口
    port:4001,
    // 禁用域名检测
    disableHostCheck: true,
    //设置代理
    proxy : {
      '/api': {
        target: 'http://10.10.98.225:4001/',
        pathRewrite: {
          '^/api': 'static/mock'
        }
      }
    },
    
  },
  configureWebpack : config =>{
    Object.assign(config,{
      resolve:{
        alias:{
          '@': path.resolve(__dirname, './src'),
          'styles' : path.resolve(__dirname, './src/assets/css')
        }
      }
    })
  }
}