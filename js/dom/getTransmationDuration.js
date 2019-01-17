'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTransmationDuration;

var _getAnimationProperties = require('./getAnimationProperties');

var _getAnimationProperties2 = _interopRequireDefault(_getAnimationProperties);

var _getTransitionProperties = require('./getTransitionProperties');

var _getTransitionProperties2 = _interopRequireDefault(_getTransitionProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the animation or the transition duration
 * @param    {HTMLElement}    $elm    The element to get the animation/transition duration from
 * @return    {Integer}    The animation/transition duration in ms
 *
 * @example    js
 * import getTransmationDuration from 'coffeekraken-sugar/js/dom/getTransmationDuration'
 * getTransmationDuration($myElm) // 200
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function getTransmationDuration($elm) {
  var animationProperties = (0, _getAnimationProperties2.default)($elm);
  var transitionProperties = (0, _getTransitionProperties2.default)($elm);
  return animationProperties.totalDuration || transitionProperties.totalDuration;
}