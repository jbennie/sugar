'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name 		SLocalStorageFonts
 * This class allows to easily store and load custom fonts from the localStorage
 *
 * @example 	js
 * new SLocalStorageFonts({
 *  	json_path : '/fonts/fonts.json#v1'
 * });
 *
 * // the fonts.json file looks like this
 * {
 * 		"fonts" : [{
 *	  		"font-family" : "Open Sans",
 *	    	"font-weight" : 300,
 *      	"src" : "url(data:application/font-woff;base64,d09GRgA..."
 *      }]
 * }
 *
 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
 */
var SLocalStorageFonts = function () {

	/**
  * @constructor
  * @param 		{Object} 	settings 	The settings
  */
	function SLocalStorageFonts() {
		var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, SLocalStorageFonts);

		this._settings = {

			/**
    * Store the version of the fonts to load.
    * Used for cache busting
    * @setting
    * @type 		{String}
    * @default 	1.0
    */
			version: 1.0,

			/**
    * Set the json file to load
    * @setting
    * @type 		{String}
    * @default 	/fonts/fonts.json
    */
			json_path: '/fonts/fonts.json',

			/**
    * Set if want the debug messages in the console
    * @setting
    * @type 		{Boolean}
    * @default 	false
    */
			debug: false

		};

		this._settings = _extends({}, this._settings, settings);
		// init
		this._init();
	}

	/**
  * Init
  */


	/**
  * Settings
  * @type 	{Object}
  */


	_createClass(SLocalStorageFonts, [{
		key: '_init',
		value: function _init() {
			var _this = this;

			// check cachebuster
			var cb = this._settings.json_path.split('#');
			if (cb.length == 2) {
				this._settings.version = cb[1];
				this._settings.json_path = cb[0];
			}

			try {
				this._cache = window.localStorage.getItem('sugar-fonts');
				if (this._cache) {
					this._cache = JSON.parse(this._cache);
					if (this._cache.version == this._settings.version) {
						this._debug('No new version of you fonts');
						this._insertFonts(this._cache.value);
					} else {
						this._debug('New version of your fonts');
						// busting the cache
						window.localStorage.removeItem('sugar-fonts');
						this._cache = null;
					}
				}
			} catch (e) {
				// localstorage not available
				this._debug('Your browser seems to not support the localStorage api');
			}

			// if no cache, load the fonts file
			if (!this._cache) {
				window.addEventListener('load', function (e) {
					var request = new XMLHttpRequest(),
					    response = undefined;
					request.open('GET', _this._settings.json_path, true);
					request.onload = function () {
						if (request.status == 200) {
							try {
								response = JSON.parse(request.responseText);
								var fontface = '';
								response.fonts.forEach(function (font) {
									fontface += '@font-face{';
									for (var prop in font) {
										var value = font[prop];
										if (prop == 'font-family') {
											value = '"' + value + '"';
										}
										fontface += prop + ':' + value + ';';
									}
									fontface += '}';
								});
								// insert fonts
								_this._insertFonts(fontface);
								// save fonts in localstorage
								window.localStorage.setItem('sugar-fonts', JSON.stringify({
									version: _this._settings.version,
									value: fontface
								}));
							} catch (e) {}
						}
					};
					request.send();
				});
			}
		}

		/**
   * Insert font
   */

	}, {
		key: '_insertFonts',
		value: function _insertFonts(value) {
			this._debug('inserting fonts');
			var style = document.createElement('style');
			style.innerHTML = value;
			document.head.appendChild(style);
		}

		/**
   * Debug
   */

	}, {
		key: '_debug',
		value: function _debug() {
			if (this._settings.debug) {
				console.log('SUGAR-LOCALSTORAGEFONTS', arguments);
			}
		}
	}]);

	return SLocalStorageFonts;
}();

;

// export modules
exports.default = SLocalStorageFonts;