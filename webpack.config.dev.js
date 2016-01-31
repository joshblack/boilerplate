var path = require('path');
var webpack = require('webpack');
var babelOptions = require('./resources/babel/babelOptions');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: [
    // 'eventsource-polyfill', // necessary for hot reloading with IE
    // 'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: __dirname + '/static',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
    }),
    new webpack.DefinePlugin({
      '__DEV__': JSON.stringify(NODE_ENV === 'development')
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: babelOptions,
      include: path.join(__dirname, 'src')
    }]
  }
};
