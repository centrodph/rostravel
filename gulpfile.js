var gulp = require("gulp");
var less = require("gulp-less");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var fileinclude = require('gulp-file-include');
var $ = require("gulp-load-plugins")({
  lazy: true
});
var reload = browserSync.reload;

const config = {
  lessbase: "./less/base.less",
  less: "./less/*",
  css: "./css/"
};

gulp.task("styles", function() {
  return gulp
    .src(config.lessbase)
    .pipe(plumber())
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ["last 2 version", "> 5%"]
      })
    )
    .pipe(gulp.dest(config.css))
    .pipe(browserSync.stream({ reload: true }));
});

gulp.task("less-watcher", function() {
  gulp.watch(config.less, ["styles"]);
});


gulp.task('fileinclude', function() {
  gulp.src(['*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

/**
 * Levantar el servidor de forma rapida.
 */
gulp.task("serveFast", ["styles"], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    injectChanges: true
  });
  gulp.watch(config.less, ["styles"]);
  gulp.watch("./*.html").on("change", browserSync.reload);
});
