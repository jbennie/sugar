import __getTransitionProperties from './getTransitionProperties'

/**
 * Monitor an HTMLElement to be notified when his transition has ended
 *
 * @name 		whenTransitionEnd
 * @param 		{HTMLElement} 				elm 		The element to monitor
 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element transition has ended
 * @return 		(Promise) 								The promise that will be resolved when the element transition has ended
 *
 * @example 	js
 * import whenTransitionEnd from 'sugarcss/js/dom/whenTransitionEnd'
 * whenTransitionEnd(myCoolHTMLElement).then((elm) => {
 * 		// do something with your element transition has ended...
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function whenTransitionEnd(elm, cb = null) {
	return new Promise((resolve, reject) => {
		const transition = __getTransitionProperties(elm);
		setTimeout(() => {
			resolve();
			cb && cb();
		}, transition.totalDuration);
	});
}
