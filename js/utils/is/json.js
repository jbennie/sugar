"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isJson;
/**
 * Check if the passed value is a valid json
 * @param    {Mixed}    value    The value to check
 * @return   {Boolean}   true if it's a valid json, false if not
 *
 * @example    js
 * import isJson from 'coffeekraken-sugar/js/utils/is/json'
 * if (isJson('[{id:10}]')) {
 *   // do something
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isJson(value) {
  try {
    JSON.parse(value);
  } catch (e) {
    return false;
  }
  return true;
}