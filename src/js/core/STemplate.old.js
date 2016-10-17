import __dispatchEvent from '../dom/dispatchEvent';
import SWatcher from '../classes/SWatcher';
import SElement from './SElement';
import uniqid from '../utils/uniqid';
import morphdom from 'morphdom';
import domReady from '../dom/domReady';
import _get from 'lodash/get';
import __autoCast from '../utils/string/autoCast';
import __matches from '../dom/matches';
import __uniqid from '../utils/uniqid';
import querySelectorLive from '../dom/querySelectorLive';
import __strToHtml from '../utils/string/strToHtml'
import __constructorName from '../utils/objects/constructorName'
import __closest from '../dom/closest'
import __whenAttribute from '../dom/whenAttribute'

import __propertyProxy from '../utils/objects/propertyProxy'

import sElementsManager from './sElementsManager';

if (! window.sugar) window.sugar = {};
window.sugar._sTemplateData = {};

// set SElement init dependencies
SElement.registerInitDependency((element) => {
	return new Promise((resolve, reject) => {
		const closestTemplate = __closest(element.elm, '[s-temp]');
		if (closestTemplate) {
			__whenAttribute(closestTemplate, 's-template-dirty').then((elm) => {
				resolve();
			});
		} else {
			resolve();
		}
	});
});

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
	 * Store all the component integration functions registered
	 * @private
	 * @type 	{Object}
	 */
	static _componentsIntegrationFnStack = {};

	/**
	 * Register a component integration function
	 * @param 	{Function} 		integrationFn 		The function used to set the integration attributes, etc into the component elements
	 */
	static registerComponentIntegration = function(componentClassName, fn) {
		STemplate._componentsIntegrationFnStack[componentClassName] = fn;
	}

	static getIntegrationFrom = function(elm) {
		let integration = __autoCast(elm.getAttribute('s-template-integration'));
		if ( ! integration) {
			integration = {
				ignore : {},
				// keep : {},
				refresh : false
			};
		}
		return integration;
	}

	static setIntegrationTo = function(elm, integration) {
		elm.setAttribute('s-template-integration', JSON.stringify(integration));
		return STemplate;
	}

	static ignore = function(elm, what = null) {
		// get integration settings
		let integration = STemplate.getIntegrationFrom(elm);

		// autocast what
		if (what) what = __autoCast(what);

		// we ignore the tag itself
		if (integration.ignore === true) {
			return STemplate;
		}

		// if has no what parameter
		// mean that we want to ignore the tag itself
		if (! what || what === true) {
			integration.ignore = true;
			return STemplate.setIntegrationTo(elm, integration);
		}
		// if we don't have any ignore for now
		// set the new object
		if (what && typeof(what) === 'object') {
			if (integration.ignore && typeof(integration.ignore) === 'object') {
				what = Object.assign(integration.ignore, what);
			}
			return STemplate.setIntegrationTo(elm, integration);
		}
		// return the STemplate class
		return STemplate;
	}

	// static keep = function(elm, what = null) {
	// 	// get integration settings
	// 	let integration = STemplate.getIntegrationFrom(elm);
	//
	// 	// autocast what
	// 	if (what) what = __autoCast(what);
	//
	// 	// we keep the tag itself
	// 	if (integration.keep === true) {
	// 		return STemplate;
	// 	}
	//
	// 	// if has no what parameter
	// 	// mean that we want to keep the tag itself
	// 	if (! what || what === true) {
	// 		integration.keep = true;
	// 		return STemplate.setIntegrationTo(elm, integration);
	// 	}
	// 	// if we don't have any keep for now
	// 	// set the new object
	// 	if (what && typeof(what) === 'object') {
	// 		if (integration.keep && typeof(integration.keep) === 'object') {
	// 			what = Object.assign(integration.keep, what);
	// 		}
	// 		return STemplate.setIntegrationTo(elm, integration);
	// 	}
	// 	// return the STemplate class
	// 	return STemplate;
	// }

	/**
	 * Set an attribute to keep
	 * @param 	{HTMLElement} 	elm 	The element on which to keep an attribute
	 * @param 	{String} 		attr 	The attribute name to keep
	 */
	static keepAttribute = function(elm, attr) {
		// if ( ! STemplate._keepQueue) STemplate._keepQueue = new Map();
		// let map = STemplate._keepQueue.get(elm);
		// if ( ! map) {
		// 	map = [attr];
		// } else {
		// 	if (map.indexOf(attr) === -1) {
		// 		map.push(attr);
		// 	}
		// }
		// STemplate._keepQueue.set(elm, map);
		//
		// clearTimeout(STemplate._keepQueueTimeout);
		// STemplate._keepQueueTimeout = setTimeout(() => {
		//
		// 	// loop on map
		// 	STemplate._keepQueue.forEach((value, elm) => {
		// 		// set the ignore attribute
		// 		const keep = elm.getAttribute('s-template-keep') || '';
		// 		const keeps = keep.split(',');
		// 		value.forEach((attribute) => {
		// 			if (keeps.indexOf(attribute) === -1) {
		// 				keeps.push(attribute);
		// 			}
		// 		});
		// 		console.log(keeps);
		// 		elm.setAttribute('s-template-keep', keeps.join(','));
		// 	});
		//
		//
		// });

		// const keep = elm.getAttribute('s-template-keep');
		// if (keep) {
		// 	const keeps = keep.split(',');
		// 	if (keeps.indexOf(attr) === -1) {
		// 		keeps.push(attr);
		// 	}
		// 	elm.setAttribute('s-template-keep', keeps.join(','));
		// } else {
		// 	elm.setAttribute('s-template-keep', attr);
		// }

		return STemplate;
	}

	/**
	 * Set an attribute to ignore
	 * @param 	{HTMLElement} 	elm 	The element on which to keep an attribute
	 * @param 	{String} 		attr 	The attribute name to keep
	 */
	static ignoreAttribute = function(elm, attr) {
		// const ignore = elm.getAttribute('s-template-ignore') || [];
		// const ignores = ignore.split(',');
		// if (ignores.indexOf(attr) === -1) {
		// 	ignores.push(attr);
		// }
		// elm.setAttribute('s-template-ignore', ignores.join(','));
		return STemplate;
	}

	/**
	 * Set a class to ignore
	 * @param 	{HTMLElement} 	elm 	The element on which to keep an attribute
	 * @param 	{String} 		attr 	The attribute name to keep
	 */
	static ignoreClass = function(elm, cls) {
		// const ignore = elm.getAttribute('s-template-ignore-class');
		// if (ignore) {
		// 	const ignores = ignore.split(',');
		// 	if (ignores.indexOf(cls) === -1) {
		// 		ignores.push(cls);
		// 	}
		// 	elm.setAttribute('s-template-ignore-class', ignores.join(','));
		// } else {
		// 	elm.setAttribute('s-template-ignore-class', cls);
		// }
		return STemplate;
	}

	/**
	 * Set an element to not discard
	 * @param 	{HTMLElement} 	elm 	The element to not discard
	 */
	static doNotDiscard(elm) {
		// elm.setAttribute('s-template-do-not-discard',true);
		return STemplate;
	}

	/**
	 * Set an element to exclude completely from the STemplate engine
	 * @param 	{HTMLElement} 	elm 	The element to exclude
	 */
	static exclude(elm) {
		// elm.setAttribute('s-template-exclude',true);
		return STemplate;
	}

	/**
	 * Set an element to refresh completely when the STemplate handle it
	 * @param 	{HTMLElement} 	elm 	The element to refresh
	 */
	static refresh(elm) {
		let integration = STemplate.getIntegrationFrom(elm);
		integration.refresh = true;
		return STemplate.setIntegrationTo(elm, integration);
	}

	/**
	 * Check if an element is handled by an STemplate instance
	 * @param 		{HTMLElement} 	elm 	The element to check
	 * @return 		{Boolean} 				True if the element is handled by a template, false otherwise
	 */
	static isTemplate(elm) {
		if ( ! elm.hasAttribute) return false;
		if (elm.hasAttribute('s-template-id')) return true;
		const components = sElementsManager.getComponents(elm);
		if ( ! components) return false;
		for(let key in components) {
			const component = components[key];
			if (component._isTemplateComponent) return true;
		}
		return false;
	}

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
	dom = null;

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
		 * A compile function to process the template
		 * This function will revieve the template and the data as parameters
		 * and need to return the compiled string version
		 * @setting
		 * @type 		{Function}
		 * @default 	null
		 */
		compile : null,

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
		onBeforeElDiscarded : null

	};

	/**
	 * Constructor
	 */
	constructor(template, data = {}, settings = {}, parentTemplate = null) {

		// save settings
		this.settings = {
			...this.settings,
			...settings
		};

		// set the parent template
		if (parentTemplate) this.setParentTemplate(parentTemplate);

		// generate a uniqid for the template
		this.templateId = uniqid();

		// wrap the template into a div
		// with the templateId
		this.template = template;

		// if template is a string
		if (typeof(this.template) === 'string') {
			// set the s-template-id attribute in first template node
			// this.template = this.template.replace('>',` s-template-id="${this.templateId}">`);
			this.template = __strToHtml(this.template);

			// this.templateString = this.template;
			this.dom = document.createElement('div');
		} else {
			this.dom = this.template;
		}

		// set a template id to the element
		this.template.setAttribute('s-template-id', this.templateId);

		[].forEach.call(this.template.querySelectorAll('*'), (elm) => {
			if ( ! elm.hasAttribute('s-template-node-id')) {
				elm.setAttribute('s-template-node-id', __uniqid());
			}
		});

		// apply the integration in components
		// this._applyIntegrationOnNode(this.template);
		// [].forEach.call(this.template.querySelectorAll('[s-component]'), (componentNode) => {
		// 	// if the model is into another template,
		// 	// this is not our business
		// 	const closestTemplate = __closest(componentNode, '[s-template-id]');
		// 	if (closestTemplate && closestTemplate.getAttribute('s-template-id') !== this.templateId) {
		// 		return;
		// 	}
		// 	this._applyIntegrationOnNode(componentNode);
		// });

		// make a clone of the template that will be the trusted base
		// to render
		// const clone = this.template.cloneNode(true);
		const clone = __strToHtml(this.template.outerHTML);

		// OK
		// clone the template to remove all the templates contents
		// cause each template has to care only about his scope and not
		// about the scope of nested onces...
		// [].forEach.call(clone.querySelectorAll('[s-template-component]'), (nestedTemplate) => {
		// 	nestedTemplate.innerHTML = '';
		// });

		// remove all the element that has not to be touched
		// [].forEach.call(clone.querySelectorAll(`[s-template-integration*='"ignore":true']`), (elm) => {
		// 	elm.parentNode.removeChild(elm);
		// });

		// handle the s-template-ignore attribute
		// [].forEach.call(clone.querySelectorAll(`[s-template-integration*='"ignore":{']`), (elm) => {
		// 	const integration = STemplate.getIntegrationFrom(elm);
		// 	for(let key in integration.ignore) {
		// 		const value = integration.ignore[key];
		// 		if (key === 'class' && value !== true) continue;
		// 		elm.removeAttribute(key);
		// 	}
		// });

		// OK
		// replace all the s-element with their original versions
		// [].forEach.call(clone.querySelectorAll('[s-element]'), (elm) => {
		// 	// console.log('element', elm);
		// 	const elementId = elm.getAttribute('s-element');
		// 	const originalElement = sElementsManager.getOriginalElement(elementId);
		// 	if (originalElement) {
		// 		elm = morphdom(elm, originalElement, {
		// 			onBeforeElUpdated : (fromNode, toNode) => {
		// 				['s-template-integration']
		// 				.forEach((attr) => {
		// 					if (fromNode.hasAttribute(attr)
		// 				 		&& ! toNode.hasAttribute(attr)
		// 					) {
		// 						toNode.setAttribute(attr, fromNode.getAttribute(attr));
		// 					}
		// 				});
		// 				return true;
		// 			},
		// 			onBeforeElChildrenUpdated : (node) => {
		// 				// do not update children at all
		// 				return false;
		// 			}
		// 		});
		// 	}
		// });

		// console.warn(clone.outerHTML);
		this.templateString = clone.outerHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/\=""/g,'').replace(/&nbsp;/g," ").replace(/&quot;/g,"'");

		// apply a node id on each nodes
		// this.templateString = this.templateString.replace(/<[a-zA-Z]+\s/g, (item) => {
		// 	return `${item} s-template-node-id="${__uniqid()}" `;
		// });
		// console.log('tem', this.templateString);

		// save the template instance into the dom
		this.dom._sTemplate = this;

		// set the data into instance
		this.data = data;

		// bound some methods into the data
		this.data.sTemplate = {
			value : (of) => {
				const idx = this._modelValuesStack.indexOf(of);
				if (idx !== -1) {
					return `object:${idx}`;
				} else {
					this._modelValuesStack.push(of);
					const newIdx = this._modelValuesStack.length - 1;
					return `object:${newIdx}`;
				}
				return of;
			}
		};

		// listen for nested templates
		// this.dom.addEventListener('s-template:template-node', (e) => {
		//
		// 	// do nothing it we catch the event
		// 	// from outself
		// 	if (this.templateId === e.detail.templateId) return;
		//
		// 	// stop propagation cause we are the template
		// 	// that have the target nested
		// 	// and the parent template does not have to handle
		// 	// this
		// 	e.stopPropagation();
		//
		// 	// if don't have any template string
		// 	// stop here
		// 	// this is just to avoid issues
		// 	if ( ! this.templateString) return;
		//
		// 	// transform templateString to html
		// 	const templateHtml = __strToHtml(this.templateString);
		//
		// 	// try to find the node-id to remove from the
		// 	// templateString
		// 	const templateToRemove = templateHtml.querySelector(`[s-template-node-id="${e.detail.templateNodeId}"]`);
		//
		// 	// if we don't found the nested template into the templateString
		// 	// do nothing
		// 	if ( ! templateToRemove) return;
		//
		// 	// remove the nested template from the templateString
		// 	templateToRemove.innerHTML = '';
		//
		// 	// set the new templateString
		// 	this.templateString = templateHtml.outerHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/\=""/g,'').replace(/&nbsp;/g," ").replace(/&quot;/g,"'");
		// });
		//
		// // listen for elements
		// this.dom.addEventListener('s-element:added', (e) => {
		//
		// 	// if the element has a nodeid already,
		// 	// mean that the the node come from a templateString
		// 	// so that we don't need to reset it with his originalElementString
		// 	if (e.target.hasAttribute('s-template-node-id')) return;
		//
		// 	// if the element does not belong to me
		// 	// stop here
		// 	if ( ! this.isNodeBelongToMe(e.target)) return;
		//
		// 	// get the template-node-id
		// 	const nodeId = e.target.getAttribute('s-template-node-id');
		// 	if ( ! nodeId) return;
		//
		// 	// get the original node
		// 	const originalElementString = sElementsManager.getOriginalElementString(e.target);
		// 	if ( ! originalElementString) return;
		//
		// 	// get the element id
		// 	const elementId = e.target.getAttribute('s-element');
		//
		// 	// replace the element with his originalElementString
		// 	this.templateString = this.templateString.replace(new RegExp(`<[a-zA-Z]+\s.*s-element="${elementId}".*>`,'g'), originalElementString);
		//
		// 	// this.templateString = html.outerHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/\=""/g,'').replace(/&nbsp;/g," ").replace(/&quot;/g,"'");
		// 	console.log('new templateString from element', this.templateString);
		// });
		//
		// // dispatch an event to tell parent nodes that
		// // we are a template and that they don't need to handle our content
		// querySelectorLive(`[s-template-id="${this.templateId}"]`).once().subscribe((_template) => {
		// 	// console.log('ew', _template);
		// 	__dispatchEvent(_template, 's-template:template-node', {
		// 		templateId : this.templateId,
		// 		templateNodeId : _template.getAttribute('s-template-node-id')
		// 	});
		// });

		// bound the class into the window to be apple to call it into
		// templates
		window.sugar._sTemplateData[this.templateId] = this.data;

		// instanciate a watcher
		this._watcher = new SWatcher();

		// watch each data
		for (let name in this.data) {
			__propertyProxy(this.data, name, {
				set : (value) => {
					if (typeof(value) === 'string') {
						if (value.match(/^this\\./g)) {
							// grab the path
							const path = value.replace('this.','');
							// get the value from the data
							value = _get(this.data, path);
						} else if (value.match(/^window\\./g)) {
							const path = value.replace('window.','');
							value = _get(window, path);
						} else if (value.match(/^parent\\./g)) {
							// get parent template
							const parentTemplate = this._getParentTemplate();
							if (parentTemplate && parentTemplate.data) {
								const _v = _get(parentTemplate.data, value);
								if (_v) value = _v;
							} else {
								throw `You try to access the "${value}" value but your template is not embeded in another one`;
							}
						} else {
							// check if the value exist in the current data
							if (this.data[value]) {
								value = _get(this.data, value);
							} else {
								// get parent template
								const parentTemplate = this._getParentTemplate();
								if (parentTemplate && parentTemplate.data) {
									const _v = _get(parentTemplate.data, value);
									if (_v) value = _v;
								}
							}
						}
					}
					return value;
				}
			});
			this._watcher.watch(this.data, name, (newVal, oldVal) => {
				// make update only once
				// by waiting next loop
				clearTimeout(this._updateTimeout);
				this._updateTimeout = setTimeout(() => {
					// render the template again
					this._internalRender();
				});
			});
		}
	}

	/**
	 * Check if the passed node is part of this template
	 * @param 			{HTMLElement} 			node 			The node to test
	 * @return 			{Boolean} 								True if part of this template, false if not
 	 */
 	isNodeBelongToMe(node) {
		const closestTemplate = __closest(node, '[s-template-id]');
		if (closestTemplate && closestTemplate.getAttribute('s-template-id') !== this.templateId) {
			return false;
		}
		return true;
	}


	/**
	 * _getParentTemplate
	 * Return the parent template instance if exist
	 * @return 	{STemplate}
	 */
	_getParentTemplate() {
		if (this._parentTemplate) return this._parentTemplate;
		// console.log('dom', this.dom);
		if (this.dom && this.dom.parentNode) {
			const parentTemplateNode = __closest(this.dom, '[s-template-id]');
			// console.log('parent', this.dom, parentTemplateNode);
			if (parentTemplateNode && parentTemplateNode._sTemplate) {
				this._parentTemplate = parentTemplateNode._sTemplate;
			}
		}
		return this._parentTemplate;
	}

	/**
	 * setParentTemplate
	 * Set the parent STemplate instance.
	 * This is needed if you want your template to talk together through attributes
	 * @param 	{STemplate} 	template 	The parent template instance
	 */
	setParentTemplate(template) {
		if ( ! template instanceof STemplate) {
			throw `the template passed to setParentTemplate is not a STemplate instance`;
		}
		this._parentTemplate = template;
	}

	/**
	 * Compile the template
	 * @protected
	 * @param 		{String} 	template 	The template to compile
	 * @param 		{Object} 	data 		The data used to compile the template
	 * @return		{String} 				The compiled template string
	 */
	_compile(template, data) {
		return template;
	}

	/**
	 * Render the template
	 * Usually, you don't need to call this by yourself. The template
	 * will be rendered again each time that a data is updated
	 */
	render() {
		this._internalRender();
	}

	/**
	 * Render the template
	 */
	_internalRender() {

		// compile the template
		let compiled = '';
		if (this.settings.compile) {
			compiled = this.settings.compile(this.templateString, this.data);
		} else {
			compiled = this._compile(this.templateString, this.data);
		}
		// process compiled template
		compiled = this._processOutput(compiled);

		// remove all the elements that need to be fully refreshed
		// [].forEach.call(this.dom.querySelectorAll(`[s-template-integration*='"refresh":true"']`), (elm) => {
		// 	// console.log('refresh', elm)
		// 	elm.parentNode.removeChild(elm);
		// });

		// set the new html
		this.dom = morphdom(this.dom, compiled.trim(), {
			onBeforeElChildrenUpdated : (fromNode, toNode) => {
				// don't care about no html elements
				// such has comments, text, etc...
				if ( ! fromNode.hasAttribute) return false;

				// update if is the template itself
				if (this.dom === fromNode) {
					return true;
				}

				// get the integration settings
				// const integration = STemplate.getIntegrationFrom(fromNode);

				// check the s-template-no-children-update attribute
				// check if we need to ignore the element itself
				// if (integration.ignore === true) return false;

				if ( ! toNode.hasAttribute('s-template-node-id')) return false;

				// if the node if a template or a template component
				// we do not want to update his children
				// cause it's not our business
				if (STemplate.isTemplate(fromNode)) {
					return false;
				}

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
			onBeforeElUpdated : (fromNode, toNode) => {
				// return true;
				// don't care about no html elements
				// such has comments, text, etc...
				if ( ! fromNode.hasAttribute) return false;

				if ( ! toNode.hasAttribute('s-template-node-id')) return false;

				// if (fromNode.hasAttribute('s-template-node-id') && ! toNode.hasAttribute('s-template-node-id')) {
				// 	toNode.setAttribute('s-template-node-id', )
				// }

				// apply integration on component
				// this._applyIntegrationOnNode(fromNode);



				// // if the node is a template-component once
				// // and that it is not the root one
				// // we remove it from the templateString
				// // because it has to be handled by another
				// // template instance
				// if (fromNode.hasAttribute('s-template-id')
				// 	&& fromNode !== this.dom
				// ) {
				// 	// get the template-id
				// 	const templateId = fromNode.getAttribute('s-template-id');
				// 	console.log('remove', templateId);
				// }

				// handle integration attributes
				// ['s-template-integration']
				// .forEach((attr) => {
				// 	if (fromNode.hasAttribute(attr)
				//  		&& ! toNode.hasAttribute(attr)
				// 	) {
				// 		toNode.setAttribute(attr, fromNode.getAttribute(attr));
				// 	}
				// });

				// get the integration from the node
				// const integration = STemplate.getIntegrationFrom(fromNode);
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
				// 			// this is an attribute to ignore
				// 			if (fromNode.hasAttribute(key)
				// 				&& ! toNode.hasAttribute(key)
				// 			) {
				// 				toNode.setAttribute(key, fromNode.getAttribute(key));
				// 			}
				// 		}
				// 	}
				// }

				// update if is the template itself
				if (this.dom === fromNode) {
					return true;
				}

				// if we need to ignore this node completly
				// if (integration.ignore === true) return false;

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
				// check if an onBeforeElUpdated is present in the settings
				if (this.settings.onElUpdated) {
					this.settings.onElUpdated(node);
				}
			},
			onBeforeNodeDiscarded : (node) => {
				// don't care about no html elements
				// such has comments, text, etc...
				if ( ! node.hasAttribute) return true;

				if ( ! node.hasAttribute('s-template-node-id')) return false;

				// get the integration
				// const integration = STemplate.getIntegrationFrom(node);

				// check if the node match one of the element selector
				// to not discard
				// if we need to ignore this node completly
				// if (integration.ignore === true) return false;

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
			},
		});

		// update refs
		this._updateRefs();

		// listen for changes of datas in the DOM
		// through the s-template-model attribute
		this._listenDataChangesInDom();

		// set the template as dirty
		if ( ! this.dom.hasAttribute('s-template-dirty')) {
			this.dom.setAttribute('s-template-dirty', true);
		}
	}

	/**
	 * Update references
	 */
	_updateRefs() {
		// reset refs
		this.refs = {};
		// save the element itself
		this.refs.elm = this.dom;
		// search for name and id's
		[].forEach.call(this.dom.querySelectorAll('[id],[name]'), (elm) => {
			// if the model is into another template,
			// this is not our business
			const closestTemplate = __closest(elm, '[s-template-id]');
			if (closestTemplate && closestTemplate.getAttribute('s-template-id') !== this.templateId) {
				return;
			}
			// get the id or name
			const id = elm.id || elm.getAttribute('name');
			// save the reference
			this.refs[id] = elm;
		});
	}

	/**
	 * Apply the STemplate integration on a node that has
	 * some components on it
	 * @param 		{HTMLElement} 	 node 		The node on which to apply the integration
	 */
	_applyIntegrationOnNode(node) {

		// check if already applied integration on this node
		// if (node._sTemplateIntegrationDone) return;
		// node._sTemplateIntegrationDone = true;

		// check if is a component to render it
		const components = sElementsManager.getComponents(node);
		if (components) {
			// loop on each components to render themself
			for (let name in components) {
				const component = components[name];

				// if already integrated
				// do not launch the integration function
				if (component._sTemplateIntegrated !== true) {
					// const constructorName = __constructorName(component);
					// const integrationFn = STemplate._componentsIntegrationFnStack[constructorName];
					// if (integrationFn) {
					// 	integrationFn(component);
					// 	component._sTemplateIntegrated = true;
					// }
					// loop on each prototypes to go up inheritence tree
					let proto = Object.getPrototypeOf(component);
					while(proto) {
						const constructorName = __constructorName(proto);
						if ( ! component._sTemplateIntegrated) component._sTemplateIntegrated = {};
						if ( ! component._sTemplateIntegrated[constructorName]) {
							component._sTemplateIntegrated[constructorName] = true;
							const integrationFn = STemplate._componentsIntegrationFnStack[constructorName];
							if (integrationFn) {
								integrationFn(component);
							}
						}
						proto = Object.getPrototypeOf(proto);
					}
				}
			}
		}
	}

	/**
	 * Update the data model from an s-template-model element
	 * @param 	{HTMLElement} 	element 	The s-template-model element
	 */
	_updateDataModelFromElement(element) {

		// get the model from the element
		const model = element.getAttribute('s-template-model');

		// try to get into data
		const val = _get(this.data, element.value);

		// if has a value into data
		// take that as value to set into model
		if (val) {
			this.data[model] = val;
		} else if (element.value.substr(0,7) === 'object:') {
			const split = element.value.split(':');
			const idx = split[1];
			this.data[model] = this._modelValuesStack[idx];
		} else {
			this.data[model] = __autoCast(element.value);
		}
	}

	/**
	 * Listen for changes of datas in dom
	 */
	_listenDataChangesInDom() {
		// find elements that have a data binded into it
		[].forEach.call(this.dom.querySelectorAll('[s-template-model]'), (elm) => {

			// if the model is into another template,
			// this is not our business
			if ( ! this.isNodeBelongToMe(elm)) return;

			// check if already binded
			const model = elm.getAttribute('s-template-model');

			if ( ! elm._sTemplateBinded) {
				elm._sTemplateBinded = true;
				elm.addEventListener('change', (e) => {
					// update the model from the element
					this._updateDataModelFromElement(e.target);
				});
				elm.addEventListener('keyup', (e) => {
					clearTimeout(this._keyUpTimeout);
					this._keyUpTimeout = setTimeout(() => {
						// update the model from the element
						this._updateDataModelFromElement(e.target);
					}, 1000);
				});
			}

			let htmlVal = this.data[model];

			// if the model value is not something like a string,
			// a number, etc, we build a stack to map actual model value
			// with a string identifier
			if (this.data[model]
				&& (typeof(this.data[model]) === 'object'
					|| this.data[model] instanceof Array
				)
			) {
				// try to find the model into the stack
				const idx = this._modelValuesStack.indexOf(this.data[model]);
				// if we already have the value into the stack
				if (idx !== -1) {
					htmlVal = `object:${idx}`;
				} else {
					// we don't have the value into the stack
					// add it and set the new htmlVal
					this._modelValuesStack.push(this.data[model]);
					const newIdx = this._modelValuesStack.length - 1;
					htmlVal = `object:${newIdx}`;
					// console.log('htmlVal', htmlVal);
					// htmlVal = 'coco';
				}
			}

			// set the initial value coming from the model
			elm.value = htmlVal;
			if (htmlVal === null || htmlVal === undefined) {
				elm.removeAttribute('value');
			} else {
				elm.setAttribute('value', htmlVal);
			}
		});
	}

	/**
	 * Append the template to an HTMLElement
	 * @param 		{HTMLElement} 	to 		The element in which to append the template
	 */
	appendTo(element) {
		element.appendChild(this.dom);
		// render
		this._internalRender();
	}

	/**
	 * Remove the template from the dom
	 */
	remove() {
		this.dom.parentNode.removeChild(this.dom);
	}

	/**
	 * Process output to replace some things like the this., parent., etc...
	 * @param 		{String} 		renderedTemplate 		The rendered template returned by the settings.compile function
	 * @return 		{String} 								The processed template string
	 */
	_processOutput(renderedTemplate) {
		let ret = renderedTemplate;

		// after compile callback
		// to have a chance to process the template
		// from outside
		if (this.settings.afterCompile) {
			ret = this.settings.afterCompile(ret);
		}

		// replace the parent.
		// if we have a parent template
		if (this._parentTemplate) {
			// replace all the this. with the proper window.sTemplateDataObjects reference
			const parentDotReg = new RegExp('parent\\.','g');
			ret = ret.replace(parentDotReg, `window.sugar._sTemplateData.${this._parentTemplate.templateId}.`);
		}

		// replace all the this. with the proper window.sTemplateDataObjects reference
		const thisDotReg = new RegExp('this\\.','g');
		ret = ret.replace(thisDotReg, `window.sugar._sTemplateData.${this.templateId}.`);

		// element regexp
		const dollarElementReg = new RegExp('\\$element','g');
		ret = ret.replace(dollarElementReg, 'this');

		// return the processed template
		return ret;
	}

	/**
	 * Destroy the template
	 */
	destroy() {
		// remove the template data into window
		delete window.sugar._sTemplateData[this.templateId];
		// destroy watcher
		this._watcher.destroy();
		// delete reference to parentTemplate
		this._parentTemplate = null;
		// remove datas
		this.data = null;
	}
}
