'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var csso = require('gulp-csso');
var uncss = require('gulp-uncss');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('pug', function() {
    var YOUR_LOCALS = {};
        gulp.src('app/**/*.pug')
        .pipe(pug({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(gulp.dest('dist/'))
});
gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(uncss({
            html: ['dist/**/*.html']
        }))
        .pipe(autoprefixer({
            browsers: ['last 10 versions']
        }))
        .pipe(csso())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('w', function () {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/**/*.pug', ['pug']);
});