"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = decodeHtmlEntities;
/**
 * Decode an htmlentities encoded string
 *
 * @param 			{String} 			string 			The string to decode
 * @return 			{String} 							The decoded string
 *
 * @example
 * decodeHtmlentities('&#111;&#108;&#105;&#118;&#105;&#101;&#114;&#046;&#098;&#111;&#115;&#115;&#101;&#108;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;');
 * // return => olivier.bossel@gmail.com
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */
function decodeHtmlEntities(string) {
  var txt = document.createElement("textarea");
  txt.innerHTML = string;
  return txt.value;
}