'use strict';

exports.__esModule = true;

var _offset = require('../dom/offset');

var _offset2 = _interopRequireDefault(_offset);

var _SSvgFilter2 = require('./SSvgFilter');

var _SSvgFilter3 = _interopRequireDefault(_SSvgFilter2);

var _fastdom = require('fastdom');

var _fastdom2 = _interopRequireDefault(_fastdom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var SMotionblurSvgFilter = function (_SSvgFilter) {
	_inherits(SMotionblurSvgFilter, _SSvgFilter);

	/**
  * @constructor
  * @param 		{Number} 		amount 			The motion blur amount
  */


	/**
  * Store the status of the animation
  * @type 		{Boolean}
  */
	function SMotionblurSvgFilter() {
		var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;

		_classCallCheck(this, SMotionblurSvgFilter);

		// settings
		var _this = _possibleConstructorReturn(this, _SSvgFilter.call(this, '\n\t\t\t<feGaussianBlur in="SourceGraphic" stdDeviation="0,0" />\n\t\t'));

		_this._isMoving = false;
		_this._startMoveTimeout = null;
		_this._notMovingStepsBeforeStop = 5;
		_this._currentStep = 0;
		_this._amount = parseFloat(amount);

		// variables
		_this._animationFrame = null;

		// filter elements
		_this._blur = _this.filter.querySelector('feGaussianBlur');
		return _this;
	}

	/**
  * Apply the filter to element
  * @override
  * @param 		{HTMLElement} 		elm 		The element on which to apply the filter
  */


	SMotionblurSvgFilter.prototype.applyTo = function applyTo(elm) {
		// call parent method
		_SSvgFilter.prototype.applyTo.call(this, elm);
		// listen to animation, transitionstart and move event
		elm.addEventListener('transitionstart', this._onMotionStart.bind(this));
		elm.addEventListener('animationstart', this._onMotionStart.bind(this));
		elm.addEventListener('dragstart', this._onMotionStart.bind(this));
		elm.addEventListener('transitionend', this._onMotionStop.bind(this));
		elm.addEventListener('animationend', this._onMotionStop.bind(this));
		this._lastPos = (0, _offset2.default)(this.elms[0]);
	};

	/**
  * Remove the filter from element
  * @override
  * @param 	{HTMLElement} 	elm 	The element to unapply the filter from
  */


	SMotionblurSvgFilter.prototype.unapplyFrom = function unapplyFrom(elm) {
		// remove event listeners
		elm.removeEventListener('animationStart', this._onMotionStart);
		elm.removeEventListener('transitionstart', this._onMotionStart);
		elm.removeEventListener('dragstart', this._onMotionStart);
		elm.removeEventListener('transitionend', this._onMotionStop);
		elm.removeEventListener('animationend', this._onMotionStop);
		elm.removeEventListener('dragend', this._onMotionStop);
		// call parent
		_SSvgFilter.prototype.unapplyFrom.call(this, elm);
	};

	/**
  * When the animation, transition or draging start
  */


	SMotionblurSvgFilter.prototype._onMotionStart = function _onMotionStart(e) {
		var _this2 = this;

		if (e.target !== this.elms[0]) return;
		clearTimeout(this._startMoveTimeout);
		this._startMoveTimeout = setTimeout(function () {
			_this2._isMoving = true;
			// handle filter
			_this2._handleFilter();
		});
	};

	/**
  * Transition / animation end
  */


	SMotionblurSvgFilter.prototype._onMotionStop = function _onMotionStop(e) {
		var _this3 = this;

		if (e.target !== this.elms[0]) return;
		if (!this._isMoving) return;
		// update is moving status
		this._isMoving = false;
		_fastdom2.default.mutate(function () {
			// set the blur
			_this3._blur.setAttribute('stdDeviation', 0 + ',' + 0);
			_this3.elms[0].style.opacity = .99;
			_this3.elms[0].offsetHeight; // no need to store this anywhere, the reference is enough
			_this3.elms[0].style.opacity = 1;
		});
	};

	/**
  * Handle filter
  * @param 		{Boolean} 		recusrive 			If the function need to be called again at the end of it's execution
  */


	SMotionblurSvgFilter.prototype._handleFilter = function _handleFilter() {
		var _this4 = this;

		// animation or move is finished
		if (!this._isMoving) return;

		// set the motion blur and get the moving difference
		var diff = this._setMotionBlur();

		// check if the element is moving or not anymore
		if (diff.x <= 0 && diff.y <= 0) {
			this._currentStep += 1;
			if (this._currentStep >= this._notMovingStepsBeforeStop) {
				this._currentStep = 0;
				return;
			}
		}

		// recusrive call to apply the blur with requestAnimationFrame for performances
		this._animationFrame = requestAnimationFrame(function () {
			_this4._handleFilter();
		});
	};

	/**
  * Set motion blur
  */


	SMotionblurSvgFilter.prototype._setMotionBlur = function _setMotionBlur() {

		this._currentPos = (0, _offset2.default)(this.elms[0]);
		var xDiff = Math.abs(this._currentPos.left - this._lastPos.left) * this._amount;
		var yDiff = Math.abs(this._currentPos.top - this._lastPos.top) * this._amount;

		// set the blur
		this._blur.setAttribute('stdDeviation', xDiff + ',' + yDiff);

		// update lastPos
		this._lastPos = (0, _offset2.default)(this.elms[0]);

		// return the diff
		return {
			x: xDiff,
			y: yDiff
		};
	};

	/**
  * Destroy the filter
  * @override
  */


	SMotionblurSvgFilter.prototype.destroy = function destroy() {
		cancelAnimationFrame(this._animationFrame);
		_SSvgFilter.prototype.destroy.call(this);
	};

	return SMotionblurSvgFilter;
}(_SSvgFilter3.default);

exports.default = SMotionblurSvgFilter;