import isJson from "../is/json";
import isObject from "../is/object";
import isArray from "../is/array";
import isFunction from "../is/function";
import isBoolean from "../is/boolean";
import isRegexp from "../is/regexp";

/**
 * Convert passed value to a string
 * @param    {Mixed}    value    The value to convert to string
 * @return    {String}    The resulting string
 *
 * @example    js
 * import toString from 'coffeekraken-sugar/js/utils/strings/toString'
 * toString({
 * 	id:'hello'
 * }) // '{"id":"hello"}'
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function toString(value) {
	if (isObject(value) || isArray(value) || isJson(value)) {
		return JSON.stringify(value);
	} else if (isBoolean(value)) {
		if (value) return "true";
		else return "false";
	} else if (isFunction(value)) {
		return "" + value;
	} else if (isRegexp(value)) {
		return value.toString();
	}
}
