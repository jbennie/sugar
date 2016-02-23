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
import SugarSvgFilter from './sugar-svgfilter'
import SugarElement from '../core/sugar-element'
import sDom from '../core/sugar-dom'
var _get = require('lodash/get');

/**
 * Svg filter
 */
class SugarGooeyFilter extends SugarSvgFilter {

	/**
	 * Constructor
	 */
	constructor(amount = 8) {
		super(`
			<feGaussianBlur in="SourceGraphic" stdDeviation="${amount}" result="blur" />
			<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${(parseInt(amount) + 9)} -9" result="gooey" />
			<feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
		`);
		this._blur = this.filter.querySelector('feGaussianBlur');
		this._color_matrix = this.filter.querySelector('feColorMatrix');
	}

	/**
	 * Set blur
	 */
	set blur(value) {
		this._blur.setAttribute('stdDeviation', value);
	}

	/**
	 * Set contrast
	 */
	set contrast(value) {
		// get value
		let v = this._color_matrix.getAttribute('values');
		// process
		v = v.split(' ');
		v[v.length - 2] = value;
		// apply the new filter
		this._color_matrix.setAttribute('values', v.join(' '));
	}

	/**
	 * Set shrink
	 */
	set shrink(value) {
		// get value
		let v = this._color_matrix.getAttribute('values');
		// process
		v = v.split(' ');
		v[v.length - 1] = value;
		// apply the new filter
		this._color_matrix.setAttribute('values', v.join(' '));
	}

	/**
	 * Set amount
	 */
	set amount(value) {
		this._blur.setAttribute('stdDeviation', value);
		this._color_matrix.setAttribute('values', `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${(parseInt(value) + 9)} -9`);
	}
}

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
		// get amount
		let amount = this.dataset('sGooey') || 10;
		let blur = this.dataset('sGooeyBlur');
		let contrast = this.dataset('sGooeyContrast');
		let shrink = this.dataset('sGooeyShrink');
		// create a new svg filter
		this.filter = new SugarGooeyFilter(amount);
		// apply the filter
		this.filter.applyTo(this.elm);
		if (blur) this.filter.blur = blur;
		if (contrast) this.filter.contrast = contrast;
		if (shrink) this.filter.shrink = shrink;
	}
}

// Automatic init of dom elements
sDom.domReady(() => {
	[].forEach.call(document.body.querySelectorAll('[data-s-gooey]'), (item) => {
		// init gooey element
		new SugarGooeyElement(item);
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.GooeyElement = SugarGooeyElement;
window.sugar.GooeyFilter = SugarGooeyFilter;

// export modules
module.exports = {
	GooeyFilter : SugarGooeyFilter,
	GooeyElement : SugarGooeyElement
};