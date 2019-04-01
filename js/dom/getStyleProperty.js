'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStyleProperty;

var _camelize = require('../utils/strings/camelize');

var _camelize2 = _interopRequireDefault(_camelize);

var _autoCast = require('../utils/strings/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a style property on the passed element through the computed style.
 * This function try to store the actual style to not trigger more that 1 redraw
 * each js execution loop.
 *
 * @name 		getStyleProperty
 * @param 		{HTMLElement} 					elm  		The element to get style from
 * @param 		{String} 						property 	The css property to get
 * @return 		{Mixed} 									The style value
 *
 * @example  	js
 * import getStyleProperty from 'sugarcss/js/dom/getStyleProperty'
 * const opacity = getStyleProperty(myCoolHTMLElement, 'opacity');
 *
 * @see 		https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function getStyleProperty(elm, property) {

  // caching mecanisme
  setTimeout(function () {
    elm._sComputedStyle = null;
  });

  var computed = elm._sComputedStyle || window.getComputedStyle(elm);
  elm._sComputedStyle = computed;

  var prefixes = ['', 'webkit-', 'moz-', 'ms-', 'o-', 'khtml-'];
  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var value = computed[(0, _camelize2.default)('' + prefix + property)];
    if (value && value.trim() !== '') return (0, _autoCast2.default)(value);
  }
  return null;
}