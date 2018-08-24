'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPhone;

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Detect if is a phone device
 * @return    {Boolean}    true if is a phone, false if not
 * @example 	js
 * import isPhone from 'coffeekraken-sugar/js/utils/is/phone'
 * if (isPhone()) {
 *   // do something cool...
 * }
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isPhone() {
  var md = new _mobileDetect2.default(window.navigator.userAgent);
  return md.phone() !== null;
}