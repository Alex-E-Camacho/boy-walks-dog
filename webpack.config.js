let webpack = require('webpack');
let path = require('path');

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
      }
    ]
  }
};

module.exports = config;
