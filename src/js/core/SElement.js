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
			this.attr[__camelize(attr.name)] = __autoCast(attr.value);
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

			if (typeof(this.onAdded) == 'function') {
				querySelectorLive(`[data-s-element-id="${this.uniqid}"]`).once().subscribe((elm) => {
					if (this.onAdded) this.onAdded();
				});
			}
			// check if is the onVisible method
			if (typeof(this.onVisible) == 'function') {
				querySelectorLive(`[data-s-element-id="${this.uniqid}"]`).once().visible().subscribe((elm) => {
					this.onVisible(elm);
				});
			}
			// check if is the onViewportVisible method
			if (typeof(this.onViewportVisible) == 'function') {
				querySelectorLive(`[data-s-element-id="${this.uniqid}"]`).once().inViewport().subscribe((elm) => {
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
					this.attr.value = __autoCast(e.target.value);
				});
			break;
		}
	}

	/**
	 * Watch
	 */
	watch(path, cb) {
		this.watcher.watch(this, path, cb);
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
