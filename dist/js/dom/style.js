'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = style;

var _uncamelize = require('../utils/string/uncamelize');

var _uncamelize2 = _interopRequireDefault(_uncamelize);

var _styleString2Object = require('./styleString2Object');

var _styleString2Object2 = _interopRequireDefault(_styleString2Object);

var _styleObject2String = require('./styleObject2String');

var _styleObject2String2 = _interopRequireDefault(_styleObject2String);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Set or remove a css style property on an HTMLElement
 *
 * @name 		style
 * @param 		{HTMLElement} 			elm 			The element to process
 * @param 		{Object} 				styleObj 		An object of style to apply
 * @return 		(Object) 								The element applied style
 *
 * @example 	js
 * import style from 'sugarcss/js/dom/style'
 * style(myCoolHTMLElement, {
 * 		paddingLeft : 20,
 * 		display : null
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

if (!window.sugar) window.sugar = {};
window.sugar._styles = new Map();

function style(elm, styleObj) {

  // convert style string to object
  var styleAttr = elm.getAttribute('style');

  if (styleAttr) {
    styleObj = _extends({}, (0, _styleString2Object2.default)(styleAttr), styleObj);
  }

  // apply the style to the element
  // elm.setAttribute('style', __styleObject2String(current.styleObj));
  elm.style.cssText = (0, _styleObject2String2.default)(styleObj);

  // return the style
  return elm.style;
}