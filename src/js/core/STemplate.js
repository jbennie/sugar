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
import sTemplateIntegrator from './sTemplateIntegrator'
// import sElementsManager from './sElementsManager';

if (! window.sugar) window.sugar = {};
if (! window.sugar._sTemplateData) window.sugar._sTemplateData = {};

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
	 * Get the parent template instance
	 * @param 		{HTMLElement} 		of 			The element to get the parent template from
  	 * @return 		{STemplate} 					The parent template instance found in the html
	 */
	static getParentTemplate(of) {
		const templateElm = __closest(of, '[s-template-id]');
		if ( ! templateElm) return null;
		return templateElm._sTemplate;
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
		 * A compile function to process the template
		 * This function will revieve the template and the data as parameters
		 * and need to return the compiled string version
		 * @setting
		 * @type 		{Function}
		 * @default 	null
		 */
		compile : null,

		/**
		 * Function called when a data is updated with his new and old value as parameter
		 * @setting
		 * @type 		{Function}
		 */
		onDataUpdate : null,

		/**
		 * Function that runs before the template will be compiled so that you can have a change to process it if needed
		 * before it will be passed to the compile step
		 * @param 		{String} 				template 				The template before compilation
		 * @return 		{String} 										The processed template to pass to compilation step
		 */
		beforeCompile : null,

		/**
		 * Function that runs after the template has been compiled so that you can have a chance to process it if needed
		 * before that the dom will be updated
		 * @param 		{String} 			 	compiledTemplate 		The compiled template
		 * @return 		{String|HTMLElement} 							The processed template
		 */
		afterCompile : null,

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
	constructor(templateString, data = {}, settings = {}, parentTemplate = null) {

		// save settings
		this.settings = {
			...this.settings,
			...settings
		};

		// set the parent template
		if (parentTemplate) this.setParentTemplate(parentTemplate);

		// generate a uniqid for the template
		this.templateId = this.settings.id || __uniqid();

		// save the template
		this.templateString = templateString;

		// save the template string version
		this.templateString = this.templateString.replace('>', ` s-template-id="${this.templateId}">`);

		// apply a node id to each nodes
		this.templateString = this._applyTemplateNodeIdAttribute(this.templateString);

		// set the data into instance
		this.data = data;

		// keep a copy of the original datas
		this._originalData = Object.assign({}, data);

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
						} else if (value.substr(0,1) === '<' && value.substr(-1) === '>') {
							// apply a node id to each nodes
							value = this._applyTemplateNodeIdAttribute(value);
						} else if (this.data[value]) {
							// the value exist in the current data
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
					return value;
				}
			});
			this._watcher.watch(this.data, name, (newVal, oldVal) => {
				// save the update in the stack
				this._updatedDataStack[name] = newVal;
				// check if has a function to listen to data update
				// do this OUTSIDE the setTimeout cause the onDataUpdate function
				// can update itself the templateData.
				// If it where in the setTImeout, the data will be updated after the render happend,
				// resulting in multiple useless renders
				this.settings.onDataUpdate && this.settings.onDataUpdate(name, newVal, oldVal);
				// make update only once
				// by waiting next loop
				clearTimeout(this._updateTimeout);
				this._updateTimeout = setTimeout(() => {
					// render the template again
					this._internalRender();
					// reset the updated data stack
					this._updatedDataStack = {};
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
		// if the node has the templateId has s-template-node attribute
		if (node.hasAttribute('s-template-node')
			&& node.getAttribute('s-template-node') === this.templateId
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
		return templateString.replace(/<[a-zA-Z0-9-]+(?!.*s-template-node)(?!.*s-template-id)(\s|>)/g, (itm, s) => {
			if (s === '>') {
				return `${itm.trim().replace('>','')} s-template-node="${this.templateId}">`;
			} else {
				return `${itm.trim()} s-template-node="${this.templateId}" `;
			}
		});
	}

	/**
	 * _getParentTemplate
	 * Return the parent template instance if exist
	 * @return 	{STemplate}
	 */
	_getParentTemplate() {
		if (this._parentTemplate) return this._parentTemplate;
		// console.log('dom', this.domNode);
		if (this.domNode && this.domNode.parentNode) {
			const parentTemplateNode = __closest(this.domNode, '[s-template-id]');
			// console.log('parent', this.domNode, parentTemplateNode);
			if (parentTemplateNode && parentTemplateNode._sTemplate) {
				this._parentTemplate = parentTemplateNode._sTemplate;
			}
		}
		return this._parentTemplate;
	}

	/**
	 * Set the dom node in which to render the template
	 * @param 		{HTMLElement} 		node 			The node that will represent the template
	 */
	setDomNode(node) {
		// prepare the node
		if ( ! node.hasAttribute('s-template-id')) {
			node.setAttribute('s-template-id', this.templateId);
			// node.setAttribute('s-template-node', this.templateId);
			// ignore the template node id
			sTemplateIntegrator.ignore(node, {
				's-template-node' : true,
				's-template-id' : true,
				's-template-dirty' : true
			});

			// save the template instance into the dom
			node._sTemplate = this;
		}

		// set the node
		this.domNode = node;
	}

	/**
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
			if (this.settings.shouldTemplateUpdate(Object.assign({}, this._updatedDataStack)) === false) return;
		}

		// copy the templateString before compilation
		let templateString = this.templateString;

		// process the template before compile it
		if (this.settings.beforeCompile) {
			templateString = this.settings.beforeCompile(templateString);
		}

		// compile the template
		let compiled = '';
		if (this.settings.compile) {
			compiled = this.settings.compile(templateString, this.data);
		} else {
			compiled = this._compile(templateString, this.data);
		}
		// process compiled template
		compiled = this._processOutput(compiled);

		// remove all the elements that need to be fully refreshed
		[].forEach.call(this.domNode.querySelectorAll(`[s-template-refresh]`), (elm) => {
			// console.log('refresh', elm)
			elm.parentNode.removeChild(elm);
		});

		// before render
		if (this.settings.beforeRender) {
			compiled = this.settings.beforeRender(compiled);
		}

		// patch dom
		this.domNode = this.patchDom(compiled);

		// update refs
		this._updateRefs();

		// listen for changes of datas in the DOM
		// through the s-template-model attribute
		this._listenDataChangesInDom();

		// set the template as dirty
		if ( ! this.domNode.hasAttribute('s-template-dirty')) {
			this.domNode.setAttribute('s-template-dirty', true);
		}

		// after render
		this.settings.afterRender && this.settings.afterRender(this.domNode);
	}

	/**
	 * Patch the dom with the passed template string
	 * @param 		{String} 		template 		The template to use to patch the dom
	 * @return 		{HTMLElement} 					The HTMLElement that represent the template in the dom
	 */
	patchDom(compiledTemplate) {

		// compiledTemplate.split("\n").forEach((line) => {
		// 	console.log(line);
		// });
		let dom;
		if (this.domNode.innerHTML.trim() === '') {
			dom = morphdom(this.domNode, compiledTemplate.trim());
		} else {
			// set the new html
			dom = morphdom(this.domNode, compiledTemplate.trim(), {
				childrenOnly : true,
				onBeforeElChildrenUpdated : (fromNode, toNode) => {

					// don't care about no html elements
					// such has comments, text, etc...
					if ( ! fromNode.hasAttribute) return true;

					// do not take care of childs of another template
					if ( fromNode.hasAttribute('s-template-id')
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
				onBeforeElUpdated : (fromNode, toNode) => {

					// don't care about no html elements
					// such has comments, text, etc...
					if ( ! fromNode.hasAttribute) return true;

					// apply integration on component
					this._applyIntegrationOnNode(fromNode);

					// get the integration from the node
					const integration = sTemplateIntegrator.getIntegrationFrom(fromNode);
					if (integration) {
						sTemplateIntegrator.setIntegrationTo(toNode, integration);
					}

					// handle the ingnore integration
					if (typeof(integration.ignore) === 'object') {
						for(let key in integration.ignore) {
							let value = integration.ignore[key];
							// if is class, handle multiple class to ignore
							if (key === 'class' && value !== true) {
								if (typeof(value) === 'string') {
									value = value.split(',').map((v) => { return v.trim(); });
								}
								// loop on each classes to ignore
								value.forEach((cls) => {
									if (fromNode.classList.contains(cls)) {
										toNode.classList.add(cls);
									} else {
										toNode.classList.remove(cls);
									}
								});
							} else {
								// set or remove the attribute
								// to keep in sync the from and to nodes
								if (fromNode.hasAttribute(key)) {
									toNode.setAttribute(key, fromNode.getAttribute(key));
								}
							}
						}
					}

					// do not update this element
					// cause it's not part of the initial template.
					// maybe it has been added by any component after
					// so it's not our business...
					if ( ! fromNode.hasAttribute('s-template-node')) return false;

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

					// is the node is template and that it's not us
					if (node.hasAttribute('s-template-id') && node !== this.domNode) return false;

					// we do not discard any elements that
					// have no s-template-node attribute
					// cause they maybe has been added by another plugins
					// and it is not our business...
					if ( ! node.hasAttribute('s-template-node')) return false;

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
		}

		// return the dom template
		return dom;
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
		[].forEach.call(this.domNode.querySelectorAll(`[id][s-template-node="${this.templateId}"],[name][s-template-node="${this.templateId}"]`), (elm) => {
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
		if ( ! node._sTemplateTypesIntegration) node._sTemplateTypesIntegration = {};
		const fns = sTemplateIntegrator.getComponentIntegrationFunctionsFrom(node);
		fns.forEach((fn) => {
			fn(node);
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
			this.data[model] = valueInData;
		} else if (typeof(value) === 'string' && value.substr(0,7) === 'object:') {
			const split = value.split(':');
			const idx = split[1];
			this.data[model] = this._modelValuesStack[idx];
		} else if (value !== undefined) {
			this.data[model] = value;
		} else if (this._originalData[model]) {
			// reset the data to his original value
			this.data[model] = this._originalData[model];
		} else {
			this.data[model] = null;
		}
	}

	/**
	 * Listen for changes of datas in dom
	 */
	_listenDataChangesInDom() {
		// find elements that have a data binded into it
		[].forEach.call(this.domNode.querySelectorAll(`[s-template-model][s-template-node="${this.templateId}"]`), (elm) => {

			// check if already binded
			const model = elm.getAttribute('s-template-model');

			// get update timeout from model element
			let updateModelTimeout = __autoCast(elm.getAttribute('s-template-model-timeout')) || 100;

			// listen for change on the model
			if ( ! elm._sTemplateBinded) {
				elm._sTemplateBinded = true;
				elm.addEventListener('change', (e) => {
					// update the model from the element
					clearTimeout(this._keyUpTimeout);
					this._updateDataModelFromElement(e.target);
				});
				elm.addEventListener('keyup', (e) => {
					clearTimeout(this._keyUpTimeout);
					this._keyUpTimeout = setTimeout(() => {
						// update the model from the element
						this._updateDataModelFromElement(e.target);
					}, updateModelTimeout);
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
				}
			}

			// set the initial value coming from the model
			elm.value = htmlVal;

			// dispatch a change event if the value has been updated from last render
			if (htmlVal === null || htmlVal === undefined || elm._sTemplateLastRenderValue !== elm.value) {
				__dispatchEvent(elm, 'change');
			}

			// save the value from render to render
			elm._sTemplateLastRenderValue = elm.value;
		});
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

		// after compile callback
		// to have a chance to process the template
		// from outside
		if (this.settings.afterCompile) {
			ret = this.settings.afterCompile(ret);
		}

		// apply template node id where there's not one for now
		ret = this._applyTemplateNodeIdAttribute(ret);

		// replace s-template-exp
		ret = ret.replace(/s-template-escaped=[\"\']([^"^']*)[\"\']/g, (toEscape, value) => {
			return value;
		});

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
