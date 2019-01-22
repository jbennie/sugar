'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = queryStringToObject;

var _ltrim = require('./ltrim');

var _ltrim2 = _interopRequireDefault(_ltrim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Transform a query string into his object (key => pairs) representation
 * @param 	{String}  	queryString  	The query string to process
 * @return 	{Object} 					The object representation of the query string
 *
 * @example    js
 * import queryStringToObject from 'coffeekraken-sugar/js/utils/strings/queryStringToObject'
 * queryStringToObject('?var1=value1&var2=value2') // { var1: 'value1', var2: 'value2' }
 *
 * @author 	Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 * @see  	http://stackoverflow.com/questions/8648892/convert-url-parameters-to-a-javascript-object
 */
function queryStringToObject(str) {
  str = (0, _ltrim2.default)(str, '?');
  str = decodeURIComponent(str);
  var chunks = str.split('&'),
      obj = {};
  chunks = chunks.filter(function (ch) {
    return ch !== '';
  });
  for (var c = 0; c < chunks.length; c++) {
    console.log(c);
    var split = chunks[c].split('=', 2);
    obj[split[0]] = split[1];
  }
  return obj;
}