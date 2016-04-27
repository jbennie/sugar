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
	 * Settings
	 */
	settings = {};

	/**
	 * Settings values
	 */
	_settingsValues = {};

	/**
	 * Old settings values
	 */
	_previousSettingsValues = {};

	/**	
	 * Constructor
	 */
	constructor(name, elm, default_settings = {}, settings = {}) {

		// process shortcuts attributes
		// before init parent class
		// cause the parent class process
		// the attributes
		let nameDash = sString.uncamelize(name,'-');
		let isCurrentComponentSetting = false;
		let attrsToRemove = [];
		[].forEach.call(elm.attributes, (attr) => {
			// check if need to update the settings
			if (attr.name == nameDash) {
				isCurrentComponentSetting = true;
			} else {
				if (isCurrentComponentSetting && attr.name.substr(0,1) == '-') {
					// remove the attribute and set the new complete one
					attrsToRemove.push(attr.name);
					// set the new attribute
					elm.setAttribute(`${nameDash}${attr.name}`, attr.value);
				} else {
					// it's no more the same component
					isCurrentComponentSetting = false;
				}
			}
		});
		// remove the unwanted attributes
		attrsToRemove.forEach((attrName) => {
			elm.removeAttribute(attrName);
		});


		// init parent
		super(elm);

		// save element reference
		this.elm = elm;
		this.name = name;
		this.name_dash = nameDash;

		this.coco = {
			hello : {
				jaja : 'youhou',
				world : 'tuptudup'
			}
		};

		// make name watchable
		// this.watchable('name');
		// this.watchable('coco.hello.world');

		let hello = this.coco.hello;
		Object.defineProperty(this.coco, 'hello', {
			get : () => hello,
			set : (value) => {
				hello = value;
			}
		});

		this.watch('coco.hello', (newVal, oldVal) => {
			console.log('YOPYOP', newVal, oldVal);
		});

		// this.watch('elm.style.display', (newVal, oldVal) => {
		// 	console.log('update elm.style.display', newVal, oldVal);
		// });
		// this.watch('elm.style.display', (newVal, oldVal) => {
		// 	console.log('NEW NEW NEW update elm.style.display', newVal, oldVal);
		// });
		



		// setTimeout(() => {
			// this.coco.hello = 'yooooooppppppp';
			// this.elm.style.display = 'none';
			// // console.log('new element', this.elm);
			// // console.log('new display', this.elm.style.display);
			// setTimeout(() => {
			// 	this.elm.style.display = 'block';
			// }, 4000);
		// }, 500);

		// console.log('MY COCO', this.coco);

		// // this.coco.hello = 'coucou';
		// // this.coco.hello = 'haha';

		// console.log('HHHHHH', this.coco.hello);

		// extend settings values
		this.settings = { ...default_settings, ...settings };

		// // preparing all the settings accessors
		// for(const name in default_settings) {
		// 	// new setting
		// 	this._newSetting(name);
		// }

		// check if the main data attribute is an object to extend the settings
		let set = sString.autoCast(this.elm.getAttribute('data-' + this.name_dash) || this.elm.getAttribute(this.name_dash));
		if (set && typeof(set) == 'object') {
			this.settings = {...this.settings, ...set};
		}

		// try to find the setting with the @ sign as value
		for (let settingName in this.settings) {
			if (this.settings[settingName] == '@') {
				this.settings[settingName] = set;
			}
		}

		// check if a type is defined then extend the settings
		if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		let type = this.settings.settings;
		if (type && _sugarTypesSettings[name][type]) {
			this.settings = {...this.settings, ..._sugarTypesSettings[name][type]};
		}

		// watch attributes to update settings accordingly
		for(const name in this.settings) {
			// check if has a different value in the attributes
			// console.log('name', name);
			const attrName = this.name + sString.upperFirst(name);
			if (this.attr[attrName] !== undefined) {
				this.settings[name] = this.attr[attrName];
			} else {
				this.attr[attrName] = null;
			}

			// add the property if not exist
			// if ( ! this.attr[attrName])

			// watch settings attributes
			this.watch(`attr.${attrName}`, (newVal, oldVal) => {
				// update the setting
				this.settings[name] = newVal;
			});
		}
	}

	/**
	 * New setting
	 */
	// _newSetting(name) {
	// 	// make only if not exist already
	// 	if (this.settings.hasOwnProperty[name]) return name;

	// 	// define new property on the attr
	// 	Object.defineProperty(this.settings, name, {
	// 		get : () => this._settingsValues[name],
	// 		set : (value) => {
	// 			// cast value
	// 			value = sString.autoCast(value);
	// 			// save the old value
	// 			// let previousValue = this._previousSettingsValues[name] = this.settings[name];
	// 			this._settingsValues[name] = value;
	// 			// notify of new value
	// 			// this.notify(`settings.${name}`, value, previousValue);
	// 			// this.notify('settings', this._settingsValues, this._previousSettingsValues);
	// 		},
	// 		enumarable : true
	// 	});
	// 	return name;
	// }
}