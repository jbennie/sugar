import __matches from './matches'

/**
 * Browse the passed element next siblings to find the first element that matches the passed selector
 *
 * @name 		next
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @param 		{String} 						selector 	A css selector to search for
 * @return 		{HTMLElement} 								The element found or null
 *
 * @example  	js
 * import next from 'coffeekraken-sugar/js/dom/next'
 * const nextElm = next(myCoolElement, '.my-cool-class');
 * if (nextElm) {
 * 		// we have found en element that matches the selector
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function next(elm, selector) {
	elm = elm.nextSibling;
	while(elm) {
		if (__matches(elm, selector)) {
			return elm;
		}
		elm = elm.nextSibling;
	}
	return false;
}
