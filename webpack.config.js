var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var isDev = process.env.NODE_ENV !== 'production';

var plugins = isDev ?
  [
    new webpack.NoErrorsPlugin(),
  ] :
  [
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
    ]
  },
  plugins: plugins.concat([
    new ExtractTextPlugin('main.css'),
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
