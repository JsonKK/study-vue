module.exports = {
    baseUrl: {
        devNodeSeq: 'http://10.10.98.225:10002/node-seq/'
        // pro: 'https://produce.com'
    },
    devServer: {
        port: "4001",
        host : "10.10.98.225",
        open: false,
        proxy: {
            '/node-seq': {
                target: `http://10.10.80.203:10002`,      
                changeOrigin: true,
                pathRewrite: {
                    '^/node-seq': ''
                }
            }            
        }
    }
}