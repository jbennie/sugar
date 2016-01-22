
/*
 * Sugar-motion-blur.js
 *
 * This little js file allow you to use cool motion blur svg effect
 *
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  20.01.16
 * @updated  20.01.16
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
  window.SugarMotionBlur = {
    _inited: false,
    enabled: true,

    /*
    		Init
     */
    init: function() {
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
      this._injectFilter();
      return this._listenAnimation();
    },

    /*
    		Inject filter
     */
    _injectFilter: function() {
      var blur, blur_elm, body, style;
      style = ['position:absolute;', 'left:-1000px;'];
      if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
        style.push('display:none;');
      }
      blur = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" style=\"" + (style.join(' ')) + "\">\n	<defs>\n		<filter id=\"blur\">\n			<feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"0,0\" />\n		</filter>\n	</defs>\n</svg>";
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
      document.addEventListener('animationiteration', (function(_this) {
        return function(e) {
          var elm;
          elm = e.target;
          if (elm.dataset.motionBlur !== void 0) {
            cancelAnimationFrame(elm._blurAnimationFrame);
            return _this._handleFilter(elm);
          }
        };
      })(this));
      document.addEventListener('transitionstart', (function(_this) {
        return function(e) {
          var elm;
          elm = e.target;
          if (elm.dataset.motionBlur !== void 0) {
            cancelAnimationFrame(elm._blurAnimationFrame);
            return _this._handleFilter(elm);
          }
        };
      })(this));
      return document.addEventListener('move', (function(_this) {
        return function(e) {
          var elm;
          elm = e.target;
          if (elm.dataset.motionBlur !== void 0) {
            return _this._setMotionBlur(elm);
          }
        };
      })(this));
    },

    /*
    		Handle filter
     */
    _handleFilter: function(elm, recursive) {
      var diff;
      if (recursive == null) {
        recursive = false;
      }
      if (!recursive) {
        elm._step = 0;
      }
      diff = this._setMotionBlur(elm);
      if (diff.xDiff <= 0 && diff.yDiff <= 0) {
        if (elm._step == null) {
          elm._step = 0;
        }
        elm._step += 1;
        if (elm._step >= 10) {
          elm._step = 0;
          return;
        }
      }
      return elm._blurAnimationFrame = requestAnimationFrame((function(_this) {
        return function() {
          return _this._handleFilter(elm, true);
        };
      })(this));
    },

    /*
    		 * Set motion blur
     */
    _setMotionBlur: function(elm) {
      var amount, id, xDiff, yDiff;
      if (!elm._blurFilter) {
        elm._blurFilter = this.blur.cloneNode(true);
        id = 'blurFilter' + this._uniqId();
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
      return {
        xDiff: xDiff,
        yDiff: yDiff
      };
    },

    /*
    		Get translate values
     */
    _getTranslate: function(elm, what) {
      var idx, mat, style, transform;
      if (!window.getComputedStyle) {
        return;
      }
      style = getComputedStyle(elm);
      transform = style.transform || style.webkitTransform || style.mozTransform;
      mat = transform.match(/^matrix3d\((.+)\)$/);
      if (mat) {
        idx = {
          x: 12,
          y: 13,
          z: 14
        };
        return parseFloat(mat[1].split(', ')[idx[what]]);
      }
      mat = transform.match(/^matrix\((.+)\)$/);
      idx = {
        x: 4,
        y: 5,
        z: 6
      };
      if (mat) {
        return parseFloat(mat[1].split(', ')[idx[what]]);
      } else {
        return 0;
      }
    },

    /*
    		Get element position
     */
    _offset: function(elm) {
      var body, box, clientLeft, clientTop, docEl, left, scrollLeft, scrollTop, top, transX, transY;
      box = elm.getBoundingClientRect();
      body = document.body;
      docEl = document.documentElement;
      scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
      clientTop = docEl.clientTop || body.clientTop || 0;
      clientLeft = docEl.clientLeft || body.clientLeft || 0;
      transX = this._getTranslate(elm, 'x');
      transY = this._getTranslate(elm, 'y');
      top = box.top + scrollTop - clientTop + transY;
      left = box.left + scrollLeft - clientLeft + transX;
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
      ref = ["-webkit-", "-moz-", "-ms-", "o-", ""];
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        vendor = ref[i];
        results.push(elm.style[vendor + 'filter'] = filter);
      }
      return results;
    },

    /*
    		UniqId
     */
    _uniqId: function() {
      var k, m, n;
      return new Date().getTime() + Math.round(Math.random() * 999999999);
      n = Math.floor(Math.random() * 11);
      k = Math.floor(Math.random() * 1000000);
      m = String.fromCharCode(n) + k;
      return m.trim();
    }
  };
  SugarMotionBlur.init();
  return SugarMotionBlur;
});

//# sourceMappingURL=sugar-motion-blur.js.map
