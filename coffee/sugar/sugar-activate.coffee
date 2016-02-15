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

	###
	Init
	###
	init : () ->

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

	###
	Listen for nodes
	###
	_listenMutations : () ->

		if window.MutationObserver?
			observer = new MutationObserver (mutations) ->
				# check if is an activate that has been added
				for mutation in mutations
					if mutation.addedNodes?[0]? and mutation.addedNodes[0].dataset? and mutation.addedNodes[0].dataset.sActivate
						@_initElement mutation.addedNodes[0]

			observer.observe document.body,
				childList: true

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

		# listen for click
		elm.addEventListener 'click', (e) =>
			# activate element
			@_activate e.target

		# if the element has the active class,
		# active it
		if @_hasClass elm, 'active'
			# activate the element
			@_activate elm

	###
	Activate element
	###
	_activate : (elm) ->
		# unactive all group elements
		grp = elm.dataset.sActivateGroup
		for group_elm in document.body.querySelectorAll('[data-s-activate-group="'+grp+'"]')
			@_removeClass group_elm, 'active'
			# unactive all the targets
			if group_elm.sActivateTargets?
				for target_elm in group_elm.sActivateTargets
					@_removeClass target_elm, 'active'
		# active the element
		@_addClass elm, 'active'
		target_elms = document.body.querySelectorAll '#'+ elm.dataset.sActivate
		for target_elm in target_elms 
			@_addClass target_elm, 'active'


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

window.sugar.activate.init();