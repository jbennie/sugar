/**
 * Constrain a value between a min and a max value
 * @param    {Number}    value    The value to constraint
 * @param    {Number}    [min=null]    The min value possible
 * @param    {Number}    [max=null]    The max value possible
 * @return    {Number}    The constrained value
 *
 * @example    js
 * import constrain from 'coffeekraken-sugar/js/utils/numbers/constrain'
 * constrain(100, 0, 50) // 50
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function constrain(value, min = null, max = null) {
	if (min && value < min)
		value = min
	if (max && value > max)
		value = max
	return value
}
