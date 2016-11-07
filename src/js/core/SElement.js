import __uniqid from '../utils/uniqid'
import __camelize from '../utils/string/camelize'
import __uncamelize from '../utils/string/uncamelize'
import __autoCast from '../utils/string/autoCast'
import querySelectorLive from '../dom/querySelectorLive'
import __matches from '../dom/matches'
import __closestNotVisible from '../dom/closestNotVisible'
import __whenVisible from '../dom/whenVisible'
import __isVisible from '../dom/isVisible'
import __isInViewport from '../dom/isInViewport'
import __dataset from '../dom/dataset'
import __dispatchEvent from '../dom/dispatchEvent'
import _set from 'lodash/set';
import _get from 'lodash/get';
import __constructorName from '../utils/objects/constructorName'
import __closest from '../dom/closest'
import __whenAttribute from '../dom/whenAttribute'

import sElementsManager from './sElementsManager'
import sDebug from '../utils/sDebug'

import SObject from './SObject'
import SWatcher from '../classes/SWatcher';
import SBinder from '../classes/SBinder';

import sTemplateIntegrator from './sTemplateIntegrator'

// store the settings for the different
// components types
let _sugarTypesSettings = {};


/**
 * @class 		SElement 		{SObject}
 * This class allows to wrap an HTMLElement with a lot of useful features like:
 * - Keep in sync element attributes with this.attr property
 * - Complete and powerfull lifecycle management
 *  	- When the element is added : `_onAdded`
 *  	- The element is bein inited : `_init`
 *  	- Life of your element...
 *  	- The element is destroyed : `destroy`
 *  		- Either by calling manually the `destroy` method...
 *  		- ...or when the element is not in the dom anymore since the settings.autoDestroyTimeout
 *  - Watch some element property through a simple `watch` method
 *  - And more...
 *
 * @example 	js
 * // create a new element
 * class myElement extends SElement {
 * 		constructor(elm) {
 * 			super(elm);
 * 		}
 * 		_init() {
 * 			super._init();
 * 			// do something when my element is inited
 * 		}
 * 		_onAdded() {
 * 			super._onAdded();
 * 			// do something when my element is added to the dom
 * 		}
 * 		destroy() {
 * 			// handle the destroy routine of my element
 * 			super.destroy();
 * 		}
 * 		// my element methods here...
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
class SElement extends SObject {

	// static setup(name, type, settings) {
	// 	if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
	// 	_sugarTypesSettings[name][type] = settings;
	// }

	/**
	 * Init dependencies at class level
	 */
	static initDependencies = [];

	/**
	 * Register an init dependency at class level
	 * @param 		{Function} 		fn 			A function that return a new promise
	 */
	static registerInitDependency = (fn) => {
		SElement.initDependencies.push(fn);
	};

	/**
	 * Store the actual DOM element that the SElement instance manage
	 * @type 	{HTMLElement}
	 */
	elm = null;

	/**
	 * Store the element attributes in object format
	 * This object will reflect the HTML state into the dom
	 * and will keep updated until the SElement instance has been destroyed
	 * @type 	{Object}
	 */
	attr = {};

	/**
	 * Store the watcher instance
	 * @type 	{SWatcher}
	 */
	_watcher = null;

	/**
	 * Store the binder instance
	 * @type 	{SBinder}
	 */
	_binder = null;

	/**
	 * Store if the element has been added to the dom
	 * @type 	{Boolean}
	 */
	_elementAdded = false;

	/**
	 * Store if the element is attached in another dom element
	 * and this, even if the parent dom is only in memory
	 * @type 	{Boolean}
	 */
	_elementAttached = false;

	/**
	 * @constructor
	 * @param 		{HTMLElement} 		elm 		The HTMLElement to handle
	 */
	constructor(elm) {

		// init parent
		super();

		// save the element reference
		this.elm = elm;

		// sane into the element of which type it is
		if ( ! this.elm._typeOf) this.elm._typeOf = [];
		let comp = this;
		while(comp) {
			const name = __constructorName(comp);
			if (name) {
				if ( this.elm._typeOf.indexOf(name) === -1) {
					this.elm._typeOf.push(name);
				}
			}
			comp = Object.getPrototypeOf(comp);
		}

		// save the instance in the elm
		this.elm._sInstance = this;

		// create a uniqid for the element
		this.elementId = this.elm.getAttribute('s-element') || __uniqid();

		// new watcher and binder
		this._watcher = new SWatcher();
		this._binder = new SBinder();

		// set the uniqid to the element
		this.elm.setAttribute('s-element', this.elementId);

		// save the element into the window to be
		// able to target it from outside
		// ! register AFTER having set the s-element attribute
		// cause the manager will handle only s-element elements
		sElementsManager.registerElement(this.elm, this);

		// set all attribute in the this.attr stack
		[].forEach.call(this.elm.attributes, (attr) => {
			this.attr[__camelize(attr.name)] = __autoCast(attr.value);
		});

		// init bindings if not a component
		if ( ! elm.hasAttribute('s-component')) {
			this._initBindings();
			this._initProxy();
		}
	}

	/**
	 * Init
	 */
	_init() {
		let onAddedTimeout = null;
		let onRemovedTimeout = null;

		// listen for changes in some html tags
		// this._listenChangesOnElement();

		// listen when the element is detached from the dom
		this.elm.addEventListener('detached', this._onDetachedEvent.bind(this));

		// listen when the element is removed
		this._addRemoveObserver = querySelectorLive(`[s-element="${this.elementId}"]`, {
			onNodeRemoved : (node) => {
				clearTimeout(onAddedTimeout);
				clearTimeout(onRemovedTimeout);
				onRemovedTimeout = setTimeout(() => {
					this._onRemoved();
				});
			}
		}).subscribe((elm) => {
			clearTimeout(onRemovedTimeout);
			clearTimeout(onAddedTimeout);
			onAddedTimeout = setTimeout(() => {

				// check if the element is into a template
				// this._isInTemplate = __matches(this.elm, `[s-template-id] [s-element="${this.elementId}"],[s-template-component] [s-element="${this.elementId}"]`);

				// call either the onAdded or onAttached method
				// depending on the added state
				if ( ! this._elementAdded) {
					this._onAdded();
				} else {
					this._onAttached();
				}
			});
		});

		// dispatch an event
		__dispatchEvent(this.elm, 's-element:init');
	}

	/**
	 * Init proxy
	 */
	_initProxy() {

		// resolve dependencied at class level
		if (SElement.initDependencies.length
			&& ! this._initClassDependenciesResolved
		) {
			const depsArray = SElement.initDependencies.map((fn) => {
				return fn(this);
			});
			Promise.all(depsArray).then(() => {
				this._initClassDependenciesResolved = true;
				this._initProxy();
			});
			return false;
		}

		// resolve all the init dependencies
		if (this._initDependencies
			&& ! this._initDependenciesResolved) {
			Promise.all(this._initDependencies()).then(() => {
				// set that the dependencies are resolved
				this._initDependenciesResolved = true;
				// relaunch the init proxy
				this._initProxy();
			});
			return false;
		}

		// if not a component
		// launch the init function
		// otherwise, the component will launch the
		// init when needed
		if ( ! this.elm.hasAttribute('s-component')) {
			this._init();
		}

		// all ok
		return true;
	}

	/**
	 * _onDetachedEvent
	 * When the element has been detached from the current dom
	 * It can still be in another dom element in the memory
	 * @return {void}
	 */
	_onDetachedEvent(e) {
		if (e.target === this.elm && this._elementAttached) {
			this._onDetached();
		}
	}

	/**
	 * Listen changes on element
	 */
	// _listenChangesOnElement() {
	// 	const tagName = this.elm.tagName.toLowerCase();
	// 	switch(tagName) {
	// 		case 'input':
	// 		case 'textarea':
	// 		case 'select':
	// 			this.elm.addEventListener('change', (e) => {
	// 				// set the attribute
	// 				this.attr.value = __autoCast(e.target.value);
	// 			});
	// 		break;
	// 	}
	// }

	/**
	 * Bind the attrbutes
	 */
	_initBindings() {
		// bind all the attributes
		[].forEach.call(this.elm.attributes, (attr) => {
			const value = __autoCast(attr.value);
			this.attr[__camelize(attr.name)] = (value !== undefined) ? value : null;
			this._binder.bindObjectPath2ElementAttribute(this, `attr.${__camelize(attr.name)}`, this.elm, attr.name);
			this._binder.bindElementAttribute2ObjectPath(this.elm, attr.name, this, `attr.${__camelize(attr.name)}`);
		});
	}

	/**
	 * When the element has been removed from the dom
	 * @protected
	 */
	_onRemoved() {
		// if removed, it is detached also
		this._elementAttached = false;
		// track added status
		this._elementAdded = false;
		// dispatch an event
		__dispatchEvent(this.elm, 's-element:removed');
	}

	/**
	 * When the element has been added to the dom
	 * @protected
	 */
	_onAdded() {
		// track attached status
		this._elementAttached = true;
		// track added status
		this._elementAdded = true;
		// // render the component
		// if ( ! this.componentName
		// 	&& ! this._isInTemplate) {
		// 	this.render();
		// }
		// dispatch an event
		__dispatchEvent(this.elm, 's-element:added');
	}

	/**
	 * When the element is added to the dom but was living
	 * in another element in memory and that the _onAdded method
	 * has already been trigerred
	 * @protected
	 */
	_onAttached() {
		// track the attached status
		this._elementAttached = true;
		// // render the component
		// if ( ! this.componentName
		// 	&& ! this._isInTemplate) {
		// 	this.render();
		// }
		// dispatch an event
		__dispatchEvent(this.elm, 's-element:attached');
	}

	/**
	 * When the element is not anymore in the current page
	 * but still lives in another element in memory
	 * @protected
	 */
	_onDetached() {
		// track the attached status
		this._elementAttached = false;
		// dispatch an event
		__dispatchEvent(this.elm, 's-element:detached');
	}

	/**
	 * Destroy element routine
	 */
	destroy() {

		// do not listen for add or remove anymore
		if (this._addRemoveObserver) {
			this._addRemoveObserver.unsubscribe();
		}

		// do not listen for detached event anymore
		this.elm.removeEventListener('detached', this._onDetachedEvent);

		// stop watchers
		this._watcher.destroy();
		this._watcher = null;

		// stop binder
		this._binder.destroy();
		this._binder = null;

		// onRemoved
		this.onRemoved && this.onRemoved();

		// unregister element instance
		sElementsManager.unregisterElement(this.elm, this);

		// dispatch an event
		__dispatchEvent(this.elm, 's-element:destroy');
	}

	/**
	 * Original HTMLElement before any SElement manipulation
	 * @name 	originalElement
	 * @type 	{HTMLElement}
	 */
	get originalElement() {
		return sElementsManager.getOriginalElement(this.elementId);
	}

	/**
	 * Remove the element from the dom
	 * @param 	{HTMLElement} 	[elm=this.elm] 		The element to remove
	 * @return 	{SElement} 							The SElement instance itself to maintain chainability
	 */
	remove(elm = this.elm) {
		// save the next sibling
		elm._sNextSibling = elm.nextSibling;

		// remove the element
		if (elm.parentNode) {
			elm._sParent = elm.parentNode;
			elm.parentNode.removeChild(elm);
		}
		// maintain chainability
		return this;
	}

	/**
	 * Append the element into the dom
	 * @param 	{HTMLElement} 	[elm=this.elm] 	The element to append
	 * @param 	{HTMLElement} 	[to=null] 		The container in which to append the element
	 * @return 	{SElement} 						The instance itself to maintain chainability
	 */
	append(elm = this.elm, to = null) {

		// remove if has a parent
		if (elm.parentNode) {
			this.remove(elm);
		}

		if ( ! to && elm._sNextSibling && elm._sNextSibling.parentNode) {
			elm._sNextSibling.parentNode.insertBefore(elm, elm._sNextSibling);
		} else if (elm._sParent) {
			elm._sParent.appendChild(elm);
		} else if (to && to.parentNode) {
			to.parentNode.appendChild(elm);
		} else if (elm !== this.elm) {
			this.elm.appendChild(elm);
		} else {
			throw 'In order to append this element, you need to specify a "to" parameter';
		}
		// maintain chainability
		return this;
	}

	/**
	 * Watch a property on the SElement instance
	 * @param 		{String} 		path 		The object property path to watch
	 * @param 		{Function} 		cb 			The callback called when the property has been updated
	 */
	watch(path, cb) {
		this._watcher.watch(this, path, cb);
	}

	/**
	 * Return if the element is attached into the dom or not
	 * This mean that the element live into the DOM document. It this is false,
	 * that mean that the element live into another HTML element into the memory
	 * @return 		{Boolean} 	The attached status
	 */
	isElementAttached() {
		return this._elementAttached;
	}

	/**
	 * Return if the element is added into the dom or not
	 * This mean that the element is has been added into the dom
	 * but it can live into another HTML element in memory and not
	 * in the document
	 * @return 		{Boolean} 	The attached status
	 */
	isElementAdded() {
		return this._elementAdded;
	}

	// access dataset
	// @TODO : remove this method
	dataset(key, value = null, elm = this.elm) {
		return __dataset(elm, key, value);
	}
}

// Do not init the element before the template is rendered
// if the element lives in a template or in a template-component
SElement.registerInitDependency((api) => {
	return new Promise((resolve, reject) => {
		// get the closest template instance
		// to wait when it is dirty (rendered)
		const closestTemplate = __closest(api.elm, '[s-template-component],[s-template-id]');
		if (closestTemplate) {
			if ( ! closestTemplate.hasAttribute('s-template-id')) {
				__whenAttribute(closestTemplate, 's-template-dirty').then((elm) => {
					resolve();
				});
			} else if (closestTemplate.hasAttribute('s-template-component')) {
				__whenAttribute(closestTemplate, 's-template-component-dirty').then((elm) => {
					resolve();
				});
			} else {
				resolve();
			}
		} else {
			resolve();
		}
	});
});

// STemplate integration
sTemplateIntegrator.registerComponentIntegration('SElement', (component) => {
	sTemplateIntegrator.ignore(component.elm, {
		"s-element" : true
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SElement = SElement;

// export modules
export default SElement;
