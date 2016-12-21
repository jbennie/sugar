'use strict';

exports.__esModule = true;
exports.default = htmlToStr;
function htmlToStr(html) {
	var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	if (document !== undefined && document.createElement !== undefined) {
		var cont = document.createElement('div');
		cont.appendChild(html.cloneNode(deep));
		return cont.innerHTML;
	}
	return html;
}