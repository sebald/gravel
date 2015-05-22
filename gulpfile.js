'use sctrict';

var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),	
	change = require('gulp-change'),
    rename = require('gulp-rename'),
	
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	
	del = require('del'),
	assign = require('object-assign'),

	// Load configuration
	config = require('./gulpfile.config.js')();


gulp.task('clean', function (done) {
	del([config.path.dest], done);
});

gulp.task('reload', reload );


gulp.task('tsc', function () {
	var files = config.typescript.files,
		tsResult;

	tsResult = gulp.src(files)
		.pipe(sourcemaps.init())
		.pipe(ts(assign(
			{ typescript: require('typescript') }, // Need to load v1.5-beta
			config.typescript.tsconfig,
			{ sortOutput: true }
		)));
		
	tsResult.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.path.dest));
});


gulp.task('libs', function () {
	gulp.src(config.libs)
		.pipe(gulp.dest(config.path.dest + '/libs'));
});


gulp.task('main', function () {
	gulp.src(config.main)	
		.pipe(gulp.dest(config.path.dest));
});


gulp.task('gravel-config', function () {
    gulp.src(config.gravel)
        .pipe(change(function (content) {
            content = 'window.GRAVEL_CONFIG = ' + content + ';';
            console.log(content);
            return content;
        }))
        .pipe(rename({ extname: '.js' }))
        .pipe(gulp.dest(config.path.dest + '/app'));
});



// ===================================== //

gulp.task('start', ['default'], function ( done ) {
	gulp.watch(config.typescript.files, ['tsc', 'reload']);
	gulp.watch(config.main, ['main', 'reload']);
	
	browserSync({
		server: {
			baseDir: config.path.dest
		},
		open: true,
		notify: false
	});
});


gulp.task('default', ['tsc', 'main', 'libs']);