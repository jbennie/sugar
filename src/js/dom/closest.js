import __matches from './matches'

/**
 * Go up the dom three to find the first element that matches the passed selector
 *
 * @name 		closest
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @param 		{String} 						selector 	A css selector to search for
 * @return 		{HTMLElement} 								The element found or null
 *
 * @example  	js
 * import closest from 'sugarcss/js/dom/closest'
 * const closestElm = closest(myCoolElement, '.my-cool-class');
 * if (closestElm) {
 * 		// we have found en element that matches the selector
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function closest(elm, selector) {
	elm = elm.parentNode;
	while(elm && elm != document) {
		if (__matches(elm, selector)) {
			return elm;
		}
		elm = elm.parentNode;
	}
	return null;
}
