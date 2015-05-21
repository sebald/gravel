'use sctrict';

var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),	
	
	browserfiy = require('browserify'),
	assign = require('object-assign'),
	
	
	tsconfig = require('./tsconfig');


gulp.task('source', function () {
	var files = tsconfig.filesGlob,
		tsResult;
		
	tsResult = gulp.src(files)
		.pipe(sourcemaps.init())
		.pipe(ts(assign(
			{ typescript: require('typescript') },
			tsconfig.compilerOptions,
			{ sortOutput: true }
		)));
		
	return tsResult.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('build'));
});