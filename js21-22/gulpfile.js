const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', () => {
	return gulp.src('js/src2015/*')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('js/dist/'));
});

gulp.task('watch', function() {
	gulp.watch('js/src2015/*', ['default'])
});

gulp.task('default', ['watch']);