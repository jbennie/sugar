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
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 * @see 		https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d 	Based on
 */
export default function onSwipe(elm, cb, settings = {}) {
	var touchstartX = 0;
	var touchstartY = 0;
	var touchendX = 0;
	var touchendY = 0;
	settings = {
		threshold : 100,
		...settings
	}
	var gesuredZone = elm;
	gesuredZone.addEventListener('touchstart', function(event) {
		touchstartX = event.changedTouches[0].screenX;;
		touchstartY = event.changedTouches[0].screenY;;
	}, false);

	gesuredZone.addEventListener('touchend', function(event) {
		touchendX = event.changedTouches[0].screenX;;
		touchendY = event.changedTouches[0].screenY;;
		handleGesure();
	}, false);

	function handleGesure() {
		const swipeNfo = {
			distanceX : Math.abs(touchendX - touchstartX),
			distanceY : Math.abs(touchendY - touchstartY)
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
		if (swipeNfo.left || swipeNfo.right || swipeNfo.down || swipeNfo.up) {
			cb(swipeNfo);
		}
	}
}
