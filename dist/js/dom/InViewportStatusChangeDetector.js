'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _whenInViewport2 = require('./whenInViewport');

var _whenInViewport3 = _interopRequireDefault(_whenInViewport2);

var _whenOutOfViewport2 = require('./whenOutOfViewport');

var _whenOutOfViewport3 = _interopRequireDefault(_whenOutOfViewport2);

var _isInViewport2 = require('./isInViewport');

var _isInViewport3 = _interopRequireDefault(_isInViewport2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name 		InViewportStatusChangeDetector
 * This class allows you to monitor an HTMLElement and be notified when it enters or exit the viewport.
 *
 * @example 	js
 * const detector = new InViewportStatusChangeDetector(myCoolHTMLElement);
 * detector.on('enter', (elm) => {
 * 		// the element has entered the viewport
 * });
 * detector.on('exit', (elm) => {
 * 		// the element has exit the viewport
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
var InViewportStatusChangeDetector = function () {

	/**
  * @constructor
  * @param 		{HTMLElement} 		elm 		The element to track
  */


	/**
  * Track if the element is in viewport
  * @type 	{Boolean}
  */


	/**
  * The element to track
  * @type 	{HTMLElement}
  */
	function InViewportStatusChangeDetector(elm) {
		_classCallCheck(this, InViewportStatusChangeDetector);

		this._elm = null;
		this._cbStack = {
			enter: [],
			exit: []
		};
		this._isInViewportCached = null;
		this._destroyed = false;

		// save the element
		this._elm = elm;

		// if not in viewport at start
		if (!this._isInViewport()) {
			this._whenInViewport();
		} else {
			this._whenOutOfViewport();
		}
	}

	/**
  * Check if the element is in viewport
  * @return 		{Boolean}
  */


	/**
  * Track is the tracker is destroyed
  * @type 	{Boolean}
  */


	/**
  * The callback stack
  * @type 	{Object}
  */


	_createClass(InViewportStatusChangeDetector, [{
		key: '_isInViewport',
		value: function _isInViewport() {
			var _this = this;

			// return if not null
			if (this._isInViewportCached !== null) return this._isInViewportCached;
			// check if is in viewport
			this._isInViewportCached = (0, _isInViewport3.default)(this._elm);
			setTimeout(function () {
				_this._isInViewportCached = null;
			});
		}

		/**
   * Detect when the element is in viewport
   */

	}, {
		key: '_whenInViewport',
		value: function _whenInViewport() {
			var _this2 = this;

			(0, _whenInViewport3.default)(this._elm).then(function () {
				// stop if destroyed
				if (_this2._destroyed) return;
				// apply callback
				_this2._cbStack.enter.forEach(function (cb) {
					cb(_this2._elm);
				});
				// listen when out of viewport
				_this2._whenOutOfViewport();
			});
		}
		/**
   * Detect when the element exit the viewport
   */

	}, {
		key: '_whenOutOfViewport',
		value: function _whenOutOfViewport() {
			var _this3 = this;

			(0, _whenOutOfViewport3.default)(this._elm).then(function () {
				// stop if destroyed
				if (_this3._destroyed) return;
				// apply callback
				_this3._cbStack.exit.forEach(function (cb) {
					cb(_this3._elm);
				});
				// listen when in viewport
				_this3._whenInViewport();
			});
		}

		/**
   * Add a callback
   * @param 		{String} 	status 					The status to track (enter|exit)
   * @param 		{Function} 	cb 						The callback to add
   * @return 		{InViewportStatusChangeDetector} 	The instance itself to maintain chainability
   */

	}, {
		key: 'on',
		value: function on(status, cb) {
			if (!this._cbStack[status]) throw 'The status "' + status + '" that you want to track is not supported...';
			this._cbStack[status].push(cb);
			return this;
		}

		/**
   * Remove a callback
   * @param 	{String} 	status 					The status to remove (enter|exit)
   * @param 	{Function} 	cb 						The callback to remove
   * @return 	{InViewportStatusChangeDetector} 	The instance itself to maintain chainability
   */

	}, {
		key: 'off',
		value: function off(status) {
			var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			if (!cb) {
				this._cbStack[status] = [];
			} else {
				var idx = this._cbStack[status].indexOf(cb);
				if (idx !== -1) {
					this._cbStack[status].splice(idx, 1);
				}
			}
			return this;
		}

		/**
   * Destroy the tracker
   */

	}, {
		key: 'destroy',
		value: function destroy() {
			this._destroyed = true;
			this._cbStack = {
				enter: [],
				exit: []
			};
		}
	}]);

	return InViewportStatusChangeDetector;
}();

exports.default = InViewportStatusChangeDetector;