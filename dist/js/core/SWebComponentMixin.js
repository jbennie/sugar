'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mixwith = require('../vendors/mixwith');

var _autoCast = require('../utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

var _extend2 = require('lodash/extend');

var _extend3 = _interopRequireDefault(_extend2);

var _camelize = require('../utils/string/camelize');

var _camelize2 = _interopRequireDefault(_camelize);

var _uncamelize = require('../utils/string/uncamelize');

var _uncamelize2 = _interopRequireDefault(_uncamelize);

var _upperFirst = require('../utils/string/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

var _fastdom = require('fastdom');

var _fastdom2 = _interopRequireDefault(_fastdom);

var _dispatchEvent = require('../dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _whenInViewport = require('../dom/whenInViewport');

var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

var _whenVisible = require('../dom/whenVisible');

var _whenVisible2 = _interopRequireDefault(_whenVisible);

var _prependChild = require('../dom/prependChild');

var _prependChild2 = _interopRequireDefault(_prependChild);

var _SWatcher = require('../classes/SWatcher');

var _SWatcher2 = _interopRequireDefault(_SWatcher);

var _propertyProxy = require('../utils/objects/propertyProxy');

var _propertyProxy2 = _interopRequireDefault(_propertyProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('es6-object-assign').polyfill();

/**
 * @name 		SWebComponent
 * @extends 	HTMLElement
 * Base class that abstract a lot of dirty work in order to create nice and clean webcomponents.
 * Features:
 * - Listen for attributes changes
 * - Mount the component at a certain point in time (inViewport, visible, etc...)
 * - **Automatically cast the attributes** to their proper js variable types (Array, Object, String, etc...)
 * - **Physical props** : Specify some props that will ALWAYS be present as attribute on the component for styling purpose
 * - Define some **default CSS** that will be injected in the head automatically
 * - Specify some **required props**
 * - **Full lifecycle management**:
 * 	- componentCreated
 * 	- componentWillMount
 * 	- componentMount
 * 	- componentDidMount
 * 	- componentWillReceiveProp
 * 	- componentWillReceiveProps
 * 	- componentWillUpdate
 * 	- render
 * 	- componentDidUpdate
 * 	- componentWillUnmount
 * 	- componentUnmount
 * 	- componentDidUnmount
 * - **Mount dependencies** : This will allows you to set some promises that havwe to be resolved before mounting the component
 *
 * @example 	js
 * import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
 * class MyCoolComponent extends SWebComponent {
 *
 *	\/**
 * 	 * Default props
 * 	 * @definition 		SWebComponent.defaultProps
 * 	 * @protected
 * 	 *\/
 * 	static get defaultProps() {
 * 		return {
 * 		};
 * 	}
 *
 * 	\/**
 * 	 * Css
 * 	 * @protected
 * 	 *\/
 * 	static defaultCss(componentName, componentNameDash) {
 * 		return `
 * 			${componentNameDash} {
 * 				display : block;
 * 			}
 * 		`;
 * 	}
 *
 * 	\/**
 * 	 * Component will mount
 *  	 * @definition 		SWebComponent.componentWillMount
 * 	 * @protected
 * 	 *\/
 * 	componentWillMount() {
 * 		super.componentWillMount();
 * 	}
 *
 * 	\/**
 * 	 * Mount component
 * 	 * @definition 		SWebComponent.componentMount
 * 	 * @protected
 * 	 *\/
 * 	componentMount() {
 * 		super.componentMount();
 * 	}
 *
 * 	\/**
 * 	 * Component unmount
 * 	 * @definition 		SWebComponent.componentUnmount
 * 	 * @protected
 * 	 *\/
 * 	componentUnmount() {
 * 		super.componentUnmount();
 * 	}
 *
 * 	\/**
 * 	 * Component will receive prop
 * 	 * @definition 		SWebComponent.componentWillReceiveProp
 * 	 * @protected
 * 	 *\/
 * 	componentWillReceiveProp(name, newVal, oldVal) {
 * 		switch(name) {
 * 		}
 * 	}
 *
 * 	\/**
 * 	 * Render the component
 * 	 * Here goes the code that reflect the this.props state on the actual html element
 * 	 * @definition 		SWebComponent.render
 * 	 * @protected
 * 	 *\/
 * 	render() {
 * 		super.render();
 * 	}
 * }
 *
 * // define your component
 * MyCoolComponent.define('my-cool-component', MyCoolComponent);
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

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
				var comp = window.sugar._webComponentsClasses[this.componentName];
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
				deps = deps.concat(this.props.mountDependencies);
				var finalDeps = [];
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
    * @protected
    */

		}], [{
			key: 'define',


			/**
    * Define the new web component
    * @param 			{String} 			name 		The name of the component
    * @param 			{Object|String} 	[componentClassOrExt=null] 	The component class or the HTML tag to extend like "input", "button", etc...
    * @param 			{Object|String}		ext 		The HTML tag to extend like "input", "button", etc...
    */
			value: function define(name) {
				var componentOrExt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var ext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;


				var component = componentOrExt && typeof componentOrExt !== 'string' ? componentOrExt : this;
				var componentName = (0, _upperFirst2.default)((0, _camelize2.default)(name));
				var componentNameDash = name;

				ext = typeof componentOrExt === 'string' ? componentOrExt : ext;

				if (window.sugar._webComponentsClasses[componentName]) return;
				window.sugar._webComponentsClasses[componentName] = component;

				// register the webcomponent
				if (document.registerElement) {
					document.registerElement(name, {
						prototype: component.prototype,
						extends: ext
					});
				} else if (window.customElements) {
					window.customElements.define(name, component, {
						extends: ext
					});
				} else {
					throw 'Your browser does not support either document.registerElement or window.customElements.define webcomponents specification...';
				}

				// create a proxy factory
				var webcomponent = function webcomponent() {
					var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

					if (ext) {
						return document.createElement(ext, name).setProps(props);
					}
					return document.createElement(name).setProps(props);
				};

				// fix for firefox and surely other crapy browser...
				// this make sur that the (static) methods of the component
				// are present on the webcomponent itself
				var staticFns = [];
				var comp = component;
				while (comp) {
					try {
						staticFns = staticFns.concat(Object.getOwnPropertyNames(comp).filter(function (prop) {
							return typeof comp[prop] === "function";
						}));
						comp = Object.getPrototypeOf(comp);
					} catch (e) {
						break;
					}
				}
				var keys = staticFns.concat(Object.keys(component));
				keys.forEach(function (key) {
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
						var styleElm = document.createElement('style');
						styleElm.setAttribute('name', componentName);
						styleElm.innerHTML = css;
						(0, _prependChild2.default)(styleElm, document.head);
					} else {
						window.sugar._webComponentsDefaultCss[componentName] = false;
					}
				}
			}

			/**
    * Tell the webcomponent v1 spec which attributes to observe for changes
    * @private
    */
			// static get observedAttributes() {
			// 	let props = this.defaultProps;
			// 	let comp = this;
			// 	while(comp) {
			// 		if (comp.defaultProps) {
			// 			props = {
			// 				...comp.defaultProps,
			// 				...props
			// 			};
			// 		}
			// 		if (comp._defaultProps) {
			// 			props = {
			// 				...props,
			// 				...comp._defaultProps
			// 			};
			// 		}
			// 		comp = Object.getPrototypeOf(comp);
			// 	}
			// 	return Object.keys(props);
			// }

			/**
    * Internal store for all the props of the component
    * Props are actual computed props with attributes
    * @type 		{Object}
    */


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

			return _ret = ((_ = (_temp = (_this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, _)), _this), _this._props = {}, _this.props = {}, _temp)).init(), _), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(_class2, [{
			key: 'init',
			value: function init() {
				this.createdCallback();
			}

			/**
    * When the component is created.
    * This is called even if the component is not attached in the DOM tree
    * @protected
    */

		}, {
			key: 'createdCallback',
			value: function createdCallback() {
				var _this3 = this;

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
				this._props = Object.assign({}, this.defaultProps, this.props);

				// init properties proxy object
				if (window.Proxy) {
					this.props = new Proxy(this._props, {
						set: function set(target, property, value) {
							_this3.setProp(property, value);
						},
						get: function get(target, property) {
							return target[property];
						}
					});
				} else {
					this.props = this._props;
				}

				// listen for updates on the element itself
				// instead of using the attributesChangedCallback
				// cause with the attributesChangedCallback, you'll need to declare
				// at start which attributes to listen and this behavior is not suitable
				// for new attributes added after the component creation...
				var observer = new MutationObserver(function (mutationList) {
					var mutatedAttributes = [];
					mutationList.forEach(function (mutation) {
						if (mutatedAttributes.indexOf(mutation.attributeName) === -1) {
							_this3._attributeMutationCallback(mutation.attributeName, mutation.oldValue, _this3.getAttribute(mutation.attributeName));
						}
						mutatedAttributes.push(mutation.attributeName);
					});
				});
				observer.observe(this, {
					attributes: true,
					attributeOldValue: true
				});

				// created callback
				this.componentCreated();
			}

			/**
    * When the element is attached in the DOM tree
    * @protected
    */

		}, {
			key: 'connectedCallback',
			value: function connectedCallback() {
				var _this4 = this;

				// if not already passed through the created process
				if (!this._lifecycle) this.createdCallback();

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
					switch (_this4.props.mountWhen) {
						case 'inViewport':
						case 'isInViewport':
							(0, _whenInViewport2.default)(_this4).then(function () {
								_this4._mountComponent();
							});
							break;
						case 'isMouseover':
						case 'mouseover':
							_this4.addEventListener('mouseover', _this4._onMouseoverComponentMount.bind(_this4));
							break;
						case 'isVisible':
						case 'visible':
							(0, _whenVisible2.default)(_this4).then(function () {
								_this4._mountComponent();
							});
							break;
						default:
							// mount component directly
							_this4._mountComponent();
							break;
					}
				});
			}
		}, {
			key: 'attachedCallback',
			value: function attachedCallback() {
				this.connectedCallback();
			}

			/**
    * When any of the component attribute changes
    * @param 		{String} 		attribute 		The attribute name that has changed
    * @param 		{String}		oldVal 			The previous attribute value
    * @param 		{String} 		newVal 			The new attribute value
    * @protected
    */

		}, {
			key: '_attributeMutationCallback',
			value: function _attributeMutationCallback(attribute, oldVal, newVal) {

				// stop if the attribute has not changed
				if (oldVal === newVal) return;

				// keep an original attribute name
				var _attribute = attribute;

				// process the attribute to camelCase
				attribute = (0, _camelize2.default)(attribute);

				// if the property is not a real property
				if (!this.shouldComponentAcceptProp(attribute)) return;

				// cast the new val
				newVal = (0, _autoCast2.default)(newVal);

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
				var _this5 = this;

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
				this._initInitialAttributes();

				// props proxy
				this._initPropsProxy();

				// check the required props
				this.requiredProps.forEach(function (prop) {
					if (!_this5.props[prop]) {
						throw 'The "' + _this5.componentNameDash + '" component need the "' + prop + '" property in order to work';
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
				// mark the component as mounted
				this.setAttribute('mounted', true);
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
				var _this6 = this;

				var promise = new Promise(function (resolve, reject) {
					var deps = _this6.mountDependencies;
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
				var _this7 = this;

				// loop on each props
				for (var key in this.defaultProps) {
					if (this.hasOwnProperty(key) || key in this) {
						if (this.props.debug) {
							console.warn('The component ' + this.componentNameDash + ' has already an "' + key + '" property... This property will not reflect the this.props[\'' + key + '\'] value... Try to use a property name that does not already exist on an HTMLElement...');
						}
						continue;
					}
					(function (key) {
						Object.defineProperty(_this7, key, {
							get: function get() {
								return _this7.props[key];
							},
							set: function set(value) {
								_this7.setProp(key, (0, _autoCast2.default)(value));
							},
							enumarable: true
						});
					})(key);
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
				var _this8 = this;

				// wait next frame
				_fastdom2.default.clear(this._fastdomSetProp);
				this._fastdomSetProp = this.mutate(function () {
					// sometimes, the component has been unmounted between the
					// fastdom execution, so we stop here if it's the case
					if (!_this8._componentAttached) return;
					// init
					_this8.componentMount();
					// render
					_this8.render();
					// component did mount
					_this8.componentDidMount();
				});
			}

			/**
    * Detect when the component is detached from the DOM tree.
    * @protected
    */

		}, {
			key: 'disconnectedCallback',
			value: function disconnectedCallback() {
				var _this9 = this;

				// update attached status
				this._componentAttached = false;

				// unmount timeout
				clearTimeout(this._unmountTimeout);
				this._unmountTimeout = setTimeout(function () {

					// will unmount
					_this9.componentWillUnmount();
					// wait next frame
					_fastdom2.default.clear(_this9._fastdomSetProp);
					_this9._fastdomSetProp = _this9.mutate(function () {
						// unmount only if the component is mounted
						if (!_this9._lifecycle.componentMount) return;
						// unmount
						_this9.componentUnmount();
						// did unmount
						_this9.componentDidUnmount();
						// update lifecycle
						_this9._lifecycle.componentWillMount = false;
						_this9._lifecycle.componentMount = false;
						_this9._lifecycle.componentDidUnmount = false;
					});
				}, this.props.unmountTimeout);
			}
		}, {
			key: 'detachedCallback',
			value: function detachedCallback() {
				this.disconnectedCallback();
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
				var fromElm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

				(0, _dispatchEvent2.default)(fromElm, name, data);
				(0, _dispatchEvent2.default)(fromElm, this.tagName.toLowerCase() + '.' + name, data);
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

				// set the prop (duplicate and assign again the whole object to avoid issues with Proxy polyfill)
				// const newProps = Object.assign({}, this._props);
				// newProps[prop] = value;
				// this._props = newProps;
				this._props[prop] = value;

				// handle new value
				this._handleNewPropValue(prop, value, oldVal);
			}

			/**
    * Get a property
    * @param 		{String} 		prop 			The property name to get
    * @return 		{Mixed} 						The property value or null
    */

		}, {
			key: 'getProp',
			value: function getProp(prop) {
				return this.props[prop];
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
				var _this10 = this;

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
					for (var key in _this10._nextPropsStack) {
						var val = _this10._nextPropsStack[key];
						nextPropsArray.push({
							name: key,
							value: val
						});

						// handle physical props
						_this10._handlePhysicalProp(key, val);
					}
					for (var _key in _this10._prevPropsStack) {
						var _val = _this10._prevPropsStack[_key];
						prevPropsArray.push({
							name: _key,
							value: _val
						});
					}

					// call the will reveiveProps if exist
					if (_this10.componentWillReceiveProps) {
						_this10.componentWillReceiveProps(_this10._nextPropsStack, nextPropsArray);
					}

					// should component update
					if (_this10.shouldComponentUpdate && !_this10.shouldComponentUpdate(_this10._nextPropsStack, _this10._prevPropsStack)) return;

					// component will update
					_this10.componentWillUpdate(_this10._nextPropsStack, nextPropsArray);

					// render the component
					_this10.render();

					// component did update
					_this10.componentDidUpdate(_this10._prevPropsStack, prevPropsArray);
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
    * Method that check if a property passed to the component has to be accepted or not.
    * @param 		{String} 			prop 		The property name
    * @return 		{Boolean} 						If true, the property will be accepted, if false, it will not be considered as a property
    */

		}, {
			key: 'shouldComponentAcceptProp',
			value: function shouldComponentAcceptProp(prop) {
				return this.props[prop] !== undefined;
			}

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
			key: '_handlePhysicalProp',
			value: function _handlePhysicalProp(prop, value) {
				// check if is a physical prop to set it in the dom
				var physicalProps = this.physicalProps;
				if (physicalProps.indexOf(prop) !== -1) {
					// set the prop on the node
					if (value !== 0 && (value === false || value === 'null' || !value)) {
						this.removeAttribute((0, _uncamelize2.default)(prop));
					} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
						this.setAttribute((0, _uncamelize2.default)(prop), JSON.stringify(value));
					} else if (typeof value === 'function') {
						this.setAttribute((0, _uncamelize2.default)(prop), 'fn');
					} else {
						this.setAttribute((0, _uncamelize2.default)(prop), value);
					}
				}
			}

			/**
    * Compute props by mixing settings with attributes presents on the component
    */

		}, {
			key: '_initInitialAttributes',
			value: function _initInitialAttributes() {
				for (var i = 0; i < this.attributes.length; i++) {
					var attr = this.attributes[i];
					var attrCamelName = (0, _camelize2.default)(attr.name);
					// do not set if it's not an existing prop
					if (!this.shouldComponentAcceptProp(attrCamelName)) continue;
					// the attribute has no value but it is present
					// so we assume the prop value is true
					if (!attr.value) {
						this._props[attrCamelName] = true;
						continue;
					}
					// cast the value
					this._props[attrCamelName] = (0, _autoCast2.default)(attr.value);
				}

				// handle physicalProps
				for (var key in this.props) {
					var value = this.props[key];
					// handle physical props
					this._handlePhysicalProp(key, value);
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

				var _this11 = this;

				var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				// if is an array
				if (elm instanceof Array || elm instanceof NodeList) {
					[].forEach.call(elm, function (el) {
						_this11.addComponentClass(el, element, modifier, state);
					});
					return this;
				}

				// get the component class
				var cls = this.componentSelector(element, modifier, state);
				// loop on each classes to add
				cls.split('.').forEach(function (cl) {
					if (cl && cl !== '') {
						_this11.mutate(function () {
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

				var _this12 = this;

				var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

				// if is an array
				if (elm instanceof Array || elm instanceof NodeList) {
					[].forEach.call(elm, function (el) {
						_this12.removeComponentClass(el, element, modifier, state);
					});
					return this;
				}

				// get the component class
				var cls = this.componentSelector(element, modifier, state);
				// loop on each classes to add
				cls.split('.').forEach(function (cl) {
					if (cl && cl !== '') {
						_this12.mutate(function () {
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

// Export the mixin class
exports.default = SWebComponentMixin;