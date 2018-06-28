"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = setRecursiveTimeout;
/**
 * This utils function allows you to call a passed function each x time during a certain duration
 *
 * @name 			setRecursiveTimeout
 * @param 		{Function} 		fn 				The function to execute
 * @param 		{Number} 		timeout 		The time between each execution
 * @param 		{Number} 		duration 		The duration of the timeout
 * @param 		{Number}		[spread=0] 		An optional spread time that will be used to randomize the function executions times
 * @return 		{Function} 		clearer 		A function that you can use to clear the timeout before it ends by itself
 *
 * @example 		js
 * setRecursiveTimeout(() => {
 * 		// I will be executed 10 times
 * }, 1000, 10000);
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */
function setRecursiveTimeout(fn, timeout, duration) {
	var spread = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;


	var idx = 0;
	var currentDuration = 0;
	var timeoutFn = null;

	(function tick() {

		// call the function
		fn(idx);

		// update current duration
		currentDuration += timeout;
		idx++;

		// recursive call until end
		if (!duration || duration === -1 || currentDuration < duration) {
			var spreadValue = -spread + Math.round(Math.random(spread * 2));
			timeoutFn = setTimeout(tick, timeout + spreadValue);
		}
	})();

	// return the clear function to be able to stop the timeout
	return function () {
		// clear the timeout
		clearTimeout(timeoutFn);
	};
}