var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
 
gulp.task('default', function () {
  return gulp.src('css/src/*.css')
    .pipe(concatCss('main.css'))
  	.pipe(minifyCSS())
  	.pipe(rename('main.min.css'))
    .pipe(gulp.dest('css/dist/'));
});

gulp.task('watch', function() {
	gulp.watch('css/src/*.css', ['default'])
})