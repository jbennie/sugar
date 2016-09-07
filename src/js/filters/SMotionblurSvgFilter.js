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
import __offset from '../dom/offset'
import SSvgFilter from './SSvgFilter'
require('../events/sTransitionStartEventDispatcher');

// motionblur filter
class SMotionblurSvgFilter extends SSvgFilter {

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
		this._amount = parseFloat(amount);

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
		elm.addEventListener('animationiteration', this._handleFilter.bind(this));
		elm.addEventListener('transitionstart', this._handleFilter.bind(this));
		elm.addEventListener('transitionend', this._handleFilter.bind(this));
		elm.addEventListener('animationend', this._handleFilter.bind(this));
		elm.addEventListener('move', this._handleFilter.bind(this));
		this._lastPos = __offset(this.elms[0]);
	}

	/**
	 * unapplyFrom
	 * Remove the effect
	 * @param 	{HTMLElement} 	elm 	The element to unapply the effect
	 * @return 	{void}
	 */
	unapplyFrom(elm) {
		// remove event listeners
		elm.removeEventListener('animationiteration', this._handleFilter);
		elm.removeEventListener('transitionstart', this._handleFilter);
		elm.removeEventListener('transitionend', this._handleFilter);
		elm.removeEventListener('animationend', this._handleFilter);
		elm.removeEventListener('move', this._handleFilter);
		// call parent
		super.unapplyFrom(elm);
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

		this._currentPos = __offset(this.elms[0]);
		let xDiff = Math.abs(this._currentPos.left - this._lastPos.left) * this._amount;
		let yDiff = Math.abs(this._currentPos.top - this._lastPos.top) * this._amount;

		// set the blur
		this._blur.setAttribute('stdDeviation', xDiff+','+yDiff);

		// update lastPos
		this._lastPos = __offset(this.elms[0]);

		// return the diff
		return {
			x : xDiff,
			y : yDiff
		};
	}

	/**
	 * destroy
	 * Destroy the filter
	 * @return 	{void}
	 */
	destroy() {
		cancelAnimationFrame(this._animationFrame);
		super.destroy();
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SMotionblurSvgFilter = SMotionblurSvgFilter;

// export modules
export default SMotionblurSvgFilter;
