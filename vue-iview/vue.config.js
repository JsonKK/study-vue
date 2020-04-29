const path = require('path')
const envConfig = require("./env.config")
const resolve = dir => {
    return path.join(__dirname, dir)
}
module.exports = {
    //生成的配置文件
    outputDir: "dist",
    devServer: {
        host: '0.0.0.0',
        port: '4001'
    },
    chainWebpack: config => {
        config.resolve.alias
        .set('_n', resolve('node_modules'))
        .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
        .set('_c', resolve('src/components'))
        .set('_u', resolve('utiles'))
    }
}