'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = objectToQueryString;
/**
 * Transform an object (key => pairs) to a query string like "?var1=value1&var2"
 * @param 		{Object} 		obj 		The object to serialize
 * @return 		{String} 					The query string
 * @example 	js
 * import __objectToQueryString from 'coffeekraken-sugar/js/utils/object/objectToQueryString'
 * console.log(__objectToQueryString({
 * 	value1 : 'coco',
 * 	value1 : 'plop'
 * }));
 * // => ?value1=coco&value2=plop
 * @author  Olivier Bossel <olivier.bossel@gmail.com>
 */
function objectToQueryString(obj) {
  return '?' + Object.keys(obj).reduce(function (a, k) {
    a.push(k + '=' + encodeURIComponent(obj[k]));return a;
  }, []).join('&');
}