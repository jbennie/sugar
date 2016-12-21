"use strict";

exports.__esModule = true;
exports.default = upperFirst;
/**
 * Upper first
 */
function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}