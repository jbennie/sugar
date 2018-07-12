"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prependChild;
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
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function prependChild(elm, refElm) {
  if (!refElm.firstChild) {
    refElm.appendChild(elm);
  } else {
    refElm.insertBefore(elm, refElm.firstChild);
  }
}