import isVisible from './isVisible'

/**
 * Go up the dom three to find the first element that is not visible.
 * Not visible mean that has either an opacity to 0, a visibility to hidden or a display to none
 *
 * @name 		closestNotVisible
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @return 		{HTMLElement} 								The element found or null
 *
 * @example  	js
 * import closestNotVisible from 'sugarcss/js/dom/closestNotVisible'
 * const closestElm = closest(myCoolElement);
 * if (closestElm) {
 * 		// we have found en element is not visible
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function closestNotVisible(elm) {
	elm = elm.parentNode;
	while(elm && elm != document) {
		if ( ! isVisible(elm)) {
			return elm;
		}
		elm = elm.parentNode;
	}
	return false;
}
