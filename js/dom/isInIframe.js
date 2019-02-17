"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isInIframe;
/**
 * Check if the page is loaded inside an iframe
 *
 * @return    {Boolean}    true if in iframe, false if not
 *
 * @example    js
 * import isInIframe from 'coffeekraken-sugar/js/dom/isInIframe'
 * if (isInIframe()) {
 *   // do something
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isInIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}