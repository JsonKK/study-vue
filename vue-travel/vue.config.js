const path = require('path');

module.exports = {
  devServer : {
    // 禁用域名检测
    disableHostCheck: true
  },
  configureWebpack : config =>{
    Object.assign(config,{
      resolve:{
        alias:{
          '@': path.resolve(__dirname, './src')
        }
      }
    })
  }
}