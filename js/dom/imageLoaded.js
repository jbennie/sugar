'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = imageLoaded;
/**
 * Wait until the passed image is fully loaded
 *
 * @name 		imageLoaded
 * @param 		{HTMLImageElement} 			img  		The image to check the loading state
 * @param 		{Function}					[cb=null] 	An optional callback to call
 * @return 		{Promise} 								The promise that will be resolved
 *
 * @example  	js
 * import imageLoaded from 'sugarcss/js/dom/imageLoaded'
 * imageLoaded(myCoolHTMLImageElement).then((img) => {
 * 		// do something when the image is loaded
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function imageLoaded(img) {
	var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	return new Promise(function (resolve, reject) {
		// check if image is already loaded
		if (img.hasAttribute('src') && img.complete) {
			// resolve promise
			resolve(img);
			// call the callback if exist
			callback && callback(img);
		} else {
			// wait until loaded
			img.addEventListener('load', function (e) {
				// resolve the promise
				resolve(img);
				// callback if exist
				callback && callback(img);
			});
			// listen for error
			img.addEventListener('error', function (e) {
				// reject
				reject(e);
			});
		}
	});
}