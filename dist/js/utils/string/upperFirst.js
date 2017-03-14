"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = upperFirst;
/**
 * Upper first
 */
function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}