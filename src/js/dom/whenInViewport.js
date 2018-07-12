import whenVisible from './whenVisible'
import __isInViewport from './isInViewport'
import __throttle from '../utils/functions/throttle'
import __closest from './closest'

/**
 * Monitor an HTMLElement to be notified when it is in the viewport
 *
 * @name 		whenInViewport
 * @param 		{HTMLElement} 				elm 					The element to monitor
 * @param 		{Number} 					[offset=50] 			An offset that represent the distance before entering the viewport for the detection
 * @return 		(Promise) 											The promise that will be resolved when the element is in the viewport
 *
 * @example 	js
 * import whenInViewport from 'sugarcss/js/dom/whenInViewport'
 * whenInViewport(myCoolHTMLElement).then((elm) => {
 * 		// do something with your element that has entered the viewport...
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function whenInViewport(elm, offset = 50) {
	return new Promise((resolve, reject) => {

		if (window.IntersectionObserver) {

			let isInViewport = false,
				isVisible = false,
				_cb = () => {
					if (isVisible && isInViewport) {
						observer.disconnect();
						resolve(elm);
					}
				}

			const observer = new IntersectionObserver((entries, observer) => {
				if ( ! entries.length) return
				const entry = entries[0]
				if (entry.intersectionRatio > 0) {
					isInViewport = true
				} else {
					isInViewport = false
				}
				_cb()
			}, {
				root: null, // viewport
				rootMargin: `${offset}px`,
				threshold: [0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]
			});

			observer.observe(elm);

			// detect when visible
			whenVisible(elm).then((elm) => {
				isVisible = true;
				_cb();
			});

		} else {

			// try to get the closest element that has an overflow
			let scrollContainerElm = document;
			if ( ! elm._inViewportContainer) {
				const overflowContainer = __closest(elm, '[data-in-viewport-container]');
				if (overflowContainer) {
					scrollContainerElm = overflowContainer;
					elm._inViewportContainer = overflowContainer;
				}
			} else {
				scrollContainerElm = elm._inViewportContainer;
			}

			let isInViewport = false,
				isVisible = false,
				_cb = () => {
					if (isVisible && isInViewport) {
						scrollContainerElm.removeEventListener('scroll', checkViewport);
						window.removeEventListener('resize', checkViewport);
						resolve(elm);
					}
				}
			let checkViewport = __throttle((e) => {
				isInViewport = __isInViewport(elm, offset);
				_cb();
			},100);

			// detect when visible
			whenVisible(elm).then((elm) => {
				isVisible = true;
				_cb();
			});

			// listen for resize
			scrollContainerElm.addEventListener('scroll', checkViewport);
			window.addEventListener('resize', checkViewport);
			setTimeout(() => {
				checkViewport(null);
			});

		}

	});
}
