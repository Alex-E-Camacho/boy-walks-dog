let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let BUILD_DIR = path.resolve(__dirname, 'dist');
let APP_DIR = path.resolve(__dirname, 'src');

let config = {
  entry: './src/js/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  watch: true,

  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR + '/js',
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/i,
        include: APP_DIR + '/img',
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      },
      {
        test: /\.html$/,
        include: APP_DIR,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        include: APP_DIR + '/css',
        loader: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin("css/index.css")
  ]
};

module.exports = config;
