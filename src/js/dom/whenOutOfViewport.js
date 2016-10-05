import __isInViewport from './isInViewport'
import __throttle from '../utils/functions/throttle'

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
		let isInViewport = true,
			_cb = () => {
				if ( ! isInViewport) {
					document.removeEventListener('scroll', checkViewport);
					window.removeEventListener('resize', checkViewport);
					if (cb)	cb(elm);
					resolve(elm);
				}
			}
		let checkViewport = __throttle((e) => {
			isInViewport = __isInViewport(elm, { top:50, right:50, bottom:50, left:50 });
			_cb();
		},100);

		// listen for resize
		document.addEventListener('scroll', checkViewport);
		window.addEventListener('resize', checkViewport);
		setTimeout(() => {
			checkViewport(null);
		});
	});
}
