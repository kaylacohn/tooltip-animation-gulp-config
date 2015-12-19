var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');

// gulp sass task
gulp.task('sass', function() {
  gulp.src('./scss/**/*.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass-watch', ['sass'], browserSync.reload);

// watch scss folder for changes
gulp.task('watch', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', ['sass-watch']);
});

// default task
gulp.task('default', ['sass', 'sass-watch', 'watch']);
