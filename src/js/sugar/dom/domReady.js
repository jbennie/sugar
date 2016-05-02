/**
 * Dom ready
 */
import Pro from 'promise-polyfill'
if ( ! window.Promise) {
	window.Promise = Pro;
}

export default function domReady(cb = null) {
	return new Promise((resolve, reject) => {
		let _domReady = () => {
			if (!document.body || /(un|ing)/.test(document.readyState)) {
				setTimeout(() => {
					_domReady();
				},9);
			} else {
				if (cb) cb();
				resolve();
			}
		}
		_domReady();
	});
}