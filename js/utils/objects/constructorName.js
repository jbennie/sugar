"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = constructorName;
/**
 * Return the constructor name of the passed object
 *
 * @name 		constructorName
 * @param 		{Object} 			obj 		The object to get the constructor name from
 * @return 		{String}						The constructor name
 *
 * @example 	js
 * class MyCoolClass {
 * 		// class implementation...
 * }
 * const myObj = new MyCoolClass();
 * console.log(constructorName(myObj)); => MyCoolClass
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function constructorName(obj) {
  var funcNameRegex = /function (.{1,})\(/;

  var res = funcNameRegex.exec(obj.toString());
  if (res && res[1]) return res[1];

  var results = funcNameRegex.exec(obj.constructor.toString());
  return results && results.length > 1 ? results[1] : "";
}