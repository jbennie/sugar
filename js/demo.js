jQuery(function($) {
  $('[data-toggle-rhythme]').on('click', function(e) {
    var $c;
    $c = $(this).closest('[data-toggle-rhythme-class]');
    if ($c.hasClass('typeset')) {
      $c.removeClass('typeset');
      return $(this).removeClass('active');
    } else {
      $c.addClass('typeset');
      return $(this).addClass('active');
    }
  });
  $('[data-toggle-baseline]').on('click', function(e) {
    var $c;
    $c = $(this).closest('[data-toggle-baseline-class]');
    if ($c.hasClass('show-rhythme')) {
      $c.removeClass('show-rhythme');
      return $(this).removeClass('active');
    } else {
      $c.addClass('show-rhythme');
      return $(this).addClass('active');
    }
  });
  $('section:not([data-bypass-appear])').attr('data-appear-offset-top', 200).css('visibility', 'hidden').on('appear', (function(_this) {
    return function(e) {
      return $(e.target).css('visibility', 'visible');
    };
  })(this)).on('disappear', (function(_this) {
    return function(e) {
      return $(e.target).css('visibility', 'hidden');
    };
  })(this)).appear();
  $(window).trigger('scroll');
  $('[data-slidizle]').slidizle({
    nextOnClick: true,
    loop: true,
    pauseOnHover: true,
    onChange: function(api) {}
  });
  return $('[data-interact]').each(function(idx, item) {
    return interact(item).draggable({
      autoScroll: true,
      onmove: function(e) {
        var target, x, y;
        target = e.target;
        x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx;
        y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy;
        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        return target.dispatchEvent(new CustomEvent('move', {
          bubbles: true
        }));
      },
      onend: function(e) {
        e.target.dispatchEvent(new CustomEvent('move', {
          bubbles: true
        }));
        e.target.setAttribute('data-x', 0);
        e.target.setAttribute('data-y', 0);
        return e.target.style.webkitTransform = e.target.style.transform = 'translate(0,0)';
      }
    });
  });
});

//# sourceMappingURL=demo.js.map
