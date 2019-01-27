import uniq from 'lodash/uniq'

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
export default function keysLast(array, keys) {
	// add the keys at start
	let res = [].concat(array).concat(keys)
	// reverse the array
	res = res.reverse()
	// remove double items
	res = uniq(res)
	// reverse back the array
	res = res.reverse()
	// return the result
	return res
}
