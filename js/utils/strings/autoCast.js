'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = autoCast;
/**
 * Auto cast the string into the correct variable type
 * @param    {String}    string    The string to auto cast
 * @return    {Mixed}    The casted value
 * 
 * @example    js
 * import autoCast from 'coffeekraken-sugar/js/utils/strings/autoCast'
 * autoCast('12') // => 12
 * autoCast('window.HTMLElement') // => HTMLElement
 * autoCast('{"hello":"world"}') // {hello:'world'}
 * 
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function autoCast(string) {

	// if the passed string is not a string, return the value
	if (typeof string !== 'string') return string;

	// handle the single quotes strings like '"hello world"'
	if (string.substr(0, 1) === '\'' && string.substr(-1) === '\'') {
		return string.substr(1, string.length - 2);
	}

	// number
	// before the window check cause window['0'] correspond to something
	var presumedNumber = parseFloat(string);
	if (!isNaN(presumedNumber)) {
		if (presumedNumber.toString() === string) {
			return presumedNumber;
		}
	}

	// avoid getting item from the window object
	if (window[string]) {
		return string;
	}

	// try to eval the passed string
	// if no exception, mean that it's a valid
	// js variable type
	try {
		var obj = eval('(' + string + ')');
		return obj;
	} catch (e) {
		// assume that the string passed is a string
		return string;
	}
}