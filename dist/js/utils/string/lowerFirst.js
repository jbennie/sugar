"use strict";

exports.__esModule = true;
exports.default = lowerFirst;
/**
 * Lower first letter
 */
function lowerFirst(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}