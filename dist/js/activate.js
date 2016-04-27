(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["activate"] = factory();
	else
		root["activate"] = factory();
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

	__webpack_require__(1);
	module.exports = __webpack_require__(57);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _sComponent = __webpack_require__(2);

	var _sComponent2 = _interopRequireDefault(_sComponent);

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


	// save all the activate elements
	if (!window._sActivateStack) {
		window._sActivateStack = {};
	}

	// Actual activate element class

	var SActivateElement = function (_SComponent) {
		_inherits(SActivateElement, _SComponent);

		/**
	  * Setup
	  */

		SActivateElement.setup = function setup(type, settings) {
			_sComponent2.default.setup('sActivate', type, settings);
		};

		/**
	  * Constructor
	  */


		function SActivateElement(elm) {
			var settings = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

			_classCallCheck(this, SActivateElement);

			var _this = _possibleConstructorReturn(this, _SComponent.call(this, 'sActivate', elm, {
				activeClass: 'active',
				history: true,
				anchor: true,
				toggle: false,
				trigger: 'click',
				unactivateTrigger: null,
				unactivateTimeout: 200
			}, settings));

			_this._inited = true;
			_this._tabs = {};

			// init
			_this.init();
			return _this;
		}

		/**
	  * Init
	  */


		SActivateElement.prototype.init = function init() {
			var _this2 = this;

			if (this.inited) {
				return;
			}
			this.inited = true;
			var group = this.dataset('sActivateGroup');

			// save in stack
			window._sActivateStack[this.dataset('sActivate')] = this;

			// update references
			this.update();

			// handle history if needed
			if (this.settings.history) {
				this._handleHistory();
			}

			// managing group
			if (!group) {
				[].forEach.call(this.elm.parentNode.childNodes, function (sibling) {
					if (!_this2.dataset('sActivateGroup')) {
						var sActivate = _this2.dataset('sActivate', null, sibling);
						if (sActivate) {
							var sibling_grp = _this2.dataset('sActivateGroup', null, sibling);
							if (sibling_grp && sibling.sActivateGeneratedGroup) {
								_this2.dataset('sActivateGroup', sibling_grp);
							}
						}
					}
				});

				// if we don't have any group yet
				if (!this.dataset('sActivateGroup')) {
					this.dataset('sActivateGroup', 'group-' + Math.round(Math.random() * 99999999));
					this.elm.sActivateGeneratedGroup = true;
				}
			}

			// check if we are in another s-activate element
			var closest = this._getClosestActivate();
			if (closest) {
				// save the closest content reference
				this.parentActivate = document.body.querySelector('[data-s-activate="' + closest.id + '"]');
			}

			// listen for click
			this.elm.addEventListener(this.settings.trigger, function (e) {
				// clear unactivate timeout
				clearTimeout(_this2._unactivateSetTimeout);
				// if toggle
				if (_this2.settings.toggle && _this2.isActive()) {
					// unactivate
					_this2.unactivate();
					// check if has a hash
					if (_this2.settings.history) {
						window.history.back();
					}
				} else {
					if (_this2.settings.history) {
						// simply activate again if the same id that anchor
						// this can happened when an element has history to false
						if (document.location.hash && document.location.hash.substr(1) == _this2.dataset('sActivate')) {
							_this2._activate();
						} else {
							// simply change the hash
							// the event listener will take care of activate the
							// good element
							document.location.hash = _this2.dataset('sActivate');
						}
					} else {
						// activate the element
						_this2._activate();
					}
				}
			});
			// check if has an unactivate trigger
			var unactivate_trigger = this.settings.unactivateTrigger;
			if (unactivate_trigger) {
				this.elm.addEventListener(unactivate_trigger, function (e) {
					_this2._unactivateSetTimeout = setTimeout(function () {
						_this2.unactivate();
					}, _this2.settings.unactivateTimeout);
				});
				if (unactivate_trigger == 'mouseleave' || unactivate_trigger == 'mouseout') {
					[].forEach.call(this.targets, function (target) {
						target.addEventListener('mouseenter', function (e) {
							// clear the unactivate timeout
							clearTimeout(_this2._unactivateSetTimeout);
						});
						target.addEventListener(unactivate_trigger, function (e) {
							_this2._unactivateSetTimeout = setTimeout(function () {
								_this2.unactivate();
							}, _this2.settings.unactivateTimeout);
						});
					});
				}
			}

			// if the element has the active class
			if (this.elm.classList.contains('active')) {
				this._activate();
			}

			// if need to handle anchor
			if (this.settings.anchor) {
				var hash = document.location.hash;
				if (hash) {
					hash = hash.substr(1);
					if (hash == this.dataset('sActivate')) {
						this._activate();
					}
				}
			}
		};

		/**
	  * Check if is active
	  */


		SActivateElement.prototype.isActive = function isActive() {
			return this.elm.classList.contains('active');
		};

		/**
	  * Activate the element
	  */


		SActivateElement.prototype._activate = function _activate() {
			// unactive all group elements
			var grp = this.dataset('sActivateGroup');
			[].forEach.call(document.body.querySelectorAll('[data-s-activate-group="' + grp + '"]'), function (group_elm) {
				// get the api
				var api = group_elm.sActivate;
				// unactive element
				if (api) {
					api.unactivate();
				}
			});

			// activate the element
			this.elm.classList.add('active');

			// activate all the targets
			[].forEach.call(this.targets, function (target_elm) {
				// remove the active class on target
				target_elm.classList.add('active');
			});

			// if has a perent, activate it
			if (this.parentActivate) {
				var parent_api = this.parentActivate.sActivate;
				if (parent_api) {
					parent_api._activate();
				}
			}
		};

		/**
	  * Handle history
	  */


		SActivateElement.prototype._handleHistory = function _handleHistory() {
			var _this3 = this;

			window.addEventListener('hashchange', function (e) {
				var hash = document.location.hash;
				if (hash) {
					hash = hash.substr(1);
					if (hash == _this3.dataset('sActivate')) {
						_this3._activate();
					}
				}
			});
		};

		/**
	  * Activate the element
	  */


		SActivateElement.prototype.activate = function activate() {
			if (this.settings.history) {
				// change hash
				document.location.hash = this.dataset('sActivate');
			} else {
				// activate simply
				this._activate();
			}
		};

		/**
	  * Unactive
	  */


		SActivateElement.prototype.unactivate = function unactivate() {
			// unactive the item itself
			this.elm.classList.remove('active');

			// unactive targets
			[].forEach.call(this.targets, function (target) {
				target.classList.remove('active');
			});
		};

		/**
	  * Update targets, etc...
	  */


		SActivateElement.prototype.update = function update() {
			var scope = arguments.length <= 0 || arguments[0] === undefined ? document.body : arguments[0];

			this.targets = scope.querySelectorAll('#' + this.dataset('sActivate'));
		};

		/**
	  * Get closest 
	  */


		SActivateElement.prototype._getClosestActivate = function _getClosestActivate() {
			var elm = this.elm.parentNode;
			while (elm && elm != document) {
				if (elm.id && window._sActivateStack[elm.id]) {
					return elm;
				}
				elm = elm.parentNode;
			}
			return false;
		};

		return SActivateElement;
	}(_sComponent2.default);

	// expose in window.sugar


	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SActivateElement = SActivateElement;

	// export
	exports.default = SActivateElement;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _sTools = __webpack_require__(3);

	var _sTools2 = _interopRequireDefault(_sTools);

	var _sString = __webpack_require__(4);

	var _sString2 = _interopRequireDefault(_sString);

	var _sDom = __webpack_require__(5);

	var _sDom2 = _interopRequireDefault(_sDom);

	var _sElement = __webpack_require__(12);

	var _sElement2 = _interopRequireDefault(_sElement);

	var _sWatchable = __webpack_require__(15);

	var _sWatchable2 = _interopRequireDefault(_sWatchable);

	var _sMixin = __webpack_require__(14);

	var _sMixin2 = _interopRequireDefault(_sMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	// store the settings for the different
	// components types
	var _sugarTypesSettings = {};

	var SComponent = function (_SElement) {
		_inherits(SComponent, _SElement);

		/**
	  * Setup
	  */

		SComponent.setup = function setup(name, type, settings) {
			if (!_sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
			_sugarTypesSettings[name][type] = settings;
		};

		/**
	  * Settings
	  */


		/**
	  * Settings values
	  */


		/**
	  * Old settings values
	  */


		/**	
	  * Constructor
	  */

		function SComponent(name, elm) {
			var default_settings = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
			var settings = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

			_classCallCheck(this, SComponent);

			// process shortcuts attributes
			// before init parent class
			// cause the parent class process
			// the attributes
			var nameDash = _sString2.default.uncamelize(name, '-');
			var isCurrentComponentSetting = false;
			var attrsToRemove = [];
			[].forEach.call(elm.attributes, function (attr) {
				// check if need to update the settings
				if (attr.name == nameDash) {
					isCurrentComponentSetting = true;
				} else {
					if (isCurrentComponentSetting && attr.name.substr(0, 1) == '-') {
						// remove the attribute and set the new complete one
						attrsToRemove.push(attr.name);
						// set the new attribute
						elm.setAttribute('' + nameDash + attr.name, attr.value);
					} else {
						// it's no more the same component
						isCurrentComponentSetting = false;
					}
				}
			});
			// remove the unwanted attributes
			attrsToRemove.forEach(function (attrName) {
				elm.removeAttribute(attrName);
			});

			// init parent


			// save element reference

			var _this = _possibleConstructorReturn(this, _SElement.call(this, elm));

			_this.settings = {};
			_this._settingsValues = {};
			_this._previousSettingsValues = {};
			_this.elm = elm;
			_this.name = name;
			_this.name_dash = nameDash;

			_this.coco = {
				hello: {
					jaja: 'youhou',
					world: 'tuptudup'
				}
			};

			// make name watchable
			// this.watchable('name');
			// this.watchable('coco.hello.world');

			var hello = _this.coco.hello;
			Object.defineProperty(_this.coco, 'hello', {
				get: function get() {
					return hello;
				},
				set: function set(value) {
					hello = value;
				}
			});

			_this.watch('coco.hello', function (newVal, oldVal) {
				console.log('YOPYOP', newVal, oldVal);
			});

			// this.watch('elm.style.display', (newVal, oldVal) => {
			// 	console.log('update elm.style.display', newVal, oldVal);
			// });
			// this.watch('elm.style.display', (newVal, oldVal) => {
			// 	console.log('NEW NEW NEW update elm.style.display', newVal, oldVal);
			// });

			// setTimeout(() => {
			// this.coco.hello = 'yooooooppppppp';
			// this.elm.style.display = 'none';
			// // console.log('new element', this.elm);
			// // console.log('new display', this.elm.style.display);
			// setTimeout(() => {
			// 	this.elm.style.display = 'block';
			// }, 4000);
			// }, 500);

			// console.log('MY COCO', this.coco);

			// // this.coco.hello = 'coucou';
			// // this.coco.hello = 'haha';

			// console.log('HHHHHH', this.coco.hello);

			// extend settings values
			_this.settings = _extends({}, default_settings, settings);

			// // preparing all the settings accessors
			// for(const name in default_settings) {
			// 	// new setting
			// 	this._newSetting(name);
			// }

			// check if the main data attribute is an object to extend the settings
			var set = _sString2.default.autoCast(_this.elm.getAttribute('data-' + _this.name_dash) || _this.elm.getAttribute(_this.name_dash));
			if (set && (typeof set === 'undefined' ? 'undefined' : _typeof(set)) == 'object') {
				_this.settings = _extends({}, _this.settings, set);
			}

			// try to find the setting with the @ sign as value
			for (var settingName in _this.settings) {
				if (_this.settings[settingName] == '@') {
					_this.settings[settingName] = set;
				}
			}

			// check if a type is defined then extend the settings
			if (!_sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
			var type = _this.settings.settings;
			if (type && _sugarTypesSettings[name][type]) {
				_this.settings = _extends({}, _this.settings, _sugarTypesSettings[name][type]);
			}

			// watch attributes to update settings accordingly

			var _loop = function _loop(_name) {
				// check if has a different value in the attributes
				// console.log('name', name);
				var attrName = _this.name + _sString2.default.upperFirst(_name);
				if (_this.attr[attrName] !== undefined) {
					_this.settings[_name] = _this.attr[attrName];
				} else {
					_this.attr[attrName] = null;
				}

				// add the property if not exist
				// if ( ! this.attr[attrName])

				// watch settings attributes
				_this.watch('attr.' + attrName, function (newVal, oldVal) {
					// update the setting
					_this.settings[_name] = newVal;
				});
			};

			for (var _name in _this.settings) {
				_loop(_name);
			}
			return _this;
		}

		/**
	  * New setting
	  */
		// _newSetting(name) {
		// 	// make only if not exist already
		// 	if (this.settings.hasOwnProperty[name]) return name;

		// 	// define new property on the attr
		// 	Object.defineProperty(this.settings, name, {
		// 		get : () => this._settingsValues[name],
		// 		set : (value) => {
		// 			// cast value
		// 			value = sString.autoCast(value);
		// 			// save the old value
		// 			// let previousValue = this._previousSettingsValues[name] = this.settings[name];
		// 			this._settingsValues[name] = value;
		// 			// notify of new value
		// 			// this.notify(`settings.${name}`, value, previousValue);
		// 			// this.notify('settings', this._settingsValues, this._previousSettingsValues);
		// 		},
		// 		enumarable : true
		// 	});
		// 	return name;
		// }


		return SComponent;
	}(_sElement2.default);

	exports.default = SComponent;

/***/ },
/* 3 */
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
		},

		/**
	  * Get an object constructor name
	  */
		constructorName: function constructorName(obj) {
			var funcNameRegex = /function (.{1,})\(/;
			var results = funcNameRegex.exec(obj.constructor.toString());
			return results && results.length > 1 ? results[1] : "";
		}

	};
	exports.default = sTools;

/***/ },
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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

	var _sWatchableAttributes = __webpack_require__(56);

	var _sWatchableAttributes2 = _interopRequireDefault(_sWatchableAttributes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	// store the settings for the different
	// components types
	var _sugarTypesSettings = {};

	var SElement = function (_SMix$in) {
		_inherits(SElement, _SMix$in);

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
	  * Constructor
	  */

		function SElement(elm) {
			_classCallCheck(this, SElement);

			// save the element reference

			var _this = _possibleConstructorReturn(this, _SMix$in.call(this));

			// init parent


			_this._watchStack = {};
			_this.elm = null;
			_this.attr = {};
			_this._attrs = {};
			_this.elm = elm;
			// process attributes
			[].forEach.call(_this.elm.attributes, function (attr) {
				_this._newAttribute(attr.name, attr.value);
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


		SElement.prototype._newAttribute = function _newAttribute(name, value) {
			var _this2 = this;

			var camelName = _sString2.default.camelize(name);

			// make only if not exist already
			if (this._attrs[name]) return camelName;
			console.log('new attributeName', camelName, value);
			this._attrs[name] = true;
			this.attr[camelName] = _sString2.default.autoCast(value);
			var val = this.attr[camelName];

			// define new property on the attr
			Object.defineProperty(this.attr, camelName, {
				get: function get() {
					return val;
				},
				set: function set(value) {
					// cast the value
					value = _sString2.default.autoCast(value);
					// protect from recursion
					if (value === val) return value;
					// save the value localy
					val = value;
					// set the new attribute on html tag
					_this2.elm.setAttribute(name, value);
				},
				enumarable: true
			});
			return camelName;
		};

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
	}((0, _sMixin2.default)(_sWatchable2.default).in(_sObject2.default));

	exports.default = SElement;

/***/ },
/* 13 */
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
/* 14 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var mix = function mix() {
		for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
			mixins[_key] = arguments[_key];
		}

		return new Mix(mixins);
	};

	var Mix = function () {
		function Mix(mixins) {
			_classCallCheck(this, Mix);

			this.mixins = mixins;
		}

		Mix.prototype.in = function _in(superclass) {
			return this.mixins.reduce(function (c, mixin) {
				return mixin(c);
			}, superclass);
		};

		return Mix;
	}();

	exports.default = mix;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _sString = __webpack_require__(4);

	var _sString2 = _interopRequireDefault(_sString);

	var _sTools = __webpack_require__(3);

	var _sTools2 = _interopRequireDefault(_sTools);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var _get = __webpack_require__(16);

	exports.default = function (superclass) {
		var _class, _temp;

		return _temp = _class = function (_superclass) {
			_inherits(SWatchable, _superclass);

			/**	
	   * Constructor
	   */


			/**
	   * Setters methods
	   */

			function SWatchable() {
				_classCallCheck(this, SWatchable);

				var _this = _possibleConstructorReturn(this, _superclass.apply(this, arguments));

				_this._watchStack = {};
				return _this;
			}

			/**
	   * Watch stack
	   */


			SWatchable.prototype._defineProp = function _defineProp(obj, property, value, objPath) {
				var _this2 = this;

				// do not define multiple time the description
				if (this._watchStack[objPath]) return;

				// const o = obj;
				// console.warn('_defineProp', o, property, value, objPath);

				var val = value;
				var descriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

				// get the setter
				var customSetter = void 0;
				for (var name in SWatchable.setters) {
					if (_sTools2.default.constructorName(obj) === name) {
						customSetter = SWatchable.setters[name];
						break;
					}
				}

				// custom setter check
				var _set = function _set(value) {
					// check if have a custom setter for this object
					if (customSetter) {
						customSetter(obj, property, value);
						val = value;
					}
					// descriptor
					else if (descriptor && descriptor.set) {
							var ret = descriptor.set(value);
							if (ret) {
								val = ret;
							} else {
								val = descriptor.get();
							}
						} else {
							val = value;
						}
				};

				// make sure we have the good descriptor
				var d = Object.getOwnPropertyDescriptor(obj, property);
				Object.defineProperty(obj, property, {
					get: function get() {
						// console.log('get', property);
						if (descriptor && descriptor.get) {
							return descriptor.get();
						}
						return val;
					},
					set: function set(v) {
						var oldValue = val;
						// internal set to use the good setter
						_set(v);
						// notify of new update
						_this2.notify(objPath, val, oldValue);
					},
					configurable: descriptor && descriptor.configurable !== undefined ? descriptor.configurable : false,
					enumarable: descriptor && descriptor.enumarable !== undefined ? descriptor.enumarable : true
				});
			};

			/**
	   * Watch something on the element
	   */


			// writable : descriptor && descriptor.writable !== undefined ? descriptor.writable : true

			SWatchable.prototype.watch = function watch(what, cb) {
				// check if the what parameter has already a descriptor
				var split = what.split('.');
				var obj = this;
				var property = null;
				if (split.length > 1) {
					property = split.pop();
					obj = _get(this, split.join('.'));
				} else {
					property = split[0];
				}
				var currentValue = null;
				currentValue = _get(this, what);

				// if is undefined, throw an error
				if (obj === undefined || currentValue === undefined) {
					throw 'It\'s not possible to watch the property ' + what + ' cause it does not exist...';
				};

				// define the property proxy		
				this._defineProp(obj, property, currentValue, what);

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

			return SWatchable;
		}(superclass), _class.setters = {
			CSSStyleDeclaration: function CSSStyleDeclaration(obj, property, value) {
				obj.setProperty(property, value);
			}
		}, _temp;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(17);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(18),
	    isKey = __webpack_require__(55);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(19),
	    stringToPath = __webpack_require__(20);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(21),
	    toString = __webpack_require__(51);

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
	var stringToPath = memoize(function(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(22);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoizing function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var mapClear = __webpack_require__(23),
	    mapDelete = __webpack_require__(36),
	    mapGet = __webpack_require__(43),
	    mapHas = __webpack_require__(46),
	    mapSet = __webpack_require__(48);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function MapCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapClear;
	MapCache.prototype['delete'] = mapDelete;
	MapCache.prototype.get = mapGet;
	MapCache.prototype.has = mapHas;
	MapCache.prototype.set = mapSet;

	module.exports = MapCache;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(24),
	    Map = __webpack_require__(32);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': Map ? new Map : [],
	    'string': new Hash
	  };
	}

	module.exports = mapClear;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(25);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @returns {Object} Returns the new hash object.
	 */
	function Hash() {}

	// Avoid inheriting from `Object.prototype` when possible.
	Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;

	module.exports = Hash;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(26);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(27);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(28),
	    isHostObject = __webpack_require__(30),
	    isObject = __webpack_require__(29),
	    toSource = __webpack_require__(31);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = isNative;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 30 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(26),
	    root = __webpack_require__(33);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(35);

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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34)(module), (function() { return this; }())))

/***/ },
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(32),
	    assocDelete = __webpack_require__(37),
	    hashDelete = __webpack_require__(40),
	    isKeyable = __webpack_require__(42);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapDelete(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
	}

	module.exports = mapDelete;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(38);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the associative array.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function assocDelete(array, key) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = array.length - 1;
	  if (index == lastIndex) {
	    array.pop();
	  } else {
	    splice.call(array, index, 1);
	  }
	  return true;
	}

	module.exports = assocDelete;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(39);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var hashHas = __webpack_require__(41);

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(hash, key) {
	  return hashHas(hash, key) && delete hash[key];
	}

	module.exports = hashDelete;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(25);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(hash, key) {
	  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
	}

	module.exports = hashHas;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return type == 'number' || type == 'boolean' ||
	    (type == 'string' && value != '__proto__') || value == null;
	}

	module.exports = isKeyable;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(32),
	    assocGet = __webpack_require__(44),
	    hashGet = __webpack_require__(45),
	    isKeyable = __webpack_require__(42);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapGet(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.get(key) : assocGet(data.map, key);
	}

	module.exports = mapGet;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(38);

	/**
	 * Gets the associative array value for `key`.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function assocGet(array, key) {
	  var index = assocIndexOf(array, key);
	  return index < 0 ? undefined : array[index][1];
	}

	module.exports = assocGet;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(25);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(hash, key) {
	  if (nativeCreate) {
	    var result = hash[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(32),
	    assocHas = __webpack_require__(47),
	    hashHas = __webpack_require__(41),
	    isKeyable = __webpack_require__(42);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapHas(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.has(key) : assocHas(data.map, key);
	}

	module.exports = mapHas;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(38);

	/**
	 * Checks if an associative array value for `key` exists.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function assocHas(array, key) {
	  return assocIndexOf(array, key) > -1;
	}

	module.exports = assocHas;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(32),
	    assocSet = __webpack_require__(49),
	    hashSet = __webpack_require__(50),
	    isKeyable = __webpack_require__(42);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapSet(key, value) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
	  } else if (Map) {
	    data.map.set(key, value);
	  } else {
	    assocSet(data.map, key, value);
	  }
	  return this;
	}

	module.exports = mapSet;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(38);

	/**
	 * Sets the associative array `key` to `value`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function assocSet(array, key, value) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    array.push([key, value]);
	  } else {
	    array[index][1] = value;
	  }
	}

	module.exports = assocSet;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(25);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function hashSet(hash, key, value) {
	  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	}

	module.exports = hashSet;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(52),
	    isSymbol = __webpack_require__(53);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
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
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toString;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(33);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(54);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
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
/* 54 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(19),
	    isSymbol = __webpack_require__(53);

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
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol') {
	    return true;
	  }
	  return !isArray(value) &&
	    (isSymbol(value) || reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	      (object != null && value in Object(object)));
	}

	module.exports = isKey;


/***/ },
/* 56 */
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _sActivateElement = __webpack_require__(1);

	var _sActivateElement2 = _interopRequireDefault(_sActivateElement);

	var _sDom = __webpack_require__(5);

	var _sDom2 = _interopRequireDefault(_sDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                           * Sugar-activate.js
	                                                                                                                                                          #
	                                                                                                                                                           * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
	                                                                                                                                                          #
	                                                                                                                                                           * @author   Olivier Bossel <olivier.bossel@gmail.com>
	                                                                                                                                                           * @created  20.01.16
	                                                                                                                                                           * @updated  20.01.16
	                                                                                                                                                           * @version  1.0.0
	                                                                                                                                                           */


	// save all the activate elements
	if (!window._sActivateStack) {
		window._sActivateStack = {};
	}

	var SActivateManager = function () {

		/**
	  * Constructor
	  */

		function SActivateManager() {
			_classCallCheck(this, SActivateManager);

			_sDom2.default.querySelectorLive('[data-s-activate]', function (element) {
				if (!element.sActivate) {
					new _sActivateElement2.default(element);
				}
			});
		}

		/**
	  * Find a special activate element
	  */


		SActivateManager.prototype.find = function find(id) {
			if (!window._sActivateStack[id]) return false;
			return window._sActivateStack[id];
		};

		/**
	  * Activate a special id
	  */


		SActivateManager.prototype.activate = function activate(id) {
			var item = this.find(id);
			if (item) item.activate();
		};

		/**
	  * Unactivate
	  */


		SActivateManager.prototype.unactivate = function unactivate(id) {
			var item = this.find(id);
			if (item) item.unactivate();
		};

		return SActivateManager;
	}();

	;

	// expose in window.sugar
	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.sActivateManager = new SActivateManager();

	// export
	exports.default = window.sugar.sActivateManager;

/***/ }
/******/ ])
});
;