import whenVisible from './whenVisible'
import __isInViewport from './isInViewport'
import __throttle from '../utils/functions/throttle'

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
		let isInViewport = false,
			isVisible = false,
			_cb = () => {
				if (isVisible && isInViewport) {
					document.removeEventListener('scroll', checkViewport);
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
		document.addEventListener('scroll', checkViewport);
		window.addEventListener('resize', checkViewport);
		setTimeout(() => {
			checkViewport(null);
		});
	});
}
