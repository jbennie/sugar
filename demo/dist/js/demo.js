/******/ (function(modules) { // webpackBootstrap
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

	'use strict';

	var _TestComponent = __webpack_require__(1);

	var _TestComponent2 = _interopRequireDefault(_TestComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	setTimeout(function () {
		var comp = new _TestComponent2.default();
		console.log('comp', comp);
		document.body.appendChild(comp);
		// document.body.appendChild(document.createElement('button', 'test-component'));
	}, 2000);

	// // extends some different native constructor
	// class MyButton extends HTMLButtonElement {
	// 	constructor() {
	// 		super();
	// 		console.log('coco', this);
	// 	}
	// }
	//
	// // define it specifying what's extending
	// customElements.define('my-button', MyButton, {extends: 'button'});
	//
	// // <button is="my-button">click me</button>
	// document.body.appendChild(
	//   new MyButton
	// ).textContent = 'click me';
	// import "webcomponents.js/webcomponents-lite";

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _SWebComponent2 = __webpack_require__(2);

	var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TestComponent = function (_SWebComponent) {
		_inherits(TestComponent, _SWebComponent);

		function TestComponent() {
			_classCallCheck(this, TestComponent);

			return _possibleConstructorReturn(this, (TestComponent.__proto__ || Object.getPrototypeOf(TestComponent)).apply(this, arguments));
		}

		_createClass(TestComponent, [{
			key: 'componentWillMount',


			/**
	   * Component will mount
	  	 * @definition 		SWebComponent.componentWillMount
	   * @protected
	   */
			value: function componentWillMount() {
				_get(TestComponent.prototype.__proto__ || Object.getPrototypeOf(TestComponent.prototype), 'componentWillMount', this).call(this);
				console.log('will mount', this);
			}

			/**
	   * Mount component
	   * @definition 		SWebComponent.componentMount
	   * @protected
	   */

		}, {
			key: 'componentMount',
			value: function componentMount() {
				_get(TestComponent.prototype.__proto__ || Object.getPrototypeOf(TestComponent.prototype), 'componentMount', this).call(this);
				console.log('mount', this);
			}

			/**
	   * Component unmount
	   * @definition 		SWebComponent.componentUnmount
	   * @protected
	   */

		}, {
			key: 'componentUnmount',
			value: function componentUnmount() {
				_get(TestComponent.prototype.__proto__ || Object.getPrototypeOf(TestComponent.prototype), 'componentUnmount', this).call(this);
				console.log('unmount', this);
			}

			/**
	   * Component will receive prop
	   * @definition 		SWebComponent.componentWillReceiveProp
	   * @protected
	   */

		}, {
			key: 'componentWillReceiveProp',
			value: function componentWillReceiveProp(name, newVal, oldVal) {
				switch (name) {}
			}

			/**
	   * Render the component
	   * Here goes the code that reflect the this.props state on the actual html element
	   * @definition 		SWebComponent.render
	   * @protected
	   */

		}, {
			key: 'render',
			value: function render() {
				_get(TestComponent.prototype.__proto__ || Object.getPrototypeOf(TestComponent.prototype), 'render', this).call(this);
			}
		}], [{
			key: 'defaultCss',


			/**
	   * Css
	   * @protected
	   */
			value: function defaultCss(componentName, componentNameDash) {
				return '\n\t\t\t' + componentNameDash + ' {\n\t\t\t\tdisplay : block;\n\t\t\t}\n\t\t';
			}
		}, {
			key: 'defaultProps',


			/**
	   * Default props
	   * @definition 		SWebComponent.defaultProps
	   * @protected
	   */
			get: function get() {
				return {};
			}

			/**
	   * Physical props
	   * @definition 		SWebComponent.physicalProps
	   * @protected
	   */

		}, {
			key: 'physicalProps',
			get: function get() {
				return [];
			}
		}]);

		return TestComponent;
	}(_SWebComponent3.default);

	// customElements.define('test-component', TestComponent, {
	// 	extends : 'button'
	// });


	exports.default = TestComponent.define('test-component', TestComponent, 'button');

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _mixwith = __webpack_require__(3);

	var _SWebComponentMixin = __webpack_require__(4);

	var _SWebComponentMixin2 = _interopRequireDefault(_SWebComponentMixin);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	// if (typeof HTMLElement !== 'function'){
	//     var _HTMLElement = function(){};
	//     _HTMLElement.prototype = HTMLElement.prototype;
	//     HTMLElement = _HTMLElement;
	// }
	var SWebComponent = function (_mix$with) {
	  _inherits(SWebComponent, _mix$with);

	  function SWebComponent() {
	    _classCallCheck(this, SWebComponent);

	    return _possibleConstructorReturn(this, (SWebComponent.__proto__ || Object.getPrototypeOf(SWebComponent)).apply(this, arguments));
	  }

	  return SWebComponent;
	}((0, _mixwith.mix)(HTMLElement).with(_SWebComponentMixin2.default));

	exports.default = SWebComponent;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.mixwith = mod.exports;
	  }
	})(undefined, function (exports) {
	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  var _appliedMixin = '__mixwith_appliedMixin';

	  var apply = exports.apply = function (superclass, mixin) {
	    var application = mixin(superclass);
	    application.prototype[_appliedMixin] = unwrap(mixin);
	    return application;
	  };

	  var isApplicationOf = exports.isApplicationOf = function (proto, mixin) {
	    return proto.hasOwnProperty(_appliedMixin) && proto[_appliedMixin] === unwrap(mixin);
	  };

	  var hasMixin = exports.hasMixin = function (o, mixin) {
	    while (o != null) {
	      if (isApplicationOf(o, mixin)) return true;
	      o = Object.getPrototypeOf(o);
	    }
	    return false;
	  };

	  var _wrappedMixin = '__mixwith_wrappedMixin';

	  var wrap = exports.wrap = function (mixin, wrapper) {
	    Object.setPrototypeOf(wrapper, mixin);
	    if (!mixin[_wrappedMixin]) {
	      mixin[_wrappedMixin] = mixin;
	    }
	    return wrapper;
	  };

	  var unwrap = exports.unwrap = function (wrapper) {
	    return wrapper[_wrappedMixin] || wrapper;
	  };

	  var _cachedApplications = '__mixwith_cachedApplications';

	  var Cached = exports.Cached = function (mixin) {
	    return wrap(mixin, function (superclass) {
	      // Get or create a symbol used to look up a previous application of mixin
	      // to the class. This symbol is unique per mixin definition, so a class will have N
	      // applicationRefs if it has had N mixins applied to it. A mixin will have
	      // exactly one _cachedApplicationRef used to store its applications.

	      var cachedApplications = superclass[_cachedApplications];
	      if (!cachedApplications) {
	        cachedApplications = superclass[_cachedApplications] = new Map();
	      }

	      var application = cachedApplications.get(mixin);
	      if (!application) {
	        application = mixin(superclass);
	        cachedApplications.set(mixin, application);
	      }

	      return application;
	    });
	  };

	  var DeDupe = exports.DeDupe = function (mixin) {
	    return wrap(mixin, function (superclass) {
	      return hasMixin(superclass.prototype, mixin) ? superclass : mixin(superclass);
	    });
	  };

	  var HasInstance = exports.HasInstance = function (mixin) {
	    if (Symbol && Symbol.hasInstance && !mixin[Symbol.hasInstance]) {
	      Object.defineProperty(mixin, Symbol.hasInstance, {
	        value: function value(o) {
	          return hasMixin(o, mixin);
	        }
	      });
	    }
	    return mixin;
	  };

	  var BareMixin = exports.BareMixin = function (mixin) {
	    return wrap(mixin, function (s) {
	      return apply(s, mixin);
	    });
	  };

	  var Mixin = exports.Mixin = function (mixin) {
	    return DeDupe(Cached(BareMixin(mixin)));
	  };

	  var mix = exports.mix = function (superclass) {
	    return new MixinBuilder(superclass);
	  };

	  var MixinBuilder = function () {
	    function MixinBuilder(superclass) {
	      _classCallCheck(this, MixinBuilder);

	      this.superclass = superclass || function () {
	        function _class() {
	          _classCallCheck(this, _class);
	        }

	        return _class;
	      }();
	    }

	    _createClass(MixinBuilder, [{
	      key: 'with',
	      value: function _with() {
	        for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
	          mixins[_key] = arguments[_key];
	        }

	        return mixins.reduce(function (c, m) {
	          return m(c);
	        }, this.superclass);
	      }
	    }]);

	    return MixinBuilder;
	  }();
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
		return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _mixwith = __webpack_require__(3);

	var _autoCast = __webpack_require__(5);

	var _autoCast2 = _interopRequireDefault(_autoCast);

	var _extend2 = __webpack_require__(6);

	var _extend3 = _interopRequireDefault(_extend2);

	var _camelize = __webpack_require__(57);

	var _camelize2 = _interopRequireDefault(_camelize);

	var _upperFirst = __webpack_require__(58);

	var _upperFirst2 = _interopRequireDefault(_upperFirst);

	var _fastdom = __webpack_require__(59);

	var _fastdom2 = _interopRequireDefault(_fastdom);

	var _dispatchEvent = __webpack_require__(60);

	var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

	var _whenInViewport = __webpack_require__(63);

	var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

	var _whenVisible = __webpack_require__(64);

	var _whenVisible2 = _interopRequireDefault(_whenVisible);

	var _prependChild = __webpack_require__(71);

	var _prependChild2 = _interopRequireDefault(_prependChild);

	var _SWatcher = __webpack_require__(72);

	var _SWatcher2 = _interopRequireDefault(_SWatcher);

	var _propertyProxy = __webpack_require__(111);

	var _propertyProxy2 = _interopRequireDefault(_propertyProxy);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	// import installCE from 'document-register-element/pony'
	// installCE(global, 'force');
	__webpack_require__(112);

	if (!window.sugar) window.sugar = {};
	if (!window.sugar._webComponentsClasses) window.sugar._webComponentsClasses = {};
	if (!window.sugar._webComponentsDefaultProps) window.sugar._webComponentsDefaultProps = {};
	if (!window.sugar._webComponentsDefaultCss) window.sugar._webComponentsDefaultCss = {};

	var SWebComponentMixin = (0, _mixwith.Mixin)(function (superclass) {
		return function (_superclass) {
			_inherits(_class2, _superclass);

			_createClass(_class2, [{
				key: 'defaultProps',

				/**
	    * Get the default props for this particular instance
	    * @type  		{Object}
	    */
				get: function get() {

					// check if default props in cache to avoid multiple time
					// computing
					if (this._defaultPropsCache) return this._defaultPropsCache;

					// compute
					var props = window.sugar._webComponentsClasses[this.componentName].defaultProps;
					var comp = window.sugar._webComponentsClasses[this.componentName];
					while (comp) {
						if (comp.defaultProps) {
							props = _extends({}, comp.defaultProps, props);
						}
						if (comp._defaultProps) {
							props = _extends({}, props, comp._defaultProps);
						}
						comp = Object.getPrototypeOf(comp);
					}
					// extend with default props stored in the component default props stack by tagname
					if (window.sugar._webComponentsDefaultProps[this.componentName]) {
						props = _extends({}, props, window.sugar._webComponentsDefaultProps[this.componentName]);
					}

					// save in cache
					this._defaultPropsCache = Object.assign({}, props);

					// return props
					return props;
				}

				/**
	    * Return an array of props to set on the dom
	    * @return 		{Array}
	    */

			}, {
				key: 'physicalProps',

				/**
	    * Get physical props for this particular instance
	    * @return 		{Array} 			The physical props array
	    */
				get: function get() {

					if (this._physicalPropsCache) return this._physicalPropsCache;

					var props = window.sugar._webComponentsClasses[this.componentName].physicalProps;
					var comp = window.sugar._webComponentsClasses[this.componentName];
					while (comp) {
						if (comp.physicalProps) {
							comp.physicalProps.forEach(function (prop) {
								if (props.indexOf(prop) === -1) {
									props.push(prop);
								}
							});
						}
						comp = Object.getPrototypeOf(comp);
					}

					this._physicalPropsCache = props;

					return props;
				}

				/**
	    * Return an array of required props to init the component
	    * @return 		{Array}
	    */

			}, {
				key: 'requiredProps',

				/**
	    * Get the required props array for this particular instance
	    * @return 		{Array} 			An array of required props
	    */
				get: function get() {

					if (this._requiredPropsCache) return this._requiredPropsCache;

					var props = window.sugar._webComponentsClasses[this.componentName].requiredProps;
					var comp = window.sugar._webComponentsClasses[this.componentName];
					while (comp) {
						if (comp.requiredProps) {
							comp.requiredProps.forEach(function (prop) {
								if (props.indexOf(prop) === -1) {
									props.push(prop);
								}
							});
						}
						comp = Object.getPrototypeOf(comp);
					}

					this._requiredPropsCache = props;

					return props;
				}

				/**
	    * Specify the default css for the component
	    * @param 		{String} 		componentName 		The camelcase component name
	    * @param 		{String} 		componentNameDash 	The dashcase component name
	    * @return 		{String} 							The default css for the component
	    */

			}, {
				key: 'defaultCss',

				/**
	    * Get the default css of the component
	    * @type 		{String}
	    */
				get: function get() {

					if (this._defaultCssCache) return this._defaultCssCache;

					var css = '';
					var comp = window.sugar._webComponentsClasses[this.componentName];
					while (comp) {
						if (comp.defaultCss) {
							css += comp.defaultCss(this.componentName, this.componentNameDash);
						}
						comp = Object.getPrototypeOf(comp);
					}

					this._defaultCssCache = css;

					return css;
				}

				/**
	    * Return an array of props to set on the dom
	    * @type 		{Array}
	    */

			}, {
				key: 'mountDependencies',

				/**
	    * Get an array of promises to resolve before mounting the component.
	    * @type 		{Array<Promise>}
	    */
				get: function get() {
					var _this2 = this;

					var deps = [];
					var comp = Object.getPrototypeOf(window.sugar._webComponentsClasses[this.componentName]);
					while (comp) {
						if (comp.mountDependencies) {
							comp.mountDependencies.forEach(function (dep) {
								if (deps.indexOf(dep) === -1) {
									deps.push(dep);
								}
							});
						}
						comp = Object.getPrototypeOf(comp);
					}

					// props mount dependencies
					var propsDeps = [].concat(this.props.mountDependencies);
					var finalDeps = [];
					finalDeps = finalDeps.concat(this.props.mountDependencies);
					deps.forEach(function (dep) {
						if (typeof dep === 'function') {
							dep = dep.bind(_this2);
							dep = dep();
						}
						finalDeps.push(dep);
					});
					return finalDeps;
				}

				/**
	    * Constructor
	    */
				// constructor() {
				// 	super();
				// 	// createdCallback
				// 	this.createdCallback();
				// }

			}], [{
				key: 'define',

				/**
	    * Define the new web component
	    * @param 			{String} 			name 		The name of the component
	    * @param 			{SWebComponent} 	component 	The component class
	    * @param 			{Object|String}		ext 		An object or string of base HTMLElement to extend
	    */
				value: function define(name, component) {
					var ext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

					var componentName = (0, _upperFirst2.default)((0, _camelize2.default)(name));
					var componentNameDash = name;

					if (window.sugar._webComponentsClasses[componentName]) return;
					window.sugar._webComponentsClasses[componentName] = component;

					// register the webcomponent
					var webcomponent = void 0;
					if (window.customElements) {
						window.customElements.define(name, component, {
							extends: ext
						});
						webcomponent = function webcomponent() {
							var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

							if (ext) {
								return document.createElement(ext, name).setProps(props);
							}
							return document.createElement(name).setProps(props);
						};
					} else if (document.registerElement) {
						webcomponent = document.registerElement(name, {
							prototype: component.prototype,
							extends: ext
						});
					} else {
						throw 'Your browser does not support either document.registerElement or window.customElements.define webcomponents specification...';
					}

					// fix for firefox and surely other crapy browser...
					// this make sur that the (static) methods of the component
					// are present on the webcomponent itself
					Object.keys(component).forEach(function (key) {
						if (!webcomponent[key]) {
							webcomponent[key] = component[key];
						}
					});

					// handle css
					component._injectDefaultCss(component, componentName, componentNameDash);

					// return the webcomponent instance
					return webcomponent;
				}

				/**
	    * Inject css into html
	    * @param 		{HTMLElement}	componentClass 		The component class for which to inject the base css
	    * @param 		{String} 		componentName 		The component name
	    * @param 		{String} 		componentNameDash 	The dash formated component name
	    */

			}, {
				key: '_injectDefaultCss',
				value: function _injectDefaultCss(componentClass, componentName, componentNameDash) {
					// check if component has a css to be injected into the page
					if (window.sugar._webComponentsDefaultCss[componentName] === undefined) {
						var css = '';
						var comp = componentClass;
						while (comp) {
							if (comp.defaultCss) {
								css += comp.defaultCss(componentName, componentNameDash);
							}
							comp = Object.getPrototypeOf(comp);
						}
						if (css) {
							css = css.replace(/[\s]+/g, ' ');
							window.sugar._webComponentsDefaultCss[componentName] = css;
							// fastdom.mutate(() => {
							var styleElm = document.createElement('style');
							styleElm.setAttribute('name', componentName);
							styleElm.innerHTML = css;
							(0, _prependChild2.default)(styleElm, document.head);
							// document.head.appendChild(styleElm);
							// });
						} else {
							window.sugar._webComponentsDefaultCss[componentName] = false;
						}
					}
				}

				/**
	    * Store all the props of the component
	    * Props are actual computed props with attributes
	    * @type 		{Object}
	    */

			}, {
				key: 'setDefaultProps',

				/**
	    * Set some default props for a specific component
	    * @param 		{Object} 		props 			A props object to set
	    * @param 		{String} 		[tagname=null] 	The tagname of the component you want to setting up
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */
				value: function setDefaultProps(props) {
					var tagname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

					// if a tagname is specified, we store the default props for a
					// particular tagname
					if (tagname) {
						tagname = [].concat(tagname);
						tagname.forEach(function (tag) {
							tag = (0, _upperFirst2.default)((0, _camelize2.default)(tag));
							window.sugar._webComponentsDefaultProps[tag] = _extends({}, window.sugar._webComponentsDefaultProps[tag] || {}, props);
						});
					} else {
						var proto = this;
						proto._defaultProps = _extends({}, proto._defaultProps || {}, props);
					}
				}
			}, {
				key: 'defaultCss',
				value: function defaultCss(componentName, componentNameDash) {
					return '';
				}
			}, {
				key: 'defaultProps',

				/**
	    * Return the default props for the component.
	    * Need to take care of the passed props parameter and mix it at the
	    * end of your default props
	    *
	    * @type 	{Object}
	    * @example
	    * getDefaultProps(props = {}) {
	    * 		return super.getDefaultProps({
	    * 			myCoolProp : null,
	    * 			...props
	    * 		});
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */
				get: function get() {
					return {
						mountWhen: null,
						mountDependencies: [],
						unmountTimeout: 500
					};
				}
			}, {
				key: 'physicalProps',
				get: function get() {
					return [];
				}
			}, {
				key: 'requiredProps',
				get: function get() {
					return [];
				}
			}, {
				key: 'mountDependencies',
				get: function get() {
					return [];
				}
			}]);

			function _class2(_) {
				var _temp, _this, _ret;

				_classCallCheck(this, _class2);

				return _ret = ((_ = (_temp = (_this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, _)), _this), _this.props = {}, _temp)).init(), _), _possibleConstructorReturn(_this, _ret);
			}

			_createClass(_class2, [{
				key: 'init',
				value: function init() {
					console.log('init', this);
					this.createdCallback();
				}

				/**
	    * When the component is created.
	    * This is called even if the component is not attached in the DOM tree
	    */

			}, {
				key: 'createdCallback',
				value: function createdCallback() {

					console.log('created');

					// create the "s" namespace
					this.s = {};

					// props
					this.props = {};

					// track the lifecyle
					this._lifecycle = {
						componentWillMount: false,
						componentMount: false,
						componentDidMount: false,
						componentWillUnmount: false,
						componentUnmount: false,
						componentDidUnmount: false
					};

					// init watcher
					this._sWatcher = new _SWatcher2.default();

					// set the componentName
					var sourceName = this.getAttribute('is') || this.tagName.toLowerCase();
					this.componentNameDash = this._componentNameDash = sourceName;
					this.componentName = this._componentName = (0, _upperFirst2.default)((0, _camelize2.default)(sourceName));

					// default props init
					this.props = Object.assign({}, this.defaultProps, this.props);

					// created callback
					this.componentCreated();

					// if ( ! document.body.contains(this)) return;
				}

				/**
	    * When the element is attached in the DOM tree
	    */

			}, {
				key: 'connectedCallback',
				value: function connectedCallback() {
					var _this3 = this;

					// if not already passed through the created process
					if (!this._lifecycle) this.createdCallback();

					console.log('connected', this._lifecycle);

					// component will mount only if part of the active document
					this.componentWillMount();

					// clear the unmount timeout
					clearTimeout(this._unmountTimeout);

					// update attached status
					this._componentAttached = true;

					// stop here if already mounted once
					if (this._lifecycle.componentMount) return;

					// wait until dependencies are ok
					this._whenMountDependenciesAreOk().then(function () {
						// switch on the mountWhen prop
						switch (_this3.props.mountWhen) {
							case 'inViewport':
								(0, _whenInViewport2.default)(_this3).then(function () {
									_this3._mountComponent();
								});
								break;
							case 'mouseover':
								_this3.addEventListener('mouseover', _this3._onMouseoverComponentMount.bind(_this3));
								break;
							case 'isVisible':
								(0, _whenVisible2.default)(_this3).then(function () {
									_this3._mountComponent();
								});
								break;
							default:
								// mount component directly
								_this3._mountComponent();
								break;
						}
					});
				}

				/**
	    * When any of the component attribute changes
	    * @param 		{String} 		attribute 		The attribute name that has changed
	    * @param 		{String}		oldVal 			The previous attribute value
	    * @param 		{String} 		newVal 			The new attribute value
	    */

			}, {
				key: 'attributeChangedCallback',
				value: function attributeChangedCallback(attribute, oldVal, newVal) {

					// stop if component has not been mounted
					// if ( ! this._lifecycle.componentWillMount) {
					// 	return;
					// }

					// cast the new val
					newVal = (0, _autoCast2.default)(newVal);

					// keep an original attribute name
					var _attribute = attribute;

					// process the attribute to camelCase
					attribute = (0, _camelize2.default)(attribute);

					// if the property is not a real property
					if (this.props[attribute] === undefined) return;

					// handle the case when newVal is undefined (added attribute whithout any value)
					if (newVal === undefined && this.hasAttribute(_attribute)) {
						newVal = true;
					} else if (newVal === null && !this.hasAttribute(_attribute) && this.props[attribute] === false) {
						// the attribute has been removed and
						// the prop is already to false
						return;
					}

					// do nothing if the value is already the same
					if (this.props[attribute] === newVal) return;

					// set the new prop
					this.setProp(attribute, newVal);
				}

				/**
	    * Called directly when the component is created. This act like a constructor.
	    *
	    * @example
	    * componentCreated() {
	    * 		// call parent method
	    * 		super.componentCreated();
	    * 		// do something here...
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: 'componentCreated',
				value: function componentCreated() {}

				/**
	    * Method called before the component will actually mount and BEFORE the the mountDependencies to be resolved or not.
	    * This is a good place to do directl when the component is attached in the DOM but before any dependencies are resolved
	    *
	    * @example
	    * componentWillMount() {
	    * 		// call parent method
	    * 		super.componentWillMount();
	    * 		// do something here...
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: 'componentWillMount',
				value: function componentWillMount() {
					var _this4 = this;

					// protect from mounting multiple times when unecessary
					if (this._lifecycle.componentWillMount) return;

					// update lifecycle state
					this._lifecycle.componentWillMount = true;

					// dispatch event
					this.onComponentWillMount && this.onComponentWillMount();

					// internal properties
					this._nextPropsStack = {};
					this._prevPropsStack = {};
					this._componentAttached = false;
					this._fastdomSetProp = null;

					// compute props
					this._computeProps();

					// props proxy
					this._initPropsProxy();

					var _loop = function _loop(key) {
						(0, _propertyProxy2.default)(_this4.props, key, {
							set: function set(value) {
								var oldVal = _this4.props[key];
								// handle new prop value
								_this4._handleNewPropValue(key, value, oldVal);
								// set the value
								return value;
							}
						}, false);
					};

					for (var key in this.props) {
						_loop(key);
					}

					// check the required props
					this.requiredProps.forEach(function (prop) {
						if (!_this4.props[prop]) {
							throw 'The "' + _this4.componentNameDash + '" component need the "' + prop + '" property in order to work';
						}
					});
				}

				/**
	    * Method called right after that the component has been added in the dom,
	    * after and only if the mountDependencies are resolved
	    * and before the initial render.
	    *
	    * @example
	    * componentMount() {
	    * 		// call parent method
	    * 		super.componentMount();
	    * 		// do something here...
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: 'componentMount',
				value: function componentMount() {
					if (this._lifecycle.componentMount) return;
					// update the lifecycle state
					this._lifecycle.componentMount = true;
					// dispatch event
					this.onComponentMount && this.onComponentMount();
				}

				/**
	    * Method called after the initial component render
	    *
	    * @example
	    * componentDidMount() {
	    * 		// call parent method
	    * 		super.componentDidMount();
	    * 		// do something here...
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: 'componentDidMount',
				value: function componentDidMount() {
					if (this._lifecycle.componentDidMount) return;
					// update lifecycle state
					this._lifecycle.componentDidMount = true;
					// dispatch event
					this.onComponentDidMount && this.onComponentDidMount();
					// update lifecycle
					this._lifecycle.componentWillUnmount = false;
					this._lifecycle.componentUnmount = false;
					this._lifecycle.componentDidUnmount = false;
				}

				/**
	    * Method called right before the render when some props have been updated.
	    * This method is not called before the initial render
	    *
	    * @param 		{Object} 		nextProps 			An object that represent the props that have been updated
	    * @param 		{Array} 		nextPropsArray 		An array representation of the nextProps object [{name:...,value:...}]
	    *
	    * @example
	    * componentWillUpdate(nextProps, nextPropsArray) {
	    * 		// call parent method
	    * 		super.componentWillUpdate(nextProps, nextPropsArray);
	    * 		// do something here...
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: 'componentWillUpdate',
				value: function componentWillUpdate(nextProps) {
					// dispatch event
					this.onComponentWillUpdate && this.onComponentWillUpdate(nextProps);
				}

				/**
	    * Apply all the updated that you need in the dom for the component to reflect the props
	    *
	    * @example
	    * render() {
	    * 		// call the parent method
	    * 		super.render();
	    * 		// apply some classes, properties, styles, etc... in the dom
	    * 		// in order to reflect the props object state
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: 'render',
				value: function render() {
					// dispatch event
					this.onComponentRender && this.onComponentRender();
				}

				/**
	    * Method called right after the render when some props have been updated.
	    * This method is not called after the initial render
	    *
	    * @param 		{Object} 		prevProps 			An object that represent the props that have been updated
	    * @param 		{Array} 		prevPropsArray 		An array representation of the prevProps object [{name:...,value:...}]
	    *
	    * @example
	    * componentDidUpdate(prevProps, prevPropsArray) {
	    * 		// call parent method
	    * 		super.componentDidUpdate(prevProps, prevPropsArray);
	    * 		// do something here...
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: 'componentDidUpdate',
				value: function componentDidUpdate(prevProps, prevPropsArray) {
					// dispatch event
					this.onComponentDidUpdate && this.onComponentDidUpdate(prevProps, prevPropsArray);
				}

				/**
	    * Method called before the component will unmount cause it has been removed from the DOM tree and that the props.unmountTimeout is passed.
	    *
	    * @example
	    * componentWillUnmount() {
	    * 		// call parent method
	    * 		super.componentWillUnmount();
	    * 		// do something here...
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: 'componentWillUnmount',
				value: function componentWillUnmount() {
					if (this._lifecycle.componentWillUnmount) return;
					// update lifecycle state
					this._lifecycle.componentWillUnmount = true;
					// dispatch event
					this.onComponentWillUnmount && this.onComponentWillUnmount();
				}

				/**
	    * Method called when the component need to unmount itself cause it has been removed from the DOM tree and the props.unmountTimeout is passed.
	    *
	    * @example
	    * componentUnmount() {
	    * 		// call parent method
	    * 		super.componentUnmount();
	    * 		// do something here...
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: 'componentUnmount',
				value: function componentUnmount() {
					if (this._lifecycle.componentUnmount) return;
					// update lifecycle state
					this._lifecycle.componentUnmount = true;
					// dispatch event
					this.onComponentUnmount && this.onComponentUnmount();
				}

				/**
	    * Method called when the component has been unmounted
	    *
	    * @example
	    * componentDidUnmount() {
	    * 		// call parent method
	    * 		super.componentDidUnmount();
	    * 		// do something here...
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: 'componentDidUnmount',
				value: function componentDidUnmount() {
					if (this._lifecycle.componentDidMount) return;
					// update lifecycle state
					this._lifecycle.componentDidUnmount = true;
					// destroy things
					this._sWatcher.destroy();
					// dispatch event
					this.onComponentDidUnmount && this.onComponentDidUnmount();
				}

				/**
	    * Check all the mountDependencies and try to resolve them.
	    * @return 			{Promise} 				A promise that will be resolved when the dependencies are resolved
	    */

			}, {
				key: '_whenMountDependenciesAreOk',
				value: function _whenMountDependenciesAreOk() {
					var _this5 = this;

					var promise = new Promise(function (resolve, reject) {
						var deps = _this5.mountDependencies;
						if (!deps.length) {
							resolve();
						} else {
							// resolve all the promises
							Promise.all(deps).then(function () {
								resolve();
							});
						}
					});
					return promise;
				}

				/**
	    * Init props proxy.
	    * This will create a getter/setter accessor on the item itself
	    * that get and update his corresponding props.{name} property
	    */

			}, {
				key: '_initPropsProxy',
				value: function _initPropsProxy() {
					var _this6 = this;

					var _loop2 = function _loop2(key) {
						if (_this6.hasOwnProperty(key)) {
							console.warn('The component ' + _this6.componentNameDash + ' has already an "' + key + '" property... This property will not reflect the this.props[\'' + key + '\'] value... Try to use a property name that does not already exist on an HTMLElement...');
							return 'continue';
						}
						if (!key in _this6) {
							Object.defineProperty(_this6, key, {
								get: function get() {
									return _this6.props[key];
								},
								set: function set(value) {
									_this6.setProp(key, value);
								}
							});
						}
					};

					// loop on each props
					for (var key in this.defaultProps) {
						var _ret3 = _loop2(key);

						if (_ret3 === 'continue') continue;
					}
				}

				/**
	    * On mouse over
	    */

			}, {
				key: '_onMouseoverComponentMount',
				value: function _onMouseoverComponentMount() {
					this._mountComponent();
					this.removeEventListener('mouseover', this._onMouseoverComponentMount);
				}

				/**
	    * Internal mount component method
	    */

			}, {
				key: '_mountComponent',
				value: function _mountComponent() {
					var _this7 = this;

					// wait next frame
					_fastdom2.default.clear(this._fastdomSetProp);
					this._fastdomSetProp = this.mutate(function () {
						// sometimes, the component has been unmounted between the
						// fastdom execution, so we stop here if it's the case
						if (!_this7._componentAttached) return;
						// init
						_this7.componentMount();
						// render
						_this7.render();
						// component did mount
						_this7.componentDidMount();
					});
				}

				/**
	    * Detect when the component is detached from the DOM tree.
	    */

			}, {
				key: 'disconnectedCallback',
				value: function disconnectedCallback() {
					var _this8 = this;

					// update attached status
					this._componentAttached = false;

					// unmount timeout
					clearTimeout(this._unmountTimeout);
					this._unmountTimeout = setTimeout(function () {

						// will unmount
						_this8.componentWillUnmount();
						// wait next frame
						_fastdom2.default.clear(_this8._fastdomSetProp);
						_this8._fastdomSetProp = _this8.mutate(function () {
							// unmount only if the component is mounted
							if (!_this8._lifecycle.componentMount) return;
							// unmount
							_this8.componentUnmount();
							// did unmount
							_this8.componentDidUnmount();
							// update lifecycle
							_this8._lifecycle.componentWillMount = false;
							_this8._lifecycle.componentMount = false;
							_this8._lifecycle.componentDidUnmount = false;
						});
					}, this.props.unmountTimeout);
				}

				/**
	    * Dispatch an event from the tag with namespaced event name
	    * This will dispatch actually two events :
	    * 1. {tagName}.{name} : example : s-datepicker.change
	    * 2. {name} 		   : example : change
	    *
	    * @param		{String} 		name 		The event name
	    * @param 		{Mixed} 		data 		Some data to attach to the event
	    */

			}, {
				key: 'dispatchComponentEvent',
				value: function dispatchComponentEvent(name) {
					var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

					(0, _dispatchEvent2.default)(this, name, data);
					(0, _dispatchEvent2.default)(this, this.tagName.toLowerCase() + '.' + name, data);
				}

				/**
	    * Set a bunch of properties at once
	    * @param 			{Object} 		[props={}] 		An object of props to set
	    */

			}, {
				key: 'setProps',
				value: function setProps() {
					var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

					// set each props
					for (var key in props) {
						this.setProp(key, props[key]);
					}
					return this;
				}

				/**
	    * Set a property
	    * @param 			{String} 		prop 			The property name to set
	    * @param 			{Mixed} 		value 			The new property value
	    */

			}, {
				key: 'setProp',
				value: function setProp(prop, value) {

					// save the oldVal
					var oldVal = this.props[prop];

					// stop if same value
					if (oldVal === value) return;

					// set the prop
					this.props[prop] = value;

					// handle new property value
					// this._handleNewPropValue(prop, value, oldVal);
				}

				/**
	    * Handle new property
	    * @param 		{String} 		prop 		The property name
	    * @param 		{Mixed} 		newVal 		The new property value
	    * @param 		{Mixed}			oldVal 		The old property value
	    */

			}, {
				key: '_handleNewPropValue',
				value: function _handleNewPropValue(prop, newVal, oldVal) {
					var _this9 = this;

					// handle physical props
					this._handlePhysicalProps(prop, newVal);

					// if the component is not mounted
					// we do nothing here...
					if (!this.isComponentMounted()) return;

					// create the stacks
					this._prevPropsStack[prop] = oldVal;
					this._nextPropsStack[prop] = newVal;

					// component will receive prop
					this.componentWillReceiveProp(prop, newVal, oldVal);

					// wait till next frame
					_fastdom2.default.clear(this._fastdomSetProp);
					this._fastdomSetProp = _fastdom2.default.mutate(function () {

						// create array version of each stacks
						var nextPropsArray = [],
						    prevPropsArray = [];
						for (var key in _this9._nextPropsStack) {
							var val = _this9._nextPropsStack[key];
							nextPropsArray.push({
								name: key,
								value: val
							});
						}
						for (var _key in _this9._prevPropsStack) {
							var _val = _this9._prevPropsStack[_key];
							prevPropsArray.push({
								name: _key,
								value: _val
							});
						}

						// call the will reveiveProps if exist
						if (_this9.componentWillReceiveProps) {
							_this9.componentWillReceiveProps(_this9._nextPropsStack, nextPropsArray);
						}

						// should component update
						if (_this9.shouldComponentUpdate && !_this9.shouldComponentUpdate(_this9._nextPropsStack, _this9._prevPropsStack)) return;

						// component will update
						_this9.componentWillUpdate(_this9._nextPropsStack, nextPropsArray);

						// render the component
						_this9.render();

						// component did update
						_this9.componentDidUpdate(_this9._prevPropsStack, prevPropsArray);
					});
				}

				/**
	    * Method called when the component will receive new props
	    * @param 		{String} 		prop 		The property name
	    * @param 		{Mixed} 		newVal 		The new property value
	    * @param 		{Mixed}			oldVal 		The old property value
	    * @example 	js
	    * componentWillReceiveProp(prop, newVal, oldVal) {
	    *  	switch(prop) {
	    *  		case ...
	    *    			// do something...
	    * 			break;
	    *  	}
	    * }
	    *
	    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: 'componentWillReceiveProp',
				value: function componentWillReceiveProp(prop, newVal, oldVal) {}
				// do something


				/**
	    * Check if component is mounted
	    * @return 			{Boolean} 			true if mounted, false if not
	    */

			}, {
				key: 'isComponentMounted',
				value: function isComponentMounted() {
					return this._lifecycle.componentMount;
				}

				/**
	    * Watch any data of the component
	    * @param 		{String} 		path 		The path from the component root to watch like "props.myCoolProp"
	    * @param 		{Function}		cb 			The callback to call when the item has changed
	    */

			}, {
				key: 'watch',
				value: function watch(path, cb) {
					this._sWatcher.watch(this, path, cb);
				}

				/**
	    * Handle physical props by setting or not the prop
	    * on the dom element as attribute
	    * @param 			{String} 			prop 			The property to handle
	    * @param 			{Mixed} 			value 			The property value
	    * @author 			Olivier Bossel <olivier.bossel@gmail.com>
	    */

			}, {
				key: '_handlePhysicalProps',
				value: function _handlePhysicalProps(prop, value) {
					// check if is a physical prop to set it in the dom
					var physicalProps = this.physicalProps;
					if (physicalProps.indexOf(prop) !== -1) {
						// set the prop on the node
						if (value !== 0 && (value === false || value === 'null' || !value)) {
							this.removeAttribute(prop);
						} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
							this.setAttribute(prop, JSON.stringify(value));
						} else if (typeof value === 'function') {
							this.setAttribute(prop, 'fn');
						} else {
							this.setAttribute(prop, value);
						}
					}
				}

				/**
	    * Compute props by mixing settings with attributes presents on the component
	    */

			}, {
				key: '_computeProps',
				value: function _computeProps() {
					for (var i = 0; i < this.attributes.length; i++) {
						var attr = this.attributes[i];
						var attrCamelName = (0, _camelize2.default)(attr.name);
						// do not set if it's not an existing prop
						if (this.props[attrCamelName] === undefined) continue;
						// the attribute has no value but it is present
						// so we assume the prop value is true
						if (!attr.value) {
							this.props[attrCamelName] = true;
							continue;
						}
						// cast the value
						this.props[attrCamelName] = (0, _autoCast2.default)(attr.value);
					}

					// handle physicalProps
					for (var key in this.props) {
						var value = this.props[key];
						// handle physical props
						this._handlePhysicalProps(key, value);
					}
				}

				/**
	    * Mutate the dom using an optimize requestAnimationFrame technique
	    * @param 		{Function} 		cb 			The callback to exexute
	    */

			}, {
				key: 'mutate',
				value: function mutate(cb) {
					return _fastdom2.default.mutate(cb);
				}

				/**
	    * Set a class that will be construct with the componentNameDash,
	    * an optional element and modifier
	    * @param 	{String} 	[element=null] 		The element name
	    * @param 	{String} 	[modifier=null] 	The modifier name
	    * @param 	{String} 	[state=null] 		The state name
	    * @return 	{String} 						The generated class
	    */

			}, {
				key: 'componentClassName',
				value: function componentClassName() {
					var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
					var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
					var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

					// if the method is BEM
					var sel = this.componentNameDash;
					if (element) {
						sel += '__' + element;
					}
					if (modifier) {
						sel += '--' + modifier;
					}
					if (state) {
						sel += '--' + state;
					}
					return sel;
				}

				/**
	    * Get a component selector class built with the passed element, modifier and state parameters
	    * @param 	{String} 	[element=null] 		The element name
	    * @param 	{String} 	[modifier=null] 	The modifier name
	    * @param 	{String} 	[state=null] 		The state name
	    * @return 	{String} 						The generated class
	    */

			}, {
				key: 'componentSelector',
				value: function componentSelector() {
					var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
					var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
					var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

					var sel = this.componentClassName(element, modifier, state);
					sel = ('.' + sel).replace(' ', '.');
					return sel;
				}

				/**
	    * Check if the passed element has the component class generated by the element and modifier argument
	    * @param 	{HTMLElement} 	elm 				The element to check
	    * @param 	{String} 		[element=null] 		The element name
	    * @param 	{String} 		[modifier=null] 	The modifier name
	    * @param 	{String} 		[state=null] 		The state name
	    * @return 	{Boolean} 							The check result
	    */

			}, {
				key: 'hasComponentClass',
				value: function hasComponentClass(elm) {
					var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
					var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
					var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

					// generate the class
					var cls = this.componentSelector(element, modifier, state);
					var _cls = cls.split('.');
					for (var i = 0; i < _cls.length; i++) {
						var cl = _cls[i];
						if (cl && cl !== '') {
							if (!elm.classList.contains(cl)) {
								return false;
							}
						}
					}
					return true;
				}

				/**
	    * Add a class on the passed element that will be construct with the componentNameDash,
	    * an optional element, modifier and state
	    * @param 	{String} 	[element=null] 		The element name
	    * @param 	{String} 	[modifier=null] 	The modifier name
	    * @param 	{String} 	[state=null] 		The state name
	    * @return 	{SComponent}} 			The component itself
	    */

			}, {
				key: 'addComponentClass',
				value: function addComponentClass(elm) {
					var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

					var _this10 = this;

					var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
					var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

					// if is an array
					if (elm instanceof Array || elm instanceof NodeList) {
						[].forEach.call(elm, function (el) {
							_this10.addComponentClass(el, element, modifier, state);
						});
						return this;
					}

					// get the component class
					var cls = this.componentSelector(element, modifier, state);
					// loop on each classes to add
					cls.split('.').forEach(function (cl) {
						if (cl && cl !== '') {
							_this10.mutate(function () {
								elm.classList.add(cl);
							});
						}
					});
					// return the instance to maintain chainability
					return this;
				}

				/**
	    * Remove a class on the passed element that will be construct with the componentNameDash,
	    * an optional element, modifier and state
	    * @param 	{String} 	[element=null] 		The element name
	    * @param 	{String} 	[modifier=null] 	The modifier name
	    * @param 	{String} 	[state=null] 		The state name
	    * @return 	{SComponent}} 					The component itself
	    */

			}, {
				key: 'removeComponentClass',
				value: function removeComponentClass(elm) {
					var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

					var _this11 = this;

					var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
					var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

					// if is an array
					if (elm instanceof Array || elm instanceof NodeList) {
						[].forEach.call(elm, function (el) {
							_this11.removeComponentClass(el, element, modifier, state);
						});
						return this;
					}

					// get the component class
					var cls = this.componentSelector(element, modifier, state);
					// loop on each classes to add
					cls.split('.').forEach(function (cl) {
						if (cl && cl !== '') {
							_this11.mutate(function () {
								elm.classList.remove(cl);
							});
						}
					});
					// return the instance to maintain chainability
					return this;
				}
			}]);

			return _class2;
		}(superclass);
	});

	// map v0 custom element spec
	SWebComponentMixin.prototype.attachedCallback = SWebComponentMixin.prototype.connectedCallback;
	SWebComponentMixin.prototype.detachedCallback = SWebComponentMixin.prototype.disconnectedCallback;

	// Export the mixin class
	exports.default = SWebComponentMixin;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = autoCast;
	/**
	 * Auto cast the string into the correct variable type
	 */
	function autoCast(string) {
		// printed object
		if (string === '[object Object]') return null;
		// boolean values
		if (string === 'false' || string === 'true' || string === 'undefined' || string === 'null' || !isNaN(string)) {
			return eval(string);
		}
		// array
		if (typeof string === 'string' && string.substr(0, 1) === '[') {
			var val = eval(string);
			if (val instanceof Array) return val;
		}
		// parse json
		if (typeof string === 'string' && string.substr(0, 1) === '{') {
			return eval('(' + string + ')');
		}
		// return the string if nothing can be casted
		return string;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(7);


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(8),
	    createAssigner = __webpack_require__(27),
	    keysIn = __webpack_require__(40);

	/**
	 * This method is like `_.assign` except that it iterates over own and
	 * inherited source properties.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assign
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	 */
	var assignIn = createAssigner(function(object, source) {
	  copyObject(source, keysIn(source), object);
	});

	module.exports = assignIn;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(9),
	    baseAssignValue = __webpack_require__(10);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(10),
	    eq = __webpack_require__(26);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}

	module.exports = assignValue;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(11);

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	module.exports = baseAssignValue;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12);

	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	module.exports = defineProperty;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(13),
	    getValue = __webpack_require__(25);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(14),
	    isMasked = __webpack_require__(22),
	    isObject = __webpack_require__(21),
	    toSource = __webpack_require__(24);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(15),
	    isObject = __webpack_require__(21);

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	module.exports = isFunction;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(16),
	    getRawTag = __webpack_require__(19),
	    objectToString = __webpack_require__(20);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(17);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(18);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(16);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
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
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(23);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(17);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
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
/* 25 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
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
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(28),
	    isIterateeCall = __webpack_require__(36);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(29),
	    overRest = __webpack_require__(30),
	    setToString = __webpack_require__(32);

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return setToString(overRest(func, start, identity), func + '');
	}

	module.exports = baseRest;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(31);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = overRest;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var baseSetToString = __webpack_require__(33),
	    shortOut = __webpack_require__(35);

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = shortOut(baseSetToString);

	module.exports = setToString;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var constant = __webpack_require__(34),
	    defineProperty = __webpack_require__(11),
	    identity = __webpack_require__(29);

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !defineProperty ? identity : function(func, string) {
	  return defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};

	module.exports = baseSetToString;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 35 */
/***/ function(module, exports) {

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	module.exports = shortOut;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(26),
	    isArrayLike = __webpack_require__(37),
	    isIndex = __webpack_require__(39),
	    isObject = __webpack_require__(21);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(14),
	    isLength = __webpack_require__(38);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(41),
	    baseKeysIn = __webpack_require__(54),
	    isArrayLike = __webpack_require__(37);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(42),
	    isArguments = __webpack_require__(43),
	    isArray = __webpack_require__(46),
	    isBuffer = __webpack_require__(47),
	    isIndex = __webpack_require__(39),
	    isTypedArray = __webpack_require__(50);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(44),
	    isObjectLike = __webpack_require__(45);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	module.exports = isArguments;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(15),
	    isObjectLike = __webpack_require__(45);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}

	module.exports = baseIsArguments;


/***/ },
/* 45 */
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
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 46 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(17),
	    stubFalse = __webpack_require__(49);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)(module)))

/***/ },
/* 48 */
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
/* 49 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = stubFalse;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(51),
	    baseUnary = __webpack_require__(52),
	    nodeUtil = __webpack_require__(53);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(15),
	    isLength = __webpack_require__(38),
	    isObjectLike = __webpack_require__(45);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(18);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(48)(module)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21),
	    isPrototype = __webpack_require__(55),
	    nativeKeysIn = __webpack_require__(56);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = camelize;
	/**
	 * Camelize a string
	 */
	function camelize(text) {
		var res = '';
		res = text.replace(/(?:^|[-_])(\w)/g, function (_, c) {
			return c ? c.toUpperCase() : '';
		});
		res = res.substr(0, 1).toLowerCase() + res.slice(1);
		return res.trim();
	}

/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = upperFirst;
	/**
	 * Upper first
	 */
	function upperFirst(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(function(win) {

	/**
	 * FastDom
	 *
	 * Eliminates layout thrashing
	 * by batching DOM read/write
	 * interactions.
	 *
	 * @author Wilson Page <wilsonpage@me.com>
	 * @author Kornel Lesinski <kornel.lesinski@ft.com>
	 */

	'use strict';

	/**
	 * Mini logger
	 *
	 * @return {Function}
	 */
	var debug = 0 ? console.log.bind(console, '[fastdom]') : function() {};

	/**
	 * Normalized rAF
	 *
	 * @type {Function}
	 */
	var raf = win.requestAnimationFrame
	  || win.webkitRequestAnimationFrame
	  || win.mozRequestAnimationFrame
	  || win.msRequestAnimationFrame
	  || function(cb) { return setTimeout(cb, 16); };

	/**
	 * Initialize a `FastDom`.
	 *
	 * @constructor
	 */
	function FastDom() {
	  var self = this;
	  self.reads = [];
	  self.writes = [];
	  self.raf = raf.bind(win); // test hook
	  debug('initialized', self);
	}

	FastDom.prototype = {
	  constructor: FastDom,

	  /**
	   * Adds a job to the read batch and
	   * schedules a new frame if need be.
	   *
	   * @param  {Function} fn
	   * @public
	   */
	  measure: function(fn, ctx) {
	    debug('measure');
	    var task = !ctx ? fn : fn.bind(ctx);
	    this.reads.push(task);
	    scheduleFlush(this);
	    return task;
	  },

	  /**
	   * Adds a job to the
	   * write batch and schedules
	   * a new frame if need be.
	   *
	   * @param  {Function} fn
	   * @public
	   */
	  mutate: function(fn, ctx) {
	    debug('mutate');
	    var task = !ctx ? fn : fn.bind(ctx);
	    this.writes.push(task);
	    scheduleFlush(this);
	    return task;
	  },

	  /**
	   * Clears a scheduled 'read' or 'write' task.
	   *
	   * @param {Object} task
	   * @return {Boolean} success
	   * @public
	   */
	  clear: function(task) {
	    debug('clear', task);
	    return remove(this.reads, task) || remove(this.writes, task);
	  },

	  /**
	   * Extend this FastDom with some
	   * custom functionality.
	   *
	   * Because fastdom must *always* be a
	   * singleton, we're actually extending
	   * the fastdom instance. This means tasks
	   * scheduled by an extension still enter
	   * fastdom's global task queue.
	   *
	   * The 'super' instance can be accessed
	   * from `this.fastdom`.
	   *
	   * @example
	   *
	   * var myFastdom = fastdom.extend({
	   *   initialize: function() {
	   *     // runs on creation
	   *   },
	   *
	   *   // override a method
	   *   measure: function(fn) {
	   *     // do extra stuff ...
	   *
	   *     // then call the original
	   *     return this.fastdom.measure(fn);
	   *   },
	   *
	   *   ...
	   * });
	   *
	   * @param  {Object} props  properties to mixin
	   * @return {FastDom}
	   */
	  extend: function(props) {
	    debug('extend', props);
	    if (typeof props != 'object') throw new Error('expected object');

	    var child = Object.create(this);
	    mixin(child, props);
	    child.fastdom = this;

	    // run optional creation hook
	    if (child.initialize) child.initialize();

	    return child;
	  },

	  // override this with a function
	  // to prevent Errors in console
	  // when tasks throw
	  catch: null
	};

	/**
	 * Schedules a new read/write
	 * batch if one isn't pending.
	 *
	 * @private
	 */
	function scheduleFlush(fastdom) {
	  if (!fastdom.scheduled) {
	    fastdom.scheduled = true;
	    fastdom.raf(flush.bind(null, fastdom));
	    debug('flush scheduled');
	  }
	}

	/**
	 * Runs queued `read` and `write` tasks.
	 *
	 * Errors are caught and thrown by default.
	 * If a `.catch` function has been defined
	 * it is called instead.
	 *
	 * @private
	 */
	function flush(fastdom) {
	  debug('flush');

	  var writes = fastdom.writes;
	  var reads = fastdom.reads;
	  var error;

	  try {
	    debug('flushing reads', reads.length);
	    runTasks(reads);
	    debug('flushing writes', writes.length);
	    runTasks(writes);
	  } catch (e) { error = e; }

	  fastdom.scheduled = false;

	  // If the batch errored we may still have tasks queued
	  if (reads.length || writes.length) scheduleFlush(fastdom);

	  if (error) {
	    debug('task errored', error.message);
	    if (fastdom.catch) fastdom.catch(error);
	    else throw error;
	  }
	}

	/**
	 * We run this inside a try catch
	 * so that if any jobs error, we
	 * are able to recover and continue
	 * to flush the batch until it's empty.
	 *
	 * @private
	 */
	function runTasks(tasks) {
	  debug('run tasks');
	  var task; while (task = tasks.shift()) task();
	}

	/**
	 * Remove an item from an Array.
	 *
	 * @param  {Array} array
	 * @param  {*} item
	 * @return {Boolean}
	 */
	function remove(array, item) {
	  var index = array.indexOf(item);
	  return !!~index && !!array.splice(index, 1);
	}

	/**
	 * Mixin own properties of source
	 * object into the target.
	 *
	 * @param  {Object} target
	 * @param  {Object} source
	 */
	function mixin(target, source) {
	  for (var key in source) {
	    if (source.hasOwnProperty(key)) target[key] = source[key];
	  }
	}

	// There should never be more than
	// one instance of `FastDom` in an app
	var exports = win.fastdom = (win.fastdom || new FastDom()); // jshint ignore:line

	// Expose to CJS & AMD
	if (("function")[0] == 'f') !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return exports; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	else if ((typeof module)[0] == 'o') module.exports = exports;

	})( typeof window !== 'undefined' ? window : this);


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = dispatchEvent;

	var _SEvent = __webpack_require__(61);

	var _SEvent2 = _interopRequireDefault(_SEvent);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Helper to quickly display an event with some optional data attached to it
	 *
	 * @name 		dispatchEvent
	 * @param 		{HTMLElement} 					target  		The element to dispatch the event from
	 * @param 		{String} 						name 			The event name to dispatch
	 * @param 		{Mixed} 						data 			The data to attache to the event
	 *
	 * @example  	js
	 * import dispatchEvent from 'sugarcss/js/dom/dispatchEvent'
	 * dispatchEvent(myCoolHTMLElement, 'myCoolEventName', {
	 * 		var1 : 'value1'
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function dispatchEvent(target, name) {
	  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  // create new event
	  var e = new _SEvent2.default(name, {
	    detail: data,
	    bubbles: true,
	    cancelable: true
	  });
	  target.dispatchEvent(e);
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _customEvent = __webpack_require__(62);

	var _customEvent2 = _interopRequireDefault(_customEvent);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _customEvent2.default;

	/**
	 * @constructor
	 * @param  		{String} 	name 		The event name
	 * @param 		{Object} 	settings 	The event settings
	 */

	/**
	 * Set if the event is cancelable or not
	 * @setting
	 * @name 		cancelable
	 * @type 		{Boolean}
	 * @default 	true
	 */

	/**
	 * Set if the event will bubble or not
	 * @setting
	 * @name 		bubbles
	 * @type 		{Boolean}
	 * @default 	true
	 */

	/**
	 * Pass an object that will be sent with the event
	 * @setting
	 * @name 		detail
	 * @type 		{Object}
	 * @default 	null
	 */
	/**
	 * @name 		SEvent
	 * Proxy class to create custom events that can be dispatched
	 * through the standard dispatch method on any HTMLElement
	 *
	 * @example 	js
	 * let myEvent = new SEvent('myCoolEvent', {
	 * 		cancelable : true,
	 * 		bubbles : false,
	 * 		detail : {
	 * 			// some datas to send with the event
	 * 		}
	 * });
	 * // dispatch the event from an HTMLElement
	 * myHTMLElement.dispatch(myEvent);
	 *
	 * @see 		https://www.npmjs.com/package/customevent
	 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
	 */

/***/ },
/* 62 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var NativeCustomEvent = global.CustomEvent;

	function useNative () {
	  try {
	    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
	    return  'cat' === p.type && 'bar' === p.detail.foo;
	  } catch (e) {
	  }
	  return false;
	}

	/**
	 * Cross-browser `CustomEvent` constructor.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
	 *
	 * @public
	 */

	module.exports = useNative() ? NativeCustomEvent :

	// IE >= 9
	'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
	  var e = document.createEvent('CustomEvent');
	  if (params) {
	    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
	  } else {
	    e.initCustomEvent(type, false, false, void 0);
	  }
	  return e;
	} :

	// IE <= 8
	function CustomEvent (type, params) {
	  var e = document.createEventObject();
	  e.type = type;
	  if (params) {
	    e.bubbles = Boolean(params.bubbles);
	    e.cancelable = Boolean(params.cancelable);
	    e.detail = params.detail;
	  } else {
	    e.bubbles = false;
	    e.cancelable = false;
	    e.detail = void 0;
	  }
	  return e;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = whenInViewport;

	var _whenVisible = __webpack_require__(64);

	var _whenVisible2 = _interopRequireDefault(_whenVisible);

	var _isInViewport = __webpack_require__(67);

	var _isInViewport2 = _interopRequireDefault(_isInViewport);

	var _throttle = __webpack_require__(68);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _closest = __webpack_require__(69);

	var _closest2 = _interopRequireDefault(_closest);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Monitor an HTMLElement to be notified when it is in the viewport
	 *
	 * @name 		whenInViewport
	 * @param 		{HTMLElement} 				elm 		The element to monitor
	 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element is in the viewport
	 * @return 		(Promise) 								The promise that will be resolved when the element is in the viewport
	 *
	 * @example 	js
	 * import whenInViewport from 'sugarcss/js/dom/whenInViewport'
	 * whenInViewport(myCoolHTMLElement).then((elm) => {
	 * 		// do something with your element that has entered the viewport...
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function whenInViewport(elm) {
		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		return new Promise(function (resolve, reject) {
			// try to get the closest element that has an overflow
			var scrollContainerElm = document;
			if (!elm._inViewportContainer) {
				var overflowContainer = (0, _closest2.default)(elm, '[data-in-viewport-container]');
				if (overflowContainer) {
					scrollContainerElm = overflowContainer;
					elm._inViewportContainer = overflowContainer;
				}
			} else {
				scrollContainerElm = elm._inViewportContainer;
			}

			var isInViewport = false,
			    isVisible = false,
			    _cb = function _cb() {
				if (isVisible && isInViewport) {
					scrollContainerElm.removeEventListener('scroll', checkViewport);
					window.removeEventListener('resize', checkViewport);
					if (cb) cb(elm);
					resolve(elm);
				}
			};
			var checkViewport = (0, _throttle2.default)(function (e) {
				isInViewport = (0, _isInViewport2.default)(elm, 50);
				_cb();
			}, 100);

			// detect when visible
			(0, _whenVisible2.default)(elm).then(function (elm) {
				isVisible = true;
				_cb();
			});

			// listen for resize
			scrollContainerElm.addEventListener('scroll', checkViewport);
			window.addEventListener('resize', checkViewport);
			setTimeout(function () {
				checkViewport(null);
			});
		});
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = whenVisible;

	var _isVisible = __webpack_require__(65);

	var _isVisible2 = _interopRequireDefault(_isVisible);

	var _closestNotVisible = __webpack_require__(66);

	var _closestNotVisible2 = _interopRequireDefault(_closestNotVisible);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Monitor an HTMLElement to be notified when it is visible
	 *
	 * @name 		whenVisible
	 * @param 		{HTMLElement} 				elm 		The element to monitor
	 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element is visible
	 * @return 		(Promise) 								The promise that will be resolved when the element is visible
	 *
	 * @example 	js
	 * import whenVisible from 'sugarcss/js/dom/whenVisible'
	 * whenVisible(myCoolHTMLElement).then((elm) => {
	 * 		// do something with your element that is now visible
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function whenVisible(elm) {
		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		return new Promise(function (resolve, reject) {

			// variables
			var isSelfVisible = false,
			    areParentsVisible = false,
			    closestNotVisible = null,
			    selfObserver = null,
			    parentObserver = null;

			var _cb = function _cb() {
				if (isSelfVisible && areParentsVisible) {
					// process callbacks
					if (cb) cb(elm);
					resolve(elm);
					// remove the event listeners
					elm.removeEventListener('transitionend', _eventCb);
					elm.removeEventListener('animationstart', _eventCb);
					elm.removeEventListener('animationend', _eventCb);
					// remove the event listeners
					if (closestNotVisible) {
						closestNotVisible.removeEventListener('transitionend', _eventCb);
						closestNotVisible.removeEventListener('animationstart', _eventCb);
						closestNotVisible.removeEventListener('animationend', _eventCb);
					}
				}
			};

			// function called on each transitionend, start, etc...
			var _eventCb = function _eventCb(e) {
				// wait just a little time to check again
				setTimeout(function () {
					if (e.target === elm) {
						if ((0, _isVisible2.default)(elm)) {
							isSelfVisible = true;
							if (selfObserver && selfObserver.disconnect) {
								selfObserver.disconnect();
							}
							// remove the event listeners
							elm.removeEventListener('transitionend', _eventCb);
							elm.removeEventListener('animationstart', _eventCb);
							elm.removeEventListener('animationend', _eventCb);
						}
					} else if (e.target === closestNotVisible) {
						if ((0, _isVisible2.default)(closestNotVisible)) {
							areParentsVisible = true;
							if (parentObserver && parentObserver.disconnect) {
								parentObserver.disconnect();
							}
							// remove the event listeners
							closestNotVisible.removeEventListener('transitionend', _eventCb);
							closestNotVisible.removeEventListener('animationstart', _eventCb);
							closestNotVisible.removeEventListener('animationend', _eventCb);
						}
					}
					// callback
					_cb();
				});
			};

			// check if element itself is not visible
			if (!(0, _isVisible2.default)(elm)) {
				selfObserver = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						// check that is the style whos changed
						if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
							// check if is visible
							if ((0, _isVisible2.default)(mutation.target)) {
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

				// listen for animationstart to check if the element is visible
				elm.addEventListener('animationstart', _eventCb);
				elm.addEventListener('animationend', _eventCb);
				elm.addEventListener('transitionend', _eventCb);
			} else {
				isSelfVisible = true;
			}

			// get the closest not visible element
			// if found, we monitor it to check when it is visible
			closestNotVisible = (0, _closestNotVisible2.default)(elm);
			if (closestNotVisible) {
				parentObserver = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						// check that is the style whos changed
						if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
							// check if is visible
							if ((0, _isVisible2.default)(mutation.target)) {
								// update
								areParentsVisible = true;
								// callback
								_cb();
								// stop observe
								parentObserver.disconnect();
							}
						}
					});
				});
				parentObserver.observe(closestNotVisible, { attributes: true });

				// listen for animationstart to check if the element is visible
				closestNotVisible.addEventListener('animationstart', _eventCb);
				closestNotVisible.addEventListener('animationend', _eventCb);
				closestNotVisible.addEventListener('transitionend', _eventCb);
			} else {
				areParentsVisible = true;
			}

			// callback
			_cb();
		});
	}

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isVisible;
	/**
	 * Check if the passed HTMLElement is visible or not.
	 * Visible mean that it has not an opacity of 0, not a visibility of hidden and not a display of none
	 *
	 * @name 		isVisible
	 * @param 		{HTMLElement} 				elm  		The element to check
	 * @return 		{Boolean								If the element is visible or not
	 *
	 * @example  	js
	 * import isVisible from 'sugarcss/js/dom/isVisible'
	 * if (isVisible(myCoolHTMLElement) {
	 * 		// i'm visible
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function isVisible(elm) {

	  // assume that the script tag is always visible
	  if (elm.nodeName.toLowerCase() === 'script') return true;

	  // if no offset parent
	  // mean that the element is not visible
	  // if (elm.offsetParent === null) return false;

	  // get style
	  var style = window.getComputedStyle(elm, null),
	      opacity = style['opacity'],
	      visibility = style['visibility'],
	      display = style['display'];
	  return '0' !== opacity && 'none' !== display && 'hidden' !== visibility;
	}
	window.__isVisible = isVisible;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = closestNotVisible;

	var _isVisible = __webpack_require__(65);

	var _isVisible2 = _interopRequireDefault(_isVisible);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Go up the dom three to find the first element that is not visible.
	 * Not visible mean that has either an opacity to 0, a visibility to hidden or a display to none
	 *
	 * @name 		closestNotVisible
	 * @param 		{HTMLElement} 					elm  		The element to start on
	 * @return 		{HTMLElement} 								The element found or null
	 *
	 * @example  	js
	 * import closestNotVisible from 'sugarcss/js/dom/closestNotVisible'
	 * const closestElm = closest(myCoolElement);
	 * if (closestElm) {
	 * 		// we have found en element is not visible
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function closestNotVisible(elm) {
	  elm = elm.parentNode;
	  while (elm && elm != document) {
	    if (!(0, _isVisible2.default)(elm)) {
	      return elm;
	    }
	    elm = elm.parentNode;
	  }
	  return false;
	}
	window.__closestNotVisible = closestNotVisible;

/***/ },
/* 67 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isInViewport;
	/**
	 * Check if the passed HTMLElement is in the viewport or not
	 *
	 * @name 		isInViewport
	 * @param 		{HTMLElement} 				elm  		The element to insert
	 * @param 		{Object} 					offset 		An object of top, right, bottom and left offset used to detect the status
	 * @return 		{Boolean								If the element is in the viewport or not
	 *
	 * @example  	js
	 * import isInViewport from 'sugarcss/js/dom/isInViewport'
	 * if (isInViewport(myCoolHTMLElement) {
	 * 		// i'm in the viewport
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function isInViewport(elm) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

	  var containerHeight = window.innerHeight || document.documentElement.clientHeight;
	  var containerWidth = window.innerWidth || document.documentElement.clientWidth;
	  var rect = elm.getBoundingClientRect();
	  return rect.top - containerHeight - offset <= 0 && rect.bottom + offset >= 0 && rect.left - containerWidth - offset <= 0 && rect.right + offset >= 0;
	}
	window.__isInViewport = isInViewport;

/***/ },
/* 68 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = throttle;
	/**
	 * This utils function allows you to make sure that a function that will normally be called
	 * several times, for example during a scroll event, to be called once each threshhold time
	 *
	 * @name 			throttle
	 * @example 		js
	 * const myThrottledFn = throttle(() => {
	 * 		// my function content that will be
	 * 		// executed only once each second
	 * }, 1000);
	 *
	 * document.addEventListener('scroll', (e) => {
	 * 		// call my throttled function
	 * 		myThrottledFn();
	 * });
	 *
	 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function throttle(fn, threshhold) {
	    threshhold || (threshhold = 250);
	    var last, deferTimer;
	    return function () {
	        var context = this;

	        var now = +new Date(),
	            args = arguments;
	        if (last && now < last + threshhold) {
	            // hold on to it
	            clearTimeout(deferTimer);
	            deferTimer = setTimeout(function () {
	                last = now;
	                fn.apply(context, args);
	            }, threshhold);
	        } else {
	            last = now;
	            fn.apply(context, args);
	        }
	    };
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = closest;

	var _matches = __webpack_require__(70);

	var _matches2 = _interopRequireDefault(_matches);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Go up the dom three to find the first element that matches the passed selector
	 *
	 * @name 		closest
	 * @param 		{HTMLElement} 					elm  		The element to start on
	 * @param 		{String|Function} 				selector 	A css selector to search for or a check function that will be used
	 * @return 		{HTMLElement} 								The element found or null
	 *
	 * @example  	js
	 * import closest from 'sugarcss/js/dom/closest'
	 * const closestElm = closest(myCoolElement, '.my-cool-class');
	 * if (closestElm) {
	 * 		// we have found en element that matches the selector
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function closest(elm, selector) {
	  elm = elm.parentNode;
	  while (elm && elm != document) {
	    if (typeof selector === 'function') {
	      if (selector(elm)) return elm;
	    } else if (typeof selector === 'string' && (0, _matches2.default)(elm, selector)) {
	      return elm;
	    }
	    elm = elm.parentNode;
	  }
	  return null;
	}
	window.__closest = closest;

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = matches;
	/**
	 * Polyfill for the Element.matches function
	 *
	 * @name 		matches
	 * @param 		{HTMLElement} 			elm  			The element to check
	 * @param 		{String} 				selector 		The selector to check on the element
	 * @return 		{Boolean} 								If the element match the selector or not
	 *
	 * @example  	js
	 * import matches from 'sugarcss/js/dom/matches'
	 * if (matches(myCoolHTMLElement, '.my-cool-css-selector')) {
	 * 		// the element match the selector
	 * }
	 *
	 * @see 		https://developer.mozilla.org/en/docs/Web/API/Element/matches
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function matches(el, selector) {
	  if (el.nodeName == '#comment' || el.nodeName == '#text') {
	    return false;
	  }
	  var p = Element.prototype;
	  var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
	    return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
	  };
	  return f.call(el, selector);
	}

/***/ },
/* 71 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prependChild;
	/**
	 * Prepend an HTMLElement into another HTMLElement
	 *
	 * @name 		prependChild
	 * @param 		{HTMLElement} 				elm  		The element to prepend
	 * @param 		{HTMLElement} 				refElm 		The element in which to prepend the new element
	 * @example  	js
	 * import prependChild from 'sugarcss/js/dom/prependChild'
	 * prependChild(myElementToInsert, theReferenceElement);
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function prependChild(elm, refElm) {
	  if (!refElm.firstChild) {
	    refElm.appendChild(elm);
	  } else {
	    refElm.insertBefore(elm, refElm.firstChild);
	  }
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _constructorName = __webpack_require__(73);

	var _constructorName2 = _interopRequireDefault(_constructorName);

	var _get2 = __webpack_require__(74);

	var _get3 = _interopRequireDefault(_get2);

	var _set2 = __webpack_require__(109);

	var _set3 = _interopRequireDefault(_set2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	/**
	 * @name 		SWathcer
	 * This class allows you to easily monitor some object properties and get the new and old value of it
	 *
	 * @example 	js
	 * // create the watcher instance
	 * const watcher = new SWatcher();
	 *
	 * // object to watch
	 * let myObject = {
	 * 		title : 'Hello World'
	 * };
	 *
	 * // watch the object
	 * watcher.watch(myObject, 'title', (newVal, oldVal) => {
	 *  	// do something when the title changes
	 * });
	 *
	 * // update the title
	 * myObject.title = 'Hello Universe';
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	var SWatcher = function () {

		/**
	  * @constructor
	  */
		function SWatcher() {
			_classCallCheck(this, SWatcher);

			this._watchStack = {};
		}

		/**
	  * Destroy the watcher
	  */

		// static setters = {
		// 	CSSStyleDeclaration : (obj, property, value) => {
		// 		obj.setProperty(property, value);
		// 	}
		// }

		/**
	  * Watch stack
	  * @type 		{Object}
	  */

		_createClass(SWatcher, [{
			key: 'destroy',
			value: function destroy() {}
			// @TODO watcher destroy implementation


			/**
	   * Internal implementation of the defineProp
	   * @param 		{Object} 	obj 		The object to watch
	   * @param 		{String} 	property 	The property of the object to watch
	   * @param 		{Mixed} 	value 		The initial value of the property
	   * @param 		{String} 	objPath 	The object property path to watch
	   */

		}, {
			key: '_defineProp',
			value: function _defineProp(obj, property, value, objPath) {
				var _this2 = this;

				var descriptor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

				// do not define multiple time the description
				if (this._watchStack[objPath]) return;

				// store the current value
				var val = value;
				var currentDescriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

				// custom setter check
				var _set = function _set(value) {
					// check if have a custom setter for this object
					// if (customSetter) {
					// 	customSetter(obj, property, value);
					// 	val = value;
					// }
					// descriptor
					if (currentDescriptor && currentDescriptor.set) {
						var ret = currentDescriptor.set(value);
						if (ret) {
							val = ret;
						} else {
							val = currentDescriptor.get();
						}
					} else {
						val = value;
					}

					// apply the proxy for arrays, etc...
					val = _this2._applyProxy(val, objPath, function (newVal) {
						val = newVal;
					});
				};

				// get the setter
				// let customSetter;
				// for (let name in SWatcher.setters) {
				// 	if (__constructorName(obj) === name) {
				// 		customSetter = SWatcher.setters[name];
				// 		break;
				// 	}
				// }

				// set the value
				_set(value);

				// make sure we have the good currentDescriptor
				var d = Object.getOwnPropertyDescriptor(obj, property);
				Object.defineProperty(obj, property, {
					get: function get() {
						var _val = val;
						if (currentDescriptor && currentDescriptor.get) {
							_val = currentDescriptor.get();
						}
						if (descriptor && descriptor.get) {
							_val = descriptor.get(_val);
						}
						return _val;
					},
					set: function set(v) {
						var oldValue = val;
						if (descriptor && descriptor.set) {
							v = descriptor.set(v);
						}
						// internal set to use the good setter
						_set(v);
						// _notify of new update
						_this2._notify(objPath, val, oldValue);
					},
					configurable: currentDescriptor && currentDescriptor.configurable !== undefined ? currentDescriptor.configurable : false,
					enumarable: currentDescriptor && currentDescriptor.enumarable !== undefined ? currentDescriptor.enumarable : true
				});
			}

			/**
	   * Override some array methods to be able to notify of changes
	   * @param 		{Array} 	array 			The array to process
	   * @param 		{Array} 	methods 		The methods to override
	   * @param 		{String} 	objPath 		The object property path to watch
	   * @param 		{Function} 	setValueCb 		A callback function that will set the updated value
	   */

		}, {
			key: '_overrideArrayMethod',
			value: function _overrideArrayMethod(array, methods, objPath, setValueCb) {
				var _this = this;

				// grab the old value
				var oldVal = array.slice(0);

				// loop on each methods to override
				methods.forEach(function (method) {
					array[method] = function () {
						// array items info object
						var updateInfo = {
							type: Array,
							method: method
						};
						if (method === 'push' || method === 'unshift' || method === 'concat') {
							updateInfo.addedItems = Array.prototype.slice.call(arguments);
						} else if (method === 'pop') {
							updateInfo.removedItems = [oldVal[oldVal.length - 1]];
						} else if (method === 'shift') {
							updateInfo.removedItems = [oldVal[0]];
						}
						// @TODO Check and add missed methods to watch array
						// apply the push
						var ret = Array.prototype[method].apply(this, arguments);
						// set value callback
						setValueCb(this);
						// _notify
						_this._notify(objPath, this, oldVal, updateInfo);
						// return the new value
						return ret;
					};
				});
			}

			/**
	   * Apply a proxy on the variable to detect changes
	   * on arrays, etc...
	   * @param 		{Mixed} 	value 		The value on which to apply the proxy
	   * @param 		{String} 	objPath 	The object property path to watch
	   * @param 		{Function} 	setValueCb 	A function that will be responsible to set the new value intarnally
	   * @return 		{Mixed} 				Return the value
	   */

		}, {
			key: '_applyProxy',
			value: function _applyProxy(value, objPath, setValueCb) {
				// if is an array
				if (value instanceof Array) {
					// override methods
					this._overrideArrayMethod(value, ['push', 'splice', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'concat'], objPath, setValueCb);
				}
				return value;
			}

			/**
	   * Watch something on an object
	   * @param 		{Object} 		object 		The object to watch
	   * @param 		{String} 		path 		The property path to watch on the object
	   * @param 		{Function} 		cb 			The callback called when the property is updated
	   */

		}, {
			key: 'watch',
			value: function watch(object, path, cb) {
				var _this3 = this;

				var descriptor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				// split the path by ',' to watch multiple properties
				if (typeof path === 'string') {
					path = path.split(',');
				}
				if (!path instanceof Array) {
					throw "The 'path' parameter has to be a string or an array...";
				}
				// loop on each path to watch
				path.forEach(function (p) {
					_this3._watch(object, p.trim(), cb, descriptor);
				});
			}

			/**
	   * Internal watch$
	   * @param 		{Object} 		object 		The object to watch
	   * @param 		{String} 		path 		The property path to watch on the object
	   * @param 		{Function} 		cb 			The callback called when the property is updated
	   */

		}, {
			key: '_watch',
			value: function _watch(object, path, cb) {
				var descriptor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				// check if the path parameter has already a descriptor
				var split = path.split('.');
				var obj = object;
				var property = null;
				if (split.length > 1) {
					property = split.pop();
					obj = (0, _get3.default)(object, split.join('.'));
				} else {
					property = split[0];
				}
				var currentValue = null;
				currentValue = (0, _get3.default)(object, path);

				// if is undefined, create the value at null
				if (obj === undefined || currentValue === undefined) {
					(0, _set3.default)(obj, path, null);
					// _set(this, split.join('.'),null);
					// throw `It's not possible to watch the property ${path} cause it does not exist...`;
				};

				// define the property proxy
				this._defineProp(obj, property, currentValue, path, descriptor);

				// register new watch
				if (!this._watchStack[path]) {
					this._watchStack[path] = [];
				}
				this._watchStack[path].push(cb);
			}

			/**
	   * Tell that something has changed
	   * @param 		{String} 		path 		The object property path that has been updated
	   * @param 		{Mixed} 		newValue 	The new property value
	   * @param 		{Mixed} 		oldValue 	The old property value
	   * @param 		{Object} 		[updateInfo=null] 	An object that add information about the update like addedItems for array, etc...
	   */

		}, {
			key: '_notify',
			value: function _notify(path, newValue, oldValue) {
				var updateInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				if (this._watchStack[path] !== undefined && newValue !== oldValue) {
					this._watchStack[path].forEach(function (cb) {
						cb(newValue, oldValue, updateInfo);
					});
				}
			}
		}]);

		return SWatcher;
	}();

	exports.default = SWatcher;

/***/ },
/* 73 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = constructorName;
	/**
	 * Return the constructor name of the passed object
	 *
	 * @name 		constructorName
	 * @param 		{Object} 			obj 		The object to get the constructor name from
	 * @return 		{String}						The constructor name
	 *
	 * @example 	js
	 * class MyCoolClass {
	 * 		// class implementation...
	 * }
	 * const myObj = new MyCoolClass();
	 * console.log(constructorName(myObj)); => MyCoolClass
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function constructorName(obj) {
	  var funcNameRegex = /function (.{1,})\(/;

	  var res = funcNameRegex.exec(obj.toString());
	  if (res && res[1]) return res[1];

	  var results = funcNameRegex.exec(obj.constructor.toString());
	  return results && results.length > 1 ? results[1] : "";
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(75);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(76),
	    toKey = __webpack_require__(108);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = castPath(path, object);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(46),
	    isKey = __webpack_require__(77),
	    stringToPath = __webpack_require__(79),
	    toString = __webpack_require__(105);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value, object) {
	  if (isArray(value)) {
	    return value;
	  }
	  return isKey(value, object) ? [value] : stringToPath(toString(value));
	}

	module.exports = castPath;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(46),
	    isSymbol = __webpack_require__(78);

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
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(15),
	    isObjectLike = __webpack_require__(45);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
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
	    (isObjectLike(value) && baseGetTag(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var memoizeCapped = __webpack_require__(80);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function(string) {
	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(81);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function(key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(82);

	/** Error message constants. */
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
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
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
	  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
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
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(83),
	    mapCacheDelete = __webpack_require__(99),
	    mapCacheGet = __webpack_require__(102),
	    mapCacheHas = __webpack_require__(103),
	    mapCacheSet = __webpack_require__(104);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(84),
	    ListCache = __webpack_require__(91),
	    Map = __webpack_require__(98);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(85),
	    hashDelete = __webpack_require__(87),
	    hashGet = __webpack_require__(88),
	    hashHas = __webpack_require__(89),
	    hashSet = __webpack_require__(90);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(86);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(86);

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
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(86);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(86);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(92),
	    listCacheDelete = __webpack_require__(93),
	    listCacheGet = __webpack_require__(95),
	    listCacheHas = __webpack_require__(96),
	    listCacheSet = __webpack_require__(97);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(94);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(26);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(94);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(94);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(94);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(12),
	    root = __webpack_require__(17);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(100);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(101);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 101 */
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
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(100);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(100);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(100);

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
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(106);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
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
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(16),
	    arrayMap = __webpack_require__(107),
	    isArray = __webpack_require__(46),
	    isSymbol = __webpack_require__(78);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(78);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var baseSet = __webpack_require__(110);

	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}

	module.exports = set;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(9),
	    castPath = __webpack_require__(76),
	    isIndex = __webpack_require__(39),
	    isObject = __webpack_require__(21),
	    toKey = __webpack_require__(108);

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!isObject(object)) {
	    return object;
	  }
	  path = castPath(path, object);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]),
	        newValue = value;

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}

	module.exports = baseSet;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = propertyProxy;

	var _get2 = __webpack_require__(74);

	var _get3 = _interopRequireDefault(_get2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Create a proxy for and object property.
	 * This gives you the possibility to process the data of the property
	 * when it is getted or setted.
	 *
	 * @name 		propertyProxy
	 * @param 		{Object} 		obj 			The object on which to create the proxy
	 * @param 		{String} 		property 		The property name that will be proxied
	 * @param 		{Object} 		descriptor 		A descriptor object that contains at least a get or a set method, or both
	 * @param 		{Boolean} 		applySetterAtStart 	If need to apply the descriptor setter directly on the current value or not
	 *
	 * @example 	js
	 * const myObject = {
	 * 		title : 'World'
	 * };
	 * // create the proxy
	 * propertyProxy(myObject, 'title', {
	 * 		get : (value) => {
	 * 			return `Hello ${value}`;
	 * 		},
	 * 		set : (value) => {
	 * 			return `Youhou ${value}`;
	 * 		}
	 * });
	 * console.log(myObject.title) => 'Hello World';
	 * myObject.title = 'Universe';
	 * console.log(myObject.title) => 'Hello Youhou Universe';
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function propertyProxy(obj, property, descriptor) {
		var applySetterAtStart = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

		// store the current value
		var val = (0, _get3.default)(obj, property);
		var currentDescriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

		// custom setter check
		var _set = function _set(value) {

			if (descriptor.set) {
				value = descriptor.set(value);
			}

			// descriptor
			if (currentDescriptor && currentDescriptor.set) {
				var ret = currentDescriptor.set(value);
				if (ret) {
					val = ret;
				} else {
					val = currentDescriptor.get();
				}
			} else {
				val = value;
			}
		};

		// apply the setter if needed
		if (applySetterAtStart) _set(val);

		// make sure we have the good descriptor
		var d = Object.getOwnPropertyDescriptor(obj, property);
		Object.defineProperty(obj, property, {
			get: function get() {
				var _val = val;
				if (descriptor.get) {
					_val = descriptor.get(_val);
				}
				if (currentDescriptor && currentDescriptor.get) {
					_val = currentDescriptor.get();
				}
				return _val;
			},
			set: function set(v) {
				// const oldValue = val;
				// internal set to use the good setter
				_set(v);
				// notify of new update
				// this.notify(objPath, val, oldValue);
			},
			configurable: currentDescriptor && currentDescriptor.configurable !== undefined ? currentDescriptor.configurable : false,
			enumarable: currentDescriptor && currentDescriptor.enumarable !== undefined ? currentDescriptor.enumarable : true
		});

		// return the value
		return val;
	}

/***/ },
/* 112 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!

	Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.

	*/
	// global window Object
	// optional polyfill info
	//    'auto' used by default, everything is feature detected
	//    'force' use the polyfill even if not fully needed
	function installCustomElements(window, polyfill) {'use strict';

	  // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
	  // THIS IS A PROJECT BASED ON A BUILD SYSTEM
	  // THIS FILE IS JUST WRAPPED UP RESULTING IN
	  // build/document-register-element.node.js

	  var
	    document = window.document,
	    Object = window.Object
	  ;

	  var htmlClass = (function (info) {
	    // (C) Andrea Giammarchi - @WebReflection - MIT Style
	    var
	      catchClass = /^[A-Z]+[a-z]/,
	      filterBy = function (re) {
	        var arr = [], tag;
	        for (tag in register) {
	          if (re.test(tag)) arr.push(tag);
	        }
	        return arr;
	      },
	      add = function (Class, tag) {
	        tag = tag.toLowerCase();
	        if (!(tag in register)) {
	          register[Class] = (register[Class] || []).concat(tag);
	          register[tag] = (register[tag.toUpperCase()] = Class);
	        }
	      },
	      register = (Object.create || Object)(null),
	      htmlClass = {},
	      i, section, tags, Class
	    ;
	    for (section in info) {
	      for (Class in info[section]) {
	        tags = info[section][Class];
	        register[Class] = tags;
	        for (i = 0; i < tags.length; i++) {
	          register[tags[i].toLowerCase()] =
	          register[tags[i].toUpperCase()] = Class;
	        }
	      }
	    }
	    htmlClass.get = function get(tagOrClass) {
	      return typeof tagOrClass === 'string' ?
	        (register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '')) :
	        filterBy(tagOrClass);
	    };
	    htmlClass.set = function set(tag, Class) {
	      return (catchClass.test(tag) ?
	        add(tag, Class) :
	        add(Class, tag)
	      ), htmlClass;
	    };
	    return htmlClass;
	  }({
	    "collections": {
	      "HTMLAllCollection": [
	        "all"
	      ],
	      "HTMLCollection": [
	        "forms"
	      ],
	      "HTMLFormControlsCollection": [
	        "elements"
	      ],
	      "HTMLOptionsCollection": [
	        "options"
	      ]
	    },
	    "elements": {
	      "Element": [
	        "element"
	      ],
	      "HTMLAnchorElement": [
	        "a"
	      ],
	      "HTMLAppletElement": [
	        "applet"
	      ],
	      "HTMLAreaElement": [
	        "area"
	      ],
	      "HTMLAttachmentElement": [
	        "attachment"
	      ],
	      "HTMLAudioElement": [
	        "audio"
	      ],
	      "HTMLBRElement": [
	        "br"
	      ],
	      "HTMLBaseElement": [
	        "base"
	      ],
	      "HTMLBodyElement": [
	        "body"
	      ],
	      "HTMLButtonElement": [
	        "button"
	      ],
	      "HTMLCanvasElement": [
	        "canvas"
	      ],
	      "HTMLContentElement": [
	        "content"
	      ],
	      "HTMLDListElement": [
	        "dl"
	      ],
	      "HTMLDataElement": [
	        "data"
	      ],
	      "HTMLDataListElement": [
	        "datalist"
	      ],
	      "HTMLDetailsElement": [
	        "details"
	      ],
	      "HTMLDialogElement": [
	        "dialog"
	      ],
	      "HTMLDirectoryElement": [
	        "dir"
	      ],
	      "HTMLDivElement": [
	        "div"
	      ],
	      "HTMLDocument": [
	        "document"
	      ],
	      "HTMLElement": [
	        "element",
	        "abbr",
	        "address",
	        "article",
	        "aside",
	        "b",
	        "bdi",
	        "bdo",
	        "cite",
	        "code",
	        "command",
	        "dd",
	        "dfn",
	        "dt",
	        "em",
	        "figcaption",
	        "figure",
	        "footer",
	        "header",
	        "i",
	        "kbd",
	        "mark",
	        "nav",
	        "noscript",
	        "rp",
	        "rt",
	        "ruby",
	        "s",
	        "samp",
	        "section",
	        "small",
	        "strong",
	        "sub",
	        "summary",
	        "sup",
	        "u",
	        "var",
	        "wbr"
	      ],
	      "HTMLEmbedElement": [
	        "embed"
	      ],
	      "HTMLFieldSetElement": [
	        "fieldset"
	      ],
	      "HTMLFontElement": [
	        "font"
	      ],
	      "HTMLFormElement": [
	        "form"
	      ],
	      "HTMLFrameElement": [
	        "frame"
	      ],
	      "HTMLFrameSetElement": [
	        "frameset"
	      ],
	      "HTMLHRElement": [
	        "hr"
	      ],
	      "HTMLHeadElement": [
	        "head"
	      ],
	      "HTMLHeadingElement": [
	        "h1",
	        "h2",
	        "h3",
	        "h4",
	        "h5",
	        "h6"
	      ],
	      "HTMLHtmlElement": [
	        "html"
	      ],
	      "HTMLIFrameElement": [
	        "iframe"
	      ],
	      "HTMLImageElement": [
	        "img"
	      ],
	      "HTMLInputElement": [
	        "input"
	      ],
	      "HTMLKeygenElement": [
	        "keygen"
	      ],
	      "HTMLLIElement": [
	        "li"
	      ],
	      "HTMLLabelElement": [
	        "label"
	      ],
	      "HTMLLegendElement": [
	        "legend"
	      ],
	      "HTMLLinkElement": [
	        "link"
	      ],
	      "HTMLMapElement": [
	        "map"
	      ],
	      "HTMLMarqueeElement": [
	        "marquee"
	      ],
	      "HTMLMediaElement": [
	        "media"
	      ],
	      "HTMLMenuElement": [
	        "menu"
	      ],
	      "HTMLMenuItemElement": [
	        "menuitem"
	      ],
	      "HTMLMetaElement": [
	        "meta"
	      ],
	      "HTMLMeterElement": [
	        "meter"
	      ],
	      "HTMLModElement": [
	        "del",
	        "ins"
	      ],
	      "HTMLOListElement": [
	        "ol"
	      ],
	      "HTMLObjectElement": [
	        "object"
	      ],
	      "HTMLOptGroupElement": [
	        "optgroup"
	      ],
	      "HTMLOptionElement": [
	        "option"
	      ],
	      "HTMLOutputElement": [
	        "output"
	      ],
	      "HTMLParagraphElement": [
	        "p"
	      ],
	      "HTMLParamElement": [
	        "param"
	      ],
	      "HTMLPictureElement": [
	        "picture"
	      ],
	      "HTMLPreElement": [
	        "pre"
	      ],
	      "HTMLProgressElement": [
	        "progress"
	      ],
	      "HTMLQuoteElement": [
	        "blockquote",
	        "q",
	        "quote"
	      ],
	      "HTMLScriptElement": [
	        "script"
	      ],
	      "HTMLSelectElement": [
	        "select"
	      ],
	      "HTMLShadowElement": [
	        "shadow"
	      ],
	      "HTMLSlotElement": [
	        "slot"
	      ],
	      "HTMLSourceElement": [
	        "source"
	      ],
	      "HTMLSpanElement": [
	        "span"
	      ],
	      "HTMLStyleElement": [
	        "style"
	      ],
	      "HTMLTableCaptionElement": [
	        "caption"
	      ],
	      "HTMLTableCellElement": [
	        "td",
	        "th"
	      ],
	      "HTMLTableColElement": [
	        "col",
	        "colgroup"
	      ],
	      "HTMLTableElement": [
	        "table"
	      ],
	      "HTMLTableRowElement": [
	        "tr"
	      ],
	      "HTMLTableSectionElement": [
	        "thead",
	        "tbody",
	        "tfoot"
	      ],
	      "HTMLTemplateElement": [
	        "template"
	      ],
	      "HTMLTextAreaElement": [
	        "textarea"
	      ],
	      "HTMLTimeElement": [
	        "time"
	      ],
	      "HTMLTitleElement": [
	        "title"
	      ],
	      "HTMLTrackElement": [
	        "track"
	      ],
	      "HTMLUListElement": [
	        "ul"
	      ],
	      "HTMLUnknownElement": [
	        "unknown",
	        "vhgroupv",
	        "vkeygen"
	      ],
	      "HTMLVideoElement": [
	        "video"
	      ]
	    },
	    "nodes": {
	      "Attr": [
	        "node"
	      ],
	      "Audio": [
	        "audio"
	      ],
	      "CDATASection": [
	        "node"
	      ],
	      "CharacterData": [
	        "node"
	      ],
	      "Comment": [
	        "#comment"
	      ],
	      "Document": [
	        "#document"
	      ],
	      "DocumentFragment": [
	        "#document-fragment"
	      ],
	      "DocumentType": [
	        "node"
	      ],
	      "HTMLDocument": [
	        "#document"
	      ],
	      "Image": [
	        "img"
	      ],
	      "Option": [
	        "option"
	      ],
	      "ProcessingInstruction": [
	        "node"
	      ],
	      "ShadowRoot": [
	        "#shadow-root"
	      ],
	      "Text": [
	        "#text"
	      ],
	      "XMLDocument": [
	        "xml"
	      ]
	    }
	  }));
	  
	  
	    
	  // passed at runtime, configurable
	  // via nodejs module
	  if (!polyfill) polyfill = 'auto';
	  
	  var
	    // V0 polyfill entry
	    REGISTER_ELEMENT = 'registerElement',
	  
	    // IE < 11 only + old WebKit for attributes + feature detection
	    EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),
	  
	    // shortcuts and costants
	    ADD_EVENT_LISTENER = 'addEventListener',
	    ATTACHED = 'attached',
	    CALLBACK = 'Callback',
	    DETACHED = 'detached',
	    EXTENDS = 'extends',
	  
	    ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
	    ATTACHED_CALLBACK = ATTACHED + CALLBACK,
	    CONNECTED_CALLBACK = 'connected' + CALLBACK,
	    DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
	    CREATED_CALLBACK = 'created' + CALLBACK,
	    DETACHED_CALLBACK = DETACHED + CALLBACK,
	  
	    ADDITION = 'ADDITION',
	    MODIFICATION = 'MODIFICATION',
	    REMOVAL = 'REMOVAL',
	  
	    DOM_ATTR_MODIFIED = 'DOMAttrModified',
	    DOM_CONTENT_LOADED = 'DOMContentLoaded',
	    DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
	  
	    PREFIX_TAG = '<',
	    PREFIX_IS = '=',
	  
	    // valid and invalid node names
	    validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
	    invalidNames = [
	      'ANNOTATION-XML',
	      'COLOR-PROFILE',
	      'FONT-FACE',
	      'FONT-FACE-SRC',
	      'FONT-FACE-URI',
	      'FONT-FACE-FORMAT',
	      'FONT-FACE-NAME',
	      'MISSING-GLYPH'
	    ],
	  
	    // registered types and their prototypes
	    types = [],
	    protos = [],
	  
	    // to query subnodes
	    query = '',
	  
	    // html shortcut used to feature detect
	    documentElement = document.documentElement,
	  
	    // ES5 inline helpers || basic patches
	    indexOf = types.indexOf || function (v) {
	      for(var i = this.length; i-- && this[i] !== v;){}
	      return i;
	    },
	  
	    // other helpers / shortcuts
	    OP = Object.prototype,
	    hOP = OP.hasOwnProperty,
	    iPO = OP.isPrototypeOf,
	  
	    defineProperty = Object.defineProperty,
	    empty = [],
	    gOPD = Object.getOwnPropertyDescriptor,
	    gOPN = Object.getOwnPropertyNames,
	    gPO = Object.getPrototypeOf,
	    sPO = Object.setPrototypeOf,
	  
	    // jshint proto: true
	    hasProto = !!Object.__proto__,
	  
	    // V1 helpers
	    fixGetClass = false,
	    DRECEV1 = '__dreCEv1',
	    customElements = window.customElements,
	    usableCustomElements = polyfill !== 'force' && !!(
	      customElements &&
	      customElements.define &&
	      customElements.get &&
	      customElements.whenDefined
	    ),
	    Dict = Object.create || Object,
	    Map = window.Map || function Map() {
	      var K = [], V = [], i;
	      return {
	        get: function (k) {
	          return V[indexOf.call(K, k)];
	        },
	        set: function (k, v) {
	          i = indexOf.call(K, k);
	          if (i < 0) V[K.push(k) - 1] = v;
	          else V[i] = v;
	        }
	      };
	    },
	    Promise = window.Promise || function (fn) {
	      var
	        notify = [],
	        done = false,
	        p = {
	          'catch': function () {
	            return p;
	          },
	          'then': function (cb) {
	            notify.push(cb);
	            if (done) setTimeout(resolve, 1);
	            return p;
	          }
	        }
	      ;
	      function resolve(value) {
	        done = true;
	        while (notify.length) notify.shift()(value);
	      }
	      fn(resolve);
	      return p;
	    },
	    justCreated = false,
	    constructors = Dict(null),
	    waitingList = Dict(null),
	    nodeNames = new Map(),
	    secondArgument = String,
	  
	    // used to create unique instances
	    create = Object.create || function Bridge(proto) {
	      // silly broken polyfill probably ever used but short enough to work
	      return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
	    },
	  
	    // will set the prototype if possible
	    // or copy over all properties
	    setPrototype = sPO || (
	      hasProto ?
	        function (o, p) {
	          o.__proto__ = p;
	          return o;
	        } : (
	      (gOPN && gOPD) ?
	        (function(){
	          function setProperties(o, p) {
	            for (var
	              key,
	              names = gOPN(p),
	              i = 0, length = names.length;
	              i < length; i++
	            ) {
	              key = names[i];
	              if (!hOP.call(o, key)) {
	                defineProperty(o, key, gOPD(p, key));
	              }
	            }
	          }
	          return function (o, p) {
	            do {
	              setProperties(o, p);
	            } while ((p = gPO(p)) && !iPO.call(p, o));
	            return o;
	          };
	        }()) :
	        function (o, p) {
	          for (var key in p) {
	            o[key] = p[key];
	          }
	          return o;
	        }
	    )),
	  
	    // DOM shortcuts and helpers, if any
	  
	    MutationObserver = window.MutationObserver ||
	                       window.WebKitMutationObserver,
	  
	    HTMLElementPrototype = (
	      window.HTMLElement ||
	      window.Element ||
	      window.Node
	    ).prototype,
	  
	    IE8 = !iPO.call(HTMLElementPrototype, documentElement),
	  
	    safeProperty = IE8 ? function (o, k, d) {
	      o[k] = d.value;
	      return o;
	    } : defineProperty,
	  
	    isValidNode = IE8 ?
	      function (node) {
	        return node.nodeType === 1;
	      } :
	      function (node) {
	        return iPO.call(HTMLElementPrototype, node);
	      },
	  
	    targets = IE8 && [],
	  
	    attachShadow = HTMLElementPrototype.attachShadow,
	    cloneNode = HTMLElementPrototype.cloneNode,
	    dispatchEvent = HTMLElementPrototype.dispatchEvent,
	    getAttribute = HTMLElementPrototype.getAttribute,
	    hasAttribute = HTMLElementPrototype.hasAttribute,
	    removeAttribute = HTMLElementPrototype.removeAttribute,
	    setAttribute = HTMLElementPrototype.setAttribute,
	  
	    // replaced later on
	    createElement = document.createElement,
	    patchedCreateElement = createElement,
	  
	    // shared observer for all attributes
	    attributesObserver = MutationObserver && {
	      attributes: true,
	      characterData: true,
	      attributeOldValue: true
	    },
	  
	    // useful to detect only if there's no MutationObserver
	    DOMAttrModified = MutationObserver || function(e) {
	      doesNotSupportDOMAttrModified = false;
	      documentElement.removeEventListener(
	        DOM_ATTR_MODIFIED,
	        DOMAttrModified
	      );
	    },
	  
	    // will both be used to make DOMNodeInserted asynchronous
	    asapQueue,
	    asapTimer = 0,
	  
	    // internal flags
	    V0 = REGISTER_ELEMENT in document,
	    setListener = true,
	    justSetup = false,
	    doesNotSupportDOMAttrModified = true,
	    dropDomContentLoaded = true,
	  
	    // needed for the innerHTML helper
	    notFromInnerHTMLHelper = true,
	  
	    // optionally defined later on
	    onSubtreeModified,
	    callDOMAttrModified,
	    getAttributesMirror,
	    observer,
	    observe,
	  
	    // based on setting prototype capability
	    // will check proto or the expando attribute
	    // in order to setup the node once
	    patchIfNotAlready,
	    patch
	  ;
	  
	  // only if needed
	  if (!V0) {
	  
	    if (sPO || hasProto) {
	        patchIfNotAlready = function (node, proto) {
	          if (!iPO.call(proto, node)) {
	            setupNode(node, proto);
	          }
	        };
	        patch = setupNode;
	    } else {
	        patchIfNotAlready = function (node, proto) {
	          if (!node[EXPANDO_UID]) {
	            node[EXPANDO_UID] = Object(true);
	            setupNode(node, proto);
	          }
	        };
	        patch = patchIfNotAlready;
	    }
	  
	    if (IE8) {
	      doesNotSupportDOMAttrModified = false;
	      (function (){
	        var
	          descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
	          addEventListener = descriptor.value,
	          patchedRemoveAttribute = function (name) {
	            var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
	            e.attrName = name;
	            e.prevValue = getAttribute.call(this, name);
	            e.newValue = null;
	            e[REMOVAL] = e.attrChange = 2;
	            removeAttribute.call(this, name);
	            dispatchEvent.call(this, e);
	          },
	          patchedSetAttribute = function (name, value) {
	            var
	              had = hasAttribute.call(this, name),
	              old = had && getAttribute.call(this, name),
	              e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
	            ;
	            setAttribute.call(this, name, value);
	            e.attrName = name;
	            e.prevValue = had ? old : null;
	            e.newValue = value;
	            if (had) {
	              e[MODIFICATION] = e.attrChange = 1;
	            } else {
	              e[ADDITION] = e.attrChange = 0;
	            }
	            dispatchEvent.call(this, e);
	          },
	          onPropertyChange = function (e) {
	            // jshint eqnull:true
	            var
	              node = e.currentTarget,
	              superSecret = node[EXPANDO_UID],
	              propertyName = e.propertyName,
	              event
	            ;
	            if (superSecret.hasOwnProperty(propertyName)) {
	              superSecret = superSecret[propertyName];
	              event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
	              event.attrName = superSecret.name;
	              event.prevValue = superSecret.value || null;
	              event.newValue = (superSecret.value = node[propertyName] || null);
	              if (event.prevValue == null) {
	                event[ADDITION] = event.attrChange = 0;
	              } else {
	                event[MODIFICATION] = event.attrChange = 1;
	              }
	              dispatchEvent.call(node, event);
	            }
	          }
	        ;
	        descriptor.value = function (type, handler, capture) {
	          if (
	            type === DOM_ATTR_MODIFIED &&
	            this[ATTRIBUTE_CHANGED_CALLBACK] &&
	            this.setAttribute !== patchedSetAttribute
	          ) {
	            this[EXPANDO_UID] = {
	              className: {
	                name: 'class',
	                value: this.className
	              }
	            };
	            this.setAttribute = patchedSetAttribute;
	            this.removeAttribute = patchedRemoveAttribute;
	            addEventListener.call(this, 'propertychange', onPropertyChange);
	          }
	          addEventListener.call(this, type, handler, capture);
	        };
	        defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
	      }());
	    } else if (!MutationObserver) {
	      documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
	      documentElement.setAttribute(EXPANDO_UID, 1);
	      documentElement.removeAttribute(EXPANDO_UID);
	      if (doesNotSupportDOMAttrModified) {
	        onSubtreeModified = function (e) {
	          var
	            node = this,
	            oldAttributes,
	            newAttributes,
	            key
	          ;
	          if (node === e.target) {
	            oldAttributes = node[EXPANDO_UID];
	            node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
	            for (key in newAttributes) {
	              if (!(key in oldAttributes)) {
	                // attribute was added
	                return callDOMAttrModified(
	                  0,
	                  node,
	                  key,
	                  oldAttributes[key],
	                  newAttributes[key],
	                  ADDITION
	                );
	              } else if (newAttributes[key] !== oldAttributes[key]) {
	                // attribute was changed
	                return callDOMAttrModified(
	                  1,
	                  node,
	                  key,
	                  oldAttributes[key],
	                  newAttributes[key],
	                  MODIFICATION
	                );
	              }
	            }
	            // checking if it has been removed
	            for (key in oldAttributes) {
	              if (!(key in newAttributes)) {
	                // attribute removed
	                return callDOMAttrModified(
	                  2,
	                  node,
	                  key,
	                  oldAttributes[key],
	                  newAttributes[key],
	                  REMOVAL
	                );
	              }
	            }
	          }
	        };
	        callDOMAttrModified = function (
	          attrChange,
	          currentTarget,
	          attrName,
	          prevValue,
	          newValue,
	          action
	        ) {
	          var e = {
	            attrChange: attrChange,
	            currentTarget: currentTarget,
	            attrName: attrName,
	            prevValue: prevValue,
	            newValue: newValue
	          };
	          e[action] = attrChange;
	          onDOMAttrModified(e);
	        };
	        getAttributesMirror = function (node) {
	          for (var
	            attr, name,
	            result = {},
	            attributes = node.attributes,
	            i = 0, length = attributes.length;
	            i < length; i++
	          ) {
	            attr = attributes[i];
	            name = attr.name;
	            if (name !== 'setAttribute') {
	              result[name] = attr.value;
	            }
	          }
	          return result;
	        };
	      }
	    }
	  
	    // set as enumerable, writable and configurable
	    document[REGISTER_ELEMENT] = function registerElement(type, options) {
	      upperType = type.toUpperCase();
	      if (setListener) {
	        // only first time document.registerElement is used
	        // we need to set this listener
	        // setting it by default might slow down for no reason
	        setListener = false;
	        if (MutationObserver) {
	          observer = (function(attached, detached){
	            function checkEmAll(list, callback) {
	              for (var i = 0, length = list.length; i < length; callback(list[i++])){}
	            }
	            return new MutationObserver(function (records) {
	              for (var
	                current, node, newValue,
	                i = 0, length = records.length; i < length; i++
	              ) {
	                current = records[i];
	                if (current.type === 'childList') {
	                  checkEmAll(current.addedNodes, attached);
	                  checkEmAll(current.removedNodes, detached);
	                } else {
	                  node = current.target;
	                  if (notFromInnerHTMLHelper &&
	                      node[ATTRIBUTE_CHANGED_CALLBACK] &&
	                      current.attributeName !== 'style') {
	                    newValue = getAttribute.call(node, current.attributeName);
	                    if (newValue !== current.oldValue) {
	                      node[ATTRIBUTE_CHANGED_CALLBACK](
	                        current.attributeName,
	                        current.oldValue,
	                        newValue
	                      );
	                    }
	                  }
	                }
	              }
	            });
	          }(executeAction(ATTACHED), executeAction(DETACHED)));
	          observe = function (node) {
	            observer.observe(
	              node,
	              {
	                childList: true,
	                subtree: true
	              }
	            );
	            return node;
	          };
	          observe(document);
	          if (attachShadow) {
	            HTMLElementPrototype.attachShadow = function () {
	              return observe(attachShadow.apply(this, arguments));
	            };
	          }
	        } else {
	          asapQueue = [];
	          document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
	          document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
	        }
	  
	        document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
	        document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);
	  
	        HTMLElementPrototype.cloneNode = function (deep) {
	          var
	            node = cloneNode.call(this, !!deep),
	            i = getTypeIndex(node)
	          ;
	          if (-1 < i) patch(node, protos[i]);
	          if (deep && query.length) loopAndSetup(node.querySelectorAll(query));
	          return node;
	        };
	      }
	  
	      if (justSetup) return (justSetup = false);
	  
	      if (-2 < (
	        indexOf.call(types, PREFIX_IS + upperType) +
	        indexOf.call(types, PREFIX_TAG + upperType)
	      )) {
	        throwTypeError(type);
	      }
	  
	      if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
	        throw new Error('The type ' + type + ' is invalid');
	      }
	  
	      var
	        constructor = function () {
	          return extending ?
	            document.createElement(nodeName, upperType) :
	            document.createElement(nodeName);
	        },
	        opt = options || OP,
	        extending = hOP.call(opt, EXTENDS),
	        nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
	        upperType,
	        i
	      ;
	  
	      if (extending && -1 < (
	        indexOf.call(types, PREFIX_TAG + nodeName)
	      )) {
	        throwTypeError(nodeName);
	      }
	  
	      i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;
	  
	      query = query.concat(
	        query.length ? ',' : '',
	        extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
	      );
	  
	      constructor.prototype = (
	        protos[i] = hOP.call(opt, 'prototype') ?
	          opt.prototype :
	          create(HTMLElementPrototype)
	      );
	  
	      if (query.length) loopAndVerify(
	        document.querySelectorAll(query),
	        ATTACHED
	      );
	  
	      return constructor;
	    };
	  
	    document.createElement = (patchedCreateElement = function (localName, typeExtension) {
	      var
	        is = getIs(typeExtension),
	        node = is ?
	          createElement.call(document, localName, secondArgument(is)) :
	          createElement.call(document, localName),
	        name = '' + localName,
	        i = indexOf.call(
	          types,
	          (is ? PREFIX_IS : PREFIX_TAG) +
	          (is || name).toUpperCase()
	        ),
	        setup = -1 < i
	      ;
	      if (is) {
	        node.setAttribute('is', is = is.toLowerCase());
	        if (setup) {
	          setup = isInQSA(name.toUpperCase(), is);
	        }
	      }
	      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
	      if (setup) patch(node, protos[i]);
	      return node;
	    });
	  
	  }
	  
	  function ASAP() {
	    var queue = asapQueue.splice(0, asapQueue.length);
	    asapTimer = 0;
	    while (queue.length) {
	      queue.shift().call(
	        null, queue.shift()
	      );
	    }
	  }
	  
	  function loopAndVerify(list, action) {
	    for (var i = 0, length = list.length; i < length; i++) {
	      verifyAndSetupAndAction(list[i], action);
	    }
	  }
	  
	  function loopAndSetup(list) {
	    for (var i = 0, length = list.length, node; i < length; i++) {
	      node = list[i];
	      patch(node, protos[getTypeIndex(node)]);
	    }
	  }
	  
	  function executeAction(action) {
	    return function (node) {
	      if (isValidNode(node)) {
	        verifyAndSetupAndAction(node, action);
	        if (query.length) loopAndVerify(
	          node.querySelectorAll(query),
	          action
	        );
	      }
	    };
	  }
	  
	  function getTypeIndex(target) {
	    var
	      is = getAttribute.call(target, 'is'),
	      nodeName = target.nodeName.toUpperCase(),
	      i = indexOf.call(
	        types,
	        is ?
	            PREFIX_IS + is.toUpperCase() :
	            PREFIX_TAG + nodeName
	      )
	    ;
	    return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
	  }
	  
	  function isInQSA(name, type) {
	    return -1 < query.indexOf(name + '[is="' + type + '"]');
	  }
	  
	  function onDOMAttrModified(e) {
	    var
	      node = e.currentTarget,
	      attrChange = e.attrChange,
	      attrName = e.attrName,
	      target = e.target,
	      addition = e[ADDITION] || 2,
	      removal = e[REMOVAL] || 3
	    ;
	    if (notFromInnerHTMLHelper &&
	        (!target || target === node) &&
	        node[ATTRIBUTE_CHANGED_CALLBACK] &&
	        attrName !== 'style' && (
	          e.prevValue !== e.newValue ||
	          // IE9, IE10, and Opera 12 gotcha
	          e.newValue === '' && (
	            attrChange === addition ||
	            attrChange === removal
	          )
	    )) {
	      node[ATTRIBUTE_CHANGED_CALLBACK](
	        attrName,
	        attrChange === addition ? null : e.prevValue,
	        attrChange === removal ? null : e.newValue
	      );
	    }
	  }
	  
	  function onDOMNode(action) {
	    var executor = executeAction(action);
	    return function (e) {
	      asapQueue.push(executor, e.target);
	      if (asapTimer) clearTimeout(asapTimer);
	      asapTimer = setTimeout(ASAP, 1);
	    };
	  }
	  
	  function onReadyStateChange(e) {
	    if (dropDomContentLoaded) {
	      dropDomContentLoaded = false;
	      e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
	    }
	    if (query.length) loopAndVerify(
	      (e.target || document).querySelectorAll(query),
	      e.detail === DETACHED ? DETACHED : ATTACHED
	    );
	    if (IE8) purge();
	  }
	  
	  function patchedSetAttribute(name, value) {
	    // jshint validthis:true
	    var self = this;
	    setAttribute.call(self, name, value);
	    onSubtreeModified.call(self, {target: self});
	  }
	  
	  function setupNode(node, proto) {
	    setPrototype(node, proto);
	    if (observer) {
	      observer.observe(node, attributesObserver);
	    } else {
	      if (doesNotSupportDOMAttrModified) {
	        node.setAttribute = patchedSetAttribute;
	        node[EXPANDO_UID] = getAttributesMirror(node);
	        node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
	      }
	      node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
	    }
	    if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
	      node.created = true;
	      node[CREATED_CALLBACK]();
	      node.created = false;
	    }
	  }
	  
	  function purge() {
	    for (var
	      node,
	      i = 0,
	      length = targets.length;
	      i < length; i++
	    ) {
	      node = targets[i];
	      if (!documentElement.contains(node)) {
	        length--;
	        targets.splice(i--, 1);
	        verifyAndSetupAndAction(node, DETACHED);
	      }
	    }
	  }
	  
	  function throwTypeError(type) {
	    throw new Error('A ' + type + ' type is already registered');
	  }
	  
	  function verifyAndSetupAndAction(node, action) {
	    var
	      fn,
	      i = getTypeIndex(node)
	    ;
	    if (-1 < i) {
	      patchIfNotAlready(node, protos[i]);
	      i = 0;
	      if (action === ATTACHED && !node[ATTACHED]) {
	        node[DETACHED] = false;
	        node[ATTACHED] = true;
	        i = 1;
	        if (IE8 && indexOf.call(targets, node) < 0) {
	          targets.push(node);
	        }
	      } else if (action === DETACHED && !node[DETACHED]) {
	        node[ATTACHED] = false;
	        node[DETACHED] = true;
	        i = 1;
	      }
	      if (i && (fn = node[action + CALLBACK])) fn.call(node);
	    }
	  }
	  
	  
	  
	  // V1 in da House!
	  function CustomElementRegistry() {}
	  
	  CustomElementRegistry.prototype = {
	    constructor: CustomElementRegistry,
	    // a workaround for the stubborn WebKit
	    define: usableCustomElements ?
	      function (name, Class, options) {
	        if (options) {
	          CERDefine(name, Class, options);
	        } else {
	          var NAME = name.toUpperCase();
	          constructors[NAME] = {
	            constructor: Class,
	            create: [NAME]
	          };
	          nodeNames.set(Class, NAME);
	          customElements.define(name, Class);
	        }
	      } :
	      CERDefine,
	    get: usableCustomElements ?
	      function (name) {
	        return customElements.get(name) || get(name);
	      } :
	      get,
	    whenDefined: usableCustomElements ?
	      function (name) {
	        return Promise.race([
	          customElements.whenDefined(name),
	          whenDefined(name)
	        ]);
	      } :
	      whenDefined
	  };
	  
	  function CERDefine(name, Class, options) {
	    var
	      is = options && options[EXTENDS] || '',
	      CProto = Class.prototype,
	      proto = create(CProto),
	      attributes = Class.observedAttributes || empty,
	      definition = {prototype: proto}
	    ;
	    // TODO: is this needed at all since it's inherited?
	    // defineProperty(proto, 'constructor', {value: Class});
	    safeProperty(proto, CREATED_CALLBACK, {
	        value: function () {
	          if (justCreated) justCreated = false;
	          else if (!this[DRECEV1]) {
	            this[DRECEV1] = true;
	            new Class(this);
	            if (CProto[CREATED_CALLBACK])
	              CProto[CREATED_CALLBACK].call(this);
	            var info = constructors[nodeNames.get(Class)];
	            if (!usableCustomElements || info.create.length > 1) {
	              notifyAttributes(this);
	            }
	          }
	      }
	    });
	    safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
	      value: function (name) {
	        if (-1 < indexOf.call(attributes, name))
	          CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
	      }
	    });
	    if (CProto[CONNECTED_CALLBACK]) {
	      safeProperty(proto, ATTACHED_CALLBACK, {
	        value: CProto[CONNECTED_CALLBACK]
	      });
	    }
	    if (CProto[DISCONNECTED_CALLBACK]) {
	      safeProperty(proto, DETACHED_CALLBACK, {
	        value: CProto[DISCONNECTED_CALLBACK]
	      });
	    }
	    if (is) definition[EXTENDS] = is;
	    name = name.toUpperCase();
	    constructors[name] = {
	      constructor: Class,
	      create: is ? [is, secondArgument(name)] : [name]
	    };
	    nodeNames.set(Class, name);
	    document[REGISTER_ELEMENT](name.toLowerCase(), definition);
	    whenDefined(name);
	    waitingList[name].r();
	  }
	  
	  function get(name) {
	    var info = constructors[name.toUpperCase()];
	    return info && info.constructor;
	  }
	  
	  function getIs(options) {
	    return typeof options === 'string' ?
	        options : (options && options.is || '');
	  }
	  
	  function notifyAttributes(self) {
	    var
	      callback = self[ATTRIBUTE_CHANGED_CALLBACK],
	      attributes = callback ? self.attributes : empty,
	      i = attributes.length,
	      attribute
	    ;
	    while (i--) {
	      attribute =  attributes[i]; // || attributes.item(i);
	      callback.call(
	        self,
	        attribute.name || attribute.nodeName,
	        null,
	        attribute.value || attribute.nodeValue
	      );
	    }
	  }
	  
	  function whenDefined(name) {
	    name = name.toUpperCase();
	    if (!(name in waitingList)) {
	      waitingList[name] = {};
	      waitingList[name].p = new Promise(function (resolve) {
	        waitingList[name].r = resolve;
	      });
	    }
	    return waitingList[name].p;
	  }
	  
	  function polyfillV1() {
	    if (customElements) delete window.customElements;
	    defineProperty(window, 'customElements', {
	      configurable: true,
	      value: new CustomElementRegistry()
	    });
	    defineProperty(window, 'CustomElementRegistry', {
	      configurable: true,
	      value: CustomElementRegistry
	    });
	    for (var
	      patchClass = function (name) {
	        var Class = window[name];
	        if (Class) {
	          window[name] = function CustomElementsV1(self) {
	            var info, isNative;
	            if (!self) self = this;
	            if (!self[DRECEV1]) {
	              justCreated = true;
	              info = constructors[nodeNames.get(self.constructor)];
	              isNative = usableCustomElements && info.create.length === 1;
	              self = isNative ?
	                Reflect.construct(Class, empty, info.constructor) :
	                document.createElement.apply(document, info.create);
	              self[DRECEV1] = true;
	              justCreated = false;
	              if (!isNative) notifyAttributes(self);
	            }
	            return self;
	          };
	          window[name].prototype = Class.prototype;
	          try {
	            Class.prototype.constructor = window[name];
	          } catch(WebKit) {
	            fixGetClass = true;
	            defineProperty(Class, DRECEV1, {value: window[name]});
	          }
	        }
	      },
	      Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/),
	      i = Classes.length;
	      i--;
	      patchClass(Classes[i])
	    ) {}
	    (document.createElement = function (name, options) {
	      var is = getIs(options);
	      return is ?
	        patchedCreateElement.call(this, name, secondArgument(is)) :
	        patchedCreateElement.call(this, name);
	    });
	    if (!V0) {
	      justSetup = true;
	      document[REGISTER_ELEMENT]('');
	    }
	  }
	  
	  // if customElements is not there at all
	  if (!customElements || polyfill === 'force') polyfillV1();
	  else {
	    // if available test extends work as expected
	    try {
	      (function (DRE, options, name) {
	        options[EXTENDS] = 'a';
	        DRE.prototype = create(HTMLAnchorElement.prototype);
	        DRE.prototype.constructor = DRE;
	        window.customElements.define(name, DRE, options);
	        if (
	          getAttribute.call(document.createElement('a', {is: name}), 'is') !== name ||
	          (usableCustomElements && getAttribute.call(new DRE(), 'is') !== name)
	        ) {
	          throw options;
	        }
	      }(
	        function DRE() {
	          return Reflect.construct(HTMLAnchorElement, [], DRE);
	        },
	        {},
	        'document-register-element-a'
	      ));
	    } catch(o_O) {
	      // or force the polyfill if not
	      // and keep internal original reference
	      polyfillV1();
	    }
	  }
	  
	  try {
	    createElement.call(document, 'a', 'a');
	  } catch(FireFox) {
	    secondArgument = function (is) {
	      return {is: is};
	    };
	  }
	  
	}

	module.exports = installCustomElements;
	installCustomElements(global);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);