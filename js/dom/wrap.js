"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrap;
/**
 * Wrap an HTMLElement inside another `$wrapper` one
 * @param    {HTMLElement}    $toWrap    The element to wrap
 * @param    {HTMLElement}    $wrapper    The wrapper element
 *
 * @example    js
 * import wrap from 'coffeekraken-sugar/js/dom/wrap'
 * const $wrapper = document.createElement('div')
 * // assuming:
 * // <div>
 * //   <span class="wrap">Hello World</span>
 * // </div>
 * wrap(document.querySelector('.wrap'), $wrapper)
 * // output:
 * // <div>
 * //   <div>
 * //     <span class="wrap">Hello World</span>
 * //   </div>
 * // </div>
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function wrap($elm, $wrapper) {
  if (typeof $wrapper === "string") {
    $wrapper = document.createElement($wrapper);
  }
  $elm.parentNode.appendChild($wrapper);
  return $wrapper.appendChild($elm);
}