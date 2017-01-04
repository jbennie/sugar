import whenVisible from './whenVisible'
import __isInViewport from './isInViewport'
import __throttle from '../utils/functions/throttle'
import __closest from './closest'

/**
 * Monitor an HTMLElement to be notified when it is in the viewport
 *
 * @name 		whenInViewport
 * @param 		{HTMLElement} 				elm 		The element to monitor
 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element is in the viewport
 * @return 		(Promise) 								The promise that will be resolved when the element is in the viewport
 *
 * @example 	js
 * import whenInViewport from 'sugarcss/js/dom/whenInViewport'
 * whenInViewport(myCoolHTMLElement).then((elm) => {
 * 		// do something with your element that has entered the viewport...
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function whenInViewport(elm, cb = null) {
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

		let isInViewport = false,
			isVisible = false,
			_cb = () => {
				if (isVisible && isInViewport) {
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

		// detect when visible
		whenVisible(elm).then((elm) => {
			isVisible = true;
			_cb();
		});

		// listen for resize
		scrollContainerElm.addEventListener('scroll', checkViewport);
		window.addEventListener('resize', checkViewport);
		setTimeout(() => {
			checkViewport(null);
		});
	});
}
