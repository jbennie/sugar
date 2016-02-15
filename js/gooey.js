'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["gooey"] = factory();else root["gooey"] = factory();
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

			module.exports = __webpack_require__(4);

			/***/
		},,,,
		/* 1 */
		/* 2 */
		/* 3 */
		/* 4 */
		/***/function (module, exports) {

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
			if (window.sugar == null) {
				window.sugar = {};
			}

			module.exports = window.sugar.gooey = {
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
				_injectFilter: function _injectFilter() {
					var body, gooey, gooey_elm, style;
					style = ['position:absolute;', 'left:-1000px;', 'top:-300px;'];
					if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
						style.push('display:none;');
					}
					gooey = "<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" style=\"" + style.join(' ') + "\">\n	<defs>\n		<filter id=\"gooey\">\n			<feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"0\" result=\"blur\" />\n			<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\" result=\"gooey\" />\n			<feComposite in=\"SourceGraphic\" in2=\"gooey\" operator=\"atop\"/>\n		</filter>\n	</defs>\n</svg>";
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
				_listenAnimation: function _listenAnimation() {
					return document.addEventListener('DOMNodeInserted', function (_this) {
						return function (e) {
							var elm;
							elm = e.target;
							if (elm.dataset && elm.dataset.gooey !== void 0 && !elm._gooeyFilter) {
								return _this._handleFilter(elm);
							}
						};
					}(this));
				},

				/*
    	Handle filter
     */
				_handleFilter: function _handleFilter(elm, recursive) {
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
				_applyFilter: function _applyFilter(elm, filter) {
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
				_uniqId: function _uniqId() {
					var k, m, n;
					return new Date().getTime() + Math.round(Math.random() * 999999999);
					n = Math.floor(Math.random() * 11);
					k = Math.floor(Math.random() * 1000000);
					m = String.fromCharCode(n) + k;
					return m.trim();
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

			setTimeout(function () {
				if (!window.sugar.gooey._inited) {
					return window.sugar.gooey.init();
				}
			}, 500);

			/***/
		}
		/******/])
	);
});
;