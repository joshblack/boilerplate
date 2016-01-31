'use strict';

var assign = require('object-assign');

var babelBaseOptions = {
  presets: ['react', 'es2015', 'stage-2'],
  plugins: ['transform-class-properties', 'transform-export-extensions'],
};

var babelClientOptions = assign({}, babelBaseOptions, {
  env: {
    development: {
      presets: ['react-hmre']
    }
  }
});

exports.babelBaseOptions = babelBaseOptions;
exports.babelClientOptions = babelClientOptions;

