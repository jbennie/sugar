import {Observable} from 'rxjs/Observable'
import injectOperators from './injectOperators'
import whenInViewport from '../../dom/whenInViewport'

export default function() {
	const observable = Observable.create(subscriber => {
		const source = this;

		// subscribe to the source
		const subscription = source.subscribe(elm => {
			try {
				// wait until the element is visible
				whenInViewport(elm).then(() => {
					subscriber.next(elm);
				});
			} catch(e) {
				subscriber.error(e);
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
