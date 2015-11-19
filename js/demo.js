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
  return $('[data-toggle-baseline]').on('click', function(e) {
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
});

//# sourceMappingURL=demo.js.map
