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

import sElementsManager from './sElementsManager'
import sDebug from '../utils/sDebug'

import SObject from './SObject'
import SWatcher from '../classes/SWatcher';
import SBinder from '../classes/SBinder';

import STemplate from './STemplate'

// store the settings for the different
// components types
let _sugarTypesSettings = {};

class SElement extends SObject {

	/**
	 * Setup
	 */
	static setup(name, type, settings) {
		if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		_sugarTypesSettings[name][type] = settings;
	}

	/**
	 * elm
	 * Store the actual DOM element that the SElement instance manage
	 * @type 	{HTMLElement}
	 */
	elm = null;

	/**
	 * attr
	 * Store the element attributes in object format
	 * This object will reflect the HTML state into the dom
	 * and will keep updated until the SElement instance has been destroyed
	 * @type 	{Object}
	 */
	attr = {};

	/**
	 * _watcher
	 * Store the watcher instance
	 * @type 	{SWatcher}
	 */
	_watcher = null;

	/**
	 * _binder
	 * Store the binder instance
	 * @type 	{SBinder}
	 */
	_binder = null;

	/**
	 * _elementAdded
	 * Store if the element has been added to the dom
	 * @type 	{Boolean}
	 */
	_elementAdded = false;

	/**
	 * _elementAttached
	 * Store if the element is attached in another dom element
	 * and this, even if the parent dom is only in memory
	 * @type 	{Boolean}
	 */
	_elementAttached = false;

	/**
	 * Constructor
	 */
	constructor(elm) {

		// init parent
		super();

		// save the element reference
		this.elm = elm;

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
			this._init();
		}
	}

	/**
	 * Init
	 */
	_init() {
		let onAddedTimeout = null;
		let onRemovedTimeout = null;
		// listen for changes in some html tags
		this._listenChangesOnElement();

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

			if (elm.hasAttribute('s-range')) {
				console.log('subscribe', this);
			}

			clearTimeout(onRemovedTimeout);
			clearTimeout(onAddedTimeout);
			onAddedTimeout = setTimeout(() => {

				// check if the element is into a template
				this._isInTemplate = __matches(this.elm, `[s-template-id] [s-element="${this.elementId}"],[s-template-component] [s-element="${this.elementId}"]`);

				// call either the onAdded or onAttached method
				// depending on the added state
				if ( ! this._elementAdded) {
					this._onAdded();
				} else {
					this._onAttached();
				}
			});
		});
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
	_listenChangesOnElement() {
		const tagName = this.elm.tagName.toLowerCase();
		switch(tagName) {
			case 'input':
			case 'textarea':
			case 'select':
				this.elm.addEventListener('change', (e) => {
					// set the attribute
					this.attr.value = __autoCast(e.target.value);
				});
			break;
		}
	}

	/**
	 * Bind the attrbutes
	 */
	_initBindings() {
		// bind all the attributes
		[].forEach.call(this.elm.attributes, (attr) => {
			this.attr[__camelize(attr.name)] = __autoCast(attr.value);
			this._binder.bindObjectPath2ElementAttribute(this, `attr.${__camelize(attr.name)}`, this.elm, attr.name);
			this._binder.bindElementAttribute2ObjectPath(this.elm, attr.name, this, `attr.${__camelize(attr.name)}`);
		});
	}

	/**
	 * onRemoved
	 */
	_onRemoved() {
		// if removed, it is detached also
		this._elementAttached = false;
		// track added status
		this._elementAdded = false;
	}

	/**
	 * On added
	 */
	_onAdded() {
		// track attached status
		this._elementAttached = true;
		// track added status
		this._elementAdded = true;
		// render the component
		if ( ! this.componentName
			&& ! this._isInTemplate) {
			this.render();
		}
	}

	/**
	 * _onAttached
	 * When the element is added to the dom but was living
	 * in another element in memory and that the _onAdded method
	 * has already been trigerred
	 * @return 	{void}
	 */
	_onAttached() {
		// track the attached status
		this._elementAttached = true;
		// render the component
		if ( ! this.componentName
			&& ! this._isInTemplate) {
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
		// track the attached status
		this._elementAttached = false;
	}

	/**
	 * render
	 * Render the element
	 */
	render() {
		this.elm.setAttribute('s-element', this.elementId);
	}

	/**
	 * Destroy
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
	}

	/**
	 * originalElement
	 * Original element property
	 */
	get originalElement() {
		return sElementsManager.getOriginalElement(this.elementId);
	}

	/**
	 * remove
	 * Remove the element from the dom
	 * @return 	{SElement} 	The instance itself to maintain chainability
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
	 * append
	 * Append the element into the dom
	 * @param 	{HTMLElement} 	to 		The container in which to append the element
	 * @return 	{SElement} 				The instance itself to maintain chainability
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
	 * Watch
	 */
	watch(path, cb) {
		this._watcher.watch(this, path, cb);
	}

	/**
	 * isElementAttached
	 * Return if the element is attached into the dom or not
	 * This mean that the element live into the DOM document. It this is false,
	 * that mean that the element live into another HTML element into the memory
	 * @return 		{Boolean} 	the attached status
	 */
	isElementAttached() {
		return this._elementAttached;
	}

	/**
	 * isElementAdded
	 * Return if the element is added into the dom or not
	 * This mean that the element is has been added into the dom
	 * but it can live into another HTML element in memory and not
	 * in the document
	 * @return 		{Boolean} 	the attached status
	 */
	isElementAdded() {
		return this._elementAdded;
	}

	/**
	 * Get closest not visible element
	 */
	closestNotVisible(elm = this.elm) {
		return __closestNotVisible(elm);
	}

	/**
	 * Visible proxy init
	 */
	whenVisible(cb = null, elm = this.elm) {
		return __whenVisible(elm, cb);
	}

	/**
	 * Detect if is visible
	 */
	isVisible() {
		return __isVisible(this.elm);
	}

	/**
	 * Detect when the element is in the viewport
	 */
	isInViewport(offset = null) {
		return __isInViewport(this.elm, offset);
	}

	/**
	 * Access dataset
	 */
	dataset(key, value = null, elm = this.elm) {
		return __dataset(elm, key, value);
	}
}

// STemplate integration
STemplate.registerComponentIntegration('SElement', (component) => {
	STemplate.keepAttribute(component.elm, 's-element');
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SElement = SElement;

// export modules
export default SElement;
