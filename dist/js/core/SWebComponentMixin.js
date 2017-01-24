'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mixwith = require('../vendors/mixwith');

var _autoCast = require('../utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

var _camelize = require('../utils/string/camelize');

var _camelize2 = _interopRequireDefault(_camelize);

var _uniqid = require('../utils/uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

var _upperFirst = require('../utils/string/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

var _sSettings = require('./sSettings');

var _sSettings2 = _interopRequireDefault(_sSettings);

var _fastdom = require('fastdom');

var _fastdom2 = _interopRequireDefault(_fastdom);

var _dispatchEvent = require('../dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _whenInViewport = require('../dom/whenInViewport');

var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

var _whenVisible = require('../dom/whenVisible');

var _whenVisible2 = _interopRequireDefault(_whenVisible);

var _matches = require('../dom/matches');

var _matches2 = _interopRequireDefault(_matches);

var _closest = require('../dom/closest');

var _closest2 = _interopRequireDefault(_closest);

var _whenAttribute = require('../dom/whenAttribute');

var _whenAttribute2 = _interopRequireDefault(_whenAttribute);

var _propertyProxy = require('../utils/objects/propertyProxy');

var _propertyProxy2 = _interopRequireDefault(_propertyProxy);

var _domReady = require('../dom/domReady');

var _domReady2 = _interopRequireDefault(_domReady);

var _prependChild = require('../dom/prependChild');

var _prependChild2 = _interopRequireDefault(_prependChild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (!window.sugar) window.sugar = {};
if (!window.sugar._webComponentsStack) window.sugar._webComponentsStack = {};
if (!window.sugar._webComponentsDefaultPropsStack) window.sugar._webComponentsDefaultPropsStack = {};
if (!window.sugar._templateWebComponents) window.sugar._templateWebComponents = {};
if (!window.sugar._webComponentCss) window.sugar._webComponentCss = {};

exports.default = (0, _mixwith.Mixin)(function (superclass) {
	return function (_superclass) {
		_inherits(_class2, _superclass);

		function _class2() {
			var _temp, _this, _ret;

			_classCallCheck(this, _class2);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, _superclass.call.apply(_superclass, [this].concat(args))), _this), _this.props = {}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		/**
  * Define the new web component
  * @param 			{String} 			name 		The name of the component
  * @param 			{SWebComponent} 	component 	The component class
  */
		_class2.define = function define(name, component) {
			var ext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			var componentName = (0, _upperFirst2.default)((0, _camelize2.default)(name));
			var componentNameDash = name;
			window.sugar._webComponentsStack[componentName] = component;

			// register the webcomponent
			var webcomponent = void 0;
			if (document.registerElement) {
				webcomponent = document.registerElement(name, {
					prototype: component.prototype,
					extends: ext
				});
			} else if (window.customElements) {
				webcomponent = window.customElements.define(name, component, {
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
			component._injectCss(component, componentName, componentNameDash);

			// return the webcomponent instance
			return webcomponent;
		};

		/**
  * Inject css into html
  * @param 		{String} 		componentName 		The component name
  * @param 		{String} 		componentNameDash 	The dash formated component name
  */


		_class2._injectCss = function _injectCss(componentClass, componentName, componentNameDash) {
			// __domReady().then(() => {
			// check if component has a css to be injected into the page
			if (window.sugar._webComponentCss[componentName] === undefined) {
				var css = '';
				var comp = componentClass;
				while (comp) {
					if (comp.css) {
						css += comp.css(componentName, componentNameDash);
					}
					comp = Object.getPrototypeOf(comp);
				}
				if (css) {
					css = css.replace(/[\s]+/g, ' ');
					window.sugar._webComponentCss[componentName] = css;
					// fastdom.mutate(() => {
					var styleElm = document.createElement('style');
					styleElm.setAttribute('name', componentName);
					styleElm.innerHTML = css;
					(0, _prependChild2.default)(styleElm, document.head);
					// document.head.appendChild(styleElm);
					// });
				} else {
					window.sugar._webComponentCss[componentName] = false;
				}
			}
			// });
		};

		/**
  * Store all the props of the component
  * Props are actual computed props with attributes
  * @type 		{Object}
  */


		_class2.setDefaultProps = function setDefaultProps(props) {
			var tagname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			// if a tagname is specified, we store the default props for a
			// particular tagname
			if (tagname) {
				tagname = [].concat(tagname);
				tagname.forEach(function (tag) {
					tag = (0, _upperFirst2.default)((0, _camelize2.default)(tag));
					window.sugar._webComponentsDefaultPropsStack[tag] = _extends({}, window.sugar._webComponentsDefaultPropsStack[tag] || {}, props);
				});
			} else {
				var proto = this;
				proto._defaultProps = _extends({}, proto._defaultProps || {}, props);
			}
		};

		/**
  * Get the default props for this particular instance
  * @return 		{Object} 			The default props
  */


		/**
  * Component css
  */
		_class2.css = function css(componentName, componentNameDash) {
			return '';
		};

		/**
  * When the component is created
  */
		_class2.prototype.createdCallback = function createdCallback() {

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

			// if ( ! document.body.contains(this)) return;

			// component will mount only if part of the active document
			this.componentWillMount();
		};

		/**
  * When the element is attached
  */


		_class2.prototype.attachedCallback = function attachedCallback() {
			var _this2 = this;

			// check if need to launch the will mount
			// if ( ! this._lifecycle.componentWillMount) {
			// 	this.componentWillMount();
			// }

			// update attached status
			this._componentAttached = true;

			// wait until dependencies are ok
			this._whenMountDependenciesAreOk().then(function () {
				// switch on the mountWhen prop
				switch (_this2.props.mountWhen) {
					case 'inViewport':
						(0, _whenInViewport2.default)(_this2).then(function () {
							_this2._mountComponent();
						});
						break;
					case 'mouseover':
						_this2.addEventListener('mouseover', _this2._onMouseoverComponentMount.bind(_this2));
						break;
					case 'isVisible':
						(0, _whenVisible2.default)(_this2).then(function () {
							_this2._mountComponent();
						});
						break;
					default:
						// mount component directly
						_this2._mountComponent();
						break;
				}
			});
		};

		/**
  * When any of the component attribute changes
  */


		_class2.prototype.attributeChangedCallback = function attributeChangedCallback(attribute, oldVal, newVal) {

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

			// handle the case when newVal is undefined (added attribute whithout any value)
			if (newVal === undefined && this.hasAttribute(_attribute)) {
				newVal = true;
			}

			// do nothing if the value is already the same
			if (this.props[attribute] === newVal) return;

			// set the new prop
			this.setProp(attribute, newVal);
		};

		/**
  * Method called before the component will be added in the dom.
  * You will not have access to the siblings, etc here.
  * This is the place to init your component, just like a constructor
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


		_class2.prototype.componentWillMount = function componentWillMount() {
			var _this3 = this;

			// update lifecycle state
			this._lifecycle.componentWillMount = true;

			// dispatch event
			this.onComponentWillMount && this.onComponentWillMount();
			// this.dispatchComponentEvent('componentWillMount');

			// internal properties
			this._nextPropsStack = {};
			this._prevPropsStack = {};
			this._nextPropsTimeout = null;
			this._componentMounted = false;
			this._componentAttached = false;
			this._fastdomSetProp = null;

			// set the componentName
			var sourceName = this.getAttribute('is') || this.tagName.toLowerCase();
			this._componentNameDash = sourceName;
			this._componentName = (0, _upperFirst2.default)((0, _camelize2.default)(sourceName));

			// save each instances into the element _sComponents stack
			// this._typeOf = [];
			// let comp = window.sugar._webComponentsStack[this._componentName];
			// while(comp) {
			// 	let funcNameRegex = /function (.{1,})\(/;
			// 	const res = (funcNameRegex).exec(comp.toString());
			// 	if (res && res[1]) {
			// 		if ( this._typeOf.indexOf(res[1]) === -1) {
			// 			this._typeOf.push(res[1]);
			// 		}
			// 	}
			// 	comp = Object.getPrototypeOf(comp);
			// }

			// default props init
			this.props = Object.assign({}, this.defaultProps, this.props);

			// compute props
			this._computeProps();

			// props proxy
			// this._initPropsProxy();

			// check the required props
			this.requiredProps.forEach(function (prop) {
				if (!_this3.props[prop]) {
					throw 'The "' + _this3._componentNameDash + '" component need the "' + prop + '" property in order to work';
				}
			});
		};

		/**
  * Method called right after that the component has been added in the dom,
  * and before the initial render
  * This is the first place where you will have access to the dom.
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


		_class2.prototype.componentMount = function componentMount() {
			// update the lifecycle state
			this._lifecycle.componentMount = true;
			// update the status
			this._componentMounted = true;
			// dispatch event
			this.onComponentMount && this.onComponentMount();
			// this.dispatchComponentEvent('componentMount');
		};

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


		_class2.prototype.componentDidMount = function componentDidMount() {
			// update lifecycle state
			this._lifecycle.componentDidMount = true;
			// dispatch event
			this.onComponentDidMount && this.onComponentDidMount();
			// this.dispatchComponentEvent('componentDidMount');
		};

		/**
  * Method called right before the render when some props have been updated.
  * This method is not called before the initial render
  *
  * @param 		{Object} 		nextProps 			An object that represent the props that have been updated
  * @param 		{Array} 		nextPropsArray 		An array representation of the nextProps object [{name:...,value:...}]
  *
  * @example
  * componentWillUpdate() {
  * 		// call parent method
  * 		super.componentWillUpdate();
  * 		// do something here...
  * }
  *
  * @author 		Olivier Bossel <olivier.bossel@gmail.com>
  */


		_class2.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
			// dispatch event
			this.onComponentWillUpdate && this.onComponentWillUpdate(nextProps);
			// this.dispatchComponentEvent('componentWillUpdate', nextProps);
		};

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


		_class2.prototype.render = function render() {
			// dispatch event
			this.onComponentRender && this.onComponentRender();
			// this.dispatchComponentEvent('componentRender');
		};

		_class2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
			// dispatch event
			this.onComponentDidUpdate && this.onComponentDidUpdate(prevProps);
			// this.dispatchComponentEvent('componentDidUpdate', prevProps);
		};

		_class2.prototype.componentWillUnmount = function componentWillUnmount() {
			// update lifecycle state
			this._lifecycle.componentWillUnmount = true;
			// dispatch event
			this.onComponentWillUnmount && this.onComponentWillUnmount();
			// this.dispatchComponentEvent('componentWillUnmount');
		};

		_class2.prototype.componentUnmount = function componentUnmount() {
			// update lifecycle state
			this._lifecycle.componentUnmount = true;
			// update the status
			this._componentMounted = false;
			// dispatch event
			this.onComponentUnmount && this.onComponentUnmount();
			// this.dispatchComponentEvent('componentUnmount');
		};

		_class2.prototype.componentDidUnmount = function componentDidUnmount() {
			// update lifecycle state
			this._lifecycle.componentDidUnmount = true;
			// dispatch event
			this.onComponentDidUnmount && this.onComponentDidUnmount();
			// this.dispatchComponentEvent('componentDidUnmount');
		};

		/**
  * When mount dependencies
  * @return 			{Promise} 				A promise that will be resolved when the dependencies are resolved
  */


		_class2.prototype._whenMountDependenciesAreOk = function _whenMountDependenciesAreOk() {
			var _this4 = this;

			var promise = new Promise(function (resolve, reject) {
				if (!_this4.mountDependencies.length) {
					resolve();
				} else {
					// resolve all the promises
					Promise.all(_this4.mountDependencies).then(function () {
						resolve();
					});
				}
			});
			return promise;
		};

		/**
  * Init props proxy.
  * This will create a getter/setter accessor on the item itself
  * that get and update his corresponding props.{name} property
  */


		_class2.prototype._initPropsProxy = function _initPropsProxy() {
			var _this5 = this;

			var _loop = function _loop(key) {
				(0, _propertyProxy2.default)(_this5, key, {
					get: function get() {
						return _this5.props[key];
					},
					set: function set(value) {
						_this5.setProp(key, value);
					}
				});
			};

			// loop on each props
			for (var key in this.props) {
				_loop(key);
			}
		};

		/**
  * On mouse over
  */


		_class2.prototype._onMouseoverComponentMount = function _onMouseoverComponentMount() {
			this._mountComponent();
			this.removeEventListener('mouseover', this._onMouseoverComponentMount);
		};

		/**
  * Internal mount component method
  */


		_class2.prototype._mountComponent = function _mountComponent() {
			var _this6 = this;

			// wait next frame
			_fastdom2.default.clear(this._fastdomSetProp);
			this._fastdomSetProp = this.mutate(function () {
				// sometimes, the component has been unmounted between the
				// fastdom execution, so we stop here if it's the case
				if (!_this6._componentAttached) return;
				// init
				_this6.componentMount();
				// render
				_this6.render();
				// component did mount
				_this6.componentDidMount();
			});
		};

		/**
  * When the component is detached
  */


		_class2.prototype.detachedCallback = function detachedCallback() {
			var _this7 = this;

			// update attached status
			this._componentAttached = false;
			// will unmount
			this.componentWillUnmount();
			// wait next frame
			_fastdom2.default.clear(this._fastdomSetProp);
			this._fastdomSetProp = this.mutate(function () {
				// unmount only if the component is mounted
				if (!_this7._componentMounted) return;
				// unmount
				_this7.componentUnmount();
				// did unmount
				_this7.componentDidUnmount();
			});
		};

		/**
  * Dispatch an event from the tag with namespaced event name
  * This will dispatch actually two events :
  * 1. {tagName}.{name} : example : s-datepicker.change
  * 2. {name} 		   : example : change
  *
  * @param		{String} 		name 		The event name
  * @param 		{Mixed} 		data 		Some data to attach to the event
  */


		_class2.prototype.dispatchComponentEvent = function dispatchComponentEvent(name) {
			var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			(0, _dispatchEvent2.default)(this, name, data);
			(0, _dispatchEvent2.default)(this, this.tagName.toLowerCase() + '.' + name, data);
		};

		/**
  * Set properties
  */


		_class2.prototype.setProps = function setProps() {
			var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			// set each props
			for (var key in props) {
				this.setProp(key, props[key]);
			}
			return this;
		};

		/**
  * Set a property
  */


		_class2.prototype.setProp = function setProp(prop, value) {
			var _this8 = this;

			// save the oldVal
			var _oldVal = this.props[prop];

			// stop if same value
			if (_oldVal === value) return;

			// set the prop
			this.props[prop] = value;

			// handle physical props
			this._handlePhysicalProps(prop, value);

			// if the component is not mounted
			// we do nothing here...
			if (!this.isComponentMounted()) return;

			// create the stacks
			this._prevPropsStack[prop] = _oldVal;
			this._nextPropsStack[prop] = value;

			// component will receive prop
			if (this.componentWillReceiveProp) {
				this.componentWillReceiveProp(prop, value, _oldVal);
			}

			// wait till next frame
			_fastdom2.default.clear(this._fastdomSetProp);
			this._fastdomSetProp = _fastdom2.default.mutate(function () {

				// create array version of each stacks
				var nextPropsArray = [],
				    prevPropsArray = [];
				for (var key in _this8._nextPropsStack) {
					var val = _this8._nextPropsStack[key];
					nextPropsArray.push({
						name: key,
						value: val
					});
				}
				for (var _key2 in _this8._prevPropsStack) {
					var _val = _this8._prevPropsStack[_key2];
					prevPropsArray.push({
						name: _key2,
						value: _val
					});
				}

				// call the will reveiveProps if exist
				if (_this8.componentWillReceiveProps) {
					_this8.componentWillReceiveProps(_this8._nextPropsStack, nextPropsArray);
				}

				// should component update
				if (_this8.shouldComponentUpdate && !_this8.shouldComponentUpdate(_this8._nextPropsStack, _this8._prevPropsStack)) return;

				// component will update
				_this8.componentWillUpdate(_this8._nextPropsStack, nextPropsArray);

				// render the component
				_this8.render();

				// component did update
				_this8.componentDidUpdate(_this8._prevPropsStack, prevPropsArray);
			});
		};

		/**
  * Check if component is mounted
  * @return 			{Boolean} 			true if mounted, false if not
  */


		_class2.prototype.isComponentMounted = function isComponentMounted() {
			return this._componentMounted;
		};

		/**
  * Handle physical props by setting or not the prop
  * on the dom element as attribute
  */


		_class2.prototype._handlePhysicalProps = function _handlePhysicalProps(prop, value) {
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
		};

		/**
  * Compute props by mixing settings with attributes presents on the component
  */


		_class2.prototype._computeProps = function _computeProps() {
			for (var i = 0; i < this.attributes.length; i++) {
				var attr = this.attributes[i];
				if (!attr.value) {
					// the attribute has no value but it is present
					// so we assume the prop value is true
					this.props[(0, _camelize2.default)(attr.name)] = true;
					continue;
				}
				// cast the value
				this.props[(0, _camelize2.default)(attr.name)] = (0, _autoCast2.default)(attr.value);
			}

			// handle physicalProps
			for (var key in this.props) {
				var value = this.props[key];
				// handle physical props
				this._handlePhysicalProps(key, value);
			}
		};

		/**
  * Mutate the dom using an optimize requestAnimationFrame technique
  * @param 		{Function} 		cb 			The callback to exexute
  */


		_class2.prototype.mutate = function mutate(cb) {
			return _fastdom2.default.mutate(cb);
		};

		/**
  * componentClassName
  * Set a class that will be construct with the componentNameDash,
  * an optional element and modifier
  * @param 	{String} 	[element=null] 		The element name
  * @param 	{String} 	[modifier=null] 	The modifier name
  * @param 	{String} 	[state=null] 		The state name
  * @return 	{String} 						The generated class
  */


		_class2.prototype.componentClassName = function componentClassName() {
			var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			// if the method is BEM
			var sel = this._componentNameDash;
			// @TODO : handle the sSettings at component load
			if (false && _sSettings2.default && _sSettings2.default.selector.method.toLowerCase() === 'smaccs') {
				if (element) {
					sel += '-' + element;
				}
				if (modifier) {
					sel += '-' + modifier;
				}
				if (state) {
					sel += ' is-' + state;
				}
			} else {
				if (element) {
					sel += '__' + element;
				}
				if (modifier) {
					sel += '--' + modifier;
				}
				if (state) {
					sel += '--' + state;
				}
			}
			return sel;
		};

		/**
  * Get a component selector class built with the passed element, modifier and state parameters
  * @param 	{String} 	[element=null] 		The element name
  * @param 	{String} 	[modifier=null] 	The modifier name
  * @param 	{String} 	[state=null] 		The state name
  * @return 	{String} 						The generated class
  */


		_class2.prototype.componentSelector = function componentSelector() {
			var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			var sel = this.componentClassName(element, modifier, state);
			sel = ('.' + sel).replace(' ', '.');
			return sel;
		};

		/**
  * hasComponentClass
  * Check if the passed element has the component class generated by the element and modifier argument
  * @param 	{HTMLElement} 	elm 				The element to check
  * @param 	{String} 		[element=null] 		The element name
  * @param 	{String} 		[modifier=null] 	The modifier name
  * @param 	{String} 		[state=null] 		The state name
  * @return 	{Boolean} 							The check result
  */


		_class2.prototype.hasComponentClass = function hasComponentClass(elm) {
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
		};

		/**
  * Add a class on the passed element that will be construct with the componentNameDash,
  * an optional element, modifier and state
  * @param 	{String} 	[element=null] 		The element name
  * @param 	{String} 	[modifier=null] 	The modifier name
  * @param 	{String} 	[state=null] 		The state name
  * @return 	{SComponent}} 			The component itself
  */


		_class2.prototype.addComponentClass = function addComponentClass(elm) {
			var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var _this9 = this;

			var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			// if is an array
			if (elm instanceof Array || elm instanceof NodeList) {
				[].forEach.call(elm, function (el) {
					_this9.addComponentClass(el, element, modifier, state);
				});
				return this;
			}

			// get the component class
			var cls = this.componentSelector(element, modifier, state);
			// loop on each classes to add
			cls.split('.').forEach(function (cl) {
				if (cl && cl !== '') {
					_this9.mutate(function () {
						elm.classList.add(cl);
					});
				}
			});
			// return the instance to maintain chainability
			return this;
		};

		/**
  * Remove a class on the passed element that will be construct with the componentNameDash,
  * an optional element, modifier and state
  * @param 	{String} 	[element=null] 		The element name
  * @param 	{String} 	[modifier=null] 	The modifier name
  * @param 	{String} 	[state=null] 		The state name
  * @return 	{SComponent}} 					The component itself
  */


		_class2.prototype.removeComponentClass = function removeComponentClass(elm) {
			var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var _this10 = this;

			var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			// if is an array
			if (elm instanceof Array || elm instanceof NodeList) {
				[].forEach.call(elm, function (el) {
					_this10.removeComponentClass(el, element, modifier, state);
				});
				return this;
			}

			// get the component class
			var cls = this.componentSelector(element, modifier, state);
			// loop on each classes to add
			cls.split('.').forEach(function (cl) {
				if (cl && cl !== '') {
					_this10.mutate(function () {
						elm.classList.remove(cl);
					});
				}
			});
			// return the instance to maintain chainability
			return this;
		};

		_createClass(_class2, [{
			key: 'defaultProps',
			get: function get() {
				var props = window.sugar._webComponentsStack[this._componentName].defaultProps;
				var comp = window.sugar._webComponentsStack[this._componentName];
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
				if (window.sugar._webComponentsDefaultPropsStack[this._componentName]) {
					props = _extends({}, props, window.sugar._webComponentsDefaultPropsStack[this._componentName]);
				}
				return props;
			}

			/**
   * Return an array of props to set on the dom
   */

		}, {
			key: 'physicalProps',


			/**
   * Get physical props for this particular instance
   * @return 		{Object} 			The physical props array
   */
			get: function get() {
				var props = window.sugar._webComponentsStack[this._componentName].physicalProps;
				var comp = window.sugar._webComponentsStack[this._componentName];
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
				return props;
			}

			/**
   * Return an array of required props to init the component
   */

		}, {
			key: 'requiredProps',


			/**
   * Get the required props array for this particular instance
   * @return 		{Array} 			An array of required props
   */
			get: function get() {
				var props = window.sugar._webComponentsStack[this._componentName].requiredProps;
				var comp = window.sugar._webComponentsStack[this._componentName];
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
				return props;
			}
		}, {
			key: 'css',
			get: function get() {
				var css = '';
				var comp = window.sugar._webComponentsStack[this._componentName];
				while (comp) {
					if (comp.css) {
						css += comp.css(this._componentName, this._componentNameDash);
					}
					comp = Object.getPrototypeOf(comp);
				}
				return css;
			}

			/**
   * Return an array of props to set on the dom
   */

		}, {
			key: 'mountDependencies',


			/**
   * Get physical props for this particular instance
   * @return 		{Object} 			The physical props array
   */
			get: function get() {
				var _this11 = this;

				var deps = window.sugar._webComponentsStack[this._componentName].mountDependencies;
				var comp = window.sugar._webComponentsStack[this._componentName];
				while (comp) {
					if (comp.mountDependencies) {
						comp.mountDependencies.forEach(function (dep) {
							if (typeof dep === 'function') {
								dep = dep.bind(_this11);
								dep = dep();
							}
							if (deps.indexOf(dep) === -1) {
								deps.push(dep);
							}
						});
					}
					comp = Object.getPrototypeOf(comp);
				}
				return deps;
			}
		}], [{
			key: 'defaultProps',


			/**
   * Return the default props for the component.
   * Need to take care of the passed props parameter and mix it at the
   * end of your default props
   *
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
					mountWhen: null
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
				// return [function() {
				// 	return new Promise((resolve, reject) => {
				// 		let isTemplate = false;
				// 		resolve();
				// 		if (this._typeOf.indexOf('STemplateWebComponent')) {
				// 			resolve();
				// 		} else {
				// 			setTimeout(() => {
				// 				resolve();
				// 			});
				// 		}
				// 	});
				// }];
			}
		}]);

		return _class2;
	}(superclass);
});