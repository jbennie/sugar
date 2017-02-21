'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dispatchEvent = require('../dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _SWatcher = require('../classes/SWatcher');

var _SWatcher2 = _interopRequireDefault(_SWatcher);

var _uniqid = require('../utils/uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

var _morphdom = require('morphdom');

var _morphdom2 = _interopRequireDefault(_morphdom);

var _domReady = require('../dom/domReady');

var _domReady2 = _interopRequireDefault(_domReady);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _autoCast = require('../utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

var _matches = require('../dom/matches');

var _matches2 = _interopRequireDefault(_matches);

var _querySelectorLive = require('../dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

var _strToHtml = require('../utils/string/strToHtml');

var _strToHtml2 = _interopRequireDefault(_strToHtml);

var _constructorName = require('../utils/objects/constructorName');

var _constructorName2 = _interopRequireDefault(_constructorName);

var _closest = require('../dom/closest');

var _closest2 = _interopRequireDefault(_closest);

var _whenAttribute = require('../dom/whenAttribute');

var _whenAttribute2 = _interopRequireDefault(_whenAttribute);

var _propertyProxy = require('../utils/objects/propertyProxy');

var _propertyProxy2 = _interopRequireDefault(_propertyProxy);

var _sTemplateIntegrator = require('./sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (!window.sugar) window.sugar = {};
if (!window.sugar._sTemplateData) window.sugar._sTemplateData = {};

/**
 * @class 		STemplate 		{SOject}
 * This class allows you to create complexe and dynamic templates that will stay
 * in sync with his data object automatically.
 * Under the hood, this class use the `morphdom` library that will be in charge of updating
 * the minimum dom as needed.
 *
 * @example 	js
 * // our data object
 * const data = {
 * 		title : 'Hello World'
 * };
 * // create an STemplate instance
 * const myTemplate = new STemplate(`
 * 		<div class="my-template">
 *   		<h1>{{title}}</h1>
 * 		</div>
 * `, data);
 * // append our template to the dom
 * myTemplate.appendTo(document.querySelector('#myDiv'));
 * // update the title at any point in time
 * setTimeout(() => {
 * 		data.title = 'Hello Universe';
 * }, 2000);
 *
 *
 * @see 		https://github.com/patrick-steele-idem/morphdom
 * @author		Olivier Bossel <olivier.bossel@gmail.com>
 */

var STemplate = function () {

	/**
  * Get the parent template instance
  * @param 		{HTMLElement} 		of 			The element to get the parent template from
  	 * @return 		{STemplate} 					The parent template instance found in the html
  */
	STemplate.getParentTemplate = function getParentTemplate(of) {
		var templateElm = (0, _closest2.default)(of, '[s-tpl]');
		if (!templateElm) return null;
		return templateElm._sTemplate;
	};

	/**
  * Store a uniqid that will be used as identifier for
  * this particular class in the window.sTemplateClasses
  * @type 	{String}
  */


	/**
  * Store the reference to html elements that have an id or a name
  * @type 	{Object}
  */


	/**
  * Store the reference to the created dom structure
  */


	/**
  * Store the data object used to render the template
  * @type 	{Object}
  */


	/**
  * Store the values of the model when it's an object or an array
  * This is used to set in html a string value like 'object:10' that will
  * match the current value in this stack
  * @type 	{Array}
  */


	/**
  * Store a stack of updated data between two render
  * @type 	{Object}
  */


	/**
  * Store the timeout used to update the template only once when multiple changes have been made
  * @type 	{Number}
  */


	/**
  * Store the settings
  * @type 	{Object}
  */


	/**
  * Constructor
  */
	function STemplate(templateString) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		var _this = this;

		var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		var parentTemplate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

		_classCallCheck(this, STemplate);

		this.templateId = null;
		this.refs = {};
		this.domNode = null;
		this.data = {};
		this._modelValuesStack = [];
		this._updatedDataStack = {};
		this._updateTimeout = null;
		this.settings = {

			/**
    * Set if the render happend automatically or not
    * @setting
    * @type 		{Boolean}
    */
			autoRenderOnDataUpdate: true,

			/**
    * Function called when a data is updated with his new and old value as parameter
    * @setting
    * @type 		{Function}
    */
			onDataUpdate: null,

			/**
    * Function called when some datas has been updated with his new and old value as parameter
    * @setting
    * @type 		{Function}
    */
			onDatasUpdate: null,

			/**
    * Function that runs before the template will be rendered in the dom so that you can have a change to process it if needed
    * before it will be passed to the render step
    * @param 		{String} 				template 				The template before compilation
    * @return 		{String} 										The processed template to pass to render step
    */
			beforeRender: null,

			/**
    * Function that runs after the template has been rendered to the dom so that you can have a chance to process it if needed
    * @param 		{HTMLElement} 			 	inDomTemplate 		The dom element that represent the template
    */
			afterRender: null,

			/**
    * Function called before any HTMLElement will be updated in the dom
    * If this function return false, the element will not bein updated at all
    * @setting
    * @type 		{Function}
    * @default  	null
    */
			onBeforeElUpdated: null,

			/**
    * Function called before any HTMLElement child will be updated in the dom
    * If this function return false, the engine will not try to update this element children
    * @setting
    * @type 		{Function}
    * @default  	null
    */
			onBeforeElChildrenUpdated: null,

			/**
    * Function called before any HTMLElement will be removed from the dom
    * If this function return false, the element will not bein removed
    * @setting
    * @type 		{Function}
    * @default  	null
    */
			onBeforeElDiscarded: null,

			/**
    * Function called after any HTMLElement has been removed from the dom
    * @setting
    * @type 		{Function}
    */
			onElDiscarded: null

		};


		// save settings
		this.settings = _extends({}, this.settings, settings);

		// set the parent template
		if (parentTemplate) this.setParentTemplate(parentTemplate);

		// generate a uniqid for the template
		this.templateId = this.settings.id || (0, _uniqid2.default)();

		// set the template
		this.templateString = templateString;

		// set the data into instance
		this.data = data;

		// keep a copy of the original datas
		this._originalData = Object.assign({}, data);

		// bound some methods into the data
		this.data.sTemplate = {
			value: function value(of) {
				var idx = _this._modelValuesStack.indexOf(of);
				if (idx !== -1) {
					return 'object:' + idx;
				} else {
					_this._modelValuesStack.push(of);
					var newIdx = _this._modelValuesStack.length - 1;
					return 'object:' + newIdx;
				}
				return of;
			}
		};

		// bound the class into the window to be apple to call it into
		// templates
		window.sugar._sTemplateData[this.templateId] = this.data;

		// instanciate a watcher
		this._watcher = new _SWatcher2.default();

		// watch each data

		var _loop = function _loop(name) {
			if (name === 'sTemplate') {
				return 'continue';
			}
			(0, _propertyProxy2.default)(_this.data, name, {
				set: function set(value) {
					if (typeof value === 'string') {
						if (value.match(/^this\\./g)) {
							// grab the path
							var path = value.replace('this.', '');
							// get the value from the data
							value = (0, _get3.default)(_this.data, path);
						} else if (value.match(/^window\\./g)) {
							var _path = value.replace('window.', '');
							value = (0, _get3.default)(window, _path);
						} else if (value.match(/^parent\\./g)) {
							// get parent template
							var _parentTemplate = _this._getParentTemplate();
							if (_parentTemplate && _parentTemplate.data) {
								var _v = (0, _get3.default)(_parentTemplate.data, value);
								if (_v) value = _v;
							} else {
								throw 'You try to access the "' + value + '" value but your template is not embeded in another one';
							}
						} else if (value.substr(0, 1) === '<' && value.substr(-1) === '>') {
							// apply a node id to each nodes
							value = _this._applyTemplateNodeIdAttribute(value);
						} else if (_this.data[value]) {
							// the value exist in the current data
							value = (0, _get3.default)(_this.data, value);
						} else {
							// get parent template
							var _parentTemplate2 = _this._getParentTemplate();
							if (_parentTemplate2 && _parentTemplate2.data) {
								var _v2 = (0, _get3.default)(_parentTemplate2.data, value);
								if (_v2) value = _v2;
							}
						}
					}
					return value;
				}
			});
			_this._watcher.watch(_this.data, name, function (newVal, oldVal) {
				// save the update in the stack
				_this._updatedDataStack[name] = newVal;
				// check if has a function to listen to data update
				// do this OUTSIDE the setTimeout cause the onDataUpdate function
				// can update itself the templateData.
				// If it where in the setTImeout, the data will be updated after the render happend,
				// resulting in multiple useless renders
				_this.settings.onDataUpdate && _this.settings.onDataUpdate(name, newVal, oldVal);
				// make update only once
				// by waiting next loop
				clearTimeout(_this._updateTimeout);
				_this._updateTimeout = setTimeout(function () {
					// on datas updated
					_this.settings.onDatasUpdate && _this.settings.onDatasUpdate(_this._updatedDataStack);
					// render the template again if the autoRenderOnDataUpdate is true
					if (_this.settings.autoRenderOnDataUpdate) {
						_this._internalRender();
					}
					// reset the updated data stack
					_this._updatedDataStack = {};
				});
			});
		};

		for (var name in this.data) {
			var _ret = _loop(name);

			if (_ret === 'continue') continue;
		}
	}

	/**
  * Check if the passed node is part of this template
  * @param 			{HTMLElement} 			node 			The node to test
  * @return 			{Boolean} 								True if part of this template, false if not
 	 */


	STemplate.prototype.isNodeBelongToMe = function isNodeBelongToMe(node) {
		// if the node has the templateId has s-tpl-node attribute
		if (node.hasAttribute('s-tpl-node') && node.getAttribute('s-tpl-node') === this.templateId) return true;
		// otherwise, the node does not belong to the template
		return false;
	};

	/**
  * Apply the template-node-id attribute on each nodes that does not have one
  * @param 		{String} 		templateString 		The template string to process
  * @return 		{String} 							The processed template string
  */


	STemplate.prototype._applyTemplateNodeIdAttribute = function _applyTemplateNodeIdAttribute(templateString) {
		var _this2 = this;

		return templateString.replace(/<[a-zA-Z0-9-]+(?!.*s-tpl-node)(?!.*s-tpl)(\s|>)/g, function (itm, s) {
			if (s === '>') {
				return itm.trim().replace('>', '') + ' s-tpl-node="' + _this2.templateId + '">';
			} else {
				return itm.trim() + ' s-tpl-node="' + _this2.templateId + '" ';
			}
		});
	};

	/**
  * Set the template string
  * @param 		{String} 	template 	The template string
  */


	/**
  * _getParentTemplate
  * Return the parent template instance if exist
  * @return 	{STemplate}
  */
	STemplate.prototype._getParentTemplate = function _getParentTemplate() {
		if (this._parentTemplate) return this._parentTemplate;
		// console.log('dom', this.domNode);
		if (this.domNode && this.domNode.parentNode) {
			var parentTemplateNode = (0, _closest2.default)(this.domNode, '[s-tpl]');
			// console.log('parent', this.domNode, parentTemplateNode);
			if (parentTemplateNode && parentTemplateNode._sTemplate) {
				this._parentTemplate = parentTemplateNode._sTemplate;
			}
		}
		return this._parentTemplate;
	};

	/**
  * Set the dom node in which to render the template
  * @param 		{HTMLElement} 		node 			The node that will represent the template
  */


	STemplate.prototype.setDomNode = function setDomNode(node) {
		// prepare the node
		if (!node.hasAttribute('s-tpl')) {
			node.setAttribute('s-tpl', this.templateId);
			// node.setAttribute('s-tpl-node', this.templateId);
			// ignore the template node id
			// sTemplateIntegrator.ignore(node, {
			// 	's-tpl-node' : true,
			// 	's-tpl' : true,
			// 	's-tpl-dirty' : true
			// });

			// save the template instance into the dom
			node._sTemplate = this;
		}

		// set the node
		this.domNode = node;
	};

	/**
  * Set the parent STemplate instance.
  * This is needed if you want your template to talk together through attributes
  * @param 	{STemplate} 	template 	The parent template instance
  */


	STemplate.prototype.setParentTemplate = function setParentTemplate(template) {
		if (!template instanceof STemplate) {
			throw 'the template passed to setParentTemplate is not a STemplate instance';
		}
		this._parentTemplate = template;
	};

	/**
  * Render the template
  * Usually, you don't need to call this by yourself. The template
  * will be rendered again each time that a data is updated
  */


	STemplate.prototype.render = function render() {
		var domNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		if (domNode) {
			this.setDomNode(domNode);
		}
		// render
		this._internalRender();
	};

	/**
  * Render the template
  */


	STemplate.prototype._internalRender = function _internalRender() {
		// check if the template need to render itself again or not
		if (this.settings.shouldTemplateUpdate) {
			if (this.settings.shouldTemplateUpdate(this._updatedDataStack) === false) return;
		}

		// compile the template
		var compiled = this.templateString;

		// remove all the elements that need to be fully refreshed
		[].forEach.call(this.domNode.querySelectorAll('[s-template-refresh]'), function (elm) {
			// console.log('refresh', elm)
			elm.parentNode.removeChild(elm);
		});

		// before render
		if (this.settings.beforeRender) {
			compiled = this.settings.beforeRender(compiled);
		}

		// process compiled template
		compiled = this._processOutput(compiled);

		console.error('patch node', compiled);

		// patch dom
		this.domNode = this.patchDom(compiled);

		// update refs
		this._updateRefs();

		// listen for changes of datas in the DOM
		// through the s-template-model attribute
		this._listenDataChangesInDom();

		// set the template as dirty
		// if ( ! this.domNode.hasAttribute('s-tpl-dirty')) {
		// 	this.domNode.setAttribute('s-tpl-dirty', true);
		// }

		// after render
		this.settings.afterRender && this.settings.afterRender(this.domNode);
	};

	/**
  * Patch the dom with the passed template string
  * @param 		{String} 		template 		The template to use to patch the dom
  * @return 		{HTMLElement} 					The HTMLElement that represent the template in the dom
  */


	STemplate.prototype.patchDom = function patchDom(compiledTemplate) {
		var _this3 = this;

		var dom = void 0;
		if (this.domNode.innerHTML.trim() === '') {
			console.warn('this', this);
			dom = (0, _morphdom2.default)(this.domNode, compiledTemplate.trim());
		} else {
			// set the new html
			dom = (0, _morphdom2.default)(this.domNode, compiledTemplate.trim(), {
				childrenOnly: true,
				onBeforeElChildrenUpdated: function onBeforeElChildrenUpdated(fromNode, toNode) {

					// don't care about no html elements
					// such has comments, text, etc...
					if (!fromNode.hasAttribute) return true;

					// do not take care of childs of another template
					if (toNode.hasAttribute('s-tpl') && fromNode !== _this3.domNode) return false;

					// check if an onBeforeElUpdated is present in the settings
					if (_this3.settings.onBeforeElChildrenUpdated) {
						var res = _this3.settings.onBeforeElChildrenUpdated(fromNode, toNode);
						if (res === true || res === false) {
							return res;
						}
					}

					// update the children
					return true;
				},
				onBeforeElAttributeAdded: function onBeforeElAttributeAdded(fromNode, toNode, attrName, attrValue) {
					console.log('attribute added', fromNode, attrName, attrValue);
				},
				onBeforeElAttributeRemoved: function onBeforeElAttributeRemoved(fromNode, toNode, attrName, attrValue) {
					console.log('attribute removed', fromNode, attrName, attrValue);
				},
				onBeforeElUpdated: function onBeforeElUpdated(fromNode, toNode) {

					// don't care about no html elements
					// such has comments, text, etc...
					if (!fromNode.hasAttribute) return true;

					// if ( toNode.hasAttribute('s-tpl')
					// 	&& toNode.getAttribute('s-tpl') === 'true'
					// ) {
					// 	toNode.setAttribute('s-tpl', this.templateId);
					// }

					// apply integration on component
					// this._applyIntegrationOnNode(fromNode);

					// get the integration from the node
					// const integration = sTemplateIntegrator.getIntegrationFrom(fromNode);
					// if (integration) {
					// 	sTemplateIntegrator.setIntegrationTo(toNode, integration);
					// }
					//
					// // handle the ingnore integration
					// if (typeof(integration.ignore) === 'object') {
					// 	for(let key in integration.ignore) {
					// 		let value = integration.ignore[key];
					// 		// if is class, handle multiple class to ignore
					// 		if (key === 'class' && value !== true) {
					// 			if (typeof(value) === 'string') {
					// 				value = value.split(',').map((v) => { return v.trim(); });
					// 			}
					// 			// loop on each classes to ignore
					// 			value.forEach((cls) => {
					// 				if (fromNode.classList.contains(cls)) {
					// 					toNode.classList.add(cls);
					// 				} else {
					// 					toNode.classList.remove(cls);
					// 				}
					// 			});
					// 		} else {
					// 			// set or remove the attribute
					// 			// to keep in sync the from and to nodes
					// 			if (fromNode.hasAttribute(key)) {
					// 				toNode.setAttribute(key, fromNode.getAttribute(key));
					// 			}
					// 		}
					// 	}
					// }

					// do not update this element
					// cause it's not part of the initial template.
					// maybe it has been added by any component after
					// so it's not our business...
					if (!toNode.hasAttribute('s-tpl-node')) return false;

					// check if an onBeforeElUpdated is present in the settings
					if (_this3.settings.onBeforeElUpdated) {
						var res = _this3.settings.onBeforeElUpdated(fromNode, toNode);
						if (res === true || res === false) {
							return res;
						}
					}

					// update the element
					return true;
				},
				onElUpdated: function onElUpdated(node) {
					// check if an onBeforeElUpdated is present in the settings
					if (_this3.settings.onElUpdated) {
						_this3.settings.onElUpdated(node);
					}
				},
				onBeforeNodeDiscarded: function onBeforeNodeDiscarded(node) {

					// don't care about no html elements
					// such has comments, text, etc...
					if (!node.hasAttribute) return true;

					// is the node is template and that it's not us
					if (node.hasAttribute('s-tpl') && node !== _this3.domNode) return false;

					// we do not discard any elements that
					// have no s-tpl-node attribute
					// cause they maybe has been added by another plugins
					// and it is not our business...
					if (!node.hasAttribute('s-tpl-node')) return false;

					// check if an onBeforeElUpdated is present in the settings
					if (_this3.settings.onBeforeElDiscarded) {
						var res = _this3.settings.onBeforeElDiscarded(fromNode, toNode);
						if (res === true || res === false) {
							return res;
						}
					}

					// discard the element
					return true;
				},
				onElDiscarded: function onElDiscarded(node) {
					// check if an onBeforeElUpdated is present in the settings
					if (_this3.settings.onElDiscarded) {
						_this3.settings.onElDiscarded(node);
					}
				}
			});
		}

		// return the dom template
		return dom;
	};

	/**
  * Update references
  */


	STemplate.prototype._updateRefs = function _updateRefs() {
		var _this4 = this;

		// reset refs
		this.refs = {};
		// save the element itself
		this.refs.elm = this.domNode;
		// search for name and id's
		[].forEach.call(this.domNode.querySelectorAll('[id][s-tpl-node="' + this.templateId + '"],[name][s-tpl-node="' + this.templateId + '"]'), function (elm) {
			// get the id or name
			var id = elm.id || elm.getAttribute('name');
			// save the reference
			_this4.refs[id] = elm;
		});
	};

	/**
  * Apply the STemplate integration on a node that has
  * some components on it
  * @param 		{HTMLElement} 	 node 		The node on which to apply the integration
  */


	STemplate.prototype._applyIntegrationOnNode = function _applyIntegrationOnNode(node) {}
	// if ( ! node._sTemplateTypesIntegration) node._sTemplateTypesIntegration = {};
	// const fns = sTemplateIntegrator.getComponentIntegrationFunctionsFrom(node);
	// fns.forEach((fn) => {
	// 	fn(node);
	// });


	/**
  * Update the data model from an s-template-model element
  * @param 	{HTMLElement} 	element 	The s-template-model element
  */
	;

	STemplate.prototype._updateDataModelFromElement = function _updateDataModelFromElement(element) {

		// get the model from the element
		var model = element.getAttribute('s-template-model');

		// get the value from the element
		var value = (0, _autoCast2.default)(element.value);

		// try to get into data
		var valueInData = null;
		if (typeof value === 'string') {
			valueInData = (0, _get3.default)(this.data, value);
		}

		// if has a value into data
		// take that as value to set into model
		if (valueInData) {
			this.data[model] = valueInData;
		} else if (typeof value === 'string' && value.substr(0, 7) === 'object:') {
			var split = value.split(':');
			var idx = split[1];
			this.data[model] = this._modelValuesStack[idx];
		} else if (value !== undefined) {
			this.data[model] = value;
		} else if (this._originalData[model]) {
			// reset the data to his original value
			this.data[model] = this._originalData[model];
		} else {
			this.data[model] = null;
		}
	};

	/**
  * Listen for changes of datas in dom
  */


	STemplate.prototype._listenDataChangesInDom = function _listenDataChangesInDom() {
		var _this5 = this;

		// find elements that have a data binded into it
		[].forEach.call(this.domNode.querySelectorAll('[s-template-model][s-tpl-node="' + this.templateId + '"]'), function (elm) {

			// check if already binded
			var model = elm.getAttribute('s-template-model');

			// get update timeout from model element
			var updateModelTimeout = (0, _autoCast2.default)(elm.getAttribute('s-template-model-timeout')) || 100;

			// listen for change on the model
			if (!elm._sTemplateBinded) {
				elm._sTemplateBinded = true;
				elm.addEventListener('change', function (e) {
					// update the model from the element
					clearTimeout(_this5._keyUpTimeout);
					_this5._updateDataModelFromElement(e.target);
				});
				elm.addEventListener('keyup', function (e) {
					clearTimeout(_this5._keyUpTimeout);
					_this5._keyUpTimeout = setTimeout(function () {
						// update the model from the element
						_this5._updateDataModelFromElement(e.target);
					}, updateModelTimeout);
				});
			}

			var htmlVal = _this5.data[model];

			// if the model value is not something like a string,
			// a number, etc, we build a stack to map actual model value
			// with a string identifier
			if (_this5.data[model] && (_typeof(_this5.data[model]) === 'object' || _this5.data[model] instanceof Array)) {
				// try to find the model into the stack
				var idx = _this5._modelValuesStack.indexOf(_this5.data[model]);
				// if we already have the value into the stack
				if (idx !== -1) {
					htmlVal = 'object:' + idx;
				} else {
					// we don't have the value into the stack
					// add it and set the new htmlVal
					_this5._modelValuesStack.push(_this5.data[model]);
					var newIdx = _this5._modelValuesStack.length - 1;
					htmlVal = 'object:' + newIdx;
				}
			}

			// set the initial value coming from the model
			elm.value = htmlVal;

			// dispatch a change event if the value has been updated from last render
			if (htmlVal === null || htmlVal === undefined || elm._sTemplateLastRenderValue !== elm.value) {
				(0, _dispatchEvent2.default)(elm, 'change');
			}

			// save the value from render to render
			elm._sTemplateLastRenderValue = elm.value;
		});
	};

	/**
  * Append the template to an HTMLElement
  * @param 		{HTMLElement} 	to 		The element in which to append the template
  */


	STemplate.prototype.appendTo = function appendTo(element) {
		element.appendChild(this.domNode);
		// render
		this._internalRender();
	};

	/**
  * Remove the template from the dom
  */


	STemplate.prototype.remove = function remove() {
		this.domNode.parentNode.removeChild(this.domNode);
	};

	/**
  * Process output to replace some things like the this., parent., etc...
  * @param 		{String} 		renderedTemplate 		The rendered template returned by the settings.compile function
  * @return 		{String} 								The processed template string
  */


	STemplate.prototype._processOutput = function _processOutput(renderedTemplate) {
		var ret = renderedTemplate;

		// apply template node id where there's not one for now
		ret = this._applyTemplateNodeIdAttribute(ret);

		// replace s-template-exp
		ret = ret.replace(/s-template-escaped=[\"\']([^"^']*)[\"\']/g, function (toEscape, value) {
			return value;
		});

		// replace the parent.
		// if we have a parent template
		if (this._parentTemplate) {
			// replace all the this. with the proper window.sTemplateDataObjects reference
			var parentDotReg = new RegExp('parent\\.', 'g');
			ret = ret.replace(parentDotReg, 'window.sugar._sTemplateData.' + this._parentTemplate.templateId + '.');
		}

		// replace all the this. with the proper window.sTemplateDataObjects reference
		var thisDotReg = new RegExp('this\\.', 'g');
		ret = ret.replace(thisDotReg, 'window.sugar._sTemplateData.' + this.templateId + '.');

		// element regexp
		var dollarElementReg = new RegExp('\\$element', 'g');
		ret = ret.replace(dollarElementReg, 'this');

		// return the processed template
		return ret;
	};

	/**
  * Destroy the template
  */


	STemplate.prototype.destroy = function destroy() {
		// remove the template data into window
		delete window.sugar._sTemplateData[this.templateId];
		// destroy watcher
		this._watcher.destroy();
		// delete reference to parentTemplate
		this._parentTemplate = null;
		// remove datas
		this.data = null;
	};

	_createClass(STemplate, [{
		key: 'templateString',
		set: function set(templateString) {
			// save the template
			this._templateString = templateString;

			// apply a node id to each nodes
			this._templateString = this._applyTemplateNodeIdAttribute(this.templateString);
		}

		/**
   * Get the template
   * @type 	{String}
   */
		,
		get: function get() {
			return this._templateString;
		}
	}]);

	return STemplate;
}();

exports.default = STemplate;