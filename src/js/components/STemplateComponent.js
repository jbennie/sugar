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
import __outerHTML from '../dom/outerHTML'
import __dispatchEvent from '../dom/dispatchEvent'
import __closest from '../dom/closest'
import __matches from '../dom/matches'
import __uniqid from '../tools/uniqid'

class STemplateComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings, name = 'sTemplate') {
		SComponent.setup(name, type, settings);
	}

	templateSettings = null;

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

		}, settings);

		this.elm.sTemplateComponent = this;

		// init
		this.initProxy(this._init.bind(this));
	}

	/**
	 * Init
	 */
	_init() {

		document.createElement('yield');

		const id = __uniqid();
		this.elm.setAttribute('s-template-component', id);

		console.warn('set');

		setTimeout(() => {
			// init the template only if it is not nested in
			// another one...
			if ( ! __matches(this.elm, `[s-template-component] [s-template-component="${id}"]`)) {
				this._internalRender();
			}
		});
	}

	/**
	 * Internal render
	 */
	_internalRender() {

		if (this.elm.sTemplateInited) {
			this.render();
			return;
		}
		this.elm.sTemplateInited = true;

		// template is the element itself
		let template = null;

		// manage template settings to make a dom element with it
		// only once
		if (this.templateSettings === null && typeof(this.settings.template) === 'string') {
			const cont = document.createElement('div');
			cont.innerHTML = this.settings.template;
			this.templateSettings = cont;
		}

		// ...but is the element is a script
		// if it is, create a div after it that
		// will contain the rendered template
		if (this.elm.nodeName.toString().toLowerCase() === 'script') {
			// the template is the script content
			template = `<div>${this.elm.innerHTML}</div>`;
		} else if (this.elm.nodeName !== undefined) {
			template = this.elm;
			// template = __outerHTML(this.elm).replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&');
		}

		// if we have any template from settings
		// we assume that the template in the html are
		// contents of the setting template
		if (this.templateSettings && template) {

			let cont = template;

			if (typeof(template) === 'string') {
				// create a new container to convert the string to html elements
				const cont = document.createElement('div');
				cont.innerHTML = template;
			}

			const yields = cont.querySelectorAll('[yield]');

			// if some yields, loop on each
			if (yields.length) {
				[].forEach.call(yields, (y) => {
					//  is an id
					const id = y.getAttribute('yield');
					if (id) {
						// replace the yields
						const yToReplace = this.templateSettings.querySelector(`[yield="${id}"]`);
						if (yToReplace) {
							__insertAfter(y, yToReplace);
							yToReplace.parentNode.removeChild(yToReplace);
						}
					} else {
						const yToReplace = this.templateSettings.querySelector('[yield]');
						if (yToReplace) {
							__insertAfter(y, yToReplace);
							yToReplace.parentNode.removeChild(yToReplace);
						}
					}
				});
			}
			template = this.templateSettings;
		} else if ( this.templateSettings && ! template) {
			template = this.templateSettings;
		}

		// check if no template specified
		if ( ! template) {
			throw "You have to specify a template either by setting up the settings.template variable, by initiating this component on a 'script' tag or on any html element like a 'div' or something...";
		}

		// make a template with the dom
		this._template = new STemplate(template, this.settings.data, {
			compile : this.settings.compile
		});

		// if we have a container, append the template into it
		if ( ! template.nodeName || ! template.parentNode) {
			__insertAfter(this._template.dom, this.elm);
			// remove the element itself
			this.elm.parentNode.removeChild(this.elm);
		}

		// render
		this.render();
	}


	/**
	 * Render
	 */
	render() {
		// render the template
		this._template.render();
	}

	/**
	 * Watch shortcut
	 */
	watch(what, cb) {
		setTimeout(() => {
			this._template.watcher.watch(this.settings.data, what, cb);
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
