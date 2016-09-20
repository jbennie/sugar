import STemplateComponent from '../STemplateComponent'
import querySelectorLive from '../../dom/querySelectorLive'
import _template from 'lodash/template'
import __whenAttribute from '../../dom/whenAttribute'
import __whenProperty from '../../objects/whenProperty'

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
					var disableFirst = '';
					if (current === 1) {
						disableFirst = 's-pagination__item--disabled is-disabled';
					}
					var disableLast = '';
					if (current === pages) {
						disableLast = 's-pagination__item--disabled is-disabled';
					}
				%>

				<ol class="s-pagination">
					<!--% if (showFirst) { %-->
						<li class="s-pagination__item <%= disableFirst %>" onclick="this.first()">
							«
						</li>
					<!--% } %-->
					<!--% if (showPrevious) { %-->
						<li class="s-pagination__item <%= disableFirst %>" onclick="this.previous()">
							‹
						</li>
					<!--% } %-->
					<!--% for(i=0; i<pages; i++) { %-->
						<li class="s-pagination__item s-pagination-item <% if ((i + 1) === current) { %> active <% } %>" onclick="this.onchange(<%= (i + 1) %>)"><%= (i + 1) %></li>
					<!--% } %-->
					<!--% if (showNext) { %-->
						<li class="s-pagination__item <%= disableLast %>" onclick="this.next()">
							›
						</li>
					<!--% } %-->
					<!--% if (showLast) { %-->
						<li class="s-pagination__item <%= disableLast %>" onclick="this.last()">
							»
						</li>
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
