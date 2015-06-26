'use strict';

var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/css/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./src/css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
