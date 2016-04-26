import sTools from './s-tools'
import sString from './s-string'
import sDom from './s-dom'
import SObject from './s-object'
import SMixin from './s-mixin'
import SWatchable from '../mixins/s-watchable'
import SWatchableAttributes from '../mixins/s-watchable-attributes'

// store the settings for the different
// components types
let _sugarTypesSettings = {};

export default class SElement extends SMixin(SObject).with(SWatchable) {

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
	 * Store the attributes values
	 */
	_attrValues = {};

	/**
	 * Store the previous attributes values
	 */
	_previousAttrValues = {};

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
			// new attribute
			const camelName = this._newAttribute(attr.name);
			// set the value
			this.attr[camelName] = attr.value;
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
	_newAttribute(name) {
		let camelName = sString.camelize(name);
		// make only if not exist already
		if (this._attrValues[camelName] != undefined) return camelName;

		// define new property on the attr
		Object.defineProperty(this.attr, camelName, {
			get : () => this._attrValues[camelName],
			set : (value) => {
				// cast the value
				value = sString.autoCast(value);
				// protect from recursion
				if (value == this._previousAttrValues[camelName]) {
					return;
				}
				// save the old value
				let previousValue = this._previousAttrValues[camelName] = this.attr[camelName];
				this._attrValues[camelName] = value;
				// set the new attribute on html tag
				this.elm.setAttribute(name, value);
				// notify of new value
				this.notify(`attr.${camelName}`, value, previousValue);
				this.notify('attr', this._attrValues, this._previousAttrValues);
			},
			enumarable : true
		});
		return camelName;
	}

	/**
	 * On added
	 */
	// onAdded() {
	// 	console.log('onAdded', this.uniqid);
	// }

	// /**
	//  * On removed
	//  */
	// onRemoved() {
	// }

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