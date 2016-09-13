import mustache from 'mustache';
import __dispatchEvent from '../dom/dispatchEvent';
import SWatcher from './SWatcher';
import SBinder from './SBinder';
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

import sElementsManager from './sElementsManager';

export default class STemplate {

	/**
	 * Array of elements selectors to never discard on render
	 */
	static doNotDiscard = [
		'.s-range',
		'.s-radiobox',
		'[s-template-id]',
		'[s-template-component]'
	];

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

	/**
	 * Array of elements selectors to never update on render
	 */
	static doNotUpdate = [

	];

	/**
	 * Array of elements selectors to never update childs on render
	 */
	static doNotUpdateChildren = [
		'[s-template-id]',
		'[s-template-component]'
	];

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
	constructor(template, data = {}, settings = {}) {

		// save settings
		this.settings = {
			...this.settings,
			...settings
		};

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

		// set the data into instance
		this.data = data;

		// bound some methods into the data
		this.data.sTemplate = {
			value : (of) => {
				const idx = this.modelValuesStack.indexOf(of);
				if (idx !== -1) {
					return `object:${idx}`;
				} else {
					this.modelValuesStack.push(of);
					const newIdx = this.modelValuesStack.length - 1;
					return `object:${newIdx}`;
				}
				return of;
			}
		};

		// bound the class into the window to be apple to call it into
		// templates
		if ( ! window.sTemplateDataObjects) window.sTemplateDataObjects = {};
		window.sTemplateDataObjects[this.templateId] = this.data;

		// instanciate a watcher
		this.watcher = new SWatcher();
		this.binder = new SBinder();

		// watch each data
		for (let name in this.data) {
			const value = this.data[name];
			this.watcher.watch(this.data, name, (newVal, oldVal) => {
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
				// update if is the template itself
				// if (this.dom === fromNode) {
				// 	// emit an event to tell that the element children will be updated
				// 	__dispatchEvent(fromNode, 'sTemplate:beforeChildrenUpdate');
				// 	return true;
				// }
				// check the s-template-no-children-update attribute
				if (fromNode.hasAttribute
					&& (
						fromNode.hasAttribute('s-template-do-not-children-update')
						|| fromNode.hasAttribute('s-template-exclude')
					)
				) return false;
				// check the elements that we never want to update children
				// for(let i=0; i<STemplate.doNotUpdateChildren.length; i++) {
				// 	if (__matches(fromNode, STemplate.doNotUpdateChildren[i])) {
				// 		// do not discard the element
				// 		return false;
				// 	}
				// }
				// emit an event to tell that the element children will be updated
				// update the childs
				return true;
			},
			onBeforeElUpdated : (fromNode, toNode) => {
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
				// if (this.dom === fromNode) {
				// 	// emit an event to tell that the element will been updated
				// 	__dispatchEvent(fromNode, 'sTemplate:beforeUpdate');
				// 	return true;
				// }

				// check if an onBeforeElUpdated is present in the settings
				if (this.settings.onBeforeElUpdated) {
					const res = this.settings.onBeforeElUpdated(fromNode);
					if (res === true || res === false) {
						return res;
					}
				}

				// check the s-template-no-update attribute
				if (fromNode.hasAttribute
					&& (
						fromNode.hasAttribute('s-template-do-not-update')
						|| fromNode.hasAttribute('s-template-exclude')
					)
				) return false;
				// check the elements that we never want to update
				// for(let i=0; i<STemplate.doNotUpdate.length; i++) {
				// 	if (__matches(fromNode, STemplate.doNotUpdate[i])) {
				// 		// do not discard the element
				// 		return false;
				// 	}
				// }
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
				// check if the node match one of the element selector
				// to not discard
				if (node.hasAttribute
					&& (
						node.hasAttribute('s-template-do-not-discard')
						|| node.hasAttribute('s-template-exclude')
					)
				) return false;
				// discard the element
				return true;
			},
			onElDiscarded : (node) => {
				// check if an onBeforeElUpdated is present in the settings
				if (this.settings.onElDiscarded) {
					this.settings.onElDiscarded(node);
				}
				// emit an event to tell that the element has been discarded
				// __dispatchEvent(node, 'sTemplate:discarded');
			},
		});
		// grab the dom node again
		// this.dom = document.querySelector(`[s-template-id="${this.templateId}"]`);
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
				}
				// render the component
				if (component.render && render) {
					component.render();
				}
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

		// replace all the this. with the proper window.sTemplateDataObjects reference
		const thisDotReg = new RegExp('this\\.','g');
		ret = ret.replace(thisDotReg, `window.sTemplateDataObjects['${this.templateId}'].`);
		// element regexp
		const dollarElementReg = new RegExp('\\$element','g');
		ret = ret.replace(dollarElementReg, 'this');

		// return the processed template
		return ret;
	}

}
