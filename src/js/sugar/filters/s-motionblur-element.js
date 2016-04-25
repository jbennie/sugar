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
import SMotionblurSvgFilter from './s-motionblur-svg-filter'
import SElement from '../core/s-element'
import sDom from '../core/s-dom'

// Actual activate element class
class SMotionblurElement extends SElement {

	/**
	 * Setup
	 */
	// static setup(type, settings) {
	// 	SElement.setup('sActivate', type, settings);
	// }

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sMotionblur', elm, {
			motionblur : 0.5
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
		// get amount
		let amount = this.setting('motionblur');
		// create a new svg filter
		this.filter = new SMotionblurSvgFilter(amount);
		// apply the filter
		this.filter.applyTo(this.elm);
	}
}

// automatic init of dom elements
sDom.domReady(() => {
	[].forEach.call(document.body.querySelectorAll('[data-s-motionblur]'), (item) => {
		// init gooey element
		new SMotionblurElement(item);
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SMotionblurElement = SMotionblurElement;

// export modules
export default SMotionblurElement;