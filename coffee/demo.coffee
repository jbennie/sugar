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
		pauseOnHover : true,
		onChange : (api) ->
			# api.$refs.content.get(0).dispatchEvent(new CustomEvent('transitionstart', {
			# 	bubbles : true
			# }));

	$('[data-interact]').each (idx, item) ->
		interact(item).draggable
			autoScroll: true
			onmove: (e) ->
				target = e.target
				x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx
				y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy

				target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

				target.setAttribute('data-x', x);
				target.setAttribute('data-y', y);

				target.dispatchEvent(new CustomEvent('move', {
					bubbles : true
				}));
			onend: (e) ->
				e.target.dispatchEvent(new CustomEvent('move', {
					bubbles : true
				}));
				e.target.setAttribute('data-x', 0);
				e.target.setAttribute('data-y', 0);
				e.target.style.webkitTransform = e.target.style.transform = 'translate(0,0)';
