// Inside of webpack.config.js:
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  // Other webpack config...
  configureWebpack : {
    plugins : [
      new WorkboxPlugin.InjectManifest({
        swSrc: './src/sw.js',
      })
    ]
  }
};