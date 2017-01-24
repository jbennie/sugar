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
export default class STimer {

	/**
	 * Store the settings for the timer
	 *
	 * @type 		{Object}
	 */
	_settings = {

		/**
		 * Store the interval between ticks
		 *
		 * @setting
		 * @type 		{Number}
		 * @default 	1000
		 */
		tickInterval : 1000,

		/**
		 * Set the number of tick wanted
		 *
		 * @setting
		 * @type 		{Integer}
		 * @default 	null
		 */
		tickCount : null,

		/**
		 * Set if the timer has to loop
		 *
		 * @setting
		 * @type 		{Boolean}
		 * @default 	false
		 */
		loop : false

	};

	/**
	 * Store the timer duration wanted
	 *
	 * @type 	{Number}
	 */
	_duration = 0;

	/**
	 * Store the remaining time
	 *
	 * @type 	{Number}
	 */
	_remaining = 0;

	/**
	 * Computed value depending on the settings
	 *
	 * @type 	{Number}
	 */
	_tickInterval = 1000;

	/**
	 * Store all the functions to call on tick
	 *
	 * @type 	{Array}
	 */
	_ticks = [];

	/**
	 * Store all the functions to call on complete
	 *
	 * @type 	{Array}
	 */
	_completes = [];

	/**
	 * Store the setInterval instance
	 *
	 * @type 	{Number}
	 */
	_tickSetTimeout = null;

	/**
	 * Store the time when the timer is started
	 *
	 * @type 	{Date}
	 */
	_startTime = null;

	/**
	 * Store the last tick time
	 *
	 * @type 	{Date}
	 */
	_tickTime = null;

	/**
	 * Store the pause time
	 *
	 * @type 	{Date}
	 */
	_pauseTime = null;

	/**
	 * @constructor
	 * @param 	{number} 	[duration=1000] 		The duration of the timer in ms
	 * @param 	{Object} 	settings 		The settings for the timer
	 * @return 	{STimer} 					The STimer instance
	 */
	constructor(duration, settings = {}) {
		this._duration = duration;

		// updating settings
		this._settings = Object.assign(this._settings, settings);

		// calculate the tickInterval
		if (this._settings.tickCount) {
			this._tickInterval = this._duration / this._settings.tickCount; // remove 1 cause the first tick is always the start time
			this._tickInterval = Math.round(this._tickInterval);
		} else {
			this._tickInterval = this._settings.tickInterval;
		}
	}

	/**
	 * Internal tick function
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
			if (this._settings.loop) {
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
	 * @return 	{Number} 	The remaining time in ms
	 */
	remaining() {
		return this._remaining;
	}

	/**
	 * Set or get the duration
	 * @param	{Number} 	[duration=null]		Set the duration
	 * @return 	{Number} 						The duration
	 */
	duration(duration = null) {
		if (duration) {
			this._duration = duration;
			if (this._settings.tickCount) {
				this._tickInterval = this._duration / this._settings.tickCount; // remove 1 cause the first tick is always the start time
				this._tickInterval = Math.round(this._tickInterval);
			}
		}
		return this._duration;
	}

	/**
	 * Register a function called on tick
	 * @param 	{Function} 	A function to call on tick
	 * @return 	{STimer} 	The timer instance
	 */
	onTick(fn) {
		// add the function if not already
		if (this._ticks.indexOf(fn) !== -1) return;
		this._ticks.push(fn);
	}

	/**
	 * Register a function called on complete
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
	 * @return 	{STimer}
	 */
	stop() {
		// reset
		this.reset();

		// maintain chainability
		return this;
	}

	/**
	 * Destroy the timer
	 */
	destroy() {
		this.stop();
		this._completes = [];
		this._ticks = [];
	}
}
