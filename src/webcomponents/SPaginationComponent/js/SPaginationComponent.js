import STemplateWebComponent from '../../../js/core/STemplateWebComponent'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'
import _template from 'lodash/template'
import __whenAttribute from '../../../js/dom/whenAttribute'
import __whenProperty from '../../../js/utils/objects/whenProperty'

export default class SPaginationComponent extends STemplateWebComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Return a list of promises to resolve before init the component
	 * @return 	{Array} 	An array of promises to resolve
	 */
	static get mountDependencies() {
		return [function() {
			return __whenProperty(this.templateData, 'pages', (newVal, oldVal) => {
				return (typeof(newVal) === 'number');
			});
		}, function() {
			return __whenProperty(this.templateData, 'current', (newVal, oldVal) => {
				return (typeof(newVal) === 'number');
			});
		}];
	}

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {
			onchange : null,
			pages : 0,
			current : 1,
			showFirst : true,
			showLast : true,
			showPrevious : true,
			showNext : true
		}
	}

	get template() {
		return `
		<!--% if (showFirst) { %-->
			<!--% if (current === 1) { %-->
				<${this._componentNameDash}-item onclick="this.first()">
					«
				</${this._componentNameDash}-item>
			<!--% } else { %-->
				<${this._componentNameDash}-item onclick="this.first()">
					«
				</${this._componentNameDash}-item>
			<!--% } %-->
		<!--% } %-->

		<!--% if (showPrevious) { %-->
			<!--% if (current === 1) { %-->
				<${this._componentNameDash}-item onclick="this.previous()">
					‹
				</${this._componentNameDash}-item>
			<!--% } else { %-->
				<${this._componentNameDash}-item onclick="this.previous()">
					‹
				</${this._componentNameDash}-item>
			<!--% } %-->
		<!--% } %-->

		<!--% for(i=0; i<pages; i++) { %-->
			<!--% if ((i + 1) === current) { %-->
				<${this._componentNameDash}-item active onclick="this.onchange(!%= (i + 1) %!)">
					<!--%= (i + 1) %-->
				</${this._componentNameDash}-item>
			<!--% } else { %-->
				<${this._componentNameDash}-item onclick="this.onchange(!%= (i + 1) %!)">
					<!--%= (i + 1) %-->
				</${this._componentNameDash}-item>
			<!--% } %-->
		<!--% } %-->

		<!--% if (showNext) { %-->
			<!--% if (current === pages) { %-->
				<${this._componentNameDash}-item onclick="this.next()">
					›
				</${this._componentNameDash}-item>
			<!--% } else { %-->
				<${this._componentNameDash}-item onclick="this.next()">
					›
				</${this._componentNameDash}-item>
			<!--% } %-->
		<!--% } %-->

		<!--% if (showLast) { %-->
			<!--% if (current === pages) { %-->
				<${this._componentNameDash}-item onclick="this.last()">
					»
				</${this._componentNameDash}-item>
			<!--% } else { %-->
				<${this._componentNameDash}-item onclick="this.last()">
					»
				</${this._componentNameDash}-item>
			<!--% } %-->
		<!--% } %-->
		`;
	}

	/**
	 * Default template data
	 * @definition 		SWebTemplateComponent.defaultTemplateData
	 */
	static get defaultTemplateData() {
		return {
			pages : '@props.pages',
			current : '@props.current',
			onchange : '@props.onchange',
			first : '@first',
			last : '@last',
			previous : '@previous',
			next : '@next',
			showFirst : '@props.showFirst',
			showLast : '@props.showLast',
			showPrevious : '@props.showPrevious',
			showNext : '@props.showNext'
		};
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
	}

	/**
	 * Compile template
	 * @definition 		STemplateWebComponent.templateCompile
	 */
	templateCompile(template, data) {
		const tmp = _template(template, {
			evaluate : /<?!?-?-?%\s([\s\S]+?)%-?-?!?>?/g,
			interpolate : /<?!?-?-?%=\s([\s\S]+?)%-?-?!?>?/g,
			escape : /<?!?-?-?%-\s([\s\S]+?)%-?-?!?>?/g
		});
		const rnd = tmp(data);
		return rnd;
	}

	/**
	 * Template will receive data
	 * @definition 		STemplateWebComponent.templateWillReceiveData
	 */
	templateWillReceiveData(name, newVal, oldVal) {
		switch(name) {
			case 'current':
				if (this.templateData.onchange && typeof(this.templateData.onchange) === 'function') {
					this.templateData.onchange(this.templateData.current);
				}
			break;
		}
	}

	/**
	 * Unmount component
	 * @definition 		SWebComponent.componentUnmount
	 */
	componentUnmount() {
		super.componentUnmount();
	}

	first() {
		this.templateData.current = 1;
	}
	last() {
		this.templateData.current = this.templateData.pages;
	}
	next() {
		const current = this.templateData.current;
		if (current + 1 <= this.templateData.pages) {
			this.templateData.current += 1;
		}
	}
	previous() {
		if (this.templateData.current > 1) {
			this.templateData.current -= 1;
		}
	}
}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration('SPaginationComponent', (component) => {

});
