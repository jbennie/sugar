/**
 * Get offset of an element
 */
import __getTranslate from './getTranslate'
import __getBoundingClientRect from './getBoundingClientRect'

export default function offset(elm) {
	let body, box, clientLeft, clientTop, docEl, left, scrollLeft, scrollTop, top, transX, transY;
	box = __getBoundingClientRect(elm);
	body = document.body;
	docEl = document.documentElement;
	scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
	clientTop = docEl.clientTop || body.clientTop || 0;
	clientLeft = docEl.clientLeft || body.clientLeft || 0;
	transX = __getTranslate(elm, 'x');
	transY = __getTranslate(elm, 'y');
	top = box.top + scrollTop - clientTop + transY;
	left = box.left + scrollLeft - clientLeft + transX;
	return {
		top: Math.round(top),
		left: Math.round(left)
	};
}
