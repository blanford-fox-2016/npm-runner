compressor.minify({
  compressor: 'yui-js',
  input: 'reverse.js',
  output: 'reverse.min.js',
  sync: true,
  callback: function (err, min) {}
});
