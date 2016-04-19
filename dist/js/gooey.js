(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gooey"] = factory();
	else
		root["gooey"] = factory();
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

	module.exports = __webpack_require__(154);


/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _sugarTools = __webpack_require__(3);

	var _sugarDom = __webpack_require__(4);

	var _sugarDom2 = _interopRequireDefault(_sugarDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _upperfirst = __webpack_require__(18);
	var _lowerfirst = __webpack_require__(21);

	// store the settings for the different
	// components types
	var _sugarTypesSettings = {};

	var SugarElement = function () {

		/**
	  * Setup
	  */

		SugarElement.setup = function setup(name, type, settings) {
			if (!_sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
			_sugarTypesSettings[name][type] = settings;
		};

		/**
	  * Constructor
	  */


		function SugarElement(name, elm) {
			var default_settings = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
			var settings = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

			_classCallCheck(this, SugarElement);

			// save element reference
			this.elm = elm;
			this.name = name;
			this.name_dash = (0, _sugarTools.uncamelize)(this.name);
			// extend settings
			this._settings = _extends({}, default_settings, settings);

			// check if the main data attribute is an object to extend the settings
			var set = this.setting('');
			if (set && (typeof set === 'undefined' ? 'undefined' : _typeof(set)) == 'object') {
				this._settings = _extends({}, this._settings, set);
			}

			// set the api in the dom element
			this.elm[this.name] = this;

			// check if a type is defined then extend the settings
			if (!_sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
			var type = this.setting('settings');
			if (type && _sugarTypesSettings[name][type]) {
				this._settings = _extends({}, this._settings, _sugarTypesSettings[name][type]);
			}
		}

		/**
	  * Setting
	  */


		SugarElement.prototype.setting = function setting(key) {
			// check in the dataset
			var key_string = this.name + _upperfirst(key);
			key_string = key_string.replace(_upperfirst(key) + _upperfirst(key), _upperfirst(key));
			var s = this.dataset(_lowerfirst(key_string));

			// process the value
			if (s == 'false' || s == 'true' || typeof s == 'string' && s.substr(0, 1) == '[' || !isNaN(s)) {
				s = eval(s);
			} else if (typeof s == 'string' && s.substr(0, 1) == '{') {
				s = eval('(' + s + ')');
			}

			// if we didn't find any setting in dataset,
			// get the one from the actual settings property
			if (!s) {
				s = this._settings[key];
			}

			// check if the setting begin by @
			// mean that it's an alias of another setting
			if (typeof s == 'string' && s.substr(0, 1) == '@') {
				var _key = s.substr(1);
				// return the alias property
				return this.setting(_key);
			}

			// return the settings
			return s;
		};

		/**
	  * Get all settings
	  */


		SugarElement.prototype.settings = function settings() {
			var _this = this;

			var settings = this._settings;
			// loop on all attributes
			[].forEach.call(this.elm.attributes, function (attr) {
				var data_name = 'data-' + _this.name_dash;
				if (attr.name.indexOf(data_name) != -1) {
					var n = attr.name.substr(data_name.length);
					// if (n.substr(0,1) == '-') {
					// 	n = n.substr(1);
					// }
					if (n) {
						n = (0, _sugarTools.camelize)(n);
						settings[n] = _this.setting(n);
					}
				}
			});
			return settings;
		};

		/**
	  * Access dataset
	  */


		SugarElement.prototype.dataset = function dataset(key) {
			var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
			var elm = arguments.length <= 2 || arguments[2] === undefined ? this.elm : arguments[2];

			return _sugarDom2.default.dataset(elm, key, value);
		};

		/**
	  * Classes helpers
	  */


		SugarElement.prototype.hasClass = function hasClass(cls) {
			var elm = arguments.length <= 1 || arguments[1] === undefined ? this.elm : arguments[1];

			return _sugarDom2.default.hasClass(elm, cls);
		};

		SugarElement.prototype.addClass = function addClass(cls) {
			var elm = arguments.length <= 1 || arguments[1] === undefined ? this.elm : arguments[1];

			return _sugarDom2.default.addClass(elm, cls);
		};

		SugarElement.prototype.removeClass = function removeClass(cls) {
			var elm = arguments.length <= 1 || arguments[1] === undefined ? this.elm : arguments[1];

			return _sugarDom2.default.removeClass(elm, cls);
		};

		return SugarElement;
	}();

	exports.default = SugarElement;

/***/ },

/***/ 3:
/***/ function(module, exports) {

	"use strict";

	module.exports = {

		/**
	  * Uncamelize a string
	  */
		uncamelize: function uncamelize(text) {
			var separator = arguments.length <= 1 || arguments[1] === undefined ? '-' : arguments[1];

			// Replace all capital letters by separator followed by lowercase one
			var text = text.replace(/[A-Z]/g, function (letter) {
				return separator + letter.toLowerCase();
			});

			// Remove first separator (to avoid _hello_world name)
			return text.replace("/^" + separator + "/", '');
		},

		/**
	  * Camelize a string
	  */
		camelize: function camelize(text) {
			text = text.replace(/(?:^|[-_])(\w)/g, function (_, c) {
				return c ? c.toUpperCase() : '';
			});
			return text.substr(0, 1).toLowerCase() + text.slice(1);
		},

		/**
	  * Get a uniq id
	  */
		uniqid: function uniqid() {
			var ts = String(new Date().getTime()),
			    i = 0,
			    out = '';
			for (i = 0; i < ts.length; i += 2) {
				out += Number(ts.substr(i, 2)).toString(36);
			}
			return 'd' + out;
		}
	};

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _sugarTools = __webpack_require__(3);

	var sugarTools = _interopRequireWildcard(_sugarTools);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// let MutationSummary = require('mutation-summary');
	var _get = __webpack_require__(5);
	var _insertAnimationListener = false;
	var _insertMutationObserver = null;
	var _insertDomElementsCallbacks = {};

	var sugarDom = {

		/**
	  * Polyfill for the matches js method
	  */
		matches: function matches(el, selector) {
			if (el.nodeName == '#comment') {
				return false;
			}
			var p = Element.prototype;
			var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
				return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
			};
			return f.call(el, selector);
		},

		/**
	  * Make a selector detectable when new element are pushed in the page
	  */
		querySelectorLive: function querySelectorLive(selector, cb, rootNode) {
			var groupedNodes = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];


			var _this = undefined;

			// use the animation hack to detect
			// new items in the page
			var detection_id = 's-insert-detection-' + sugarTools.uniqid();

			// add the callback in stack
			_insertDomElementsCallbacks[detection_id] = {
				callback: cb,
				selector: selector,
				rootNode: rootNode,
				groupedNodes: groupedNodes
			};

			// make a query on existing elements
			sugarDom.domReady(function () {

				// rootNode
				if (!rootNode) {
					rootNode = document.body;
				}

				// check how we can detect new elements
				if (window.MutationObserver != null) {
					// make use of great mutation summary library
					// var observer = new MutationSummary({
					// 	callback: (summaries) => {
					// 		summaries.forEach((summary) => {
					// 			summary.added.forEach((elm) => {
					// 				cb(elm);
					// 			});
					// 		});
					// 	},
					// 	rootNode : rootNode,
					// 	queries: [{ element: selector }]
					// });

					if (!rootNode._s_insert_mutation_observer) {
						rootNode._s_insert_mutation_observer = new MutationObserver(function (mutations) {
							// check if what we need has been added
							mutations.forEach(function (mutation) {

								if (mutation.addedNodes) {
									(function () {
										var _callback = null,
										    _groupedNodes = [];
										// check if want grouped nodes in callback
										[].forEach.call(mutation.addedNodes, function (node) {
											// console.log(_this);
											// loop on each callbacks to find a match
											for (var insert_id in _insertDomElementsCallbacks) {
												// console.log('TEST', node, _insertDomElementsCallbacks[insert_id].selector);
												if (sugarDom.matches(node, _insertDomElementsCallbacks[insert_id].selector)) {
													// console.log('MATCH', node);
													if (_insertDomElementsCallbacks[insert_id].groupedNodes) {
														if (!_callback) {
															_callback = _insertDomElementsCallbacks[insert_id].callback;
														}
														// console.log('A', selector, node);
														_groupedNodes.push(node);
													} else {
														_insertDomElementsCallbacks[insert_id].callback(node);
													}
												}
											}
										});
										// if is a callback
										// mean that we have grouped the nodes
										// and that we need to call it with the array of nodes
										// as parameter
										if (_callback) {
											_callback(_groupedNodes);
										}
									})();
								}
							});
						});
						rootNode._s_insert_mutation_observer.observe(rootNode, {
							childList: true
						});
					}
					[].forEach.call(rootNode.querySelectorAll(selector), function (elm) {
						cb(elm);
					});
				} else {
					// add the animation style in DOM
					var css = selector + (' { \n\t\t\t\t\t-webkit-animation:' + detection_id + ' 0.001s;\n\t\t\t\t\t-moz-animation:' + detection_id + ' 0.001s;\n\t\t\t\t\t-ms-animation:' + detection_id + ' 0.001s;\n\t\t\t\t\tanimation:' + detection_id + ' 0.001s;\n\t\t\t\t}\n\t\t\t\t@keyframes ' + detection_id + ' {\n\t\t\t\t\tfrom { opacity: .99; }\n\t\t\t\t\tto { opacity: 1; }\n\t\t\t\t}');
					var style = document.createElement('style');
					style.type = 'text/css';
					if (style.styleSheet) {
						style.styleSheet.cssText = css;
					} else {
						style.appendChild(document.createTextNode(css));
					}
					// now we listen for animation end
					// but only once
					if (!_insertAnimationListener) {
						_insertAnimationListener = true;
						document.addEventListener('animationend', function (e) {
							if (_insertDomElementsCallbacks[e.animationName]) {
								_insertDomElementsCallbacks[e.animationName].callback(e.target);
							}
						});
					}
					// append the animation in head
					document.head.appendChild(style);
				}
			});
		},

		/**
	  * Dom ready
	  */
		domReady: function domReady(cb) {
			if (document.readyState == 'interactive') {
				// 	console.log('ready!!!');
				// 	console.log(document.body);
				cb();
			} else {
				document.addEventListener('DOMContentLoaded', function (e) {
					cb();
				});
			}
		},

		/**
	  * Access dataset
	  */
		dataset: function dataset(elm, key) {
			var value = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

			if (!elm.getAttribute) return;
			if (!value) {
				// try to get
				var v = _get(elm, 'dataset.' + key);
				if (v) return v;
				v = elm.getAttribute('data-' + sugarTools.uncamelize(key));
				return v;
			} else {
				// try to set the value
				if (_get(elm, 'dataset')) {
					if (_get(elm, 'dataset.' + key)) {
						elm.dataset[key] = value;
					} else {
						// set the data through setAttribute
						elm.setAttribute('data-' + sugarTools.uncamelize(key), value);
					}
				} else {
					// set the data through setAttribute
					// cause no support for dataset
					elm.setAttribute('data-' + sugarTools.uncamelize(key), value);
				}
			}
		},

		/**
	  * Scroll top
	  */
		scrollTop: function scrollTop() {
			return window.pageYOffset || document.scrollTop || document.body.scrollTop;
		},

		/**
	  * Get offset of an element
	  */
		offset: function offset(elm) {
			var body = undefined,
			    box = undefined,
			    clientLeft = undefined,
			    clientTop = undefined,
			    docEl = undefined,
			    left = undefined,
			    scrollLeft = undefined,
			    scrollTop = undefined,
			    top = undefined,
			    transX = undefined,
			    transY = undefined;
			box = elm.getBoundingClientRect();
			body = document.body;
			docEl = document.documentElement;
			scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
			scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
			clientTop = docEl.clientTop || body.clientTop || 0;
			clientLeft = docEl.clientLeft || body.clientLeft || 0;
			transX = sugarDom.getTranslate(elm, 'x');
			transY = sugarDom.getTranslate(elm, 'y');
			top = box.top + scrollTop - clientTop + transY;
			left = box.left + scrollLeft - clientLeft + transX;
			return {
				top: Math.round(top),
				left: Math.round(left)
			};
		},

		/**
	  * Get element translate values
	  */
		getTranslate: function getTranslate(elm, what) {
			if (!window.getComputedStyle) return;
			var idx = undefined,
			    mat = undefined,
			    style = undefined,
			    transform = undefined;
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

		/**
	  * Get closest 
	  */
		closest: function closest(elm, selector) {
			elm = elm.parentNode;
			while (elm && elm != document) {
				if (sugarDom.matches(elm, selector)) {
					return elm;
				}
				elm = elm.parentNode;
			}
			return false;
		},

		/**
	  * Next
	  */
		next: function next(elm, selector) {
			elm = elm.nextSibling;
			while (elm) {
				if (sugarDom.matches(elm, selector)) {
					return elm;
				}
				elm = elm.nextSibling;
			}
			return false;
		},

		/**
	  * Previous
	  */
		previous: function previous(elm, selector) {
			elm = elm.previousSibling;
			while (elm) {
				if (sugarDom.matches(elm, selector)) {
					return elm;
				}
				elm = elm.previousSibling;
			}
			return false;
		},

		/**
	  * Classes helpers
	  */
		hasClass: function hasClass(elm, cls) {
			return elm.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
		},
		addClass: function addClass(elm, cls) {
			if (!sugarDom.hasClass(elm, cls)) {
				return elm.className += ' ' + cls;
			}
		},
		removeClass: function removeClass(elm, cls) {
			var reg = undefined;
			if (sugarDom.hasClass(elm, cls)) {
				reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
				return elm.className = elm.className.replace(reg, ' ');
			}
		}
	};

	exports.default = sugarDom;

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(6);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined` the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	var baseCastPath = __webpack_require__(7),
	    isKey = __webpack_require__(17);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path + ''] : baseCastPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(8),
	    stringToPath = __webpack_require__(9);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function baseCastPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = baseCastPath;


/***/ },

/***/ 8:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(10);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	function stringToPath(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}

	module.exports = stringToPath;


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(11),
	    isSymbol = __webpack_require__(15);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = Symbol ? symbolProto.toString : undefined;

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (value == null) {
	    return '';
	  }
	  if (isSymbol(value)) {
	    return Symbol ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toString;


/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(12);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(14);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module), (function() { return this; }())))

/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 14:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(16);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },

/***/ 16:
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(8);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (typeof value == 'number') {
	    return true;
	  }
	  return !isArray(value) &&
	    (reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	      (object != null && value in Object(object)));
	}

	module.exports = isKey;


/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	var createCaseFirst = __webpack_require__(19);

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = createCaseFirst('toUpperCase');

	module.exports = upperFirst;


/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	var stringToArray = __webpack_require__(20),
	    toString = __webpack_require__(10);

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString(string);

	    var strSymbols = reHasComplexSymbol.test(string)
	      ? stringToArray(string)
	      : undefined;

	    var chr = strSymbols ? strSymbols[0] : string.charAt(0),
	        trailing = strSymbols ? strSymbols.slice(1).join('') : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	module.exports = createCaseFirst;


/***/ },

/***/ 20:
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return string.match(reComplexSymbol);
	}

	module.exports = stringToArray;


/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	var createCaseFirst = __webpack_require__(19);

	/**
	 * Converts the first character of `string` to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.lowerFirst('Fred');
	 * // => 'fred'
	 *
	 * _.lowerFirst('FRED');
	 * // => 'fRED'
	 */
	var lowerFirst = createCaseFirst('toLowerCase');

	module.exports = lowerFirst;


/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _sugarSvgfilter = __webpack_require__(155);

	var _sugarSvgfilter2 = _interopRequireDefault(_sugarSvgfilter);

	var _sugarElement = __webpack_require__(2);

	var _sugarElement2 = _interopRequireDefault(_sugarElement);

	var _sugarDom = __webpack_require__(4);

	var _sugarDom2 = _interopRequireDefault(_sugarDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Sugar-activate.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author   Olivier Bossel <olivier.bossel@gmail.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @created  20.01.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @updated  20.01.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version  1.0.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var _get = __webpack_require__(5);

	/**
	 * Svg filter
	 */

	var SugarGooeyFilter = function (_SugarSvgFilter) {
		_inherits(SugarGooeyFilter, _SugarSvgFilter);

		/**
	  * Constructor
	  */

		function SugarGooeyFilter() {
			var amount = arguments.length <= 0 || arguments[0] === undefined ? 8 : arguments[0];

			_classCallCheck(this, SugarGooeyFilter);

			var _this = _possibleConstructorReturn(this, _SugarSvgFilter.call(this, '\n\t\t\t<feGaussianBlur in="SourceGraphic" stdDeviation="' + amount + '" result="blur" />\n\t\t\t<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ' + (parseInt(amount) + 9) + ' -9" result="gooey" />\n\t\t\t<feComposite in="SourceGraphic" in2="gooey" operator="atop"/>\n\t\t'));

			_this._blur = _this.filter.querySelector('feGaussianBlur');
			_this._color_matrix = _this.filter.querySelector('feColorMatrix');
			return _this;
		}

		/**
	  * Set blur
	  */


		_createClass(SugarGooeyFilter, [{
			key: 'blur',
			set: function set(value) {
				this._blur.setAttribute('stdDeviation', value);
			}

			/**
	   * Set contrast
	   */

		}, {
			key: 'contrast',
			set: function set(value) {
				// get value
				var v = this._color_matrix.getAttribute('values');
				// process
				v = v.split(' ');
				v[v.length - 2] = value;
				// apply the new filter
				this._color_matrix.setAttribute('values', v.join(' '));
			}

			/**
	   * Set shrink
	   */

		}, {
			key: 'shrink',
			set: function set(value) {
				// get value
				var v = this._color_matrix.getAttribute('values');
				// process
				v = v.split(' ');
				v[v.length - 1] = value;
				// apply the new filter
				this._color_matrix.setAttribute('values', v.join(' '));
			}

			/**
	   * Set amount
	   */

		}, {
			key: 'amount',
			set: function set(value) {
				this._blur.setAttribute('stdDeviation', value);
				this._color_matrix.setAttribute('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ' + (parseInt(value) + 9) + ' -9');
			}
		}]);

		return SugarGooeyFilter;
	}(_sugarSvgfilter2.default);

	// Actual activate element class


	var SugarGooeyElement = function (_SugarElement) {
		_inherits(SugarGooeyElement, _SugarElement);

		/**
	  * Setup
	  */
		// static setup(type, settings) {
		// 	SugarElement.setup('sActivate', type, settings);
		// }

		/**
	  * Constructor
	  */

		function SugarGooeyElement(elm) {
			var settings = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, SugarGooeyElement);

			var _this2 = _possibleConstructorReturn(this, _SugarElement.call(this, 'sGooey', elm, {}, settings));

			if (_this2._inited) return _possibleConstructorReturn(_this2);
			_this2._inited = true;

			// init the filter
			_this2._initFilter();
			return _this2;
		}

		/**
	  * Init the filter
	  */


		SugarGooeyElement.prototype._initFilter = function _initFilter() {
			// get amount
			var amount = this.dataset('sGooey') || 10;
			var blur = this.dataset('sGooeyBlur');
			var contrast = this.dataset('sGooeyContrast');
			var shrink = this.dataset('sGooeyShrink');
			// create a new svg filter
			this.filter = new SugarGooeyFilter(amount);
			// apply the filter
			this.filter.applyTo(this.elm);
			if (blur) this.filter.blur = blur;
			if (contrast) this.filter.contrast = contrast;
			if (shrink) this.filter.shrink = shrink;
		};

		return SugarGooeyElement;
	}(_sugarElement2.default);

	// Automatic init of dom elements


	_sugarDom2.default.domReady(function () {
		[].forEach.call(document.body.querySelectorAll('[data-s-gooey]'), function (item) {
			// init gooey element
			new SugarGooeyElement(item);
		});
	});

	// expose in window.sugar
	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.GooeyElement = SugarGooeyElement;
	window.sugar.GooeyFilter = SugarGooeyFilter;

	// export modules
	module.exports = {
		GooeyFilter: SugarGooeyFilter,
		GooeyElement: SugarGooeyElement
	};

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _sugarTools = __webpack_require__(3);

	var sugarTools = _interopRequireWildcard(_sugarTools);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _sSvgFilters = [];
	var _sIsSvgInjected = false;

	var SugarSvgFilter = function () {

		/**
	  * Constructor
	  */

		function SugarSvgFilter(filter_content) {
			_classCallCheck(this, SugarSvgFilter);

			// save the reference of each elements
			this.elms = [];

			// save parameters
			this.filter_content = filter_content;

			// generate a uniqid
			this.id = 's-svg-filter-' + sugarTools.uniqid();

			// if need to inject svg
			if (!document.body.querySelector('#s-svg-filters')) SugarSvgFilter._injectFiltersContainer();

			// insert the filter
			this._insertFilter();
		}

		/**
	  * Apply the filter to an element
	  */


		SugarSvgFilter.prototype.applyTo = function applyTo(elm) {
			var _this = this;

			['-webkit-', '-moz-', '-ms-', '-o-', ''].forEach(function (vendor) {
				elm.style[vendor + 'filter'] = 'url("#' + _this.id + '")';
			});
			this.elms.push(elm);
		};

		/**
	  * Unapply from
	  */


		SugarSvgFilter.prototype.unapplyFrom = function unapplyFrom(elm) {
			['-webkit-', '-moz-', '-ms-', '-o-', ''].forEach(function (vendor) {
				delete elm.style[vendor + 'filter'];
			});
			// remove from stack
			var idx = this.elms.indexOf(elm);
			if (idx) this.elms.splice(idx, 1);
		};

		/**
	  * Insert the filter
	  */


		SugarSvgFilter.prototype._insertFilter = function _insertFilter() {
			var svg = '\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n\t\t\t\t<defs>\n\t\t\t\t</defs>\n\t\t\t</svg>\n\t\t';
			var div = document.createElement('div');
			div.innerHTML = svg;
			var defs = div.querySelector('defs');

			// add the filter to the svg
			this.filter_content = '<filter id="' + this.id + '">' + this.filter_content + '</filter>';
			defs.innerHTML = this.filter_content;
			this.filter = defs.querySelector('#' + this.id);
			this.svg = div.querySelector('svg');
			SugarSvgFilter.filtersContainer.appendChild(this.svg);
		};

		/**
	  * Destroy
	  */


		SugarSvgFilter.prototype.destroy = function destroy() {
			var _this2 = this;

			// loop on each element savec in stack to remove the filter
			this.elms.forEach(function (elm) {
				_this2.unapplyFrom(elm);
			});
			// remove the filter from the html
			this.filter.parent.removeChild(this.filter);
		};

		/**
	  * Inject svg
	  */


		SugarSvgFilter._injectFiltersContainer = function _injectFiltersContainer() {
			var style = ['position:absolute;', 'left:-1000px;', 'top:-300px;'];
			if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
				style.push('display:none;');
			}
			SugarSvgFilter.filtersContainer = document.createElement('div');
			SugarSvgFilter.filtersContainer.id = 's-svg-filters';
			SugarSvgFilter.filtersContainer.style = style.join(' ');
			document.body.appendChild(SugarSvgFilter.filtersContainer);
		};

		return SugarSvgFilter;
	}();

	exports.default = SugarSvgFilter;

/***/ }

/******/ })
});
;