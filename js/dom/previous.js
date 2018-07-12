'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = previous;

var _matches = require('./matches');

var _matches2 = _interopRequireDefault(_matches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Browse the passed element previous siblings to find the first element that matches the passed selector
 *
 * @name 		previous
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @param 		{String} 						selector 	A css selector to search for
 * @return 		{HTMLElement} 								The element found or null
 *
 * @example  	js
 * import previous from 'sugarcss/js/dom/previous'
 * const previousElm = previous(myCoolElement, '.my-cool-class');
 * if (previousElm) {
 * 		// we have found en element that matches the selector
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function previous(elm, selector) {
  elm = elm.previousSibling;
  while (elm) {
    if ((0, _matches2.default)(elm, selector)) {
      return elm;
    }
    elm = elm.previousSibling;
  }
  return false;
}