"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = closestNotVisible;

var _isVisible = require("./isVisible");

var _isVisible2 = _interopRequireDefault(_isVisible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * const closestElm = closestNotVisible(myCoolElement);
 * if (closestElm) {
 * 		// we have found en element that is not visible
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function closestNotVisible(elm) {
  var originalElm = elm;
  elm = elm.parentNode;
  while (elm && elm != originalElm.ownerDocument) {
    if (!(0, _isVisible2.default)(elm)) {
      return elm;
    }
    elm = elm.parentNode;
  }
  return null;
}