import mustache from 'mustache';
import __dispatchEvent from '../dom/dispatchEvent';
import SWatcher from './SWatcher';
import uniqid from '../tools/uniqid';
import morphdom from 'morphdom';
import domReady from '../dom/domReady';
import _get from 'lodash/get';
import __autoCast from '../string/autoCast';
import __matches from '../dom/matches';
import __uniqid from '../tools/uniqid';
import querySelectorLive from '../dom/querySelectorLive';
import __outerHTML from '../dom/outerHTML';
import __strToHtml from '../string/strToHtml'
import __constructorName from '../tools/constructorName'
import __closest from '../dom/closest'

import __propertyProxy from '../core/propertyProxy'

import sElementsManager from './sElementsManager';

if (! window.sugar) window.sugar = {};
window.sugar._sTemplateData = {};

export default class STemplate {

	static componentsIntegrationFnStack = {};

	/**
	 * registerComponentIntegration
	 * Register a component integration function
	 * @param 	{Function} 		integrationFn 	The function used to set the integration attributes, etc into the component elements
	 * @return 	{void}
	 */
	static registerComponentIntegration = function(componentClassName, fn) {
		STemplate.componentsIntegrationFnStack[componentClassName] = fn;
	}

	/**
	 * keepAttribute
	 * Set an attribute to keep
	 * @param 	{HTMLElement} 	elm 	The element on which to keep an attribute
	 * @param 	{String} 		attr 	The attribute name to keep
	 */
	static keepAttribute = function(elm, attr) {
		const keep = elm.getAttribute('s-template-keep');
		if (keep) {
			const keeps = keep.split(',');
			if (keeps.indexOf(attr) === -1) {
				keeps.push(attr);
			}
			elm.setAttribute('s-template-keep', keeps.join(','));
		} else {
			elm.setAttribute('s-template-keep', attr);
		}
		return STemplate;
	}

	/**
	 * doNotDiscard
	 * Set an element to not discard
	 * @param 	{HTMLElement} 	elm 	The element to not discard
	 */
	static doNotDiscard(elm) {
		elm.setAttribute('s-template-do-not-discard',true);
		return STemplate;
	}

	/**
	 * exclude
	 * Set an element to exclude completely from the STemplate engine
	 * @param 	{HTMLElement} 	elm 	The element to exclude
	 */
	static exclude(elm) {
		elm.setAttribute('s-template-exclude',true);
		return STemplate;
	}

	/**
	 * refresh
	 * Set an element to refresh completely when the STemplate handle it
	 * @param 	{HTMLElement} 	elm 	The element to refresh
	 */
	static refresh(elm) {
		elm.setAttribute('s-template-refresh',true);
		return STemplate;
	}

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
	 * templateId
	 * Store a uniqid that will be used as identifier for
	 * this particular class in the window.sTemplateClasses
	 */
	templateId = null;

	/**
	 * refs
	 * Store the reference to html elements that have an id or a name
	 * @type 	{Object}
	 */
	refs = {};

	/**
	 * dom
	 * Store the reference to the created dom structure
	 */
	dom = null;

	/**
	 * data
	 * Store the data object used to render the template
	 * @type 	{Object}
	 */
	data = {};

	/**
	 * modelValuesStack
	 * Store the values of the model when it's an object or an array
	 * This is used to set in html a string value like 'object:10' that will
	 * match the current value in this stack
	 * @type 	{Array}
	 */
	modelValuesStack = [];

	/**
	 * updateTimeout
	 * Store the timeout used to update the template only once when multiple changes have been made
	 * @type 	{Number}
	 */
	updateTimeout = null;

	/**
	 * settings
	 * Store the settings
	 * @type 	{Object}
	 */
	settings = {

		/**
		 * render
		 * A compile function to process the template
		 * @type 	{Function}
		 */
		compile : null,

		/**
		 * onBeforeElUpdated
		 */
		onBeforeElUpdated : null

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
			this.template = this.template.replace('>',` s-template-id="${this.templateId}">`);
			this.templateString = this.template;
			this.dom = document.createElement('div');
		}
		// if the template is a node
		else if (this.template.nodeName) {
			this.template.setAttribute('s-template-id', this.templateId);

			// apply the integration in components
			// without rendering it
			this._applyIntegrationOnNode(this.template, false);
			[].forEach.call(this.template.querySelectorAll('[s-component]'), (componentNode) => {
				this._applyIntegrationOnNode(componentNode, false);
			});

			// window.sugar.debug.start();
			// const clone = this.template.cloneNode(true);
			const clone = __strToHtml(this.template.outerHTML);

			// clone the template to remove all the templates contents
			// cause each template has to care only about his scope and not
			// about the scope of nested onces...
			[].forEach.call(clone.querySelectorAll('[s-template-component]'), (nestedTemplate) => {
				nestedTemplate.innerHTML = '';
			});
			// remove all the element that has not to be touched
			[].forEach.call(clone.querySelectorAll('[s-template-exclude]'), (elm) => {
				elm.parentNode.removeChild(elm);
			});

			// replace all the s-element with their original versions
			[].forEach.call(clone.querySelectorAll('[s-element]'), (elm) => {
				const elementId = elm.getAttribute('s-element');
				const originalElement = sElementsManager.getOriginalElement(elementId);
				if (originalElement) {
					elm = morphdom(elm, originalElement, {
						onBeforeElChildrenUpdated : (node) => {
							// do not update children at all
							return false;
						}
					});
				}
			});
			this.templateString = clone.outerHTML.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
			this.dom = this.template;
		}

		// save the template instance into the dom
		this.dom._sTemplate = this;

		// set the data into instance
		this.data = data;

		// bound some methods into the data
		this.data.sTemplate = {
			value : (of) => {
				const idx = this.modelValuesStack.indexOf(of);
				if (idx !== -1) {
					return `object:${idx}`;
				} else {
					console.log('add', of);
					this.modelValuesStack.push(of);
					const newIdx = this.modelValuesStack.length - 1;
					console.log(`object:${newIdx}`);
					return `object:${newIdx}`;
				}
				// return of;
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
				clearTimeout(this.updateTimeout);
				this.updateTimeout = setTimeout(() => {
					// render the template again
					this._internalRender();
				});
			});
		}
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
	 * Set the parent template instance
	 * @param 	{STemplate} 	template 	The parent template instance
	 * @return 	{void}
	 */
	setParentTemplate(template) {
		if ( ! template instanceof STemplate) {
			throw `the template passed to setParentTemplate is not a STemplate instance`;
		}
		this._parentTemplate = template;
	}

	/**
	 * Compile the template
	 */
	compile(template, data) {
		return template;
	}

	/**
	 * Render the template
	 */
	render() {
		this._internalRender();
	}

	/**
	 * Render the template
	 */
	_internalRender() {

		console.log('internal render', Object.assign({}, this.data));

		// compile the template
		let compiled = '';
		if (this.settings.compile) {
			compiled = this.settings.compile(this.templateString, this.data);
		} else {
			compiled = this.compile(this.templateString, this.data);
		}
		// process compiled template
		compiled = this.processOutput(compiled);

		// remove all the elements that need to be fully refreshed
		[].forEach.call(this.dom.querySelectorAll('[s-template-refresh]'), (elm) => {
			elm.parentNode.removeChild(elm);
		});

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

				// check the s-template-no-children-update attribute
				if (fromNode.hasAttribute('s-template-do-not-children-update')
					|| fromNode.hasAttribute('s-template-exclude')
				) return false;

				// if the node if a template or a template component
				// we do not want to update his children
				// cause it's not our business
				if (STemplate.isTemplate(fromNode)) {
					return false;
				}

				// update the children
				return true;
			},
			onBeforeElUpdated : (fromNode, toNode) => {
				// don't care about no html elements
				// such has comments, text, etc...
				if ( ! fromNode.hasAttribute) return false;

				// apply integration on component
				this._applyIntegrationOnNode(fromNode, true);

				// handle integration attributes
				['s-template-keep',
				 's-template-exclude',
				 's-template-refresh',
				 's-template-do-not-update',
				 's-template-do-not-discard',
				 's-template-do-not-children-update']
				.forEach((attr) => {
					if (fromNode.hasAttribute(attr)
				 		&& ! toNode.hasAttribute(attr)
					) {
						toNode.setAttribute(attr, fromNode.getAttribute(attr));
					}
				});

				// handle the sTemplateKeepAttr attribute
				if (fromNode.hasAttribute('s-template-keep')) {
					let keep = fromNode.getAttribute('s-template-keep');
					keep = keep.replace(/\s/g,'').split(',');
					// loop on each attribute to keep
					keep.forEach((key) => {
						toNode.setAttribute(key, fromNode.getAttribute(key));
					});
				}

				// handle value
				if (fromNode.value) {
					toNode.value = fromNode.value;
					toNode.setAttribute('value', fromNode.value);
				}

				// update if is the template itself
				if (this.dom === fromNode) {
					return true;
				}

				// check the s-template-no-update attribute
				if (fromNode.hasAttribute('s-template-do-not-update')
					|| fromNode.hasAttribute('s-template-exclude')
				) return false;

				// check if an onBeforeElUpdated is present in the settings
				if (this.settings.onBeforeElUpdated) {
					const res = this.settings.onBeforeElUpdated(fromNode);
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

				// check if the node match one of the element selector
				// to not discard
				if (node.hasAttribute('s-template-do-not-discard')
					|| node.hasAttribute('s-template-exclude')
				) return false;

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
		this.updateRefs();

		// listen for changes of datas in the DOM
		// through the s-template-model attribute
		this.listenDataChangesInDom();
	}

	/**
	 * Update references
	 */
	updateRefs() {
		// reset refs
		this.refs = {};
		// save the element itself
		this.refs.elm = this.dom;
		// search for name and id's
		[].forEach.call(this.dom.querySelectorAll('[id],[name]'), (elm) => {
			// get the id or name
			const id = elm.id || elm.getAttribute('name');
			// save the reference
			this.refs[id] = elm;
		});
	}

	/**
	 * _applyIntegrationOnNode
	 * Apply the STemplate integration on a node that has
	 * some components on it
	 */
	_applyIntegrationOnNode(node, render = false) {
		// check if is a component to render it
		const components = sElementsManager.getComponents(node);
		if (components) {
			// loop on each components to render themself
			for (let name in components) {
				const component = components[name];

				// if already integrated
				// do not launch the integration function
				if (component._sTemplateIntegrated !== true) {
					const constructorName = __constructorName(component);
					const integrationFn = STemplate.componentsIntegrationFnStack[constructorName];
					if (integrationFn) {
						integrationFn(component);
						component._sTemplateIntegrated = true;
					}
					// loop on each prototypes to go up inheritence tree
					let proto = Object.getPrototypeOf(component);
					while(proto) {
						const constructorName = __constructorName(proto);
						const integrationFn = STemplate.componentsIntegrationFnStack[constructorName];
						if (integrationFn) {
							integrationFn(component);
						}
						proto = Object.getPrototypeOf(proto);
					}
				}
				// render the component
				// if (component.render && render) {
				// 	component.render();
				// }
			}
		}
	}

	/**
	 * _updateDataModelFromElement
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
			this.data[model] = this.modelValuesStack[idx];
		} else {
			this.data[model] = __autoCast(element.value);
		}
	}

	/**
	 * Listen for changes of datas in dom
	 */
	listenDataChangesInDom() {
		// find elements that have a data binded into it
		[].forEach.call(this.dom.querySelectorAll('[s-template-model]'), (elm) => {
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
				const idx = this.modelValuesStack.indexOf(this.data[model]);
				// if we already have the value into the stack
				if (idx !== -1) {
					htmlVal = `object:${idx}`;
				} else {
					// we don't have the value into the stack
					// add it and set the new htmlVal
					this.modelValuesStack.push(this.data[model]);
					const newIdx = this.modelValuesStack.length - 1;
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
	 * Append to
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
	 * Process output
	 */
	processOutput(renderedTemplate) {
		let ret = renderedTemplate;

		if (this.settings.afterCompile) {
			ret = this.settings.afterCompile(ret);
		}

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
	 * destroy
	 * Destroy the template
	 * @return 	{void}
	 */
	destroy() {
		// remove the template data into window
		delete window.sugar._sTemplateData[thi.templateId];
		// destroy watcher
		this._watcher.destroy();
		// delete reference to parentTemplate
		this._parentTemplate = null;
		// remove datas
		this.data = null;
	}

}
