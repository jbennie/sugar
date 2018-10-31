"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requestFullscreen;
/**
 * Request fullscreen on the passed DOM element
 * @param    {HTMLElement}    elm    The element on which to request the fullscreen
 * @return    {Promise}   Returns a Promise which is resolved once full-screen mode has been activated.
 *
 * @example    js
 * import requestFullescreen from 'coffeekraken-sugar/js/dom/requestFullscreen'
 * requestFullscreen(myDomElm)
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function requestFullscreen(elm) {
  if (elm.requestFullscreen) {
    return elm.requestFullscreen();
  } else if (elm.mozRequestFullScreen) {
    return elm.mozRequestFullScreen();
  } else if (elm.webkitRequestFullscreen) {
    return elm.webkitRequestFullscreen();
  } else if (elm.msRequestFullscreen) {
    return elm.msRequestFullscreen();
  }
}