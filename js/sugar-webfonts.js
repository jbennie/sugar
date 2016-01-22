
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
