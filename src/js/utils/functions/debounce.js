/**
 * This utils function allows you to make sure that a function that will normally be called
 * several times, for example during a scroll event, to be called only once after
 * the delay passed
 *
 * @name 			debounce
 * @example 		js
 * const myDebouncedFn = debounce(() => {
 * 		// my function content that will be
 * 		// executed only once after the 1 second delay
 * }, 1000);
 *
 * document.addEventListener('scroll', (e) => {
 * 		// call my debounced function
 * 		myDebouncedFn();
 * });
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function debounce(fn, delay) {
	var timer = null;
	return function () {
		var context = this, args = arguments;
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.apply(context, args);
		}, delay);
	};
}
