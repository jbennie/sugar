import __isInViewport from './isInViewport'
import __throttle from '../utils/functions/throttle'
import __closest from './closest'

/**
 * Monitor an HTMLElement to be notified when it exit the viewport
 *
 * @name 		whenOutOfViewport
 * @param 		{HTMLElement} 				elm 		The element to monitor
 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element exit the viewport
 * @return 		(Promise) 								The promise that will be resolved when the element exit the viewport
 *
 * @example 	js
 * import whenOutOfViewport from 'sugarcss/js/dom/whenOutOfViewport'
 * whenOutOfViewport(myCoolHTMLElement).then((elm) => {
 * 		// do something with your element that has exit the viewport...
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function whenOutOfViewport(elm, cb = null) {
	return new Promise((resolve, reject) => {
		// try to get the closest element that has an overflow
		let scrollContainerElm = document;
		if ( ! elm._inViewportContainer) {
			const overflowContainer = __closest(elm, '[data-in-viewport-container]');
			if (overflowContainer) {
				elm._inViewportContainer = overflowContainer;
				scrollContainerElm = overflowContainer;
			} else {
				elm._inViewportContainer = window;
				scrollContainerElm = document;
			}
		}

		let isInViewport = true,
			_cb = () => {
				if ( ! isInViewport) {
					scrollContainerElm.removeEventListener('scroll', checkViewport);
					window.removeEventListener('resize', checkViewport);
					if (cb)	cb(elm);
					resolve(elm);
				}
			}
		let checkViewport = __throttle((e) => {
			isInViewport = __isInViewport(elm, 50);
			_cb();
		},100);

		// listen for resize
		scrollContainerElm.addEventListener('scroll', checkViewport);
		window.addEventListener('resize', checkViewport);
		setTimeout(() => {
			checkViewport(null);
		});
	});
}
