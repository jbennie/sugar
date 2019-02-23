"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closest;

var _matches = require("./matches");

var _matches2 = _interopRequireDefault(_matches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Go up the dom three to find the first element that matches the passed selector
 *
 * @name 		closest
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @param 		{String|Function} 				selector 	A css selector to search for or a check function that will be used
 * @return 		{HTMLElement} 								The element found or null
 *
 * @example  	js
 * import closest from 'sugarcss/js/dom/closest'
 * const closestElm = closest(myCoolElement, '.my-cool-class');
 * if (closestElm) {
 * 		// we have found en element that matches the selector
 * }
 * // the selector param can be a function that need to return either true or false like so:
 * closest(myCoolElement, (elm) => {
 *   return elm.hasAttribute('my-cool-attribute')
 * })
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function closest(elm, selector) {
  var originalElm = elm;
  elm = elm.parentNode;
  while (elm && elm != originalElm.ownerDocument) {
    if (typeof selector === "function") {
      if (selector(elm)) return elm;
    } else if (typeof selector === "string" && (0, _matches2.default)(elm, selector)) {
      return elm;
    }
    elm = elm.parentNode;
  }
  return null;
}