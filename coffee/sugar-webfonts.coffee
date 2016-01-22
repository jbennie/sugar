###
# Sugar-webfonts.js
#
# This little js file allow you to use webfonts based64 encoded and loaded from localstorage
#
# @author   Olivier Bossel <olivier.bossel@gmail.com>
# @created  23.11.15
# @updated  23.11.15
# @version  1.0.0
###
((factory) ->
	if typeof define == 'function' and define.amd
		# AMD. Register as an anonymous module.
		define [ ], factory
	else if typeof exports == 'object'
		# Node/CommonJS
		factory()
	else
		# Browser globals
		factory()
	return
) () ->

	window.SugarWebfonts =

		# variables
		_key : 'sugar-webfonts'
		_cache : null

		# track if already inited
		_inited : false

		# default settings that can be overrided on init
		_settings :
			version : '581fea09a1e08e3770d777ca504608ee'
			json_path : '/fonts/fonts.json'
			debug : false
		
		###
		Init
		###
		init : (settings) ->

			# extend settings
			@_settings = @_extend @_settings, settings

			# update inited state
			@_inited = true

			# check if a cachebuster is set
			cb_split = @_settings.json_path.split '#'
			@_settings.version = cb_split[1] if cb_split.length == 2
			@_settings.json_path = cb_split[0] if cb_split.length == 2

			try
				@_cache = window.localStorage.getItem(@_key)
				if @_cache
					@_cache = JSON.parse @_cache
					if @_cache.version == @_settings.version
						@_debug 'No new version of your fonts.'
						@_insertFont @_cache.value
					else
						@_debug 'new version of your fonts.'
						# Busting cache when version doesn't match
						window.localStorage.removeItem @_key
						@_cache = null
			catch e
				# Most likely LocalStorage disabled
				@_debug 'your browser seems to not support the localStorage api'

			if not @_cache
				# Fonts not in LocalStorage or version did not match
				window.addEventListener 'load', =>
					request = new XMLHttpRequest
					response = undefined
					request.open 'GET', @_settings.json_path, true
					_this = @
					request.onload = ->
						if @status == 200
							try
								response = JSON.parse @responseText
								fontface = '';
								for index, font of response.fonts
									fontface += '@font-face{'
									for prop, value of font
										value = '"'+value+'"' if prop == 'font-family'
										fontface += prop + ':' + value + ';'
									fontface += '}';
								_this._insertFont fontface
								window.localStorage.setItem _this._key, JSON.stringify
									version : _this._settings.version
									value : fontface
							catch e
								# LocalStorage is probably full
					request.send()

		###
		Extend settingd
		###
		_extend : (obj, mixin) ->
			obj[name] = method for name, method of mixin
			obj

		###
		Insert font
		###
		_insertFont : (value) ->
			@_debug 'inserting fonts'
			style = document.createElement('style')
			style.innerHTML = value
			document.head.appendChild style

		###
		Debug
		###
		_debug : ->
			console.log 'SUGAR-WEBFONTS', arguments if @_settings.debug


	# return the Sugar object
	SugarWebfonts