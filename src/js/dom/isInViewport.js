/**
 * Check if the passed HTMLElement is in the viewport or not
 *
 * @name 		isInViewport
 * @param 		{HTMLElement} 				elm  			The element to insert
 * @param 		{Object} 					[offset=50] 	An object of top, right, bottom and left offset used to detect the status or an object with top, right, bottom and left offsets
 * @return 		{Boolean									If the element is in the viewport or not
 *
 * @example  	js
 * import isInViewport from 'coffeekraken-sugar/js/dom/isInViewport'
 * if (isInViewport(myCoolHTMLElement) {
 * 		// i'm in the viewport
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isInViewport(elm, offset = 50) {
	// handle offset
	let offsetTop = offset;
	let offsetRight = offset;
	let offsetBottom = offset;
	let offsetLeft = offset;
	if (typeof(offset) === 'object') {
		offsetTop = offset.top || 0;
		offsetRight = offset.right || 0;
		offsetBottom = offset.bottom || 0;
		offsetLeft = offset.left || 0;
	}
	const containerHeight = window.innerHeight || document.documentElement.clientHeight;
	const containerWidth = window.innerWidth || document.documentElement.clientWidth;
	const rect = elm.getBoundingClientRect();
	const isTopIn = rect.top - containerHeight - offsetBottom <= 0;
	const isBottomIn = rect.bottom - offsetTop >= 0;
	const isLeftIn = rect.left - containerWidth - offsetRight <= 0;
	const isRightIn = rect.right - offsetLeft >= 0;
	return isTopIn && isBottomIn && isLeftIn && isRightIn;
}
