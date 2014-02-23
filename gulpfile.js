var gulp =		require('gulp'),
		clean =		require('gulp-clean');

gulp.task('clean', function() {
  gulp.src(['gulp', 'jade', 'mocha', '_mocha'], {read: false})
    .pipe(clean());
});
