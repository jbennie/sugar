/** @namespace */

/**
 * Coco
 */
export default class STimer {

	/**
	 * settings
	 * Store the settings for the timer
	 * @type 	{Object}
	 */
	settings = {

		/**
		 * tickInterval
		 * Store the interval between ticks
		 * @type 	{Number}
		 */
		tickInterval : 1000,

		/**
		 * tickCount
		 * Set the number of tick wanted
		 * @type 	{Integer}
		 */
		tickCount : null,

		/**
		 * loop
		 * Set if the timer has to loop
		 * @type 	{Boolean}
		 */
		loop : false

	};

	/**
	 * _duration
	 * Store the timer duration wanted
	 * @type 	{Number}
	 */
	_duration = 0;

	/**
	 * _remaining
	 * Store the remaining time
	 * @type 	{Number}
	 */
	_remaining = 0;

	/**
	 * _tickInterval
	 * Computed value depending on the settings
	 * @type 	{Number}
	 */
	_tickInterval = 1000;

	/**
	 * _ticks
	 * Store all the functions to call on tick
	 * @type 	{Array}
	 */
	_ticks = [];

	/**
	 * _complete
	 * Store all the functions to call on complete
	 * @type 	{Array}
	 */
	_completes = [];

	/**
	 * _tickSetTimeout
	 * Store the setInterval instance
	 * @type 	{Number}
	 */
	_tickSetTimeout = null;

	/**
	 * _startTime
	 * Store the time when the timer is started
	 * @type 	{Date}
	 */
	_startTime = null;

	/**
	 * _tickTime
	 * Store the last tick time
	 * @type 	{Date}
	 */
	_tickTime = null;

	/**
	 * _pauseTime
	 * Store the pause time
	 * @type 	{Date}
	 */
	_pauseTime = null;

	/**
	 * constructor
	 * @instance
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
	 * _tick
	 * Internal tick function
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
	 * remaining
	 * Return the remaining time in ms
	 * @return 	{Number} 	The remaining time in ms
	 */
	remaining() {
		return this._remaining;
	}

	/**
	 * duration
	 * Set or get the duration
	 * @param	{Number} 	duration	Set the duration
	 * @return 	{Number} 				The duration
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
	 * tick
	 * Register a function called on tick
	 * @param 	{Function} 	A function to call on tick
	 * @retun 	{STimer} 	The timer instance
	 */
	tick(fn) {
		// add the function if not already
		if (this._ticks.indexOf(fn) !== -1) return;
		this._ticks.push(fn);
	}

	/**
	 * complete
	 * Register a function called on complete
	 * @param 	{Function} 	A function to call on complete
	 * @retun 	{STimer} 	The timer instance
	 */
	complete(fn) {
		// add the function if not already
		if (this._completes.indexOf(fn) !== -1) return;
		this._completes.push(fn);
	}

	/**
	 * reset
	 * Reset the timer
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
	 * start
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
	 * pause
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
	 * stop
	 * Stop the timer
	 * @return 	{STimer}
	 */
	stop() {
		// reset
		this.reset();

		// maintain chainability
		return this;
	}

}
