'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = whenOutOfViewport;

var _isInViewport2 = require('./isInViewport');

var _isInViewport3 = _interopRequireDefault(_isInViewport2);

var _throttle = require('../utils/functions/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _closest = require('./closest');

var _closest2 = _interopRequireDefault(_closest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Monitor an HTMLElement to be notified when it exit the viewport
 *
 * @name 		whenOutOfViewport
 * @param 		{HTMLElement} 				elm 				The element to monitor
 * @param 		{Number} 					[offset=50] 		An offset that represent the distance before entering the viewport for the detection
 * @return 		(Promise) 										The promise that will be resolved when the element exit the viewport
 *
 * @example 	js
 * import whenOutOfViewport from 'sugarcss/js/dom/whenOutOfViewport'
 * whenOutOfViewport(myCoolHTMLElement).then((elm) => {
 * 		// do something with your element that has exit the viewport...
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function whenOutOfViewport(elm) {
	var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

	return new Promise(function (resolve, reject) {

		if (window.IntersectionObserver) {

			var isInViewport = false,
			    _cb = function _cb() {
				if (!isInViewport) {
					observer.disconnect();
					resolve(elm);
				}
			};

			var observer = new IntersectionObserver(function (entries, observer) {
				if (!entries.length) return;
				var entry = entries[0];
				if (entry.intersectionRatio > 0) {
					isInViewport = true;
				} else {
					isInViewport = false;
				}
				_cb();
			}, {
				root: null, // viewport
				rootMargin: offset + 'px',
				threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
			});

			observer.observe(elm);
		} else {

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

			var _isInViewport = true,
			    _cb2 = function _cb2() {
				if (!_isInViewport) {
					scrollContainerElm.removeEventListener('scroll', checkViewport);
					window.removeEventListener('resize', checkViewport);
					resolve(elm);
				}
			};
			var checkViewport = (0, _throttle2.default)(function (e) {
				_isInViewport = (0, _isInViewport3.default)(elm, offset);
				_cb2();
			}, 100);

			// listen for resize
			scrollContainerElm.addEventListener('scroll', checkViewport);
			window.addEventListener('resize', checkViewport);
			setTimeout(function () {
				checkViewport(null);
			});
		}
	});
}