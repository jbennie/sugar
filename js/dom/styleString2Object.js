'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = styleString2Object;

var _camelize = require('../utils/string/camelize');

var _camelize2 = _interopRequireDefault(_camelize);

var _autoCast = require('../utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transform a style string to an object representation
 *
 * @name 		styleString2Object
 * @param 		{String} 				style 			The style string
 * @return 		(Object) 								The string object representation
 *
 * @example 	js
 * import styleString2Object from 'sugarcss/js/dom/styleString2Object'
 * const styleString = styleString2Object('padding-left:20px; display:block;');
 * // output => {
 * //		paddingLeft : '20px',
 * // 		display : 'block'
 * // }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function styleString2Object(style) {
  if (!style || style === '') return {};
  var obj = {};
  var split = style.replace(/\s/g, '').split(';');
  split.forEach(function (statement) {
    // split statement by key value pairs
    var spl = statement.split(':'),
        key = (0, _camelize2.default)(spl[0]),
        value = spl[1];
    // add element into object
    obj[key] = (0, _autoCast2.default)(value);
  });
  // return the style object
  return obj;
}