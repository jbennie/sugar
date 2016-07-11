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
