var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    browser = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');
    
gulp.task('sass', function() {
    return gulp.src('./sass/styles.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename('styles.css.liquid'))
        .pipe(replace('"{{', '{{'))
        .pipe(replace('}}"', '}}'))
        .pipe(gulp.dest('./assets/'));
    });
    
gulp.task('default', function() {
        
    gulp.watch(['./sass/**/*.scss'], gulp.series('sass'));
});