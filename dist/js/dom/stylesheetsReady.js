'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = stylesheetsReady;

var _linkLoaded = require('./linkLoaded');

var _linkLoaded2 = _interopRequireDefault(_linkLoaded);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wait until all the HTMLLinkElement's are properly loaded
 *
 * @name 		stylesheetsReady
 * @param 		{Array}<HTMLLinkElement> 		links 			The HTMLLinkElement tags to process
 * @param 		{Function} 						[cb=null] 		An optional callback function to call when all the links are loaded
 * @return 		{Promise} 										The promise that will be resolved when all the links are loaded
 *
 * @example 	js
 * import stylesheetsReady from 'sugarcss/js/dom/stylesheetsReady'
 * stylesheetsReady([
 * 		myHTMLLinkElement1,
 * 		myHTMLLinkElement2
 * ]).then(() => {
 * 		// do something when all the links are loaded
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function stylesheetsReady(links) {
	var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


	var neededStylesheetsStack = links;
	var neededStylesheetsCount = links.length;
	var loadedStylesheedsCount = 0;
	var loadedStylesheetsCallbacks = [];
	var loadedStylesheedsProcess = false;
	var stylesheetsDependenciesStatus = false;

	return new Promise(function (resolve, reject) {

		if (stylesheetsDependenciesStatus) {
			cb !== null && cb();
			resolve();
			return;
		}

		// check if has some needed stylesheeds
		if (!neededStylesheetsCount) {
			// update the stylesheetsDependenciesStatus
			stylesheetsDependenciesStatus = true;
			// no dependencies or already loaded
			cb !== null && cb();
			resolve();
			return;
		}

		// add the callback into the loaded stylesheets stack
		// add the the callback stack
		loadedStylesheetsCallbacks.push(function () {
			cb !== null && cb();
			resolve();
		});

		// check if already a process of checking for loaded
		// stylesheets
		if (!loadedStylesheedsProcess) {

			// update the status
			loadedStylesheedsProcess = true;

			if (neededStylesheetsStack.length) {
				[].forEach.call(neededStylesheetsStack, function (link) {
					// check loaded
					(0, _linkLoaded2.default)(link).then(function (link) {
						// update the loaded stylesheet count
						loadedStylesheedsCount++;
						// check if all stylesheets has been loaded
						if (loadedStylesheedsCount >= neededStylesheetsCount) {

							// update the stylesheetsDependenciesStatus
							stylesheetsDependenciesStatus = true;
							// loop on all the loadedStylesheetsCallbacks
							loadedStylesheetsCallbacks.forEach(function (callback) {
								// apply the callback
								callback();
							});
						}
					}, function (error) {
						// something goes wrong...
						console.error('The following link as not been loaded properly...', error);
					});
				});
			}
		}
	});
}