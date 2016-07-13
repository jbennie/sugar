import __uncamelize from '../string/uncamelize'
import __upperFirst from '../string/upperFirst'
import __autoCast from '../string/autoCast'
import SElement from './SElement'
import querySelectorLiveOnce from '../dom/querySelectorLiveOnce'
import querySelectorVisibleLiveOnce from '../dom/querySelectorVisibleLiveOnce'
import querySelectorViewportVisibleLiveOnce from '../dom/querySelectorViewportVisibleLiveOnce'

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
	settings = {
		initWhen : null
	};

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

		// extend settings values
		this.settings = { ...this.settings, ...default_settings, ...settings };

		// check if the main data attribute is an object to extend the settings
		let set = __autoCast(this.elm.getAttribute('data-' + this.name_dash) || this.elm.getAttribute(this.name_dash));
		if (set && typeof(set) == 'object') {
			this.settings = {...this.settings, ...set};
		}

		// try to find the setting with the @ sign as value
		let connectSettingToAttribute = {};
		let connectAttributeToAttribute = {};
		for (let settingName in this.settings) {

			const settingAttrName = this.name_dash + '-' + __uncamelize(settingName);
			const settingCamelName = this.name + __upperFirst(settingName);

			const setting = this.settings[settingName];
			if (setting == '@') {
				this.settings[settingName] = set;
			} else if (typeof(setting) === 'string' && setting.substr(0,1) === '@') {
				// set the setting to the attribute value
				const attrName = setting.substr(1);
				let attrValue = this.elm.getAttribute(attrName);

				// if the element has not the requested linked attribute, we set it
				if ( ! attrValue) {
					const settingValue = this.attr[settingCamelName];
					this.elm.setAttribute(attrName, settingValue);
					attrValue = settingValue;
				}

				// check that the element has the requested attribute
				if (attrValue !== undefined)
				{
					this.attr[attrName] = attrValue;
					this.settings[settingName] = attrValue;

					// connect the linked setting to the setting attribute
					// if the attribute exist
					if (this.elm.getAttribute(this.name_dash + '-' + attrName) !== null) {
						this.binder.bindObjectPath2ElementAttribute(this, `attr.${settingCamelName}`, this.elm, attrName);
					}
					this.binder.bindObjectPath2ElementAttribute(this, `settings.${settingName}`, this.elm, settingCamelName);
					this.binder.bindObjectPath2ElementAttribute(this, `settings.${settingName}`, this.elm, attrName);
					this.binder.bindObjectPath2ElementAttribute(this, `attr.${attrName}`, this.elm, settingCamelName);
				}
			} else {
				const settingAttrValue = this.elm.getAttribute(settingAttrName);
				if (settingAttrValue !== null) {
					this.settings[settingName] = settingAttrValue;
				}
				this.binder.bindObjectPath2ElementAttribute(this, `settings.${settingName}`, this.elm, settingCamelName);
			}
		}

		// console.log('THIS', this);
	}

	/**
	 * Init proxy
	 */
	initProxy(cb) {

		switch(this.settings.initWhen) {
			case 'visible':
				querySelectorVisibleLiveOnce(`[data-s-element-id="${this.uniqid}"]`, cb);
			break;
			case 'viewportVisible':
				querySelectorViewportVisibleLiveOnce(`[data-s-element-id="${this.uniqid}"]`, cb);
			break;
			case 'added':
				querySelectorLiveOnce(`[data-s-element-id="${this.uniqid}"]`, cb);
			break;
			case 'click':
				function clickHandler(e) {
					const id = e.target.getAttribute('data-s-element-id');
					if (e.target === this.elm) {
						cb();
						document.removeEventListener('click', clickHandler.bind(this));
					}
				}
				document.addEventListener('click', clickHandler.bind(this));
			break;
			default:
				cb();
			break;
		}
	}
}
