'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = autoCast;
/**
 * Auto cast the string into the correct variable type
 */
function autoCast(string) {

	// if the passed string is not a string, return the value
	if (typeof string !== 'string') return string;

	// handle the single quotes strings like '"hello world"'
	if (string.substr(0, 1) === '\'' && string.substr(-1) === '\'') {
		return string.substr(1, string.length - 2);
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