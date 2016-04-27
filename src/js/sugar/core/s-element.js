import sTools from './s-tools'
import sString from './s-string'
import sDom from './s-dom'
import SObject from './s-object'
import SMix from './s-mixin'
import SWatchable from '../mixins/s-watchable'
import SWatchableAttributes from '../mixins/s-watchable-attributes'

// store the settings for the different
// components types
let _sugarTypesSettings = {};

export default class SElement extends SMix(SWatchable).in(SObject) {

	/**
	 * Setup
	 */
	static setup(name, type, settings) {
		if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		_sugarTypesSettings[name][type] = settings;
	}

	/**
	 * Watch stack
	 */
	_watchStack = {};

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
		// process attributes
		[].forEach.call(this.elm.attributes, (attr) => {
			this._newAttribute(attr.name, attr.value);
		});

		// set the api in the dom element
		this.elm[this.name] = this;

		// create a uniqid for the element
		this.uniqid = sTools.uniqid();

		// set the uniqid to the element
		this.elm.setAttribute('data-s-element-id', this.uniqid);

		// check attributes changes to update settings
		let observer = new MutationObserver((mutations) => {
			// loop on mutations
			mutations.forEach((mutation) => {
				// update the attr property
				let val = this.elm.getAttribute(mutation.attributeName);
				// make a new attribute
				let camelName = this._newAttribute(mutation.attributeName);
				// set the value
				this.attr[camelName] = mutation.target.getAttribute(mutation.attributeName);
			});
		});
		// observe the node itself
		observer.observe(this.elm, {
			addedNodes: false,
			attributeName: true,
			characterData : true,
			subtree : false,
			attributeOldValue : true,
			characterDataOldValue : true
		});

		// listen when the element is added to the dom
		setTimeout(() => {
			let cbs = [(elm) => {
				this.onAdded(elm);
			}];
			if (typeof(this.onRemoved) == 'function') {
				cbs.push((elm) => {
					this.onRemoved(elm);
				});
			}
			if (typeof(this.onAdded) == 'function') {
				sDom.querySelectorLiveOnce(`[data-s-element-id="${this.uniqid}"]`, cbs);
			}
			// check if is the onVisible method
			if (typeof(this.onVisible) == 'function') {
				sDom.querySelectorVisibleLiveOnce(`[data-s-element-id="${this.uniqid}"]`, (elm) => {
					this.onVisible(elm);
				});
			}
			// check if is the onViewportVisible method
			if (typeof(this.onViewportVisible) == 'function') {
				sDom.querySelectorViewportVisibleLiveOnce(`[data-s-element-id="${this.uniqid}"]`, (elm) => {
					this.onViewportVisible(elm);
				});
			}	
		});
	}

	/**
	 * New attribute
	 */
	_attrs = {};
	_newAttribute(name, value) {
		let camelName = sString.camelize(name);
		
		// make only if not exist already
		if (this._attrs[name]) return camelName;
		console.log('new attributeName', camelName, value);
		this._attrs[name] = true;
		this.attr[camelName] = sString.autoCast(value);
		let val = this.attr[camelName];

		// define new property on the attr
		Object.defineProperty(this.attr, camelName, {
			get : () => val,
			set : (value) => {
				// cast the value
				value = sString.autoCast(value);
				// protect from recursion
				if (value === val) return value;
				// save the value localy
				val = value;
				// set the new attribute on html tag
				this.elm.setAttribute(name, value);
			},
			enumarable : true
		});
		return camelName;
	}

	/**
	 * Get closest not visible element
	 */
	closestNotVisible(elm = this.elm) {
		return sDom.closestNotVisible(elm);
	}

	/**
	 * Visible proxy init
	 */
	whenVisible(cb = null, elm = this.elm) {
		return sDom.whenVisible(elm, cb);
	}

	/**
	 * Detect if is visible
	 */
	isVisible() {
		return sDom.isVisible(this.elm);
	}

	/**
	 * Detect when the element is in the viewport
	 */
	inViewport(offset = null) {
		return sDom.inViewport(this.elm, offset);
	}

	/**
	 * Access dataset
	 */
	dataset(key, value = null, elm = this.elm) {
		return sDom.dataset(elm, key, value);
	}
}