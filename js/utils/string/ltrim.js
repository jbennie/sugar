"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ltrim;
/**
 * Trim left a specified string
 * @param    {String}    string    The string to trim
 * @param    {String}    needle    The string to find an cut out if found
 * @return    {String}    The trimed string
 *
 * @example    js
 * import ltrim from 'coffeekraken-sugar/js/utils/strings/ltrim'
 * ltrim('Hello World', 'Hello') // World
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function ltrim(string, needle) {
  if (string.substr(0, needle.length) === needle) {
    return string.substr(needle.length);
  }
  // nothing to trim
  return string;
}