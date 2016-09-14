import __uncamelize from '../string/uncamelize'
import __camelize from '../string/camelize'
import __upperFirst from '../string/upperFirst'
import __lowerFirst from '../string/lowerFirst'
import __uniqid from '../tools/uniqid'
import __autoCast from '../string/autoCast'
import SElement from './SElement'
import querySelectorLive from '../dom/querySelectorLive'
import __constructorName from '../tools/constructorName'

import sElementsManager from './sElementsManager'

import STemplate from './STemplate'

// store the settings for the different
// components types
let _sugarTypesSettings = {};

class SComponent extends SElement {

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
		autoDestroyTimeout : 5000,

		/**
		 * beforeInit
		 * Callback before the component initialisation
		 * @type 	{Function}
		 */
		beforeInit : null,

		/**
		 * afterInit
		 * Callback after the component initialisation
		 * @type 	{Function}
		 */
		afterInit : null,

		/**
		 * beforeDestroy
		 * Callback before the component is destroyed
		 * @type 	{Function}
		 */
		beforeDestroy : null,

		/**
		 * afterDestroy
		 * Callback after the component has been destroyed
		 * @type 	{Function}
		 */
		afterDestroy : null,

		/**
		 * onAdded
		 * Callback when the element is added to the dom
		 * @type 	{Function}
		 */
		onAdded : null,

		/**
		 * onRemoved
		 * Callback when the element is removed from the dom
		 * @type 	{Function}
		 */
		onRemoved : null,

		/**
		 * onAttached
		 * Callback when the element is attached to the dom
		 * @type 	{Function}
		 */
		onAttached : null,

		/**
		 * onDetached
		 * Callback when the element is detached from the dom
		 * @type 	{Function}
		 */
		onDetached : null,

		/**
		 * onEnabled
		 * Callback when the element has just been enabled
		 * @type 	{Function}
		 */
		onEnabled : null,

		/**
		 * onDisabled
		 * Callback when the element has just been disabled
		 * @type 	{Function}
		 */
		onDisabled : null,

		/**
		 * beforeRender
		 * Callback before the render happens
		 * @type 	{Function}
		 */
		beforeRender : null,

		/**
		 * afterRender
		 * Callback after the render has appened
		 * @type 	{Function}
		 */
		afterRender : null
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
	 * _componentDestroyed
	 * Track if the component has been destroyed
	 * @type 	{Boolean}
	 */
	_componentDestroyed = false;

	_settings2AttributesBindings = {};

	/**
	 * Constructor
	 */
	constructor(name, elm, default_settings = {}, settings = {}) {

		// check arguments
		if ( ! elm.nodeName) {
			console.error('Passed "elm" argument', elm);
			throw `The "elm" argument has to be an HTMLElement but a ${typeof(elm)} has been passed`
		}

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

		// save element reference
		this.componentName = name;
		this.componentNameDash = nameDash;

		// register a component
		sElementsManager.registerComponent(this.elm, this);

		// set the api in the dom element
		// #FIXME check if need this or not...
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

				// set that we want to bind this attribute to the setting object property
				this._settings2AttributesBindings[settingName] = attrName;

				// if the element has not the requested linked attribute, we set it
				if (attrValue === null) {
					const settingValue = this.attr[settingCamelName];
					if (settingValue) {
						this.elm.setAttribute(attrName, settingValue);
						attrValue = settingValue;
					}
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
		this.settings.beforeInit && this.settings.beforeInit(this);
		// init element
		super._init();
		this.settings.afterInit && this.settings.afterInit(this);
	}

	/**
	 * render
	 * Render the html element
	 */
	render() {
		this.settings.beforeRender && this.settings.beforeRender(this);
		super.render();
		this.elm.setAttribute('s-component', true);
		this.settings.afterRender && this.settings.afterRender(this);
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
		// onAdded callback
		this.settings.onAdded && this.settings.onAdded(this);
		// enable the component if it was not disabled
		if (this._componentEnabledBeforeRemoved) {
			this.enable();
		}
		// render
		if ( ! this._isInTemplate) {
			this.render();
		}
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
		// onRemoved callback
		this.settings.onRemoved && this.settings.onRemoved(this);
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
		// onAttached callback
		this.settings.onAttached && this.settings.onAttached(this);
		// enable the component
		if (this._componentEnabledBeforeDetached) {
			this.enable();
		}
		// render
		if ( ! this._isInTemplate) {
			this.render();
		}
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
		// onDetached callback
		this.settings.onDetached && this.settings.onDetached(this);
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
		// onDisabled callback
		this.settings.onDisabled && this.settings.onDisabled(this);
		// maintain chainability
		return this;
	}

	/**
	 * enable
	 * Enable the element
	 */
	enable() {
		this._componentEnabled = true;
		// onEnabled callback
		this.settings.onEnabled && this.settings.onEnabled(this);
		// maintain chainability
		return this;
	}

	/**
	 * Destroy routine
	 */
	destroy() {
		// stop listening for element add and remove
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

		// track the destroyed status
		this._componentDestroyed = true;
	}

	/**
	 * Init bindings
	 */
	_initBindings() {
		// init bindings on SElement
		super._initBindings();

		// bind the attribute to the settings if needed
		for (let attrName in this.attr) {
			if (attrName.indexOf(this.componentName) === 0) {
				const settingName = __lowerFirst(attrName.substr(this.componentName.length));
				this._binder.bindObjectPath2ObjectPath(this, `attr.${attrName}`, this, `settings.${settingName}`);
			}
		}

		// handle the settings that are connected to another
		// attribute through the @attrName notation
		// for(let key in this._settings2AttributesBindings) {
		// 	const attrName = this._settings2AttributesBindings[key];
		// 	this._binder.bindObjectPath2ObjectPath(this, `attr.${attrName}`, this, `settings.${key}`);
		// }
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
				setTimeout(cb.bind(this));
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
	 * isDestroyed
	 * Return if the component has been destroyed
	 * @return 	{Boolean} 		destroyed status
	 */
	isDestroyed() {
		return this._componentDestroyed;
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

// STemplate integration
STemplate.registerComponentIntegration('SComponent', (component) => {
	STemplate.keepAttribute(component.elm, 's-component');
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SComponent = SComponent;

// export modules
export default SComponent;
