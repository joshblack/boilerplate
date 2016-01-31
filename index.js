var babelOptions = require('./resources/babel/babelOptions');

require('babel-core/register')(babelOptions);
require('./devServer');

