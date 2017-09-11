const path = require('path');
const webpack = require('webpack');
const load = require('./webpack.loader.js');
const loaders = load.loaders;
const textPlugin1 = load.textPlugin1;
const textPlugin2 = load.textPlugin2;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  bulid: path.join(__dirname, 'bulid')
};

module.exports = {
  entry: {
    app: PATHS.app+'/index/index.js',
    vendor1: ['react', 'react-dom']//注意这个顺序是从右到左的。
    // vendor2: ['boostrap']
  },
  output:{
    path: PATHS.bulid,
    filename: '[name].js'
  },
  devServer:{
    host: process.env.HOST,
    port: 8088,
    overlay: {
      errors: true,
      warnings: true
    },
    hotOnly: true
  },
  devtool: 'source-map',
  // performance: { //代码压缩
    // hints: 'warning',
    // maxEntrypointSize: 500000, //bytes
    // maxAssetSize: 450000
  // },
  module: {
    rules: loaders
  },
  plugins: [
    textPlugin1,
    textPlugin2,
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor1'
      //names: ['vendor', 'vendor2']  //注意这个顺序是从右到左的。
    }),
    new HtmlWebpackPlugin({
      title: 'react',
      filename: 'index.html',
      template: PATHS.app+'/index/index.html',
      inject: 'body'
    })
  ]
};
