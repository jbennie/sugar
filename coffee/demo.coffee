# states switch :
jQuery ($) ->

	# toggle rhythme and baseline
	$('[data-toggle-rhythme]').on 'click', (e) ->
		$c = $(this).closest '[data-toggle-rhythme-class]'
		if $c.hasClass 'typeset'
			$c.removeClass 'typeset'
			$(this).removeClass 'active'
		else
			$c.addClass 'typeset'
			$(this).addClass 'active'

	$('[data-toggle-baseline]').on 'click', (e) ->
		$c = $(this).closest '[data-toggle-baseline-class]'
		if $c.hasClass 'show-rhythme'
			$c.removeClass 'show-rhythme'
			$(this).removeClass 'active'
		else
			$c.addClass 'show-rhythme'
			$(this).addClass 'active'

	# optimise display
	$('section:not([data-bypass-appear])').attr('data-appear-offset-top', 200).css('visibility', 'hidden').on 'appear', (e) =>
		$(e.target).css('visibility', 'visible')
	.on 'disappear', (e) =>
		$(e.target).css('visibility', 'hidden')
	.appear()
	$(window).trigger 'scroll'

	# slidizle
	$('[data-slidizle]').slidizle
		nextOnClick : true
		loop : true,
		timeout : 1000,
		pauseOnHover : true,
		onChange : (api) ->
			api.$refs.content.get(0).dispatchEvent(new CustomEvent('transitionstart', {
				bubbles : true
			}));
