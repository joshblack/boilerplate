var babelOptions = require('./resources/babel/babelOptions').babelServerOptions;

require('babel-core/register')(babelOptions);
require('./devServer');

