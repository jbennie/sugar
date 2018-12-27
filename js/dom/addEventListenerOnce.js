"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addEventListenerOnce;
/**
 * Add an event listener that will be trigerred only once
 *
 * @param    {HTMLElement}    elm    The element to add the event listener on
 * @param    {String}    event    The event to listen for
 * @param    {Function}    callback    The callback function to call on event
 * @return    {HTMLElement}    The elm to maintain chainability
 *
 * @example    js
 * import addEventListenerOnce from 'coffeekraken-sugar/js/dom/addEventListenerOnce'
 * addEventListenerOnce(myElm, 'click', (e) => {
 *     // do something on click
 * })
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function addEventListenerOnce(elm, event, callback) {
  // event handler
  function eventHandler(e) {
    // call the callback
    callback(e);
    // remove the event listener
    elm.removeEventListener(event, eventHandler);
  }
  // add the listener to the element
  elm.addEventListener(event, eventHandler);
}