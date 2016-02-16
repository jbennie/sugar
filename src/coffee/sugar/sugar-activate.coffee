###
# Sugar-activate.js
#
# This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
#
# @author   Olivier Bossel <olivier.bossel@gmail.com>
# @created  20.01.16
# @updated  20.01.16
# @version  1.0.0
###
window.sugar ?= {}

module.exports = window.sugar.activate =

	# inited
	_inited : false

	# tabs stack
	_tabs : {}

	# settings
	_settings :
		
		# the activate class setted on the content and trigger
		active_class : 'active'

		# set if need to handle history
		history : true

		# set if need to handle anchor
		anchor : true


	###
	Init
	###
	init : (settings) ->

		# update inited status
		return if @_inited
		@_inited = true

		# wait until the dom is loaded
		if document.readyState == 'interactive' then @_init()
		else document.addEventListener 'DOMContentLoaded', (e) => @_init()

	###
	Actual init when the dom is ready
	###
	_init : () ->

		# update
		@update()

		# listen for mutations
		@_listenMutations()

		# init history if needed
		@_handleHistory() if @_settings.history


	###
	History
	###
	_handleHistory : ->
		window.addEventListener 'hashchange', (e) =>
			if not @_internalHashChange
				elm = document.querySelector '[data-s-activate="'+document.location.hash.substr(1)+'"]'
				# activate the new element
				@_activate elm if elm


	###
	Listen for nodes
	###
	_listenMutations : () ->

		# if window.MutationObserver?
		# 	observer = new MutationObserver (mutations) ->
		# 		# check if is an activate that has been added
		# 		for mutation in mutations
		# 			if mutation.addedNodes?[0]? and mutation.addedNodes[0].dataset? and mutation.addedNodes[0].dataset.sActivate
		# 				@_initElement mutation.addedNodes[0]

		# 	observer.observe document.body,
		# 		childList: true

		# listen for node inserted
		document.addEventListener 'DOMNodeInserted', (e) =>
			elm = e.target
			if elm.dataset and elm.dataset.sActivate != undefined and not elm.sActivateInited
				@_initElement elm

	###
	Init element
	###
	_initElement : (elm) ->

		# return if already inited
		return if elm.sActivateInited
		elm.sActivateInited = true

		# if not inited already
		if not elm.dataset?.sActivateGroup?

			# check if part of a group or is sibling with others activate elements
			for sibling in elm.parentNode.childNodes
				if sibling.dataset?.sActivate?
					grp = sibling.dataset.sActivateGroup
					if grp and sibling.sActivateGeneratedGroup
						elm.setAttribute 'data-s-activate-group', grp
						break

			# if no group after checking siblings, assign one by hand
			if not elm.dataset?.sActivateGroup?
				elm.setAttribute 'data-s-activate-group', 'group-' + Math.round(Math.random() * 999999999)
				elm.sActivateGeneratedGroup = true

		# save a reference to the targets
		elm.sActivateTargets = document.body.querySelectorAll '#' + elm.dataset.sActivate

		# check if we are in another s-activate
		closest = @getClosestActivate elm.parentNode
		if closest
			# save the closest content reference
			elm.sActivateParent = document.body.querySelector '[data-s-activate="'+closest.id+'"]'

		# add the tab in stack
		@_tabs[elm.dataset.sActivate] = elm

		# listen for click
		elm.addEventListener 'click', (e) =>
			if elm.dataset.sActivateHistory is true or (@_settings.history and not elm.dataset.sActivateHistory)
				if document.location.hash and document.location.hash.substr(1) is elm.dataset.sActivate
					@_activate e.target
				else
					document.location.hash = elm.dataset.sActivate
			else
				# activate element
				@_activate e.target

		# if the element has the active class,
		# active it
		if @_hasClass elm, @_settings.active_class
			# activate the element
			@_activate elm

		# check hash
		if @_settings.anchor
			hash = document.location.hash
			if hash
				hash = hash.substr 1
				# check if inited element is same as the hash
				if hash is elm.dataset.sActivate
					@_activate elm

	###
	Activate element
	###
	_activate : (elm) ->
		# unactive all group elements
		grp = elm.dataset.sActivateGroup
		for group_elm in document.body.querySelectorAll('[data-s-activate-group="'+grp+'"]')
			@_removeClass group_elm, @_settings.active_class
			
			# unactive all the targets
			if group_elm.sActivateTargets?
				for target_elm in group_elm.sActivateTargets
					@_removeClass target_elm, @_settings.active_class
		
		# active the element
		@_addClass elm, @_settings.active_class
		target_elms = document.body.querySelectorAll '#'+ elm.dataset.sActivate
		for target_elm in target_elms 
			@_addClass target_elm, @_settings.active_class
		
		# if has a parent actiave, activate it
		@_activate elm.sActivateParent if elm.sActivateParent

	###
	Activate
	###
	activate : (id) ->

		# handle history if needed
		if @_settings.history
			document.location.hash = elm.dataset.sActivate
		else
			elm = document.body.querySelector '[data-s-activate="'+id+'"]'
			if elm.dataset?.sActivateGroup?
				@_activate elm

	###
	Refresh
	###
	update : (scope) ->
		scope = document.body if not scope
		# init elements in the page
		for elm in scope.querySelectorAll '[data-s-activate]'
			@_initElement elm

	###
	Class helpers
	###
	_hasClass : (ele, cls) ->
		ele.className.match new RegExp('(\\s|^)' + cls + '(\\s|$)')
	_addClass : (ele, cls) ->
		if !@_hasClass(ele, cls)
			ele.className += ' ' + cls
	_removeClass : (ele, cls) ->
		if @_hasClass(ele, cls)
			reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
			ele.className = ele.className.replace(reg, ' ')

	###
	Dom helpers
	###
	getClosestActivate : (elm) ->
		# Get closest match
		while elm and elm != document
			# if has an id,
			# check if is in tab stack
			if elm.id and @_tabs[elm.id]?
				return elm
			elm = elm.parentNode
		false

window.sugar.activate.init();