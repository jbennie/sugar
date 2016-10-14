import __uncamelize from '../utils/string/uncamelize'
import __camelize from '../utils/string/camelize'
import __upperFirst from '../utils/string/upperFirst'
import __lowerFirst from '../utils/string/lowerFirst'
import __uniqid from '../utils/uniqid'
import __autoCast from '../utils/string/autoCast'
import SElement from './SElement'
import querySelectorLive from '../dom/querySelectorLive'
import __constructorName from '../utils/objects/constructorName'
import sSettings from './sSettings'
import sElementsManager from './sElementsManager'
import STemplate from './STemplate'

// store the settings for the different
// components types
let _sugarTypesSettings = {};

/**
 * @class 		SComponent 		{SElement}
 * This class allows to wrap an HTMLElement with a lot of useful features like:
 * - Settings management through API and element attributes
 * - Keep in sync element attributes with this.attr property
 * - Complete and powerfull lifecycle management
 *  	- When the component is added : `_onAdded`
 *  	- The component is bein inited : `_init`
 *  	- The component is bein enabled : `enable`
 *  	- Life of your component...
 *  	- The component is destroyed : `destroy`
 *  		- Either by calling manually the `destroy` method...
 *  		- ...or when the component is not in the dom anymore since the settings.autoDestroyTimeout
 *  	- The component is bein disabled : `disable`
 *  - Watch some component property through a simple `watch` method
 *  - Watch any settings update through the simple `watchSettings` method
 *  - And more...
 *
 * @example 	js
 * // create a new component
 * class myComponent extends SComponent {
 * 		constructor(elm, settings = {}, name = 'myComponent') {
 * 			super(name, elm, {
 * 				myCoolSettings : true
 * 			}, settings)
 * 		}
 * 		_init() {
 * 			super._init();
 * 			// do something when my component is inited
 * 		}
 * 		_onAdded() {
 * 			super._onAdded();
 * 			// do something when my component is added to the dom
 * 		}
 * 		enable() {
 * 			// do something when my component is enabled
 * 			super.enable();
 * 		}
 * 		disable() {
 * 			// do something when my component is disabled
 * 			super.disable();
 * 		}
 * 		destroy() {
 * 			// handle the destroy routine of my component
 * 			super.destroy();
 * 		}
 * 		// my component methods here...
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
class SComponent extends SElement {

	// static setup(name, type, settings) {
	// 	if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
	// 	_sugarTypesSettings[name][type] = settings;
	// }

	/**
	 * Store the component settings
	 * @type 		{Object}
	 */
	settings = {

		/**
		 * Define when the component has to be
		 * initiated. It can be 'visible', 'inViewport', 'added', 'hover', 'click'
		 * @setting
		 * @type	{String}
		 */
		initWhen : null,

		/**
		 * Define after how many time the component has to destroy itself
		 * That starts when the component is not in the
		 * dom of has been detached
		 * -1 meand no auto destroy
		 * @setting
		 * @type 	{Number}
		 */
		autoDestroyTimeout : 5000,

		/**
		 * Callback before the component initialisation
		 * @setting
		 * @type 	{Function}
		 */
		beforeInit : null,

		/**
		 * Callback after the component initialisation
		 * @setting
		 * @type 	{Function}
		 */
		afterInit : null,

		/**
		 * Callback before the component is destroyed
		 * @setting
		 * @type 	{Function}
		 */
		beforeDestroy : null,

		/**
		 * afterDestroy
		 * Callback after the component has been destroyed
		 * @setting
		 * @type 	{Function}
		 */
		afterDestroy : null,

		/**
		 * Callback when the element is added to the dom
		 * @setting
		 * @type 	{Function}
		 */
		onAdded : null,

		/**
		 * Callback when the element is removed from the dom
		 * @setting
		 * @type 	{Function}
		 */
		onRemoved : null,

		/**
		 * Callback when the element is attached to the dom
		 * @setting
		 * @type 	{Function}
		 */
		onAttached : null,

		/**
		 * Callback when the element is detached from the dom
		 * @setting
		 * @type 	{Function}
		 */
		onDetached : null,

		/**
		 * Callback when the element has just been enabled
		 * @setting
		 * @type 	{Function}
		 */
		onEnabled : null,

		/**
		 * Callback when the element has just been disabled
		 * @setting
		 * @type 	{Function}
		 */
		onDisabled : null
	};

	/**
	 * Store the component uniqid
	 * @type 	{String}
	 */
	componentId = null;

	/**
	 * Store the name of the component in camelcase format
	 * @type 	{String}
	 */
	componentName = null;

	/**
	 * Store the name of the component in dash format 's-date-...'
	 * @type 	{String}
	 */
	componentNameDash = null;

	/**
	 * Store the auto destroy timeout
	 * @type 	{Number}
	 */
	_componentAutoDestroyTimeout = null;

	/**
	 * Store if the component is applied as a tag
	 * @type 	{Boolean}
	 */
	_componentAppliedComponentAsTag = false;

	/**
	 * Track if the component is already inited or not
	 * @type 	{Boolean}
	 */
	_componentInited = false;

	/**
	 * Track if the component is enabled or not
	 * @type 	{Boolean}
	 */
	_componentEnabled = true;

	/**
	 * Track if the component was enabled before remove from the dom
	 * @type 	{Boolean}
	 */
	_componentEnabledBeforeRemoved = true;

	/**
	 * Track if the component has been destroyed
	 * @type 	{Boolean}
	 */
	_componentDestroyed = false;


	// _settings2AttributesBindings = {};

	/**
	 * @constructor
	 * @param 		{String} 		name 					The component name in camelcase
	 * @param 		{HTMLElement} 	elm 					The HTMLElement handled by this component
	 * @param 		{Object} 		[default_settings={}]	The default settings of the component
	 * @param 		{Object} 		[settings={}] 			The settings passed to the component
	 */
	constructor(elm, settings = {}, name) {

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
		this.settings = { ...this.settings, ...settings };

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
				// this._settings2AttributesBindings[settingName] = attrName;

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
	 * @protected
	 */
	_init() {
		this.settings.beforeInit && this.settings.beforeInit(this);
		// init element
		super._init();
		this.settings.afterInit && this.settings.afterInit(this);
	}

	/**
	 * When the component is added to the dom
	 * @protected
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
	}

	/**
	 * When the component is removed from the dom
	 * @protected
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
	 * When the element is added to the dom but was living
	 * in another element in memory and that the _onAdded method
	 * has already been trigerred
	 * @protected
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
	}

	/**
	 * When the element is not anymore in the current page
	 * but still lives in another element in memory
	 * @protected
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
	 * Disable the component
	 * @return 		{SComponent} 	The component instance itself
	 */
	disable() {
		this._componentEnabled = false;
		// onDisabled callback
		this.settings.onDisabled && this.settings.onDisabled(this);
		// maintain chainability
		return this;
	}

	/**
	 * Enable the component
	 * @return  	{SComponent}	The component instance itself
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
	 * @return  	{SComponent}	The component instance itself
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

		// maintain chainability
		return this;
	}

	/**
	 * componentClassName
	 * Set a class that will be construct with the componentNameDash,
	 * an optional element and modifier
	 * @param 	{String} 	[element=null] 		The element name
	 * @param 	{String} 	[modifier=null] 	The modifier name
	 * @param 	{String} 	[state=null] 		The state name
	 * @return 	{String} 						The generated class
	 */
	componentClassName(element = null, modifier = null, state = null) {
		// if the method is BEM
		let sel = this.componentNameDash;
		if (sSettings && sSettings.selector.method.toLowerCase() === 'smaccs') {
			if (element) {
				sel += `-${element}`;
			}
			if (modifier) {
				sel += `-${modifier}`;
			}
			if (state) {
				sel += ` is-${state}`;
			}
		} else {
			if (element) {
				sel += `__${element}`;
			}
			if (modifier) {
				sel += `--${modifier}`;
			}
			if (state) {
				sel += `--${state}`;
			}
		}
		return sel;
	}

	/**
	 * Get a component selector class built with the passed element, modifier and state parameters
	 * @param 	{String} 	[element=null] 		The element name
	 * @param 	{String} 	[modifier=null] 	The modifier name
	 * @param 	{String} 	[state=null] 		The state name
	 * @return 	{String} 						The generated class
	 */
	componentSelector(element = null, modifier = null, state = null) {
		let sel = this.componentClassName(element, modifier, state);
		sel = `.${sel}`.replace(' ','.');
		return sel;
	}

	/**
	 * hasComponentClass
	 * Check if the passed element has the component class generated by the element and modifier argument
	 * @param 	{HTMLElement} 	elm 				The element to check
	 * @param 	{String} 		[element=null] 		The element name
	 * @param 	{String} 		[modifier=null] 	The modifier name
	 * @param 	{String} 		[state=null] 		The state name
	 * @return 	{Boolean} 							The check result
	 */
	hasComponentClass(elm, element = null, modifier = null, state = null) {
		// generate the class
		const cls = this.componentSelector(element, modifier, state);
		const _cls = cls.split('.');
		for (let i=0; i<_cls.length; i++) {
			const cl = _cls[i];
			if (cl && cl !== '') {
				if ( ! elm.classList.contains(cl)) {
					return false;
				}
			}
		}
		return true;
	}

	/**
	 * Add a class on the passed element that will be construct with the componentNameDash,
	 * an optional element, modifier and state
	 * @param 	{String} 	[element=null] 		The element name
	 * @param 	{String} 	[modifier=null] 	The modifier name
	 * @param 	{String} 	[state=null] 		The state name
	 * @return 	{SComponent}} 			The component itself
	 */
	addComponentClass(elm, element = null, modifier = null, state = null) {
		// if is an array
		if (elm instanceof Array
			|| elm instanceof NodeList) {
			[].forEach.call(elm, (el) => {
				this.addComponentClass(el, element, modifier, state);
			});
			return this;
		}

		// get the component class
		let cls = this.componentSelector(element, modifier, state);
		// loop on each classes to add
		cls.split('.').forEach((cl) => {
			if (cl && cl !== '') {
				elm.classList.add(cl);
			}
		});
		// return the instance to maintain chainability
		return this;
	}

	/**
	 * Remove a class on the passed element that will be construct with the componentNameDash,
	 * an optional element, modifier and state
	 * @param 	{String} 	[element=null] 		The element name
	 * @param 	{String} 	[modifier=null] 	The modifier name
	 * @param 	{String} 	[state=null] 		The state name
	 * @return 	{SComponent}} 					The component itself
	 */
	removeComponentClass(elm, element = null, modifier = null, state = null) {
		// if is an array
		if (elm instanceof Array
			|| elm instanceof NodeList) {
			[].forEach.call(elm, (el) => {
				this.removeComponentClass(el, element, modifier, state);
			});
			return this;
		}

		// get the component class
		let cls = this.componentSelector(element, modifier, state);
		// loop on each classes to add
		cls.split('.').forEach((cl) => {
			if (cl && cl !== '') {
				elm.classList.remove(cl);
			}
		});
		// return the instance to maintain chainability
		return this;
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
	 * Watch all settings
	 * @param 	{Function} 	callback	The callback to launch when a setting has changed
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
	 * Return if the component has been destroyed
	 * @return 	{Boolean} 		destroyed status
	 */
	isDestroyed() {
		return this._componentDestroyed;
	}

	/**
	 * Return if the component is disabled
	 * @return 	{Boolean}		disable status
	 */
	isDisabled() {
		return ! this._componentEnabled;
	}

	/**
	 * Return is the component is enabled
	 * @return 	{Boolean} 		enable status
	 */
	isEnabled() {
		return this._componentEnabled;
	}
}

// STemplate integration
STemplate.registerComponentIntegration('SComponent', (component) => {
	STemplate.ignore(component.elm, {
		"s-component" : true
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SComponent = SComponent;

// export modules
export default SComponent;
