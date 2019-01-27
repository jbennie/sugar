import uniq from 'lodash/uniq'

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
export default function keysFirst(array, keys) {
	// add the keys at start
	let res = [].concat(keys).concat(array)
	// remove double items
	res = uniq(res)
	// return the result
	return res
}
