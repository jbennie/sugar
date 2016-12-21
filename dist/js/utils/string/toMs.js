'use strict';

exports.__esModule = true;
exports.default = toMs;
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