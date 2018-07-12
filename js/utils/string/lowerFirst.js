"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lowerFirst;
/**
 * Lower first letter
 */
function lowerFirst(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}