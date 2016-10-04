import __offset from '../dom/offset'
import SSvgFilter from './SSvgFilter'
require('../events/sTransitionStartEventDispatcher');

/**
 * @class 			SMotionblurSvgFilter 			{SSvgFilter}
 * This class represent a motion blur svg filter that will blur your
 * element depending on his movements, direction and speed
 *
 * @example 		js
 * const filter = new SMotionblurSvgFilter();
 * filter.applyTo(myCoolHTMLElement);
 * // now when your element will move, it will be blured accordingly
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */
class SMotionblurSvgFilter extends SSvgFilter {

	/**
	 * @constructor
	 * @param 		{Number} 		amount 			The motion blur amount
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
	 * Apply the filter to element
	 * @override
	 * @param 		{HTMLElement} 		elm 		The element on which to apply the filter
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
	 * Remove the filter from element
	 * @override
	 * @param 	{HTMLElement} 	elm 	The element to unapply the filter from
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
	 * @param 		{Boolean} 		recusrive 			If the function need to be called again at the end of it's execution
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
	 * Destroy the filter
	 * @override
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
