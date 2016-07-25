/**
 * Register a callback to be launched when the element is visible
 * @param  {element}   elm The element to observe
 * @param  {Function} cb  The callback to launch
 * @return {[type]}       [description]
 */
import isVisible from './isVisible'
import __closestNotVisible from './closestNotVisible'

export default function whenVisible(elm, cb = null) {
	return new Promise((resolve, reject) => {

		let isSelfVisible = false,
			areParentsVisible = false;
		const _cb = () => {
			if (isSelfVisible && areParentsVisible) {
				if (cb) cb(elm);
				resolve(elm);
			}
		};

		// check if element itself is not visible
		if ( ! isVisible(elm)) {
			const selfObserver = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					// check that is the style whos changed
					if (mutation.attributeName === 'style'
						|| mutation.attributeName === 'class') {
						// check if is visible
						if (isVisible(mutation.target)) {
							// update
							isSelfVisible = true;
							// callback
							_cb();
							// stop observe
							selfObserver.disconnect();
						}
					}
				});
			});
			selfObserver.observe(elm, { attributes: true });
		} else {
			isSelfVisible = true;
		}

		// get the closest not visible element
		// if found, we monitor it to check when it is visible
		let closestNotVisible = __closestNotVisible(elm);
		if (closestNotVisible) {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					// check that is the style whos changed
					if (mutation.attributeName === 'style'
						|| mutation.attributeName === 'class') {
						// check if is visible
						if (isVisible(mutation.target)) {
							// update
							areParentsVisible = true;
							// callback
							_cb();
							// stop observe
							observer.disconnect();
						}
					}
				});
			});
			observer.observe(closestNotVisible, { attributes: true });
		} else {
			areParentsVisible = true;
		}

		// callback
		_cb();
	});
}
