import {Observable} from 'rxjs/Observable'
import injectOperators from './injectOperators'

export default function() {
	const observable = Observable.create(subscriber => {
		const source = this;

		// subscribe to the source
		const subscription = source.subscribe(elm => {
			try {
				// check if the element has already been getted for this selector
				if ( ! elm._querySelectorLiveOnce) elm._querySelectorLiveOnce = {};
				if ( ! elm._querySelectorLiveOnce[source._selector]) {
					// push the element in subscriber
					subscriber.next(elm);
					// set that we have already selector this element
					elm._querySelectorLiveOnce[source._selector] = true;
				}
			} catch(e) {
				subscriber.error(e);
			}
		},
		error => subscriber.error(error),
		() => subscriber.complete());

		//

		// make sure we return the subscription
		return subscription;
	});

	// inject operators
	injectOperators(observable);

	// return the observable
	return observable;
};
