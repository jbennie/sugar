
require('babel-core/register');
const _ = require('lodash');
const gulp = require('gulp');
const gulpWebpack = require('gulp-webpack');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const replace = require('gulp-replace');
const fs = require('fs');
const __path = require('path');
const compass = require('gulp-compass');
const concat = require('gulp-concat');
const coffee = require('gulp-coffee');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const filter = require('gulp-filter');
const cached = require('gulp-cached');
const ts = require('gulp-typescript');
const mocha = require('gulp-mocha');
const mochaPhantom = require('gulp-mocha-phantomjs');
const named = require('vinyl-named');
const gulpJsdoc2md = require('gulp-jsdoc-to-markdown');
const jsdocParse = require('jsdoc-parse');
const data = require('gulp-data');
const each = require('gulp-each');
const ent = require('ent');
const readdirRecursive = require('fs-readdir-recursive');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const runTimestamp = Math.round(Date.now()/1000);

import docblockParser from './.gulp/docblock-parser'
import Handlebars from './handlebars.config'

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

gulp.task('tokens', function() {
	var drawers_content, footer_content, head_content, topbar_content;
	topbar_content = fs.readFileSync("pages/parts/top-bar.php", "utf8");
	drawers_content = fs.readFileSync("pages/parts/drawers.php", "utf8");
	head_content = fs.readFileSync("pages/parts/head.php", "utf8");
	footer_content = fs.readFileSync("pages/parts/footer.php", "utf8");
	return gulp.src(['pages/*.php']).pipe(replace('{HEAD}', head_content)).pipe(replace('{FOOTER}', footer_content)).pipe(replace('{TOPBAR}', topbar_content)).pipe(replace('{DRAWERS}', drawers_content)).pipe(gulp.dest('./'));
});

gulp.task('clean-js', function() {
	return gulp.src(['dist/js/', 'assets/js']).pipe(clean());
});

gulp.task('clean-css', function() {
	return gulp.src(['dist/css/', 'assets/css']).pipe(clean());
});

gulp.task('markdown-js-api', function() {

	const files = readdirRecursive('./doc/api/js');
	const types = {};
	files.forEach((path) => {
		const basename = __path.basename(path),
			  fileName = basename.slice(0,-3);
		if (/^[A-Z]/.test(fileName)) {
			types[fileName] = `/api/js/${path}`;
		}
	});

	gulp.src('./src/js/**/*.js')
	.pipe(each(function(content, file, cb) {
		docblockParser(file, function(json) {
			let source = fs.readFileSync('./template.hbs', 'utf8');
			let template = Handlebars.compile(source);
			let result = template({
				data : json
			});
			result = ent.decode(result);
			cb(null, result);
		}, {
			types : {
				js : Object.assign(types, {
					Observable : 'https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md'
				})
			}
		});
	}))
	.pipe(rename((path) => {
		path.extname = '.md';
	}))
	.pipe(gulp.dest('doc/api/js'));
});

gulp.task('sass', function() {
	return gulp.src('./src/sass/**/*.scss').pipe(sass({
	outputStyle: 'expanded',
	precision: 8
	}).on('error', sass.logError)).pipe(autoprefixer({
	browsers: ['last 5 versions']
	})).pipe(gulp.dest('assets/css'));
});

gulp.task('webpack-dist', ['clean-js'], function() {
	return gulp.src(['./src/components/**/*.js']).pipe(gulpWebpack(webpackDistParams)).pipe(gulp.dest('dist/js')).pipe(uglify()).pipe(rename({
	extname: '.min.js'
	})).pipe(gulp.dest('dist/js'));
});

gulp.task('webpack-app', ['clean-js'], function() {
	return gulp.src(['./src/js/demo/*.js']).pipe(gulpWebpack(webpackAppParams)).pipe(gulp.dest('assets/js')).pipe(uglify()).pipe(rename({
	extname: '.min.js'
	})).pipe(gulp.dest('assets/js'));
});

gulp.task('tests-js-compile', [], function() {
	return gulp.src('tests/phantomjs/src/**/*.js').pipe(named()).pipe(gulpWebpack(webpackParams)).pipe(gulp.dest('tests/phantomjs/js'));
});

gulp.task('tests', ['tests-js-compile'], function() {
	return gulp.src('tests/phantomjs/*.html').pipe(mochaPhantom());
});

/**
 * Documentation
 */
gulp.task('doc-sass', [], () => {
	gulp.src('public/assets-src/sass/**/*.scss')
	.pipe(sass({
		outputStyle: 'expanded',
		precision: 8
	}))
	.pipe(gulp.dest('public/assets/css'));
});
let docWebpackParams = _.extend({}, webpackParams, {
	output: {
	path: __path.resolve("./public/assets/js"),
	filename: '[name].js',
	libraryTarget: 'umd'
	}
});
gulp.task('doc-webpack', [], () => {
	gulp.src('public/assets-src/js/**/*.js')
	.pipe(gulpWebpack(docWebpackParams))
	.pipe(gulp.dest('public/assets/js'));
});
// iconfont
gulp.task('doc-iconfont', [], () => {
	gulp.src('public/assets-src/fonts/icons-src/*.svg')
	.pipe(iconfontCss({
		fontName: 'icons',
		path: 'public/assets-src/sass/03_generic/_icons-gulp-template.scss',
		targetPath: '../../assets-src/sass/03_generic/_icons.scss',
		fontPath: '../fonts/',
		startUnicode : false,
		fixedCodepoints : true
	}))
	.pipe(iconfont({
		fontName : 'icons',
		prependUnicode : false,
		startUnicode : false,
		formats : ['ttf','eot','woff','woff2'],
		timestamp : runTimestamp,
		normalize : true
	}))
	.pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('default', ['webpack-app', 'sass']);

gulp.task('watch', ['default'], function() {
	gulp.watch(['src/js/**/*.js'], ['webpack-app']);
	gulp.watch(["src/sass/**/*.scss"], ['sass']);
	gulp.watch(['pages/**/*.php'], ['tokens']);
	gulp.watch(['public/assets-src/js/**/*.js'], ['doc-webpack']);
	gulp.watch(['public/assets-src/sass/**/*.scss'], ['doc-sass']);
	return gulp.watch(['tests/phantomjs/src/**/*.js'], ['tests']);
});

// ---
// generated by coffee-script 1.9.2
