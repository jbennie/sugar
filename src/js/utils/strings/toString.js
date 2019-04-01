import isJson from "../is/json";
import isObject from "../is/object";
import isArray from "../is/array";
import isFunction from "../is/function";
import isBoolean from "../is/boolean";
import isRegexp from "../is/regexp";
import isString from "../is/string";
import isNumber from "../is/number";

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
	if (isString(value)) {
		return value;
	} else if (isObject(value) || isArray(value) || isJson(value)) {
		return JSON.stringify(value);
	} else if (isBoolean(value)) {
		if (value) return "true";
		else return "false";
	} else if (isFunction(value)) {
		return "" + value;
	} else if (isRegexp(value)) {
		return value.toString();
	} else if (isNumber(value)) {
		return value.toString();
	} else if (value === null) {
		return "";
	} else if (value === undefined) {
		return "undefined";
	} else {
		let returnVal;
		try {
			returnVal = JSON.stringify(value);
		} catch (e) {
			try {
				returnVal = value.toString();
			} catch (e) {
				return value;
			}
		}
		return returnVal;
	}
}
