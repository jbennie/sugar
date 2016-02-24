import { uncamelize } from './sugar-tools'
import sDom from './sugar-dom'
let _upperfirst = require('lodash/upperfirst');
let _lowerfirst = require('lodash/lowerfirst');

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

		// check if the main data attribute is an object to extend the settings
		let set = this.setting('');
		if (set && typeof(set) == 'object') {
			this.settings = {...this.settings, ...set};
		} 

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
		let key_string = this.name + _upperfirst(key);
		key_string = key_string.replace(_upperfirst(key)+_upperfirst(key),_upperfirst(key));
		let s = this.dataset(_lowerfirst(key_string));

		// process the value
		if (s == 'false'
			|| s == 'true'
			|| (typeof(s) == 'string' && s.substr(0,1) == '[')
			|| ! isNaN(s)) {
			s = eval(s);
		} else if (typeof(s) == 'string' && s.substr(0,1) == '{') {
			s = eval('('+s+')');
		}

		// if we didn't find any setting in dataset,
		// get the one from the actual settings property
		if ( ! s) {
			s = this.settings[key];
		}

		// check if the setting begin by @
		// mean that it's an alias of another setting
		if (typeof(s) == 'string' && s.substr(0,1) == '@') {
			let key = s.substr(1);
			// return the alias property
			return this.setting(key);
		}

		// return the settings
		return s;
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