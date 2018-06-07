'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = camelize;
/**
 * Camelize a string
 */
function camelize(text) {
	var res = '';
	res = text.replace(/(?:^|[-_])(\w)/g, function (_, c) {
		return c ? c.toUpperCase() : '';
	});
	res = res.substr(0, 1).toLowerCase() + res.slice(1);
	return res.trim();
}