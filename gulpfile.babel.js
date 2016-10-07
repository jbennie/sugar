
require('babel-core/register');
const _ = require('lodash');
const __gulp = require('gulp');
const __gulpWebpack = require('gulp-webpack');
const __gulpRename = require('gulp-rename');
const __gulpSass = require('gulp-sass');
const __gulpUglify = require('gulp-uglify');
const __gulpAutoprefixer = require('gulp-autoprefixer');
const __gulpReplace = require('gulp-replace');
const __fs = require('fs');
const __path = require('path');
const __gulpClean = require('gulp-clean');
const __gulpCached = require('gulp-cached');
const __gulpMochaPhantom = require('gulp-mocha-phantomjs');
const __named = require('vinyl-named');
const __gulpIconfont = require('gulp-iconfont');
const __gulpIconfontCss = require('gulp-iconfont-css');
const __generateDoc = require('./.gulp/generateDoc').default;

const runTimestamp = Math.round(Date.now()/1000);

let webpackParams = {
	resolve: {
		alias: {
			sugarcss: __dirname + '/src/js'
		}
	},
	module: {
		loaders: [
			{
				test: /\.coffee$/,
				loader: 'coffee-loader'
			}, {
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015-loose', 'stage-0'],
					plugins: ['transform-proto-to-assign'],
					compact: false
				}
			}
		]
	}
};

let webpackAppParams = _.extend({}, webpackParams, {
	entry: {},
	output: {
		path: __path.resolve("./assets/js"),
		filename: '[name].js',
		libraryTarget: 'umd'
	}
});

let webpackDistParams = _.extend({}, webpackParams, {
	output: {
		path: __path.resolve("./dist/js"),
		filename: '[name].js',
		library: '[name]',
		libraryTarget: 'umd'
	}
});

if (process.env.NODE_ENV === 'debug') {
	webpackParams.devtool = "#inline-source-map";
}

__gulp.task('clean-js', function() {
	return __gulp.src(['dist/js/', 'assets/js']).pipe(__gulpClean());
});

__gulp.task('webpack-dist', ['clean-js'], function() {
	return __gulp.src(['./src/components/**/*.js']).pipe(__gulpWebpack(webpackDistParams)).pipe(__gulp.dest('dist/js')).pipe(__gulpUglify()).pipe(__gulpRename({
	extname: '.min.js'
})).pipe(__gulp.dest('dist/js'));
});

/**
 * Tests
 */
__gulp.task('tests-js-compile', [], function() {
	return __gulp.src('tests/phantomjs/src/**/*.js').pipe(__named()).pipe(__gulpWebpack(webpackParams)).pipe(__gulp.dest('tests/phantomjs/js'));
});
__gulp.task('tests', ['tests-js-compile'], function() {
	return __gulp.src('tests/phantomjs/*.html').pipe(__gulpMochaPhantom());
});

/**
 * Documentation
 */
__gulp.task('doc-sass', ['doc-iconfont'], () => {
	__gulp.src('public/assets-src/sass/**/*.scss')
	.pipe(__gulpSass({
		outputStyle: 'expanded',
		precision: 8
	}))
	.pipe(__gulp.dest('public/assets/css'));
});
let docWebpackParams = _.extend({}, webpackParams, {
	output: {
	path: __path.resolve("./public/assets/js"),
	filename: '[name].js',
	libraryTarget: 'umd'
	}
});
__gulp.task('doc-js', [], () => {
	__gulp.src('public/assets-src/js/**/*.js')
	.pipe(__gulpWebpack(docWebpackParams))
	.pipe(__gulp.dest('public/assets/js'));
});
__gulp.task('doc-js-api', function() {
	return __generateDoc(__dirname + '/src/js/', '**/*.js', __dirname + '/doc/api/js');
});
__gulp.task('doc-sass-api', function() {
	return __generateDoc(__dirname + '/src/sass/', '**/*.scss', __dirname + '/doc/api/sass');
});
__gulp.task('doc-components-api', function() {
	return __generateDoc(__dirname + '/src/components/', '**/*.{scss,js}', __dirname + '/doc/components');
});
__gulp.task('doc-iconfont', [], () => {
	__gulp.src('public/assets-src/fonts/icons-src/*.svg')
	.pipe(__gulpIconfontCss({
		fontName: 'icons',
		path: 'public/assets-src/sass/03_generic/_icons-gulp-template.scss',
		targetPath: '../../assets-src/sass/03_generic/_icons.scss',
		fontPath: '../fonts/',
		startUnicode : false,
		fixedCodepoints : true
	}))
	.pipe(__gulpIconfont({
		fontName : 'icons',
		prependUnicode : false,
		startUnicode : false,
		formats : ['ttf','eot','woff','woff2'],
		timestamp : runTimestamp,
		normalize : true
	}))
	.pipe(__gulp.dest('public/assets/fonts'));
});

__gulp.task('default', ['doc-js-api','doc-sass-api','doc-components-api','doc-js','doc-sass']);

__gulp.task('watch', ['default'], function() {
	__gulp.watch(['src/js/**/*.js'], ['doc-js-api','doc-js']);
	__gulp.watch(["src/sass/**/*.scss"], ['doc-sass-api','doc-sass']);
	__gulp.watch(["src/components//**/*.scss"], ['doc-components-api']);
	__gulp.watch(['public/assets-src/js/**/*.js'], ['doc-js']);
	__gulp.watch(['public/assets-src/sass/**/*.scss'], ['doc-sass']);
	// __gulp.watch(['./.gulp/**/*'], ['doc-sass-api','doc-js-api','doc-components-api']);
	__gulp.watch(['tests/phantomjs/src/**/*.js'], ['tests']);
});
