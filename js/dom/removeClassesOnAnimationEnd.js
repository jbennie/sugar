'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeClassesOnAnimationEnd;

var _addEventListenerOnce = require('./addEventListenerOnce');

var _addEventListenerOnce2 = _interopRequireDefault(_addEventListenerOnce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Remove some classes on animation end
 *
 * @param    {HTMLElement}    elm    The element to take care of
 * @param    {Array}    classes    The classes to remove
 * @return    {HTMLElement}    The element to mainain chainability
 *
 * @example    js
 * import removeClassesOnAnimationEnd from 'coffeekraken-sugar/js/dom/removeClassesOnAnimationEnd'
 * removeClassesOnAnimationEnd(myCoolElm, ['my-class'])
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function removeClassesOnAnimationEnd(elm, classes) {
  // listen for animation end on the element just once
  (0, _addEventListenerOnce2.default)(elm, 'animationend', function (e) {
    // remove the classes
    classes.forEach(function (cls) {
      elm.classList.remove(cls);
    });
  });
  // return the element
  return elm;
}