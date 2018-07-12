/**
 * This utils function allows you to make sure that a function that will normally be called
 * several times, for example during a scroll event, to be called once each threshhold time
 *
 * @name 			throttle
 * @example 		js
 * const myThrottledFn = throttle(() => {
 * 		// my function content that will be
 * 		// executed only once each second
 * }, 1000);
 *
 * document.addEventListener('scroll', (e) => {
 * 		// call my throttled function
 * 		myThrottledFn();
 * });
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function throttle(fn, threshhold) {
    threshhold || (threshhold = 250);
    var last,
        deferTimer;
    return function () {
	    var context = this;

	    var now = +new Date,
        args = arguments;
	    if (last && now < last + threshhold) {
    	    // hold on to it
            clearTimeout(deferTimer);
    	    deferTimer = setTimeout(function () {
		        last = now;
		        fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}
