import SWebComponent from './SWebComponent'
import sTemplateIntegrator from './sTemplateIntegrator'
import STemplate from './STemplate'
import SBinder from '../classes/SBinder'
import __insertAfter from '../dom/insertAfter'
import __uniqid from '../utils/uniqid'
import _get from 'lodash/get'

export default class SWebTemplateComponent extends SWebComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {

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

		}
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return []
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {

		super.componentMount();

		// create a component id
		this._templateComponentId = __uniqid();

		// apply some attributes
		this.setAttribute('s-template-component', this._templateComponentId);

		// new binder
		this._binder = new SBinder();

		// process the data to allow some features
		// like the mapping of instance property with @,
		// etc...
		// for(let key in this.props.data) {
		// 	// map the data to an instance variable
		// 	if (typeof(this.props.data[key]) === 'string') {
		// 		// handle the @... notation in datas
		// 		if (this.props.data[key].substr(0,1) === '@') {
		// 			const watchKey = this.props.data[key].substr(1);
		// 			// set the initial value
		// 			this.props.data[key] = _get(this, watchKey);
		// 			// bind the value to the data value
		// 			this._binder.bindObjectPath2ObjectPath(this, watchKey, this, `props.data.${key}`);
		// 		}
		// 	}
		// 	// bind the component instance to the setting if it is
		// 	// a function
		// 	if (typeof(this.props.data[key]) === 'function') {
		// 		this.props.data[key] = this.props.data[key].bind(this);
		// 	}
		// }
	}

	/**
	 * Internal render
	 */
	_internalRender() {

		// if the element has already been rendered once,
		// no need to initiate it completely
		// just render the template
		if (this.sTemplateInited) {
			this.renderTemplate();
			return;
		}
		this.sTemplateInited = true;

		// set that the template id now dirty
		this.setAttribute('s-template-component-dirty', true);

		// init template variable that will contains the
		// complete template to pass the the STemplate instance
		let template = null;

		// if a template is specified in the props.template,
		// we process it to have an html version of it
		if ( ! this._templateInProps && typeof(this.props.template) === 'string') {
			const cont = document.createElement('div');
			cont.innerHTML = this.props.template;
			this._templateInProps = cont;
		}

		// ...but is the element is a script
		// if it is, create a div after it that
		// will contain the rendered template
		if (this.props.template && typeof(this.props.template) === 'string' && this.props.template.substr(0,1) === '#') {
			const tplEl = document.querySelector(this.props.template);
			if (tplEl) {
				template = tplEl.innerHTML;
			}
		} else {
			template = this;
		}

		// if we have any template from settings
		// we assume that the template in the html are
		// contents of the setting template
		if (this._templateInProps && template) {
			// search the yieds into the template
			let cont = template;
			if (typeof(template) === 'string') {
				// create a new container to convert the string to html elements
				const cont = document.createElement('div');
				cont.innerHTML = template;
			}
			// find yields in the templateInProps
			const inPropsTemplateYields = this._templateInProps.querySelectorAll('[yield]');
			// if we have some yields,
			// we process them.
			// otherwise, we considere the _templateInProps
			// as the template itself
			if (inPropsTemplateYields.length) {
				// process the yields
				[].forEach.call(inPropsTemplateYields, (yieldElm) => {
					// if the yield as a value,
					// we will try to find the corresponding yield in the
					// template
					const yieldId = yieldElm.getAttribute('yield');
					let yieldSelector = '[yield]';
					if (yieldId) {
						yieldSelector = `[yield="${yieldId}"]`;
					}
					// we need to find the proper yield id
					const destYield = cont.querySelector(yieldSelector);
					if (destYield) {
						// set the yield content into the inPropTemplate
						destYield.removeAttribute('yield');
						yieldElm.removeAttribute('yield');
						yieldElm.appendChild(destYield);
					} else {
						// theirs no yield in the template,
						// so use the template itself as yield content
						yieldElm.removeAttribute('yield');
						yieldElm.innerHTML = cont.innerHTML;
					}
				});
			}
			template = this._templateInProps;
		} else if ( this._templateInProps && ! template) {
			// this.appendChild(this._templateInProps);
			// template = this.elm;
			template = this._templateInProps;
		}

		// check if no template specified
		if ( ! template) {
			throw "You have to specify a template either by setting up the settings.template variable, by initiating this component on a 'script' tag or on any html element like a 'div' or something...";
		}

		// get the parent template component
		const parentTemplate = STemplate.getParentTemplate(this);

		// make a template with the dom
		this._template = new STemplate(template, this.props.data, {
			compile : this.props.compile,
			afterCompile : this._afterCompile.bind(this)
		}, parentTemplate);

		// if we have a container, append the template into it
		if ( ! template.nodeName || ! template.parentNode) {
			// insert into if possible
			if (this.nodeName.toLowerCase() === 'script') {
				// insert the element after the script
				__insertAfter(this._template.dom, this);
			} else {
				// empty the element and add the template into it
				this.innerHTML = '';
				this.appendChild(this._template.dom);
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
	 * Unmount component
	 */
	componentUnmount() {
		super.componentUnmount();
		// destroy the template
		if (this._template && this._template.destroy) {
			this._template.destroy();
		}
		// remove the reference on the element
		delete this._sTemplateComponent;
	}

	/**
	 * Data accessor
	 */
	get data() {
		return this.props.data;
	}

	/**
	 * template
	 * template accessor
	 * @return 	{STemplate} 	The template instance
	 */
	get template() {
		return this._template;
	}

	/**
	 * Render
	 * @definition 		SWebComponent.render
	 */
	render() {
		super.render();
		this._internalRender();
	}
}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration('SWebTemplateComponent', (component) => {
	sTemplateIntegrator.ignore(component, {
		"s-template-dirty" : true,
		"s-template-component" : true,
		"s-template-component-dirty" : true,
		"s-template-component-virgin" : true
	});
});
