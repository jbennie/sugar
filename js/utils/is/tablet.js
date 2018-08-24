'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTablet;

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Detect if is a tablet device
 * @return    {Boolean}    true if is a tablet, false if not
 * @example 	js
 * import isTablet from 'coffeekraken-sugar/js/utils/is/tablet'
 * if (isTablet()) {
 *   // do something cool...
 * }
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isTablet() {
  var md = new _mobileDetect2.default(window.navigator.userAgent);
  return md.tablet() !== null;
}