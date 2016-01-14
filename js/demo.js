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
  return $('[data-slidizle]').slidizle({
    nextOnClick: true,
    loop: true,
    timeout: 1000,
    pauseOnHover: true,
    onChange: function(api) {
      return api.$refs.content.get(0).dispatchEvent(new CustomEvent('transitionstart', {
        bubbles: true
      }));
    }
  });
});

//# sourceMappingURL=demo.js.map
