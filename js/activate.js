'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["activate"] = factory();else root["activate"] = factory();
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

			module.exports = __webpack_require__(1);

			/***/
		},
		/* 1 */
		/***/function (module, exports) {

			/*
    * Sugar-activate.js
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

			module.exports = window.sugar.activate = {
				_inited: false,
				_tabs: {},
				_settings: {
					active_class: 'active',
					history: true,
					anchor: true
				},

				/*
    	Init
     */
				init: function init(settings) {
					if (this._inited) {
						return;
					}
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
    	Actual init when the dom is ready
     */
				_init: function _init() {
					this.update();
					this._listenMutations();
					if (this._settings.history) {
						return this._handleHistory();
					}
				},

				/*
    	History
     */
				_handleHistory: function _handleHistory() {
					return window.addEventListener('hashchange', function (_this) {
						return function (e) {
							var elm;
							if (!_this._internalHashChange) {
								elm = document.querySelector('[data-s-activate="' + document.location.hash.substr(1) + '"]');
								if (elm) {
									return _this._activate(elm);
								}
							}
						};
					}(this));
				},

				/*
    	Listen for nodes
     */
				_listenMutations: function _listenMutations() {
					return document.addEventListener('DOMNodeInserted', function (_this) {
						return function (e) {
							var elm;
							elm = e.target;
							if (elm.dataset && elm.dataset.sActivate !== void 0 && !elm.sActivateInited) {
								return _this._initElement(elm);
							}
						};
					}(this));
				},

				/*
    	Init element
     */
				_initElement: function _initElement(elm) {
					var closest, grp, hash, i, len, ref, ref1, ref2, ref3, sibling;
					if (elm.sActivateInited) {
						return;
					}
					elm.sActivateInited = true;
					if (((ref = elm.dataset) != null ? ref.sActivateGroup : void 0) == null) {
						ref1 = elm.parentNode.childNodes;
						for (i = 0, len = ref1.length; i < len; i++) {
							sibling = ref1[i];
							if (((ref2 = sibling.dataset) != null ? ref2.sActivate : void 0) != null) {
								grp = sibling.dataset.sActivateGroup;
								if (grp && sibling.sActivateGeneratedGroup) {
									elm.setAttribute('data-s-activate-group', grp);
									break;
								}
							}
						}
						if (((ref3 = elm.dataset) != null ? ref3.sActivateGroup : void 0) == null) {
							elm.setAttribute('data-s-activate-group', 'group-' + Math.round(Math.random() * 999999999));
							elm.sActivateGeneratedGroup = true;
						}
					}
					elm.sActivateTargets = document.body.querySelectorAll('#' + elm.dataset.sActivate);
					closest = this.getClosestActivate(elm.parentNode);
					if (closest) {
						elm.sActivateParent = document.body.querySelector('[data-s-activate="' + closest.id + '"]');
					}
					this._tabs[elm.dataset.sActivate] = elm;
					elm.addEventListener('click', function (_this) {
						return function (e) {
							if (elm.dataset.sActivateHistory === true || _this._settings.history && !elm.dataset.sActivateHistory) {
								if (document.location.hash && document.location.hash.substr(1) === elm.dataset.sActivate) {
									return _this._activate(e.target);
								} else {
									return document.location.hash = elm.dataset.sActivate;
								}
							} else {
								return _this._activate(e.target);
							}
						};
					}(this));
					if (this._hasClass(elm, this._settings.active_class)) {
						this._activate(elm);
					}
					if (this._settings.anchor) {
						hash = document.location.hash;
						if (hash) {
							hash = hash.substr(1);
							if (hash === elm.dataset.sActivate) {
								return this._activate(elm);
							}
						}
					}
				},

				/*
    	Activate element
     */
				_activate: function _activate(elm) {
					var group_elm, grp, i, j, k, len, len1, len2, ref, ref1, target_elm, target_elms;
					grp = elm.dataset.sActivateGroup;
					ref = document.body.querySelectorAll('[data-s-activate-group="' + grp + '"]');
					for (i = 0, len = ref.length; i < len; i++) {
						group_elm = ref[i];
						this._removeClass(group_elm, this._settings.active_class);
						if (group_elm.sActivateTargets != null) {
							ref1 = group_elm.sActivateTargets;
							for (j = 0, len1 = ref1.length; j < len1; j++) {
								target_elm = ref1[j];
								this._removeClass(target_elm, this._settings.active_class);
							}
						}
					}
					this._addClass(elm, this._settings.active_class);
					target_elms = document.body.querySelectorAll('#' + elm.dataset.sActivate);
					for (k = 0, len2 = target_elms.length; k < len2; k++) {
						target_elm = target_elms[k];
						this._addClass(target_elm, this._settings.active_class);
					}
					if (elm.sActivateParent) {
						return this._activate(elm.sActivateParent);
					}
				},

				/*
    	Activate
     */
				activate: function activate(id) {
					var elm, ref;
					if (this._settings.history) {
						return document.location.hash = elm.dataset.sActivate;
					} else {
						elm = document.body.querySelector('[data-s-activate="' + id + '"]');
						if (((ref = elm.dataset) != null ? ref.sActivateGroup : void 0) != null) {
							return this._activate(elm);
						}
					}
				},

				/*
    	Refresh
     */
				update: function update(scope) {
					var elm, i, len, ref, results;
					if (!scope) {
						scope = document.body;
					}
					ref = scope.querySelectorAll('[data-s-activate]');
					results = [];
					for (i = 0, len = ref.length; i < len; i++) {
						elm = ref[i];
						results.push(this._initElement(elm));
					}
					return results;
				},

				/*
    	Class helpers
     */
				_hasClass: function _hasClass(ele, cls) {
					return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
				},
				_addClass: function _addClass(ele, cls) {
					if (!this._hasClass(ele, cls)) {
						return ele.className += ' ' + cls;
					}
				},
				_removeClass: function _removeClass(ele, cls) {
					var reg;
					if (this._hasClass(ele, cls)) {
						reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
						return ele.className = ele.className.replace(reg, ' ');
					}
				},

				/*
    	Dom helpers
     */
				getClosestActivate: function getClosestActivate(elm) {
					while (elm && elm !== document) {
						if (elm.id && this._tabs[elm.id] != null) {
							return elm;
						}
						elm = elm.parentNode;
					}
					return false;
				}
			};

			window.sugar.activate.init();

			/***/
		}
		/******/])
	);
});
;