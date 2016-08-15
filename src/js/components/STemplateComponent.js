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
import __querySelectorLive from '../dom/querySelectorLive'
import STemplate from '../core/STemplate'
import __insertAfter from '../dom/insertAfter'

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

		// template is the element itself
		let template = this.elm;
		let container = null;

		// ...but is the element is a script
		// if it is, create a div after it that
		// will contain the rendered template
		if (this.elm.nodeName.toString().toLowerCase() === 'script') {
			// the template is the script content
			template = this.elm.innerHTML;
			// create a div after the script to contain the rendered template
			container = document.createElement('div');
			container.classList.add('s-template-container');
			__insertAfter(container, this.elm);
			// remove the script element
			this.elm.parentNode.removeChild(this.elm);
		}

		// make a template with the dom
		this._template = new STemplate(template, this.settings.data, {
			render : this.settings.render
		});

		// if we have a container, append the template into it
		if (container) {
			this._template.appendTo(container);
		}
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
