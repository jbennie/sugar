'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = whenOutOfViewport;

var _isInViewport = require('./isInViewport');

var _isInViewport2 = _interopRequireDefault(_isInViewport);

var _throttle = require('../utils/functions/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _closest = require('./closest');

var _closest2 = _interopRequireDefault(_closest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Monitor an HTMLElement to be notified when it exit the viewport
 *
 * @name 		whenOutOfViewport
 * @param 		{HTMLElement} 				elm 		The element to monitor
 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element exit the viewport
 * @return 		(Promise) 								The promise that will be resolved when the element exit the viewport
 *
 * @example 	js
 * import whenOutOfViewport from 'sugarcss/js/dom/whenOutOfViewport'
 * whenOutOfViewport(myCoolHTMLElement).then((elm) => {
 * 		// do something with your element that has exit the viewport...
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function whenOutOfViewport(elm) {
	var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	return new Promise(function (resolve, reject) {
		// try to get the closest element that has an overflow
		var scrollContainerElm = document;
		if (!elm._inViewportContainer) {
			var overflowContainer = (0, _closest2.default)(elm, '[data-in-viewport-container]');
			if (overflowContainer) {
				scrollContainerElm = overflowContainer;
				elm._inViewportContainer = overflowContainer;
			}
		} else {
			scrollContainerElm = elm._inViewportContainer;
		}

		var isInViewport = true,
		    _cb = function _cb() {
			if (!isInViewport) {
				scrollContainerElm.removeEventListener('scroll', checkViewport);
				window.removeEventListener('resize', checkViewport);
				if (cb) cb(elm);
				resolve(elm);
			}
		};
		var checkViewport = (0, _throttle2.default)(function (e) {
			isInViewport = (0, _isInViewport2.default)(elm, 50);
			_cb();
		}, 100);

		// listen for resize
		scrollContainerElm.addEventListener('scroll', checkViewport);
		window.addEventListener('resize', checkViewport);
		setTimeout(function () {
			checkViewport(null);
		});
	});
}