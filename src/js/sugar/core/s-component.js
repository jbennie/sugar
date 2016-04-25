import sTools from './s-tools'
import sString from './s-string'
import sDom from './s-dom'
import SElement from './s-element'
import SWatchable from '../mixins/s-watchable'
import SMixin from './s-mixin'

// store the settings for the different
// components types
let _sugarTypesSettings = {};

export default class SComponent extends SElement {

	/**
	 * Setup
	 */
	static setup(name, type, settings) {
		if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		_sugarTypesSettings[name][type] = settings;
	}

	/**	
	 * Constructor
	 */
	constructor(name, elm, default_settings = {}, settings = {}) {

		// init parent
		super(elm);

		// save element reference
		this.elm = elm;
		this.name = name;
		this.name_dash = sString.uncamelize(this.name);
		// extend settings
		this.settings = {...default_settings, ...settings};

		// check if the main data attribute is an object to extend the settings
		let set = this.elm.getAttribute('data-' + this.name_dash);
		if (set && typeof(set) == 'object') {
			this.settings = {...this.settings, ...set};
		} 

		// try to find the setting with the @ sign as value
		for (let settingName in this.settings) {
			if (this.settings[settingName] == '@') {
				this.settings[settingName] = this.elm.getAttribute('data-'+this.name_dash);
			}
		}

		// set the api in the dom element
		this.elm[this.name] = this;

		// check if a type is defined then extend the settings
		if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		let type = this.settings.settings;
		if (type && _sugarTypesSettings[name][type]) {
			this.settings = {...this.settings, ..._sugarTypesSettings[name][type]};
		}

		// extend settings from attributes
		[].forEach.call(this.elm.attributes, (attr) => {
			// check if need to update the settings
			let attrName = attr.name.replace('data-','').replace(this.name_dash,'');
			const name = sString.camelize(attrName);
			if (this.settings[name] !== undefined) {
				// get the old value
				const oldValue = this.settings[name];
				// set the new value
				this.set(`settings.${name}`, this.elm.getAttribute(attrName));
			}
		});	
	}
}