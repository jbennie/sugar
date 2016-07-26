/**
 * Register a callback to be launched when the element is visible
 * @param  {element}   elm The element to observe
 * @param  {Function} cb  The callback to launch
 * @return {[type]}       [description]
 */
import whenVisible from './whenVisible'
import __isInViewport from './isInViewport'

export default function whenInViewport(elm, cb = null) {
	return new Promise((resolve, reject) => {
		let isInViewport = false,
			isVisible = false,
			_cb = () => {
				if (isVisible && isInViewport) {
					document.removeEventListener('scroll', checkViewport);
					window.removeEventListener('resize', checkViewport);
					if (cb)	cb(elm);
					resolve(elm);
				}
			}
		let checkViewport = (e) => {
			isInViewport = __isInViewport(elm, { top:50, right:50, bottom:50, left:50 });
			_cb();
		};

		// detect when visible
		whenVisible(elm).then((elm) => {
			isVisible = true;
			_cb();
		});

		// listen for resize
		document.addEventListener('scroll', checkViewport);
		window.addEventListener('resize', checkViewport);
		setTimeout(() => {
			checkViewport(null);
		});
	});
}
