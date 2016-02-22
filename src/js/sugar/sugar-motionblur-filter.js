import SugarSvgFilter from './sugar-svgfilter'
import sDom from './sugar-dom'

export default class SugarMotionBlur extends SugarSvgFilter {

	/**
	 * Steps are used to handle when to stop the requestAnimationFrame when the
	 * element is not moving anymore
	 */


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
		this._lastPos = sDom.offset(this.elm);
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
		this._currentPos = sDom.offset(this.elm);
		let xDiff = Math.abs(this._currentPos.left - this._lastPos.left) * this._amount;
		let yDiff = Math.abs(this._currentPos.top - this._lastPos.top) * this._amount;


		// set the blur
		this._blur.setAttribute('stdDeviation', xDiff+','+yDiff);

		// update lastPos
		this._lastPos = sDom.offset(this.elm);

		// return the diff
		return {
			x : xDiff,
			y : yDiff
		};
	}
}