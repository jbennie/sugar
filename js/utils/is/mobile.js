'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobile;

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Detect if is a mobile device (phone or tablet)
 * @return    {Boolean}    true if is a mobile, false if not
 * @example 	js
 * import isMobile from 'coffeekraken-sugar/js/utils/is/mobile'
 * if (isMobile()) {
 *   // do something cool...
 * }
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isMobile() {
  var md = new _mobileDetect2.default(window.navigator.userAgent);
  return md.mobile() !== null;
}