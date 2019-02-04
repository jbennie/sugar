"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isOdd;
/**
 * Check if a number is odd or not
 * @param    {Number}    value    The value to check
 * @return    {Boolean}    true if odd, false if not
 *
 * @example    js
 * import isOdd from 'coffeekraken-sugar/js/utils/is/odd'
 * isOdd(1) // true
 * isOdd(2) // false
 */
function isOdd(value) {
  return value % 2 === 1;
}