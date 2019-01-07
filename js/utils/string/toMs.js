'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = toMs;
/**
 * Return the milisecond (ms) representation of a css timing unit
 * Currently support:
 * - milisecond (ms)
 * - second (s)
 *
 * @param    {String}    string    The string timing representation like 1s, 50ms, etc...
 * @return    {String}    The ms representation of the passed string
 *
 * @example    js
 * import toMs from 'coffeekraken-sugar/js/utils/strings/toMs'
 * toMs('1.2s') // 1200
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function toMs(string) {
	// parse the string to int to get the lenght of the suffix
	// if (string.substr(0,1) === '.') string = '0${string}';
	var value = parseFloat(string);
	var valueLength = ('' + value).length;
	var suffix = string.substr(valueLength);
	// switch on suffix
	switch (suffix) {
		case 'ms':
			// milisecond
			return value;
			break;
		case 's': // seconds
		default:
			return value * 1000;
			break;
	}
}