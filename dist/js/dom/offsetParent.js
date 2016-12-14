'use strict';

exports.__esModule = true;
exports.default = offsetParent;

var _offset = require('./offset');

var _offset2 = _interopRequireDefault(_offset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the offset top and left of the passed element from his parent top left point
 *
 * @name 		offset
 * @param 		{HTMLElement} 					elm  		The element to get the offset from
 * @return 		{Object} 									The offset top and left object
 *
 * @example  	js
 * import offsetParent from 'sugarcss/js/dom/offsetParent'
 * const offsetParentElm = offsetParent(myCoolElement);
 * // output : { top : 200, left : 300 }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function offsetParent(elm) {
  var parentOffset = (0, _offset2.default)(elm.parentNode);
  var offset = (0, _offset2.default)(elm);
  return {
    top: offset.top - parentOffset.top,
    left: offset.left - parentOffset.left
  };
}