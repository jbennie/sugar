'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isInViewport;
/**
 * Check if the passed HTMLElement is in the viewport or not
 *
 * @name 		isInViewport
 * @param 		{HTMLElement} 				elm  			The element to insert
 * @param 		{Object} 					[offset=50] 	An object of top, right, bottom and left offset used to detect the status or an object with top, right, bottom and left offsets
 * @return 		{Boolean									If the element is in the viewport or not
 *
 * @example  	js
 * import isInViewport from 'coffeekraken-sugar/js/dom/isInViewport'
 * if (isInViewport(myCoolHTMLElement) {
 * 		// i'm in the viewport
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function isInViewport(elm) {
	var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

	// handle offset
	var offsetTop = offset;
	var offsetRight = offset;
	var offsetBottom = offset;
	var offsetLeft = offset;
	if ((typeof offset === 'undefined' ? 'undefined' : _typeof(offset)) === 'object') {
		offsetTop = offset.top || 0;
		offsetRight = offset.right || 0;
		offsetBottom = offset.bottom || 0;
		offsetLeft = offset.left || 0;
	}
	var containerHeight = window.innerHeight || document.documentElement.clientHeight;
	var containerWidth = window.innerWidth || document.documentElement.clientWidth;
	var rect = elm.getBoundingClientRect();
	var isTopIn = rect.top - containerHeight - offsetBottom <= 0;
	var isBottomIn = rect.bottom - offsetTop >= 0;
	var isLeftIn = rect.left - containerWidth - offsetRight <= 0;
	var isRightIn = rect.right - offsetLeft >= 0;
	return isTopIn && isBottomIn && isLeftIn && isRightIn;
}