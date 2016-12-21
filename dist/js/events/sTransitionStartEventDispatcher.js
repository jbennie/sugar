'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class 			STransitionstartEventDispatcher
 * This class does polyfill the transitionstart event that not actually exist for now in the DOM spec.
 * It works in conjunction of the use of the `s-transition` sass mixin.
 * To use this class, you just need to import it into your codebase, that's it!
 *
 * @example 	js
 * require('sugarcss/js/events/STransitionstartEventDispatcher');
 */
var STransitionstartEventDispatcher = function () {

	/**
  * Constructor
  */
	function STransitionstartEventDispatcher() {
		_classCallCheck(this, STransitionstartEventDispatcher);

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


	STransitionstartEventDispatcher.prototype._onTransitionEnd = function _onTransitionEnd(e) {
		if (e.elapsedTime == 0.000001 || e.propertyName == 'outline-color') {
			e.target.dispatchEvent(new CustomEvent('transitionstart', {
				bubbles: true,
				cancelable: true
			}));
		}
	};

	return STransitionstartEventDispatcher;
}();

// create the new dispatcher instance


var dispatcher = new STransitionstartEventDispatcher();

// export the dispatcher
exports.default = dispatcher;