(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["form"] = factory();
	else
		root["form"] = factory();
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24);


/***/ },
/* 1 */,
/* 2 */
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

	var _upperfirst = __webpack_require__(19);
	var _lowerfirst = __webpack_require__(22);

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
			// extend settings
			this.settings = _extends({}, default_settings, settings);

			// check if the main data attribute is an object to extend the settings
			var set = this.setting('');
			if (set && (typeof set === 'undefined' ? 'undefined' : _typeof(set)) == 'object') {
				this.settings = _extends({}, this.settings, set);
			}

			// set the api in the dom element
			this.elm[this.name] = this;

			// check if a type is defined then extend the settings
			if (!_sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
			var type = this.setting('settings');
			if (type && _sugarTypesSettings[name][type]) {
				this.settings = _extends({}, this.settings, _sugarTypesSettings[name][type]);
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
				s = this.settings[key];
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
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _sugarTools = __webpack_require__(3);

	var sugarTools = _interopRequireWildcard(_sugarTools);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var MutationSummary = __webpack_require__(5);
	var _get = __webpack_require__(6);
	var _insertAnimationListener = false;
	var _insertMutationObserver = null;
	var _insertDomElementsCallbacks = {};

	var sugarDom = {

		/**
	  * Polyfill for the matches js method
	  */
		matches: function matches(el, selector) {
			var p = Element.prototype;
			var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
				return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
			};
			return f.call(el, selector);
		},

		/**
	  * Make a selector detectable when new element are pushed in the page
	  */
		onInserted: function onInserted(selector, cb) {

			// use the animation hack to detect
			// new items in the page
			var detection_id = 's-insert-detection-' + sugarTools.uniqid();

			// add the callback in stack
			_insertDomElementsCallbacks[detection_id] = {
				callback: cb,
				selector: selector
			};

			// check how we can detect new elements
			if (window.MutationObserver != null && !_insertMutationObserver) {
				// make use of great mutation summary library
				var observer = new MutationSummary({
					callback: function callback(summaries) {
						summaries.forEach(function (summary) {
							summary.added.forEach(function (elm) {
								cb(elm);
							});
						});
					},
					queries: [{ element: selector }]
				});

				// _insertMutationObserver = new MutationObserver((mutations) => {
				// 	// check if what we need has been added
				// 	mutations.forEach((mutation) => {
				// 		if (mutation.addedNodes && mutation.addedNodes[0]) {
				// 			// loop on each callbacks to find a match
				// 			for(let insert_id in _insertDomElementsCallbacks) {
				// 				if (this.matches(mutation.addedNodes[0], _insertDomElementsCallbacks[insert_id].selector)) {
				// 					_insertDomElementsCallbacks[insert_id].callback(mutation.addedNodes[0]);
				// 				}
				// 			}
				// 		}
				// 	});
				// });
				// _insertMutationObserver.observe(document.body, {
				// 	childList: true
				// });
			} else {
					// add the animation style in DOM
					var css = selector + (' { \n\t\t\t\t-webkit-animation:' + detection_id + ' 0.001s;\n\t\t\t\t-moz-animation:' + detection_id + ' 0.001s;\n\t\t\t\t-ms-animation:' + detection_id + ' 0.001s;\n\t\t\t\tanimation:' + detection_id + ' 0.001s;\n\t\t\t}\n\t\t\t@keyframes ' + detection_id + ' {\n\t\t\t\tfrom { opacity: .99; }\n\t\t\t\tto { opacity: 1; }\n\t\t\t}');
					var style = document.createElement('style');
					style.type = 'text/css';
					if (style.styleSheet) {
						style.styleSheet.cssText = css;
					} else {
						style.appendChild(document.createTextNode(css));
					}
					document.head.appendChild(style);
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
				}
		},

		/**
	  * Dom ready
	  */
		domReady: function domReady(cb) {
			// if (document.readyState == 'complete') {
			// 	console.log('ready!!!');
			// 	console.log(document.body);
			// 	cb();
			// } else {
			document.addEventListener('DOMContentLoaded', function (e) {
				cb();
			});
			// }	
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
/* 5 */
/***/ function(module, exports) {

	if (window.MutationObserver) { // Copyright 2011 Google Inc.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	//
	//     http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	var __extends = this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    __.prototype = b.prototype;
	    d.prototype = new __();
	};
	var MutationObserverCtor;
	if (typeof WebKitMutationObserver !== 'undefined')
	    MutationObserverCtor = WebKitMutationObserver;
	else
	    MutationObserverCtor = MutationObserver;

	if (MutationObserverCtor === undefined) {
	    console.error('DOM Mutation Observers are required.');
	    console.error('https://developer.mozilla.org/en-US/docs/DOM/MutationObserver');
	    throw Error('DOM Mutation Observers are required');
	}

	var NodeMap = (function () {
	    function NodeMap() {
	        this.nodes = [];
	        this.values = [];
	    }
	    NodeMap.prototype.isIndex = function (s) {
	        return +s === s >>> 0;
	    };

	    NodeMap.prototype.nodeId = function (node) {
	        var id = node[NodeMap.ID_PROP];
	        if (!id)
	            id = node[NodeMap.ID_PROP] = NodeMap.nextId_++;
	        return id;
	    };

	    NodeMap.prototype.set = function (node, value) {
	        var id = this.nodeId(node);
	        this.nodes[id] = node;
	        this.values[id] = value;
	    };

	    NodeMap.prototype.get = function (node) {
	        var id = this.nodeId(node);
	        return this.values[id];
	    };

	    NodeMap.prototype.has = function (node) {
	        return this.nodeId(node) in this.nodes;
	    };

	    NodeMap.prototype.delete = function (node) {
	        var id = this.nodeId(node);
	        delete this.nodes[id];
	        this.values[id] = undefined;
	    };

	    NodeMap.prototype.keys = function () {
	        var nodes = [];
	        for (var id in this.nodes) {
	            if (!this.isIndex(id))
	                continue;
	            nodes.push(this.nodes[id]);
	        }

	        return nodes;
	    };
	    NodeMap.ID_PROP = '__mutation_summary_node_map_id__';
	    NodeMap.nextId_ = 1;
	    return NodeMap;
	})();

	/**
	*  var reachableMatchableProduct = [
	*  //  STAYED_OUT,  ENTERED,     STAYED_IN,   EXITED
	*    [ STAYED_OUT,  STAYED_OUT,  STAYED_OUT,  STAYED_OUT ], // STAYED_OUT
	*    [ STAYED_OUT,  ENTERED,     ENTERED,     STAYED_OUT ], // ENTERED
	*    [ STAYED_OUT,  ENTERED,     STAYED_IN,   EXITED     ], // STAYED_IN
	*    [ STAYED_OUT,  STAYED_OUT,  EXITED,      EXITED     ]  // EXITED
	*  ];
	*/
	var Movement;
	(function (Movement) {
	    Movement[Movement["STAYED_OUT"] = 0] = "STAYED_OUT";
	    Movement[Movement["ENTERED"] = 1] = "ENTERED";
	    Movement[Movement["STAYED_IN"] = 2] = "STAYED_IN";
	    Movement[Movement["REPARENTED"] = 3] = "REPARENTED";
	    Movement[Movement["REORDERED"] = 4] = "REORDERED";
	    Movement[Movement["EXITED"] = 5] = "EXITED";
	})(Movement || (Movement = {}));

	function enteredOrExited(changeType) {
	    return changeType === 1 /* ENTERED */ || changeType === 5 /* EXITED */;
	}

	var NodeChange = (function () {
	    function NodeChange(node, childList, attributes, characterData, oldParentNode, added, attributeOldValues, characterDataOldValue) {
	        if (typeof childList === "undefined") { childList = false; }
	        if (typeof attributes === "undefined") { attributes = false; }
	        if (typeof characterData === "undefined") { characterData = false; }
	        if (typeof oldParentNode === "undefined") { oldParentNode = null; }
	        if (typeof added === "undefined") { added = false; }
	        if (typeof attributeOldValues === "undefined") { attributeOldValues = null; }
	        if (typeof characterDataOldValue === "undefined") { characterDataOldValue = null; }
	        this.node = node;
	        this.childList = childList;
	        this.attributes = attributes;
	        this.characterData = characterData;
	        this.oldParentNode = oldParentNode;
	        this.added = added;
	        this.attributeOldValues = attributeOldValues;
	        this.characterDataOldValue = characterDataOldValue;
	        this.isCaseInsensitive = this.node.nodeType === Node.ELEMENT_NODE && this.node instanceof HTMLElement && this.node.ownerDocument instanceof HTMLDocument;
	    }
	    NodeChange.prototype.getAttributeOldValue = function (name) {
	        if (!this.attributeOldValues)
	            return undefined;
	        if (this.isCaseInsensitive)
	            name = name.toLowerCase();
	        return this.attributeOldValues[name];
	    };

	    NodeChange.prototype.getAttributeNamesMutated = function () {
	        var names = [];
	        if (!this.attributeOldValues)
	            return names;
	        for (var name in this.attributeOldValues) {
	            names.push(name);
	        }
	        return names;
	    };

	    NodeChange.prototype.attributeMutated = function (name, oldValue) {
	        this.attributes = true;
	        this.attributeOldValues = this.attributeOldValues || {};

	        if (name in this.attributeOldValues)
	            return;

	        this.attributeOldValues[name] = oldValue;
	    };

	    NodeChange.prototype.characterDataMutated = function (oldValue) {
	        if (this.characterData)
	            return;
	        this.characterData = true;
	        this.characterDataOldValue = oldValue;
	    };

	    // Note: is it possible to receive a removal followed by a removal. This
	    // can occur if the removed node is added to an non-observed node, that
	    // node is added to the observed area, and then the node removed from
	    // it.
	    NodeChange.prototype.removedFromParent = function (parent) {
	        this.childList = true;
	        if (this.added || this.oldParentNode)
	            this.added = false;
	        else
	            this.oldParentNode = parent;
	    };

	    NodeChange.prototype.insertedIntoParent = function () {
	        this.childList = true;
	        this.added = true;
	    };

	    // An node's oldParent is
	    //   -its present parent, if its parentNode was not changed.
	    //   -null if the first thing that happened to it was an add.
	    //   -the node it was removed from if the first thing that happened to it
	    //      was a remove.
	    NodeChange.prototype.getOldParent = function () {
	        if (this.childList) {
	            if (this.oldParentNode)
	                return this.oldParentNode;
	            if (this.added)
	                return null;
	        }

	        return this.node.parentNode;
	    };
	    return NodeChange;
	})();

	var ChildListChange = (function () {
	    function ChildListChange() {
	        this.added = new NodeMap();
	        this.removed = new NodeMap();
	        this.maybeMoved = new NodeMap();
	        this.oldPrevious = new NodeMap();
	        this.moved = undefined;
	    }
	    return ChildListChange;
	})();

	var TreeChanges = (function (_super) {
	    __extends(TreeChanges, _super);
	    function TreeChanges(rootNode, mutations) {
	        _super.call(this);

	        this.rootNode = rootNode;
	        this.reachableCache = undefined;
	        this.wasReachableCache = undefined;
	        this.anyParentsChanged = false;
	        this.anyAttributesChanged = false;
	        this.anyCharacterDataChanged = false;

	        for (var m = 0; m < mutations.length; m++) {
	            var mutation = mutations[m];
	            switch (mutation.type) {
	                case 'childList':
	                    this.anyParentsChanged = true;
	                    for (var i = 0; i < mutation.removedNodes.length; i++) {
	                        var node = mutation.removedNodes[i];
	                        this.getChange(node).removedFromParent(mutation.target);
	                    }
	                    for (var i = 0; i < mutation.addedNodes.length; i++) {
	                        var node = mutation.addedNodes[i];
	                        this.getChange(node).insertedIntoParent();
	                    }
	                    break;

	                case 'attributes':
	                    this.anyAttributesChanged = true;
	                    var change = this.getChange(mutation.target);
	                    change.attributeMutated(mutation.attributeName, mutation.oldValue);
	                    break;

	                case 'characterData':
	                    this.anyCharacterDataChanged = true;
	                    var change = this.getChange(mutation.target);
	                    change.characterDataMutated(mutation.oldValue);
	                    break;
	            }
	        }
	    }
	    TreeChanges.prototype.getChange = function (node) {
	        var change = this.get(node);
	        if (!change) {
	            change = new NodeChange(node);
	            this.set(node, change);
	        }
	        return change;
	    };

	    TreeChanges.prototype.getOldParent = function (node) {
	        var change = this.get(node);
	        return change ? change.getOldParent() : node.parentNode;
	    };

	    TreeChanges.prototype.getIsReachable = function (node) {
	        if (node === this.rootNode)
	            return true;
	        if (!node)
	            return false;

	        this.reachableCache = this.reachableCache || new NodeMap();
	        var isReachable = this.reachableCache.get(node);
	        if (isReachable === undefined) {
	            isReachable = this.getIsReachable(node.parentNode);
	            this.reachableCache.set(node, isReachable);
	        }
	        return isReachable;
	    };

	    // A node wasReachable if its oldParent wasReachable.
	    TreeChanges.prototype.getWasReachable = function (node) {
	        if (node === this.rootNode)
	            return true;
	        if (!node)
	            return false;

	        this.wasReachableCache = this.wasReachableCache || new NodeMap();
	        var wasReachable = this.wasReachableCache.get(node);
	        if (wasReachable === undefined) {
	            wasReachable = this.getWasReachable(this.getOldParent(node));
	            this.wasReachableCache.set(node, wasReachable);
	        }
	        return wasReachable;
	    };

	    TreeChanges.prototype.reachabilityChange = function (node) {
	        if (this.getIsReachable(node)) {
	            return this.getWasReachable(node) ? 2 /* STAYED_IN */ : 1 /* ENTERED */;
	        }

	        return this.getWasReachable(node) ? 5 /* EXITED */ : 0 /* STAYED_OUT */;
	    };
	    return TreeChanges;
	})(NodeMap);

	var MutationProjection = (function () {
	    // TOOD(any)
	    function MutationProjection(rootNode, mutations, selectors, calcReordered, calcOldPreviousSibling) {
	        this.rootNode = rootNode;
	        this.mutations = mutations;
	        this.selectors = selectors;
	        this.calcReordered = calcReordered;
	        this.calcOldPreviousSibling = calcOldPreviousSibling;
	        this.treeChanges = new TreeChanges(rootNode, mutations);
	        this.entered = [];
	        this.exited = [];
	        this.stayedIn = new NodeMap();
	        this.visited = new NodeMap();
	        this.childListChangeMap = undefined;
	        this.characterDataOnly = undefined;
	        this.matchCache = undefined;

	        this.processMutations();
	    }
	    MutationProjection.prototype.processMutations = function () {
	        if (!this.treeChanges.anyParentsChanged && !this.treeChanges.anyAttributesChanged)
	            return;

	        var changedNodes = this.treeChanges.keys();
	        for (var i = 0; i < changedNodes.length; i++) {
	            this.visitNode(changedNodes[i], undefined);
	        }
	    };

	    MutationProjection.prototype.visitNode = function (node, parentReachable) {
	        if (this.visited.has(node))
	            return;

	        this.visited.set(node, true);

	        var change = this.treeChanges.get(node);
	        var reachable = parentReachable;

	        // node inherits its parent's reachability change unless
	        // its parentNode was mutated.
	        if ((change && change.childList) || reachable == undefined)
	            reachable = this.treeChanges.reachabilityChange(node);

	        if (reachable === 0 /* STAYED_OUT */)
	            return;

	        // Cache match results for sub-patterns.
	        this.matchabilityChange(node);

	        if (reachable === 1 /* ENTERED */) {
	            this.entered.push(node);
	        } else if (reachable === 5 /* EXITED */) {
	            this.exited.push(node);
	            this.ensureHasOldPreviousSiblingIfNeeded(node);
	        } else if (reachable === 2 /* STAYED_IN */) {
	            var movement = 2 /* STAYED_IN */;

	            if (change && change.childList) {
	                if (change.oldParentNode !== node.parentNode) {
	                    movement = 3 /* REPARENTED */;
	                    this.ensureHasOldPreviousSiblingIfNeeded(node);
	                } else if (this.calcReordered && this.wasReordered(node)) {
	                    movement = 4 /* REORDERED */;
	                }
	            }

	            this.stayedIn.set(node, movement);
	        }

	        if (reachable === 2 /* STAYED_IN */)
	            return;

	        for (var child = node.firstChild; child; child = child.nextSibling) {
	            this.visitNode(child, reachable);
	        }
	    };

	    MutationProjection.prototype.ensureHasOldPreviousSiblingIfNeeded = function (node) {
	        if (!this.calcOldPreviousSibling)
	            return;

	        this.processChildlistChanges();

	        var parentNode = node.parentNode;
	        var nodeChange = this.treeChanges.get(node);
	        if (nodeChange && nodeChange.oldParentNode)
	            parentNode = nodeChange.oldParentNode;

	        var change = this.childListChangeMap.get(parentNode);
	        if (!change) {
	            change = new ChildListChange();
	            this.childListChangeMap.set(parentNode, change);
	        }

	        if (!change.oldPrevious.has(node)) {
	            change.oldPrevious.set(node, node.previousSibling);
	        }
	    };

	    MutationProjection.prototype.getChanged = function (summary, selectors, characterDataOnly) {
	        this.selectors = selectors;
	        this.characterDataOnly = characterDataOnly;

	        for (var i = 0; i < this.entered.length; i++) {
	            var node = this.entered[i];
	            var matchable = this.matchabilityChange(node);
	            if (matchable === 1 /* ENTERED */ || matchable === 2 /* STAYED_IN */)
	                summary.added.push(node);
	        }

	        var stayedInNodes = this.stayedIn.keys();
	        for (var i = 0; i < stayedInNodes.length; i++) {
	            var node = stayedInNodes[i];
	            var matchable = this.matchabilityChange(node);

	            if (matchable === 1 /* ENTERED */) {
	                summary.added.push(node);
	            } else if (matchable === 5 /* EXITED */) {
	                summary.removed.push(node);
	            } else if (matchable === 2 /* STAYED_IN */ && (summary.reparented || summary.reordered)) {
	                var movement = this.stayedIn.get(node);
	                if (summary.reparented && movement === 3 /* REPARENTED */)
	                    summary.reparented.push(node);
	                else if (summary.reordered && movement === 4 /* REORDERED */)
	                    summary.reordered.push(node);
	            }
	        }

	        for (var i = 0; i < this.exited.length; i++) {
	            var node = this.exited[i];
	            var matchable = this.matchabilityChange(node);
	            if (matchable === 5 /* EXITED */ || matchable === 2 /* STAYED_IN */)
	                summary.removed.push(node);
	        }
	    };

	    MutationProjection.prototype.getOldParentNode = function (node) {
	        var change = this.treeChanges.get(node);
	        if (change && change.childList)
	            return change.oldParentNode ? change.oldParentNode : null;

	        var reachabilityChange = this.treeChanges.reachabilityChange(node);
	        if (reachabilityChange === 0 /* STAYED_OUT */ || reachabilityChange === 1 /* ENTERED */)
	            throw Error('getOldParentNode requested on invalid node.');

	        return node.parentNode;
	    };

	    MutationProjection.prototype.getOldPreviousSibling = function (node) {
	        var parentNode = node.parentNode;
	        var nodeChange = this.treeChanges.get(node);
	        if (nodeChange && nodeChange.oldParentNode)
	            parentNode = nodeChange.oldParentNode;

	        var change = this.childListChangeMap.get(parentNode);
	        if (!change)
	            throw Error('getOldPreviousSibling requested on invalid node.');

	        return change.oldPrevious.get(node);
	    };

	    MutationProjection.prototype.getOldAttribute = function (element, attrName) {
	        var change = this.treeChanges.get(element);
	        if (!change || !change.attributes)
	            throw Error('getOldAttribute requested on invalid node.');

	        var value = change.getAttributeOldValue(attrName);
	        if (value === undefined)
	            throw Error('getOldAttribute requested for unchanged attribute name.');

	        return value;
	    };

	    MutationProjection.prototype.attributeChangedNodes = function (includeAttributes) {
	        if (!this.treeChanges.anyAttributesChanged)
	            return {};

	        var attributeFilter;
	        var caseInsensitiveFilter;
	        if (includeAttributes) {
	            attributeFilter = {};
	            caseInsensitiveFilter = {};
	            for (var i = 0; i < includeAttributes.length; i++) {
	                var attrName = includeAttributes[i];
	                attributeFilter[attrName] = true;
	                caseInsensitiveFilter[attrName.toLowerCase()] = attrName;
	            }
	        }

	        var result = {};
	        var nodes = this.treeChanges.keys();

	        for (var i = 0; i < nodes.length; i++) {
	            var node = nodes[i];

	            var change = this.treeChanges.get(node);
	            if (!change.attributes)
	                continue;

	            if (2 /* STAYED_IN */ !== this.treeChanges.reachabilityChange(node) || 2 /* STAYED_IN */ !== this.matchabilityChange(node)) {
	                continue;
	            }

	            var element = node;
	            var changedAttrNames = change.getAttributeNamesMutated();
	            for (var j = 0; j < changedAttrNames.length; j++) {
	                var attrName = changedAttrNames[j];

	                if (attributeFilter && !attributeFilter[attrName] && !(change.isCaseInsensitive && caseInsensitiveFilter[attrName])) {
	                    continue;
	                }

	                var oldValue = change.getAttributeOldValue(attrName);
	                if (oldValue === element.getAttribute(attrName))
	                    continue;

	                if (caseInsensitiveFilter && change.isCaseInsensitive)
	                    attrName = caseInsensitiveFilter[attrName];

	                result[attrName] = result[attrName] || [];
	                result[attrName].push(element);
	            }
	        }

	        return result;
	    };

	    MutationProjection.prototype.getOldCharacterData = function (node) {
	        var change = this.treeChanges.get(node);
	        if (!change || !change.characterData)
	            throw Error('getOldCharacterData requested on invalid node.');

	        return change.characterDataOldValue;
	    };

	    MutationProjection.prototype.getCharacterDataChanged = function () {
	        if (!this.treeChanges.anyCharacterDataChanged)
	            return [];

	        var nodes = this.treeChanges.keys();
	        var result = [];
	        for (var i = 0; i < nodes.length; i++) {
	            var target = nodes[i];
	            if (2 /* STAYED_IN */ !== this.treeChanges.reachabilityChange(target))
	                continue;

	            var change = this.treeChanges.get(target);
	            if (!change.characterData || target.textContent == change.characterDataOldValue)
	                continue;

	            result.push(target);
	        }

	        return result;
	    };

	    MutationProjection.prototype.computeMatchabilityChange = function (selector, el) {
	        if (!this.matchCache)
	            this.matchCache = [];
	        if (!this.matchCache[selector.uid])
	            this.matchCache[selector.uid] = new NodeMap();

	        var cache = this.matchCache[selector.uid];
	        var result = cache.get(el);
	        if (result === undefined) {
	            result = selector.matchabilityChange(el, this.treeChanges.get(el));
	            cache.set(el, result);
	        }
	        return result;
	    };

	    MutationProjection.prototype.matchabilityChange = function (node) {
	        var _this = this;
	        // TODO(rafaelw): Include PI, CDATA?
	        // Only include text nodes.
	        if (this.characterDataOnly) {
	            switch (node.nodeType) {
	                case Node.COMMENT_NODE:
	                case Node.TEXT_NODE:
	                    return 2 /* STAYED_IN */;
	                default:
	                    return 0 /* STAYED_OUT */;
	            }
	        }

	        // No element filter. Include all nodes.
	        if (!this.selectors)
	            return 2 /* STAYED_IN */;

	        // Element filter. Exclude non-elements.
	        if (node.nodeType !== Node.ELEMENT_NODE)
	            return 0 /* STAYED_OUT */;

	        var el = node;

	        var matchChanges = this.selectors.map(function (selector) {
	            return _this.computeMatchabilityChange(selector, el);
	        });

	        var accum = 0 /* STAYED_OUT */;
	        var i = 0;

	        while (accum !== 2 /* STAYED_IN */ && i < matchChanges.length) {
	            switch (matchChanges[i]) {
	                case 2 /* STAYED_IN */:
	                    accum = 2 /* STAYED_IN */;
	                    break;
	                case 1 /* ENTERED */:
	                    if (accum === 5 /* EXITED */)
	                        accum = 2 /* STAYED_IN */;
	                    else
	                        accum = 1 /* ENTERED */;
	                    break;
	                case 5 /* EXITED */:
	                    if (accum === 1 /* ENTERED */)
	                        accum = 2 /* STAYED_IN */;
	                    else
	                        accum = 5 /* EXITED */;
	                    break;
	            }

	            i++;
	        }

	        return accum;
	    };

	    MutationProjection.prototype.getChildlistChange = function (el) {
	        var change = this.childListChangeMap.get(el);
	        if (!change) {
	            change = new ChildListChange();
	            this.childListChangeMap.set(el, change);
	        }

	        return change;
	    };

	    MutationProjection.prototype.processChildlistChanges = function () {
	        if (this.childListChangeMap)
	            return;

	        this.childListChangeMap = new NodeMap();

	        for (var i = 0; i < this.mutations.length; i++) {
	            var mutation = this.mutations[i];
	            if (mutation.type != 'childList')
	                continue;

	            if (this.treeChanges.reachabilityChange(mutation.target) !== 2 /* STAYED_IN */ && !this.calcOldPreviousSibling)
	                continue;

	            var change = this.getChildlistChange(mutation.target);

	            var oldPrevious = mutation.previousSibling;

	            function recordOldPrevious(node, previous) {
	                if (!node || change.oldPrevious.has(node) || change.added.has(node) || change.maybeMoved.has(node))
	                    return;

	                if (previous && (change.added.has(previous) || change.maybeMoved.has(previous)))
	                    return;

	                change.oldPrevious.set(node, previous);
	            }

	            for (var j = 0; j < mutation.removedNodes.length; j++) {
	                var node = mutation.removedNodes[j];
	                recordOldPrevious(node, oldPrevious);

	                if (change.added.has(node)) {
	                    change.added.delete(node);
	                } else {
	                    change.removed.set(node, true);
	                    change.maybeMoved.delete(node);
	                }

	                oldPrevious = node;
	            }

	            recordOldPrevious(mutation.nextSibling, oldPrevious);

	            for (var j = 0; j < mutation.addedNodes.length; j++) {
	                var node = mutation.addedNodes[j];
	                if (change.removed.has(node)) {
	                    change.removed.delete(node);
	                    change.maybeMoved.set(node, true);
	                } else {
	                    change.added.set(node, true);
	                }
	            }
	        }
	    };

	    MutationProjection.prototype.wasReordered = function (node) {
	        if (!this.treeChanges.anyParentsChanged)
	            return false;

	        this.processChildlistChanges();

	        var parentNode = node.parentNode;
	        var nodeChange = this.treeChanges.get(node);
	        if (nodeChange && nodeChange.oldParentNode)
	            parentNode = nodeChange.oldParentNode;

	        var change = this.childListChangeMap.get(parentNode);
	        if (!change)
	            return false;

	        if (change.moved)
	            return change.moved.get(node);

	        change.moved = new NodeMap();
	        var pendingMoveDecision = new NodeMap();

	        function isMoved(node) {
	            if (!node)
	                return false;
	            if (!change.maybeMoved.has(node))
	                return false;

	            var didMove = change.moved.get(node);
	            if (didMove !== undefined)
	                return didMove;

	            if (pendingMoveDecision.has(node)) {
	                didMove = true;
	            } else {
	                pendingMoveDecision.set(node, true);
	                didMove = getPrevious(node) !== getOldPrevious(node);
	            }

	            if (pendingMoveDecision.has(node)) {
	                pendingMoveDecision.delete(node);
	                change.moved.set(node, didMove);
	            } else {
	                didMove = change.moved.get(node);
	            }

	            return didMove;
	        }

	        var oldPreviousCache = new NodeMap();
	        function getOldPrevious(node) {
	            var oldPrevious = oldPreviousCache.get(node);
	            if (oldPrevious !== undefined)
	                return oldPrevious;

	            oldPrevious = change.oldPrevious.get(node);
	            while (oldPrevious && (change.removed.has(oldPrevious) || isMoved(oldPrevious))) {
	                oldPrevious = getOldPrevious(oldPrevious);
	            }

	            if (oldPrevious === undefined)
	                oldPrevious = node.previousSibling;
	            oldPreviousCache.set(node, oldPrevious);

	            return oldPrevious;
	        }

	        var previousCache = new NodeMap();
	        function getPrevious(node) {
	            if (previousCache.has(node))
	                return previousCache.get(node);

	            var previous = node.previousSibling;
	            while (previous && (change.added.has(previous) || isMoved(previous)))
	                previous = previous.previousSibling;

	            previousCache.set(node, previous);
	            return previous;
	        }

	        change.maybeMoved.keys().forEach(isMoved);
	        return change.moved.get(node);
	    };
	    return MutationProjection;
	})();

	var Summary = (function () {
	    function Summary(projection, query) {
	        var _this = this;
	        this.projection = projection;
	        this.added = [];
	        this.removed = [];
	        this.reparented = query.all || query.element ? [] : undefined;
	        this.reordered = query.all ? [] : undefined;

	        projection.getChanged(this, query.elementFilter, query.characterData);

	        if (query.all || query.attribute || query.attributeList) {
	            var filter = query.attribute ? [query.attribute] : query.attributeList;
	            var attributeChanged = projection.attributeChangedNodes(filter);

	            if (query.attribute) {
	                this.valueChanged = attributeChanged[query.attribute] || [];
	            } else {
	                this.attributeChanged = attributeChanged;
	                if (query.attributeList) {
	                    query.attributeList.forEach(function (attrName) {
	                        if (!_this.attributeChanged.hasOwnProperty(attrName))
	                            _this.attributeChanged[attrName] = [];
	                    });
	                }
	            }
	        }

	        if (query.all || query.characterData) {
	            var characterDataChanged = projection.getCharacterDataChanged();

	            if (query.characterData)
	                this.valueChanged = characterDataChanged;
	            else
	                this.characterDataChanged = characterDataChanged;
	        }

	        if (this.reordered)
	            this.getOldPreviousSibling = projection.getOldPreviousSibling.bind(projection);
	    }
	    Summary.prototype.getOldParentNode = function (node) {
	        return this.projection.getOldParentNode(node);
	    };

	    Summary.prototype.getOldAttribute = function (node, name) {
	        return this.projection.getOldAttribute(node, name);
	    };

	    Summary.prototype.getOldCharacterData = function (node) {
	        return this.projection.getOldCharacterData(node);
	    };

	    Summary.prototype.getOldPreviousSibling = function (node) {
	        return this.projection.getOldPreviousSibling(node);
	    };
	    return Summary;
	})();

	// TODO(rafaelw): Allow ':' and '.' as valid name characters.
	var validNameInitialChar = /[a-zA-Z_]+/;
	var validNameNonInitialChar = /[a-zA-Z0-9_\-]+/;

	// TODO(rafaelw): Consider allowing backslash in the attrValue.
	// TODO(rafaelw): There's got a to be way to represent this state machine
	// more compactly???
	function escapeQuotes(value) {
	    return '"' + value.replace(/"/, '\\\"') + '"';
	}

	var Qualifier = (function () {
	    function Qualifier() {
	    }
	    Qualifier.prototype.matches = function (oldValue) {
	        if (oldValue === null)
	            return false;

	        if (this.attrValue === undefined)
	            return true;

	        if (!this.contains)
	            return this.attrValue == oldValue;

	        var tokens = oldValue.split(' ');
	        for (var i = 0; i < tokens.length; i++) {
	            if (this.attrValue === tokens[i])
	                return true;
	        }

	        return false;
	    };

	    Qualifier.prototype.toString = function () {
	        if (this.attrName === 'class' && this.contains)
	            return '.' + this.attrValue;

	        if (this.attrName === 'id' && !this.contains)
	            return '#' + this.attrValue;

	        if (this.contains)
	            return '[' + this.attrName + '~=' + escapeQuotes(this.attrValue) + ']';

	        if ('attrValue' in this)
	            return '[' + this.attrName + '=' + escapeQuotes(this.attrValue) + ']';

	        return '[' + this.attrName + ']';
	    };
	    return Qualifier;
	})();

	var Selector = (function () {
	    function Selector() {
	        this.uid = Selector.nextUid++;
	        this.qualifiers = [];
	    }
	    Object.defineProperty(Selector.prototype, "caseInsensitiveTagName", {
	        get: function () {
	            return this.tagName.toUpperCase();
	        },
	        enumerable: true,
	        configurable: true
	    });

	    Object.defineProperty(Selector.prototype, "selectorString", {
	        get: function () {
	            return this.tagName + this.qualifiers.join('');
	        },
	        enumerable: true,
	        configurable: true
	    });

	    Selector.prototype.isMatching = function (el) {
	        return el[Selector.matchesSelector](this.selectorString);
	    };

	    Selector.prototype.wasMatching = function (el, change, isMatching) {
	        if (!change || !change.attributes)
	            return isMatching;

	        var tagName = change.isCaseInsensitive ? this.caseInsensitiveTagName : this.tagName;
	        if (tagName !== '*' && tagName !== el.tagName)
	            return false;

	        var attributeOldValues = [];
	        var anyChanged = false;
	        for (var i = 0; i < this.qualifiers.length; i++) {
	            var qualifier = this.qualifiers[i];
	            var oldValue = change.getAttributeOldValue(qualifier.attrName);
	            attributeOldValues.push(oldValue);
	            anyChanged = anyChanged || (oldValue !== undefined);
	        }

	        if (!anyChanged)
	            return isMatching;

	        for (var i = 0; i < this.qualifiers.length; i++) {
	            var qualifier = this.qualifiers[i];
	            var oldValue = attributeOldValues[i];
	            if (oldValue === undefined)
	                oldValue = el.getAttribute(qualifier.attrName);
	            if (!qualifier.matches(oldValue))
	                return false;
	        }

	        return true;
	    };

	    Selector.prototype.matchabilityChange = function (el, change) {
	        var isMatching = this.isMatching(el);
	        if (isMatching)
	            return this.wasMatching(el, change, isMatching) ? 2 /* STAYED_IN */ : 1 /* ENTERED */;
	        else
	            return this.wasMatching(el, change, isMatching) ? 5 /* EXITED */ : 0 /* STAYED_OUT */;
	    };

	    Selector.parseSelectors = function (input) {
	        var selectors = [];
	        var currentSelector;
	        var currentQualifier;

	        function newSelector() {
	            if (currentSelector) {
	                if (currentQualifier) {
	                    currentSelector.qualifiers.push(currentQualifier);
	                    currentQualifier = undefined;
	                }

	                selectors.push(currentSelector);
	            }
	            currentSelector = new Selector();
	        }

	        function newQualifier() {
	            if (currentQualifier)
	                currentSelector.qualifiers.push(currentQualifier);

	            currentQualifier = new Qualifier();
	        }

	        var WHITESPACE = /\s/;
	        var valueQuoteChar;
	        var SYNTAX_ERROR = 'Invalid or unsupported selector syntax.';

	        var SELECTOR = 1;
	        var TAG_NAME = 2;
	        var QUALIFIER = 3;
	        var QUALIFIER_NAME_FIRST_CHAR = 4;
	        var QUALIFIER_NAME = 5;
	        var ATTR_NAME_FIRST_CHAR = 6;
	        var ATTR_NAME = 7;
	        var EQUIV_OR_ATTR_QUAL_END = 8;
	        var EQUAL = 9;
	        var ATTR_QUAL_END = 10;
	        var VALUE_FIRST_CHAR = 11;
	        var VALUE = 12;
	        var QUOTED_VALUE = 13;
	        var SELECTOR_SEPARATOR = 14;

	        var state = SELECTOR;
	        var i = 0;
	        while (i < input.length) {
	            var c = input[i++];

	            switch (state) {
	                case SELECTOR:
	                    if (c.match(validNameInitialChar)) {
	                        newSelector();
	                        currentSelector.tagName = c;
	                        state = TAG_NAME;
	                        break;
	                    }

	                    if (c == '*') {
	                        newSelector();
	                        currentSelector.tagName = '*';
	                        state = QUALIFIER;
	                        break;
	                    }

	                    if (c == '.') {
	                        newSelector();
	                        newQualifier();
	                        currentSelector.tagName = '*';
	                        currentQualifier.attrName = 'class';
	                        currentQualifier.contains = true;
	                        state = QUALIFIER_NAME_FIRST_CHAR;
	                        break;
	                    }
	                    if (c == '#') {
	                        newSelector();
	                        newQualifier();
	                        currentSelector.tagName = '*';
	                        currentQualifier.attrName = 'id';
	                        state = QUALIFIER_NAME_FIRST_CHAR;
	                        break;
	                    }
	                    if (c == '[') {
	                        newSelector();
	                        newQualifier();
	                        currentSelector.tagName = '*';
	                        currentQualifier.attrName = '';
	                        state = ATTR_NAME_FIRST_CHAR;
	                        break;
	                    }

	                    if (c.match(WHITESPACE))
	                        break;

	                    throw Error(SYNTAX_ERROR);

	                case TAG_NAME:
	                    if (c.match(validNameNonInitialChar)) {
	                        currentSelector.tagName += c;
	                        break;
	                    }

	                    if (c == '.') {
	                        newQualifier();
	                        currentQualifier.attrName = 'class';
	                        currentQualifier.contains = true;
	                        state = QUALIFIER_NAME_FIRST_CHAR;
	                        break;
	                    }
	                    if (c == '#') {
	                        newQualifier();
	                        currentQualifier.attrName = 'id';
	                        state = QUALIFIER_NAME_FIRST_CHAR;
	                        break;
	                    }
	                    if (c == '[') {
	                        newQualifier();
	                        currentQualifier.attrName = '';
	                        state = ATTR_NAME_FIRST_CHAR;
	                        break;
	                    }

	                    if (c.match(WHITESPACE)) {
	                        state = SELECTOR_SEPARATOR;
	                        break;
	                    }

	                    if (c == ',') {
	                        state = SELECTOR;
	                        break;
	                    }

	                    throw Error(SYNTAX_ERROR);

	                case QUALIFIER:
	                    if (c == '.') {
	                        newQualifier();
	                        currentQualifier.attrName = 'class';
	                        currentQualifier.contains = true;
	                        state = QUALIFIER_NAME_FIRST_CHAR;
	                        break;
	                    }
	                    if (c == '#') {
	                        newQualifier();
	                        currentQualifier.attrName = 'id';
	                        state = QUALIFIER_NAME_FIRST_CHAR;
	                        break;
	                    }
	                    if (c == '[') {
	                        newQualifier();
	                        currentQualifier.attrName = '';
	                        state = ATTR_NAME_FIRST_CHAR;
	                        break;
	                    }

	                    if (c.match(WHITESPACE)) {
	                        state = SELECTOR_SEPARATOR;
	                        break;
	                    }

	                    if (c == ',') {
	                        state = SELECTOR;
	                        break;
	                    }

	                    throw Error(SYNTAX_ERROR);

	                case QUALIFIER_NAME_FIRST_CHAR:
	                    if (c.match(validNameInitialChar)) {
	                        currentQualifier.attrValue = c;
	                        state = QUALIFIER_NAME;
	                        break;
	                    }

	                    throw Error(SYNTAX_ERROR);

	                case QUALIFIER_NAME:
	                    if (c.match(validNameNonInitialChar)) {
	                        currentQualifier.attrValue += c;
	                        break;
	                    }

	                    if (c == '.') {
	                        newQualifier();
	                        currentQualifier.attrName = 'class';
	                        currentQualifier.contains = true;
	                        state = QUALIFIER_NAME_FIRST_CHAR;
	                        break;
	                    }
	                    if (c == '#') {
	                        newQualifier();
	                        currentQualifier.attrName = 'id';
	                        state = QUALIFIER_NAME_FIRST_CHAR;
	                        break;
	                    }
	                    if (c == '[') {
	                        newQualifier();
	                        state = ATTR_NAME_FIRST_CHAR;
	                        break;
	                    }

	                    if (c.match(WHITESPACE)) {
	                        state = SELECTOR_SEPARATOR;
	                        break;
	                    }
	                    if (c == ',') {
	                        state = SELECTOR;
	                        break;
	                    }

	                    throw Error(SYNTAX_ERROR);

	                case ATTR_NAME_FIRST_CHAR:
	                    if (c.match(validNameInitialChar)) {
	                        currentQualifier.attrName = c;
	                        state = ATTR_NAME;
	                        break;
	                    }

	                    if (c.match(WHITESPACE))
	                        break;

	                    throw Error(SYNTAX_ERROR);

	                case ATTR_NAME:
	                    if (c.match(validNameNonInitialChar)) {
	                        currentQualifier.attrName += c;
	                        break;
	                    }

	                    if (c.match(WHITESPACE)) {
	                        state = EQUIV_OR_ATTR_QUAL_END;
	                        break;
	                    }

	                    if (c == '~') {
	                        currentQualifier.contains = true;
	                        state = EQUAL;
	                        break;
	                    }

	                    if (c == '=') {
	                        currentQualifier.attrValue = '';
	                        state = VALUE_FIRST_CHAR;
	                        break;
	                    }

	                    if (c == ']') {
	                        state = QUALIFIER;
	                        break;
	                    }

	                    throw Error(SYNTAX_ERROR);

	                case EQUIV_OR_ATTR_QUAL_END:
	                    if (c == '~') {
	                        currentQualifier.contains = true;
	                        state = EQUAL;
	                        break;
	                    }

	                    if (c == '=') {
	                        currentQualifier.attrValue = '';
	                        state = VALUE_FIRST_CHAR;
	                        break;
	                    }

	                    if (c == ']') {
	                        state = QUALIFIER;
	                        break;
	                    }

	                    if (c.match(WHITESPACE))
	                        break;

	                    throw Error(SYNTAX_ERROR);

	                case EQUAL:
	                    if (c == '=') {
	                        currentQualifier.attrValue = '';
	                        state = VALUE_FIRST_CHAR;
	                        break;
	                    }

	                    throw Error(SYNTAX_ERROR);

	                case ATTR_QUAL_END:
	                    if (c == ']') {
	                        state = QUALIFIER;
	                        break;
	                    }

	                    if (c.match(WHITESPACE))
	                        break;

	                    throw Error(SYNTAX_ERROR);

	                case VALUE_FIRST_CHAR:
	                    if (c.match(WHITESPACE))
	                        break;

	                    if (c == '"' || c == "'") {
	                        valueQuoteChar = c;
	                        state = QUOTED_VALUE;
	                        break;
	                    }

	                    currentQualifier.attrValue += c;
	                    state = VALUE;
	                    break;

	                case VALUE:
	                    if (c.match(WHITESPACE)) {
	                        state = ATTR_QUAL_END;
	                        break;
	                    }
	                    if (c == ']') {
	                        state = QUALIFIER;
	                        break;
	                    }
	                    if (c == "'" || c == '"')
	                        throw Error(SYNTAX_ERROR);

	                    currentQualifier.attrValue += c;
	                    break;

	                case QUOTED_VALUE:
	                    if (c == valueQuoteChar) {
	                        state = ATTR_QUAL_END;
	                        break;
	                    }

	                    currentQualifier.attrValue += c;
	                    break;

	                case SELECTOR_SEPARATOR:
	                    if (c.match(WHITESPACE))
	                        break;

	                    if (c == ',') {
	                        state = SELECTOR;
	                        break;
	                    }

	                    throw Error(SYNTAX_ERROR);
	            }
	        }

	        switch (state) {
	            case SELECTOR:
	            case TAG_NAME:
	            case QUALIFIER:
	            case QUALIFIER_NAME:
	            case SELECTOR_SEPARATOR:
	                // Valid end states.
	                newSelector();
	                break;
	            default:
	                throw Error(SYNTAX_ERROR);
	        }

	        if (!selectors.length)
	            throw Error(SYNTAX_ERROR);

	        return selectors;
	    };
	    Selector.nextUid = 1;
	    Selector.matchesSelector = (function () {
	        var element = document.createElement('div');
	        if (typeof element['webkitMatchesSelector'] === 'function')
	            return 'webkitMatchesSelector';
	        if (typeof element['mozMatchesSelector'] === 'function')
	            return 'mozMatchesSelector';
	        if (typeof element['msMatchesSelector'] === 'function')
	            return 'msMatchesSelector';

	        return 'matchesSelector';
	    })();
	    return Selector;
	})();

	var attributeFilterPattern = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/;

	function validateAttribute(attribute) {
	    if (typeof attribute != 'string')
	        throw Error('Invalid request opion. attribute must be a non-zero length string.');

	    attribute = attribute.trim();

	    if (!attribute)
	        throw Error('Invalid request opion. attribute must be a non-zero length string.');

	    if (!attribute.match(attributeFilterPattern))
	        throw Error('Invalid request option. invalid attribute name: ' + attribute);

	    return attribute;
	}

	function validateElementAttributes(attribs) {
	    if (!attribs.trim().length)
	        throw Error('Invalid request option: elementAttributes must contain at least one attribute.');

	    var lowerAttributes = {};
	    var attributes = {};

	    var tokens = attribs.split(/\s+/);
	    for (var i = 0; i < tokens.length; i++) {
	        var name = tokens[i];
	        if (!name)
	            continue;

	        var name = validateAttribute(name);
	        var nameLower = name.toLowerCase();
	        if (lowerAttributes[nameLower])
	            throw Error('Invalid request option: observing multiple case variations of the same attribute is not supported.');

	        attributes[name] = true;
	        lowerAttributes[nameLower] = true;
	    }

	    return Object.keys(attributes);
	}

	function elementFilterAttributes(selectors) {
	    var attributes = {};

	    selectors.forEach(function (selector) {
	        selector.qualifiers.forEach(function (qualifier) {
	            attributes[qualifier.attrName] = true;
	        });
	    });

	    return Object.keys(attributes);
	}

	var MutationSummary = (function () {
	    function MutationSummary(opts) {
	        var _this = this;
	        this.connected = false;
	        this.options = MutationSummary.validateOptions(opts);
	        this.observerOptions = MutationSummary.createObserverOptions(this.options.queries);
	        this.root = this.options.rootNode;
	        this.callback = this.options.callback;

	        this.elementFilter = Array.prototype.concat.apply([], this.options.queries.map(function (query) {
	            return query.elementFilter ? query.elementFilter : [];
	        }));
	        if (!this.elementFilter.length)
	            this.elementFilter = undefined;

	        this.calcReordered = this.options.queries.some(function (query) {
	            return query.all;
	        });

	        this.queryValidators = []; // TODO(rafaelw): Shouldn't always define this.
	        if (MutationSummary.createQueryValidator) {
	            this.queryValidators = this.options.queries.map(function (query) {
	                return MutationSummary.createQueryValidator(_this.root, query);
	            });
	        }

	        this.observer = new MutationObserverCtor(function (mutations) {
	            _this.observerCallback(mutations);
	        });

	        this.reconnect();
	    }
	    MutationSummary.createObserverOptions = function (queries) {
	        var observerOptions = {
	            childList: true,
	            subtree: true
	        };

	        var attributeFilter;
	        function observeAttributes(attributes) {
	            if (observerOptions.attributes && !attributeFilter)
	                return;

	            observerOptions.attributes = true;
	            observerOptions.attributeOldValue = true;

	            if (!attributes) {
	                // observe all.
	                attributeFilter = undefined;
	                return;
	            }

	            // add to observed.
	            attributeFilter = attributeFilter || {};
	            attributes.forEach(function (attribute) {
	                attributeFilter[attribute] = true;
	                attributeFilter[attribute.toLowerCase()] = true;
	            });
	        }

	        queries.forEach(function (query) {
	            if (query.characterData) {
	                observerOptions.characterData = true;
	                observerOptions.characterDataOldValue = true;
	                return;
	            }

	            if (query.all) {
	                observeAttributes();
	                observerOptions.characterData = true;
	                observerOptions.characterDataOldValue = true;
	                return;
	            }

	            if (query.attribute) {
	                observeAttributes([query.attribute.trim()]);
	                return;
	            }

	            var attributes = elementFilterAttributes(query.elementFilter).concat(query.attributeList || []);
	            if (attributes.length)
	                observeAttributes(attributes);
	        });

	        if (attributeFilter)
	            observerOptions.attributeFilter = Object.keys(attributeFilter);

	        return observerOptions;
	    };

	    MutationSummary.validateOptions = function (options) {
	        for (var prop in options) {
	            if (!(prop in MutationSummary.optionKeys))
	                throw Error('Invalid option: ' + prop);
	        }

	        if (typeof options.callback !== 'function')
	            throw Error('Invalid options: callback is required and must be a function');

	        if (!options.queries || !options.queries.length)
	            throw Error('Invalid options: queries must contain at least one query request object.');

	        var opts = {
	            callback: options.callback,
	            rootNode: options.rootNode || document,
	            observeOwnChanges: !!options.observeOwnChanges,
	            oldPreviousSibling: !!options.oldPreviousSibling,
	            queries: []
	        };

	        for (var i = 0; i < options.queries.length; i++) {
	            var request = options.queries[i];

	            // all
	            if (request.all) {
	                if (Object.keys(request).length > 1)
	                    throw Error('Invalid request option. all has no options.');

	                opts.queries.push({ all: true });
	                continue;
	            }

	            // attribute
	            if ('attribute' in request) {
	                var query = {
	                    attribute: validateAttribute(request.attribute)
	                };

	                query.elementFilter = Selector.parseSelectors('*[' + query.attribute + ']');

	                if (Object.keys(request).length > 1)
	                    throw Error('Invalid request option. attribute has no options.');

	                opts.queries.push(query);
	                continue;
	            }

	            // element
	            if ('element' in request) {
	                var requestOptionCount = Object.keys(request).length;
	                var query = {
	                    element: request.element,
	                    elementFilter: Selector.parseSelectors(request.element)
	                };

	                if (request.hasOwnProperty('elementAttributes')) {
	                    query.attributeList = validateElementAttributes(request.elementAttributes);
	                    requestOptionCount--;
	                }

	                if (requestOptionCount > 1)
	                    throw Error('Invalid request option. element only allows elementAttributes option.');

	                opts.queries.push(query);
	                continue;
	            }

	            // characterData
	            if (request.characterData) {
	                if (Object.keys(request).length > 1)
	                    throw Error('Invalid request option. characterData has no options.');

	                opts.queries.push({ characterData: true });
	                continue;
	            }

	            throw Error('Invalid request option. Unknown query request.');
	        }

	        return opts;
	    };

	    MutationSummary.prototype.createSummaries = function (mutations) {
	        if (!mutations || !mutations.length)
	            return [];

	        var projection = new MutationProjection(this.root, mutations, this.elementFilter, this.calcReordered, this.options.oldPreviousSibling);

	        var summaries = [];
	        for (var i = 0; i < this.options.queries.length; i++) {
	            summaries.push(new Summary(projection, this.options.queries[i]));
	        }

	        return summaries;
	    };

	    MutationSummary.prototype.checkpointQueryValidators = function () {
	        this.queryValidators.forEach(function (validator) {
	            if (validator)
	                validator.recordPreviousState();
	        });
	    };

	    MutationSummary.prototype.runQueryValidators = function (summaries) {
	        this.queryValidators.forEach(function (validator, index) {
	            if (validator)
	                validator.validate(summaries[index]);
	        });
	    };

	    MutationSummary.prototype.changesToReport = function (summaries) {
	        return summaries.some(function (summary) {
	            var summaryProps = [
	                'added', 'removed', 'reordered', 'reparented',
	                'valueChanged', 'characterDataChanged'];
	            if (summaryProps.some(function (prop) {
	                return summary[prop] && summary[prop].length;
	            }))
	                return true;

	            if (summary.attributeChanged) {
	                var attrNames = Object.keys(summary.attributeChanged);
	                var attrsChanged = attrNames.some(function (attrName) {
	                    return !!summary.attributeChanged[attrName].length;
	                });
	                if (attrsChanged)
	                    return true;
	            }
	            return false;
	        });
	    };

	    MutationSummary.prototype.observerCallback = function (mutations) {
	        if (!this.options.observeOwnChanges)
	            this.observer.disconnect();

	        var summaries = this.createSummaries(mutations);
	        this.runQueryValidators(summaries);

	        if (this.options.observeOwnChanges)
	            this.checkpointQueryValidators();

	        if (this.changesToReport(summaries))
	            this.callback(summaries);

	        // disconnect() may have been called during the callback.
	        if (!this.options.observeOwnChanges && this.connected) {
	            this.checkpointQueryValidators();
	            this.observer.observe(this.root, this.observerOptions);
	        }
	    };

	    MutationSummary.prototype.reconnect = function () {
	        if (this.connected)
	            throw Error('Already connected');

	        this.observer.observe(this.root, this.observerOptions);
	        this.connected = true;
	        this.checkpointQueryValidators();
	    };

	    MutationSummary.prototype.takeSummaries = function () {
	        if (!this.connected)
	            throw Error('Not connected');

	        var summaries = this.createSummaries(this.observer.takeRecords());
	        return this.changesToReport(summaries) ? summaries : undefined;
	    };

	    MutationSummary.prototype.disconnect = function () {
	        var summaries = this.takeSummaries();
	        this.observer.disconnect();
	        this.connected = false;
	        return summaries;
	    };
	    MutationSummary.NodeMap = NodeMap;
	    MutationSummary.parseElementFilter = Selector.parseSelectors;

	    MutationSummary.optionKeys = {
	        'callback': true,
	        'queries': true,
	        'rootNode': true,
	        'oldPreviousSibling': true,
	        'observeOwnChanges': true
	    };
	    return MutationSummary;
	})();

	module.exports = MutationSummary }

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(7);

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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var baseCastPath = __webpack_require__(8),
	    isKey = __webpack_require__(18);

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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(9),
	    stringToPath = __webpack_require__(10);

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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(11);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(12),
	    isSymbol = __webpack_require__(16);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(13);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(15);

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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module), (function() { return this; }())))

/***/ },
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(17);

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
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(9);

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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var createCaseFirst = __webpack_require__(20);

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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var stringToArray = __webpack_require__(21),
	    toString = __webpack_require__(11);

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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var createCaseFirst = __webpack_require__(20);

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
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

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


	var _get = __webpack_require__(6);

	// Actual activate element class

	var SugarRadioboxElement = function (_SugarElement) {
		_inherits(SugarRadioboxElement, _SugarElement);

		/**
	  * Setup
	  */

		SugarRadioboxElement.setup = function setup(type, settings) {
			_sugarElement2.default.setup('sActivate', type, settings);
		};

		/**
	  * Constructor
	  */


		function SugarRadioboxElement(elm) {
			var settings = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, SugarRadioboxElement);

			// init

			var _this = _possibleConstructorReturn(this, _SugarElement.call(this, 'sRadiobox', elm, {}, settings));

			_this.init();
			return _this;
		}

		/**
	  * Init
	  */


		SugarRadioboxElement.prototype.init = function init() {

			// try to get the id or name of the input
			var input_for = this.elm.id || this.elm.name;

			// append an empty element after the input to style it
			var styleNode = document.createElement('div');
			styleNode.className = 's-radiobox';
			// if (input_for) {
			// 	styleNode.setAttribute('for', input_for);
			// }
			this.elm.parentNode.insertBefore(styleNode, this.elm.nextSibling);
		};

		return SugarRadioboxElement;
	}(_sugarElement2.default);

	_sugarDom2.default.onInserted('input[type="checkbox"],input[type="radio"]', function (elm) {
		new SugarRadioboxElement(elm);
	});
	// sDom.domReady(() => {
	// 	[].forEach.call(document.body.querySelectorAll('input[type="checkbox"],input[type="radio"]'), (elm) => {
	// 		new SugarRadioboxElement(elm);
	// 	});
	// });

	// expose in window.sugar
	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.RadioboxElement = SugarRadioboxElement;

	// export modules
	module.exports = {
		RadioboxElement: SugarRadioboxElement
	};

/***/ }
/******/ ])
});
;