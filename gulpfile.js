var gulp = require('gulp')
var connect = require('gulp-connect')
    // var livereload = require('gulp-livereload')
var browserSync = require('browser-sync').create()


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
