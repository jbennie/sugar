'use strict';

exports.__esModule = true;
exports.default = isInViewport;

var _getBoundingClientRect = require('./getBoundingClientRect');

var _getBoundingClientRect2 = _interopRequireDefault(_getBoundingClientRect);

var _inView = require('in-view');

var _inView2 = _interopRequireDefault(_inView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check if the passed HTMLElement is in the viewport or not
 *
 * @name 		isInViewport
 * @param 		{HTMLElement} 				elm  		The element to insert
 * @param 		{Object} 					offset 		An object of top, right, bottom and left offset used to detect the status
 * @return 		{Boolean								If the element is in the viewport or not
 *
 * @example  	js
 * import isInViewport from 'sugarcss/js/dom/isInViewport'
 * if (isInViewport(myCoolHTMLElement) {
 * 		// i'm in the viewport
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function isInViewport(elm) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { top: 0, right: 0, bottom: 0, left: 0 };


  _inView2.default.offset(offset);
  return _inView2.default.is(elm);

  // const rect = __getBoundingClientRect(elm);
  // const wh = (window.innerHeight || document.documentElement.clientHeight);
  // const ww = (window.innerWidth || document.documentElement.clientWidth);
  // return (
  // 	rect.top - wh - offset.top <= 0
  // 	&& rect.bottom + offset.bottom  >= 0
  // 	&& rect.left - ww - offset.left <= 0
  // 	&& rect.right + offset.right >= 0
  // );
}