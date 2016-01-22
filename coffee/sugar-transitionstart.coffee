###
# Sugar-transitionstart.js
#
# This little js file allow you to make your element that have a transition trigger the transitionstart event
#
# @author   Olivier Bossel <olivier.bossel@gmail.com>
# @created  22.01.16
# @updated  22.01.16
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

	window.SugarTransitionStart =

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
			document.addEventListener("transitionend", @_onTransitionEnd, false);
			document.addEventListener("oTransitionEnd", @_onTransitionEnd, false);
			document.addEventListener("webkitTransitionEnd", @_onTransitionEnd, false);
			

		###
		On animation start
		###
		_onTransitionEnd : (e) ->
			if e.elapsedTime == 0.000001
				console.log 'transitionstart'
				e.target.dispatchEvent(new CustomEvent('transitionstart', {
					bubbles : true,
					cancelable : true
				}));

	# init the filter
	SugarTransitionStart.init()

	# return the Sugar object
	SugarTransitionStart