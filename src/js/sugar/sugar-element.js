import { uncamelize } from './sugar-tools'
import sDom from './sugar-dom'
let _upperfirst = require('lodash/upperfirst');

// store the settings for the different
// components types
let _sugarTypesSettings = {};

export default class SugarElement {

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
		// save element reference
		this.elm = elm;
		this.name = name;
		// extend settings
		this.settings = {...default_settings, ...settings};

		// set the api in the dom element
		this.elm[this.name] = this;

		// check if a type is defined then extend the settings
		if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		let type = this.setting('settings');
		if (type && _sugarTypesSettings[name][type]) {
			this.settings = {...this.settings, ..._sugarTypesSettings[name][type]};
		}
	}

	/**
	 * Setting
	 */
	setting(key) {
		// check in the dataset
		let s = this.dataset(this.name+_upperfirst(key));
		if (s == 'false') s = false;
		if (s != undefined) return s;
		// return the settings
		return this.settings[key];
	}

	/**
	 * Access dataset
	 */
	dataset(key, value = null, elm = this.elm) {
		return sDom.dataset(elm, key, value);
	}

	/**
	 * Classes helpers
	 */
	hasClass(cls, elm = this.elm) {
		return sDom.hasClass(elm, cls);
	}
	addClass(cls, elm = this.elm) {
		return sDom.addClass(elm, cls);
	}
	removeClass(cls, elm = this.elm) {
		return sDom.removeClass(elm, cls);
	}
}