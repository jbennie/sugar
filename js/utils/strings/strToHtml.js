'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = strToHtml;
function strToHtml(string) {
	if (document !== undefined && document.createElement !== undefined) {
		var cont = document.createElement('div');
		cont.innerHTML = string;
		if (cont.children.length === 1) {
			return cont.children[0];
		} else {
			return cont;
		}
	}
	return string;
}