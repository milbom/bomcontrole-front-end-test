"use strict";
var requireOptions = {
  only: ['gulp', 'browser-sync', 'gulp-jshint', 'gulp-rev', 'gulp-rev-replace', 'gulp-rev-delete-original']
};
var $ = require('auto-require')(requireOptions);
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var paths = {
  appDependencesCss: [
    './node_modules/animate.css/animate.css/',
    './node_modules/angular-ui-notification/dist/angular-ui-notification.css',
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css',
    './node_modules/bootstrap-daterangepicker/daterangepicker.css',
  ],
  appDependencesJs: [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/angular/angular.js',
    './node_modules/angular-i18n/angular-locale_pt-br.js',
    './node_modules/angular-route/angular-route.js',
    './node_modules/angular-animate/angular-animate.js',
    './node_modules/angular-cookies/angular-cookies.js',
    './node_modules/angular-touch/angular-touch.js',
    './node_modules/angular-sanitize/angular-sanitize.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
    './node_modules/ui-select/dist/select.js',
    './node_modules/angular-input-masks/releases/angular-input-masks-standalone.js',
    './node_modules/angular-ui-notification/dist/angular-ui-notification.js',
  ],
  appSass: [
    './app/**/**/**/*.scss',
  ],
  appJs: [
    './app/app.js',
    './app/**/**/**/*.js',
  ],
  appHtml: './app/**/**/**/**/*.html',
};

// Dependences
$.gulp.task('concat-dependences-css', function () {
  return $.gulp.src(paths.appDependencesCss)
    .pipe(concatCss('dependences.css'))
    .pipe(cssmin())
    .pipe($.gulp.dest('./public/css'))
    .pipe($.browserSync.stream());
});

$.gulp.task('concat-dependences-js', function () {
  return $.gulp.src(paths.appDependencesJs)
    .pipe(sourcemaps.init())
    .pipe(concat('dependences.js'))
    .pipe(sourcemaps.write())
    .pipe($.gulp.dest('./public/js'));
});

$.gulp.task('concat-app-js', function () {
  return $.gulp.src(paths.appJs)
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe($.gulp.dest('./public/js'));
});

// Builds
// Sass
$.gulp.task('build:sass', function () {
  return $.gulp.src(paths.appSass)
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss('sass.css'))
    .pipe(cssmin())
    .pipe($.gulp.dest('./public/css/'));
});

// Css
$.gulp.task('build:css', ['concat-dependences-css'], function () {
  return $.gulp.src('./public/css/*.css')
    .pipe(concatCss('dependences.css'))
    .pipe(cssmin())
    .pipe($.gulp.dest('./public/css'));
});

// Js
$.gulp.task('build:js', ['concat-dependences-js', 'concat-app-js'], function () {
  return $.gulp.src('./public/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe($.gulp.dest('./public/js'));
});

// Browser reload
$.gulp.task('browser-sync-reload', function (done) {
  $.browserSync.reload();
  done();
});

// Serve
$.gulp.task('serve', [
  'build:js',
  'build:css',
  'build:sass',
], function () {

  $.gulp.watch(paths.appJs, ['build:js']);
  $.gulp.watch(paths.appSass, ['build:sass']);
  $.gulp.watch('./app/sass/*.scss', ['build:sass']);
  $.gulp.watch('./public/js/app.js', ['browser-sync-reload']);
  $.gulp.watch('./app/**/**/**/*.css', ['browser-sync-reload']);
  $.gulp.watch('./app/**/**/**/*.scss', ['browser-sync-reload']);
  $.gulp.watch(paths.appHtml, ['browser-sync-reload']);

  return $.browserSync.init({
    server: {
      baseDir: './'
    },
    ghostMode: {
      clicks: false,
      forms: false,
      scroll: false
    }
  });
});

$.gulp.task('default', ['serve']);
