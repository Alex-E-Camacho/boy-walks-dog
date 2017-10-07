let webpack = require('webpack');
let path = require('path');

let BUILD_DIR = path.resolve(__dirname, './src/client/public');
let APP_DIR = path.resolve(__dirname, './src/client/app');

let config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: BUILD_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
