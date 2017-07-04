var gulp         = require('gulp'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    autoprefixer = require('autoprefixer'),
    browser      = require('browser-sync'),
    sourcemaps   = require('gulp-sourcemaps'),
    gcmq         = require('gulp-group-css-media-queries'),
    iconfont     = require('gulp-iconfont'),
    consolidate  = require('gulp-consolidate'),
    jsMin        = require("gulp-uglifyjs"),
    cleanCss     = require('gulp-clean-css'),
    clean        = require('gulp-clean'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    spritesmith  = require("gulp.spritesmith"),
    gulpif       = require("gulp-if"),
    svgSprite    = require("gulp-svg-sprites"),
    pug          = require('gulp-pug');

gulp.task('build:sass', function () {
 return gulp.src(['./src/scss/**/*.scss'])
 .pipe(sourcemaps.init())
 .pipe(sass({
  includePaths: ['node_modules/foundation-sites/scss', 'node_modules/motion-ui/src']
}).on('error', sass.logError))
 .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
 .pipe(gcmq())
 .pipe(sourcemaps.write('.'))
 .pipe(gulp.dest('./src/css'))
 .pipe(browser.stream({match: '**/*.css'}));
});

gulp.task('views', function buildHTML() {
  return gulp.src('./src/views/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./src/views'))
});

gulp.task("build:icons", function() {
   return gulp.src(["./src/assets/icons/*.svg"])//path to svg icons
   .pipe(iconfont({
     fontName: "icon-font",
     formats: ["woff2", "woff"],
     fontHeight: 1001,
     normalize: true
   }))
   .on("glyphs", function (glyphs) {

       gulp.src("./src/assets/icons/util/*.scss") // Template for scss files
       .pipe(consolidate("lodash", {
         glyphs: glyphs,
         fontName: "icon-font",
         fontPath: "../fonts/icon/"
       }))
           .pipe(gulp.dest("./src/scss/icons/"));//generated scss files with classes
         })
     .pipe(gulp.dest("./src/fonts/icon/"));//icon font destination
   });

gulp.task('build:png-sprite', function () {
  var spriteData = gulp.src('./src/assets/png/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.scss',
    imgPath: '../img/sprite.png'
  }));
    spriteData.img.pipe(gulp.dest('./src/img/'));
    spriteData.css.pipe(gulp.dest('./src/scss/sprites/'));
})

gulp.task('build:svg-sprite', function () {
  return gulp.src('./src/assets/svg/*.svg')
        .pipe(svgSprite({
          selector: "icon--%f",
          cssFile: "utils/_svg-sprite.scss",
          preview: false,
          svg: {
            sprite: "../img/sprite.svg"
          }
        }))
        .pipe(gulp.dest("./src/scss/"));
});

 // Starts a BrowerSync instance
 gulp.task('serve', ['build:sass', 'views'], function(){
   browser.init({
     server: {
       baseDir: "./src/"
     }
   });
 });

 // Runs all of the above tasks and then waits for files to change
 gulp.task('default', ['serve'], function() {
   gulp.watch(['./src/scss/**/*.scss'], ['build:sass']);  
   gulp.watch('./src/**/*.html').on('change', browser.reload);
   gulp.watch(['./src/views/*.pug'], ['views']);
 });

 gulp.task('minJS', function() {
  gulp.src('./src/js/*.js')
  .pipe(jsMin())
  .pipe(gulp.dest('./build/js/'));
});

 gulp.task('minifyCss', function() {
  gulp.src('./src/css/*.css')
  .pipe(cleanCss())
  .pipe(gulp.dest('./build/css/'));
});

 gulp.task('minImg', function() {
  gulp.src('./src/img/**/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('./build/img/'));
});

 gulp.task('build:html', function () {
  gulp.src(['./src/**/*.html'])
  .pipe(gulp.dest('./build/'));
});

 gulp.task('build:fonts', function () {
  gulp.src(['./src/fonts/**/*'])
  .pipe(gulp.dest('./build/fonts/'));
});

 gulp.task('clean', function() {
  gulp.src(['./build'])
  .pipe(clean());
});

 gulp.task('build', ['minifyCss', 'minJS', 'build:html', 'minImg']);



