"use strict";

exports.__esModule = true;
exports.default = scrollTop;
/**
 * document.scrollTop polyfill
 */
function scrollTop() {
  return window.pageYOffset || document.scrollTop || document.body.scrollTop;
}