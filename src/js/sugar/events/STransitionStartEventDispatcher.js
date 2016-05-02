/*
 * Sugar-activate.js
#
 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
#
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  20.01.16
 * @updated  20.01.16
 * @version  1.0.0
 */

// Actual activate element class
class STransitionstartEventDispatcher {

	/**
	 * Constructor
	 */
	constructor() {
		// listen for transitionend
		document.addEventListener('transitionend', this._onTransitionEnd, false);
		document.addEventListener('oTransitionEnd', this._onTransitionEnd, false);
		document.addEventListener('webkitTransitionEnd', this._onTransitionEnd, false);
		document.addEventListener('mozTransitionEnd', this._onTransitionEnd, false);
		document.addEventListener('msTransitionEnd', this._onTransitionEnd, false);
	}

	/**
	 * On transition end
	 */
	_onTransitionEnd(e) {
		if (e.elapsedTime == 0.000001 || e.propertyName == 'outline-color') {
			e.target.dispatchEvent(new CustomEvent('transitionstart', {
				bubbles : true,
				cancelable : true
			}));
		}
	}
}

// create the new dispatcher instance
let dispatcher = new STransitionstartEventDispatcher();

// export the dispatcher
export default dispatcher;