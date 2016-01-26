
/*
 * Sugar-transitionstart.js
 *
 * This little js file allow you to make your element that have a transition trigger the transitionstart event
 *
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  22.01.16
 * @updated  22.01.16
 * @version  1.0.0
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
  window.SugarTransitionStart = {
    _inited: false,
    enabled: true,
    _settings: {},

    /*
    		Init
     */
    init: function(settings) {
      if (settings == null) {
        settings = {};
      }
      this._settings = this._extend(this._settings, settings);
      this._inited = true;
      if (document.readyState === 'interactive') {
        return this._init();
      } else {
        return document.addEventListener('DOMContentLoaded', (function(_this) {
          return function(e) {
            return _this._init();
          };
        })(this));
      }
    },

    /*
    		Internal init
     */
    _init: function() {
      if (!this.enabled) {
        return;
      }
      document.addEventListener("transitionend", this._onTransitionEnd, false);
      document.addEventListener("oTransitionEnd", this._onTransitionEnd, false);
      return document.addEventListener("webkitTransitionEnd", this._onTransitionEnd, false);
    },

    /*
    		On animation start
     */
    _onTransitionEnd: function(e) {
      if (e.elapsedTime === 0.000001) {
        return e.target.dispatchEvent(new CustomEvent('transitionstart', {
          bubbles: true,
          cancelable: true
        }));
      }
    },

    /*
    		Extend settings
     */
    _extend: function(obj, mixin) {
      var method, name;
      for (name in mixin) {
        method = mixin[name];
        obj[name] = method;
      }
      return obj;
    }
  };
  SugarTransitionStart.init();
  return SugarTransitionStart;
});

//# sourceMappingURL=sugar-transitionstart.js.map
