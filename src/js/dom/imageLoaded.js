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
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
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
