"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lowerFirst;
/**
 * Lower first letter
 * @param    {String}    string    The string to lower the first letter
 * @return    {String}    The string with the first letter lowered
 *
 * @example    js
 * import lowerFirst from 'coffeekraken-sugar/js/utils/strings/lowerFirst'
 * lowerFirst('Hello world') // hello world
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function lowerFirst(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}