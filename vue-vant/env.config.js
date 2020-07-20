module.exports = {
    baseUrl: {
        dev: 'http://10.10.98.225:10002/rest/'
        // pro: 'https://produce.com'
    },
    devServer: {
        port: "10002",
        host : "0.0.0.0",
        open: false,
        proxy: {
            '/rest': {
                target: `https://rest.ihxjr.com`,        // 正式
                // target: `http://192.168.131.166:8443`,        // lsd
                changeOrigin: true,
                pathRewrite: {
                    '^/rest': ''
                }
            },
            '/tong-rest': {
                // target: `http://192.168.5.119:8443`,        // tjq
                // target: `http://192.168.5.115:8443`,        // lsd
                // target: `http://192.168.5.116:8443`,        // ywn
                // target: `http://192.168.105.39:8443`,    // zhw
                target: 'http://192.168.5.78:8888',
                changeOrigin: true,
                pathRewrite: {
                    '^/tong-rest': ''
                }
            }            
        }
    }
}