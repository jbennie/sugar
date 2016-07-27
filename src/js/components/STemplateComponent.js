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
import SComponent from '../core/SComponent'
import __querySelectorLive from '../dom/querySelectorLive';
import STemplate from '../core/STemplate'

class STemplateComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings, name = 'sTemplate') {
		SComponent.setup(name, type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sTemplate') {
		super(name, elm, {

			/**
			 * data
			 * Store the data object used in to render the template
			 * @type 	{Object}
			 */
			data : {},

			/**
			 * render
			 * The render function to use
			 * @type 	{Function}
			 */
			render : null

		}, settings);

		// init
		this.initProxy(this._init.bind(this));
	}

	/**
	 * Init
	 */
	_init() {
		// make a template with the dom
		this._template = new STemplate(this.elm, this.settings.data, {
			render : this.settings.render
		});
	}
}


// initOn
STemplateComponent.initOn = function(selector, settings = {}) {
	// init the select
	return __querySelectorLive(selector).visible().once().subscribe((elm) => {
		new STemplateComponent(elm, settings);
	});
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.STemplateComponent = STemplateComponent;

// export
export default STemplateComponent;
