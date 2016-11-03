import SWebComponent from './SWebComponent'
import SBinder from '../classes/SBinder'
import __uniqid from '../utils/uniqid'
import _get from 'lodash/get'
import __template from '../dom/template'
import __htmlToStr from '../utils/string/htmlToStr'
import __mergeYields from '../dom/mergeYields'
import sTemplateIntegrator from './sTemplateIntegrator'
import STemplate from './STemplate'

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
		};
	}

	/**
	 * Return an object that represent the default data used by the template
	 * to render itself
	 * @return 		{Object} 			An object that represent the data used by the template
	 */
	static get defaultTemplateData() {
		return {};
	}

	/**
	 * Get the default template data for this particular instance
	 * @return 		{Object} 			The template data
	 */
	get defaultTemplateData() {
		let data = window.sugar._webComponentsStack[this._componentName].defaultTemplateData;
		let comp = window.sugar._webComponentsStack[this._componentName];
		while(comp) {
			if (comp.defaultTemplateData) {
				data = {
					...comp.defaultTemplateData,
					...data
				};
			}
			comp = Object.getPrototypeOf(comp);
		}
		return data;
	}

	/**
	 * Get the template
	 */
	get template() {
		// cache
		if ( this._templateCached) return this._templateCached;
		// get the template
		const tpl = __template(this.props.template || this);
		// if a template is specified in the props
		// we will try to merge the yield elements
		// to produce the final template
		if (this.props.template) {
			// get the template from the element itself
			const elmTpl = __template(this);
			// merge the yields
			__mergeYields(tpl, elmTpl);
		}
		console.log('tpl', tpl);
		// save to cache
		this._templateCached = tpl;
		// return the template
		return tpl;
	}

	/**
	 * Get the template in string format
	 */
	get templateString() {
		const tpl = this.template;
		return __htmlToStr(tpl);
	}

	/**
	 * Before that the component will mount
	 */
	componentWillMount() {
		super.componentWillMount();

		// check if no template specified
		if ( ! this.template) {
			throw "You have to specify a template either by setting up the props.template variable, by initiating this component on a 'script' tag or on any html element like a 'div' or something...";
		}

		// create a component id
		this._templateComponentId = __uniqid();

		// ignore the props
		const ignore = {};
		for (let key in this.props) {
			ignore[key] = true;
		}
		sTemplateIntegrator.ignore(this, ignore);

		// set the content if the template if not the element itself
		if (this !== this.template) {
			this.innerHTML = this.template.innerHTML;
		}
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// create the templateData stack from the default template data
		this.templateData = Object.assign({}, this.defaultTemplateData);

		// new binder
		this._binder = new SBinder();

		// process the data to allow some features
		// like the mapping of instance property with @,
		// etc...
		for(let key in this.templateData) {
			// map the data to an instance variable
			if (typeof(this.templateData[key]) === 'string') {
				// handle the @... notation in datas
				if (this.templateData[key].substr(0,1) === '@') {
					const watchKey = this.templateData[key].substr(1);
					// set the initial value
					this.templateData[key] = _get(this, watchKey);
					// bind the value to the data value
					this._binder.bindObjectPath2ObjectPath(this, watchKey, this, `templateData.${key}`);
				}
			}
			// bind the component instance to the setting if it is
			// a function
			if (typeof(this.templateData[key]) === 'function') {
				this.templateData[key] = this.templateData[key].bind(this);
			}
		}

		// try to get the parent template instance
		this._parentSTemplate = STemplate.getParentTemplate(this);

		// instanciate a new STemplate
		this._sTemplate = new STemplate(this, this.templateData, {
			compile : this.props.compile || this.templateCompile.bind(this),
			beforeCompile : this.templateWillCompile.bind(this),
			afterCompile : this.templateDidCompile.bind(this),
			beforeRender : this.templateWillRender.bind(this),
			afterRender : this.templateDidRender.bind(this),
			onDataUpdate : this._onTemplateDataUpdate.bind(this),
			shouldTemplateUpdate : this.shouldTemplateUpdate.bind(this)
		}, this._parentSTemplate);

		// render the template
		this._sTemplate.render();
	}

	/**
	 * Run each time a data is updated in the template
	 * @param 		{String} 		name 			The data name
	 * @param 		{Mixed} 		newVal 			The new value
	 * @param 		{Mixed} 		oldVal 			The old value
	 */
	_onTemplateDataUpdate(name, newVal, oldVal) {
		// do nothing if is the same data
		if ( newVal === oldVal) return;
		// call the function
		this.templateWillReceiveData && this.templateWillReceiveData(name, newVal, oldVal);
		// stop here if we don't have any templateWillReceiveDatas method
		if ( ! this.templateWillReceiveDatas) return;
		// ensure that we have a stack to work with
		if ( ! this._templateWillReceiveDataStack) this._templateWillReceiveDataStack = {};
		// // add the data into the stack
		this._templateWillReceiveDataStack[name] = newVal;
		// // batch the datas
		clearTimeout(this._templateWillReceiveDataTimeout);
		this._templateWillReceiveDataTimeout = setTimeout(() => {
		// 	// call the templateWillReceiveData function
			this.templateWillReceiveDatas(Object.assign({}, this._templateWillReceiveDataStack));
			// clean the stack
			this._templateWillReceiveDataStack = {};
		});
	}

	/**
	 * Run before the template will be compiled so that you can have a change to process it if needed
	 * before it will be passed to the compile step
	 * @param 		{String} 				template 				The template before compilation
	 * @return 		{String} 										The processed template to pass to compilation step
	 */
	templateWillCompile(template) {
		return template;
	}

	/**
	 * Compile the template has you wan
	 * @param 		{String} 				template 				The template to compile
	 * @param 		{Object} 				data 					The data to compile the template with
	 * @return 		{String} 										The compiled template
	 */
	templateCompile(template, data) {
		return template;
	}

	/**
	 * Run after the template has been compiled so that you can have a chance to process it if needed
	 * before that the dom will be updated
	 * @param 		{String} 			 	compiledTemplate 		The compiled template
	 * @return 		{String|HTMLElement} 							The processed template
	 */
	templateDidCompile(template) {
		return template;
	}

	/**
	 * Run before the template will be rendered in the viewport
	 * @param 		{String} 				template 				The template to render to the screen
	 * @return 		{String} 										The processed template to render
	 */
	templateWillRender(template) {
		return template;
	}

	/**
	 * Run after the template has been rendered in the viewport
	 * @param 		{HTMLElement} 			inDomTemplate 			The in dom representation of the template
	 */
	templateDidRender(inDomTemplate) {
		// do something here if needed
	}

	/**
	 * Run before compile the template to test if we need to render it again or not
	 * @param 		{Object} 				nextData 				The new data that the template should reflect
	 * @return 		{Boolean} 										false if want to prevent the template to be rendered, true otherwise
	 */
	shouldTemplateUpdate(nextData) {
		return true;
	}

	/**
	 * Unmount component
	 */
	componentUnmount() {
		super.componentUnmount();
		// destroy the template
		if (this._sTemplate && this._sTemplate.destroy) {
			this._sTemplate.destroy();
		}
	}

	/**
	 * Render
	 * @definition 		SWebComponent.render
	 */
	render() {
		super.render();
	}
}
