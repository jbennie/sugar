/**
 * Wait that the dom is ready before resolving the promise
 * If you need that some css files are loaded before considering the dom as loaded
 * you can add the attribute 's-domready-dependency' on any css link tag
 *
 * @name 		domReady
 * @param 		{Function} 		cb 			An optional callback that will be called when the dom is ready
 * @return 		{Promise} 					A promise that will be resolved when the dom is ready
 *
 * @example  	js
 * import domReady from 'sugarcss/js/dom/domReady'
 * // using callback
 * domReady(() => {
 * 		// do something
 * });
 * // using promise
 * domReady().then(() => {
 * 		// do something
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
import stylesheetsReady from '../dom/stylesheetsReady';
let neededStylesheetsStack = null;

function _domReady(cb = null) {
	return new Promise((resolve, reject) => {

		let _domReady = () => {
			if (!document.body || /(un|ing)/.test(document.readyState)) {
				setTimeout(() => {
					_domReady();
				},9);
			} else {

				// grab all the needed stylesheets if not already done
				if ( ! neededStylesheetsStack) {
					// check in dom if has some needed stylesheets
					neededStylesheetsStack = document.querySelectorAll('link[s-domready-dependency]');
				}

				if ( ! neededStylesheetsStack.length) {
					if (cb) cb();
					resolve();
				} else {

					stylesheetsReady(neededStylesheetsStack, () => {
						// console.log('stylesheets loaded');
						if (cb) cb();
						resolve();
					});
				}
			}
		}
		_domReady();
	});
}

let domReadyCallbacks = [];
let domReadyProcess = false;
let domIsReady = false;

export default function domReady(cb = null) {

	return new Promise((resolve, reject) => {

		// check if the dom is already ready
		if (domIsReady) {
			if (cb) cb();
			resolve();
			return;
		}

		// add the callback to the stack
		domReadyCallbacks.push(() => {
			if (cb) cb();
			resolve();
		});

		// check if already a domReady detecting process
		if ( ! domReadyProcess) {
			domReadyProcess = true;
			_domReady(() => {
				// update the domIsReady
				domIsReady = true;
				// apply all the callbacks
				domReadyCallbacks.forEach((callback) => {
					callback();
				});
			});
		}
	});
}
