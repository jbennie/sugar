/**
 * Check if the passed HTMLElement is in the viewport or not
 *
 * @name 		isInViewport
 * @param 		{HTMLElement} 				elm  		The element to insert
 * @param 		{Object} 					offset 		An object of top, right, bottom and left offset used to detect the status
 * @return 		{Boolean								If the element is in the viewport or not
 *
 * @example  	js
 * import isInViewport from 'sugarcss/js/dom/isInViewport'
 * if (isInViewport(myCoolHTMLElement) {
 * 		// i'm in the viewport
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
import __getBoundingClientRect from './getBoundingClientRect'
import __inViewport from 'in-viewport'
import __closest from './closest'
export default function isInViewport(elm, offset = 50) {
	// // try to get the closest element that has an overflow
	// if ( ! elm._inViewportContainer) {
	// 	const overflowContainer = __closest(elm, '[data-in-viewport-container]');
	// 	if (overflowContainer) {
	// 		elm._inViewportContainer = overflowContainer;
	// 	} else {
	// 		elm._inViewportContainer = window;
	// 	}
	// }
	//
	// if (elm._inViewportContainer !== window) {
	// 	containerOffset = __getBoundingClientRect(elm._inViewportContainer);
	// 	containerHeight = elm._inViewportContainer.offsetHeight;
	// 	containerWidth = elm._inViewportContainer.offsetWidth;
	// }

	const containerHeight = window.innerHeight || document.documentElement.clientHeight;
	const containerWidth = window.innerWidth || document.documentElement.clientWidth;
	const rect = __getBoundingClientRect(elm);
	return (
		rect.top - containerHeight - offset <= 0
		&& rect.bottom + offset  >= 0
		&& rect.left - containerWidth - offset <= 0
		&& rect.right + offset >= 0
	);
}
