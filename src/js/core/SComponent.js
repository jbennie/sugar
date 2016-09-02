import __uncamelize from '../string/uncamelize'
import __camelize from '../string/camelize'
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
	 * _appliedComponentAsTag
	 * Store if the component is applied as a tag
	 * @type 	{Boolean}
	 */
	_appliedComponentAsTag = false;

	/**
	 * _enabled
	 * Track if the component is enabled or not
	 * @type 	{Boolean}
	 */
	_enabled = true;

	/**
	 * _enabledBeforeRemoved
	 * Track if the component was enabled before remove from the dom
	 * @type 	{Boolean}
	 */
	_enabledBeforeRemoved = true;

	/**
	 * Constructor
	 */
	constructor(name, elm, default_settings = {}, settings = {}) {

		// set a uniq component id
		const id = elm.getAttribute('s-component') || __uniqid();
		elm.setAttribute('s-component', id);

		// get the dash name
		let nameDash = __uncamelize(name,'-');

		// check if the component is inited as a tag
		// or as an attribute
		const asTag = elm.tagName.toLowerCase() === nameDash;

		// process shortcuts attributes
		// before init parent class
		// cause the parent class process
		// the attributes
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

		// save some variables
		this._appliedComponentAsTag = asTag;

		// add the instance of this component into the window.sElements stack
		if (this.elementId) {
			window.sElements[this.elementId].components[name] = this;
		}

		// save element reference
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

		// loop on attributes to check is theirs some that are settings
		for (let key in this.attr) {
			if (key.indexOf(this.name) === 0) {
				// get setting name
				const settingName = __camelize(key.substr(this.name.length));
				// if is a setting that does not exist, create it
				if ( ! this.settings[settingName]) {
					this.settings[settingName] = this.attr[key];
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
	_init() {
		setTimeout(() => {
			// init element
			super._init();
		});
	}

	/**
	 * _onAdded
	 * When the component is added to the dom
	 * @return 	{void}
	 */
	_onAdded() {
		// super added
		super._onAdded();
		// enable the component if it was not disabled
		if (this._enabledBeforeRemoved) {
			this.enable();
		}
	}

	/**
	 * _onRemoved
	 * When the component is removed from the dom
	 * @return 	{void}
	 */
	_onRemoved() {
		// track the enable status before removing the element
		this._enabledBeforeRemoved = this._enabled;
		// super onRemoved
		super._onRemoved();
		// disable the component
		this.disable();
	}

	/**
	 * disable
	 */
	disable() {
		this._enabled = false;
		// maintain chainability
		return this;
	}

	/**
	 * enable
	 * Enable the element
	 */
	enable() {
		this._enabled = true;
		// maintain chainability
		return this;
	}

	/**
	 * Destroy routine
	 */
	destroy() {
		if (this._initObserver) {
			this._initObserver.unsubscribe();
		}
		// remove component from the window.sElements stack
		delete window.sElements[this.elementId].components[this.name]
		// disable
		this.disable();
		// destroy in parent
		super.destroy();
	}

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

		// resolve all the init dependencies
		if (this._initDependencies
			&& ! this._initDependenciesResolved) {
			Promise.all(this._initDependencies()).then(() => {
				// set that the dependencies are resolved
				this._initDependenciesResolved = true;
				// relaunch the init proxy
				this._initProxy()
			});
			return;
		}

		// protect multiple init
		if (this.inited) return;
		this.inited = true;

		// init callback
		const cb = this._init.bind(this);

		switch(this.settings.initWhen) {
			case 'visible':
				this._initObserver = querySelectorLive(`[s-element="${this.elementId}"]`).once().visible().subscribe(cb);
			break;
			case 'inViewport':
				this._initObserver = querySelectorLive(`[s-element="${this.elementId}"]`).once().inViewport().subscribe(cb);
			break;
			case 'added':
				this._initObserver = querySelectorLive(`[s-element="${this.elementId}"]`).once().subscribe(cb);
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

	/**
	 * watchSettings
	 * Watch all settings
	 * @param 	{Function} 	callback	The callback to launch when a setting has changed
	 * @return 	{void}
	 */
	watchSettings(cb) {
		let timeout = null;
		let updated = {};
		let oldSettings = null;

		const _watch = (key) => {
			this.watch(`settings.${key}`, (newVal, oldVal) => {
				// add setting to updated stack
				updated[key] = {
					newVal : newVal,
					oldVal, oldVal
				};
				if ( ! oldSettings) {
					oldSettings = Object.assign({}, this.settings);
				}
				clearTimeout(timeout);
				timeout = setTimeout(() => {
					cb(this.settings, oldSettings, Object.assign({}, updated));
					updated = {};
					oldSettings = null;
				});
			});
		}
		// loop on each settings to watch them
		for(let key in this.settings) {
			_watch(key);
		}
	}

	/**
	 * isDisabled
	 * Return if the component is disabled
	 * @return 	{Boolean}		disable status
	 */
	isDisabled() {
		return ! this._enabled;
	}

	/**
	 * isEnabled
	 * Return is the component is enabled
	 * @return 	{Boolean} 		enable status
	 */
	isEnabled() {
		return this._enabled;
	}
}
