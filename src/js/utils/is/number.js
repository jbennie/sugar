/**
 * Check if the passed value is a number
 *
 * @name 		isNumber
 * @param 		{Mixed} 		value 		The value to check
 * @return 		{Boolean} 					The check result
 *
 * @example 	js
 * isNumber(12) => true
 * isNumber(22.3) => true
 * isNumber('20') => false
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function isNumber(source) {
	return !isNaN(parseFloat(source)) && isFinite(source);
}
