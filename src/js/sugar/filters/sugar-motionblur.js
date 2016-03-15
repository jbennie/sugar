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

// motionblur filter
class SugarMotionblurFilter extends SugarSvgFilter {

	/**
	 * Constructor
	 */
	constructor(amount = 0.5) {
		super(`
			<feGaussianBlur in="SourceGraphic" stdDeviation="0,0" />
		`);

		// settings
		this._notMovingStepsBeforeStop = 10;
		this._currentStep = 0;
		this._amount = parseInt(amount);

		// variables
		this._animationFrame = null;

		// filter elements
		this._blur = this.filter.querySelector('feGaussianBlur');
	}

	/**
	 * Apply to element (override)
	 */
	applyTo(elm) {
		// call parent method
		super.applyTo(elm);
		// listen to animation, transitionstart and move event
		elm.addEventListener('animationiteration', (e) => { this._handleFilter(); });
		elm.addEventListener('transitionstart', (e) => { this._handleFilter(); });
		elm.addEventListener('move', (e) => { this._handleFilter(); });
		this._lastPos = sDom.offset(this.elms[0]);
	}

	/**
	 * Handle filter
	 */
	_handleFilter(recusrive) {
		if ( ! recusrive) {
			this._currentStep = 0;
		}

		// set the motion blur and get the moving difference
		let diff = this._setMotionBlur();

		// check if the element is moving or not anymore
		if (diff.x <= 0 && diff.y <= 0) {
			this._currentStep += 1;
			if (this._currentStep >= this._notMovingStepsBeforeStop) {
				this._currentStep = 0;
				return;
			}
		}

		// recusrive call to apply the blur with requestAnimationFrame for performances
		this._animationFrame = requestAnimationFrame(() => {
			this._handleFilter(true);
		});
	}

	/**
	 * Set motion blur
	 */
	_setMotionBlur() {
		this._currentPos = sDom.offset(this.elms[0]);
		let xDiff = Math.abs(this._currentPos.left - this._lastPos.left) * this._amount;
		let yDiff = Math.abs(this._currentPos.top - this._lastPos.top) * this._amount;

		// set the blur
		this._blur.setAttribute('stdDeviation', xDiff+','+yDiff);

		// update lastPos
		this._lastPos = sDom.offset(this.elms[0]);

		// return the diff
		return {
			x : xDiff,
			y : yDiff
		};
	}
}

// Actual activate element class
class SugarMotionblurElement extends SugarElement {

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
		this.filter = new SugarMotionblurFilter(amount);
		// apply the filter
		this.filter.applyTo(this.elm);
	}
}

// automatic init of dom elements
sDom.domReady(() => {
	[].forEach.call(document.body.querySelectorAll('[data-s-motionblur]'), (item) => {
		// init gooey element
		new SugarMotionblurElement(item);
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.MotionblurFilter = SugarMotionblurFilter;
window.sugar.MotionblurElement = SugarMotionblurElement;

// export modules
module.exports = {
	MotionblurFilter : SugarMotionblurFilter,
	MotionblurElement : SugarMotionblurElement
};