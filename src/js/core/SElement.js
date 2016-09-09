import __uniqid from '../tools/uniqid'
import __camelize from '../string/camelize'
import __uncamelize from '../string/uncamelize'
import __autoCast from '../string/autoCast'
import querySelectorLive from '../dom/querySelectorLive'
import __closestNotVisible from '../dom/closestNotVisible'
import __whenVisible from '../dom/whenVisible'
import __isVisible from '../dom/isVisible'
import __isInViewport from '../dom/isInViewport'
import __dataset from '../dom/dataset'
import __dispatchEvent from '../dom/dispatchEvent'
import _set from 'lodash/set';
import _get from 'lodash/get';

import sElementsManager from './sElementsManager'

import SObject from './SObject'
import SWatcher from './SWatcher';
import SBinder from './SBinder';

// store the settings for the different
// components types
let _sugarTypesSettings = {};

// init a stack into the window
if ( ! window.sugar) window.sugar = {};
window.sugar._elements = new Map();
// window.sugar._originalElements = new Map();

export default class SElement extends SObject {

	/**
	 * Setup
	 */
	static setup(name, type, settings) {
		if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		_sugarTypesSettings[name][type] = settings;
	}

	/**
	 * The dom element reference
	 */
	elm = null;

	/**
	 * Store the attributes
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

		// save the element into the window to be
		// able to target it from outside
		sElementsManager.registerElement(this.elm, this);


		// const inStackElement = window.sugar._elements.get(this.elm);
		// if ( ! inStackElement) {
		// 	const originalElement = this.elm.cloneNode(false);
		// 	originalElement.removeAttribute('s-component');
		// 	// save into window to be able to access it from outside
		// 	window.sugar._elements.set(this.elm, {
		// 		element : this.elm,
		// 		originalElement : originalElement,
		// 		components : {},
		// 		count : 1
		// 	});
		// } else {
		// 	inStackElement.count++;
		// }

		// if ( ! window.sugar._elements[this.elementId]) {
		// 	const originalElement = this.elm.cloneNode(false);
		// 	originalElement.removeAttribute('s-component');
		// 	// save into window to be able to access it from outside
		// 	window.sugar._elements[this.elementId] = {
		// 		element : this.elm,
		// 		originalElement : originalElement,
		// 		components : {},
		// 		count : 1
		// 	};
		// } else {
		// 	window.sugar._elements[this.elementId].count++;
		// }

		// new watcher and binder
		this._watcher = new SWatcher();
		this._binder = new SBinder();

		// set the uniqid to the element
		this.elm.setAttribute('s-element', this.elementId);

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
		this.elm.addEventListener('detached', this._onDetachedEvent.bind(this), true);

		// listen when the element is removed
		this._addRemoveObserver = querySelectorLive(`[s-element="${this.elementId}"]`, {
			onNodeRemoved : (node) => {
				if (this._onRemoved) {
					clearTimeout(onAddedTimeout);
					clearTimeout(onRemovedTimeout);
					onRemovedTimeout = setTimeout(() => {
						this._onRemoved();
					});
				}
			}
		}).subscribe((elm) => {
			// the node has been added
			if (this._onAdded) {
				clearTimeout(onRemovedTimeout);
				clearTimeout(onAddedTimeout);
				onAddedTimeout = setTimeout(() => {
					if ( ! this._elementAdded) {
						this._onAdded();
					} else {
						this._onAttached();
					}
				});
			}
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
		if ( ! this.componentName) {
			this._render();
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
		if ( ! this.componentName) {
			this._render();
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
	 * _render
	 * Render the element
	 */
	_render() {
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
		this.elm.removeEventListener('detached', this._onDetachedEvent, true);

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

		// destroy all components
		// const components = sElementsManager.getComponents(this.elm);
		// if (components) {
		// 	const componentsKeys = Object.keys(components);
		// 	if (componentsKeys.length) {
		// 		// destroy the next element
		// 		components[componentsKeys[0]].destroy();
		// 	}
		// }

		// if (window.sugar._elements[this.elementId]) {
		// 	const components = Object.keys(window.sugar._elements[this.elementId].components);
		// 	if (components.length) {
		// 		// destroy the next element
		// 		window.sugar._elements[this.elementId].components[components[0]].destroy();
		// 	}
		// }
	}

	/**
	 * originalElement
	 * Original element property
	 */
	get originalElement() {
		return window.sugar._elements.get(this.elm).originalElement;
		// return window.sugar._originalElements[this.elementId].originalElement;
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
