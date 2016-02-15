'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["domnodeinserted"] = factory();else root["domnodeinserted"] = factory();
})(undefined, function () {
	return (/******/function (modules) {
			// webpackBootstrap
			/******/ // The module cache
			/******/var installedModules = {};

			/******/ // The require function
			/******/function __webpack_require__(moduleId) {

				/******/ // Check if module is in cache
				/******/if (installedModules[moduleId])
					/******/return installedModules[moduleId].exports;

				/******/ // Create a new module (and put it into the cache)
				/******/var module = installedModules[moduleId] = {
					/******/exports: {},
					/******/id: moduleId,
					/******/loaded: false
					/******/ };

				/******/ // Execute the module function
				/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

				/******/ // Flag the module as loaded
				/******/module.loaded = true;

				/******/ // Return the exports of the module
				/******/return module.exports;
				/******/
			}

			/******/ // expose the modules object (__webpack_modules__)
			/******/__webpack_require__.m = modules;

			/******/ // expose the module cache
			/******/__webpack_require__.c = installedModules;

			/******/ // __webpack_public_path__
			/******/__webpack_require__.p = "";

			/******/ // Load entry module and return exports
			/******/return __webpack_require__(0);
			/******/
		}(
		/************************************************************************/
		/******/[
		/* 0 */
		/***/function (module, exports, __webpack_require__) {

			module.exports = __webpack_require__(2);

			/***/
		},,
		/* 1 */
		/* 2 */
		/***/function (module, exports) {

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
			if (window.sugar == null) {
				window.sugar = {};
			}

			module.exports = window.sugar.domnodeinserted = {
				_inited: false,
				enabled: true,
				_settings: {},

				/*
    	Init
     */
				init: function init(settings) {
					if (settings == null) {
						settings = {};
					}
					this._settings = this._extend(this._settings, settings);
					this._inited = true;
					if (document.readyState === 'interactive') {
						return this._init();
					} else {
						return document.addEventListener('DOMContentLoaded', function (_this) {
							return function (e) {
								return _this._init();
							};
						}(this));
					}
				},

				/*
    	Internal init
     */
				_init: function _init() {
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
				_onAnimationStart: function _onAnimationStart(e) {
					if (e.animationName === 's-DOMNodeInserted') {
						return e.target.dispatchEvent(new CustomEvent('DOMNodeInserted', {
							bubbles: true,
							cancelable: true
						}));
					}
				},

				/*
    	Extend settings
     */
				_extend: function _extend(obj, mixin) {
					var method, name;
					for (name in mixin) {
						method = mixin[name];
						obj[name] = method;
					}
					return obj;
				}
			};

			window.sugar.domnodeinserted.init();

			/***/
		}
		/******/])
	);
});
;