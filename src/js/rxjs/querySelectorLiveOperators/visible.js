import {Observable} from 'rxjs/Observable'
import whenVisible from '../../dom/whenVisible'
import injectOperators from './injectOperators'

export default function() {
	const observable = new Observable(subscriber => {
		const source = this;
		observable._settings = source._settings;

		// subscribe to the source
		const subscription = source.subscribe(elm => {
			try {
				// wait until the element is visible
				whenVisible(elm).then(() => {
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

	// return observable
	return observable;
};
