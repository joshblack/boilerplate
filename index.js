var babelOptions = require('./resources/babel/babelOptions').babelBaseOptions;

require('babel-core/register')(babelOptions);
require('./devServer');

