'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = next;

var _matches = require('./matches');

var _matches2 = _interopRequireDefault(_matches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Browse the passed element next siblings to find the first element that matches the passed selector
 *
 * @name 		next
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @param 		{String} 						selector 	A css selector to search for
 * @return 		{HTMLElement} 								The element found or null
 *
 * @example  	js
 * import next from 'sugarcss/js/dom/next'
 * const nextElm = next(myCoolElement, '.my-cool-class');
 * if (nextElm) {
 * 		// we have found en element that matches the selector
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function next(elm, selector) {
  elm = elm.nextSibling;
  while (elm) {
    if ((0, _matches2.default)(elm, selector)) {
      return elm;
    }
    elm = elm.nextSibling;
  }
  return false;
}