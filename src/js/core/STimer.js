export default class STimer {

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
	 * _tickSetInterval
	 * Store the setInterval instance
	 * @type 	{Number}
	 */
	_tickSetInterval = null;

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
	 * Constructor
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
		}
	}

	/**
	 * remaining
	 * Return the remaining time in ms
	 * @return 	{Number} 	The remaining time in ms
	 */
	remaining() {
		return this._remaining;
		return this._duration - (this._tickTime.getTime() - this._startTime.getTime());
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
	reset() {
		// reset the

		return this;
	}

	/**
	 * start
	 * Start the timer
	 * @return 	{STimer}
	 */
	start() {

		// save the start time
		this._startTime = new Date();
		this._remaining = this._duration;

		// start the interval
		this._tickSetInterval = setInterval(() => {
			// internal tick
			this._tick();
		}, this._tickInterval);

		// loop on each ticks functions
		this._ticks.forEach((tick) => {
			tick(this);
		});

		return this;
	}

	/**
	 * pause
	 * Pause the timer
	 * @return 	{STimer}
	 */
	pause() {
		// clean the interval
		clearInterval(this._tickSetInterval);
		return this;
	}

	/**
	 * stop
	 * Stop the timer
	 * @return 	{STimer}
	 */
	stop() {
		// clear the interval
		clearInterval(this._tickSetInterval);

		return this;
	}

}
