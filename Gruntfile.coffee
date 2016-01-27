module.exports = (grunt) ->

	# Configuration
	# =============
	grunt.initConfig
		
		pkg: grunt.file.readJSON 'package.json'

		concat:
			animatecss:
				src : 'sass/sugar/vendors/animatecss/*/*.scss'
				dest : 'sass/sugar/vendors/animatecss/_animate.scss'
		
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

		clean: [
			'sass/sugar/vendors'
		]

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
		

	grunt.loadNpmTasks 'grunt-notify'
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.loadNpmTasks 'grunt-contrib-clean'
	grunt.loadNpmTasks 'grunt-contrib-copy'
	grunt.loadNpmTasks 'grunt-replace'

	grunt.registerTask 'default', [
		'clean'
		'copy'
		'concat'
		'notify:default'
	]