'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = whenInViewport;

var _whenVisible = require('./whenVisible');

var _whenVisible2 = _interopRequireDefault(_whenVisible);

var _isInViewport2 = require('./isInViewport');

var _isInViewport3 = _interopRequireDefault(_isInViewport2);

var _throttle = require('../utils/functions/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _closest = require('./closest');

var _closest2 = _interopRequireDefault(_closest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Monitor an HTMLElement to be notified when it is in the viewport
 *
 * @name 		whenInViewport
 * @param 		{HTMLElement} 				elm 					The element to monitor
 * @param 		{Number} 					[offset=50] 			An offset that represent the distance before entering the viewport for the detection
 * @return 		(Promise) 											The promise that will be resolved when the element is in the viewport
 *
 * @example 	js
 * import whenInViewport from 'coffeekraken-sugar/js/dom/whenInViewport'
 * whenInViewport(myCoolHTMLElement).then((elm) => {
 * 		// do something with your element that has entered the viewport...
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function whenInViewport(elm) {
	var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

	return new Promise(function (resolve, reject) {

		if (window.IntersectionObserver) {

			var isInViewport = false,
			    isVisible = false,
			    _cb = function _cb() {
				if (isVisible && isInViewport) {
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

			// detect when visible
			(0, _whenVisible2.default)(elm).then(function (elm) {
				isVisible = true;
				_cb();
			});
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

			var _isInViewport = false,
			    _isVisible = false,
			    _cb2 = function _cb2() {
				if (_isVisible && _isInViewport) {
					scrollContainerElm.removeEventListener('scroll', checkViewport);
					window.removeEventListener('resize', checkViewport);
					resolve(elm);
				}
			};
			var checkViewport = (0, _throttle2.default)(function (e) {
				_isInViewport = (0, _isInViewport3.default)(elm, offset);
				_cb2();
			}, 100);

			// detect when visible
			(0, _whenVisible2.default)(elm).then(function (elm) {
				_isVisible = true;
				_cb2();
			});

			// listen for resize
			scrollContainerElm.addEventListener('scroll', checkViewport);
			window.addEventListener('resize', checkViewport);
			setTimeout(function () {
				checkViewport(null);
			});
		}
	});
}