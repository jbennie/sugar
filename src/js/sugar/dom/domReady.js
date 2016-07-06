/**
 * Dom ready
 */
import stylesheetsReady from '../dom/stylesheetsReady';
import Pro from 'promise-polyfill'
if ( ! window.Promise) {
	window.Promise = Pro;
}

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
					// console.error('Dependencies', neededStylesheetsStack);
				}
				console.log(neededStylesheetsStack);

				if ( ! neededStylesheetsStack.length) {
					console.log('GO');
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
			cb !== null && cb();
			resolve();
			return;
		}

		// add the callback to the stack
		domReadyCallbacks.push(() => {
			cb !== null && cb();
			resolve();
			// console.log('Callback');
		});

		// check if already a domReady detecting process
		if ( ! domReadyProcess) {
			domReadyProcess = true;
			_domReady(() => {
				console.log('DOM is finaly ready');
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
