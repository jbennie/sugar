/**
 * Detect when an image is loaded
 */
// import Pro from 'promise-polyfill'
// if ( ! window.Promise) {
// 	window.Promise = Pro;
// }
export default function imageLoaded(img, callback = null) {
	return new Promise((resolve, reject) => {
		// check if image is already loaded
		if (img.complete) {
			// resolve promise
			resolve(img);
			// call the callback if exist
			callback != null && callback(img);
		} else {
			// wait until loaded
			img.addEventListener('load', (e) => {
				// resolve the promise
				resolve(img);
				// callback if exist
				callback != null && callback(img);
			});
			// listen for error
			img.addEventListener('error', (e) => {
				// reject
				reject(e);
			});
		}
	});
}
