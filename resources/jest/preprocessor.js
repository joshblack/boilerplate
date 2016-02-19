'use strict';

var babel = require('babel-core');
var assign = require('object-assign');
var babelOptions = require('../babel/babelOptions').babelTestOptions;

module.exports = {
  process: function process(src, filename) {
    var options = assign({}, babelOptions, {
      filename: filename,
      compact: false
    });

    var result = babel.transform(src, options);

    return result.code;
  },
};

