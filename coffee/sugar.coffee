###
# Sugar.js
#
# This little js file allow you to have a lot a useful features available for free
#
# @author 	Olivier Bossel <olivier.bossel@gmail.com>
# @created 	03.11.15
# @updated 	03.11.15
# @version 	1.0.0
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

	window.Sugar =

		# track if already inited
		_inited : false

		# default settings that can be overrided on init
		_settings :
			debug : false
		
		###
		Init
		###
		init : (settings) ->

			# update inited state
			@_inited = true

		###
		Debug
		###
		_debug : ->
			console.log 'SUGAR', arguments if @_settings.debug

	# automatically init
	setTimeout ->
		Sugar.init() if not Sugar._inited
	, 500

	# return the Sugar object
	Sugar
