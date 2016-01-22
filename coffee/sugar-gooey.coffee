###
# Sugar-gooey.js
#
# This little js file allow you to use the gooey effect
#
# @author   Olivier Bossel <olivier.bossel@gmail.com>
# @created  22.01.16
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

	window.SugarGooey =

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

			# init element
			for item in document.querySelectorAll('[data-gooey]')
				item.dispatchEvent(new CustomEvent('DOMNodeInserted', {
					bubbles : true,
					cancelable : true
				}));

		###
		Inject filter
		###
		_injectFilter : ->

			# gooey
			style = ['position:absolute;','left:-1000px;']
			if /Chrome/.test(navigator.userAgent) and /Google Inc/.test(navigator.vendor)
				style.push 'display:none;'
			gooey = """
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="#{style.join(' ')}">
					<defs>
						<filter id="gooey">
							<feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
							<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey" />
							<feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
						</filter>
					</defs>
				</svg>
			"""
			gooey_elm = document.createElement 'div'
			gooey_elm.innerHTML = gooey
			@gooey_defs = gooey_elm.querySelector 'defs'
			@gooey_svg = gooey_elm.firstChild
			@gooey = gooey_elm.querySelector '#gooey'

			# append filters to page
			body = document.querySelector('body')
			body.appendChild @gooey_svg

		###
		Listen for animations
		###
		_listenAnimation : ->
			document.addEventListener 'DOMNodeInserted', (e) =>
				elm = e.target
				if elm.dataset and elm.dataset.gooey != undefined and not elm._gooeyFilter
					@_handleFilter elm

		###
		Handle filter
		###
		_handleFilter : (elm, recursive = false) ->
			# clone the filter tag in svg
			elm._gooeyFilter = @gooey.cloneNode true
			# set a new id
			id = 'gooeyFilter-' + @_uniqId()
			elm._gooeyFilter.setAttribute 'id', id
			# append new filter in defs
			@gooey_defs.appendChild elm._gooeyFilter
			# set the new filter to element
			@_applyFilter elm, 'url("#'+id+'")'

			# set the blur effect
			amount = parseInt(elm.dataset.gooey || 10)
			elm._gooeyFilter.firstElementChild.setAttribute 'stdDeviation', amount
			elm._gooeyFilter.children[1].setAttribute 'values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ' + (9 + amount) + ' -9'

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
	SugarGooey.init()

	# return the Sugar object
	SugarGooey