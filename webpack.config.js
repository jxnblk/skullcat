
var path = require('path');
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var paths = [ '/' ];
var data = require('./src/data');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('index.js', paths, data)
  ]

};
