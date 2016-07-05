import __uncamelize from '../string/uncamelize'
import __upperFirst from '../string/upperFirst'
import __autoCast from '../string/autoCast'
import SElement from './SElement'

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
		let nameDash = __uncamelize(name,'-');
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

		// set the api in the dom element
		this.elm[this.name] = this;

		// this.coco = {
		// 	hello : {
		// 		jaja : 'youhou',
		// 		world : 'tuptudup'
		// 	}
		// };

		// make name watchable
		// this.watchable('name');
		// this.watchable('coco.hello.world');

		// let hello = this.coco.hello;
		// Object.defineProperty(this.coco, 'hello', {
		// 	get : () => hello,
		// 	set : (value) => {
		// 		hello = value;
		// 	}
		// });

		// this.watch('coco.hello', (newVal, oldVal) => {
		// 	console.log('YOPYOP', newVal, oldVal);
		// });

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
		let set = __autoCast(this.elm.getAttribute('data-' + this.name_dash) || this.elm.getAttribute(this.name_dash));
		if (set && typeof(set) == 'object') {
			this.settings = {...this.settings, ...set};
		}

		// try to find the setting with the @ sign as value
		let connectSettingToAttribute = {};
		let connectAttributeToAttribute = {};
		for (let settingName in this.settings) {
			const setting = this.settings[settingName];
			if (setting == '@') {
				this.settings[settingName] = set;
			} else if (typeof(setting) === 'string' && setting.substr(0,1) === '@') {
				// set the setting to the attribute value
				const attrName = setting.substr(1);
				// check that the element has the requested attribute
				if (this.elm.getAttribute(attrName) !== undefined)
				{
					this.settings[settingName] = this.elm.getAttribute(attrName);

					// connect the linked setting to the setting attribute
					// if the attribute exist
					if (this.elm.getAttribute(this.name_dash + '-' + attrName) !== null) {
						this.bind(attrName, `attr.${this.name + __upperFirst(settingName)}`);
					}

					// pluginNameProperty => settings.settingName
					this.bind(this.name + __upperFirst(settingName), `settings.${settingName}`);
					this.bind(attrName, `settings.${settingName}`);
					this.bind(this.name + __upperFirst(settingName), `attr.${attrName}`);

					// this.bind(attrName, `attr.${attrName}`);
					// set that we need to connect this setting to the attribute
					// connectSettingToAttribute = {
					// 	...connectSettingToAttribute,
					// 	[settingName] : attrName
					// };
				}
				// connectAttributeToAttribute = {
				// 	...connectAttributeToAttribute,
				// 	[this.name + __upperFirst(settingName)] : attrName
				// };
			} else {
				this.bind(this.name + __upperFirst(settingName), `settings.${settingName}`);
			}
		}

		// connect settings to attribute
		// for(const settingName in connectSettingToAttribute) {
		// 	const attrName = connectSettingToAttribute[settingName];
		// 	console.log('connect', attrName, 'to', settingName);
		// 	// connect the attribute to the setting
		// 	this.bind(attrName, `settings.${settingName}`);
		// }

		//
		// // check if a type is defined then extend the settings
		// if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		// let type = this.settings.settings;
		// if (type && _sugarTypesSettings[name][type]) {
		// 	this.settings = {...this.settings, ..._sugarTypesSettings[name][type]};
		// }
		//
		// // watch attributes to update settings accordingly
		// for(const name in this.settings) {
		// 	// check if has a different value in the attributes
		// 	const attrName = this.name + __upperFirst(name);
		// 	if (this.attr[attrName] !== undefined) {
		// 		this.settings[name] = this.attr[attrName];
		// 	} else {
		// 		this.attr[attrName] = null;
		// 	}
		//
		// 	// check if the setting is connected to an attribute
		// 	if (connectSettingToAttribute[name])
		// 	{
		// 		// we need to set the attribute is not already exist on the element
		// 		if (this.elm.getAttribute(name) === null)
		// 		{
		// 			// set the new attribute on the element with the good value
		// 			this.elm.setAttribute(name, this.settings[name]);
		// 			// register new attribute
		// 			this._newAttribute(name, this.settings[name]);
		// 		}
		// 	}
		//
		// 	// connect attributes to settings
		// 	for(const settingName in connectSettingToAttribute) {
		// 		const attrName = connectSettingToAttribute[settingName];
		// 		console.log('attrName', attrName);
		// 		if (this.attr[attrName] !== undefined) {
		// 			this.watch(`attr.${attrName}`, (newVal, oldVal) => {
		// 				console.log('update the attribute', attrName, newVal);
		// 				// update the setting
		// 				this.settings[settingName] = newVal;
		// 			});
		// 		}
		// 	}
		//
		// 	// watch settings attributes
		// 	this.watch(`attr.${attrName}`, (newVal, oldVal) => {
		// 		// update the setting
		// 		this.settings[name] = newVal;
		// 	});
		// }
		//
		// // watch all connected attribute to attribute
		// for(const attrName in connectAttributeToAttribute) {
		// 	const toAttrName = connectAttributeToAttribute[attrName];
		// 	this.watch(`attr.${attrName}`, (newVal, oldVal) => {
		// 		this.attr[toAttrName] = newVal;
		// 	});
		// }

	}
}
