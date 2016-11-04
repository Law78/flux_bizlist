var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

// Task browserify
gulp.task('browserify', function(){
  browserify('./src/js/main.js', {debug:true})
    .transform("babelify", {presets: ["es2015", "react"], sourceMaps:true})
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./app/js'))
});

// Copy HTML task
gulp.task('copy', function(){
  gulp.src('src/*.html')
    .pipe(gulp.dest('app'))
});

// Sass task
gulp.task('sass', function(){
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'))
});

// Default task con callback per il watch
gulp.task('default', ['browserify', 'copy', 'sass'], function(){
  return gulp.watch('src/**/*.*', ['default']);
});
