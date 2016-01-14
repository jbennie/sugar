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

	window.SugarFilters =

		# variables
		_key : 'sugar-filters'
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

			# put filters into page
			@_injectFilters()

			# listen for animations
			@_listenAnimation()

		###
		Inject filters
		###
		_injectFilters : ->

			# blur
			blur = """
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none;">
					<defs>
						<filter id="blur">
							<feGaussianBlur in="SourceGraphic" stdDeviation="0,0" />
						</filter>
					</defs>
				</svg>
			"""
			blur_elm = document.createElement 'div'
			blur_elm.innerHTML = blur
			@blur_defs = blur_elm.querySelector 'defs'
			@blur_svg = blur_elm.firstChild
			@blur = blur_elm.querySelector '#blur'

			# append filters to page
			body = document.querySelector('body')
			body.appendChild @blur_svg

		###
		Listen for animations
		###
		_listenAnimation : ->
			document.addEventListener 'animationstart', (e) =>
				elm = e.target
				if elm.dataset.motionBlur != undefined
					@_handleMotionBlur elm
			document.addEventListener 'transitionstart', (e) =>
				elm = e.target
				if elm.dataset.motionBlur != undefined
					@_handleMotionBlur elm
			, false


		###
		Handle motion blur
		###
		_handleMotionBlur : (elm, recursive = false) ->

			if not recursive
				elm._step = 0

			# clone the filter if not already the case
			if not elm._blurFilter
				# clone the filter tag in svg
				elm._blurFilter = @blur.cloneNode true
				# set a new id
				id = 'blurFilter-' + @_uniqId()
				elm._blurFilter.setAttribute 'id', id
				# append new filter in defs
				@blur_defs.appendChild elm._blurFilter
				# set the new filter to element
				@_applyFilter elm, 'url("#'+id+'")'
				# get the last position for the first time
				elm._lastPos = @_offset elm

			# request an animation frame
			amount = elm.dataset.motionBlur || 0.5
			elm._currentPos = @_offset elm
			xDiff = Math.abs(elm._currentPos.left - elm._lastPos.left) * amount
			yDiff = Math.abs(elm._currentPos.top - elm._lastPos.top) * amount

			# set the blur effect
			elm._blurFilter.firstElementChild.setAttribute 'stdDeviation', xDiff+','+yDiff

			# save the last position
			elm._lastPos = @_offset elm

			console.log elm._lastPos

			# detect when need to stop animation
			if xDiff <= 0 and yDiff <= 0
				elm._step ?= 0
				elm._step += 1
				if elm._step >= 5
					elm._step = 0
					return

			# request an animation frame
			elm._blurAnimationFrame = requestAnimationFrame () =>
				@_handleMotionBlur elm, true

		###
		Get element position
		###
		_offset : (elm) ->
			box = elm.getBoundingClientRect()
			console.log box.left
			body = document.body
			docEl = document.documentElement
			scrollTop = window.pageYOffset or docEl.scrollTop or body.scrollTop
			scrollLeft = window.pageXOffset or docEl.scrollLeft or body.scrollLeft
			clientTop = docEl.clientTop or body.clientTop or 0
			clientLeft = docEl.clientLeft or body.clientLeft or 0
			top = box.top + scrollTop - clientTop
			left = box.left + scrollLeft - clientLeft
			return {
				top: Math.round(top)
				left: Math.round(left)
			}

		###
		Apply filter
		###
		_applyFilter : (elm, filter) ->
			for vendor in ["-webkit", "-moz", "-ms", "o", ""]
				elm.style[vendor+'-filter'] = filter

		###
		UniqId
		###
		_uniqId : ->
			# n=Math.floor(Math.random()*11);
			# k = Math.floor(Math.random()* 1000000);
			# m = String.fromCharCode(n)+k;
			# return m.trim()
			return Math.round Math.random() * 9999999

		###
		Extend settings
		###
		_extend : (obj, mixin) ->
			obj[name] = method for name, method of mixin
			obj

		###
		Debug
		###
		_debug : ->
			console.log 'SUGAR-FILTERS', arguments if @_settings.debug

	SugarFilters.init()

	# support AMD
	if typeof window.define is 'function' && window.define.amd
		window.define [], -> window.SugarFilters

	# return the Sugar object
	SugarFilters