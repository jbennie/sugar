/**
 * Prepend an HTMLElement into another HTMLElement
 *
 * @name 		prependChild
 * @param 		{HTMLElement} 				elm  		The element to prepend
 * @param 		{HTMLElement} 				refElm 		The element in which to prepend the new element
 * @example  	js
 * import prependChild from 'sugarcss/js/dom/prependChild'
 * prependChild(myElementToInsert, theReferenceElement);
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function prependChild(elm, in) {
	if ( ! in.firstChild) {
		in.appendChild(elm);
	} else {
		in.insertBefore(elm, in.firstChild);
	}
	return child;
}
