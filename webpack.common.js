var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isDev = process.env.NODE_ENV !== 'production';

var plugins = isDev ?
  [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  ] :
  [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ];

module.exports = {
  devtool: isDev ? 'eval' : 'source-map',
  entry: [
    './src/main',
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js', // '[name]-[hash].min.js
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        include: [
          path.join(__dirname, 'src'), // Skip any files outside of your project's `src` directory
        ],
        test: /\.js?$/, // Only run `.js` files through Babel
      },
      {
        test: /\.json?$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /\.styl|\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 5 version']
    })
  ],
  plugins: plugins.concat([
    new ExtractTextPlugin('[name].css'),
    new webpack.ProvidePlugin({
      'fetch': 'exports?global.fetch!whatwg-fetch',
    }),
    new webpack.DefinePlugin({
      '__DEV__': JSON.stringify(isDev)
    })
  ]),
  devServer: {
    contentBase: './src'
  }
}
