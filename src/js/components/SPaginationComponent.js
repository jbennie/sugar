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

			/**
			 * data
			 * The data used by the template
			 * @type 	{Object}
			 */
			data : {
				total : 10,
				current : 1
			},

			compile : (template, data) => {
				console.log('CPOMPILE');
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
				<ol class="pagination">
					<!--% for(i=0; i<total; i++) { %-->
						<li onclick="<%= onchange %>"><%= (i + 1) %></li>
					<!--% } %-->
				</ol>
			`,

			// extend with passed settings
			...settings
		}, name);

		console.log('SSSSSS', this.settings);

	}

	/**
	 * Compile overrided method
	 */
	// compile(template, data) {
	//
	// }

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
