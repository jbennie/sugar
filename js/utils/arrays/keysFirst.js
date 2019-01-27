'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keysFirst;

var _uniq = require('lodash/uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Make sure the passed array start with the passed keys
 * @param    {Array}    array    The array to sort
 * @param    {Array}    keys    The keys to start the array with
 * @return    {Array}    The processed array
 *
 * @example    js
 * import keysFirst from 'coffeekraken-sugar/js/utils/arrays/keysFirst'
 * keysFirst(['a','b','d','g','c'], ['d','g'])
 * // ['d','g','a','b','c']
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function keysFirst(array, keys) {
  // all the keys has to exist in the array stack
  // otherwise we filter it out
  keys = keys.filter(function (key) {
    return array.indexOf(key) !== -1;
  });
  // add the keys at start
  var res = [].concat(keys).concat(array);
  // remove double items
  res = (0, _uniq2.default)(res);
  // return the result
  return res;
}