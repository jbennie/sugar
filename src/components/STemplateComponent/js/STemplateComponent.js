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
import SComponent from '../../../js/core/SComponent'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'
import STemplate from '../../../js/core/STemplate'
import __insertAfter from '../../../js/dom/insertAfter'
import __closest from '../../../js/dom/closest'
import __matches from '../../../js/dom/matches'
import __uniqid from '../../../js/utils/uniqid'
import __strToHtml from '../../../js/utils/string/strToHtml'
import _get from 'lodash/get'
import __constructorName from '../../../js/utils/objects/constructorName'
import SElement from '../../../js/core/SElement'
import __uncamelize from '../../../js/utils/string/uncamelize'

class STemplateComponent extends SComponent {

	static registerSelector = function(selector) {
		return STemplate.registerTemplateSelector(selector);
	}

	/**
	 * _isTemplateComponent
	 * Set that this class is a templateComponent
	 * @type 	{Boolean}
	 */
	_isTemplateComponent = true;

	/**
	 * _templateInSettings
	 * Store the template that is specified in the settings.template
	 * @type 	{HTMLElement}
	 */
	_templateInSettings = null;

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sTemplate') {

		// init the component
		super(elm, {

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
			template : null,

			...settings

		}, name);

		// create a component id
		this._templateComponentId = __uniqid();

		// apply some attributes
		this.elm.setAttribute('s-template-component', this._templateComponentId);
		// this.elm.setAttribute('s-template-component-virgin', true);

		// process the data to allow some features
		// like the mapping of instance property with @,
		// etc...
		for(let key in this.settings.data) {
			// map the data to an instance variable
			if (typeof(this.settings.data[key]) === 'string') {
				// handle the @... notation in datas
				if (this.settings.data[key].substr(0,1) === '@') {
					const watchKey = this.settings.data[key].substr(1);
					// set the initial value
					this.settings.data[key] = _get(this, watchKey);
					// bind the value to the data value
					this._binder.bindObjectPath2ObjectPath(this, watchKey, this, `settings.data.${key}`);
				}
			}
			// bind the component instance to the setting if it is
			// a function
			if (typeof(this.settings.data[key]) === 'function') {
				this.settings.data[key] = this.settings.data[key].bind(this);
			}
		}
	}

	/**
	 * _init
	 */
	_init() {
		super._init();
		this.elm._sTemplateComponent = this;
	}

	/**
	 * _onAdded
	 */
	_onAdded() {
		super._onAdded();
		this._internalRender();
	}

	/**
	 * Internal render
	 */
	_internalRender() {

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

		// init template variable that will contains the
		// complete template to pass the the STemplate instance
		let template = null;

		// if a template is specified in the settings.template,
		// we process it to have an html version of it
		if (this._templateInSettings === null && typeof(this.settings.template) === 'string') {
			const cont = document.createElement('div');
			cont.innerHTML = this.settings.template;
			this._templateInSettings = cont;
		}

		// ...but is the element is a script
		// if it is, create a div after it that
		// will contain the rendered template
		if (this.elm.nodeName.toString().toLowerCase() === 'script') {
			// the template is the script content
			template = this.elm.innerHTML;
		} else if (this.elm.nodeName !== undefined) {
			template = this.elm;
		}

		// if we have any template from settings
		// we assume that the template in the html are
		// contents of the setting template
		if (this._templateInSettings && template) {

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
						const yToReplace = this._templateInSettings.querySelector(`[yield="${id}"]`);
						if (yToReplace) {
							__insertAfter(y, yToReplace);
							yToReplace.parentNode.removeChild(yToReplace);
						}
					} else {
						const yToReplace = this._templateInSettings.querySelector('[yield]');
						if (yToReplace) {
							__insertAfter(y, yToReplace);
							yToReplace.parentNode.removeChild(yToReplace);
						}
					}
				});
			}
			template = this._templateInSettings;
			// this.elm.appendChild(this._templateInSettings);
			// template = this.elm;
		} else if ( this._templateInSettings && ! template) {
			// this.elm.appendChild(this._templateInSettings);
			// template = this.elm;
			template = this._templateInSettings;
		}

		// check if no template specified
		if ( ! template) {
			throw "You have to specify a template either by setting up the settings.template variable, by initiating this component on a 'script' tag or on any html element like a 'div' or something...";
		}

		// get the parent template component
		const parentTemplate = STemplate.getParentTemplate(this.elm);
		console.log('parent template', parentTemplate);

		// make a template with the dom
		this._template = new STemplate(template, this.settings.data, {
			compile : this.settings.compile,
			afterCompile : this._afterCompile.bind(this)
		}, parentTemplate);

		// if we have a container, append the template into it
		if ( ! template.nodeName || ! template.parentNode) {
			// insert into if possible
			if (this.elm.nodeName.toLowerCase() === 'script') {
				console.log('insert', this._template.dom);
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
	 * _afterCompile
	 * Run after the template has been rendered
	 * @param 	{String} 	compiledTemplate 	The compiled template
	 * @return 	{String} 						The processed template
	 */
	_afterCompile(template) {
		return template;
	}

	/**
	 * renderTemplate
	 */
	renderTemplate() {
		// render the template
		this._template.render();
	}

	/**
	 * destroy
	 * Destroy the component
	 * @return 	{void}
	 */
	destroy() {
		// destroy the template
		if (this._template && this._template.destroy) {
			this._template.destroy();
		}
		// remove the reference on the element
		delete this.elm._sTemplateComponent;
	}

	/**
	 * Data accessor
	 */
	get data() {
		return this.settings.data;
	}

	/**
	 * template
	 * template accessor
	 * @return 	{STemplate} 	The template instance
	 */
	get template() {
		return this._template;
	}
}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration('STemplateComponent', (component) => {
	sTemplateIntegrator.ignore(component.elm, {
		"s-template-component" : true,
		"s-template-component-dirty" : true,
		"s-template-component-virgin" : true
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.STemplateComponent = STemplateComponent;

// export
export default STemplateComponent;
