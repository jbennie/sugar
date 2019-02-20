/**
 * Check if the passed value is a js String
 * @param    {Mixed}    value    The value to check
 * @return   {Boolean}   true if it's a String, false if not
 *
 * @example    js
 * import isString from 'coffeekraken-sugar/js/utils/is/String'
 * if (isString({}) {
 *   // do something
 * }
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isString(value) {
	return typeof value === "string" || value instanceof String;
}
