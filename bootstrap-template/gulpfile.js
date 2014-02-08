var gulp = require('gulp'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect');

////////////////////////////////
// configuration variables
////////////////////////////////
var path = {
    folder: './app',
    css: './app/css/*',
    js: './app/js/*'
};

var dist = './dist/';

////////////////////////////////
// gulp task
////////////////////////////////
gulp.task('clean', function () {
    gulp.src(dist, {read: true})
        .pipe(clean());
});

gulp.task('copy.css', function () {
    gulp.src(path.css)
        .pipe(gulp.dest(dist + 'css/'));
});

gulp.task('copy.js', function () {
    gulp.src(path.js)
        .pipe(gulp.dest(dist + 'js/'));
});

gulp.task('connect', connect.server({
    root: dist,
    port: 1337,
    livereload: true,
    open: {
        browser: 'chrome' // if not working OS X browser: 'Google Chrome'
    }
}));

gulp.task('watch', function () {
    gulp.watch(path.css, ['copy.css']);
    gulp.watch(path.js, ['copy.js']);
});

////////////////////////////////
// gulp task to use
////////////////////////////////
gulp.task('copy', ['copy.css', 'copy.js']);

gulp.task('dev', ['connect', 'watch']);

gulp.task('build', ['clean', 'copy']);