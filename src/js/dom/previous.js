import __matches from './matches'

/**
 * Browse the passed element previous siblings to find the first element that matches the passed selector
 *
 * @name 		previous
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @param 		{String} 						selector 	A css selector to search for
 * @return 		{HTMLElement} 								The element found or null
 *
 * @example  	js
 * import previous from 'coffeekraken-sugar/js/dom/previous'
 * const previousElm = previous(myCoolElement, '.my-cool-class');
 * if (previousElm) {
 * 		// we have found en element that matches the selector
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function previous(elm, selector) {
	elm = elm.previousSibling;
	while(elm) {
		if (__matches(elm, selector)) {
			return elm;
		}
		elm = elm.previousSibling;
	}
	return false;
}
