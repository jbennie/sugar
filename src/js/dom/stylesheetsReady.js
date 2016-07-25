import linkLoaded from './linkLoaded';
import Pro from 'promise-polyfill'
if ( ! window.Promise) {
	window.Promise = Pro;
}

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
						console.log('loaded', link.href);
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
						console.log('COCO', error);
						// something goes wrong...
						console.error('The following link as not been loaded properly...', error);
					});
				});
			}
		}
	});
}
