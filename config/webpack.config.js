const webpack = require('webpack');

const entry = ['./src/app.js'];
const path = __dirname;
const publicPath = './public';
const filename = '../public/js/bundle.js';

module.exports = {
  entry,
  output: {
    path,
    publicPath,
    filename
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },
      { test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
