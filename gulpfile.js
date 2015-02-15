var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Gulp Sass Task 
gulp.task('sass', function() {
  gulp.src('./scss/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
})

gulp.task('watch', function() {
  gulp.watch('./scss/{,*/}*.{scss,sass}', ['sass'])
})

gulp.task('default', ['sass', 'watch']);
