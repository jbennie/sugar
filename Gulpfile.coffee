_            = require 'lodash'
gulp         = require 'gulp'
gulpWebpack  = require 'gulp-webpack'
gutil        = require 'gulp-util'
rename       = require 'gulp-rename'
sass         = require 'gulp-sass'
uglify       = require 'gulp-uglify'
autoprefixer = require 'gulp-autoprefixer'
webpack 	 = require 'webpack'
replace 	 = require 'gulp-replace'
fs 			 = require 'fs'
compass 	 = require 'gulp-compass'
concat 		 = require 'gulp-concat'
coffee 		 = require 'gulp-coffee'
clean 		 = require 'gulp-clean'

# configure webpack
webpackParams =
	module :
		loaders: [{
			test: /\.coffee$/,
			loader: 'coffee-loader'
		}]
	entry: {
        'sugar-drawer': ["./coffee/sugar/sugar-drawer.coffee"]
        'sugar-gooey': ["./coffee/sugar/sugar-gooey.coffee"]
        'sugar-domnodeinserted': ["./coffee/sugar/sugar-domnodeinserted.coffee"]
        'sugar-motionblur': ["./coffee/sugar/sugar-motionblur.coffee"]
        'sugar-transitionstart': ["./coffee/sugar/sugar-transitionstart.coffee"]
        'sugar-webfonts': ["./coffee/sugar/sugar-webfonts.coffee"]
        'index': ["./coffee/sugar/sugar.coffee"]
        'sugar': ['./coffee/sugar/sugar.coffee']
    },
	output:
		path: require("path").resolve("./js"),
		filename: '[name].js'
		library: '[name]'
		libraryTarget: 'umd'

if process.env.NODE_ENV is 'debug'
	webpackParams.devtool = "#inline-source-map"

# clean
gulp.task 'clean-js', ->
	gulp.src [
		'js/'
	]
	.pipe clean()
gulp.task 'clean-css', ->
	gulp.src [
		'css/'
	]
	.pipe clean()

# vendors
gulp.task 'vendor', ['coffee'], ->
	gulp.src [
		'bower_components/jquery/dist/jquery.js'
		'bower_components/jquery.slidizle/js/jquery.slidizle.js'
		'js/demo.js'
	]
	.pipe concat 'vendor.js'
	.pipe uglify()
	.pipe gulp.dest 'js'

# coffee
gulp.task 'coffee', ->
	gulp.src './coffee/*.coffee'
	.pipe coffee()
	.pipe gulp.dest 'js'

# compass
gulp.task 'compass', ->
	gulp.src './sass/**/*.scss'
	.pipe compass
		config_file: './config.rb'
		css: 'css'
		sass: 'sass'
	.pipe autoprefixer()
	.pipe gulp.dest 'css'

# sass
gulp.task 'sass', ->
	gulp.src './sass/**/*.scss'
	.pipe sass(outputStyle: 'compressed').on 'error', sass.logError
	.pipe autoprefixer()
	.pipe gulp.dest 'css'

# build the package
gulp.task 'webpack', ->
	gulp.src './coffee/**/*.coffee'
	.pipe gulpWebpack webpackParams
	# .pipe uglify()
	.pipe gulp.dest 'js'

# register tasks
gulp.task 'default', ['webpack','compass','vendor']
gulp.task 'watch', ['default'], ->
	# Recompile on change
	gulp.watch ["coffee/**/*.coffee"], ['webpack','coffee']
	gulp.watch ["sass/**/*.scss"], ['compass']