import {Observable} from 'rxjs/Observable'
import injectOperators from './injectOperators'
import whenInViewport from '../../../dom/whenInViewport'

export default function(cb = null) {
	const observable = new Observable(subscriber => {
		const source = this;
		observable._settings = source._settings;
		let timeout = null;
		let stack = [];

		// subscribe to the source
		const subscription = source.subscribe(elm => {

			// if is a callback,
			// mean that we do not touch
			// the current stream
			if (cb) {
				// pass the element downward directly
				subscriber.next(elm);
			}

			// add the element to stack
			stack.push(elm);
			// clear the timeout
			clearTimeout(timeout);
			// set a new timeout to wait next loop to
			// send the elements into the stream
			timeout = setTimeout(() => {
				// if is a callback
				// use it
				if (cb) {
					cb(stack);
				} else {
					// send the stack downward
					subscriber.next(stack);
				}
				// clean stack
				stack = [];
			});
		},
		error => subscriber.error(error),
		() => subscriber.complete());

		// make sure we return the subscription
		return subscription;
	});

	// inject operators
	injectOperators(observable);

	// return the observable
	return observable;
};
