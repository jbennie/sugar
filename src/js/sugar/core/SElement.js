import __uniqid from '../tools/uniqid'
import __camelize from '../string/camelize'
import __uncamelize from '../string/uncamelize'
import __autoCast from '../string/autoCast'
import querySelectorLiveOnce from '../dom/querySelectorLiveOnce'
import querySelectorVisibleLiveOnce from '../dom/querySelectorVisibleLiveOnce'
import querySelectorViewportVisibleLiveOnce from '../dom/querySelectorViewportVisibleLiveOnce'
import __closestNotVisible from '../dom/closestNotVisible'
import __whenVisible from '../dom/whenVisible'
import __whenViewportVisible from '../dom/whenViewportVisible'
import __isVisible from '../dom/isVisible'
import __inViewport from '../dom/inViewport'
import __dataset from '../dom/dataset'
import _set from 'lodash/set';
import _get from 'lodash/get';

import SObject from './SObject'
import SWatcher from './SWatcher';
import SBinder from './SBinder';

// store the settings for the different
// components types
let _sugarTypesSettings = {};

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

		// new watcher and binder
		this.watcher = new SWatcher();
		this.binder = new SBinder();

		// bind all the attributes
		[].forEach.call(this.elm.attributes, (attr) => {
			this.attr[__camelize(attr.name)] = attr.value;
			this.binder.bindObjectPath2ElementAttribute(this, `attr.${__camelize(attr.name)}`, this.elm, attr.name);
		});

		// listen for changes in some html tags
		this._listenChangesOnElement();

		// create a uniqid for the element
		this.uniqid = __uniqid();

		// set the uniqid to the element
		this.elm.setAttribute('data-s-element-id', this.uniqid);

		// listen when the element is added to the dom
		setTimeout(() => {
			let cbs = [(elm) => {
				// empty callback just for the onRemove
				if (this.onAdded) this.onAdded();
			}];
			if (typeof(this.onRemoved) == 'function') {
				cbs.push((elm) => {
					this.onRemoved(elm);
				});
			}
			if (typeof(this.onAdded) == 'function') {
				querySelectorLiveOnce(`[data-s-element-id="${this.uniqid}"]`, cbs);
			}
			// check if is the onVisible method
			if (typeof(this.onVisible) == 'function') {
				querySelectorVisibleLiveOnce(`[data-s-element-id="${this.uniqid}"]`, (elm) => {
					this.onVisible(elm);
				});
			}
			// check if is the onViewportVisible method
			if (typeof(this.onViewportVisible) == 'function') {
				querySelectorViewportVisibleLiveOnce(`[data-s-element-id="${this.uniqid}"]`, (elm) => {
					this.onViewportVisible(elm);
				});
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
					this.attr.value = e.target.value;
				});
			break;
		}
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
	inViewport(offset = null) {
		return __inViewport(this.elm, offset);
	}

	/**
	 * Access dataset
	 */
	dataset(key, value = null, elm = this.elm) {
		return __dataset(elm, key, value);
	}
}
