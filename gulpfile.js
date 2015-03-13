var gulp = require('gulp'),
    compass = require('gulp-compass'),
    usemin = require('gulp-usemin'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    rev = require('gulp-rev'),
    bower = require('gulp-bower'),
    del = require('del');

// === Delete Tasks
gulp.task('clean', function(cb) {
    del(['build/','src/css/'], cb);
});

gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest('./src/vendors'));
});

gulp.task('compile-sass', ['clean'], function () {
    return gulp.src('./src/sass/*.scss')
        .pipe(compass({
            project: __dirname + '/src/'
        }))
        .on('error', function (error) {
            console.log(error);
            this.emit('end');
        })
        .pipe(gulp.dest('./src/css'));
});

gulp.task('usemin', ['compile-sass'], function () {
    return gulp.src('src/index.htm')
        .pipe(usemin({
            css: [minifyCss(), 'concat', rev()],
            js: [uglify(), rev()]
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('default', ['bower', 'usemin'], function() {

});