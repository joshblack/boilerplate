'use strict';

var babel = require('babel-core');
var assign = require('object-assign');
var babelOptions = require('../babel/babelOptions').babelBaseOptions;

module.exports = {
  process: function process(src, filename) {
    if (/\.css$/.test(filename)) {
      return '';
    }

    var options = assign({}, babelOptions, {
      filename: filename,
      compact: false
    });

    var result = babel.transform(src, options);

    return result.code;
  },
};

