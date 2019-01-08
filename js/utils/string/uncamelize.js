'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uncamelize;
/**
 * Uncamelize a string
 * @param    {String}    string    The string to uncamelize
 * @param    {String}    [separator='-']    The separator to use
 * @return    {String}    The uncamelized string
 *
 * @example    js
 * import uncamelize from 'coffeekraken-sugar/js/utils/strings/uncamelize'
 * uncamelize('helloWorldAndUniverse') // hello-world-and-universe
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function uncamelize(text) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';

  // Replace all capital letters by separator followed by lowercase one
  var res = '';
  res = text.replace(/[A-Z]/g, function (letter) {
    return separator + letter.toLowerCase();
  });

  // Remove first separator (to avoid _hello_world name)
  return res.replace("/^" + separator + "/", '').trim();
}