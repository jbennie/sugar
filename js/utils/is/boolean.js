"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isBoolean;
/**
 * Check if the passed value is a js Boolean
 * @param    {Mixed}    value    The value to check
 * @return   {Boolean}   true if it's a Boolean, false if not
 *
 * @example    js
 * import isBoolean from 'coffeekraken-sugar/js/utils/is/boolean'
 * if (isBoolean(true) {
 *   // do something
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isBoolean(value) {
  return typeof value === "boolean";
}