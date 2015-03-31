var gulp = require('gulp'),
	minify = require('gulp-minify-css'),
	stylus = require('gulp-stylus'),
	rename = require('gulp-rename');

/*
|--------------------------------------------------------------------------
| Main Task
|--------------------------------------------------------------------------
| Includes all tasks.
*/

gulp.task('default', ['stylus'], function(){
	gulp.watch('stylus/*', ['stylus']);
});

function showError(e) {
	console.log(e.toString());

	this.emit('end');
}

/*
|--------------------------------------------------------------------------
| Stylus Task
|--------------------------------------------------------------------------
*/

gulp.task('stylus', function(){
	return gulp.src('stylus/main.styl')
				.pipe(stylus())
				.on('error', showError)
				.pipe(minify())
				.pipe(rename('style.css'))
				.pipe(gulp.dest('public/css'));
});

/*
|--------------------------------------------------------------------------
| Watch Task
|--------------------------------------------------------------------------
*/