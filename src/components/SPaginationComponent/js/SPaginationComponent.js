import STemplateComponent from '../../STemplateComponent'
import querySelectorLive from '../../../js/dom/querySelectorLive'
import _template from 'lodash/template'
import __whenAttribute from '../../../js/dom/whenAttribute'
import __whenProperty from '../../../js/utils/objects/whenProperty'

class SPaginationComponent extends STemplateComponent {

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sPagination') {
		super(elm, {
			onchange : null,
			pages : 0,
			current : 1,
			showFirst : true,
			showLast : true,
			showPrevious : true,
			showNext : true,

			/**
			 * data
			 * The data used by the template
			 * @type 	{Object}
			 */
			data : {
				_componentNameDash : '@componentNameDash',
				pages : '@settings.pages',
				current : '@settings.current',
				onchange : '@settings.onchange',
				first : '@first',
				last : '@last',
				previous : '@previous',
				next : '@next',
				showFirst : '@settings.showFirst',
				showLast : '@settings.showLast',
				showPrevious : '@settings.showPrevious',
				showNext : '@settings.showNext'
			},

			/**
			 * compile
			 * The compile method
			 * @param  {String} template The template to compile
			 * @param  {Object} data     The data object to use to compile
			 * @return {String}          The compiled template
			 */
			compile : (template, data) => {
				const tmp = _template(template, {
					evaluate : /<!?-?-?%([\s\S]+?)%-?-?>/g,
					interpolate : /<!?-?-?%=([\s\S]+?)%-?-?>/g,
					escape : /<!?-?-?%-([\s\S]+?)%-?-?>/g
				});
				const rnd = tmp(data);
				return rnd;
			},

			/**
			 * template
			 * The template to use for pagination
			 * @type 	{String}
			 */
			template : `
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
			`,

			// extend with passed settings
			...settings
		}, name);

		elm.style.display = 'none';

	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		this.elm.style.display = 'block';

		// watch some items
		this.watch('data.current', (newVal, oldVal) => {
			if (newVal === oldVal) return;
			if (this.data.onchange) {
				this.data.onchange(this.data.current);
			}
		});
	}

	/**
	 * _initDependencies
	 * Check some things before init the component
	 * @return 	{Array} 	An array of promises
	 */
	_initDependencies() {
		return [
			__whenProperty(this.data, 'pages', (newVal, oldVal) => {
				return (typeof(newVal) === 'number');
			}),
			__whenProperty(this.data, 'current', (newVal, oldVal) => {
				return (typeof(newVal) === 'number');
			})
		];
	}

	/**
	 * _afterCompile
	 * Process the tempalate
	 */
	_afterCompile(template) {
		template = super._afterCompile(template);
		template = template.replace(/\{\{component_item_class\}\}/g, this.componentClassName('item'));
		template = template.replace(/\{\{disabled_item_class\}\}/g, this.componentClassName('item',null,'disabled'));
		return template;
	}

	first() {
		this.data.current = 1;
	}
	last() {
		this.data.current = this.data.pages;
	}
	next() {
		const current = this.data.current;
		if (current + 1 <= this.data.pages) {
			this.data.current += 1;
		}
	}
	previous() {
		if (this.data.current > 1) {
			this.data.current -= 1;
		}
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SPaginationComponent = SPaginationComponent;

// export
export default SPaginationComponent;
