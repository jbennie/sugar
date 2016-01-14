
/*
 * Sugar-webfonts.js
 *
 * This little js file allow you to use webfonts based64 encoded and loaded from localstorage
 *
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  23.11.15
 * @updated  23.11.15
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
  window.SugarFilters = {
    _key: 'sugar-filters',
    _cache: null,
    _inited: false,
    _settings: {
      version: '581fea09a1e08e3770d777ca504608ee',
      json_path: '/fonts/fonts.json',
      debug: false
    },

    /*
    		Init
     */
    init: function(settings) {
      this._settings = this._extend(this._settings, settings);
      this._inited = true;
      this._injectFilters();
      return this._listenAnimation();
    },

    /*
    		Inject filters
     */
    _injectFilters: function() {
      var blur, blur_elm, body;
      blur = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" style=\"display:none;\">\n	<defs>\n		<filter id=\"blur\">\n			<feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"0,0\" />\n		</filter>\n	</defs>\n</svg>";
      blur_elm = document.createElement('div');
      blur_elm.innerHTML = blur;
      this.blur_defs = blur_elm.querySelector('defs');
      this.blur_svg = blur_elm.firstChild;
      this.blur = blur_elm.querySelector('#blur');
      body = document.querySelector('body');
      return body.appendChild(this.blur_svg);
    },

    /*
    		Listen for animations
     */
    _listenAnimation: function() {
      document.addEventListener('animationstart', (function(_this) {
        return function(e) {
          var elm;
          elm = e.target;
          if (elm.dataset.motionBlur !== void 0) {
            return _this._handleMotionBlur(elm);
          }
        };
      })(this));
      return document.addEventListener('transitionstart', (function(_this) {
        return function(e) {
          var elm;
          elm = e.target;
          if (elm.dataset.motionBlur !== void 0) {
            return _this._handleMotionBlur(elm);
          }
        };
      })(this), false);
    },

    /*
    		Handle motion blur
     */
    _handleMotionBlur: function(elm, recursive) {
      var amount, id, xDiff, yDiff;
      if (recursive == null) {
        recursive = false;
      }
      if (!recursive) {
        elm._step = 0;
      }
      if (!elm._blurFilter) {
        elm._blurFilter = this.blur.cloneNode(true);
        id = 'blurFilter-' + this._uniqId();
        elm._blurFilter.setAttribute('id', id);
        this.blur_defs.appendChild(elm._blurFilter);
        this._applyFilter(elm, 'url("#' + id + '")');
        elm._lastPos = this._offset(elm);
      }
      amount = elm.dataset.motionBlur || 0.5;
      elm._currentPos = this._offset(elm);
      xDiff = Math.abs(elm._currentPos.left - elm._lastPos.left) * amount;
      yDiff = Math.abs(elm._currentPos.top - elm._lastPos.top) * amount;
      elm._blurFilter.firstElementChild.setAttribute('stdDeviation', xDiff + ',' + yDiff);
      elm._lastPos = this._offset(elm);
      console.log(elm._lastPos);
      if (xDiff <= 0 && yDiff <= 0) {
        if (elm._step == null) {
          elm._step = 0;
        }
        elm._step += 1;
        if (elm._step >= 5) {
          elm._step = 0;
          return;
        }
      }
      return elm._blurAnimationFrame = requestAnimationFrame((function(_this) {
        return function() {
          return _this._handleMotionBlur(elm, true);
        };
      })(this));
    },

    /*
    		Get element position
     */
    _offset: function(elm) {
      var body, box, clientLeft, clientTop, docEl, left, scrollLeft, scrollTop, top;
      box = elm.getBoundingClientRect();
      console.log(box.left);
      body = document.body;
      docEl = document.documentElement;
      scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
      clientTop = docEl.clientTop || body.clientTop || 0;
      clientLeft = docEl.clientLeft || body.clientLeft || 0;
      top = box.top + scrollTop - clientTop;
      left = box.left + scrollLeft - clientLeft;
      return {
        top: Math.round(top),
        left: Math.round(left)
      };
    },

    /*
    		Apply filter
     */
    _applyFilter: function(elm, filter) {
      var i, len, ref, results, vendor;
      ref = ["-webkit", "-moz", "-ms", "o", ""];
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        vendor = ref[i];
        results.push(elm.style[vendor + '-filter'] = filter);
      }
      return results;
    },

    /*
    		UniqId
     */
    _uniqId: function() {
      return Math.round(Math.random() * 9999999);
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
    },

    /*
    		Debug
     */
    _debug: function() {
      if (this._settings.debug) {
        return console.log('SUGAR-FILTERS', arguments);
      }
    }
  };
  SugarFilters.init();
  if (typeof window.define === 'function' && window.define.amd) {
    window.define([], function() {
      return window.SugarFilters;
    });
  }
  return SugarFilters;
});

//# sourceMappingURL=sugar-filters.js.map
