"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = offset;
// import __getTranslateProperties from './getTranslateProperties'

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
function offset(elm) {
	var body = void 0,
	    box = void 0,
	    clientLeft = void 0,
	    clientTop = void 0,
	    docEl = void 0,
	    left = void 0,
	    scrollLeft = void 0,
	    scrollTop = void 0,
	    top = void 0,
	    translates = void 0,
	    transX = void 0,
	    transY = void 0;
	box = elm.getBoundingClientRect();
	body = document.body;
	docEl = document.documentElement;
	scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
	clientTop = docEl.clientTop || body.clientTop || 0;
	clientLeft = docEl.clientLeft || body.clientLeft || 0;
	// translates = __getTranslateProperties(elm);
	// transX = translates.x;
	// transY = translates.y;
	top = box.top + scrollTop - clientTop;
	left = box.left + scrollLeft - clientLeft;
	return {
		top: Math.round(top),
		left: Math.round(left)
	};
}