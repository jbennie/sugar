import __offset from '../dom/offset'
import SSvgFilter from './SSvgFilter'
import fastdom from 'fastdom'

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
 * @author 			Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default class SMotionblurSvgFilter extends SSvgFilter {

	/**
	 * Store the amount of motion blur to apply
	 * @type 	{Number}
	 */
	amount = 0.5;

	/**
	 * Store the status of the animation
	 * @type 		{Boolean}
	 */
	_isMoving = false;

	_startMoveTimeout = null;

	/**
	 * @constructor
	 * @param 		{Number} 		amount 			The motion blur amount
	 */
	constructor(amount = 0.5) {
		super(`
			<feGaussianBlur in="SourceGraphic" stdDeviation="0,0" />
		`);

		// settings
		this.amount = parseFloat(amount);

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
		elm.addEventListener('transitionstart', this._onMotionStart.bind(this));
		elm.addEventListener('animationstart', this._onMotionStart.bind(this));
		elm.addEventListener('dragstart', this._onMotionStart.bind(this));
		elm.addEventListener('transitionend', this._onMotionStop.bind(this));
		elm.addEventListener('animationend', this._onMotionStop.bind(this));
		this._lastPos = __offset(this.elms[0]);
	}

	/**
	 * Remove the filter from element
	 * @override
	 * @param 	{HTMLElement} 	elm 	The element to unapply the filter from
	 */
	unapplyFrom(elm) {
		// remove event listeners
		elm.removeEventListener('animationStart', this._onMotionStart);
		elm.removeEventListener('transitionstart', this._onMotionStart);
		elm.removeEventListener('dragstart', this._onMotionStart);
		elm.removeEventListener('transitionend', this._onMotionStop);
		elm.removeEventListener('animationend', this._onMotionStop);
		elm.removeEventListener('dragend', this._onMotionStop);
		// call parent
		super.unapplyFrom(elm);
	}

	/**
	 * When the animation, transition or draging start
	 */
	_onMotionStart(e) {
		if (e.target !== this.elms[0]) return;
		clearTimeout(this._startMoveTimeout);
		this._startMoveTimeout = setTimeout(() => {
			this._isMoving = true;
			// handle filter
			this._handleFilter();
		});
	}

	/**
	 * Transition / animation end
	 */
	_onMotionStop(e) {
		if (e.target !== this.elms[0]) return;
		if ( ! this._isMoving) return;
 		// update is moving status
		this._isMoving = false;
		fastdom.mutate(() => {
			// set the blur
			this._blur.setAttribute('stdDeviation', 0 +','+ 0);
		});
	}

	/**
	 * Handle filter
	 * @param 		{Boolean} 		recusrive 			If the function need to be called again at the end of it's execution
	 */
	_handleFilter() {
		// animation or move is finished
		if ( ! this._isMoving) return;

		// set the motion blur and get the moving difference
		let diff = this._setMotionBlur();

		// recusrive call to apply the blur with requestAnimationFrame for performances
		this._animationFrame = requestAnimationFrame(() => {
			this._handleFilter();
		});
	}

	/**
	 * Set motion blur
	 */
	_setMotionBlur() {

		this._currentPos = __offset(this.elms[0]);
		let xDiff = Math.abs(this._currentPos.left - this._lastPos.left) * this.amount;
		let yDiff = Math.abs(this._currentPos.top - this._lastPos.top) * this.amount;

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
