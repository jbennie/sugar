'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEdge;
/**
 * Detect if is edge
 * @example 	js
 * import isEdge from 'coffeekraken-sugar/js/utils/is/edge'
 * if (isEdge()) {
 *   // do something cool
 * }
 *
 * @return    {Boolean}    true if is edge, false if not
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isEdge() {
  return navigator.userAgent.indexOf('Edge') > -1;
}