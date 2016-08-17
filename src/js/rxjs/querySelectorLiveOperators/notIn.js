import {Observable} from 'rxjs/Observable'
import injectOperators from './injectOperators'
import closest from '../../dom/closest'

export default function(selector) {
	const observable = Observable.create(subscriber => {
		const source = this;
		observable._settings = source._settings;

		// subscribe to the source
		const subscription = source.subscribe(elm => {
			// check that the element is not in the particular selector
			if ( ! closest(elm, selector)) {
				subscriber.next(elm);
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
