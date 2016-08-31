import {Observable} from 'rxjs/Observable'
import injectOperators from './injectOperators'
import whenInViewport from '../../dom/whenInViewport'

export default function() {
	const observable = new Observable(subscriber => {
		const source = this;
		observable._settings = source._settings;

		// subscribe to the source
		const subscription = source.subscribe(elm => {

			const onMouseOver = (e) => {
				// send the stack downward
				subscriber.next(elm);
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
