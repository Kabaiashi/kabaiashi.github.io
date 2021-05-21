// var gulp         = require('gulp'),
//      postcss      = require('gulp-postcss'),
//      sass         = require('gulp-sass'),
//      autoprefixer = require('autoprefixer'),
//      browser      = require('browser-sync'),
//      sourcemaps   = require('gulp-sourcemaps');
  
//  gulp.task('build:sass', function () {
//    return gulp.src('scss/**/*.scss')
//          .pipe(sourcemaps.init())
//          .pipe(sass({
//                 includePaths: ['node_modules/foundation-sites/scss', 'node_modules/motion-ui/src']
//                 }).on('error', sass.logError))
//          .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
//          .pipe(sourcemaps.write('.'))
//          .pipe(gulp.dest('./css'))
//          .pipe(browser.stream({match: '**/*.css'}));
//  });

 // Starts a BrowerSync instance
//  gulp.task('serve', ['build:sass'], function(){
//      browser.init({
//          server: {
//              baseDir: "./",
//          }
//      });
//  });

 // Runs all of the above tasks and then waits for files to change
//  gulp.task('default', ['serve'], function() {
//      gulp.watch(['scss/**/*.scss'], ['build:sass']);
//      gulp.watch('./**/*.html').on('change', browser.reload);  
     
//  });




var gulp = require('gulp');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
sourcemaps   = require('gulp-sourcemaps');

gulp.task('sass', function(done) {
    gulp.src("scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());


    done();
});

gulp.task('serve', function(done) {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/**/*.scss", gulp.series('sass'));
    gulp.watch("./**/*.html").on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});

gulp.task('default', gulp.series('sass', 'serve'));