'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unquote;
/**
 * Remove the quotes of a string
 * Types of quotes removed :
 * - `"`, `'`, `”`
 *
 * @param    {String}    string    The string to process
 * @param    {Array<String>}    [quotesToRemove=['"','\'','”']]    The quotes to removes
 * @return    {String}    The unquoted string
 *
 * @example    js
 * import unquote from 'coffeekraken-sugar/js/utils/strings/unquote'
 * unquote("'Hello world'") // "Hello world"
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function unquote(string) {
  var quotesToRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['"', '\'', '”'];

  // trim the string just in case
  string = string.trim();
  // loop on each quotes to remove
  quotesToRemove.forEach(function (quote) {
    if (string.substr(0, 1) === quote && string.substr(-1) === quote) {
      string = string.substr(1);
      string = string.substr(0, string.length - 1);
      // break the loop to avoid unquoting multiple levels
      return;
    }
  });
  // return the processed string
  return string;
}