###
# Sugar-drawer.js
#
# This little js file allow you to make the use of drawers more easier
#
# @author   Olivier Bossel <olivier.bossel@gmail.com>
# @created  22.01.16
# @updated  20.01.16
# @version  1.0.0
###
window.sugar ?= {}
module.exports = window.sugar.drawer =

	# track if already inited
	_inited : false
	
	# enabled
	enabled : true

	# settings
	_settings :

		# close on link
		close_on_click : true

	###
	Init
	###
	init : (settings = {}) ->

		# extend settings
		@_settings = @_extend @_settings, settings

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

		# list all the drawers
		@drawers = document.querySelectorAll('[data-drawer]')
		for drawer in @drawers
			# set the drawer object
			drawer.drawer ?= {}
			
			# check if has a name
			if drawer.dataset? and drawer.dataset.drawer?
				drawer.drawer.name = drawer.dataset.drawer

				# check the drawer
				@_initDrawer drawer

		# check hash
		@_checkHash()

	###
	Init drawer
	###
	_initDrawer : (drawer_elm) ->

		# get the name
		name = drawer_elm.drawer.name

		# try to find the drawer bkg
		drawer_bkg = document.querySelector('[data-drawer-bkg="'+name+'"]')
		if not drawer_bkg
			# create the toggle
			bkg = document.createElement 'div'
			bkg.setAttribute 'data-drawer-bkg', name

			# save it in the object
			drawer_elm.drawer.bkg = bkg

			# insert it in the page
			drawer_elm.parentElement.insertBefore bkg, drawer_elm.parentElement.firstChild

		# determine if transitioned or not
		cs = getComputedStyle drawer_elm
		if cs.transitionProperty? and cs.transitionProperty != ''
			drawer_elm.drawer.transition = true

		# try to find the drawer overlay
		drawer_overlay = document.querySelector('[data-drawer-overlay="'+name+'"]')
		if not drawer_overlay
			# create the toggle
			overlay = document.createElement 'label'
			overlay.setAttribute 'for', name
			overlay.setAttribute 'data-drawer-overlay', name

			# save it in the object
			drawer_elm.drawer.overlay = overlay

			# insert it in the page
			drawer_elm.parentElement.insertBefore overlay, drawer_elm.parentElement.firstChild

		# try to find the drawer toggle with that name
		drawer_toggle = document.querySelector('[data-drawer-toggle="'+name+'"]')
		if not drawer_toggle

			# create the toggle
			drawer_toggle = document.createElement 'input'
			drawer_toggle.setAttribute 'name', name
			drawer_toggle.setAttribute 'id', name
			drawer_toggle.setAttribute 'type', 'checkbox'
			drawer_toggle.setAttribute 'data-drawer-toggle', name

			# save it in the object
			drawer_elm.drawer.toggle = drawer_toggle

			# insert it in the page
			drawer_elm.parentElement.insertBefore drawer_toggle, drawer_elm.parentElement.firstChild

		# listen for change on drawer toggle
		drawer_toggle.addEventListener 'change', (e) =>
			name = e.target.name
			# check if opened or not
			if e.target.checked
				@addClass document.body, 'drawer-' + name
			else if not drawer_elm.drawer.transition?
				@removeClass document.body, 'drawer-' + name

		# listen for transition end
		if drawer_elm.drawer.transition?
			drawer_elm.addEventListener 'transitionend', (e) =>
				if e.target.drawer? and e.target.drawer.toggle.checked == false
					# remove the class
					name = e.target.drawer.name
					@removeClass document.body, 'drawer-'+name

		# listen for click on links in the drawer to close it
		drawer_elm.addEventListener 'click', (e) =>
			if @_settings.close_on_click
				if e.target.nodeName.toLowerCase() == 'a'
					#close the drawer
					drawer_elm.drawer.toggle.checked = false

	###
	Check hash
	###
	_checkHash : ->
		if document.location.hash
			hash = document.location.hash.substring(1)
			toggle = document.querySelector '[data-drawer-toggle="'+hash+'"]'
			if toggle
				toggle.checked = true

	###
	Class helpers
	###
	hasClass : (ele, cls) ->
		ele.className.match new RegExp('(\\s|^)' + cls + '(\\s|$)')
	addClass : (ele, cls) ->
		if !@hasClass(ele, cls)
			ele.className += ' ' + cls
	removeClass : (ele, cls) ->
		if @hasClass(ele, cls)
			reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
			ele.className = ele.className.replace(reg, ' ')

	###
	Extend settings
	###
	_extend : (obj, mixin) ->
		obj[name] = method for name, method of mixin
		obj


# init the filter
setTimeout ->
	window.sugar.drawer.init() if not window.sugar.drawer._inited
, 500