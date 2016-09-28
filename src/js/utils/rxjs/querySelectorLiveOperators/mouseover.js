import {Observable} from 'rxjs/Observable'
import injectOperators from './injectOperators'

export default function(cb = null) {
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

			const onMouseOver = (e) => {
				// is is a callback
				// use it
				if (cb) {
					cb(elm);
				} else {
					// send the stack downward
					subscriber.next(elm);
				}
				// remove the listener
				elm.removeEventListener('mouseover', onMouseOver);
			};

			// listen for mouseover on the element
			elm.addEventListener('mouseover', onMouseOver);
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
