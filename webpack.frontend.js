var webpack = require('webpack');
var path = require('path');

var appConfig = require('./config');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var autoprefixer = require('autoprefixer');

module.exports = {
  cache: true,
  resolve: {
    root: path.resolve(__dirname, 'src/frontend')
  },
  entry: {

  },
  output: {}
}
