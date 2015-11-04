'use strict';

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')();
var wiredep = require('wiredep').stream;

var paths = {
              jsFiles        : ['./src/app/**/*.js'],
              scssFiles      : ['./src/content/styles/*.scss'],
              imagesFiles    : ['./src/content/assets/*.png'],
              htmlFiles      : ['./src/app/**/*.html', '!./src/app/commons/directives/**/*.html'],
              htmlDirectives : ['./src/app/commons/directives/**/*.html']
            };

gulp.task('prepareJS', function () {
  gulp.src(paths.jsFiles)
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.jshint())
      .pipe(plugins.jshint.reporter('default'))
      .pipe(plugins.concat('all.min.js'))
      .pipe(plugins.ngAnnotate({
          add: true
        }))
      .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./build/js/'));
});

gulp.task('prepareCSS', function () {
  gulp.src(paths.scssFiles)
    .pipe(plugins.plumber())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.concat('all.min.css'))
    .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: true
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('prepareImages', function(){
  return gulp.src(paths.imagesFiles)
  .pipe(plugins.imagemin())
  .pipe(gulp.dest('./build/assets'));
});

gulp.task('prepareLibs', function () {
  gulp.src('./src/app/index_app.html')
    .pipe(wiredep({ignorePath: '../../build/'}))
    .pipe(gulp.dest('./build'));
});

gulp.task('prepareTemplates', function () {
  return gulp.src(paths.htmlFiles)
    .pipe(plugins.angularTemplatecache({module: 'app'}))
    .pipe(gulp.dest('./build/templates'));
});

gulp.task('prepareDirectivesTempl', function () {
  gulp.src(paths.htmlDirectives)
  .pipe(gulp.dest('./build/templates/directives/'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(plugins.webserver({
      directoryListing: true,
      host: '0.0.0.0',
      port: 5050,
      open: 'http://127.0.0.1:5050/build/index_app.html',
      proxies: [
      {
        'source': '/api',
        'target': 'http://localhost:8000/api'
      },
      {
        'source': '/login',
        'target': 'http://localhost:8000/login'
      }
    ]
    }));
});

gulp.task('watch', function(){
  gulp.watch(paths.jsFiles, ['prepareJS']);
  gulp.watch(paths.scssFiles, ['prepareCSS']);
  gulp.watch(paths.htmlFiles, ['prepareLibs', 'prepareTemplates']);
  gulp.watch(paths.htmlDirectives, ['prepareDirectivesTempl']);
});

gulp.task('default', ['prepareJS', 'prepareCSS', 'prepareImages', 'prepareLibs', 'prepareTemplates', 'prepareDirectivesTempl','webserver', 'watch'], function() {
  // place code for your default task here
});