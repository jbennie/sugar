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
export default function isInViewport(elm, offset = 50) {
	const containerHeight = window.innerHeight || document.documentElement.clientHeight;
	const containerWidth = window.innerWidth || document.documentElement.clientWidth;
	const rect = elm.getBoundingClientRect();
	return (
		rect.top - containerHeight - offset <= 0
		&& rect.bottom + offset  >= 0
		&& rect.left - containerWidth - offset <= 0
		&& rect.right + offset >= 0
	);
}
window.__isInViewport = isInViewport;
