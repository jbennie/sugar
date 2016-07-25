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
import SGooeySvgFilter from './SGooeySvgFilter'
import SElement from '../core/SElement'
import domReady from '../dom/domReady'

// Actual activate element class
class SGooeyElement extends SElement {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SElement.setup('sGooey', type, settings);
	}

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
		// get amount
		let amount = this.dataset('sGooey') || 10;
		let blur = this.dataset('sGooeyBlur');
		let contrast = this.dataset('sGooeyContrast');
		let shrink = this.dataset('sGooeyShrink');
		// create a new svg filter
		this.filter = new SGooeySvgFilter(amount);
		// apply the filter
		this.filter.applyTo(this.elm);
		if (blur) this.filter.blur = blur;
		if (contrast) this.filter.contrast = contrast;
		if (shrink) this.filter.shrink = shrink;
	}
}

// Automatic init of dom elements
domReady(() => {
	[].forEach.call(document.body.querySelectorAll('[data-s-gooey]'), (item) => {
		// init gooey element
		new SGooeyElement(item);
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SGooeyElement = SGooeyElement;

// export modules
export default SGooeyElement;