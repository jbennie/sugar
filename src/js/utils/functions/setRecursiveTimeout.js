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
export default function setRecursiveTimeout(fn, timeout, duration, spread = 0) {

	let idx = 0;
	let currentDuration = 0;
	let timeoutFn = null;

	(function tick() {

		// call the function
		fn(idx);

		// update current duration
		currentDuration += timeout;
		idx++;

		// recursive call until end
		if ( ! duration || duration === -1 || currentDuration < duration) {
			const spreadValue = - spread + (Math.round(Math.random(spread * 2)));
			timeoutFn = setTimeout(tick, timeout + spreadValue);
		}


	})();

	// return the clear function to be able to stop the timeout
	return function() {
		// clear the timeout
		clearTimeout(timeoutFn);
	}
}
