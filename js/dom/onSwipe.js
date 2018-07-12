'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = onSwipe;
/**
 * @name 	onSwipe
 * Detect swipes gestures on touch devices.
 *
 * @example 	js
 * import onSwipe from 'coffeekraken-sugar/js/dom/onSwipe'
 * onSwipe(myCoolElm, (swipe) => {
 * 	// check the swipe direction
 * 	if (swipe.left) {
 * 		// do something...
 * 	}
 * 	// support : left, right, up, down
 * 	// etc...
 * }, {
 * 	threshold : 50
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 * @see 		https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d 	Based on
 */
function onSwipe(elm, cb) {
	var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var touchstartX = 0;
	var touchstartY = 0;
	var touchendX = 0;
	var touchendY = 0;
	settings = _extends({
		threshold: 100
	}, settings);
	var gesuredZone = elm;
	gesuredZone.addEventListener('touchstart', function (event) {
		touchstartX = event.changedTouches[0].screenX;;
		touchstartY = event.changedTouches[0].screenY;;
	}, false);

	gesuredZone.addEventListener('touchend', function (event) {
		touchendX = event.changedTouches[0].screenX;;
		touchendY = event.changedTouches[0].screenY;;
		handleGesure();
	}, false);

	function handleGesure() {
		var swipeNfo = {
			distanceX: Math.abs(touchendX - touchstartX),
			distanceY: Math.abs(touchendY - touchstartY)
		};
		if (touchendX + settings.threshold < touchstartX) {
			swipeNfo.left = true;
		}
		if (touchendX - settings.threshold > touchstartX) {
			swipeNfo.right = true;
		}
		if (touchendY + settings.threshold < touchstartY) {
			swipeNfo.up = true;
		}
		if (touchendY - settings.threshold > touchstartY) {
			swipeNfo.down = true;
		}
		if (swipeNfo.left || swipeNfo.right || swipeNfo.down || swipeNfo.up) {
			cb(swipeNfo);
		}
	}
}