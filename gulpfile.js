var gulp = require('gulp')
var connect = require('gulp-connect')
    // var livereload = require('gulp-livereload')
var browserSync = require('browser-sync').create()

// for build
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var clean = require('gulp-clean')
var htmlmin = require('gulp-htmlmin')
var htmlrepalce = require('gulp-html-replace')

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
    gulp.src(['src/js/vue.js', 'src/js/test.js'])
        .pipe(concat('bundle.min.js', { newLine: ";" }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
    gulp.src('src/*.html')
        .pipe(htmlrepalce({
            'js': 'js/bundle.min.js'
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true,
            removeComments: true
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('clean', function() {
    return gulp.src('dist', { read: false }).pipe(clean())
})
