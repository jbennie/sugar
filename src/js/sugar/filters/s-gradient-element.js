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
import SGradientSvgFilter from './s-gradient-svg-filter'
import SElement from '../core/s-element'
import sDom from '../core/s-dom'

// Gradient element class
class SGradientElement extends SElement {

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
		super('sGradient', elm, {
			colors : ['#a3385e','#f2bc2b'],
			type : 'linear'
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
		let type = this.setting('type');
		// create a new svg filter
		this.filter = new SGradientSvgFilter();
		if (type == 'radial') {
			this.filter.radial(this.setting('colors'));
		} else {
			this.filter.linear(this.setting('colors'));
		}
		// apply the filter
		this.filter.applyTo(this.elm);
	}
}

// automatic init of dom elements
sDom.domReady(() => {
	[].forEach.call(document.body.querySelectorAll('[data-s-gradient]'), (item) => {
		// init element
		new SGradientElement(item);
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SGradientElement = SGradientElement;

// export modules
export default SGradientElement;