const path = require('path');
const fs = require('fs');
const glob = require("glob");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清理打包目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const env = process.env.NODE_ENV;
publicPath = env === 'development' ? '/' : '../';
const outputPath = './src/dist/';

//生成多页面js入口文件
const getFile = function (folder) {
  // let url = `./src/${folder}/`;
  // let files = fs.readdirSync(url);
  // return files.map(item => url + item);
  //获取所有目录下的js文件
  let globPath = `src/${folder}/*.js`;
  let files = glob.sync(globPath);
  let dirname, entries = {}
  // 遍历所有的文件，生成{key:value}格式打包出多页面
  for (let i = 0; i < files.length; i++) {
    dirname = path.dirname(files[i])
    var filename = files[i].substring(files[i].lastIndexOf('\/') + 1, files[i].lastIndexOf('.'));
    dirname = dirname.substring(dirname.indexOf('\/') + 1);
    entries[dirname + "/" + filename] = "./" + files[i];
  }
  return entries
}

const getHtml = function(){
  // 获取所有的html文件
  let globPath = `src/pages/*.html`;
  let files = glob.sync(globPath);
  let arr = [];
  for(let i = 0; i < files.length; i++){
    const filename = files[i].substring(files[i].lastIndexOf('\/') + 1, files[i].lastIndexOf('.'));
    arr.push(
      new HtmlWebpackPlugin({
        filename : filename + '.html',
        template : files[i],
        chunks: ['./src/js/']
      })
    )
  }
  return arr;
}

module.exports = {
  mode : 'development',
  entry: getFile('js'),
  output: {
    //输出到的路径
    path: path.resolve(__dirname, outputPath),
    // 输出文件名
    filename: '[name].min.js'
  },
  plugins : [
    new CleanWebpackPlugin(),
    ...getHtml(),
  ],
  module: {
    rules: [
      {
        test:/\.scss$/,
        use:['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath : '../dist/images',
              outputPath : '/images'
            }
          }
        ]
      },
      //引入xml
      {
        test : /\.xml$/,
        use:['xml-loader']
      }
    ]
  }
}  