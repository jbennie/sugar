import __uncamelize from '../string/uncamelize'
import __upperFirst from '../string/upperFirst'
import __lowerFirst from '../string/lowerFirst'
import __uniqid from '../tools/uniqid'
import __autoCast from '../string/autoCast'
import SElement from './SElement'
import querySelectorLive from '../dom/querySelectorLive'

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
	 * Constructor
	 */
	constructor(name, elm, default_settings = {}, settings = {}) {

		// set a uniq component id
		elm.setAttribute('s-component', __uniqid());

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
				let attrValue = __autoCast(this.elm.getAttribute(attrName));

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
				}
			} else {
				// get the setting from the element attributes
				const settingAttrValue = __autoCast(this.elm.getAttribute(settingAttrName));
				if (settingAttrValue !== null) {
					this.settings[settingName] = settingAttrValue;
				}
			}
		}

		// init bindings AFTER all the settings and attributes are correctly
		// inited
		this._initBindings();

		// init proxy
		this._initProxy();
	}

	/**
	 * Init component
	 */
	init() {}

	/**
	 * Init bindings
	 */
	_initBindings() {
		// init bindings on SElement
		super._initBindings();

		for (let attrName in this.attr) {
			// bind the attribute to the settings if needed
			//
			if (attrName.indexOf(this.name) === 0) {
				const settingName = __lowerFirst(attrName.substr(this.name.length));
				this._binder.bindObjectPath2ObjectPath(this, `attr.${attrName}`, this, `settings.${settingName}`);
			}
		}
	}

	/**
	 * Init proxy
	 */
	_initProxy() {

		// protect multiple init
		if (this.inited) return;
		this.inited = true;

		// init callback
		const cb = this.init.bind(this);

		switch(this.settings.initWhen) {
			case 'visible':
				querySelectorLive(`[s-element="${this.uniqid}"]`).once().visible().subscribe(cb);
			break;
			case 'inViewport':
				querySelectorLive(`[s-element="${this.uniqid}"]`).once().inViewport().subscribe(cb);
			break;
			case 'added':
				querySelectorLive(`[s-element="${this.uniqid}"]`).once().subscribe(cb);
			break;
			case 'hover':
				function clickHandler(e) {
					const id = e.target.getAttribute('s-element');
					if (e.target === this.elm) {
						cb();
						document.removeEventListener('mouseover', clickHandler.bind(this));
					}
				}
				document.addEventListener('mouseover', clickHandler.bind(this));
			break;
			case 'click':
				function clickHandler(e) {
					const id = e.target.getAttribute('s-element');
					if (e.target === this.elm) {
						cb();
						document.removeEventListener('click', clickHandler.bind(this));
					}
				}
				document.addEventListener('click', clickHandler.bind(this));
			break;
			default:
				setTimeout(() => { cb(); });
			break;
		}
	}
}
