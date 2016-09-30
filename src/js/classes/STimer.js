/**
 * @class STimer
 * Class that let you create and handle timer with ease.
 * With this class you can set some callback function that will be
 * called each x ms or tell that you want your callbacks to be called
 * a certain number of time during the timer time.
 *
 * @name STimer
 * @example
 * const myTimer = new STimer(2000, {
 * 		tickCount : 5
 * });
 * myTimer.onTick((myTimer) => {
 * 		// do something here...
 * });
 * myTimer.start();
 * @lang js
 */
export default class STimer {

	/**
	 * Store the settings for the timer
	 *
	 * @property 	settings
	 * @type 		{Object}
	 */
	settings = {

		/**
		 * Store the interval between ticks
		 *
		 * @setting
		 * @name 		tickInterval
		 * @type 		{Number}
		 * @default 	1000
		 */
		tickInterval : 1000,

		/**
		 * Set the number of tick wanted
		 *
		 * @setting
		 * @name 		tickCount
		 * @type 		{Integer}
		 * @default 	null
		 */
		tickCount : null,

		/**
		 * Set if the timer has to loop
		 *
		 * @setting
		 * @name 		loop
		 * @type 		{Boolean}
		 * @default 	false
		 */
		loop : false

	};

	/**
	 * Store the timer duration wanted
	 *
	 * @private
	 * @type 	{Number}
	 */
	_duration = 0;

	/**
	 * Store the remaining time
	 *
	 * @private
	 * @name 	_remaining
	 * @type 	{Number}
	 */
	_remaining = 0;

	/**
	 * Computed value depending on the settings
	 *
	 * @private
	 * @name 	_tickInterval
	 * @type 	{Number}
	 */
	_tickInterval = 1000;

	/**
	 * Store all the functions to call on tick
	 *
	 * @private
	 * @name 	_ticks
	 * @type 	{Array}
	 */
	_ticks = [];

	/**
	 * Store all the functions to call on complete
	 *
	 * @private
	 * @type 	{Array}
	 */
	_completes = [];

	/**
	 * Store the setInterval instance
	 *
	 * @private
	 * @type 	{Number}
	 */
	_tickSetTimeout = null;

	/**
	 * Store the time when the timer is started
	 *
	 * @private
	 * @type 	{Date}
	 */
	_startTime = null;

	/**
	 * Store the last tick time
	 *
	 * @private
	 * @type 	{Date}
	 */
	_tickTime = null;

	/**
	 * Store the pause time
	 *
	 * @private
	 * @type 	{Date}
	 */
	_pauseTime = null;

	/**
	 * Init the timer
	 *
	 * @public
	 * @constructor
	 * @param 	{number} 	[duration=1000] 		The duration of the timer in ms
	 * @param 	{Object} 	settings 		The settings for the timer
	 * @return 	{STimer} 					The STimer instance
	 */
	constructor(duration, settings = {}) {
		this._duration = duration;

		// updating settings
		this.settings = Object.assign(this.settings, settings);

		// calculate the tickInterval
		if (this.settings.tickCount) {
			this._tickInterval = this._duration / this.settings.tickCount; // remove 1 cause the first tick is always the start time
			this._tickInterval = Math.round(this._tickInterval);
		} else {
			this._tickInterval = this.settings.tickInterval;
		}
	}

	/**
	 * Internal tick function
	 *
	 * @private
	 * @name 	_tick
	 * @return 	{void}
	 */
	_tick() {

		// save the remaining timeout
		this._tickTime = new Date();

		// update remaing
		this._remaining -= this._tickInterval;

		// loop on each ticks functions
		this._ticks.forEach((tick) => {
			tick(this);
		});

		// if we are at the end of the timer
		if (this.remaining() <= 0) {
			// stop the timer
			this.stop();
			// loop on each completes functions
			this._completes.forEach((complete) => {
				complete(this);
			});
			// check if need to loop
			if (this.settings.loop) {
				this.start();
			}
		} else {
			// launch another tick
			clearTimeout(this._tickSetTimeout);
			this._tickSetTimeout = setTimeout(() => {
				this._tick();
			}, this._tickInterval);
		}
	}

	/**
	 * Return the remaining time in ms
	 *
	 * @public
	 * @name 	remaining
	 * @return 	{Number} 	The remaining time in ms
	 */
	remaining() {
		return this._remaining;
	}

	/**
	 * Set or get the duration
	 *
	 * @public
	 * @name 	duration
	 * @param	{Number} 	[duration=null]		Set the duration
	 * @return 	{Number} 						The duration
	 */
	duration(duration = null) {
		if (duration) {
			this._duration = duration;
			if (this.settings.tickCount) {
				this._tickInterval = this._duration / this.settings.tickCount; // remove 1 cause the first tick is always the start time
				this._tickInterval = Math.round(this._tickInterval);
			}
		}
		return this._duration;
	}

	/**
	 * Register a function called on tick
	 *
	 * @public
	 * @name 	onTick
	 * @param 	{Function} 	A function to call on tick
	 * @example
	 * const tick = this.tick();
	 * @retun 	{STimer} 	The timer instance
	 */
	onTick(fn) {
		// add the function if not already
		if (this._ticks.indexOf(fn) !== -1) return;
		this._ticks.push(fn);
	}

	/**
	 * Register a function called on complete
	 *
	 * @public
	 * @name 	onComplete
	 * @param 	{Function} 	A function to call on complete
	 * @retun 	{STimer} 	The timer instance
	 */
	onComplete(fn) {
		// add the function if not already
		if (this._completes.indexOf(fn) !== -1) return;
		this._completes.push(fn);
	}

	/**
	 * Reset the timer
	 *
	 * @public
	 * @name 	reset
	 * @param 	{Boolean} 	start 	If the timer has to start after reseting or not
	 * @return 	{STimer}
	 */
	reset(start = false) {

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
	 *
	 * @public
	 * @name 	start
	 * @return 	{STimer}
	 */
	start(duration = null) {

		// clear the timeout to be sure
		clearTimeout(this._tickSetTimeout);

		// set the duration
		if (duration) this.duration(duration);

		// if no tick time
		if ( ! this._tickTime) {
			this._tickTime = new Date();
		}

		// if is a pausetime
		// mean that we resume the timer
		if (this._pauseTime) {

			// calculate time before new tick
			const elapsed = this._pauseTime.getTime() - this._tickTime.getTime();
			const remaining = this._tickInterval - elapsed;
			clearTimeout(this._tickSetTimeout);
			this._tickSetTimeout = setTimeout(() => {
				this._tick();
			}, remaining);

			// reset pauseTime
			this._pauseTime = null;

		} else {
			// save the start time
			this._startTime = new Date();
			this._remaining = this._duration;

			// first time tick
			clearTimeout(this._tickSetTimeout);
			this._tickSetTimeout = setTimeout(() => {
				this._tick();
			}, this._tickInterval);
		}

		// maintain chainability
		return this;
	}

	/**
	 * Pause the timer
	 *
	 * @public
	 * @name 	pause
	 * @return 	{STimer}
	 */
	pause() {

		// set the pauseTime
		this._pauseTime = new Date();

		// clean the interval
		clearTimeout(this._tickSetTimeout);

		// maintain chainability
		return this;
	}

	/**
	 * Stop the timer
	 *
	 * @public
	 * @name 	stop
	 * @return 	{STimer}
	 */
	stop() {
		// reset
		this.reset();

		// maintain chainability
		return this;
	}

}
