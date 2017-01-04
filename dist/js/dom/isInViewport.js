'use strict';

exports.__esModule = true;
exports.default = isInViewport;

var _getBoundingClientRect = require('./getBoundingClientRect');

var _getBoundingClientRect2 = _interopRequireDefault(_getBoundingClientRect);

var _inViewport = require('in-viewport');

var _inViewport2 = _interopRequireDefault(_inViewport);

var _closest = require('./closest');

var _closest2 = _interopRequireDefault(_closest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isInViewport(elm) {
	var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

	// try to get the closest element that has an overflow
	if (!elm._inViewportContainer) {
		var overflowContainer = (0, _closest2.default)(elm, '[data-in-viewport-container]');
		if (overflowContainer) {
			elm._inViewportContainer = overflowContainer;
		} else {
			elm._inViewportContainer = window;
		}
	}
	return (0, _inViewport2.default)(elm, {
		offset: offset,
		container: elm._inViewportContainer
	});

	// const rect = __getBoundingClientRect(elm);
	// const wh = (window.innerHeight || document.documentElement.clientHeight);
	// const ww = (window.innerWidth || document.documentElement.clientWidth);
	// return (
	// 	rect.top - wh - offset.top <= 0
	// 	&& rect.bottom + offset.bottom  >= 0
	// 	&& rect.left - ww - offset.left <= 0
	// 	&& rect.right + offset.right >= 0
	// );
} /**
   * Check if the passed HTMLElement is in the viewport or not
   *
   * @name 		isInViewport
   * @param 		{HTMLElement} 				elm  		The element to insert
   * @param 		{Object} 					offset 		An object of top, right, bottom and left offset used to detect the status
   * @return 		{Boolean								If the element is in the viewport or not
   *
   * @example  	js
   * import isInViewport from 'sugarcss/js/dom/isInViewport'
   * if (isInViewport(myCoolHTMLElement) {
   * 		// i'm in the viewport
   * }
   *
   * @author 		Olivier Bossel <olivier.bossel@gmail.com>
   */