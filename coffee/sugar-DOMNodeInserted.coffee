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

	window.SugarDOMNodeInserted =

		# track if already inited
		_inited : false
		
		# enabled
		enabled : true

		###
		Init
		###
		init : () ->

			# update inited state
			@_inited = true

			# wait until the dom is loaded
			if document.readyState == 'interactive' then @_init()
			else document.addEventListener 'DOMContentLoaded', (e) => @_init()

		###
		Internal init
		###
		_init : ->

			# do nothing if not enabled
			return if not @enabled

			# listen animations start
			document.addEventListener("animationstart", @_onAnimationStart, false);
			document.addEventListener("MSAnimationStart", @_onAnimationStart, false);
			document.addEventListener("webkitAnimationStart", @_onAnimationStart, false);
			

		###
		On animation start
		###
		_onAnimationStart : (e) ->
			if e.animationName == 's-DOMNodeInserted'
				e.target.dispatchEvent(new CustomEvent('DOMNodeInserted', {
					bubbles : true,
					cancelable : true
				}));

	# init the filter
	SugarDOMNodeInserted.init()

	# return the Sugar object
	SugarDOMNodeInserted