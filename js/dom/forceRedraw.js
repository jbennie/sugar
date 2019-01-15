'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = forceRedraw;

var _getStyleProperty = require('./getStyleProperty');

var _getStyleProperty2 = _interopRequireDefault(_getStyleProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Force the element to be painted again in case of visual issues
 * @param    {HTMLElement}    $elm    The HTMLElement to force the redraw on
 * @return    {HTMLElement}    The HTMLElement to maintain chainability
 *
 * @example    js
 * import forceRedraw from 'coffeekraken-sugar/js/dom/forceRedraw'
 * forceRedraw($elm)
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 * @see
 */
function forceRedraw($elm) {
  var display = (0, _getStyleProperty2.default)($elm, 'display');
  $elm.style.display = 'none';
  $elm.offsetHeight;
  $elm.style.display = display;
  return $elm;
}