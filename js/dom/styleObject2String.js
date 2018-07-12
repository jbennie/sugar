'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = styleObject2String;

var _uncamelize = require('../utils/string/uncamelize');

var _uncamelize2 = _interopRequireDefault(_uncamelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transform a style object to inline string separated by ;
 *
 * @name 		styleObject2String
 * @param 		{Object} 				styleObj 		An object of style to apply
 * @return 		(String) 								The string style representation
 *
 * @example 	js
 * import styleObject2String from 'sugarcss/js/dom/styleObject2String'
 * const styleString = styleObject2String({
 * 		paddingLeft : '20px',
 * 		display : 'block'
 * });
 * // output => padding-left:20px; display:block;
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function styleObject2String(styleObj) {
  // process the style object
  var propertiesArray = [];
  for (var key in styleObj) {
    var value = styleObj[key];
    // if the value is ''
    // mean that we need to get rid of
    if (value === undefined || value === '') {
      delete styleObj[key];
    } else {
      propertiesArray.push((0, _uncamelize2.default)(key) + ':' + value + ';');
    }
  }
  // return the css text
  return propertiesArray.join(' ');
}