var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    browser      = require('browser-sync'),
    sourcemaps   = require('gulp-sourcemaps'),
    gcmq          = require('gulp-group-css-media-queries'),
    iconfont     = require('gulp-iconfont'),
    consolidate  = require('gulp-consolidate'),
    jsMin        = require("gulp-uglifyjs"),
    cleanCss    = require('gulp-clean-css'),
    clean       = require('gulp-clean'),
    imagemin    = require('gulp-imagemin');
    pngquant    = require('imagemin-pngquant');;

gulp.task('build:sass', function () {
 return gulp.src(['app/scss/**/*.scss'])
 .pipe(sourcemaps.init())
 .pipe(sass({
  includePaths: ['node_modules/foundation-sites/scss', 'node_modules/motion-ui/src']
}).on('error', sass.logError))
 .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
 .pipe(gcmq())
 .pipe(sourcemaps.write('.'))
 .pipe(gulp.dest('./app/css'))
 .pipe(browser.stream({match: '**/*.css'}));
});

gulp.task("build:icons", function() {
   return gulp.src(["./app/img/icons/*.svg"])//path to svg icons
   .pipe(iconfont({
     fontName: "icon-font",
     formats: ["woff2", "woff"],
     centerHorizontally: true,
     fixedWidth: true,
     normalize: true
   }))
   .on("glyphs", function (glyphs) {

       gulp.src("./app/img/icons/util/*.scss") // Template for scss files
       .pipe(consolidate("lodash", {
         glyphs: glyphs,
         fontName: "icon-font",
         fontPath: "../fonts/icon/"
       }))
           .pipe(gulp.dest("./app/scss/icons/"));//generated scss files with classes
         })
     .pipe(gulp.dest("app/fonts/icon/"));//icon font destination
   });


 // Starts a BrowerSync instance
 gulp.task('serve', ['build:sass'], function(){
   browser.init({
     server: {
       baseDir: "./app/"
     }
   });
 });

 // Runs all of the above tasks and then waits for files to change
 gulp.task('default', ['serve'], function() {
   gulp.watch(['app/scss/**/*.scss'], ['build:sass']);  
   gulp.watch('./app/**/*.html').on('change', browser.reload);
 });



 gulp.task('minJS', function() {
    gulp.src(['app/js/**/*.js'])
    .pipe(jsMin())
    .pipe(gulp.dest('dist/js/'));
  });

 gulp.task('minifyCss', function() {
    gulp.src(['app/css/**/*.css'])
    .pipe(cleanCss())
    .pipe(gulp.dest('dist/css/'));
  });

  gulp.task('minImg', function() {
    gulp.src(['!app/img/icons/**/*', 'app/img/**/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img/'));
  });

  gulp.task('build:html', function () {
    gulp.src(['app/**/*.html'])
    .pipe(gulp.dest('dist/'));
  });

  gulp.task('build:fonts', function () {
    gulp.src(['app/fonts/**/*'])
    .pipe(gulp.dest('dist/fonts/'))
  });

  gulp.task('clean', function() {
    gulp.src(['dist'])
    .pipe(clean());
  });

  gulp.task('build', ['minifyCss', 'minJS', 'build:html', 'build:fonts', 'minImg']);



