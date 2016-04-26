(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["gradient"] = factory();
	else
		root["gradient"] = factory();
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

	module.exports = __webpack_require__(159);


/***/ },

/***/ 3:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var uniqidIdx = 0;
	var sTools = {
		/**
	  * Get a uniq id
	  */
		uniqid: function uniqid() {
			// update uniqid idx
			uniqidIdx++;
			var ts = String(new Date().getTime()),
			    i = 0,
			    out = '';
			for (i = 0; i < ts.length; i += 2) {
				out += Number(ts.substr(i, 2)).toString(36);
			}
			return 's' + out + uniqidIdx * Math.round(Math.random() * 9999999);
		}
	};
	exports.default = sTools;

/***/ },

/***/ 4:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = {
		/**
	  * Lower first letter
	  */
		lowerFirst: function lowerFirst(string) {
			return string.charAt(0).toLowerCase() + string.slice(1);
		},

		/**
	  * Upper first
	  */
		upperFirst: function upperFirst(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		},

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
	  * Auto cast the string into the correct variable type
	  */
		autoCast: function autoCast(string) {
			if (string === "" || !string) {
				return true;
			} else if (string == 'false' || string == 'true' || typeof string == 'string' && string.substr(0, 1) == '[' || !isNaN(string)) {
				return eval(string);
			} else if (typeof string == 'string' && string.substr(0, 1) == '{') {
				return eval('(' + string + ')');
			}
			return string;
		}
	};

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _sTools = __webpack_require__(3);

	var _sTools2 = _interopRequireDefault(_sTools);

	var _sString = __webpack_require__(4);

	var _sString2 = _interopRequireDefault(_sString);

	var _promisePolyfill = __webpack_require__(6);

	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

	__webpack_require__(9);

	__webpack_require__(10);

	__webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (!window.Promise) {
		window.Promise = _promisePolyfill2.default;
	}

	var _insertAnimationListener = false;
	var _insertMutationObserver = null;
	var _insertDomElementsCallbacks = {};

	var sDom = {

		/**
	  * Polyfill for the matches js method
	  */
		matches: function matches(el, selector) {
			if (el.nodeName == '#comment' || el.nodeName == '#text') {
				return false;
			}
			var p = Element.prototype;
			var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
				return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
			};
			return f.call(el, selector);
		},

		/**
	  * Detect if is in viewport
	  */
		inViewport: function inViewport(elm) {
			var offset = arguments.length <= 1 || arguments[1] === undefined ? { top: 0, right: 0, bottom: 0, left: 0 } : arguments[1];

			var rect = elm.getBoundingClientRect();
			return rect.top + offset.top >= 0 && rect.left + offset.left >= 0 && rect.bottom - offset.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right - offset.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
			;
		},

		/**
	  * Check if is visible
	  */
		isVisible: function isVisible(elm) {
			// get style
			var style = document.defaultView.getComputedStyle(elm, null),
			    opacity = style['opacity'],
			    visibility = style['visibility'],
			    display = style['display'];
			return '0' !== opacity && 'none' !== display && 'hidden' !== visibility;
		},

		/**
	  * [closestNotVisible description]
	  * @param  {[type]} elm [description]
	  * @return {[type]}     [description]
	  */
		closestNotVisible: function closestNotVisible(elm) {
			elm = elm.parentNode;
			while (elm && elm != document) {
				if (!sDom.isVisible(elm)) {
					return elm;
				}
				elm = elm.parentNode;
			}
			return false;
		},

		/**
	  * Register a callback to be launched when the element is visible
	  * @param  {element}   elm The element to observe
	  * @param  {Function} cb  The callback to launch
	  * @return {[type]}       [description]
	  */
		whenVisible: function whenVisible(elm) {
			var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

			return new Promise(function (resolve, reject) {

				var isSelfVisible = false,
				    areParentsVisible = false;
				var _cb = function _cb() {
					if (isSelfVisible && areParentsVisible) {
						if (cb) cb(elm);
						resolve(elm);
					}
				};

				// check if element itself is not visible
				if (!sDom.isVisible(elm)) {
					(function () {
						var selfObserver = new MutationObserver(function (mutations) {
							mutations.forEach(function (mutation) {
								// check that is the style whos changed
								if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
									// check if is visible
									if (sDom.isVisible(mutation.target)) {
										// update
										isSelfVisible = true;
										// callback
										_cb();
										// stop observe
										selfObserver.disconnect();
									}
								}
							});
						});
						selfObserver.observe(elm, { attributes: true });
					})();
				} else {
					isSelfVisible = true;
				}

				// get the closest not visible element
				// if found, we monitor it to check when it is visible
				var closestNotVisible = sDom.closestNotVisible(elm);
				if (closestNotVisible) {
					(function () {
						var observer = new MutationObserver(function (mutations) {
							mutations.forEach(function (mutation) {
								// check that is the style whos changed
								if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
									// check if is visible
									if (sDom.isVisible(mutation.target)) {
										// update
										areParentsVisible = true;
										// callback
										_cb();
										// stop observe
										observer.disconnect();
									}
								}
							});
						});
						observer.observe(closestNotVisible, { attributes: true });
					})();
				} else {
					areParentsVisible = true;
				}

				// callback
				_cb();
			});
		},

		/**
	  * Register a callback to be launched when the element is visible
	  * @param  {element}   elm The element to observe
	  * @param  {Function} cb  The callback to launch
	  * @return {[type]}       [description]
	  */
		whenViewportVisible: function whenViewportVisible(elm) {
			var cb = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

			return new Promise(function (resolve, reject) {
				var inViewport = false,
				    isVisible = false,
				    _cb = function _cb() {
					if (isVisible && inViewport) {
						document.removeEventListener('scroll', checkViewport);
						window.removeEventListener('resize', checkViewport);
						if (cb) cb(elm);
						resolve(elm);
					}
				};
				var checkViewport = function checkViewport(e) {
					inViewport = sDom.inViewport(elm, { top: 50, right: 50, bottom: 50, left: 50 });
					_cb();
				};

				// detect when visible
				sDom.whenVisible(elm).then(function (elm) {
					isVisible = true;
					_cb();
				});

				// listen for resize
				document.addEventListener('scroll', checkViewport);
				window.addEventListener('resize', checkViewport);
				setTimeout(function () {
					checkViewport(null);
				});
			});
		},

		/**
	  * Grab all the visible element
	  * And apply the callback when a new item match the selector
	  */
		querySelectorVisibleLive: function querySelectorVisibleLive(selector, cb, settings) {
			sDom.querySelectorLive(selector, function (elm) {
				// check if is array
				if (elm instanceof Array) {
					elm.forEach(function (e) {
						sDom.whenVisible(e).then(function (e) {
							cb(e);
						});
					});
				} else {
					// check if is visible
					sDom.whenVisible(elm).then(function (elm) {
						cb(elm);
					});
				}
			}, settings);
		},

		/**
	  * Grab all the visible element just once
	  * And apply the callback when a new item match the selector
	  */
		querySelectorVisibleLiveOnce: function querySelectorVisibleLiveOnce(selector, cb, settings) {
			// extend settings
			settings = _extends({}, settings, { once: true });
			// make the selection
			sDom.querySelectorLive(selector, function (elm) {
				// check if is array
				if (elm instanceof Array) {
					elm.forEach(function (e) {
						sDom.whenVisible(e).then(function (e) {
							cb(e);
						});
					});
				} else {
					// check if is visible
					sDom.whenVisible(elm).then(function (elm) {
						cb(elm);
					});
				}
			}, settings);
		},

		/**
	  * Grab all the visible elements
	  */
		querySelectorVisible: function querySelectorVisible(selector) {
			var rootNode = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

			// return array
			var elms = [];
			// grab the elements in the page
			[].forEach.call(rootNode.querySelectorAll(selector), function (elm) {
				if (sDom.isVisible(elm) && !sDom.closestNotVisible(elm)) {
					elms.push(elm);
				}
			});
			// return the elements
			return elms;
		},

		/**
	  * Grab all the visible element just once
	  * And apply the callback when a new item match the selector
	  */
		querySelectorViewportVisibleLiveOnce: function querySelectorViewportVisibleLiveOnce(selector, cb, settings) {
			// extend settings
			settings = _extends({}, settings, { once: true });
			// make the selection
			sDom.querySelectorLive(selector, function (elm) {
				// check if is array
				if (elm instanceof Array) {
					elm.forEach(function (e) {
						sDom.whenViewportVisible(e).then(function (e) {
							cb(e);
						});
					});
				} else {
					// check if is visible
					sDom.whenViewportVisible(elm).then(function (elm) {
						cb(elm);
					});
				}
			}, settings);
		},

		/**
	  * Grab all the visible viewport
	  */
		querySelectorViewportVisible: function querySelectorViewportVisible(selector) {
			var rootNode = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

			// return array
			var elms = [];
			// grab the elements in the page
			[].forEach.call(rootNode.querySelectorAll(selector), function (elm) {
				if (sDom.inViewport(elm) && sDom.isVisible(elm) && !sDom.closestNotVisible(elm)) {
					elms.push(elm);
				}
			});
			// return the elements
			return elms;
		},

		/**
	  * Get the element once
	  */
		querySelectorLiveOnce: function querySelectorLiveOnce(selector, cb) {
			var settings = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

			// extend settings
			settings = _extends({}, settings, {
				once: true
			});
			sDom.querySelectorLive(selector, cb, settings);
		},

		/**
	  * Make a selector detectable when new element are pushed in the page
	  */
		querySelectorLive: function querySelectorLive(selector, cb) {
			var settings = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];


			// extend settings
			settings = _extends({
				rootNode: null,
				groupedNodes: false,
				once: false
			}, settings);

			var _this = undefined;

			// use the animation hack to detect
			// new items in the page
			var detection_id = 's-query-selector-live-' + _sTools2.default.uniqid();

			// add the callback in stack
			_insertDomElementsCallbacks[detection_id] = {
				once: settings.once,
				once_added: false,
				once_removed: false,
				detection_id: detection_id,
				_added_callback: typeof cb == 'function' ? cb : cb[0] ? cb[0] : null,
				added_callback: function added_callback(_this) {
					// save the detection id into node
					// in order to be able to detect the deletion of it
					if (_this.nodes) {
						_this.nodes.forEach(function (node) {
							node._s_query_selector_live_id = _this.detection_id;
						});
					}
					if (!_this._added_callback) return;
					if (_this.nodes.length > 1) {
						_this._added_callback(_this.nodes);
					} else if (_this.nodes.length == 1) {
						_this._added_callback(_this.nodes[0]);
					}
					_this.nodes = [];
				},
				_removed_callback: cb instanceof Array && cb[1] ? cb[1] : null,
				removed_callback: function removed_callback(_this) {
					if (!_this._removed_callback) return;
					if (_this.nodes.length > 1) {
						_this._removed_callback(_this.nodes);
					} else if (_this.nodes.length == 1) {
						_this._removed_callback(_this.nodes[0]);
					}
					_this.nodes = [];
				},
				selector: selector,
				rootNode: settings.rootNode,
				groupedNodes: settings.groupedNodes,
				nodes: [],
				timeout: null
			};

			// make a query on existing elements
			sDom.domReady(function () {

				// rootNode
				if (!settings.rootNode) {
					settings.rootNode = document.body;
				}

				// check how we can detect new elements
				if (window.MutationObserver != null) {

					// make sure we try to get dom nodes
					// AFTER first js loop that handle frameworks
					// like angular, etc...
					//setTimeout(() => {

					if (!settings.rootNode._s_insert_mutation_observer) {

						settings.rootNode._s_insert_mutation_observer = new MutationObserver(function (mutations) {

							// check if what we need has been added
							mutations.forEach(function (mutation) {

								// added nodes
								if (mutation.addedNodes) {
									// let _callback = null,
									// 	_groupedNodes = [];
									// check if want grouped nodes in callback
									[].forEach.call(mutation.addedNodes, function (node) {
										// loop on each callbacks to find a match
										for (var insert_id in _insertDomElementsCallbacks) {
											var insertDomParams = _insertDomElementsCallbacks[insert_id],
											    once = insertDomParams.once,
											    once_added = insertDomParams.once_added;
											if (!once || !once_added) {
												// check if the selector match
												if (sDom.matches(node, insertDomParams.selector)) {
													// check if we need to group the elements in one
													// callback call
													insertDomParams.nodes.push(node);
													if (insertDomParams.groupedNodes) {
														clearTimeout(insertDomParams.timeout);
														insertDomParams.timeout = setTimeout(insertDomParams.added_callback.bind(null, insertDomParams));
													} else {
														insertDomParams.added_callback(insertDomParams);
													}
													// if once, update the once_added property
													if (once) {
														_insertDomElementsCallbacks[insert_id].once_added = true;
														// if we don't have any removed callback
														// we delete the parameters from the stack
														if (!insertDomParams._removed_callback) {
															delete _insertDomElementsCallbacks[insert_id];
														}
													}
												}
											}
										}
									});
								}

								// removed nodes
								if (mutation.removedNodes) {
									// let _callback = null,
									// 	_groupedNodes = [];
									// check if want grouped nodes in callback
									[].forEach.call(mutation.removedNodes, function (node) {
										// loop on each callbacks to find a match
										if (node.nodeName != '#text') {
											for (var insert_id in _insertDomElementsCallbacks) {

												var insertDomParams = _insertDomElementsCallbacks[insert_id],
												    once = insertDomParams.once,
												    once_removed = insertDomParams.once_removed;
												if (!once || !once_removed) {

													if (node._s_query_selector_live_id == insert_id) {
														// if (sDom.matches(node, _insertDomElementsCallbacks[insert_id].selector)) {
														// check if we need to group the elements
														// to pass to callback
														insertDomParams.nodes.push(node);
														if (insertDomParams.groupedNodes) {
															clearTimeout(insertDomParams.timeout);
															insertDomParams.timeout = setTimeout(insertDomParams.removed_callback.bind(null, insertDomParams));
														} else {
															insertDomParams.removed_callback(insertDomParams);
														}
														// if once, we remove the parameters from the stack
														// because we don't want to check this selector again
														if (once) {
															delete _insertDomElementsCallbacks[insert_id];
														}
													}
												}
											}
										}
									});
								}
							});
						});
						settings.rootNode._s_insert_mutation_observer.observe(settings.rootNode, {
							childList: true
						});
					}

					// parse the dom to find the currently present elements
					[].forEach.call(settings.rootNode.querySelectorAll(selector), function (elm) {
						_insertDomElementsCallbacks[detection_id].nodes.push(elm);
						if (_insertDomElementsCallbacks[detection_id].groupedNodes) {
							clearTimeout(_insertDomElementsCallbacks[detection_id].timeout);
							_insertDomElementsCallbacks[detection_id].timeout = setTimeout(_insertDomElementsCallbacks[detection_id].added_callback.bind(null, _insertDomElementsCallbacks[detection_id]));
						} else {
							_insertDomElementsCallbacks[detection_id].added_callback(_insertDomElementsCallbacks[detection_id]);
						}
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
		domReady: function domReady() {
			var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

			return new Promise(function (resolve, reject) {
				var _domReady = function _domReady() {
					if (!document.body || /(un|ing)/.test(document.readyState)) {
						setTimeout(function () {
							_domReady();
						}, 9);
					} else {
						if (cb) cb();
						resolve();
					}
				};
				_domReady();
			});
		},

		/**
	  * Access dataset
	  */
		dataset: function dataset(elm, key) {
			var value = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

			if (!elm.getAttribute) return;
			if (!value) {
				// try to get
				var v = elm.dataset[key];
				// let v = _get(elm, 'dataset.'+key);
				if (v) return v;
				v = elm.getAttribute('data-' + _sString2.default.uncamelize(key));
				return v;
			} else {
				// try to set the value
				var dataset = elm.dataset;
				if (dataset) {
					if (elm.dataset[key]) {
						elm.dataset[key] = value;
					} else {
						// set the data through setAttribute
						elm.setAttribute('data-' + _sString2.default.uncamelize(key), value);
					}
				} else {
					// set the data through setAttribute
					// cause no support for dataset
					elm.setAttribute('data-' + _sString2.default.uncamelize(key), value);
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
	  * Get offset left of an element
	  */
		offsetLeft: function offsetLeft(elm) {
			var offsetLeft = 0;
			do {
				if (!isNaN(elm.offsetLeft)) {
					offsetLeft += elm.offsetLeft;
				}
			} while (elm = elm.offsetParent);
			return offsetLeft;
		},

		/**
	  * Get offset top of an element
	  */
		offsetTop: function offsetTop(elm) {
			var offsetTop = 0;
			do {
				if (!isNaN(elm.offsetTop)) {
					offsetTop += elm.offsetTop;
				}
			} while (elm = elm.offsetParent);
			return offsetTop;
		},

		/**
	  * Get offset of an element
	  */
		offset: function offset(elm) {
			var body = void 0,
			    box = void 0,
			    clientLeft = void 0,
			    clientTop = void 0,
			    docEl = void 0,
			    left = void 0,
			    scrollLeft = void 0,
			    scrollTop = void 0,
			    top = void 0,
			    transX = void 0,
			    transY = void 0;
			box = elm.getBoundingClientRect();
			body = document.body;
			docEl = document.documentElement;
			scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
			scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
			clientTop = docEl.clientTop || body.clientTop || 0;
			clientLeft = docEl.clientLeft || body.clientLeft || 0;
			transX = sDom.getTranslate(elm, 'x');
			transY = sDom.getTranslate(elm, 'y');
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
			var idx = void 0,
			    mat = void 0,
			    style = void 0,
			    transform = void 0;
			style = getComputedStyle(elm);
			transform = style.transform || style.webkitTransform || style.mozTransform || style.msTransform;
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
				if (sDom.matches(elm, selector)) {
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
				if (sDom.matches(elm, selector)) {
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
				if (sDom.matches(elm, selector)) {
					return elm;
				}
				elm = elm.previousSibling;
			}
			return false;
		}
	};

	exports.default = sDom;

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {

	  // Store setTimeout reference so promise-polyfill will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var setTimeoutFunc = setTimeout;

	  function noop() {
	  }

	  // Use polyfill for setImmediate for performance gains
	  var asap = (typeof setImmediate === 'function' && setImmediate) ||
	    function (fn) {
	      setTimeoutFunc(fn, 1);
	    };

	  var onUnhandledRejection = function onUnhandledRejection(err) {
	    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	  };

	  // Polyfill for Function.prototype.bind
	  function bind(fn, thisArg) {
	    return function () {
	      fn.apply(thisArg, arguments);
	    };
	  }

	  var isArray = Array.isArray || function (value) {
	    return Object.prototype.toString.call(value) === '[object Array]';
	  };

	  function Promise(fn) {
	    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
	    if (typeof fn !== 'function') throw new TypeError('not a function');
	    this._state = 0;
	    this._handled = false;
	    this._value = undefined;
	    this._deferreds = [];

	    doResolve(fn, this);
	  }

	  function handle(self, deferred) {
	    while (self._state === 3) {
	      self = self._value;
	    }
	    if (self._state === 0) {
	      self._deferreds.push(deferred);
	      return;
	    }
	    self._handled = true;
	    asap(function () {
	      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	      if (cb === null) {
	        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	        return;
	      }
	      var ret;
	      try {
	        ret = cb(self._value);
	      } catch (e) {
	        reject(deferred.promise, e);
	        return;
	      }
	      resolve(deferred.promise, ret);
	    });
	  }

	  function resolve(self, newValue) {
	    try {
	      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
	        var then = newValue.then;
	        if (newValue instanceof Promise) {
	          self._state = 3;
	          self._value = newValue;
	          finale(self);
	          return;
	        } else if (typeof then === 'function') {
	          doResolve(bind(then, newValue), self);
	          return;
	        }
	      }
	      self._state = 1;
	      self._value = newValue;
	      finale(self);
	    } catch (e) {
	      reject(self, e);
	    }
	  }

	  function reject(self, newValue) {
	    self._state = 2;
	    self._value = newValue;
	    finale(self);
	  }

	  function finale(self) {
	    if (self._state === 2 && self._deferreds.length === 0) {
	      setTimeout(function() {
	        if (!self._handled) {
	          onUnhandledRejection(self._value);
	        }
	      }, 1);
	    }
	    
	    for (var i = 0, len = self._deferreds.length; i < len; i++) {
	      handle(self, self._deferreds[i]);
	    }
	    self._deferreds = null;
	  }

	  function Handler(onFulfilled, onRejected, promise) {
	    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	    this.promise = promise;
	  }

	  /**
	   * Take a potentially misbehaving resolver function and make sure
	   * onFulfilled and onRejected are only called once.
	   *
	   * Makes no guarantees about asynchrony.
	   */
	  function doResolve(fn, self) {
	    var done = false;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      reject(self, ex);
	    }
	  }

	  Promise.prototype['catch'] = function (onRejected) {
	    return this.then(null, onRejected);
	  };

	  Promise.prototype.then = function (onFulfilled, onRejected) {
	    var prom = new Promise(noop);
	    handle(this, new Handler(onFulfilled, onRejected, prom));
	    return prom;
	  };

	  Promise.all = function () {
	    var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);

	    return new Promise(function (resolve, reject) {
	      if (args.length === 0) return resolve([]);
	      var remaining = args.length;

	      function res(i, val) {
	        try {
	          if (val && (typeof val === 'object' || typeof val === 'function')) {
	            var then = val.then;
	            if (typeof then === 'function') {
	              then.call(val, function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	          args[i] = val;
	          if (--remaining === 0) {
	            resolve(args);
	          }
	        } catch (ex) {
	          reject(ex);
	        }
	      }

	      for (var i = 0; i < args.length; i++) {
	        res(i, args[i]);
	      }
	    });
	  };

	  Promise.resolve = function (value) {
	    if (value && typeof value === 'object' && value.constructor === Promise) {
	      return value;
	    }

	    return new Promise(function (resolve) {
	      resolve(value);
	    });
	  };

	  Promise.reject = function (value) {
	    return new Promise(function (resolve, reject) {
	      reject(value);
	    });
	  };

	  Promise.race = function (values) {
	    return new Promise(function (resolve, reject) {
	      for (var i = 0, len = values.length; i < len; i++) {
	        values[i].then(resolve, reject);
	      }
	    });
	  };

	  /**
	   * Set the immediate function to execute callbacks
	   * @param fn {function} Function to execute
	   * @private
	   */
	  Promise._setImmediateFn = function _setImmediateFn(fn) {
	    asap = fn;
	  };
	  
	  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	    onUnhandledRejection = fn;
	  };

	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Promise;
	  } else if (!root.Promise) {
	    root.Promise = Promise;
	  }

	})(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).setImmediate))

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(8).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7).setImmediate, __webpack_require__(7).clearImmediate))

/***/ },

/***/ 8:
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 9:
/***/ function(module, exports) {

	// mutationobserver-shim v0.3.1 (github.com/megawac/MutationObserver.js)
	// Authors: Graeme Yeates (github.com/megawac) 
	window.MutationObserver=window.MutationObserver||window.WebKitMutationObserver||function(r){function w(a){this.g=[];this.k=a}function H(a){(function c(){var d=a.takeRecords();d.length&&a.k(d,a);a.f=setTimeout(c,w._period)})()}function t(a){var b={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null},c;for(c in a)b[c]!==r&&a[c]!==r&&(b[c]=a[c]);return b}function I(a,b){var c=B(a,b);return function(d){var g=
	d.length,n;b.a&&c.a&&A(d,a,c.a,b.d);if(b.b||b.e)n=J(d,a,c,b);if(n||d.length!==g)c=B(a,b)}}function A(a,b,c,d){for(var g={},n=b.attributes,h,m,C=n.length;C--;)h=n[C],m=h.name,d&&d[m]===r||(h.value!==c[m]&&a.push(t({type:"attributes",target:b,attributeName:m,oldValue:c[m],attributeNamespace:h.namespaceURI})),g[m]=!0);for(m in c)g[m]||a.push(t({target:b,type:"attributes",attributeName:m,oldValue:c[m]}))}function J(a,b,c,d){function g(b,c,g,h,y){var r=b.length-1;y=-~((r-y)/2);for(var f,k,e;e=b.pop();)f=
	g[e.h],k=h[e.i],d.b&&y&&Math.abs(e.h-e.i)>=r&&(a.push(t({type:"childList",target:c,addedNodes:[f],removedNodes:[f],nextSibling:f.nextSibling,previousSibling:f.previousSibling})),y--),d.a&&k.a&&A(a,f,k.a,d.d),d.c&&3===f.nodeType&&f.nodeValue!==k.c&&a.push(t({type:"characterData",target:f})),d.e&&n(f,k)}function n(b,c){for(var x=b.childNodes,p=c.b,y=x.length,w=p?p.length:0,f,k,e,l,u,z=0,v=0,q=0;v<y||q<w;)l=x[v],u=(e=p[q])&&e.j,l===u?(d.a&&e.a&&A(a,l,e.a,d.d),d.c&&e.c!==r&&l.nodeValue!==e.c&&a.push(t({type:"characterData",
	target:l})),k&&g(k,b,x,p,z),d.e&&(l.childNodes.length||e.b&&e.b.length)&&n(l,e),v++,q++):(h=!0,f||(f={},k=[]),l&&(f[e=D(l)]||(f[e]=!0,-1===(e=E(p,l,q,"j"))?d.b&&(a.push(t({type:"childList",target:b,addedNodes:[l],nextSibling:l.nextSibling,previousSibling:l.previousSibling})),z++):k.push({h:v,i:e})),v++),u&&u!==x[v]&&(f[e=D(u)]||(f[e]=!0,-1===(e=E(x,u,v))?d.b&&(a.push(t({type:"childList",target:c.j,removedNodes:[u],nextSibling:p[q+1],previousSibling:p[q-1]})),z--):k.push({h:e,i:q})),q++));k&&g(k,b,
	x,p,z)}var h;n(b,c);return h}function B(a,b){var c=!0;return function g(a){var h={j:a};!b.c||3!==a.nodeType&&8!==a.nodeType?(b.a&&c&&1===a.nodeType&&(h.a=F(a.attributes,function(a,c){if(!b.d||b.d[c.name])a[c.name]=c.value;return a})),c&&(b.b||b.c||b.a&&b.e)&&(h.b=K(a.childNodes,g)),c=b.e):h.c=a.nodeValue;return h}(a)}function D(a){try{return a.id||(a.mo_id=a.mo_id||G++)}catch(b){try{return a.nodeValue}catch(c){return G++}}}function K(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c}
	function F(a,b){for(var c={},d=0;d<a.length;d++)c=b(c,a[d],d,a);return c}function E(a,b,c,d){for(;c<a.length;c++)if((d?a[c][d]:a[c])===b)return c;return-1}w._period=30;w.prototype={observe:function(a,b){for(var c={a:!!(b.attributes||b.attributeFilter||b.attributeOldValue),b:!!b.childList,e:!!b.subtree,c:!(!b.characterData&&!b.characterDataOldValue)},d=this.g,g=0;g<d.length;g++)d[g].m===a&&d.splice(g,1);b.attributeFilter&&(c.d=F(b.attributeFilter,function(a,b){a[b]=!0;return a}));d.push({m:a,l:I(a,
	c)});this.f||H(this)},takeRecords:function(){for(var a=[],b=this.g,c=0;c<b.length;c++)b[c].l(a);return a},disconnect:function(){this.g=[];clearTimeout(this.f);this.f=null}};var G=1;return w}(void 0);


/***/ },

/***/ 10:
/***/ function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 1.1.20150312
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: Dedicated to the public domain.
	 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

	if ("document" in self) {

	// Full polyfill for browsers with no classList support
	// Including IE < Edge missing SVGElement.classList
	if (!("classList" in document.createElement("_")) 
		|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

	(function (view) {

	"use strict";

	if (!('Element' in view)) return;

	var
		  classListProp = "classList"
		, protoProp = "prototype"
		, elemCtrProto = view.Element[protoProp]
		, objCtr = Object
		, strTrim = String[protoProp].trim || function () {
			return this.replace(/^\s+|\s+$/g, "");
		}
		, arrIndexOf = Array[protoProp].indexOf || function (item) {
			var
				  i = 0
				, len = this.length
			;
			for (; i < len; i++) {
				if (i in this && this[i] === item) {
					return i;
				}
			}
			return -1;
		}
		// Vendors: please allow content code to instantiate DOMExceptions
		, DOMEx = function (type, message) {
			this.name = type;
			this.code = DOMException[type];
			this.message = message;
		}
		, checkTokenAndGetIndex = function (classList, token) {
			if (token === "") {
				throw new DOMEx(
					  "SYNTAX_ERR"
					, "An invalid or illegal string was specified"
				);
			}
			if (/\s/.test(token)) {
				throw new DOMEx(
					  "INVALID_CHARACTER_ERR"
					, "String contains an invalid character"
				);
			}
			return arrIndexOf.call(classList, token);
		}
		, ClassList = function (elem) {
			var
				  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
				, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
				, i = 0
				, len = classes.length
			;
			for (; i < len; i++) {
				this.push(classes[i]);
			}
			this._updateClassName = function () {
				elem.setAttribute("class", this.toString());
			};
		}
		, classListProto = ClassList[protoProp] = []
		, classListGetter = function () {
			return new ClassList(this);
		}
	;
	// Most DOMException implementations don't allow calling DOMException's toString()
	// on non-DOMExceptions. Error's toString() is sufficient here.
	DOMEx[protoProp] = Error[protoProp];
	classListProto.item = function (i) {
		return this[i] || null;
	};
	classListProto.contains = function (token) {
		token += "";
		return checkTokenAndGetIndex(this, token) !== -1;
	};
	classListProto.add = function () {
		var
			  tokens = arguments
			, i = 0
			, l = tokens.length
			, token
			, updated = false
		;
		do {
			token = tokens[i] + "";
			if (checkTokenAndGetIndex(this, token) === -1) {
				this.push(token);
				updated = true;
			}
		}
		while (++i < l);

		if (updated) {
			this._updateClassName();
		}
	};
	classListProto.remove = function () {
		var
			  tokens = arguments
			, i = 0
			, l = tokens.length
			, token
			, updated = false
			, index
		;
		do {
			token = tokens[i] + "";
			index = checkTokenAndGetIndex(this, token);
			while (index !== -1) {
				this.splice(index, 1);
				updated = true;
				index = checkTokenAndGetIndex(this, token);
			}
		}
		while (++i < l);

		if (updated) {
			this._updateClassName();
		}
	};
	classListProto.toggle = function (token, force) {
		token += "";

		var
			  result = this.contains(token)
			, method = result ?
				force !== true && "remove"
			:
				force !== false && "add"
		;

		if (method) {
			this[method](token);
		}

		if (force === true || force === false) {
			return force;
		} else {
			return !result;
		}
	};
	classListProto.toString = function () {
		return this.join(" ");
	};

	if (objCtr.defineProperty) {
		var classListPropDesc = {
			  get: classListGetter
			, enumerable: true
			, configurable: true
		};
		try {
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		} catch (ex) { // IE 8 doesn't support enumerable:true
			if (ex.number === -0x7FF5EC54) {
				classListPropDesc.enumerable = false;
				objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
			}
		}
	} else if (objCtr[protoProp].__defineGetter__) {
		elemCtrProto.__defineGetter__(classListProp, classListGetter);
	}

	}(self));

	} else {
	// There is full or partial native classList support, so just check if we need
	// to normalize the add/remove and toggle APIs.

	(function () {
		"use strict";

		var testElement = document.createElement("_");

		testElement.classList.add("c1", "c2");

		// Polyfill for IE 10/11 and Firefox <26, where classList.add and
		// classList.remove exist but support only one argument at a time.
		if (!testElement.classList.contains("c2")) {
			var createMethod = function(method) {
				var original = DOMTokenList.prototype[method];

				DOMTokenList.prototype[method] = function(token) {
					var i, len = arguments.length;

					for (i = 0; i < len; i++) {
						token = arguments[i];
						original.call(this, token);
					}
				};
			};
			createMethod('add');
			createMethod('remove');
		}

		testElement.classList.toggle("c3", false);

		// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
		// support the second argument.
		if (testElement.classList.contains("c3")) {
			var _toggle = DOMTokenList.prototype.toggle;

			DOMTokenList.prototype.toggle = function(token, force) {
				if (1 in arguments && !this.contains(token) === !force) {
					return force;
				} else {
					return _toggle.call(this, token);
				}
			};

		}

		testElement = null;
	}());

	}

	}



/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';

	(function (doc, proto) {
	  try {
	    // check if browser supports :scope natively
	    doc.querySelector(':scope body');
	  } catch (err) {
	    // polyfill native methods if it doesn't
	    ['querySelector', 'querySelectorAll'].forEach(function (method) {
	      var nativ = proto[method];
	      proto[method] = function (selectors) {
	        if (/(^|,)\s*:scope/.test(selectors)) {
	          // only if selectors contains :scope
	          var id = this.id; // remember current element id
	          this.id = 'ID_' + Date.now(); // assign new unique id
	          selectors = selectors.replace(/((^|,)\s*):scope/g, '$1#' + this.id); // replace :scope with #ID
	          var result = doc[method](selectors);
	          this.id = id; // restore previous id
	          return result;
	        } else {
	          return nativ.call(this, selectors); // use native code for other selectors
	        }
	      };
	    });
	  }
	})(window.document, Element.prototype);

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _sTools = __webpack_require__(3);

	var _sTools2 = _interopRequireDefault(_sTools);

	var _sString = __webpack_require__(4);

	var _sString2 = _interopRequireDefault(_sString);

	var _sDom = __webpack_require__(5);

	var _sDom2 = _interopRequireDefault(_sDom);

	var _sObject = __webpack_require__(13);

	var _sObject2 = _interopRequireDefault(_sObject);

	var _sMixin = __webpack_require__(14);

	var _sMixin2 = _interopRequireDefault(_sMixin);

	var _sWatchable = __webpack_require__(15);

	var _sWatchable2 = _interopRequireDefault(_sWatchable);

	var _sWatchableAttributes = __webpack_require__(16);

	var _sWatchableAttributes2 = _interopRequireDefault(_sWatchableAttributes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	// store the settings for the different
	// components types
	var _sugarTypesSettings = {};

	var SElement = function (_SMixin$with) {
		_inherits(SElement, _SMixin$with);

		/**
	  * Setup
	  */

		SElement.setup = function setup(name, type, settings) {
			if (!_sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
			_sugarTypesSettings[name][type] = settings;
		};

		/**
	  * Watch stack
	  */


		/**
	  * The dom element reference
	  */


		/**
	  * Store the attributes
	  */


		/**
	  * Store the attributes values
	  */


		/**
	  * Store the previous attributes values
	  */


		/**	
	  * Constructor
	  */

		function SElement(elm) {
			_classCallCheck(this, SElement);

			// save the element reference

			var _this = _possibleConstructorReturn(this, _SMixin$with.call(this));

			// init parent


			_this._watchStack = {};
			_this.elm = null;
			_this.attr = {};
			_this._attrValues = {};
			_this._previousAttrValues = {};
			_this.elm = elm;
			// process attributes
			[].forEach.call(_this.elm.attributes, function (attr) {
				// new attribute
				var camelName = _this._newAttribute(attr.name);
				// set the value
				_this.attr[camelName] = attr.value;
			});

			// set the api in the dom element
			_this.elm[_this.name] = _this;

			// create a uniqid for the element
			_this.uniqid = _sTools2.default.uniqid();

			// set the uniqid to the element
			_this.elm.setAttribute('data-s-element-id', _this.uniqid);

			// check attributes changes to update settings
			var observer = new MutationObserver(function (mutations) {
				// loop on mutations
				mutations.forEach(function (mutation) {
					// update the attr property
					var val = _this.elm.getAttribute(mutation.attributeName);
					// make a new attribute
					var camelName = _this._newAttribute(mutation.attributeName);
					// set the value
					_this.attr[camelName] = mutation.target.getAttribute(mutation.attributeName);
				});
			});
			// observe the node itself
			observer.observe(_this.elm, {
				addedNodes: false,
				attributeName: true,
				characterData: true,
				subtree: false,
				attributeOldValue: true,
				characterDataOldValue: true
			});

			// listen when the element is added to the dom
			setTimeout(function () {
				var cbs = [function (elm) {
					_this.onAdded(elm);
				}];
				if (typeof _this.onRemoved == 'function') {
					cbs.push(function (elm) {
						_this.onRemoved(elm);
					});
				}
				if (typeof _this.onAdded == 'function') {
					_sDom2.default.querySelectorLiveOnce('[data-s-element-id="' + _this.uniqid + '"]', cbs);
				}
				// check if is the onVisible method
				if (typeof _this.onVisible == 'function') {
					_sDom2.default.querySelectorVisibleLiveOnce('[data-s-element-id="' + _this.uniqid + '"]', function (elm) {
						_this.onVisible(elm);
					});
				}
				// check if is the onViewportVisible method
				if (typeof _this.onViewportVisible == 'function') {
					_sDom2.default.querySelectorViewportVisibleLiveOnce('[data-s-element-id="' + _this.uniqid + '"]', function (elm) {
						_this.onViewportVisible(elm);
					});
				}
			});
			return _this;
		}

		/**
	  * New attribute
	  */


		SElement.prototype._newAttribute = function _newAttribute(name) {
			var _this2 = this;

			var camelName = _sString2.default.camelize(name);
			// make only if not exist already
			if (this._attrValues[camelName] != undefined) return camelName;

			// define new property on the attr
			Object.defineProperty(this.attr, camelName, {
				get: function get() {
					return _this2._attrValues[camelName];
				},
				set: function set(value) {
					// cast the value
					value = _sString2.default.autoCast(value);
					// protect from recursion
					if (value == _this2._previousAttrValues[camelName]) {
						return;
					}
					// save the old value
					var previousValue = _this2._previousAttrValues[camelName] = _this2.attr[camelName];
					_this2._attrValues[camelName] = value;
					// set the new attribute on html tag
					_this2.elm.setAttribute(name, value);
					// notify of new value
					_this2.notify('attr.' + camelName, value, previousValue);
					_this2.notify('attr', _this2._attrValues, _this2._previousAttrValues);
				},
				enumarable: true
			});
			return camelName;
		};

		/**
	  * On added
	  */
		// onAdded() {
		// 	console.log('onAdded', this.uniqid);
		// }

		// /**
		//  * On removed
		//  */
		// onRemoved() {
		// }

		/**
	  * Get closest not visible element
	  */


		SElement.prototype.closestNotVisible = function closestNotVisible() {
			var elm = arguments.length <= 0 || arguments[0] === undefined ? this.elm : arguments[0];

			return _sDom2.default.closestNotVisible(elm);
		};

		/**
	  * Visible proxy init
	  */


		SElement.prototype.whenVisible = function whenVisible() {
			var cb = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
			var elm = arguments.length <= 1 || arguments[1] === undefined ? this.elm : arguments[1];

			return _sDom2.default.whenVisible(elm, cb);
		};

		/**
	  * Detect if is visible
	  */


		SElement.prototype.isVisible = function isVisible() {
			return _sDom2.default.isVisible(this.elm);
		};

		/**
	  * Detect when the element is in the viewport
	  */


		SElement.prototype.inViewport = function inViewport() {
			var offset = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

			return _sDom2.default.inViewport(this.elm, offset);
		};

		/**
	  * Access dataset
	  */


		SElement.prototype.dataset = function dataset(key) {
			var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
			var elm = arguments.length <= 2 || arguments[2] === undefined ? this.elm : arguments[2];

			return _sDom2.default.dataset(elm, key, value);
		};

		return SElement;
	}((0, _sMixin2.default)(_sObject2.default).with(_sWatchable2.default));

	exports.default = SElement;

/***/ },

/***/ 13:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SObject =
	/**
	 * Constructor
	 */
	function SObject() {
		_classCallCheck(this, SObject);
	};

	exports.default = SObject;

/***/ },

/***/ 14:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var mix = function mix(superclass) {
	  return new MixinBuilder(superclass);
	};

	var MixinBuilder = function () {
	  function MixinBuilder(superclass) {
	    _classCallCheck(this, MixinBuilder);

	    this.superclass = superclass;
	  }

	  MixinBuilder.prototype.with = function _with() {
	    for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
	      mixins[_key] = arguments[_key];
	    }

	    return mixins.reduce(function (c, mixin) {
	      return mixin(c);
	    }, this.superclass);
	  };

	  return MixinBuilder;
	}();

	exports.default = mix;

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _sString = __webpack_require__(4);

	var _sString2 = _interopRequireDefault(_sString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	exports.default = function (superclass) {
		return function (_superclass) {
			_inherits(SWatchable, _superclass);

			/**	
	   * Constructor
	   */

			function SWatchable() {
				_classCallCheck(this, SWatchable);

				var _this = _possibleConstructorReturn(this, _superclass.apply(this, arguments));

				_this._watchStack = {};
				return _this;
			}

			/**
	   * Watch something on the element
	   */


			/**
	   * Watch stack
	   */


			SWatchable.prototype.watch = function watch(what, cb) {
				// register new watch
				if (!this._watchStack[what]) {
					this._watchStack[what] = [];
				}
				this._watchStack[what].push(cb);
			};

			/**
	   * Tell that something has changed
	   */


			SWatchable.prototype.notify = function notify(propertyPath, newValue, oldValue) {
				if (this._watchStack[propertyPath] && newValue !== oldValue) {
					this._watchStack[propertyPath].forEach(function (cb) {
						cb(newValue, oldValue);
					});
				}
			};

			SWatchable.prototype._defineProp = function _defineProp(currentObj, property, currentSplitPath, currentValue) {
				var _this2 = this;

				var val = currentValue;
				Object.defineProperty(currentObj, property, {
					get: function get() {
						return val;
					},
					set: function set(value) {
						var oldValue = val;
						val = value;
						_this2.notify(currentSplitPath + '.' + property, val, oldValue);
						// currentObj[property] = value;
						// console.log('set', property, currentSplitPath, value);
						// const oldValue = this._watchValues[currentSplitPath][property];
						// if (oldValue !== value) {
						// 	this._watchValues[currentSplitPath][property] = value;
						// }
						// notify update
						// this.notify(currentSplitPath, value, oldValue);
					}
				});
				// return currentObj;
			};

			/**
	   * Update something that need to be notified
	   */


			SWatchable.prototype.watchable = function watchable(path) {
				var _this3 = this;

				var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];


				// check if already has a value
				var currentValue = function () {
					try {
						return eval('this.' + path);
					} catch (e) {}
				}.call(this);
				// const ccccc = (() => {
				// 	try {
				// 		let sp = path.split('.');
				// 		sp.pop();
				// 		return eval(`this.${sp.join('.')}`);
				// 	} catch(e) {}
				// }).call(this);
				// console.log('JUIHIUHUIHUIH', ccccc);

				if (!value && currentValue) {
					value = currentValue;
				}

				// create the tree if needed
				var splitParts = path.split('.'),
				    splitPartsLength = splitParts.length,
				    currentSplitParts = [],
				    currentSplitPath = null,
				    currentObj = {},
				    firstObj = null,
				    currentWatchValues = this._watchValues;
				for (var i = 0; i < splitPartsLength; i++) {

					currentSplitParts.push(splitParts[i]);
					currentSplitPath = currentSplitParts.join('.');

					// console.log(i, splitParts[i]);

					// currentObj = newObject;

					// // if ( ! currentObj) currentObj = {};
					// if (i == 0) newObject = this;
					// // else newObject = {};

					// Object.defineProperty(newObject, splitParts[i], {
					// 	get : () => currentObj[splitParts[i]],
					// 	set : (value) => {
					// 		currentObj[splitParts[i]] = value;
					// 	}
					// });

					// // new current object
					// newObject = 

					// console.log()

					if (splitParts[i + 1]) {
						this._defineProp(currentObj, splitParts[i + 1], currentSplitPath, value);
						// this._watchValues[currentSplitPath] = currentObj;
						if (i <= 0) {
							firstObj = currentObj;
						}
						// try to get the current object
						var co = function () {
							try {
								return eval('this.' + currentSplitPath);
							} catch (e) {}
						}.call(this);
						console.warn('COOO', currentSplitPath, co);

						currentObj = co || {};
					} else {
						// this._watchValues[currentSplitPath] = value;

						Object.defineProperty(this, splitParts[0], {
							get: function get() {
								return firstObj;
							},
							set: function set(value) {
								var oldValue = firstObj;
								// this._watchValues[splitParts[0]] = value;
								// notify update
								_this3.notify(splitParts[0], value, oldValue);
							}
						});
					}
					// currentObj = this

					// // this._watchValues[currentSplitPath] = currentObj;
					// if (currentObj === this) {
					// 	currentObj = {};
					// }
					// // } else {
					// // 	currentObj == this._watchValues[currentSplitPath];
					// // }
					// this._watchValues[currentSplitPath] = currentObj;

					// if ( ! currentObj[splitParts[i]]) {
					// 	currentObj[splitParts[i]] = {};
					// 	currentWatchValues[currentSplitParts.join('.')] = currentObj[splitParts[i]];

					// 	console.log(currentObj);
					// 	console.log(currentWatchValues);

					// 	Object.defineProperty(currentObj, splitParts[i], {
					// 		get : () => {
					// 		 	return currentWatchValues[currentSplitParts.join('.')];
					// 		},
					// 		set : (value) => {
					// 			currentWatchValues[currentSplitParts.join('.')] = value;
					// 			// currentObj[splitParts[i]] = value;
					// 		}
					// 	})
					// 	currentObj = currentObj[splitParts[i]];
					// 	// currentWatchValues = currentWatchValues[splitParts[i]];
					// }

					// currentSplitParts.push(splitParts[i]);
					// if ( ! currentObj[splitParts[i]]) {
					// 	currentObj[splitParts[i]] = {};
					// 	currentWatchValues[currentSplitParts.join('.')] = currentObj[splitParts[i]];

					// 	console.log(currentObj);
					// 	console.log(currentWatchValues);

					// 	Object.defineProperty(currentObj, splitParts[i], {
					// 		get : () => {
					// 		 	return currentWatchValues[currentSplitParts.join('.')];
					// 		},
					// 		set : (value) => {
					// 			currentWatchValues[currentSplitParts.join('.')] = value;
					// 			// currentObj[splitParts[i]] = value;
					// 		}
					// 	})
					// 	currentObj = currentObj[splitParts[i]];
					// 	// currentWatchValues = currentWatchValues[splitParts[i]];
					// }
				}

				// set the property on the object itself

				// console.log('COCO', this.coco);

				// register the setter

				// console.log('currentValue', currentValue);

				// new watchable value

				// loop through each modified elements
				// let splitParts = what.split('.');
				// const splitPartsLength = splitParts.length - 1;
				// for (let i = splitPartsLength; i>=0; i--) {

				// 	const splitPath = splitParts.join('.');
				// 	let oldValue = (() => {
				// 		return eval(`this.${splitPath}`);
				// 	}).call(this);
				// 	if (typeof(oldValue) == 'object') {
				// 		oldValue = {...{},...oldValue};
				// 	}

				// 	// set the new value only if is the targeted
				// 	// one
				// 	if (i >= splitPartsLength) {
				// 		// set the new value
				// 		if (typeof(value) == 'string') {
				// 			(() => {
				// 				eval(`this.${splitPath} = "${value}";`);
				// 			}).call(this);
				// 		} else {
				// 			(() => {
				// 				eval(`this.${what} = ${value};`);
				// 			}).call(this);
				// 		}
				// 		// handle if is an attribute
				// 		// and the this.elm exist
				// 		// if ( ! fromMutation && splitParts[0] == 'attr' && splitParts[1] && this.elm) {
				// 		// 	this.elm.setAttribute(sString.uncamelize(splitParts[1],'-'), value);
				// 		// }
				// 	}

				// 	let newValue = (() => {
				// 		eval(`this.${splitPath}`);
				// 	}).call(this);

				// 	// notify of new value
				// 	this.notify(this[splitPath], value, oldValue);

				// 	// pop splitpart
				// 	splitParts.pop();
				// }
			};

			/**
	   * Unset a value
	   */


			SWatchable.prototype.unset = function unset(what) {
				// get the current value
				var oldValue = eval('this.' + what);
				// unset the value
				eval('delete this.' + what);
				// check if has some registerer
				if (this._watchStack[what]) {
					this._watchStack[what].forEach(function (cb) {
						cb(undefined, oldValue);
					});
				}
			};

			return SWatchable;
		}(superclass);
	};

/***/ },

/***/ 16:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	exports.default = function (superclass) {
		return function (_superclass) {
			_inherits(SWatchableAttributes, _superclass);

			/**	
	   * Constructor
	   */

			function SWatchableAttributes() {
				_classCallCheck(this, SWatchableAttributes);

				// setTimeout(() => {

				// make sure we have an 'attr' attribute
				// on the object

				var _this = _possibleConstructorReturn(this, _superclass.apply(this, arguments));

				if (!_this.attr) {
					_this.attr = {};
				}

				// });
				return _this;
			}

			return SWatchableAttributes;
		}(superclass);
	};

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _sTools = __webpack_require__(3);

	var sTools = _interopRequireWildcard(_sTools);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var _sSvgFilters = [];
	var _sIsSvgInjected = false;

	var SSvgFilter = function () {

		/**
	  * Constructor
	  */

		function SSvgFilter(filter_content) {
			_classCallCheck(this, SSvgFilter);

			// save the reference of each elements
			this.elms = [];

			// save parameters
			this.filter_content = filter_content;

			// generate a uniqid
			this.id = 's-svg-filter-' + sTools.uniqid();

			// if need to inject svg
			if (!document.body.querySelector('#s-svg-filters')) SSvgFilter._injectFiltersContainer();

			// insert the filter
			this._insertFilter();
		}

		/**
	  * Apply the filter to an element
	  */


		SSvgFilter.prototype.applyTo = function applyTo(elm) {
			var _this = this;

			['-webkit-', '-moz-', '-ms-', '-o-', ''].forEach(function (vendor) {
				elm.style[vendor + 'filter'] = 'url("#' + _this.id + '")';
			});
			this.elms.push(elm);
		};

		/**
	  * Unapply from
	  */


		SSvgFilter.prototype.unapplyFrom = function unapplyFrom(elm) {
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


		SSvgFilter.prototype._insertFilter = function _insertFilter() {
			var svg = '\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n\t\t\t\t<defs>\n\t\t\t\t</defs>\n\t\t\t</svg>\n\t\t';
			var div = document.createElement('div');
			div.innerHTML = svg;
			var defs = div.querySelector('defs');

			// add the filter to the svg
			this.filter_content = '<filter id="' + this.id + '">' + this.filter_content + '</filter>';
			defs.innerHTML = this.filter_content;
			this.filter = defs.querySelector('#' + this.id);
			this.svg = div.querySelector('svg');
			SSvgFilter.filtersContainer.appendChild(this.svg);
		};

		/**
	  * Destroy
	  */


		SSvgFilter.prototype.destroy = function destroy() {
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


		SSvgFilter._injectFiltersContainer = function _injectFiltersContainer() {
			var style = ['position:absolute;', 'left:-1000px;', 'top:-300px;'];
			if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
				style.push('display:none;');
			}
			SSvgFilter.filtersContainer = document.createElement('div');
			SSvgFilter.filtersContainer.id = 's-svg-filters';
			SSvgFilter.filtersContainer.style = style.join(' ');
			document.body.appendChild(SSvgFilter.filtersContainer);
		};

		return SSvgFilter;
	}();

	exports.default = SSvgFilter;

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _sGradientSvgFilter = __webpack_require__(160);

	var _sGradientSvgFilter2 = _interopRequireDefault(_sGradientSvgFilter);

	var _sElement = __webpack_require__(12);

	var _sElement2 = _interopRequireDefault(_sElement);

	var _sDom = __webpack_require__(5);

	var _sDom2 = _interopRequireDefault(_sDom);

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


	// Gradient element class

	var SGradientElement = function (_SElement) {
		_inherits(SGradientElement, _SElement);

		/**
	  * Setup
	  */
		// static setup(type, settings) {
		// 	SElement.setup('sActivate', type, settings);
		// }

		/**
	  * Constructor
	  */

		function SGradientElement(elm) {
			var settings = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, SGradientElement);

			var _this = _possibleConstructorReturn(this, _SElement.call(this, 'sGradient', elm, {
				colors: ['#a3385e', '#f2bc2b'],
				type: 'linear'
			}, settings));

			if (_this._inited) return _possibleConstructorReturn(_this);
			_this._inited = true;

			// init the filter
			_this._initFilter();
			return _this;
		}

		/**
	  * Init the filter
	  */


		SGradientElement.prototype._initFilter = function _initFilter() {
			var type = this.settings.type;
			// create a new svg filter
			this.filter = new _sGradientSvgFilter2.default();
			if (type == 'radial') {
				this.filter.radial(this.settings.colors);
			} else {
				this.filter.linear(this.settings.colors);
			}
			// apply the filter
			this.filter.applyTo(this.elm);
		};

		return SGradientElement;
	}(_sElement2.default);

	// automatic init of dom elements


	_sDom2.default.domReady(function () {
		[].forEach.call(document.body.querySelectorAll('[data-s-gradient]'), function (item) {
			// init element
			new SGradientElement(item);
		});
	});

	// expose in window.sugar
	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SGradientElement = SGradientElement;

	// export modules
	exports.default = SGradientElement;

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _sSvgFilter = __webpack_require__(158);

	var _sSvgFilter2 = _interopRequireDefault(_sSvgFilter);

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


	// Gradient filter

	var SGradientSvgFilter = function (_SSvgFilter) {
		_inherits(SGradientSvgFilter, _SSvgFilter);

		/**
	  * Constructor
	  */

		function SGradientSvgFilter() {
			_classCallCheck(this, SGradientSvgFilter);

			var _this = _possibleConstructorReturn(this, _SSvgFilter.call(this, '\t\t\t\t\n\t\t\t<feImage xlink:href="" x="0" y="0" result="IMAGEFILL" preserveAspectRatio="none" />\n\t\t\t<feComposite operator="in" in="IMAGEFILL" in2="SourceAlpha" />\n\t\t'));

			_this._image = _this.filter.querySelector('feImage');
			_this._tile = _this.filter.querySelector('feTile');
			return _this;
		}

		/**
	  * Linear gradient
	  */


		SGradientSvgFilter.prototype.linear = function linear(colors) {
			var settings = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			var width = settings.width || 512,
			    height = settings.height || 512,
			    x0 = settings.x0 || 0,
			    x1 = settings.x1 || width,
			    y0 = settings.y0 || 0,
			    y1 = settings.y1 || 0;
			var can = document.createElement('canvas');
			can.setAttribute('width', width);
			can.setAttribute('height', height);
			var ctx = can.getContext('2d'),
			    grad = ctx.createLinearGradient(x0, y0, x1, y1);
			// loop on each colors
			var i = 0;
			colors.forEach(function (color) {
				grad.addColorStop(1 / (colors.length - 1) * i, color);
				i++;
			});
			ctx.fillStyle = grad;
			ctx.fillRect(0, 0, width, height);
			this.grad64 = can.toDataURL();
			this._image.setAttribute('xlink:href', this.grad64);
		};

		/**
	  * Radial
	  */


		SGradientSvgFilter.prototype.radial = function radial(colors) {
			var settings = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


			var width = settings.width || 512,
			    height = settings.height || 512,
			    x0 = settings.x0 || width / 2,
			    x1 = settings.x1 || width / 2,
			    r0 = settings.r0 || 0,
			    y0 = settings.y0 || height / 2,
			    y1 = settings.y1 || height / 2,
			    r1 = settings.r1 || width;
			var can = document.createElement('canvas');
			can.setAttribute('width', width);
			can.setAttribute('height', height);
			var ctx = can.getContext('2d'),
			    grad = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
			// loop on each colors
			var i = 0;
			colors.forEach(function (color) {
				grad.addColorStop(1 / (colors.length - 1) * i, color);
				i++;
			});
			ctx.fillStyle = grad;
			ctx.fillRect(0, 0, width, height);
			this.grad64 = can.toDataURL();
			this._image.setAttribute('xlink:href', this.grad64);
		};

		/**
	  * Apply to override
	  */


		SGradientSvgFilter.prototype.applyTo = function applyTo(elm) {
			var _this2 = this;

			_SSvgFilter.prototype.applyTo.call(this, elm);
			this._setImageSize();
			window.addEventListener('resize', function (e) {
				_this2._setImageSize();
			});
		};

		/**
	  * Set image width
	  */


		SGradientSvgFilter.prototype._setImageSize = function _setImageSize() {
			var width = this.elms[0].offsetWidth,
			    height = this.elms[0].offsetHeight;
			if (width >= height) {
				this._image.setAttribute('width', width);
				this._image.removeAttribute('height');
			} else {
				this._image.setAttribute('height', height);
				this._image.removeAttribute('width');
			}
			// this._image.setAttribute('width', width);
			// this._image.setAttribute('height', height);
		};

		return SGradientSvgFilter;
	}(_sSvgFilter2.default);

	// expose in window.sugar


	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SGradientSvgFilter = SGradientSvgFilter;

	// export modules
	exports.default = SGradientSvgFilter;

/***/ }

/******/ })
});
;