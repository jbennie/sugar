import __whenInViewport from '../whenInViewport'
import __whenOutOfViewport from '../whenOutOfViewport'
import __isInViewport from '../isInViewport'

export default class InViewportStatusChangeDetector {

	/**
	 * _elm
	 * The element to track
	 * @type 	{HTMLElement}
	 */
	_elm = null;

	/**
	 * _settings
	 * The settings
	 * @type 	{Object}
	 * @TODO handle settings or remove them
	 */
	_settings = {
		fireFirstEnterCallback  : true,
		fireFirstExitCallback : false
	};

	/**
	 * _cbStack
	 * The callback stack
	 * @type 	{Object}
	 */
	_cbStack = {
		enter : [],
		exit : []
	};

	/**
	 * _isInViewportCachec
	 * Track if the element is in viewport
	 * @type 	{Boolean}
	 */
	_isInViewportCached = null;

	/**
	 * _destroyed
	 * Track is the tracker is destroyed
	 * @type 	{Boolean}
	 */
	_destroyed = false;

	/**
	 * Constructor
	 * @param 	{HTMLElement} 	elm 	The element to track
	 */
	constructor(elm, settings = {}) {
		// save the element
		this._elm = elm;

		// save the settings
		this._settings = Object.assign(this._settings, settings);

		// if not in viewport at start
		if ( ! this._isInViewport()) {
			this._whenInViewport();
		} else {
			this._whenOutOfViewport();
		}
	}

	/**
	 * _isInViewport
	 * Check if the element is in viewport
	 * @return 	{Boolean}
	 */
	_isInViewport() {
		// return if not null
		if (this._isInViewportCached !== null) return this._isInViewportCached;
		// check if is in viewport
		this._isInViewportCached = __isInViewport(this._elm);
		setTimeout(() => {
			this._isInViewportCached = null;
		});
	}

	/**
	 * _whenInViewport
	 * Detect when the element is in viewport
	 * @return 	{void}
	 */
	_whenInViewport() {
		__whenInViewport(this._elm).then(() => {
			// stop if destroyed
			if (this._destroyed) return;
			// apply callback
			this._cbStack.enter.forEach((cb) => {
				cb(this._elm);
			});
			// listen when out of viewport
			this._whenOutOfViewport();
		});
	}
	/**
	 * _whenOutOfViewport
	 * Detect when the element exit the viewport
	 * @return 	{void}
	 */
	_whenOutOfViewport() {
		__whenOutOfViewport(this._elm).then(() => {
			// stop if destroyed
			if (this._destroyed) return;
			// apply callback
			this._cbStack.exit.forEach((cb) => {
				cb(this._elm);
			});
			// listen when in viewport
			this._whenInViewport();
		});
	}

	/**
	 * on
	 * Add a callback
	 * @param 	{String} 	status 		The status to track (enter|exit)
	 * @param 	{Function} 	cb 			The callback to add
	 * @return 	{InViewportStatusTracker} 	The instance itself to maintain chainability
	 */
	on(status, cb) {
		if ( ! this._cbStack[status]) throw `The status "${status}" that you want to track is not supported...`;
		this._cbStack[status].push(cb);

		// // if the status is "enter"
		// // we check first time
		// // apply callback
		// if (this._settings.fireFirstEnterCallback && status === 'enter' && this._isInViewport()) {
		// 	cb(this._elm);
		// }
		// // if the status is "exit"
		// // we check first time
		// // apply callback
		// if (this._settings.fireFirstExitCallback && status === 'exit' && ! this._isInViewport()) {
		// 	cb(this._elm);
		// }
		return this;
	}

	/**
	 * off
	 * Remove a callback
	 * @param 	{String} 	status 		The status to remove (enter|exit)
	 * @param 	{Function} 	cb 			The callback to remove
	 * @return 	{InViewportStatusTracker} 	The instance itself to maintain chainability
	 */
	off(status, cb = null) {
		if ( ! cb) {
			this._cbStack[status] = [];
		} else {
			const idx = this._cbStack[status].indexOf(cb);
			if ( idx !== -1) {
				this._cbStack[status].splice(idx,1);
			}
		}
		return this;
	}

	/**
	 * destroy
	 * Destroy the tracker
	 * @return 	{void}
	 */
	destroy() {
		this._destroyed = true;
		this._cbStack = {
			enter : [],
			exit : []
		};
	}
}
