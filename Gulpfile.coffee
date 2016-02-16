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
babel 		 = require 'gulp-babel'

# configure webpack
webpackParams =
	module :
		loaders: [{
			test: /\.coffee$/,
			loader: 'coffee-loader'
		}, {
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015'],
				compact: false
			}
		}]
webpackAppParams = _.extend {}, webpackParams,
	output:
		path: require("path").resolve("./assets/js"),
		filename: 'app.js',
		libraryTarget: 'umd'
webpackDistParams = _.extend {}, webpackParams,
	entry: {
		'drawer': ["./src/coffee/sugar/sugar-drawer.coffee"]
		'gooey': ["./src/coffee/sugar/sugar-gooey.coffee"]
		'domnodeinserted': ["./src/coffee/sugar/sugar-domnodeinserted.coffee"]
		'motionblur': ["./src/coffee/sugar/sugar-motionblur.coffee"]
		'transitionstart': ["./src/coffee/sugar/sugar-transitionstart.coffee"]
		'webfonts': ["./src/coffee/sugar/sugar-webfonts.coffee"]
		'index': ["./src/coffee/sugar/sugar.coffee"]
		'activate' : ['./src/js/sugar/sugar-activate.js']
		'sugar': ['./src/coffee/sugar/sugar.coffee']
	},
	output:
		path: require("path").resolve("./dist/js"),
		filename: '[name].js'
		library: '[name]'
		libraryTarget: 'umd'

if process.env.NODE_ENV is 'debug'
	webpackParams.devtool = "#inline-source-map"

# topbar
gulp.task 'tokens', ->
	topbar_content = fs.readFileSync("pages/parts/top-bar.html", "utf8");
	drawers_content = fs.readFileSync("pages/parts/drawers.html", "utf8");
	head_content = fs.readFileSync("pages/parts/head.html", "utf8");
	footer_content = fs.readFileSync("pages/parts/footer.html", "utf8");
	gulp.src [
		'pages/*.html'
	]
	.pipe replace '{HEAD}', head_content
	.pipe replace '{FOOTER}', footer_content
	.pipe replace '{TOPBAR}', topbar_content
	.pipe replace '{DRAWERS}', drawers_content
	.pipe gulp.dest './'

# clean
gulp.task 'clean-js', ->
	gulp.src [
		'dist/js/',
		'assets/js'
	]
	.pipe clean()
gulp.task 'clean-css', ->
	gulp.src [
		'assets/css/'
	]
	.pipe clean()

# coffee
gulp.task 'coffee', ['clean-js'], ->
	gulp.src './src/coffee/*.coffee'
	.pipe coffee()
	.pipe gulp.dest 'assets/js'

# compass
gulp.task 'compass', ->
	gulp.src './src/sass/**/*.scss'
	.pipe compass
		config_file: './config.rb'
		css: 'assets/css'
		sass: 'src/sass'
	.pipe autoprefixer()
	.pipe gulp.dest 'assets/css'

# sass
gulp.task 'sass', ->
	gulp.src './src/sass/**/*.scss'
	.pipe sass(outputStyle: 'compressed').on 'error', sass.logError
	.pipe autoprefixer()
	.pipe gulp.dest 'assets/css'

# build the package
gulp.task 'webpack-dist', ['clean-js'], ->
	gulp.src [
		'./src/js/sugar/**/*.js'
		'./src/coffee/sugar/**/*.coffee'
	]
	.pipe gulpWebpack webpackDistParams
	# .pipe babel
	# 	presets: ['es2015','stage-0']
	# 	compact: false
	# .pipe uglify()
	.pipe gulp.dest 'dist/js'

gulp.task 'webpack-app', ['clean-js'], ->
	gulp.src [
		'./src/js/*.js'
		'./src/coffee/*.coffee'
	]
	.pipe gulpWebpack webpackAppParams
	# .pipe babel
	# 	presets: ['es2015','stage-0']
	# 	#plugins: ['dataset']
	# .pipe uglify()
	.pipe gulp.dest 'assets/js'

# register tasks
gulp.task 'default', ['webpack-dist','webpack-app','compass']
gulp.task 'watch', ['default'], ->
	# Recompile on change
	gulp.watch ["src/coffee/**/*.coffee"], ['webpack-dist','webpack-app']
	gulp.watch ['src/js/**/*.js'], ['webpack-dist','webpack-app']
	gulp.watch ["src/sass/**/*.scss"], ['compass']
	gulp.watch ['pages/**/*.html'], ['tokens']