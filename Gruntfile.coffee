module.exports = (grunt) ->

	paths =
		compass:
			cwd: 'sass'
			src: '**/*.{scss,sass}'
			dest: 'css'
		coffee:
			cwd: 'coffee'
			src: '**/*.coffee'
			dest: 'js'

	# Configuration
	# =============
	grunt.initConfig
		
		pkg: grunt.file.readJSON 'package.json'

		compass:
			options:
				config: 'config.rb'
			dist:
				environment: 'development'
				outputStyle: 'expanded'			

		concat:
			animatecss:
				src : 'sass/sugar/vendors/animatecss/*/*.scss'
				dest : 'sass/sugar/vendors/animatecss/_animate.scss'
			sugar:
				src: [
					'bower_components/cssua.js/cssua.min.js'
					'js/sugar.js'
				]
				dest : 'js/sugar.js'
			extras:
				src: [
					'js/sugar.js'
					'js/sugar-webfonts.js'
					'js/sugar-transitionstart.js'
					'js/sugar-domnodeinserted.js'
					'js/sugar-motion-blur.js'
					'js/sugar-gooey.js'
				]
				dest: 'js/sugar-full.js'

		sass:
			options:
				sourceMap: false
				precision: 8
			dist:
				# files:
				# 	'css/grid.css':'sass/grid.scss'
				# 	'css/style.css':'sass/style.scss'
				files: [
					expand: true
					cwd: paths.compass.cwd
					src: paths.compass.src
					dest: paths.compass.dest
					ext: '.css'
				]

		coffee:
			options: 
				bare: true
				sourceMap : true
			dist:
				files: [
					expand: true
					cwd: paths.coffee.cwd
					src: paths.coffee.src
					dest: paths.coffee.dest
					ext: '.js'
				]

		cssmin:
			options:
				shorthandCompacting: false
			target:
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
		
		copy:
			fontawesome:
				expand: true,
				cwd: 'bower_components/font-awesome/css/',
				src: 'font-awesome.css',
				dest: 'sass/sugar/vendors/fontawesome/',
				filter: 'isFile'
				rename: (dest, src) ->
					dest + '_' + src.replace '.css', '.scss'
				options:
					process: (content, srcpath) =>
						content = content.replace /@font-face\s\{[\s\S]*\}[\s\S]\.fa\s\{/g, '.fa {'
						content = content.replace /\.(fa[a-zA-Z_-]{0,60})/gi, "%$1"
						content
			modularscale:
				expand: true,
				cwd: 'bower_components/modular-scale/stylesheets/',
				src: '**',
				dest: 'sass/sugar/vendors/modularscale/',
				filter: 'isFile'
			animatecss:
				expand: true,
				cwd: 'bower_components/animate.css/source',
				src: '**',
				dest: 'sass/sugar/vendors/animatecss/',
				filter: 'isFile'
				rename: (dest, src) ->
					src = src.replace 'css', 'scss'
					split = src.split '/'
					path = split[0]
					file = split[1]
					if file
						file = '_' + file
						res = dest + path + '/' + file
					else
						res = dest + src
					return res
				options:
					process: (content, srcpath) ->
						split = srcpath.split '/'
						filename = split[split.length-1]
						name = filename.replace '.scss',''
						name = filename.replace '.css',''
						content = content.replace /(\.)([a-zA-Z_-]{3,60})/gi, "%$2"
						content = '@if global-variable-exists(sugar-animatecss) == false or index($sugar-animatecss, ' + name + ') { $_sugar-animatecss : () !default; $_sugar-animatecss : append($_sugar-animatecss, ' + name + '); ' + content + '}'
						content
			sassdash:
				expand: true,
				cwd: 'bower_components/sassdash/scss/',
				src: '**',
				dest: 'sass/sugar/vendors/sassdash/',
				filter: 'isFile'
			cssgram:
				expand: true,
				cwd: 'bower_components/cssgram/source/scss/',
				src: '**',
				dest: 'sass/sugar/vendors/cssgram/',
				filter: 'isFile'
				rename: (dest, src) ->
					return dest + '_' + src if src.substring(0,1) != '_'
					return dest + src
				options:
					process: (content, srcpath) ->
						content = '$cssgram : () !default;' + content
						content = content.replace /@import 'shared';/gi, '' if content? and not srcpath.match /cssgram\.scss/
						content = content.replace /(%[a-zA-Z0-9_-]{3,60},)/gi, '' if content?
						content = content.replace /(\.)([a-zA-Z0-9_-]{3,60})/gi, "$cssgram : append($cssgram, $2); \r %cssgram-$2" if content?
						content

		uglify:
			my_target:
				files:
					'js/gridle.min.js': 'js/gridle.js'
					'js/gridle.eq.min.js' : 'js/gridle-eq.js'
					'js/jquery.js' : 'bower_components/jquery/dist/jquery.min.js'
					'js/jquery.appear.js' : 'bower_components/jquery_appear/jquery.appear.js'
					'js/interact.js' : 'bower_components/interact/interact.js'
					'js/jquery.slidizle.js' : 'bower_components/jquery.slidizle/js/jquery.slidizle.js'
			full:
				files:
					'js/gridle-full.min.js' : [
						'js/gridle.js'
						'js/gridle-eq.js'
					]

		replace:
			animate:
				options:
					patterns: [{
			  			match: /(\.)([a-zA-Z]+)/gi
			  			replacement: '%$2'
					}]
				files: [{
					expand: true
					flatten: true
					src: ['sass/sugar/vendors/animatecss/animate.scss'],
					dest: 'sass/sugar/vendors/animatecss/'
				}]

		watch:
			livereload:
				options:
					livereload: 12345
				files: [
					'css/*.css'
					'js/*.js'
					'*.html'
				]
			html:
				files: 'index.html'
				tasks: ['notify:default']
			sass:
				files: paths.compass.cwd + '/' + paths.compass.src
				tasks: ['compass', 'cssmin', 'postcss', 'notify:compass']
			coffee:
				files: paths.coffee.cwd+'/'+paths.coffee.src
				tasks: ['coffee', 'concat:extras', 'uglify', 'notify:coffee']

		clean: [
			'css'
			'sass/sugar/vendors'
			'js'
		]

		postcss:
			options:
				processors: [
					require('autoprefixer')({browsers: 'last 10 versions'})
				]
			dist:
				src: 'css/*.css'

		notify:
			default:
				options:
					title:'Grunt'
					message: 'All tasks where processed'
			compass:
				options:
					title:'Grunt watcher'
					message: 'SASS files where processed'
			coffee:
				options:
					title:'Grunt watcher'
					message: 'Coffee files where processed'
		

	grunt.loadNpmTasks 'grunt-sass'
	grunt.loadNpmTasks 'grunt-contrib-coffee'
	grunt.loadNpmTasks 'grunt-contrib-compass'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-cssmin'
	grunt.loadNpmTasks 'grunt-notify'
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.loadNpmTasks 'grunt-contrib-clean'
	grunt.loadNpmTasks 'grunt-contrib-copy'
	grunt.loadNpmTasks 'grunt-postcss'
	grunt.loadNpmTasks 'grunt-replace'
	grunt.loadNpmTasks 'grunt-contrib-rename'

	grunt.registerTask 'default', [
		'clean'
		'copy'
		'coffee'
		'concat'
		'uglify'
		'compass'
		'cssmin'
		'postcss'
		'notify:default'
	]