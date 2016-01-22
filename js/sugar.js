
/*
 * Sugar.js
 *
 * This little js file allow you to have a lot a useful features available for free
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 * @created 	03.11.15
 * @updated 	03.11.15
 * @version 	1.0.0
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    factory();
  } else {
    factory();
  }
})(function() {
  window.Sugar = {
    _inited: false,
    _settings: {
      debug: false
    },

    /*
    		Init
     */
    init: function(settings) {
      return this._inited = true;
    },

    /*
    		Debug
     */
    _debug: function() {
      if (this._settings.debug) {
        return console.log('SUGAR', arguments);
      }
    }
  };
  setTimeout(function() {
    if (!Sugar._inited) {
      return Sugar.init();
    }
  }, 500);
  return Sugar;
});

//# sourceMappingURL=sugar.js.map
