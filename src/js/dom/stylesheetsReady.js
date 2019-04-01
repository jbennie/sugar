import linkLoaded from './linkLoaded';
/**
 * Wait until all the HTMLLinkElement's are properly loaded
 *
 * @name 		stylesheetsReady
 * @param 		{Array}<HTMLLinkElement> 		links 			The HTMLLinkElement tags to process
 * @param 		{Function} 						[cb=null] 		An optional callback function to call when all the links are loaded
 * @return 		{Promise} 										The promise that will be resolved when all the links are loaded
 *
 * @example 	js
 * import stylesheetsReady from 'coffeekraken-sugar/js/dom/stylesheetsReady'
 * stylesheetsReady([
 * 		myHTMLLinkElement1,
 * 		myHTMLLinkElement2
 * ]).then(() => {
 * 		// do something when all the links are loaded
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function stylesheetsReady(links, cb = null) {

	let neededStylesheetsStack = links;
	let neededStylesheetsCount = links.length;
	let loadedStylesheedsCount = 0;
	let loadedStylesheetsCallbacks = [];
	let loadedStylesheedsProcess = false;
	let stylesheetsDependenciesStatus = false;

	return new Promise((resolve, reject) => {

		if (stylesheetsDependenciesStatus) {
			cb !== null && cb();
			resolve();
			return;
		}

		// check if has some needed stylesheeds
		if ( ! neededStylesheetsCount) {
			// update the stylesheetsDependenciesStatus
			stylesheetsDependenciesStatus = true;
			// no dependencies or already loaded
			cb !== null && cb();
			resolve();
			return;
		}

		// add the callback into the loaded stylesheets stack
		// add the the callback stack
		loadedStylesheetsCallbacks.push(() => {
			cb !== null && cb();
			resolve();
		});

		// check if already a process of checking for loaded
		// stylesheets
		if ( ! loadedStylesheedsProcess) {

			// update the status
			loadedStylesheedsProcess = true;

			if (neededStylesheetsStack.length) {
				[].forEach.call(neededStylesheetsStack, (link) => {
					// check loaded
					linkLoaded(link).then((link) => {
						// update the loaded stylesheet count
						loadedStylesheedsCount++;
						// check if all stylesheets has been loaded
						if (loadedStylesheedsCount >= neededStylesheetsCount) {

							// update the stylesheetsDependenciesStatus
							stylesheetsDependenciesStatus = true;
							// loop on all the loadedStylesheetsCallbacks
							loadedStylesheetsCallbacks.forEach((callback) => {
								// apply the callback
								callback();
							});
						}
					}, (error) => {
						// something goes wrong...
						console.error('The following link as not been loaded properly...', error);
					});
				});
			}
		}
	});
}
