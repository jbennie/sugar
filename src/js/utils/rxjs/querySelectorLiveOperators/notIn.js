import {Observable} from 'rxjs/Observable'
import injectOperators from './injectOperators'
import closest from '../../../dom/closest'

export default function(selector, cb = null) {
	const observable = new Observable(subscriber => {
		const source = this;
		observable._settings = source._settings;

		// subscribe to the source
		const subscription = source.subscribe(elm => {

			// if is a callback,
			// mean that we do not touch
			// the current stream
			if (cb) {
				// pass the element downward directly
				subscriber.next(elm);
			}

			// check that the element is not in the particular selector
			if ( ! closest(elm, selector)) {
				// if is a callback
				// use it
				if (cb) {
					cb(elm);
				} else {
					// pass the element downward
					subscriber.next(elm);
				}
			}
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
