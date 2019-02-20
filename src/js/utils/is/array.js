/**
 * Check if the passed value is a js Array
 * @param    {Mixed}    value    The value to check
 * @return   {Boolean}   true if it's a Array, false if not
 *
 * @example    js
 * import isArray from 'coffeekraken-sugar/js/utils/is/array'
 * if (isArray([]) {
 *   // do something
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isArray(value) {
	return value && typeof value === "object" && value.constructor === Array;
}
