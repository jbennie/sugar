/**
 * Get offset of an element
 */
import getTranslate from './getTranslate'

export default function offset(elm) {
	let body, box, clientLeft, clientTop, docEl, left, scrollLeft, scrollTop, top, transX, transY;
	box = elm.getBoundingClientRect();
	body = document.body;
	docEl = document.documentElement;
	scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
	clientTop = docEl.clientTop || body.clientTop || 0;
	clientLeft = docEl.clientLeft || body.clientLeft || 0;
	transX = getTranslate(elm, 'x');
	transY = getTranslate(elm, 'y');
	top = box.top + scrollTop - clientTop + transY;
	left = box.left + scrollLeft - clientLeft + transX;
	return {
		top: Math.round(top),
		left: Math.round(left)
	};
}