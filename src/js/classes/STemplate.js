import __dispatchEvent from '../dom/dispatchEvent';
import SWatcher from '../classes/SWatcher';
import uniqid from '../utils/uniqid';
import morphdom from 'morphdom';
import domReady from '../dom/domReady';
import _get from 'lodash/get';
import _set from 'lodash/set';
import _merge from 'lodash/merge'
import _isEqual from 'lodash/isEqual'
import __autoCast from '../utils/string/autoCast';
import __matches from '../dom/matches';
import __uniqid from '../utils/uniqid';
import querySelectorLive from '../dom/querySelectorLive';
import __strToHtml from '../utils/string/strToHtml'
import __constructorName from '../utils/objects/constructorName'
import __closest from '../dom/closest'
import __whenAttribute from '../dom/whenAttribute'
import __propertyProxy from '../utils/objects/propertyProxy'
import sTemplateIntegrator from './sTemplateIntegrator'
import __cloneDeep from 'lodash/cloneDeep'
import __fastdom from 'fastdom'

if (! window.sugar) window.sugar = {};
if (! window.sugar._templateData) window.sugar._templateData = {};

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
export default class STemplate {

	/**
	 * Store a uniqid that will be used as identifier for
	 * this particular class in the window.sTemplateClasses
	 * @type 	{String}
	 */
	templateId = null;

	/**
	 * Store the reference to html elements that have an id or a name
	 * @type 	{Object}
	 */
	refs = {};

	/**
	 * Store the reference to the created dom structure
	 */
	domNode = null;

	/**
	 * Store the data object used to render the template
	 * @type 	{Object}
	 */
	data = {};

	/**
	 * Store the values of the model when it's an object or an array
	 * This is used to set in html a string value like 'object:10' that will
	 * match the current value in this stack
	 * @type 	{Array}
	 */
	_modelValuesStack = [];

	/**
	 * Store a stack of updated data between two render
	 * @type 	{Object}
	 */
	_updatedDataStack = {};

	/**
	 * Store the timeout used to update the template only once when multiple changes have been made
	 * @type 	{Number}
	 */
	_updateTimeout = null;

	/**
	 * Store the settings
	 * @type 	{Object}
	 */
	settings = {

		/**
		 * Set if the render happend automatically or not
		 * @setting
		 * @type 		{Boolean}
		 */
		autoRenderOnDataUpdate : true,

		/**
		 * Function called when a data is updated with his new and old value as parameter
		 * @setting
		 * @type 		{Function}
		 */
		onDataUpdate : null,

		/**
		 * Function called when some datas has been updated with his new and old value as parameter
		 * @setting
		 * @type 		{Function}
		 */
		onDatasUpdate : null,

		/**
		 * Function that runs before the template will be first rendered in the dom so that you can have a change to process it if needed
		 * before it will be passed to the render step
		 * @param 		{String} 				template 				The template before compilation
		 * @return 		{String} 										The processed template to pass to render step
		 */
		beforeRenderFirst : null,

		/**
		 * Function that runs before the template will be rendered in the dom so that you can have a change to process it if needed
		 * before it will be passed to the render step
		 * @param 		{String} 				template 				The template before compilation
		 * @return 		{String} 										The processed template to pass to render step
		 */
		beforeRender : null,

		/**
		 * Function that runs after the template has been rendered to the dom so that you can have a chance to process it if needed
		 * @param 		{HTMLElement} 			 	inDomTemplate 		The dom element that represent the template
		 */
		afterRender : null,

		/**
		 * Function that runs after the template has been first rendered to the dom so that you can have a chance to process it if needed
		 * @param 		{HTMLElement} 			 	inDomTemplate 		The dom element that represent the template
		 */
		afterRenderFirst : null,

		/**
		 * Function called before any HTMLElement will be updated in the dom
		 * If this function return false, the element will not bein updated at all
		 * @setting
		 * @type 		{Function}
		 * @default  	null
		 */
		onBeforeElUpdated : null,

		/**
		 * Function called before any HTMLElement child will be updated in the dom
		 * If this function return false, the engine will not try to update this element children
		 * @setting
		 * @type 		{Function}
		 * @default  	null
		 */
		onBeforeElChildrenUpdated : null,

		/**
		 * Function called before any HTMLElement will be removed from the dom
		 * If this function return false, the element will not bein removed
		 * @setting
		 * @type 		{Function}
		 * @default  	null
		 */
		onBeforeElDiscarded : null,

		/**
		 * Function called after any HTMLElement has been removed from the dom
		 * @setting
		 * @type 		{Function}
		 */
		onElDiscarded : null

	};

	/**
	 * Constructor
	 */
	constructor(templateString, data = {}, settings = {}) {

		// save settings
		this.settings = {
			...this.settings,
			...settings
		};

		// renderedFirst
		this._renderedFirst = false;

		// generate a uniqid for the template
		this.templateId = this.settings.id || __uniqid();

		// set the template
		this.templateString = templateString;

		// set the data into instance
		this.data = data;

		// keep a copy of the original datas
		this._originalData = __cloneDeep(this.data);

		// previous data
		this._previousData = this._originalData;
		this._previousDataTimeout;

		// bound the class into the window to be able to call it into
		// templates
		window.sugar._templateData[this.templateId] = this.data;

		this._dataWatcherMap = new Map();

		// instanciate a watcher
		this._watcher = new SWatcher();

		this._windowDataObserver = {};

		// watch each data
		for (let name in this.data) {
			if (name === 'sTemplate') {
				continue;
			}
			__propertyProxy(this.data, name, {
				set : (value) => {
					if (typeof(value) === 'string') {
						if (value.match(/^window\./g)) {
							if ( ! this._windowDataObserver[value]) {
								this._windowDataObserver[value] = true;
								this._watcher.watch(window, value.replace('window.',''), (newVal, oldVal) => {
									this.data[value.split('.').splice(4).join('.')] = newVal;
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


	_watchRecursive(obj) {
		const watcher = new SWatcher();
		for (var property in obj) {

			if ( ! obj.hasOwnProperty(property)) continue;

			// recursive routine
			if (obj[property] instanceof Array) {
				obj[property].forEach((item) => {
					if (typeof item === 'object' && ! this._dataWatcherMap.get(item)) {
						this._watchRecursive(item);
					}
				});
			} else if (typeof obj[property] === "object" && ! this._dataWatcherMap.get(obj[property])) {
				this._watchRecursive(obj[property]);
			}

			// property closure
			((property) => {

				// save the item into a map to be able
				// to check later if this particular item has already
				// his property proxy setted or not
				this._dataWatcherMap.set(_get(obj, property), true);

				// proxy the property to be able to notify for new
				// data updates as well as watch newly created data.
				// ONLY the actual data that are present passed to the constructor
				// and all new newly created data inside these ones will be monitored.
				// newly created items at the root of the this.data will not bein monitored...
				watcher.watch(obj, property, (value, oldVal, updateInfo) => {

					if (typeof(value) !== 'object' && ! value instanceof Array) {
						if (value === obj[property]) return;
					}

					// if the watched element is a new object,
					// we watch it as well
					if (value instanceof Array && updateInfo && updateInfo.type === Array && updateInfo.addedItems) {
						updateInfo.addedItems.forEach((newItem) => {
							if ( typeof(newItem) === 'object' && ! this._dataWatcherMap.get(newItem)) {
								this._watchRecursive(newItem);
							}
						});
					} else {
						if ( typeof(value) === 'object' && ! this._dataWatcherMap.get(value)) {
							this._watchRecursive(value);
						}
					}

					// notify the new datas
					this._notifyDataUpdate();
				}, {
					set : (value) => {

						// save previousData
						// do that first and not until next loop to batch
						// simultaneous updates that may occurs
						if ( ! this._previousDataTimeout) {
							this._previousData = __cloneDeep(this.data);
							this._previousDataTimeout = setTimeout(() => {
								this._previousDataTimeout = null;
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

	_notifyDataUpdate() {

		// make update only once
		// by waiting next loop
		__fastdom.clear(this._notifyDataUpdateTimeout);
		// clearTimeout(this._updateTimeout);
		// this._updateTimeout = setTimeout(() => {
		this._notifyDataUpdateTimeout = __fastdom.mutate(() => {
			// on datas updated
			this.settings.onDataUpdate && this.settings.onDataUpdate(this.data, this._previousData);
			// render the template again if the autoRenderOnDataUpdate is true
			if (this.settings.autoRenderOnDataUpdate) {
				this._internalRender();
			}
		});
	}

	/**
	 * Check if the passed node is part of this template
	 * @param 			{HTMLElement} 			node 			The node to test
	 * @return 			{Boolean} 								True if part of this template, false if not
 	 */
 	isNodeBelongToMe(node) {
		// if the node has the templateId has s-tpl-node attribute
		if (node.hasAttribute('s-tpl-node')
			&& node.getAttribute('s-tpl-node') === this.templateId
		) return true;
		// otherwise, the node does not belong to the template
		return false;
	}

	/**
	 * Apply the template-node-id attribute on each nodes that does not have one
	 * @param 		{String} 		templateString 		The template string to process
	 * @return 		{String} 							The processed template string
	 */
	_applyTemplateNodeIdAttribute(templateString) {
		return templateString.replace(/<[a-zA-Z0-9-]+(?!.*s-tpl-node)(?!.*s-tpl)(\s|>)/g, (itm, s) => {
			if (s === '>') {
				return `${itm.trim().replace('>','')} s-tpl-node="${this.templateId}">`;
			} else {
				return `${itm.trim()} s-tpl-node="${this.templateId}" `;
			}
		});
	}

	/**
	 * Set the template string
	 * @param 		{String} 	template 	The template string
	 */
	set templateString(templateString) {
		// save the template
		this._templateString = templateString;

		// apply a node id to each nodes
		this._templateString = this._applyTemplateNodeIdAttribute(this.templateString);
	}

	/**
	 * Get the template
	 * @type 	{String}
	 */
	get templateString() {
		return this._templateString;
	}

	/**
	 * Set the dom node in which to render the template
	 * @param 		{HTMLElement} 		node 			The node that will represent the template
	 */
	setDomNode(node) {
		// prepare the node
		if ( ! node.hasAttribute('s-tpl')
			|| node.getAttribute('s-tpl') === 'true') {
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
	render(domNode = null) {
		if (domNode) {
			this.setDomNode(domNode);
		}
		// render
		this._internalRender();
	}

	/**
	 * Render the template
	 */
	_internalRender() {
		// check if the template need to render itself again or not
		if (this.settings.shouldTemplateUpdate) {
			if (this.settings.shouldTemplateUpdate(this._updatedDataStack) === false) return;
		}

		// compile the template
		let compiled = this.templateString;

		// remove all the elements that need to be fully refreshed
		[].forEach.call(this.domNode.querySelectorAll(`[s-template-refresh]`), (elm) => {
			// console.log('refresh', elm)
			elm.parentNode.removeChild(elm);
		});

		// before render first
		if (this.settings.beforeRenderFirst && ! this._renderedFirst) {
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
		if ( ! this.domNode.hasAttribute('s-tpl-dirty')) {
			this.domNode.setAttribute('s-tpl-dirty', true);
		}

		// after render
		! this._renderedFirst && this.settings.afterRenderFirst && this.settings.afterRenderFirst(this.domNode);

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
	patchDom(compiledTemplate) {
		let dom;
		// set the new html
		dom = morphdom(this.domNode, compiledTemplate.trim(), {
			childrenOnly : true,
			onBeforeElChildrenUpdated : (fromNode, toNode) => {

				// don't care about no html elements
				// such has comments, text, etc...
				if ( ! fromNode.hasAttribute) return true;

				// do not take care of childs of another template
				if ( toNode.hasAttribute('s-tpl')
					&& fromNode !== this.domNode) return false;

				// check if an onBeforeElUpdated is present in the settings
				if (this.settings.onBeforeElChildrenUpdated) {
					const res = this.settings.onBeforeElChildrenUpdated(fromNode, toNode);
					if (res === true || res === false) {
						return res;
					}
				}

				// update the children
				return true;
			},
			onBeforeElAttributeAdded : (fromNode, toNode, attrName, attrValue) => {
				// store the added attributes
				if ( ! fromNode._sTemplateAttributes) fromNode._sTemplateAttributes = {};
				fromNode._sTemplateAttributes[attrName] = true;
				return true;
			},
			onBeforeElAttributeRemoved : (fromNode, toNode, attrName, attrValue) => {
				if ( ! fromNode._sTemplateAttributes || ! fromNode._sTemplateAttributes[attrName]) return false;
				return true;
			},
			onBeforeElAttributeUpdated : (fromNode, toNode, attrName, fromAtteValue, toAttrValue) => {
				if (attrName === 's-tpl') return false;
				return true;
			},
			onBeforeNodeAdded : (node) => {
				if ( ! node.hasAttribute) return node;

				// check if an onBeforeElUpdated is present in the settings
				if (this.settings.onBeforeNodeAdded) {
					const res = this.settings.onBeforeNodeAdded(node);
					if (res === true || res === false) {
						return res;
					}
				}
				return node;
			},
			onNodeAdded : (node) => {
				if ( ! node.hasAttribute) return node;
				if ( node.hasAttribute('s-template-model')) {
					this._handleModelElement(node);
				}
			},
			onBeforeElUpdated : (fromNode, toNode) => {

				// don't care about no html elements
				// such has comments, text, etc...
				if ( ! fromNode.hasAttribute) return true;

				if ( fromNode.hasAttribute('s-template-model')) {
					this._handleModelElement(fromNode, toNode);
				}

				// do not update this element
				// cause it's not part of the initial template.
				// maybe it has been added by any component after
				// so it's not our business...
				if ( ! toNode.hasAttribute('s-tpl-node')) return false;

				// check if an onBeforeElUpdated is present in the settings
				if (this.settings.onBeforeElUpdated) {
					const res = this.settings.onBeforeElUpdated(fromNode, toNode);
					if (res === true || res === false) {
						return res;
					}
				}

				// update the element
				return true;
			},
			onElUpdated : (node) => {
				if ( ! node.hasAttribute) return;

				// check if an onBeforeElUpdated is present in the settings
				if (this.settings.onElUpdated) {
					this.settings.onElUpdated(node);
				}
			},
			onBeforeNodeDiscarded : (node) => {

				// don't care about no html elements
				// such has comments, text, etc...
				if ( ! node.hasAttribute) return true;

				// is the node is template and that it's not us
				if (node.hasAttribute('s-tpl') && node !== this.domNode) return false;

				// we do not discard any elements that
				// have no s-tpl-node attribute
				// cause they maybe has been added by another plugins
				// and it is not our business...
				if ( ! node.hasAttribute('s-tpl-node')) return false;

				// check if an onBeforeElUpdated is present in the settings
				if (this.settings.onBeforeElDiscarded) {
					const res = this.settings.onBeforeElDiscarded(fromNode, toNode);
					if (res === true || res === false) {
						return res;
					}
				}

				// discard the element
				return true;
			},
			onElDiscarded : (node) => {
				// check if an onBeforeElUpdated is present in the settings
				if (this.settings.onElDiscarded) {
					this.settings.onElDiscarded(node);
				}
			}
		});

		// return the dom template
		return dom;
	}

	_handleModelElement(fromNode, toNode = null) {
		const model = fromNode.getAttribute('s-template-model');
		const value = _get(this.data, model);
		const rootModel = model.split('.')[0];
		switch(fromNode.nodeName.toLowerCase()) {
			case 'select':
				__fastdom.mutate(() => {
				// setTimeout(() => {
					if (toNode) {
						toNode.value = fromNode._sTemplateSelectRawValue;
						toNode.selectedIndex = fromNode._sTemplateSelectedIndex;
					}
					fromNode.value = fromNode._sTemplateSelectRawValue;
					fromNode.selectedIndex = fromNode._sTemplateSelectedIndex;
				});
				if ( ! fromNode._sTemplateUpdaterRoutine) {
					fromNode._sTemplateUpdaterRoutine = true;
					fromNode.addEventListener(fromNode.getAttribute('s-template-model-trigger') || 'change', (e) => {
						const model = e.target.getAttribute('s-template-model');
						e.target._sTemplateSelectedIndex = e.target.selectedIndex;
						e.target._sTemplateSelectRawValue = e.target.value;
						_set(this.data, model, e.target.value);
					});
				}
			break;
			case 'input':
				switch(fromNode.type) {
					case 'checkbox':
						if (toNode) toNode.checked = value;
						fromNode.checked = value;
						if ( ! fromNode._sTemplateUpdaterRoutine) {
							fromNode._sTemplateUpdaterRoutine = true;
							fromNode.addEventListener(fromNode.getAttribute('s-template-model-trigger') || 'change', (e) => {
								const model = e.target.getAttribute('s-template-model');
								_set(this.data, model, e.target.checked);
							});
						}
					break;
					default:
						if (toNode) toNode.value = value;
						if (fromNode.value !== value) fromNode.value = value;
						if ( ! fromNode._sTemplateUpdaterRoutine) {
							const timeout = fromNode.getAttribute('s-template-model-timeout') || -1;
							fromNode._sTemplateUpdaterRoutine = true;
							if (timeout !== -1) {
								fromNode.addEventListener(fromNode.getAttribute('s-template-model-trigger') || 'keyup', (e) => {
									clearTimeout(fromNode._sTemplateUpdateTimeout);
									fromNode._sTemplateUpdateTimeout = setTimeout(() => {
										const model = e.target.getAttribute('s-template-model');
										_set(this.data, model, e.target.value);
									}, parseInt(timeout));
								});
							}
							fromNode.addEventListener('keyup', (e) => {
								if (e.keyCode === 13) {
									clearTimeout(fromNode._sTemplateUpdateTimeout);
									const model = e.target.getAttribute('s-template-model');
									_set(this.data, model, e.target.value);
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
	_updateRefs() {
		// reset refs
		this.refs = {};
		// save the element itself
		this.refs.elm = this.domNode;
		// search for name and id's
		[].forEach.call(this.domNode.querySelectorAll(`[id][s-tpl-node="${this.templateId}"],[name][s-tpl-node="${this.templateId}"]`), (elm) => {
			// get the id or name
			const id = elm.id || elm.getAttribute('name');
			// save the reference
			this.refs[id] = elm;
		});
	}

	/**
	 * Update the data model from an s-template-model element
	 * @param 	{HTMLElement} 	element 	The s-template-model element
	 */
	_updateDataModelFromElement(element) {

		// get the model from the element
		const model = element.getAttribute('s-template-model');

		// get the value from the element
		let value = __autoCast(element.value);

		// try to get into data
		let valueInData = null;
		if (typeof(value) === 'string') {
			valueInData = _get(this.data, value);
		}

		// if has a value into data
		// take that as value to set into model
		if (valueInData) {
			_set(this.data, model, valueInData);
		} else if (typeof(value) === 'string' && value.substr(0,7) === 'object:') {
			const split = value.split(':');
			const idx = split[1];
			_set(this.data, model, this._modelValuesStack[idx]);
		} else if (value !== undefined) {
			_set(this.data, model, value);
		} else if (this._originalData[model]) {
			// reset the data to his original value
			_set(this.data, model, this._originalData[model]);
		} else {
			_set(this.data, model, null);
		}
	}

	/**
	 * Append the template to an HTMLElement
	 * @param 		{HTMLElement} 	to 		The element in which to append the template
	 */
	appendTo(element) {
		element.appendChild(this.domNode);
		// render
		this._internalRender();
	}

	/**
	 * Remove the template from the dom
	 */
	remove() {
		this.domNode.parentNode.removeChild(this.domNode);
	}

	/**
	 * Process output to replace some things like the this., parent., etc...
	 * @param 		{String} 		renderedTemplate 		The rendered template returned by the settings.compile function
	 * @return 		{String} 								The processed template string
	 */
	_processOutput(renderedTemplate) {
		let ret = renderedTemplate;

		// apply template node id where there's not one for now
		ret = this._applyTemplateNodeIdAttribute(ret);

		// replace s-template-exp
		ret = ret.replace(/s-template-escaped=[\"\']([^"^']*)[\"\']/g, (toEscape, value) => {
			return value;
		});

		// replace all the this. with the proper window.sTemplateDataObjects reference
		const thisDotReg = new RegExp('\\$this\\.','g');
		ret = ret.replace(thisDotReg, `window.sugar._templateData.${this.templateId}.`);

		// return the processed template
		return ret;
	}

	/**
	 * Destroy the template
	 */
	destroy() {
		// remove the template data into window
		delete window.sugar._templateData[this.templateId];
		// destroy watcher
		this._watcher.destroy();
		// destroy data watcher map
		this._dataWatcherMap.clear();
		// remove datas
		this.data = null;
	}
}
