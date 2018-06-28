"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = insertAfter;
/**
 * Insert an HTMLElement after another HTMLElement
 *
 * @name 		insertAfter
 * @param 		{HTMLElement} 				elm  		The element to insert
 * @param 		{HTMLElement} 				refElm 		The element after which to insert the passed element
 *
 * @example  	js
 * import insertAfter from 'sugarcss/js/dom/insertAfter'
 * insertAfter(myElementToInsert, theReferenceElement);
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function insertAfter(elm, refElm) {
  // next sibling of ref elm
  var nextSibling = refElm.nextSibling;
  if (!nextSibling) {
    refElm.parentNode.appendChild(elm);
  } else {
    refElm.parentNode.insertBefore(elm, nextSibling);
  }
}