'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isSamsumgBrowser;

var _mobileDetect = require('mobile-detect');

var _mobileDetect2 = _interopRequireDefault(_mobileDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Detect if is the samsung stock browser that is running the page
 * @example    js
 * import isSamsumgBrowser from 'coffeekraken-sugar/js/utils/is/samsungBrowser'
 * if (isSamsumgBrowser()) {
 *   // do something
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isSamsumgBrowser() {
  return window.navigator.userAgent.match(/SamsungBrowser/i) !== null;
}