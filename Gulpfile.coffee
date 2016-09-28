require('babel-core/register');
_            = require 'lodash'
gulp         = require 'gulp'
gulpWebpack  = require 'gulp-webpack'
gutil        = require 'gulp-util'
rename       = require 'gulp-rename'
sass         = require 'gulp-sass'
uglify       = require 'gulp-uglify'
autoprefixer = require 'gulp-autoprefixer'
replace 	 = require 'gulp-replace'
fs 			 = require 'fs'
compass 	 = require 'gulp-compass'
concat 		 = require 'gulp-concat'
coffee 		 = require 'gulp-coffee'
clean 		 = require 'gulp-clean'
babel 		 = require 'gulp-babel'
filter 		 = require 'gulp-filter'
cached 		 = require 'gulp-cached'
ts 			 = require 'gulp-typescript'
mocha 	 	 = require 'gulp-mocha'
mochaPhantom = require 'gulp-mocha-phantomjs'
named 		 = require 'vinyl-named'
gulpJsdoc2md = require 'gulp-jsdoc-to-markdown'

# configure webpack
webpackParams =
	resolve:
		alias:
			sugarcss: __dirname + '/src/js'
	module :
		loaders: [{
			test: /\.coffee$/,
			loader: 'coffee-loader'
		}, {
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015-loose','stage-0'],
				plugins: ['transform-proto-to-assign'],
				compact: false
			}
		}]


webpackAppParams = _.extend {}, webpackParams,
	entry: {
		# 'angular-demo': ['./src/js/angular-demo.js'],
		# 'coco': ['./src/js/coco.js']
	}
	output:
		path: require("path").resolve("./assets/js"),
		filename: '[name].js',
		libraryTarget: 'umd'
webpackDistParams = _.extend {}, webpackParams,
	# entry: {
	# 	'drawer': [
	# 		"./src/js/components/SDrawerElement.js"
	# 		"./src/js/components/sDrawerManager.js"
	# 	]
	# 	'gooey': ["./src/js/filters/SGooeyElement.js"]
	# 	'motionblur': ["./src/js/filters/SMotionblurElement.js"]
	# 	'gradient': ["./src/js/filters/SGradientElement.js"]
	# 	'transitionstart': ["./src/js/events/STransitionStartEventDispatcher.js"]
	# 	'localStorageFonts': ["./src/js/fonts/sLocalStorageFonts.js"]
	# 	'activate' : [
	# 		'./src/js/components/SActivateElement.js'
	# 		'./src/js/components/sActivateManager.js'
	# 	]
	# 	#'form' : ['./src/js/components/s-form.js']
	# 	'sugar' : ['./src/js/sugar.js']
	# },
	output:
		path: require("path").resolve("./dist/js"),
		filename: '[name].js'
		library: '[name]'
		libraryTarget: 'umd'

if process.env.NODE_ENV is 'debug'
	webpackParams.devtool = "#inline-source-map"

# topbar
gulp.task 'tokens', ->
	topbar_content = fs.readFileSync("pages/parts/top-bar.php", "utf8");
	drawers_content = fs.readFileSync("pages/parts/drawers.php", "utf8");
	head_content = fs.readFileSync("pages/parts/head.php", "utf8");
	footer_content = fs.readFileSync("pages/parts/footer.php", "utf8");
	gulp.src [
		'pages/*.php'
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
		'dist/css/',
		'assets/css'
	]
	.pipe clean()

# compass
# gulp.task 'compass', ->
# 	gulp.src './src/sass/**/*.scss'
# 	.pipe cached('compass')
# 	.pipe compass
# 		config_file: './config.rb'
# 		css: 'assets/css'
# 		sass: 'src/sass'
# 	.pipe autoprefixer
# 		browsers: ['last 5 versions']
# 	.pipe gulp.dest 'assets/css'

gulp.task 'markdown-js-api', ->
	gulp.src './src/js/classes/STimer.js'
	.pipe babel
		presets: ['es2015-loose','stage-0'],
		#plugins: ['transform-proto-to-assign']
	.pipe gulpJsdoc2md
		template : fs.readFileSync('./template.hbs', 'utf8')
	.pipe gulp.dest 'doc/api/js'

# sass
gulp.task 'sass', ->
	gulp.src './src/sass/**/*.scss'
	# .pipe cached('sass')
	.pipe sass(
		outputStyle: 'expanded'
		precision : 8
	).on 'error', sass.logError
	.pipe autoprefixer
		browsers: ['last 5 versions']
	.pipe gulp.dest 'assets/css'

# build the package
gulp.task 'webpack-dist', ['clean-js'], ->
	gulp.src [
		'./src/components/**/*.js'
	]
	.pipe gulpWebpack webpackDistParams
	.pipe gulp.dest 'dist/js'
	.pipe uglify()
	.pipe rename
		extname : '.min.js'
	.pipe gulp.dest 'dist/js'

gulp.task 'webpack-app', ['clean-js'], ->
	gulp.src [
		'./src/js/demo/*.js'
	]
	.pipe gulpWebpack webpackAppParams
	.pipe gulp.dest 'assets/js'
	.pipe uglify()
	.pipe rename
		extname : '.min.js'
	.pipe gulp.dest 'assets/js'

# tests
gulp.task 'tests-js-compile', [], ->
	gulp.src 'tests/phantomjs/src/**/*.js'
	.pipe named()
	.pipe gulpWebpack webpackParams
	.pipe gulp.dest 'tests/phantomjs/js'
gulp.task 'tests', ['tests-js-compile'], ->
	gulp.src 'tests/phantomjs/*.html'
	.pipe mochaPhantom()

# register tasks
gulp.task 'default', ['webpack-app','sass']
gulp.task 'watch', ['default'], ->
	# Recompile on change
	gulp.watch ['src/js/**/*.js'], ['webpack-app']
	gulp.watch ["src/sass/**/*.scss"], ['sass']
	gulp.watch ['pages/**/*.php'], ['tokens']
	gulp.watch ['tests/phantomjs/src/**/*.js'], ['tests']
