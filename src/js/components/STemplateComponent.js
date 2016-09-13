/*
 * STemplateComponent.js
 *
 * Component that allows to stick an element to the top of the screen
 *
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  25.07.16
 * @updated  25.07.16
 * @version  1.0.0
 */
import SComponent from '../core/SComponent'
import __querySelectorLive from '../dom/querySelectorLive'
import STemplate from '../core/STemplate'
import __insertAfter from '../dom/insertAfter'
import __outerHTML from '../dom/outerHTML'
import __dispatchEvent from '../dom/dispatchEvent'
import __closest from '../dom/closest'
import __matches from '../dom/matches'
import __uniqid from '../tools/uniqid'
import _get from 'lodash/get'

class STemplateComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings, name = 'sTemplate') {
		SComponent.setup(name, type, settings);
	}

	templateSettings = null;

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sTemplate') {

		// init the component
		super(name, elm, {

			/**
			 * data
			 * Store the data object used in to render the template
			 * @type 	{Object}
			 */
			data : {},

			/**
			 * compile
			 * The compile function to use
			 * @type 	{Function}
			 */
			compile : null,

			/**
			 * template
			 * The template to use. If not specified, will be the element itself used as template
			 * @type 	{String}
			 */
			template : null

		}, settings);

		// process the data to allow some features
		// like the mapping of instance property with @,
		// etc...
		for(let key in this.settings.data) {
			// map the data to an instance variable
			if (typeof(this.settings.data[key]) === 'string'
				&& this.settings.data[key].substr(0,1) === '@') {
				const watchKey = this.settings.data[key].substr(1);
				// set the initial value
				this.settings.data[key] = _get(this, watchKey);
				// bind the value to the data value
				this._binder.bindObjectPath2ObjectPath(this, watchKey, this, `settings.data.${key}`);
			}
		}
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		// save the instance into the dom element
		// so the template class can know that
		// this node is a templateComponent and re-render it
		this.elm.sTemplateComponent = this;

		this._componentId = __uniqid();
		this.elm.setAttribute('s-template-component', this._componentId);
		this.elm.setAttribute('s-template-virgin', true);

		// save into window to be able to all it from
		// template statement as onclick, etc...
		if ( ! window.sTemplateComponents) window.sTemplateComponents = {};
		window.sTemplateComponents[this._componentId] = this;

		setTimeout(() => {
			// Init the template only if it is not nested in
			// another one...
			// OR if the component is nested in an already rendered template
			// that is detectable by the presence of the s-template-component-dirty attribute
			const closestComponent = __closest(this.elm, '[s-template-component]');
			if (closestComponent && closestComponent.hasAttribute('s-template-component-dirty')) {
				this._internalRender();
			} else if ( ! closestComponent) {
				this._internalRender();
			}
		});
	}

	/**
	 * render
	 * Render the state to the html element
	 * @return 	{void}
	 */
	render() {
		super.render();
		this.elm.setAttribute('s-template-component', this._componentId);
	}

	/**
	 * Internal render
	 */
	_internalRender(fromTemplate = false) {

		// if the internalRender is not called from
		// a template rendering
		// we check again if we are in a template to avoid
		// rendering the element that will be rendered by the parent template
		// anyway
		const closestComponent = __closest(this.elm, '[s-template-virgin]');
		if ( ! fromTemplate && closestComponent) return;
		this.elm.removeAttribute('s-template-virgin');

		// if the element has already been rendered once,
		// no need to initiate it completely
		// just render the template
		if (this.elm.sTemplateInited) {
			this.renderTemplate();
			return;
		}
		this.elm.sTemplateInited = true;

		// set that the template id now dirty
		this.elm.setAttribute('s-template-component-dirty', true);

		// template is the element itself
		let template = null;

		// manage template settings to make a dom element with it
		// only once
		if (this.templateSettings === null && typeof(this.settings.template) === 'string') {
			const cont = document.createElement('div');
			cont.innerHTML = this.settings.template;
			this.templateSettings = cont;
		}

		// ...but is the element is a script
		// if it is, create a div after it that
		// will contain the rendered template
		if (this.elm.nodeName.toString().toLowerCase() === 'script') {
			// the template is the script content
			template = `<div>${this.elm.innerHTML}</div>`;
		} else if (this.elm.nodeName !== undefined) {
			template = this.elm;
		}

		// if we have any template from settings
		// we assume that the template in the html are
		// contents of the setting template
		if (this.templateSettings && template) {

			// search the yieds into the template
			let cont = template;
			if (typeof(template) === 'string') {
				// create a new container to convert the string to html elements
				const cont = document.createElement('div');
				cont.innerHTML = template;
			}
			const yields = cont.querySelectorAll('[yield]');

			// if some yields, loop on each
			if (yields.length) {
				[].forEach.call(yields, (y) => {
					//  is an id
					const id = y.getAttribute('yield');
					if (id) {
						// replace the yields
						const yToReplace = this.templateSettings.querySelector(`[yield="${id}"]`);
						if (yToReplace) {
							__insertAfter(y, yToReplace);
							yToReplace.parentNode.removeChild(yToReplace);
						}
					} else {
						const yToReplace = this.templateSettings.querySelector('[yield]');
						if (yToReplace) {
							__insertAfter(y, yToReplace);
							yToReplace.parentNode.removeChild(yToReplace);
						}
					}
				});
			}
			template = this.templateSettings;
		} else if ( this.templateSettings && ! template) {
			template = this.templateSettings;
		}

		// check if no template specified
		if ( ! template) {
			throw "You have to specify a template either by setting up the settings.template variable, by initiating this component on a 'script' tag or on any html element like a 'div' or something...";
		}

		// make a template with the dom
		this._template = new STemplate(template, this.settings.data, {
			compile : this.settings.compile,
			onBeforeElUpdated : this._onBeforeElUpdated.bind(this),
			afterCompile : this._afterCompile.bind(this)
		});

		// if we have a container, append the template into it
		if ( ! template.nodeName || ! template.parentNode) {

			// insert into if possible
			if (this.elm.nodeName.toLowerCase() === 'script') {
				// insert the element after the script
				__insertAfter(this._template.dom, this.elm);
			} else {
				// empty the element and add the template into it
				this.elm.innerHTML = '';
				this.elm.appendChild(this._template.dom);
			}
		}

		// render
		this.renderTemplate();
	}

	/**
	 * After compile
	 */
	_afterCompile(renderedTemplate) {
		// replace all the this. with the proper window.sTemplateDataObjects reference
		const thisDotReg = new RegExp('this\\.','g');
		renderedTemplate = renderedTemplate.replace(thisDotReg, `window.sTemplateComponents['${this._componentId}'].`);
		// return the processed template
		return renderedTemplate;
	}

	/**
	 * _onBeforeElUpdated
	 */
	_onBeforeElUpdated(node) {
		// check if is a template component
		// in case we need to render it
		if (node.sTemplateComponent
			&& node.sTemplateComponent !== this) {
			// inject the current template datas into the
			// node to be able to access them
			// in attributes like onclick, etc...
			node.sTemplateComponentParent = this;
			// render the node if needed
			node.sTemplateComponent._internalRender(true);
		}
	}

	/**
	 * renderTemplate
	 */
	renderTemplate() {
		// process data
		this._processData();

		// render the template
		this._template.render();
	}

	/**
	 * Process the data
	 * This will map the parent data function to this component
	 * data string
	 */
	_processData() {
		// process the data
		if (this.elm.sTemplateComponentParent) {
			for (let key in this.data) {
				if (typeof(this.data[key]) === 'string') {
					if (typeof(this.elm.sTemplateComponentParent.data[this.data[key]]) === 'function'
						&& this.data[key] !== this.elm.sTemplateComponentParent.data[this.data[key]]) {
						this.data[key] = this.elm.sTemplateComponentParent.data[this.data[key]].bind(this.elm.sTemplateComponentParent);
					}
				}
			}
		}
	}

	/**
	 * Data accessor
	 */
	get data() {
		return this.settings.data;
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.STemplateComponent = STemplateComponent;

// export
export default STemplateComponent;
