var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map', // this line should be env based.
  entry: [
    'babel-polyfill',
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
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'src'), // Skip any files outside of your project's `src` directory
        ],
        test: /\.jsx?$/, // Only run `.js` and `.jsx` files through Babel
        // query: {
        //   plugins: ['es2015'],
        // }
      },
    ]
  },
  devServer: {
    contentBase: './src'
  }
}
