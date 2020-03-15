module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // 别名
                vue$: "vue/dist/vue.esm.js", //加上这一句
            }
        },
        module: {
            // rules : [
            //     {
            //         test: /\.less$/,
            //         loader: "style-loader!css-loader!less-loader",
            //     }
            // ]
        },
    },
    // 配置build生成的文件夹名称
    outputDir : 'dist',
    //配置服务器和代理
    devServer: {
        port : '4001',
        host : '192.168.0.21',
        proxy: 'http://192.168.0.21:4001'
    }
}