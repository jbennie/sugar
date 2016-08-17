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

	/**
	 * Array of elements selectors to never update on render
	 */
	static doNotUpdate = [
		'[s-template-id]',
		'[s-template-component]'
	];

	/**
	 * Array of elements selectors to never update childs on render
	 */
	static doNotUpdateChildren = [
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
		compile : null

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
		this.templateId = `s-template-${uniqid()}`;

		// wrap the template into a div
		// with the templateId
		this.template = template;

		// if template is a string
		if (typeof(this.template) === 'string') {
			// set the s-template-id attribute in first template node
			this.template = this.template.replace('>',` s-template-id="${this.templateId}">`);
			this.template = this.template.replace('s-template-component=""','');
			this.templateString = this.template;
			this.dom = document.createElement('div');
		}
		// if the template is a node
		else if (this.template.nodeName) {
			this.template.setAttribute('s-template-id', this.templateId);
			this.template.removeAttribute('s-template-component');
			this.templateString = __outerHTML(this.template).replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
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

		// wait the element is added to the dom to render it first time
		// querySelectorLive(`[s-template-id="${this.templateId}"]`).subscribe((elm) => {
		// 	console.log('render !!!');
		// 	// render
		// 	this._internalRender();
		// });
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
		// check that we are in the dom
		if ( ! this.dom.parentNode) {
			throw "Your template has to be in the DOM in order to be rendered...";
		}
		// console.warn('render', this.template);
		// console.log('render', this.templateId, this.data.name);
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

		console.warn('compiled', compiled);

		// set the new html
		morphdom(this.dom, compiled.trim(), {
			onBeforeElChildrenUpdated : (node) => {
				// update if is the template itself
				if (this.dom === node) return true;
				// check the s-template-no-children-update attribute
				if (node.hasAttribute && node.hasAttribute('s-template-do-not-children-update')) return false;
				// check the elements that we never want to update children
				for(let i=0; i<STemplate.doNotUpdateChildren.length; i++) {
					if (__matches(node, STemplate.doNotUpdateChildren[i])) {
						// do not discard the element
						return false;
					}
				}
				// emit an event to tell that the element children will be updated
				__dispatchEvent(node, 'sTemplate:beforeChildrenUpdate');
				return true;
			},
			onBeforeElUpdated : (node) => {
				// update if is the template itself
				if (this.dom === node) return true;
				// check the s-template-no-update attribute
				if (node.hasAttribute && node.hasAttribute('s-template-do-not-update')) return false;
				// check the elements that we never want to update
				for(let i=0; i<STemplate.doNotUpdate.length; i++) {
					if (__matches(node, STemplate.doNotUpdate[i])) {
						// do not discard the element
						return false;
					}
				}
				// emit an event to tell that the element will been updated
				__dispatchEvent(node, 'sTemplate:beforeUpdate');
				return true;
			},
			onElUpdated : (node) => {
				// emit an event to tell that the element has been updated
				__dispatchEvent(node, 'sTemplate:updated');
			},
			onBeforeNodeDiscarded : (node) => {
				// check if the node match one of the element selector
				// to not discard
				if (node.hasAttribute && node.hasAttribute('s-template-do-not-discard')) return false;
				for(let i=0; i<STemplate.doNotDiscard.length; i++) {
					if (__matches(node, STemplate.doNotDiscard[i])) {
						// do not discard the element
						return false;
					}
				}
				// emit an event to tell that the element will be discarded
				__dispatchEvent(node, 'sTemplate:updated');
				return true;
			},
			onElDiscarded : (node) => {
				// emit an event to tell that the element has been discarded
				__dispatchEvent(node, 'sTemplate:discarded');
			},
		});
		// grab the dom node again
		this.dom = document.querySelector(`[s-template-id="${this.templateId}"]`);
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
					// try to get into data
					const val = _get(this.data, e.target.value);

					// if has a value into data
					// take that as value to set into model
					if (val) {
						this.data[model] = val;
					} else if (e.target.value.substr(0,7) === 'object:') {
						const split = e.target.value.split(':');
						const idx = split[1];
						this.data[model] = this.modelValuesStack[idx];
					} else {
						this.data[model] = __autoCast(e.target.value);
					}
				});
			}

			let htmlVal = this.data[model];

			// if the model value is not something like a string,
			// a number, etc, we build a stack to map actual model value
			// with a string identifier
			if (typeof(this.data[model]) === 'object'
				|| this.data[model] instanceof Array) {
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

			// console.log('modelValuesStack', this.data);

			// set the initial value coming from the model
			elm.value = htmlVal;
			elm.setAttribute('value', htmlVal);
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
