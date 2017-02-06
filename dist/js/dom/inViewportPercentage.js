'use strict';

exports.__esModule = true;
exports.default = inViewportPercentage;

var _isVisible = require('./isVisible');

var _isVisible2 = _interopRequireDefault(_isVisible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return how many percent the passed element is visible in the viewport
 *
 * @name 		inViewportPercentage
 * @param 		{HTMLElement} 				elm  		The element to get the in viewport percentage from
 * @return 		{Number} 								The percentage visible in the viewport
 *
 * @example  	js
 * import inViewportPercentage from 'sugarcss/js/dom/inViewportPercentage'
 * const percentage = inViewportPercentage(myCoolHTMLElement);
 * // 20
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function inViewportPercentage(elm) {

	// if not visible at all
	if (!(0, _isVisible2.default)(elm)) return 0;

	// calculate the visible percentage
	var bounding = elm.getBoundingClientRect();

	var percentageWidth = 100,
	    percentageHeight = 100;

	// percentageHeight
	if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
		percentageHeight = 100;
	} else {
		var elmHeight = bounding.bottom - bounding.top;
		if (bounding.top < 0) {
			percentageHeight -= 100 / elmHeight * (bounding.top * -1);
		}
		if (bounding.bottom > window.innerHeight) {
			percentageHeight -= 100 / elmHeight * (bounding.bottom - window.innerHeight);
		}
	}
	percentageHeight = Math.round(percentageHeight);
	if (percentageHeight < 0) percentageHeight = 0;
	if (percentageHeight > 100) percentageHeight = 100;

	// percentageWidth
	if (bounding.left >= 0 && bounding.right <= window.innerWidth) {
		percentageWidth = 100;
	} else {
		var elmWidth = bounding.right - bounding.left;
		if (bounding.left < 0) {
			percentageWidth -= 100 / elmWidth * (bounding.left * -1);
		}
		if (bounding.right > window.innerWidth) {
			percentageWidth -= 100 / elmWidth * (bounding.right - window.innerWidth);
		}
	}
	percentageWidth = Math.round(percentageWidth);
	if (percentageWidth < 0) percentageWidth = 0;
	if (percentageWidth > 100) percentageWidth = 100;

	// calculate the percentage in total
	return percentageHeight < percentageWidth ? percentageHeight : percentageWidth;
}