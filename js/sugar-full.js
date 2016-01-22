
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
  window.SugarWebfonts = {
    _key: 'sugar-webfonts',
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
      var cb_split, e;
      this._settings = this._extend(this._settings, settings);
      this._inited = true;
      cb_split = this._settings.json_path.split('#');
      if (cb_split.length === 2) {
        this._settings.version = cb_split[1];
      }
      if (cb_split.length === 2) {
        this._settings.json_path = cb_split[0];
      }
      try {
        this._cache = window.localStorage.getItem(this._key);
        if (this._cache) {
          this._cache = JSON.parse(this._cache);
          if (this._cache.version === this._settings.version) {
            this._debug('No new version of your fonts.');
            this._insertFont(this._cache.value);
          } else {
            this._debug('new version of your fonts.');
            window.localStorage.removeItem(this._key);
            this._cache = null;
          }
        }
      } catch (_error) {
        e = _error;
        this._debug('your browser seems to not support the localStorage api');
      }
      if (!this._cache) {
        return window.addEventListener('load', (function(_this) {
          return function() {
            var request, response;
            request = new XMLHttpRequest;
            response = void 0;
            request.open('GET', _this._settings.json_path, true);
            _this = _this;
            request.onload = function() {
              var font, fontface, index, prop, ref, value;
              if (this.status === 200) {
                try {
                  response = JSON.parse(this.responseText);
                  fontface = '';
                  ref = response.fonts;
                  for (index in ref) {
                    font = ref[index];
                    fontface += '@font-face{';
                    for (prop in font) {
                      value = font[prop];
                      if (prop === 'font-family') {
                        value = '"' + value + '"';
                      }
                      fontface += prop + ':' + value + ';';
                    }
                    fontface += '}';
                  }
                  _this._insertFont(fontface);
                  return window.localStorage.setItem(_this._key, JSON.stringify({
                    version: _this._settings.version,
                    value: fontface
                  }));
                } catch (_error) {
                  e = _error;
                }
              }
            };
            return request.send();
          };
        })(this));
      }
    },

    /*
    		Extend settingd
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
    		Insert font
     */
    _insertFont: function(value) {
      var style;
      this._debug('inserting fonts');
      style = document.createElement('style');
      style.innerHTML = value;
      return document.head.appendChild(style);
    },

    /*
    		Debug
     */
    _debug: function() {
      if (this._settings.debug) {
        return console.log('SUGAR-WEBFONTS', arguments);
      }
    }
  };
  return SugarWebfonts;
});

//# sourceMappingURL=sugar-webfonts.js.map


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
      document.addEventListener("transitionend", this._onTransitionEnd, false);
      document.addEventListener("oTransitionEnd", this._onTransitionEnd, false);
      return document.addEventListener("webkitTransitionEnd", this._onTransitionEnd, false);
    },

    /*
    		On animation start
     */
    _onTransitionEnd: function(e) {
      if (e.elapsedTime === 0.000001) {
        console.log('transitionstart');
        return e.target.dispatchEvent(new CustomEvent('transitionstart', {
          bubbles: true,
          cancelable: true
        }));
      }
    }
  };
  SugarTransitionStart.init();
  return SugarTransitionStart;
});

//# sourceMappingURL=sugar-transitionstart.js.map


/*
 * Sugar-domnodeinserted.js
 *
 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
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
  window.SugarDOMNodeInserted = {
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
      document.addEventListener("animationstart", this._onAnimationStart, false);
      document.addEventListener("MSAnimationStart", this._onAnimationStart, false);
      return document.addEventListener("webkitAnimationStart", this._onAnimationStart, false);
    },

    /*
    		On animation start
     */
    _onAnimationStart: function(e) {
      if (e.animationName === 's-DOMNodeInserted') {
        return e.target.dispatchEvent(new CustomEvent('DOMNodeInserted', {
          bubbles: true,
          cancelable: true
        }));
      }
    }
  };
  SugarDOMNodeInserted.init();
  return SugarDOMNodeInserted;
});

//# sourceMappingURL=sugar-domnodeinserted.js.map


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


/*
 * Sugar-gooey.js
 *
 * This little js file allow you to use the gooey effect
 *
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  22.01.16
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
  window.SugarGooey = {
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
      var i, item, len, ref, results;
      if (!this.enabled) {
        return;
      }
      this._injectFilter();
      this._listenAnimation();
      ref = document.querySelectorAll('[data-gooey]');
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        item = ref[i];
        results.push(item.dispatchEvent(new CustomEvent('DOMNodeInserted', {
          bubbles: true,
          cancelable: true
        })));
      }
      return results;
    },

    /*
    		Inject filter
     */
    _injectFilter: function() {
      var body, gooey, gooey_elm, style;
      style = ['position:absolute;', 'left:-1000px;'];
      if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
        style.push('display:none;');
      }
      gooey = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" style=\"" + (style.join(' ')) + "\">\n	<defs>\n		<filter id=\"gooey\">\n			<feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"0\" result=\"blur\" />\n			<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\" result=\"gooey\" />\n			<feComposite in=\"SourceGraphic\" in2=\"gooey\" operator=\"atop\"/>\n		</filter>\n	</defs>\n</svg>";
      gooey_elm = document.createElement('div');
      gooey_elm.innerHTML = gooey;
      this.gooey_defs = gooey_elm.querySelector('defs');
      this.gooey_svg = gooey_elm.firstChild;
      this.gooey = gooey_elm.querySelector('#gooey');
      body = document.querySelector('body');
      return body.appendChild(this.gooey_svg);
    },

    /*
    		Listen for animations
     */
    _listenAnimation: function() {
      return document.addEventListener('DOMNodeInserted', (function(_this) {
        return function(e) {
          var elm;
          elm = e.target;
          if (elm.dataset && elm.dataset.gooey !== void 0 && !elm._gooeyFilter) {
            return _this._handleFilter(elm);
          }
        };
      })(this));
    },

    /*
    		Handle filter
     */
    _handleFilter: function(elm, recursive) {
      var amount, id;
      if (recursive == null) {
        recursive = false;
      }
      elm._gooeyFilter = this.gooey.cloneNode(true);
      id = 'gooeyFilter-' + this._uniqId();
      elm._gooeyFilter.setAttribute('id', id);
      this.gooey_defs.appendChild(elm._gooeyFilter);
      this._applyFilter(elm, 'url("#' + id + '")');
      amount = parseInt(elm.dataset.gooey || 10);
      elm._gooeyFilter.firstElementChild.setAttribute('stdDeviation', amount);
      return elm._gooeyFilter.children[1].setAttribute('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ' + (9 + amount) + ' -9');
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
  SugarGooey.init();
  return SugarGooey;
});

//# sourceMappingURL=sugar-gooey.js.map
