"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addEventListener;
/**
 * Add an event listener on an element and return the function to remove the event listener
 * @param    {HTMLElement}    $elm    The HTMLElement on which to add the event listener
 * @param    {String}    eventName    THe event name to listen to
 * @param    {Function}    callback    The callback function to call on event
 * @param    {Mixed}    [bind=null]    Bind the callback function
 * @param    {Boolean}    [useCapture=false]    Use capture phase or not
 * @param    {object}    [options={}]    An options object that specifies characteristics about the event listener
 * @return    {Function}    The remove event listener function
 *
 * @example    js
 * import addEventListener from 'coffeekraken-sugar/js/dom/addEventListener'
 * const removeEventListener = addEventListener($myCoolElm, 'click', this._myCoolFunction, this)
 * // remove the event listener
 * removeEventListener()
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function addEventListener($elm, eventName, callback) {
  var bind = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var useCapture = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  // the function to bind
  if (bind) {
    callback = callback.bind(bind);
  }
  // add the event listener
  $elm.addEventListener(eventName, callback, useCapture, options);
  // return the removeEventListener function
  return function () {
    $elm.removeEventListener(eventName, callback, useCapture, options);
  };
}