'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _merge2 = require('lodash/merge');

var _merge3 = _interopRequireDefault(_merge2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

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

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _fastdom = require('fastdom');

var _fastdom2 = _interopRequireDefault(_fastdom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

if (!window.sugar) window.sugar = {};
if (!window.sugar._templateData) window.sugar._templateData = {};

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
  * Constructor
  */


	/**
  * Store the timeout used to update the template only once when multiple changes have been made
  * @type 	{Number}
  */


	/**
  * Store the values of the model when it's an object or an array
  * This is used to set in html a string value like 'object:10' that will
  * match the current value in this stack
  * @type 	{Array}
  */


	/**
  * Store the reference to the created dom structure
  */


	/**
  * Store a uniqid that will be used as identifier for
  * this particular class in the window.sTemplateClasses
  * @type 	{String}
  */
	function STemplate(templateString) {
		var _this = this;

		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

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
    * Function that runs before the template will be first rendered in the dom so that you can have a change to process it if needed
    * before it will be passed to the render step
    * @param 		{String} 				template 				The template before compilation
    * @return 		{String} 										The processed template to pass to render step
    */
			beforeRenderFirst: null,

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
    * Function that runs after the template has been first rendered to the dom so that you can have a chance to process it if needed
    * @param 		{HTMLElement} 			 	inDomTemplate 		The dom element that represent the template
    */
			afterRenderFirst: null,

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

		// renderedFirst
		this._renderedFirst = false;

		// generate a uniqid for the template
		this.templateId = this.settings.id || (0, _uniqid2.default)();

		// set the template
		this.templateString = templateString;

		// set the data into instance
		this.data = data;

		// keep a copy of the original datas
		this._originalData = (0, _cloneDeep2.default)(this.data);

		// previous data
		this._previousData = this._originalData;
		this._previousDataTimeout;

		// bound the class into the window to be able to call it into
		// templates
		window.sugar._templateData[this.templateId] = this.data;

		this._dataWatcherMap = new Map();

		// instanciate a watcher
		this._watcher = new _SWatcher2.default();

		this._windowDataObserver = {};

		// watch each data
		for (var name in this.data) {
			if (name === 'sTemplate') {
				continue;
			}
			(0, _propertyProxy2.default)(this.data, name, {
				set: function set(value) {
					if (typeof value === 'string') {
						if (value.match(/^window\./g)) {
							if (!_this._windowDataObserver[value]) {
								_this._windowDataObserver[value] = true;
								_this._watcher.watch(window, value.replace('window.', ''), function (newVal, oldVal) {
									_this.data[value.split('.').splice(4).join('.')] = newVal;
								});
							}
							return eval(value);
						}
					}
					return value;
				}
			});
		}

		// watch every data properties and objects
		this._watchRecursive(this.data);
	}

	/**
  * Store the settings
  * @type 	{Object}
  */


	/**
  * Store a stack of updated data between two render
  * @type 	{Object}
  */


	/**
  * Store the data object used to render the template
  * @type 	{Object}
  */


	/**
  * Store the reference to html elements that have an id or a name
  * @type 	{Object}
  */


	_createClass(STemplate, [{
		key: '_watchRecursive',
		value: function _watchRecursive(obj) {
			var _this2 = this;

			var watcher = new _SWatcher2.default();
			for (var property in obj) {

				if (!obj.hasOwnProperty(property)) continue;

				// recursive routine
				if (obj[property] instanceof Array) {
					obj[property].forEach(function (item) {
						if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !_this2._dataWatcherMap.get(item)) {
							_this2._watchRecursive(item);
						}
					});
				} else if (_typeof(obj[property]) === "object" && !this._dataWatcherMap.get(obj[property])) {
					this._watchRecursive(obj[property]);
				}

				// property closure
				(function (property) {

					// save the item into a map to be able
					// to check later if this particular item has already
					// his property proxy setted or not
					_this2._dataWatcherMap.set((0, _get3.default)(obj, property), true);

					// proxy the property to be able to notify for new
					// data updates as well as watch newly created data.
					// ONLY the actual data that are present passed to the constructor
					// and all new newly created data inside these ones will be monitored.
					// newly created items at the root of the this.data will not bein monitored...
					watcher.watch(obj, property, function (value, oldVal, updateInfo) {

						if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object' && !value instanceof Array) {
							if (value === obj[property]) return;
						}

						// if the watched element is a new object,
						// we watch it as well
						if (value instanceof Array && updateInfo && updateInfo.type === Array && updateInfo.addedItems) {
							updateInfo.addedItems.forEach(function (newItem) {
								if ((typeof newItem === 'undefined' ? 'undefined' : _typeof(newItem)) === 'object' && !_this2._dataWatcherMap.get(newItem)) {
									_this2._watchRecursive(newItem);
								}
							});
						} else {
							if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !_this2._dataWatcherMap.get(value)) {
								_this2._watchRecursive(value);
							}
						}

						// notify the new datas
						_this2._notifyDataUpdate();
					}, {
						set: function set(value) {

							// save previousData
							// do that first and not until next loop to batch
							// simultaneous updates that may occurs
							if (!_this2._previousDataTimeout) {
								_this2._previousData = (0, _cloneDeep2.default)(_this2.data);
								_this2._previousDataTimeout = setTimeout(function () {
									_this2._previousDataTimeout = null;
								});
							}

							// return the actual value to be setted normaly
							return value;
						}
					});

					// __propertyProxy(obj, property, {
					// 	set : (value) => {
					//
					// 	}
					// }, false);
				})(property);
			}
		}
	}, {
		key: '_notifyDataUpdate',
		value: function _notifyDataUpdate() {
			var _this3 = this;

			// make update only once
			// by waiting next loop
			_fastdom2.default.clear(this._notifyDataUpdateTimeout);
			// clearTimeout(this._updateTimeout);
			// this._updateTimeout = setTimeout(() => {
			this._notifyDataUpdateTimeout = _fastdom2.default.mutate(function () {
				// on datas updated
				_this3.settings.onDataUpdate && _this3.settings.onDataUpdate(_this3.data, _this3._previousData);
				// render the template again if the autoRenderOnDataUpdate is true
				if (_this3.settings.autoRenderOnDataUpdate) {
					_this3._internalRender();
				}
			});
		}

		/**
   * Check if the passed node is part of this template
   * @param 			{HTMLElement} 			node 			The node to test
   * @return 			{Boolean} 								True if part of this template, false if not
  	 */

	}, {
		key: 'isNodeBelongToMe',
		value: function isNodeBelongToMe(node) {
			// if the node has the templateId has s-tpl-node attribute
			if (node.hasAttribute('s-tpl-node') && node.getAttribute('s-tpl-node') === this.templateId) return true;
			// otherwise, the node does not belong to the template
			return false;
		}

		/**
   * Apply the template-node-id attribute on each nodes that does not have one
   * @param 		{String} 		templateString 		The template string to process
   * @return 		{String} 							The processed template string
   */

	}, {
		key: '_applyTemplateNodeIdAttribute',
		value: function _applyTemplateNodeIdAttribute(templateString) {
			var _this4 = this;

			return templateString.replace(/<[a-zA-Z0-9-]+(?!.*s-tpl-node)(?!.*s-tpl)(\s|>)/g, function (itm, s) {
				if (s === '>') {
					return itm.trim().replace('>', '') + ' s-tpl-node="' + _this4.templateId + '">';
				} else {
					return itm.trim() + ' s-tpl-node="' + _this4.templateId + '" ';
				}
			});
		}

		/**
   * Set the template string
   * @param 		{String} 	template 	The template string
   */

	}, {
		key: 'setDomNode',


		/**
   * Set the dom node in which to render the template
   * @param 		{HTMLElement} 		node 			The node that will represent the template
   */
		value: function setDomNode(node) {
			// prepare the node
			if (!node.hasAttribute('s-tpl') || node.getAttribute('s-tpl') === 'true') {
				node.setAttribute('s-tpl', this.templateId);

				// save the template instance into the dom
				node._sTemplate = this;
			}

			// set the node
			this.domNode = node;
		}

		/**
   * Render the template
   * Usually, you don't need to call this by yourself. The template
   * will be rendered again each time that a data is updated
   */

	}, {
		key: 'render',
		value: function render() {
			var domNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			if (domNode) {
				this.setDomNode(domNode);
			}
			// render
			this._internalRender();
		}

		/**
   * Render the template
   */

	}, {
		key: '_internalRender',
		value: function _internalRender() {
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

			// before render first
			if (this.settings.beforeRenderFirst && !this._renderedFirst) {
				compiled = this.settings.beforeRenderFirst(compiled);
			}

			// before render
			if (this.settings.beforeRender) {
				compiled = this.settings.beforeRender(compiled);
			}

			// process compiled template
			compiled = this._processOutput(compiled);

			// patch dom
			this.domNode = this.patchDom(compiled);

			// update refs
			this._updateRefs();

			// listen for changes of datas in the DOM
			// through the s-template-model attribute
			// this._listenDataChangesInDom();

			// set the template as dirty
			if (!this.domNode.hasAttribute('s-tpl-dirty')) {
				this.domNode.setAttribute('s-tpl-dirty', true);
			}

			// after render
			!this._renderedFirst && this.settings.afterRenderFirst && this.settings.afterRenderFirst(this.domNode);

			// after render
			this.settings.afterRender && this.settings.afterRender(this.domNode);

			// update rendered
			this._renderedFirst = true;
		}

		/**
   * Patch the dom with the passed template string
   * @param 		{String} 		template 		The template to use to patch the dom
   * @return 		{HTMLElement} 					The HTMLElement that represent the template in the dom
   */

	}, {
		key: 'patchDom',
		value: function patchDom(compiledTemplate) {
			var _this5 = this;

			var dom = void 0;
			// set the new html
			dom = (0, _morphdom2.default)(this.domNode, compiledTemplate.trim(), {
				childrenOnly: true,
				onBeforeElChildrenUpdated: function onBeforeElChildrenUpdated(fromNode, toNode) {

					// don't care about no html elements
					// such has comments, text, etc...
					if (!fromNode.hasAttribute) return true;

					// do not take care of childs of another template
					if (toNode.hasAttribute('s-tpl') && fromNode !== _this5.domNode) return false;

					// check if an onBeforeElUpdated is present in the settings
					if (_this5.settings.onBeforeElChildrenUpdated) {
						var res = _this5.settings.onBeforeElChildrenUpdated(fromNode, toNode);
						if (res === true || res === false) {
							return res;
						}
					}

					// update the children
					return true;
				},
				onBeforeElAttributeAdded: function onBeforeElAttributeAdded(fromNode, toNode, attrName, attrValue) {
					// store the added attributes
					if (!fromNode._sTemplateAttributes) fromNode._sTemplateAttributes = {};
					fromNode._sTemplateAttributes[attrName] = true;
					return true;
				},
				onBeforeElAttributeRemoved: function onBeforeElAttributeRemoved(fromNode, toNode, attrName, attrValue) {
					if (!fromNode._sTemplateAttributes || !fromNode._sTemplateAttributes[attrName]) return false;
					return true;
				},
				onBeforeElAttributeUpdated: function onBeforeElAttributeUpdated(fromNode, toNode, attrName, fromAtteValue, toAttrValue) {
					if (attrName === 's-tpl') return false;
					return true;
				},
				onBeforeNodeAdded: function onBeforeNodeAdded(node) {
					if (!node.hasAttribute) return node;

					// check if an onBeforeElUpdated is present in the settings
					if (_this5.settings.onBeforeNodeAdded) {
						var res = _this5.settings.onBeforeNodeAdded(node);
						if (res === true || res === false) {
							return res;
						}
					}
					return node;
				},
				onNodeAdded: function onNodeAdded(node) {
					if (!node.hasAttribute) return node;
					if (node.hasAttribute('s-template-model')) {
						_this5._handleModelElement(node);
					}
				},
				onBeforeElUpdated: function onBeforeElUpdated(fromNode, toNode) {

					// don't care about no html elements
					// such has comments, text, etc...
					if (!fromNode.hasAttribute) return true;

					if (fromNode.hasAttribute('s-template-model')) {
						_this5._handleModelElement(fromNode, toNode);
					}

					// do not update this element
					// cause it's not part of the initial template.
					// maybe it has been added by any component after
					// so it's not our business...
					if (!toNode.hasAttribute('s-tpl-node')) return false;

					// check if an onBeforeElUpdated is present in the settings
					if (_this5.settings.onBeforeElUpdated) {
						var res = _this5.settings.onBeforeElUpdated(fromNode, toNode);
						if (res === true || res === false) {
							return res;
						}
					}

					// update the element
					return true;
				},
				onElUpdated: function onElUpdated(node) {
					if (!node.hasAttribute) return;

					// check if an onBeforeElUpdated is present in the settings
					if (_this5.settings.onElUpdated) {
						_this5.settings.onElUpdated(node);
					}
				},
				onBeforeNodeDiscarded: function onBeforeNodeDiscarded(node) {

					// don't care about no html elements
					// such has comments, text, etc...
					if (!node.hasAttribute) return true;

					// is the node is template and that it's not us
					if (node.hasAttribute('s-tpl') && node !== _this5.domNode) return false;

					// we do not discard any elements that
					// have no s-tpl-node attribute
					// cause they maybe has been added by another plugins
					// and it is not our business...
					if (!node.hasAttribute('s-tpl-node')) return false;

					// check if an onBeforeElUpdated is present in the settings
					if (_this5.settings.onBeforeElDiscarded) {
						var res = _this5.settings.onBeforeElDiscarded(fromNode, toNode);
						if (res === true || res === false) {
							return res;
						}
					}

					// discard the element
					return true;
				},
				onElDiscarded: function onElDiscarded(node) {
					// check if an onBeforeElUpdated is present in the settings
					if (_this5.settings.onElDiscarded) {
						_this5.settings.onElDiscarded(node);
					}
				}
			});

			// return the dom template
			return dom;
		}
	}, {
		key: '_handleModelElement',
		value: function _handleModelElement(fromNode) {
			var _this6 = this;

			var toNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var model = fromNode.getAttribute('s-template-model');
			var value = (0, _get3.default)(this.data, model);
			var rootModel = model.split('.')[0];
			switch (fromNode.nodeName.toLowerCase()) {
				case 'select':
					_fastdom2.default.mutate(function () {
						// setTimeout(() => {
						if (toNode) {
							toNode.value = fromNode._sTemplateSelectRawValue;
							toNode.selectedIndex = fromNode._sTemplateSelectedIndex;
						}
						fromNode.value = fromNode._sTemplateSelectRawValue;
						fromNode.selectedIndex = fromNode._sTemplateSelectedIndex;
					});
					if (!fromNode._sTemplateUpdaterRoutine) {
						fromNode._sTemplateUpdaterRoutine = true;
						fromNode.addEventListener(fromNode.getAttribute('s-template-model-trigger') || 'change', function (e) {
							var model = e.target.getAttribute('s-template-model');
							e.target._sTemplateSelectedIndex = e.target.selectedIndex;
							e.target._sTemplateSelectRawValue = e.target.value;
							(0, _set3.default)(_this6.data, model, e.target.value);
						});
					}
					break;
				case 'input':
					switch (fromNode.type) {
						case 'checkbox':
							if (toNode) toNode.checked = value;
							fromNode.checked = value;
							if (!fromNode._sTemplateUpdaterRoutine) {
								fromNode._sTemplateUpdaterRoutine = true;
								fromNode.addEventListener(fromNode.getAttribute('s-template-model-trigger') || 'change', function (e) {
									var model = e.target.getAttribute('s-template-model');
									(0, _set3.default)(_this6.data, model, e.target.checked);
								});
							}
							break;
						default:
							if (toNode) toNode.value = value;
							if (fromNode.value !== value) fromNode.value = value;
							if (!fromNode._sTemplateUpdaterRoutine) {
								var timeout = fromNode.getAttribute('s-template-model-timeout') || -1;
								fromNode._sTemplateUpdaterRoutine = true;
								if (timeout !== -1) {
									fromNode.addEventListener(fromNode.getAttribute('s-template-model-trigger') || 'keyup', function (e) {
										clearTimeout(fromNode._sTemplateUpdateTimeout);
										fromNode._sTemplateUpdateTimeout = setTimeout(function () {
											var model = e.target.getAttribute('s-template-model');
											(0, _set3.default)(_this6.data, model, e.target.value);
										}, parseInt(timeout));
									});
								}
								fromNode.addEventListener('keyup', function (e) {
									if (e.keyCode === 13) {
										clearTimeout(fromNode._sTemplateUpdateTimeout);
										var _model = e.target.getAttribute('s-template-model');
										(0, _set3.default)(_this6.data, _model, e.target.value);
									}
								});
							}
							break;
					}
					break;
			}
		}

		/**
   * Update references
   */

	}, {
		key: '_updateRefs',
		value: function _updateRefs() {
			var _this7 = this;

			// reset refs
			this.refs = {};
			// save the element itself
			this.refs.elm = this.domNode;
			// search for name and id's
			[].forEach.call(this.domNode.querySelectorAll('[id][s-tpl-node="' + this.templateId + '"],[name][s-tpl-node="' + this.templateId + '"]'), function (elm) {
				// get the id or name
				var id = elm.id || elm.getAttribute('name');
				// save the reference
				_this7.refs[id] = elm;
			});
		}

		/**
   * Update the data model from an s-template-model element
   * @param 	{HTMLElement} 	element 	The s-template-model element
   */

	}, {
		key: '_updateDataModelFromElement',
		value: function _updateDataModelFromElement(element) {

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
				(0, _set3.default)(this.data, model, valueInData);
			} else if (typeof value === 'string' && value.substr(0, 7) === 'object:') {
				var split = value.split(':');
				var idx = split[1];
				(0, _set3.default)(this.data, model, this._modelValuesStack[idx]);
			} else if (value !== undefined) {
				(0, _set3.default)(this.data, model, value);
			} else if (this._originalData[model]) {
				// reset the data to his original value
				(0, _set3.default)(this.data, model, this._originalData[model]);
			} else {
				(0, _set3.default)(this.data, model, null);
			}
		}

		/**
   * Append the template to an HTMLElement
   * @param 		{HTMLElement} 	to 		The element in which to append the template
   */

	}, {
		key: 'appendTo',
		value: function appendTo(element) {
			element.appendChild(this.domNode);
			// render
			this._internalRender();
		}

		/**
   * Remove the template from the dom
   */

	}, {
		key: 'remove',
		value: function remove() {
			this.domNode.parentNode.removeChild(this.domNode);
		}

		/**
   * Process output to replace some things like the this., parent., etc...
   * @param 		{String} 		renderedTemplate 		The rendered template returned by the settings.compile function
   * @return 		{String} 								The processed template string
   */

	}, {
		key: '_processOutput',
		value: function _processOutput(renderedTemplate) {
			var ret = renderedTemplate;

			// apply template node id where there's not one for now
			ret = this._applyTemplateNodeIdAttribute(ret);

			// replace s-template-exp
			ret = ret.replace(/s-template-escaped=[\"\']([^"^']*)[\"\']/g, function (toEscape, value) {
				return value;
			});

			// replace all the this. with the proper window.sTemplateDataObjects reference
			var thisDotReg = new RegExp('\\$this\\.', 'g');
			ret = ret.replace(thisDotReg, 'window.sugar._templateData.' + this.templateId + '.');

			// return the processed template
			return ret;
		}

		/**
   * Destroy the template
   */

	}, {
		key: 'destroy',
		value: function destroy() {
			// remove the template data into window
			delete window.sugar._templateData[this.templateId];
			// destroy watcher
			this._watcher.destroy();
			// destroy data watcher map
			this._dataWatcherMap.clear();
			// remove datas
			this.data = null;
		}
	}, {
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