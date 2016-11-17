'use strict'
/* dependencies gulp */
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
/* gulp task*/
gulp.task('default', function() {
  gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('css', function() {
  gulp.src('./src/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('browser-sync', function () {
   var files = [
      'app/**/*.html',
      'app/assets/css/**/*.css',
      'app/assets/imgs/**/*.png',
      'app/assets/js/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './app'
      }
   });
});
