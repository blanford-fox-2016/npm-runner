var compressor = require('node-minify')
new compressor.minify({
  type: 'yui-js',
  fileIn: ['./src/js/reverse.js', './src/js/reverse.js'],
  fileOut: './src/js/script.min.js',
  callback: function(err, min){
    console.log(err);
  }
});
new compressor.minify({
  type: 'yui-css',
  fileIn: ['./src/css/site.css', './src/css/site.css'],
  fileOut: './src/css/style.min.css',
    callback: function(err, min){
      console.log(err);
    }
});