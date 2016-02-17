/*
 * Sugar-activate.js
#
 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
#
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  20.01.16
 * @updated  20.01.16
 * @version  1.0.0
 */
import SugarElement from './sugar-element'
import sDom from './sugar-dom'
import SugarGooeyFilter from './sugar-gooey-filter'
var _get = require('lodash/get');

// make sure we have a sugar property on window
if (window.sugar == null) { window.sugar = {}; }

// save all the activate elements
let _sActivateStack = {};

// Actual activate element class
class SugarGooeyElement extends SugarElement {

	/**
	 * Setup
	 */
	// static setup(type, settings) {
	// 	SugarElement.setup('sActivate', type, settings);
	// }

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sGooey', elm, {
		}, settings);
		if (this._inited) return;
		this._inited = true;

		// init the filter
		this._initFilter();
	}

	/**
	 * Init the filter
	 */
	_initFilter() {
		// create a new svg filter
		this.filter = new SugarGooeyFilter();
		// apply the filter
		this.filter.applyTo(this.elm);
	}
}

sDom.domReady(() => {
	[].forEach.call(document.body.querySelectorAll('[data-s-gooey]'), (item) => {
		// init gooey element
		new SugarGooeyElement(item);
	});
});

window.sugar.GooeyElement = SugarGooeyElement;

// export modules
module.exports = {
	GooeyElement : SugarGooeyElement
};