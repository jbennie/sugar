'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = uncamelize;
/**
 * Uncamelize a string
 */
function uncamelize(text) {
	var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';

	// Replace all capital letters by separator followed by lowercase one
	var res = '';
	res = text.replace(/[A-Z]/g, function (letter) {
		return separator + letter.toLowerCase();
	});

	// Remove first separator (to avoid _hello_world name)
	return res.replace("/^" + separator + "/", '').trim();
}