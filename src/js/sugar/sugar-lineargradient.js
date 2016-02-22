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
import SugarLinearGradientFilter from './sugar-lineargradient-filter'

// make sure we have a sugar property on window
if (window.sugar == null) { window.sugar = {}; }

// Actual activate element class
class SugarLinearGradientElement extends SugarElement {

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
		super('sLinearGradient', elm, {
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
		this.filter = new SugarLinearGradientFilter();
		this.filter.linear([
			'#a3385e',
			'#f2bc2b'
		]);
		// apply the filter
		this.filter.applyTo(this.elm);
	}
}

sDom.domReady(() => {
	[].forEach.call(document.body.querySelectorAll('[data-s-linear-gradient]'), (item) => {
		// init gooey element
		new SugarLinearGradientElement(item);
	});
});

window.sugar.LinearGradientElement = SugarLinearGradientElement;

// export modules
module.exports = {
	LinearGradientElement : SugarLinearGradientElement
};