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