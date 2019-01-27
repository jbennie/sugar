'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = keysLast;

var _uniq = require('lodash/uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Make sure the passed array ends with the passed keys
 * @param    {Array}    array    The array to process
 * @param    {Array}    keys    The keys to end the array with
 * @return    {Array}    The processed array
 *
 * @example    js
 * import keysLast from 'coffeekraken-sugar/js/utils/arrays/keysLast'
 * keysLast(['a','b','d','g','c'], ['d','g'])
 * // ['a','b','c','d','g']
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function keysLast(array, keys) {
	// all the keys has to exist in the array stack
	// otherwise we filter it out
	keys = keys.filter(function (key) {
		return array.indexOf(key) !== -1;
	});
	// add the keys at start
	var res = [].concat(array).concat(keys);
	// reverse the array
	res = res.reverse();
	// remove double items
	res = (0, _uniq2.default)(res);
	// reverse back the array
	res = res.reverse();
	// return the result
	return res;
}