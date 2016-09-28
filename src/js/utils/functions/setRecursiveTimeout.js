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
