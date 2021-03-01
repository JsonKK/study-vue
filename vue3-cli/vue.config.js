const path = require('path');
// 新建一个multipage.js文件，用来处理vue加载模板的入口；
const pages = require('./config/multipage').getPages();
const getRoutes = require('./config/multipage').getRoutes();
const NODE_ENV = process.env.NODE_ENV;
const argv = require('minimist')(process.argv.slice(2));
const isProduction = process.env.NODE_ENV === 'production';
const pre = argv.pre ? true : false;
const curCWD = process.env.INIT_CWD;
const OS = require('os');
const fs = require('fs');

let outputDir = path.resolve(getRoutes, './release');
if(pre){
  outputDir = path.resolve(getRoutes, './pre');
}

module.exports = {
  devServer:{
    disableHostCheck: true
  },
  outputDir: outputDir,
  assetsDir: 'static',
  // 官方要求修改路径在这里做更改，默认是根目录下，可以自行配置
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: false,
  // 在多核机器下会默认开启。
  parallel: OS.cpus().length > 1,
  pages
};

