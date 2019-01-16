"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = loadScript;
/**
 * Detect when a script has been fully loaded
 * @param    {HTMLScriptElement}    $script    The script element to detect the loading state
 * @return    {Promise}    The promise that will be resolved when the script is fully loaded
 *
 * @example    js
 * import scriptLoaded from 'coffeekraken-sugar/js/dom/scriptLoaded'
 * scriptLoaded($script).then(($script) => {
 *   // do something here
 * })
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function loadScript($script) {

	return new Promise(function (resolve, reject) {

		var done = false;

		$script.onload = handleLoad;
		$script.onreadystatechange = handleReadyStateChange;
		$script.onerror = handleError;

		function handleLoad() {
			if (!done) {
				done = true;
				resolve($script);
			}
		}

		function handleReadyStateChange() {
			var state;
			if (!done) {
				state = $script.readyState;
				if (state === "complete") {
					handleLoad();
				}
			}
		}
		function handleError() {
			if (!done) {
				done = true;
				reject($script);
			}
		}
	});
}