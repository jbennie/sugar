import __whenInViewport from './whenInViewport'
import __whenOutOfViewport from './whenOutOfViewport'
import __isInViewport from './isInViewport'

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
export default class InViewportStatusChangeDetector {

	/**
	 * The element to track
	 * @type 	{HTMLElement}
	 */
	_elm = null;

	/**
	 * The callback stack
	 * @type 	{Object}
	 */
	_cbStack = {
		enter : [],
		exit : []
	};

	/**
	 * Track if the element is in viewport
	 * @type 	{Boolean}
	 */
	_isInViewportCached = null;

	/**
	 * Track is the tracker is destroyed
	 * @type 	{Boolean}
	 */
	_destroyed = false;

	/**
	 * @constructor
	 * @param 		{HTMLElement} 		elm 		The element to track
	 */
	constructor(elm) {
		// save the element
		this._elm = elm;

		// if not in viewport at start
		if ( ! this._isInViewport()) {
			this._whenInViewport();
		} else {
			this._whenOutOfViewport();
		}
	}

	/**
	 * Check if the element is in viewport
	 * @return 		{Boolean}
	 */
	_isInViewport() {
		// return if not null
		if (this._isInViewportCached !== null) return this._isInViewportCached;
		// check if is in viewport
		this._isInViewportCached = __isInViewport(this._elm, 50);
		setTimeout(() => {
			this._isInViewportCached = null;
		});
	}

	/**
	 * Detect when the element is in viewport
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
	 * Detect when the element exit the viewport
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
	 * Add a callback
	 * @param 		{String} 	status 					The status to track (enter|exit)
	 * @param 		{Function} 	cb 						The callback to add
	 * @return 		{InViewportStatusChangeDetector} 	The instance itself to maintain chainability
	 */
	on(status, cb) {
		if ( ! this._cbStack[status]) throw `The status "${status}" that you want to track is not supported...`;
		this._cbStack[status].push(cb);
		return this;
	}

	/**
	 * Remove a callback
	 * @param 	{String} 	status 					The status to remove (enter|exit)
	 * @param 	{Function} 	cb 						The callback to remove
	 * @return 	{InViewportStatusChangeDetector} 	The instance itself to maintain chainability
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
	 * Destroy the tracker
	 */
	destroy() {
		this._destroyed = true;
		this._cbStack = {
			enter : [],
			exit : []
		};
	}
}
