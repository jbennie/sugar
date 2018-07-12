'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = linkLoaded;
/**
 * Wait until the passed HTMLLinkElement is fully loaded
 *
 * @name 		linkLoaded
 * @param 		{HTMLLinkElement} 			link  		The link tag to check the loading state
 * @param 		{Function}					[cb=null] 	An optional callback to call
 * @return 		{Promise} 								The promise that will be resolved
 *
 * @example  	js
 * import linkLoaded from 'sugarcss/js/dom/linkLoaded'
 * linkLoaded(myCoolHTMLLinlElement).then((link) => {
 * 		// do something when the link is loaded
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function alreadyLoaded(link) {
	var href = link.href;
	var result = false;
	for (var i = 0; i < document.styleSheets.length; i++) {
		if (document.styleSheets[i].href && document.styleSheets[i].href.match(href)) {
			if (!document.styleSheets[i].cssRules || document.styleSheets[i].cssRules.length == 0) {
				// Fallback. There is a request for the css file, but it failed.
				break;
			}
			// the css is already loaded
			result = true;
		} else if (i == document.styleSheets.length - 1) {
			// Fallback. There is no request for the css file.
		}
	}
	return result;
}

function linkLoaded(link) {
	var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	return new Promise(function (resolve, reject) {
		// check if image is already loaded
		if (alreadyLoaded(link)) {
			// resolve promise
			resolve(link);
			// call the callback if exist
			callback != null && callback(link);
		} else {

			var img = document.createElement('img');

			// wait until loaded
			// console.log('CHECK LOADING', link.href);
			// we load the css into an image
			// when the image is in error more
			// that mean that the css is loaded
			img.addEventListener('error', function (e) {
				// console.log('LOADED', e);
				// resolve the promise
				resolve(link);
				// callback if exist
				callback != null && callback(link);
			});
			// listen for error
			// img.addEventListener('error', (e) => {
			// 	console.error('ERROR', e);
			// 	// reject
			// 	reject(e);
			// }, false);

			// set url
			img.src = link.href;
			// document.body.appendChild(img);
		}
	});
}