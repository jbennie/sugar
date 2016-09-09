import __uncamelize from '../string/uncamelize'
import __camelize from '../string/camelize'
import __upperFirst from '../string/upperFirst'
import __lowerFirst from '../string/lowerFirst'
import __uniqid from '../tools/uniqid'
import __autoCast from '../string/autoCast'
import SElement from './SElement'
import querySelectorLive from '../dom/querySelectorLive'

import sElementsManager from './sElementsManager'

// store the settings for the different
// components types
let _sugarTypesSettings = {};

// create the _components stack in sugar global variable
window.sugar._components = {};

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

		/**
		 * initWhen
		 * Define when the component has to be
		 * initiated. It can be 'visible', 'inViewport', 'added', 'hover', 'click'
		 * @type {String}
		 */
		initWhen : null,

		/**
		 * autoDestroyTimeout
		 * Define after how many time the component has to destroy itself
		 * That starts when the component is not in the
		 * dom of has been detached
		 * -1 meand no auto destroy
		 * @type 	{Number}
		 */
		autoDestroyTimeout : 5000
	};

	/**
	 * componentId
	 * Store the component uniqid
	 * @type 	{String}
	 */
	componentId = null;

	/**
	 * componentName
	 * Store the name of the component in camelcase format
	 * @type 	{String}
	 */
	componentName = null;

	/**
	 * componentNameDash
	 * Store the name of the component in dash format 's-date-...'
	 * @type 	{String}
	 */
	componentNameDash = null;

	/**
	 * _componentAutoDestroyTimeout
	 * Store the auto destroy timeout
	 * @type 	{Number}
	 */
	_componentAutoDestroyTimeout = null;

	/**
	 * _componentAppliedComponentAsTag
	 * Store if the component is applied as a tag
	 * @type 	{Boolean}
	 */
	_componentAppliedComponentAsTag = false;

	/**
	 * _componentInited
	 * Track if the component is already inited or not
	 * @type 	{Boolean}
	 */
	_componentInited = false;

	/**
	 * _componentEnabled
	 * Track if the component is enabled or not
	 * @type 	{Boolean}
	 */
	_componentEnabled = true;

	/**
	 * _componentEnabledBeforeRemoved
	 * Track if the component was enabled before remove from the dom
	 * @type 	{Boolean}
	 */
	_componentEnabledBeforeRemoved = true;

	/**
	 * Constructor
	 */
	constructor(name, elm, default_settings = {}, settings = {}) {

		// set on the element that it is now a component
		elm.setAttribute('s-component', true);

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



		// set a uniq component id
		this.componentId = __uniqid();

		// save some variables
		this._componentAppliedComponentAsTag = asTag;

		// // add the instance in the sugar._components stack
		// const inStackComponent = window.sugar._components.get(this.elm);
		// if ( ! inStackComponent) {
		// 	inStackComponent = {};
		// }
		// // save into component
		// inStackComponent[this.name] = this;

		// save element reference
		this.componentName = name;
		this.componentNameDash = nameDash;

		// register a component
		sElementsManager.registerComponent(this.elm, this);

		// set the api in the dom element
		this.elm[this.componentName] = this;

		// extend settings values
		this.settings = { ...this.settings, ...default_settings, ...settings };

		// check if the main data attribute is an object to extend the settings
		let set = __autoCast(this.elm.getAttribute('data-' + this.componentNameDash) || this.elm.getAttribute(this.componentNameDash));
		if (set && typeof(set) == 'object') {
			this.settings = {...this.settings, ...set};
		}

		// try to find the setting with the @ sign as value
		for (let settingName in this.settings) {

			const settingAttrName = this.componentNameDash + '-' + __uncamelize(settingName);
			const settingCamelName = this.componentName + __upperFirst(settingName);

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
			if (key.indexOf(this.componentName) === 0) {
				// get setting name
				const settingName = __camelize(key.substr(this.componentName.length));
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
		// init element
		super._init();
	}

	/**
	 * _render
	 * Render the html element
	 */
	_render() {
		this.elm.setAttribute('s-component', true);
		if (this.elementId) {
			this.elm.setAttribute('s-element', this.elementId);
		}
	}

	/**
	 * _onAdded
	 * When the component is added to the dom
	 * @return 	{void}
	 */
	_onAdded() {
		// super added
		super._onAdded();
		// clear the destroy timeout
		clearTimeout(this._componentAutoDestroyTimeout);
		// enable the component if it was not disabled
		if (this._componentEnabledBeforeRemoved) {
			this.enable();
		}
		// render
		this._render();
	}

	/**
	 * _onRemoved
	 * When the component is removed from the dom
	 * @return 	{void}
	 */
	_onRemoved() {
		// track the enable status before removing the element
		this._componentEnabledBeforeRemoved = this._componentEnabled;
		// super onRemoved
		super._onRemoved();
		// disable the component
		this.disable();
		// autoDestroy
		this._autoDestroy();
	}

	/**
	 * _onAttached
	 * When the element is added to the dom but was living
	 * in another element in memory and that the _onAdded method
	 * has already been trigerred
	 * @return 	{void}
	 */
	_onAttached() {
		// if the element has not been already
		// added to the DOM, or that it has been
		// removed and not live anymore in any other DOM elements
		// stop here
		if ( ! this._added) return;
		// clear the destroy timeout
		clearTimeout(this._componentAutoDestroyTimeout);
		// super _onAttached
		super._onAttached();
		// enable the component
		if (this._componentEnabledBeforeDetached) {
			this.enable();
		}
		// render
		this._render();
	}

	/**
	 * _onDetached
	 * When the element is not anymore in the current page
	 * but still lives in another element in memory
	 * @return 	{void}
	 */
	_onDetached() {
		// track the enable status before removing the element
		this._componentEnabledBeforeDetached = this._componentEnabled;
		// super onDetached
		super._onDetached();
		// disable the component
		this.disable();
		// autoDestroy
		this._autoDestroy();
	}

	/**
	 * _autoDestroy
	 * Destroy the component after a certain time
	 * that it's not anymore in the dom
	 * @return 	{void}
	 */
	_autoDestroy() {
		if (this.settings.autoDestroyTimeout === -1) return;
		// clean the timeout
		clearTimeout(this._componentAutoDestroyTimeout);
		this._componentAutoDestroyTimeout = setTimeout(() => {
			this.destroy();
		}, this.settings.autoDestroyTimeout);
	}

	/**
	 * disable
	 */
	disable() {
		this._componentEnabled = false;
		// maintain chainability
		return this;
	}

	/**
	 * enable
	 * Enable the element
	 */
	enable() {
		this._componentEnabled = true;
		// maintain chainability
		return this;
	}

	/**
	 * Destroy routine
	 */
	destroy() {

		console.warn('destroy', this);

		if (this._initObserver) {
			this._initObserver.unsubscribe();
		}
		// clear the timeout
		clearTimeout(this._componentAutoDestroyTimeout);

		// unregister the component from element
		sElementsManager.unregisterComponent(this.elm, this);

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
			if (attrName.indexOf(this.componentName) === 0) {
				const settingName = __lowerFirst(attrName.substr(this.componentName.length));
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
		if (this._componentInited) return;
		this._componentInited = true;

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
		return ! this._componentEnabled;
	}

	/**
	 * isEnabled
	 * Return is the component is enabled
	 * @return 	{Boolean} 		enable status
	 */
	isEnabled() {
		return this._componentEnabled;
	}
}
