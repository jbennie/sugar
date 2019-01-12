"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollLeft;
/**
 * Get the amount of scroll left
 *
 * @example    js
 * import scrollLeft from 'coffeekraken-sugar/js/dom/scrollLeft'
 * scrollLeft() // 40
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivier.bossel@gmail.com)
 */
function scrollLeft() {
  return window.pageXOffset || document.scrollLeft || document.body.scrollLeft;
}