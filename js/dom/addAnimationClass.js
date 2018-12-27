'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addAnimationClass;

var _removeClassesOnAnimationEnd = require('./removeClassesOnAnimationEnd');

var _removeClassesOnAnimationEnd2 = _interopRequireDefault(_removeClassesOnAnimationEnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Add a class that trigger an animation and remove it at the end
 *
 * @param    {HTMLElement}    elm    The element to take care of
 * @param    {String}    class    The class to apply
 * @return    {HTMLElement}    The elm to maintain chainability
 *
 * @example    js
 * import addAnimationClass from 'coffeekraken-sugar/js/dom/addAnimationClass'
 * addAnimationClass(myElm, 'my-cool-class')
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function addAnimationClass(elm, cls) {
  // remove the class at the end of the animation
  (0, _removeClassesOnAnimationEnd2.default)(elm, [cls]);
  // add the class to the element
  elm.classList.add(cls);
  // return the element
  return elm;
}