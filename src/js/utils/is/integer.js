/**
 * Check if the passed value is an integer
 *
 * @name 		isInteger
 * @param 		{Mixed} 		value 		The value to check
 * @return 		{Boolean} 					The check result
 *
 * @example 	js
 * isInteger(10) => true
 * isInteger('hello') => false
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function isInteger(data) {
	return !isNaN(data) && (function(x) { return (x | 0) === x; })(parseFloat(data))
}
