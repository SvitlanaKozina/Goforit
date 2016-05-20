var gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
gulp.task('compress', function() {
	gulp.src('img/src/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img/dist'))
});

gulp.task('watch', function() {
	gulp.watch('img/src/*', ['compress'])
})

gulp.task('default', ['watch']);