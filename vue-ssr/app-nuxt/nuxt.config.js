const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // new HtmlWebpackPlugin()
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],
  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'http://localhost:3000',
    proxy: true // Can be also an object with default options
  },

  proxy: {
    '/api': {target: 'https://test-gw-k8s-web.taqu.cn', pathRewrite: {'^/api': ''} }
    // '/api/': 'https://test-gw-k8s-web.taqu.cn/'
    
  },

  router: {
    extendRoutes (routes, resolve) {
      console.log(routes);
      //数组在在上的先执行，如果需要添加路由去覆盖之前的，可以修改之前的项，也可以往数组前面增加项
      routes.unshift({
        path: '/',
        component: 'pages/index.vue',
        name: 'index',
        meta:{
          title : '首页'
        }
      })
    },
    middleware: 'auth'
  }, 

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      urlLoader : {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 100000, 
          name: '[name].[hash:7].[ext]'
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({template: './public/index.html',minify:true})
    ],
    rules:[
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      }
    ],
    extractCSS : true
  }
}
