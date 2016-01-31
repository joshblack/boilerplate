var babelOptions = {
  presets: ['react', 'es2015', 'stage-2'],
  plugins: ['transform-class-properties', 'transform-export-extensions'],
  // env: {
    // development: {
      // presets: ['react-hmre']
    // }
  // }
}

module.exports = babelOptions;
