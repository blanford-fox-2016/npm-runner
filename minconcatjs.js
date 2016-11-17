const compressor = require('node-minify');

// Minify and concat JS file using UglifyJS
compressor.minify({
  compressor: 'uglifyjs',
  input: './src/js/*.js',
  output: './dist/js/main.js',
  callback: function (err, min) {
    if (err) {
      console.log(err);
    } else {
      console.log('All JS file inside /src/js have been minified and concatinated to /dist/js/main.js');
    }
  }
});
