"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = constrain;
/**
 * Constrain a value between a min and a max value
 * @param    {Number}    value    The value to constraint
 * @param    {Number}    [min=null]    The min value possible
 * @param    {Number}    [max=null]    The max value possible
 * @return    {Number}    The constrained value
 *
 * @example    js
 * import constrain from 'coffeekraken-sugar/js/utils/numbers/constrain'
 * constrain(100, 0, 50) // 50
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function constrain(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (min !== null && value < min) value = min;
  if (max !== null && value > max) value = max;
  return value;
}