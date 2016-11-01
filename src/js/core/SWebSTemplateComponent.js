import SWebTemplateComponent from './SWebTemplateComponent'
import STemplate from './STemplate'
import sTemplateIntegrator from './sTemplateIntegrator'

export default class SWebSTemplateComponent extends SWebTemplateComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Before that the component will mount
	 */
	componentWillMount() {
		super.componentWillMount();

		// ignore the props
		const ignore = {};
		for (let key in this.props) {
			ignore[key] = true;
		}
		sTemplateIntegrator.ignore(this, ignore);
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

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
	 * Unmount component
	 */
	componentUnmount() {
		super.componentUnmount();
		// destroy the template
		if (this._sTemplate && this._sTemplate.destroy) {
			this._sTemplate.destroy();
		}
	}
}
