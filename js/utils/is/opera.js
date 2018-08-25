'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isOpera;
/**
 * Detect if is opera
 * @example 	js
 * import isOpera from 'coffeekraken-sugar/js/utils/is/opera'
 * if (isOpera()) {
 *   // do something cool
 * }
 *
 * @return    {Boolean}    true if is opera, false if not
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isOpera() {
  return navigator.userAgent.toLowerCase().indexOf('op') > -1;
}