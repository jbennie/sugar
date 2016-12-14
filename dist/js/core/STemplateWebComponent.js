'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('./SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _SBinder = require('../classes/SBinder');

var _SBinder2 = _interopRequireDefault(_SBinder);

var _uniqid = require('../utils/uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _template = require('../dom/template');

var _template2 = _interopRequireDefault(_template);

var _htmlToStr = require('../utils/string/htmlToStr');

var _htmlToStr2 = _interopRequireDefault(_htmlToStr);

var _strToHtml = require('../utils/string/strToHtml');

var _strToHtml2 = _interopRequireDefault(_strToHtml);

var _mergeYields = require('../dom/mergeYields');

var _mergeYields2 = _interopRequireDefault(_mergeYields);

var _sTemplateIntegrator = require('./sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

var _STemplate = require('./STemplate');

var _STemplate2 = _interopRequireDefault(_STemplate);

var _morphdom = require('morphdom');

var _morphdom2 = _interopRequireDefault(_morphdom);

var _autoCast = require('../utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

var _camelize = require('../utils/string/camelize');

var _camelize2 = _interopRequireDefault(_camelize);

var _upperFirst = require('../utils/string/upperFirst');

var _upperFirst2 = _interopRequireDefault(_upperFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STemplateWebComponent = function (_SWebComponent) {
	_inherits(STemplateWebComponent, _SWebComponent);

	function STemplateWebComponent() {
		_classCallCheck(this, STemplateWebComponent);

		return _possibleConstructorReturn(this, _SWebComponent.apply(this, arguments));
	}

	STemplateWebComponent.define = function define(name, component) {
		var ext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		var componentName = (0, _upperFirst2.default)((0, _camelize2.default)(name));
		if (!window.sugar._templateWebComponents[name]) {
			window.sugar._templateWebComponents[name] = component;
		}
		return _SWebComponent3.default.define(name, component, ext);
	};

	/**
  * Default props
  * @definition 		SWebComponent.defaultProps
  */


	/**
  * Component will mount
  */
	STemplateWebComponent.prototype.componentWillMount = function componentWillMount() {
		// in super
		_SWebComponent.prototype.componentWillMount.call(this);

		// console.log('will mount', this, this.ownerDocument);

		// create a component id
		this._templateComponentId = this.getAttribute('s-template-component') || (0, _uniqid2.default)();

		// check if no template specified
		if (!this.template) {
			throw "You have to specify a template either by setting up the props.template variable, by initiating this component on a 'script' tag or on any html element like a 'div' or something...";
		}

		// prepare element
		this._prepareElement();

		// create the templateData stack from the default template data
		this.templateData = Object.assign({}, this.defaultTemplateData);

		// new binder
		this._binder = new _SBinder2.default();

		// set some element to ignore on this element
		_sTemplateIntegrator2.default.ignore(this, {
			"s-template-component": true,
			"s-template-component-dirty": true
		});

		// set the s-template-component id
		this.setAttribute('s-template-component', this._templateComponentId);

		// process the data to allow some features
		// like the mapping of instance property with @,
		// etc...
		for (var key in this.templateData) {
			// map the data to an instance variable
			if (typeof this.templateData[key] === 'string') {
				// handle the @... notation in datas
				if (this.templateData[key].substr(0, 1) === '@') {
					var watchKey = this.templateData[key].substr(1);
					// set the initial value
					this.templateData[key] = (0, _get3.default)(this, watchKey);
					// bind the value to the data value
					this._binder.bindObjectPath2ObjectPath(this, watchKey, this, 'templateData.' + key);
				}
			}
			// bind the component instance to the setting if it is
			// a function
			if (typeof this.templateData[key] === 'function') {
				this.templateData[key] = this.templateData[key].bind(this);
			}
		}
	};

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */


	STemplateWebComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);

		// try to get the parent template instance
		this._parentSTemplate = _STemplate2.default.getParentTemplate(this);

		// which compile method to use
		var compile = this.props.compile;
		if (this.templateCompile) {
			compile = this.templateCompile.bind(this);
		}

		// prepare templateString
		this._templateString = this._prepareTemplateString(this.template);

		// instanciate a new STemplate
		this._sTemplate = new _STemplate2.default(this.templateString, this.templateData, {
			id: this._templateComponentId,
			compile: compile,
			beforeCompile: this.templateWillCompile.bind(this),
			afterCompile: this.templateDidCompile.bind(this),
			beforeRender: this.templateWillRender.bind(this),
			afterRender: this.templateDidRender.bind(this),
			onDataUpdate: this._onTemplateDataUpdate.bind(this),
			shouldTemplateUpdate: this.shouldTemplateUpdate.bind(this)
		}, this._parentSTemplate);

		// render the template
		this._sTemplate.render(this);

		// set the component as dirty
		this.setAttribute('s-template-component-dirty', true);
	};

	STemplateWebComponent.prototype._prepareTemplateString = function _prepareTemplateString(templateString) {
		var _this2 = this;

		// yields
		var hasYields = false;
		templateString = templateString.replace(/<yield\s?(id="([a-zA-Z0-0-_]+)")?\s?\/?>(<\/yield>)?/g, function (item, idAttr, id) {
			hasYields = true;
			// try to get the yield id in the template
			var yieldElm = void 0;
			if (id) {
				yieldElm = _this2.querySelector('yield[id="' + id + '"]');
			} else {
				yieldElm = _this2.querySelector('yield');
			}
			if (!yieldElm) return item;
			// if we have a yield, replace it
			var yieldContent = yieldElm.innerHTML;
			// remove the yield from html
			yieldElm.parentNode.removeChild(yieldElm);
			// return
			return yieldElm.innerHTML;
		});

		// wrap the templateString inside the root node if
		// the root node is not already him
		var tag = this.outerHTML.split(/\s|>/)[0];
		var templateTag = templateString.split(/\s|>/)[0];
		if (tag !== templateTag) {
			// we need to wrap the templateString with the base
			var outer = this.outerHTML;
			var matches = outer.match(/<([a-zA-Z-]+)[^>]*>/);
			if (matches[0] && matches[1]) {
				templateString = '' + matches[0] + templateString + '</' + matches[1] + '>';
			}
		}

		// escape < and > inside attributes
		templateString = templateString.replace(/[[\S]+=[\"\']([^"^']*)[\"\']/g, function (attribute) {
			return attribute.replace('<', '&lt;').replace('>', '&gt;');
		});

		// set a template id to the root node
		templateString = templateString.replace('>', ' s-template-id="' + this._templateComponentId + '">');

		// set a template-node attribute on each of the nodes that are not a template-id
		templateString = templateString.replace(/<[a-zA-Z0-9-]+(?!.*s-template-id)(\s|>)/g, function (itm, s) {
			if (s === '>') {
				return itm.trim().replace('>', '') + ' s-template-node="' + _this2._templateComponentId + '">';
			} else {
				return itm.trim() + ' s-template-node="' + _this2._templateComponentId + '" ';
			}
		});

		// remove all the the nested templates
		var df = new window.DOMParser().parseFromString(templateString, 'text/html');
		[].forEach.call(df.querySelectorAll(Object.keys(window.sugar._templateWebComponents).join(',')), function (elm) {
			if (elm.parentNode.tagName.toLowerCase() !== 'body') {
				elm.innerHTML = '';
			}
		});
		templateString = df.body.innerHTML;

		// return the template String
		return templateString.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
	};

	STemplateWebComponent.prototype._prepareElement = function _prepareElement() {
		var _this3 = this;

		[].forEach.call(this.querySelectorAll('*:not([s-template-node])'), function (node) {
			node.setAttribute('s-template-node', _this3._templateComponentId);
		});
	};

	/**
  * Run each time a data is updated in the template
  * @param 		{String} 		name 			The data name
  * @param 		{Mixed} 		newVal 			The new value
  * @param 		{Mixed} 		oldVal 			The old value
  */


	STemplateWebComponent.prototype._onTemplateDataUpdate = function _onTemplateDataUpdate(name, newVal, oldVal) {
		var _this4 = this;

		// do nothing if is the same data
		if (newVal === oldVal) return;
		// call the function
		this.templateWillReceiveData && this.templateWillReceiveData(name, newVal, oldVal);
		// stop here if we don't have any templateWillReceiveDatas method
		if (!this.templateWillReceiveDatas) return;
		// ensure that we have a stack to work with
		if (!this._templateWillReceiveDataStack) this._templateWillReceiveDataStack = {};
		// // add the data into the stack
		this._templateWillReceiveDataStack[name] = newVal;
		// // batch the datas
		clearTimeout(this._templateWillReceiveDataTimeout);
		this._templateWillReceiveDataTimeout = setTimeout(function () {
			// 	// call the templateWillReceiveData function
			_this4.templateWillReceiveDatas(Object.assign({}, _this4._templateWillReceiveDataStack));
			// clean the stack
			_this4._templateWillReceiveDataStack = {};
		});
	};

	/**
  * Run before the template will be compiled so that you can have a change to process it if needed
  * before it will be passed to the compile step
  * @param 		{String} 				template 				The template before compilation
  * @return 		{String} 										The processed template to pass to compilation step
  */


	STemplateWebComponent.prototype.templateWillCompile = function templateWillCompile(template) {
		return template;
	};

	/**
  * Compile the template has you want
  * @optional
  * @name 		templateCompile
  * @param 		{String} 				template 				The template to compile
  * @param 		{Object} 				data 					The data to compile the template with
  * @return 		{String} 										The compiled template
  */
	// templateCompile(template, data) {
	// 	return template;
	// }

	/**
  * Run after the template has been compiled so that you can have a chance to process it if needed
  * before that the dom will be updated
  * @param 		{String} 			 	compiledTemplate 		The compiled template
  * @return 		{String|HTMLElement} 							The processed template
  */


	STemplateWebComponent.prototype.templateDidCompile = function templateDidCompile(template) {
		return template;
	};

	/**
  * Run before the template will be rendered in the viewport
  * @param 		{String} 				template 				The template to render to the screen
  * @return 		{String} 										The processed template to render
  */


	STemplateWebComponent.prototype.templateWillRender = function templateWillRender(template) {
		return template;
	};

	/**
  * Run after the template has been rendered in the viewport
  * @param 		{HTMLElement} 			inDomTemplate 			The in dom representation of the template
  */


	STemplateWebComponent.prototype.templateDidRender = function templateDidRender(inDomTemplate) {}
	// do something here if needed


	/**
  * Run before compile the template to test if we need to render it again or not
  * @param 		{Object} 				nextData 				The new data that the template should reflect
  * @return 		{Boolean} 										false if want to prevent the template to be rendered, true otherwise
  */
	;

	STemplateWebComponent.prototype.shouldTemplateUpdate = function shouldTemplateUpdate(nextData) {
		return true;
	};

	/**
  * Unmount component
  */


	STemplateWebComponent.prototype.componentUnmount = function componentUnmount() {
		_SWebComponent.prototype.componentUnmount.call(this);
		// destroy the template
		if (this._sTemplate && this._sTemplate.destroy) {
			this._sTemplate.destroy();
		}
	};

	/**
  * Render
  * @definition 		SWebComponent.render
  */


	STemplateWebComponent.prototype.render = function render() {
		_SWebComponent.prototype.render.call(this);
	};

	_createClass(STemplateWebComponent, [{
		key: 'defaultTemplateData',


		/**
   * Get the default template data for this particular instance
   * @return 		{Object} 			The template data
   */
		get: function get() {
			var data = window.sugar._webComponentsStack[this._componentName].defaultTemplateData;
			var comp = window.sugar._webComponentsStack[this._componentName];
			while (comp) {
				if (comp.defaultTemplateData) {
					data = _extends({}, comp.defaultTemplateData, data);
				}
				comp = Object.getPrototypeOf(comp);
			}
			return data;
		}

		/**
   * Get the template
   */

	}, {
		key: 'template',
		get: function get() {
			// cache
			if (this._templateCached) return this._templateCached;
			// get the template
			var tpl = (0, _template2.default)(this.props.template || this, 'string');
			// save into cache
			this._templateCached = tpl;
			// tpl.split("\n").forEach((line) => {
			// 	console.log(line);
			// });
			// return the template
			return tpl;
		}
	}, {
		key: 'templateString',
		get: function get() {
			return this._templateString;
		}
	}], [{
		key: 'defaultProps',
		get: function get() {
			return {
				/**
     * compile
     * The compile function to use
     * @type 	{Function}
     */
				compile: null,

				/**
     * template
     * The template to use. If not specified, will be the element itself used as template
     * @type 	{String}
     */
				template: null
			};
		}

		/**
   * Return an object that represent the default data used by the template
   * to render itself
   * @return 		{Object} 			An object that represent the data used by the template
   */

	}, {
		key: 'defaultTemplateData',
		get: function get() {
			return {};
		}
	}]);

	return STemplateWebComponent;
}(_SWebComponent3.default);

exports.default = STemplateWebComponent;


window.STemplateWebComponent = STemplateWebComponent;