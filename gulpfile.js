var gulp = require('gulp')
var connect = require('gulp-connect')
    // var livereload = require('gulp-livereload')
var browserSync = require('browser-sync').create()
var gutil = require('gulp-util')

// for build
var uglify = require('gulp-uglify')
var clean = require('gulp-clean')
var htmlmin = require('gulp-htmlmin')
var usemin = require('gulp-usemin')

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: 'src',
            port: 3001
        }
    })
    gulp.watch(['src/*.html'], function() {
        console.log('html changed')
    }).on('change', browserSync.reload)
    gulp.watch(['src/**/*.*'], function() {
        console.log('js changed')
    }).on('change', browserSync.reload)
})

gulp.task('build', ['clean'], function() {
    gulp.src('src/index.html')
        .pipe(usemin({
            html: [htmlmin({
                collapseWhitespace: true,
                removeComments: true
            })],
            js: []
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('clean', function() {
    return gulp.src('dist', { read: false }).pipe(clean())
})
