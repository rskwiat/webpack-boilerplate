const webpack = require('webpack');
const entry = './src/app.js';
const path = __dirname;
const publicPath = '/';
const filename = '../public/js/bundle.js';

module.exports = {
  entry: [
    entry
  ],
  output: {
    path,
    publicPath,
    filename
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
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
