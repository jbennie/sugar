(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["localStorageFonts"] = factory();
	else
		root["localStorageFonts"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(158);


/***/ },

/***/ 158:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * Sugar-activate.js
	#
	 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
	#
	 * @author   Olivier Bossel <olivier.bossel@gmail.com>
	 * @created  20.01.16
	 * @updated  20.01.16
	 * @version  1.0.0
	 */

	// Localstorage fonts

	var SugarLocalStorageFonts = function () {

		/**
	  * Constructor
	  */

		function SugarLocalStorageFonts() {
			_classCallCheck(this, SugarLocalStorageFonts);

			this.settings = {
				version: 1.0,
				json_path: '/fonts/fonts.json',
				debug: false
			};
		}

		/**
	  * Init
	  */


		SugarLocalStorageFonts.prototype.init = function init() {
			var _this = this;

			var settings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

			this.settings = _extends({}, this.settings, settings);

			// check cachebuster
			var cb = this.settings.json_path.split('#');
			if (cb.length == 2) {
				this.settings.version = cb[1];
				this.settings.json_path = cb[0];
			}

			try {
				this._cache = window.localStorage.getItem('sugar-fonts');
				if (this._cache) {
					this._cache = JSON.parse(this._cache);
					if (this._cache.version == this.settings.version) {
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
					console.log(_this);
					request.open('GET', _this.settings.json_path, true);
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
									version: _this.settings.version,
									value: fontface
								}));
							} catch (e) {}
						}
					};
					request.send();
				});
			}
		};

		/**
	  * Insert font
	  */


		SugarLocalStorageFonts.prototype._insertFonts = function _insertFonts(value) {
			this._debug('inserting fonts');
			var style = document.createElement('style');
			style.innerHTML = value;
			document.head.appendChild(style);
		};

		/**
	  * Debug
	  */


		SugarLocalStorageFonts.prototype._debug = function _debug() {
			if (this.settings.debug) {
				console.log('SUGAR-LOCALSTORAGEFONTS', arguments);
			}
		};

		return SugarLocalStorageFonts;
	}();

	;

	// expose in window.sugar
	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.localStorageFonts = new SugarLocalStorageFonts();

	// export modules
	exports.default = window.sugar.localStorageFonts;

/***/ }

/******/ })
});
;