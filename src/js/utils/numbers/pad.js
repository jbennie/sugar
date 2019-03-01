/**
 * Pad a number n of x 0 or another passed character
 * @param    {Number}    number    The number to pad
 * @param    {Integer}    width    The width of pad to apply
 * @param    {String}    [character="0"]    The character to use
 *
 * @example    js
 * import pad from 'coffeekraken-sugar/js/utils/numbers/pad'
 * pad(123, 4) // 0123
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function pad(number, width, character = "0") {
	number = number + "";
	return number.length >= width
		? number
		: new Array(width - number.length + 1).join(character) + number;
}
