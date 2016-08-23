import STemplateComponent from './STemplateComponent'
import querySelectorLive from '../dom/querySelectorLive'
import _template from 'lodash/template'

class SPaginationComponent extends STemplateComponent {

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sPagination') {
		super(elm, {

			onchange : null,

			pages : 0,

			current : 1,

			/**
			 * data
			 * The data used by the template
			 * @type 	{Object}
			 */
			data : {
				pages : '@settings.pages',
				current : '@settings.current',
				onchange : '@settings.onchange'
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
				<ol class="s-pagination">
					<!--% for(i=0; i<pages; i++) { %-->
						<li class="s-pagination__item s-pagination-item <% if ((i + 1) === current) { %> active <% } %>" onclick="this.onchange(<%= (i + 1) %>)"><%= (i + 1) %></li>
					<!--% } %-->
				</ol>
			`,

			// extend with passed settings
			...settings
		}, name);
	}
}

// initOn
SPaginationComponent.initOn = function(selector, settings = {}) {
	// init the select
	return querySelectorLive(selector).visible().once().subscribe((elm) => {
		new SPaginationComponent(elm, settings);
	});
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SPaginationComponent = SPaginationComponent;

// export
export default SPaginationComponent;
