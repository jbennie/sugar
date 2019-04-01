/**
 * Insert an HTMLElement after another HTMLElement
 *
 * @name 		insertAfter
 * @param 		{HTMLElement} 				elm  		The element to insert
 * @param 		{HTMLElement} 				refElm 		The element after which to insert the passed element
 *
 * @example  	js
 * import insertAfter from 'coffeekraken-sugar/js/dom/insertAfter'
 * insertAfter(myElementToInsert, theReferenceElement);
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function insertAfter(elm, refElm) {
	// next sibling of ref elm
	const nextSibling = refElm.nextSibling;
	if ( ! nextSibling) {
		refElm.parentNode.appendChild(elm);
	} else {
		refElm.parentNode.insertBefore(elm, nextSibling);
	}
}
