"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name 		STimer
 * Class that let you create and handle timer with ease.
 * With this class you can set some callback function that will be
 * called each x ms or tell that you want your callbacks to be called
 * a certain number of time during the timer time.
 *
 * @example 	js
 * const myTimer = new STimer(2000, {
 * 		tickCount : 5
 * });
 * myTimer.onTick((myTimer) => {
 * 		// do something here...
 * });
 * myTimer.start();
 *
 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
 */
var STimer = function () {

	/**
  * @constructor
  * @param 	{number} 	[duration=1000] 		The duration of the timer in ms
  * @param 	{Object} 	settings 		The settings for the timer
  * @return 	{STimer} 					The STimer instance
  */


	/**
  * Store the last tick time
  *
  * @type 	{Date}
  */


	/**
  * Store the setInterval instance
  *
  * @type 	{Number}
  */


	/**
  * Store all the functions to call on tick
  *
  * @type 	{Array}
  */


	/**
  * Store the remaining time
  *
  * @type 	{Number}
  */


	/**
  * Store the settings for the timer
  *
  * @type 		{Object}
  */
	function STimer(duration) {
		var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, STimer);

		this._settings = {

			/**
    * Store the interval between ticks
    *
    * @setting
    * @type 		{Number}
    * @default 	1000
    */
			tickInterval: 1000,

			/**
    * Set the number of tick wanted
    *
    * @setting
    * @type 		{Integer}
    * @default 	null
    */
			tickCount: null,

			/**
    * Set if the timer has to loop
    *
    * @setting
    * @type 		{Boolean}
    * @default 	false
    */
			loop: false

		};
		this._duration = 0;
		this._remaining = 0;
		this._tickInterval = 1000;
		this._ticks = [];
		this._completes = [];
		this._tickSetTimeout = null;
		this._startTime = null;
		this._tickTime = null;
		this._pauseTime = null;

		this._duration = duration;

		// updating settings
		this._settings = Object.assign(this._settings, settings);

		// calculate the tickInterval
		if (this._settings.tickCount) {
			this._tickInterval = this._duration / this._settings.tickCount; // remove 1 cause the first tick is always the start time
		} else {
			this._tickInterval = this._settings.tickInterval;
		}
	}

	/**
  * Internal tick function
  * @return 	{void}
  */


	/**
  * Store the pause time
  *
  * @type 	{Date}
  */


	/**
  * Store the time when the timer is started
  *
  * @type 	{Date}
  */


	/**
  * Store all the functions to call on complete
  *
  * @type 	{Array}
  */


	/**
  * Computed value depending on the settings
  *
  * @type 	{Number}
  */


	/**
  * Store the timer duration wanted
  *
  * @type 	{Number}
  */


	_createClass(STimer, [{
		key: "_tick",
		value: function _tick() {
			var _this = this;

			// save the remaining timeout
			this._tickTime = new Date();

			// update remaing
			this._remaining -= this._tickInterval;

			// loop on each ticks functions
			this._ticks.forEach(function (tick) {
				tick(_this);
			});

			// if we are at the end of the timer
			if (this.remaining() <= 0) {
				// stop the timer
				this.stop();
				// loop on each completes functions
				this._completes.forEach(function (complete) {
					complete(_this);
				});
				// check if need to loop
				if (this._settings.loop) {
					this.start();
				}
			} else {
				// launch another tick
				clearTimeout(this._tickSetTimeout);
				this._tickSetTimeout = setTimeout(function () {
					_this._tick();
				}, this._tickInterval);
			}
		}

		/**
   * Return the remaining time in ms
   * @return 	{Number} 	The remaining time in ms
   */

	}, {
		key: "remaining",
		value: function remaining() {
			return this._remaining;
		}

		/**
   * Set or get the duration
   * @param	{Number} 	[duration=null]		Set the duration
   * @return 	{Number} 						The duration
   */

	}, {
		key: "duration",
		value: function duration() {
			var _duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			if (_duration) {
				this._duration = _duration;
				if (this._settings.tickCount) {
					this._tickInterval = this._duration / this._settings.tickCount; // remove 1 cause the first tick is always the start time
				}
			}
			return this._duration;
		}

		/**
   * Register a function called on tick
   * @param 	{Function} 	A function to call on tick
   * @return 	{STimer} 	The timer instance
   */

	}, {
		key: "onTick",
		value: function onTick(fn) {
			// add the function if not already
			if (this._ticks.indexOf(fn) !== -1) return;
			this._ticks.push(fn);
		}

		/**
   * Register a function called on complete
   * @param 	{Function} 	A function to call on complete
   * @retun 	{STimer} 	The timer instance
   */

	}, {
		key: "onComplete",
		value: function onComplete(fn) {
			// add the function if not already
			if (this._completes.indexOf(fn) !== -1) return;
			this._completes.push(fn);
		}

		/**
   * Reset the timer
   * @param 	{Boolean} 	start 	If the timer has to start after reseting or not
   * @return 	{STimer}
   */

	}, {
		key: "reset",
		value: function reset() {
			var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


			// stop the timeout
			clearTimeout(this._tickSetTimeout);

			// reset the different timer elements
			this._pauseTime = null;
			this._remaining = this._duration;

			// check if need to start again
			if (start) this.start();

			// maintain chainability
			return this;
		}

		/**
   * Start the timer
   * @return 	{STimer}
   */

	}, {
		key: "start",
		value: function start() {
			var _this2 = this;

			var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


			// clear the timeout to be sure
			clearTimeout(this._tickSetTimeout);

			// set the duration
			if (duration) this.duration(duration);

			// if no tick time
			if (!this._tickTime) {
				this._tickTime = new Date();
			}

			// if is a pausetime
			// mean that we resume the timer
			if (this._pauseTime) {

				// calculate time before new tick
				var elapsed = this._pauseTime.getTime() - this._tickTime.getTime();
				var remaining = this._tickInterval - elapsed;
				clearTimeout(this._tickSetTimeout);
				this._tickSetTimeout = setTimeout(function () {
					_this2._tick();
				}, remaining);

				// reset pauseTime
				this._pauseTime = null;
			} else {
				// save the start time
				this._startTime = new Date();
				this._remaining = this._duration;

				// first time tick
				clearTimeout(this._tickSetTimeout);
				this._tickSetTimeout = setTimeout(function () {
					_this2._tick();
				}, this._tickInterval);
			}

			// maintain chainability
			return this;
		}

		/**
   * Pause the timer
   * @return 	{STimer}
   */

	}, {
		key: "pause",
		value: function pause() {

			// set the pauseTime
			this._pauseTime = new Date();

			// clean the interval
			clearTimeout(this._tickSetTimeout);

			// maintain chainability
			return this;
		}

		/**
   * Stop the timer
   * @return 	{STimer}
   */

	}, {
		key: "stop",
		value: function stop() {
			// reset
			this.reset();

			// maintain chainability
			return this;
		}

		/**
   * Destroy the timer
   */

	}, {
		key: "destroy",
		value: function destroy() {
			this.stop();
			this._completes = [];
			this._ticks = [];
		}
	}]);

	return STimer;
}();

exports.default = STimer;