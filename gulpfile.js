"use strict";
var requireOptions = {
  only: ['gulp', 'browser-sync', 'gulp-jshint', 'gulp-rev', 'gulp-rev-replace', 'gulp-rev-delete-original']
};
var $ = require('auto-require')(requireOptions);
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var jsminify = require('gulp-minify');


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
  appJs: [
    './app/app.js',
    './app/**/**/**/*.js',
  ],
  publicJs: [
    './public/js/app.js',
    './public/js/dependences.js',
  ],
  appHtml: './app/**/**/**/**/*.html',
};


gulp.task('jsminify', function () {
  gulp.src(paths.publicJs)    
    .pipe(jsminify())    
    .pipe(gulp.dest('./public/js'))
});

gulp.task('minify', function () {
  return gulp.src('*.html')
    .pipe(sourcemaps.init())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public'));
});

$.gulp.task('concat-dependences-css', function () {
  return $.gulp.src(paths.appDependencesCss)
    .pipe(concatCss('dependences.css'))
    .pipe(sourcemaps.init())
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

$.gulp.task('browser-sync-reload', function (done) {
  $.browserSync.reload();
  done();
});

$.gulp.task('serve', [
  'concat-dependences-js',
  'concat-app-js',
  'concat-dependences-css',
  'minify',
  'jsminify',

], function () {

  $.gulp.watch(paths.appJs, ['concat-app-js']);
  $.gulp.watch('./public/js/app.js', ['browser-sync-reload']);
  $.gulp.watch('./app/**/**/**/*.css', ['browser-sync-reload']);

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