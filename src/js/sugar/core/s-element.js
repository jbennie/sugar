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
	 * Constructor
	 */
	constructor(elm) {
		// init parent
		super();
		// save the element reference
		this.elm = elm;
		// process attributes
		[].forEach.call(this.elm.attributes, (attr) => {
			this.set(`attr.${sString.camelize(attr.name)}`, sString.autoCast(attr.value));
		});

		// check attributes changes to update settings
		let observer = new MutationObserver((mutations) => {
			// loop on mutations
			mutations.forEach((mutation) => {
				// update the attr property
				let val = this.elm.getAttribute(mutation.attributeName);
				// process val
				val = sString.autoCast(val);
				// set the attribute with the fromMutation flag to true
				// to avoid recursive assignation
				this.set(`attr.${sString.camelize(mutation.attributeName)}`, val, true);
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