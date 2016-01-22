###
# Sugar-motion-blur.js
#
# This little js file allow you to use cool motion blur svg effect
#
# @author   Olivier Bossel <olivier.bossel@gmail.com>
# @created  20.01.16
# @updated  20.01.16
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

	window.SugarMotionBlur =

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

			# put filters into page
			@_injectFilter()

			# listen for animations
			@_listenAnimation()

		###
		Inject filter
		###
		_injectFilter : ->

			# blur
			style = ['position:absolute;','left:-1000px;']
			if /Chrome/.test(navigator.userAgent) and /Google Inc/.test(navigator.vendor)
				style.push 'display:none;'
			blur = """
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="#{style.join(' ')}">
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
			document.addEventListener 'animationiteration', (e) =>
				elm = e.target
				if elm.dataset.motionBlur != undefined
					cancelAnimationFrame elm._blurAnimationFrame
					@_handleFilter elm
			document.addEventListener 'transitionstart', (e) =>
				elm = e.target
				if elm.dataset.motionBlur != undefined
					cancelAnimationFrame elm._blurAnimationFrame
					@_handleFilter elm
			document.addEventListener 'move', (e) =>
				elm = e.target
				if elm.dataset.motionBlur != undefined
					@_setMotionBlur elm


		###
		Handle filter
		###
		_handleFilter : (elm, recursive = false) ->
			if not recursive
				elm._step = 0

			# set the blur
			diff = @_setMotionBlur elm

			# detect when need to stop animation
			if diff.xDiff <= 0 and diff.yDiff <= 0
				elm._step ?= 0
				elm._step += 1
				if elm._step >= 10
					elm._step = 0
					return

			# request an animation frame
			elm._blurAnimationFrame = requestAnimationFrame () =>
				@_handleFilter elm, true

		###
		# Set motion blur
		###
		_setMotionBlur : (elm) ->

			# clone the filter if not already the case
			if not elm._blurFilter
				# clone the filter tag in svg
				elm._blurFilter = @blur.cloneNode true
				# set a new id
				id = 'blurFilter' + @_uniqId()
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

			return {
				xDiff : xDiff
				yDiff : yDiff
			}

		###
		Get translate values
		###
		_getTranslate : (elm, what) ->
			return if !window.getComputedStyle
			style = getComputedStyle(elm)
			transform = style.transform or style.webkitTransform or style.mozTransform
			mat = transform.match(/^matrix3d\((.+)\)$/)
			if mat
				idx =
					x : 12
					y : 13
					z : 14
				return parseFloat(mat[1].split(', ')[idx[what]])
			mat = transform.match(/^matrix\((.+)\)$/)
			idx =
				x : 4,
				y : 5,
				z : 6
			if mat then parseFloat(mat[1].split(', ')[idx[what]]) else 0

		###
		Get element position
		###
		_offset : (elm) ->
			box = elm.getBoundingClientRect()
			body = document.body
			docEl = document.documentElement
			scrollTop = window.pageYOffset or docEl.scrollTop or body.scrollTop
			scrollLeft = window.pageXOffset or docEl.scrollLeft or body.scrollLeft
			clientTop = docEl.clientTop or body.clientTop or 0
			clientLeft = docEl.clientLeft or body.clientLeft or 0
			transX = @_getTranslate elm, 'x'
			transY = @_getTranslate elm, 'y'
			top = box.top + scrollTop - clientTop + transY
			left = box.left + scrollLeft - clientLeft + transX
			return {
				top: Math.round(top)
				left: Math.round(left)
			}

		###
		Apply filter
		###
		_applyFilter : (elm, filter) ->
			for vendor in ["-webkit-", "-moz-", "-ms-", "o-", ""]
				elm.style[vendor+'filter'] = filter

		###
		UniqId
		###
		_uniqId : ->
			return new Date().getTime() + Math.round(Math.random() * 999999999);
			n = Math.floor(Math.random()*11);
			k = Math.floor(Math.random()* 1000000);
			m = String.fromCharCode(n)+k;
			return m.trim()

	# init the filter
	SugarMotionBlur.init()

	# return the Sugar object
	SugarMotionBlur