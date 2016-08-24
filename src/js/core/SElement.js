import __uniqid from '../tools/uniqid'
import __camelize from '../string/camelize'
import __uncamelize from '../string/uncamelize'
import __autoCast from '../string/autoCast'
import querySelectorLive from '../dom/querySelectorLive'
import __closestNotVisible from '../dom/closestNotVisible'
import __whenVisible from '../dom/whenVisible'
import __whenViewportVisible from '../dom/whenViewportVisible'
import __isVisible from '../dom/isVisible'
import __isInViewport from '../dom/isInViewport'
import __dataset from '../dom/dataset'
import _set from 'lodash/set';
import _get from 'lodash/get';

import SObject from './SObject'
import SWatcher from './SWatcher';
import SBinder from './SBinder';

// store the settings for the different
// components types
let _sugarTypesSettings = {};

// init a stack into the window
window.sElements = {};

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
	 * Constructor
	 */
	constructor(elm) {

		// init parent
		super();

		// save the element reference
		this.elm = elm;

		// create a uniqid for the element
		this.uniqid = __uniqid();

		// save the initial not processed html element
		this._originalElement = this.elm.cloneNode(false);
		this._originalElement.removeAttribute('s-component');

		// save the instance into the node
		this.elm._sElement = this;

		// save the element into the window to be
		// able to target it from outside
		window.sElements[this.uniqid] = this;

		// new watcher and binder
		this._watcher = new SWatcher();
		this._binder = new SBinder();

		// listen for changes in some html tags
		this._listenChangesOnElement();

		// set the uniqid to the element
		this.elm.setAttribute('s-element', this.uniqid);

		// init bindings if not a component
		if ( ! elm.hasAttribute('s-component')) {
			this._initBindings();
		}

		// listen when the element is removed
		this._addRemoveObserver = querySelectorLive(`[s-element="${this.uniqid}"]`, {
			onNodeRemoved : (node) => {
				if (this.onRemoved) {
					this.onRemoved();
				}
			}
		}).subscribe((elm) => {
			// the node has been added
			if (this.onAdded) {
				this.onAdded();
			}
		});
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
	onRemoved() {
	}

	/**
	 * On added
	 */
	onAdded() {
	}

	/**
	 * Destroy
	 */
	destroy() {
		console.error('DEST');
		// do not listen for add or remove anymore
		this._addRemoveObserver.unsubscribe();
		// onRemoved
		this.onRemoved && this.onRemoved();
		// delete the reference of the element into the window.sElements stack
		delete window.sElements[this.uniqid];
		// remove the element from the dom
		if (this.elm.parentNode) {
			this.elm.parentNode.removeChild(this.elm);
		}
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
