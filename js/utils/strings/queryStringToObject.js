'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = queryStringToObject;
/**
 * Transform a query string into his object (key => pairs) representation
 * @param 	{String}  	queryString  	The query string to process
 * @return 	{Object} 					The object representation of the query string
 * @author 	Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 * @see  	http://stackoverflow.com/questions/8648892/convert-url-parameters-to-a-javascript-object
 */
function queryStringToObject(str) {
  str = decodeURIComponent(str);
  var chunks = str.split('&'),
      obj = {};
  for (var c = 0; c < chunks.length; c++) {
    var split = chunks[c].split('=', 2);
    obj[split[0]] = split[1];
  }
  return obj;
}