import __offset from './offset';
/**
 * Get the offset top and left of the passed element from his parent top left point
 *
 * @name 		offset
 * @param 		{HTMLElement} 					elm  		The element to get the offset from
 * @return 		{Object} 									The offset top and left object
 *
 * @example  	js
 * import offsetParent from 'coffeekraken-sugar/js/dom/offsetParent'
 * const offsetParentElm = offsetParent(myCoolElement);
 * // output : { top : 200, left : 300 }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function offsetParent(elm) {
	const parentOffset = __offset(elm.parentNode);
	const offset = __offset(elm);
	return {
		top : offset.top - parentOffset.top,
		left : offset.left - parentOffset.left
	};
}
