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
				// console.log(typeof(newVal));
				return (typeof(newVal) === 'number');
			});
		}, function() {
			return __whenProperty(this.templateData, 'current', (newVal, oldVal) => {
				// console.log('ccc', typeof(newVal));
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
			showNext : true,
			compile : (template, data) => {
				const tmp = _template(template, {
					evaluate : /<!?-?-?%([\s\S]+?)%-?-?>/g,
					interpolate : /<!?-?-?%=([\s\S]+?)%-?-?>/g,
					escape : /<!?-?-?%-([\s\S]+?)%-?-?>/g
				});
				const rnd = tmp(data);
				return rnd;
			}
		}
	}

	get template() {
		return `
		<%
			var itemAttr = _componentNameDash + '-item';
		%>
		<ol class="<%= _componentNameDash %>">
			<!--% if (showFirst) { %-->
				<!--% if (current === 1) { %-->
					<li class="{{component_item_class}} {{disabled_item_class}}" onclick="this.first()">
						«
					</li>
				<!--% } else { %-->
					<li class="{{component_item_class}}" onclick="this.first()">
						«
					</li>
				<!--% } %-->
			<!--% } %-->

			<!--% if (showPrevious) { %-->
				<!--% if (current === 1) { %-->
					<li class="{{component_item_class}} {{disabled_item_class}}" onclick="this.previous()">
						‹
					</li>
				<!--% } else { %-->
					<li class="{{component_item_class}}" onclick="this.previous()">
						‹
					</li>
				<!--% } %-->
			<!--% } %-->

			<!--% for(i=0; i<pages; i++) { %-->
				<li class="{{component_item_class}} <% if ((i + 1) === current) { %> active <% } %>" onclick="this.onchange(<%= (i + 1) %>)"><%= (i + 1) %></li>
			<!--% } %-->

			<!--% if (showNext) { %-->
				<!--% if (current === pages) { %-->
					<li class="{{component_item_class}} {{disabled_item_class}}" onclick="this.next()">
						›
					</li>
				<!--% } else { %-->
					<li class="{{component_item_class}}" onclick="this.next()">
						›
					</li>
				<!--% } %-->
			<!--% } %-->

			<!--% if (showLast) { %-->
				<!--% if (current === pages) { %-->
					<li class="{{component_item_class}} {{disabled_item_class}}" onclick="this.last()">
						»
					</li>
				<!--% } else { %-->
					<li class="{{component_item_class}}" onclick="this.last()">
						»
					</li>
				<!--% } %-->
			<!--% } %-->
		</ol>
		`;
	}

	/**
	 * Default template data
	 * @definition 		SWebTemplateComponent.defaultTemplateData
	 */
	static get defaultTemplateData() {
		return {
			_componentNameDash : '@componentNameDash',
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
	 * Define the template
	 * @definition 		SWebTemplateComponent.
	 */
	// get template() {
	//
	// 	return `
	//
	// 	`;
	// }

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
	 * Template did compile
	 * @definition 		STemplateWebComponent.templateDidCompile
	 */
	templateDidCompile(template) {
		template = super.templateDidCompile(template);
		template = template.replace(/\{\{component_item_class\}\}/g, this.componentClassName('item'));
		template = template.replace(/\{\{disabled_item_class\}\}/g, this.componentClassName('item',null,'disabled'));
		return template;
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
