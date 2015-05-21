'use sctrict';

var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	browserfiy = require('browserify'),
	assign = require('object-assign'),
	
	
	tsconfig = require('./tsconfig');


gulp.task('source', function () {
	var files = tsconfig.filesGlob;
	return gulp.src(files)
		//.pipe(ts(tsconfig.compilerOptions))
		.pipe(ts(assign(
			{ typescript: require('typescript') },
			tsconfig.compilerOptions
		)))
		.pipe(gulp.dest('build'));
});