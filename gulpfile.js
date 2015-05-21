'use sctrict';

var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),	
	
	del = require('del'),
	assign = require('object-assign'),
	

	// Load configuration
	config = require('./gulpfile.config.js')();


gulp.task('clean', function (done) {
	del([config.path.dest], done);
});


gulp.task('source', function () {
	var files = config.typescript.files,
		tsResult;

	tsResult = gulp.src(files)
		.pipe(sourcemaps.init())
		.pipe(ts(assign(
			{ typescript: require('typescript') }, // Need to load v1.5-beta
			config.typescript.tsconfig,
			{ sortOutput: true }
		)));
		
	return tsResult.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.path.dest));
});


gulp.task('libs', function () {
	gulp.src(config.libs)
		.pipe(gulp.dest(config.path.dest + '/libs'));
});


gulp.task('main', function () {
	console.log(config.main);
	gulp.src(config.main)
		.pipe(gulp.dest(config.path.dest));
});