"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = upperFirst;
/**
 * Upper first
 * @param    {String}    string    The string to process
 * @return    {String}    The processed string with first letter uppercase
 *
 * @example    js
 * import upperFirst from 'coffeekraken-sugar/js/utils/strings/upperFirst'
 * upperFirst('hello world') // Hello world
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}