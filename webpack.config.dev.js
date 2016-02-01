var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var babelOptions = require('./resources/babel/babelOptions').babelClientOptions;

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      '__DEV__': JSON.stringify(NODE_ENV === 'development')
    }),
    new NpmInstallPlugin({ save: true })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: babelOptions,
        include: path.join(__dirname, 'src')
      },
      {
        test: /actions/,
        loader: 'null'
      }
    ]
  }
};

