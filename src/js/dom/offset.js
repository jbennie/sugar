import __getTranslateProperties from './getTranslateProperties'
import __getBoundingClientRect from './getBoundingClientRect'

/**
 * Get the offset top and left of the passed element from the document top left point
 *
 * @name 		offset
 * @param 		{HTMLElement} 					elm  		The element to get the offset from
 * @return 		{Object} 									The offset top and left object
 *
 * @example  	js
 * import offset from 'sugarcss/js/dom/offset'
 * const offsetElm = offset(myCoolElement);
 * // output : { top : 200, left : 300 }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function offset(elm) {
	let body, box, clientLeft, clientTop, docEl, left, scrollLeft, scrollTop, top, translates, transX, transY;
	// box = __getBoundingClientRect(elm);
	box = elm.getBoundingClientRect();
	body = document.body;
	docEl = document.documentElement;
	scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
	clientTop = docEl.clientTop || body.clientTop || 0;
	clientLeft = docEl.clientLeft || body.clientLeft || 0;
	translates = __getTranslateProperties(elm);
	transX = translates.x;
	transY = translates.y;
	top = box.top + scrollTop - clientTop + transY;
	left = box.left + scrollLeft - clientLeft + transX;
	return {
		top: Math.round(top),
		left: Math.round(left)
	};
}
