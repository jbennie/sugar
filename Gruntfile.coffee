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
			extras:
				src: [
					'bower_components/cssua.js/cssua.min.js'
					'js/sugar.js'
				]
				dest: 'js/sugar.js'

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
			animatecss:
				src: 'bower_components/animate.css/animate.css'
				dest: 'sass/sugar/vendors/animatecss/_animate.scss'
			sassyStrings:
				expand: true,
				cwd: 'bower_components/SassyStrings/stylesheets/',
				src: '**',
				dest: 'sass/sugar/vendors/sassyStrings/',
				filter: 'isFile'
			sassyLists:
				expand: true,
				cwd: 'bower_components/SassyLists/stylesheets/',
				src: '**',
				dest: 'sass/sugar/vendors/sassyLists/',
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

			sassline:
				expand: true,
				cwd: 'bower_components/sassline/assets/sass/base/',
				src: '**',
				dest: 'sass/sugar/vendors/sassline/',
				filter: 'isFile'

		uglify:
			my_target:
				files:
					'js/gridle.min.js': 'js/gridle.js'
					'js/gridle.eq.min.js' : 'js/gridle-eq.js'
					'js/jquery.js' : 'bower_components/jquery/dist/jquery.min.js'
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
				tasks: ['clean', 'coffee', 'concat', 'uglify', 'notify:coffee']

		clean: [
			'css'
			'sass/sugar/vendors'
			'js'
		]

		postcss:
			options:
				processors: [
					require('autoprefixer')({browsers: 'last 2 versions'})
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
		'compass'
		'cssmin'
		'postcss'
		'coffee'
		'concat'
		'uglify'
		'notify:default'
	]