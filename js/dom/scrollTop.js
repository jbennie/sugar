"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTop;
/**
 * document.scrollTop polyfill
 */
function scrollTop() {
  return window.pageYOffset || document.scrollTop || document.body.scrollTop;
}