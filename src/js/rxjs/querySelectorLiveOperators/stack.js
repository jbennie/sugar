import {Observable} from 'rxjs/Observable'
import injectOperators from './injectOperators'
import whenInViewport from '../../dom/whenInViewport'

export default function(_stack = null) {
	const observable = new Observable(subscriber => {
		const source = this;
		observable._settings = source._settings;

		// create the stack
		const stack = _stack || [];

		// add a onNodeRemoved callback
		source._settings.settings.onNodeRemoved.push((elm) => {
			// remove the node from the stack
			const idx = stack.indexOf(elm);
			if (idx !== -1) {
				stack.splice(idx, 1);
			}
		});

		// subscribe to the source
		const subscription = source.subscribe(elm => {

			// check if the elm has a next sibling
			const next = elm.nextSibling;
			if (next) {
				const idx = stack.indexOf(next);
				if (idx !== -1) {
					// add the elm just before the next sibling into the stack
					stack.splice(idx, 0, elm);
				} else {
					// insert the elm at the end
					// (would normally never happened...)
					stack.push(elm);
				}
			} else {
				// add the elm to the end
				stack.push(elm);
			}

			// if a stack is passed as argument
			// mean that we just want to fill the passed stack
			// and continue to pass downward each new elements
			if (_stack) {
				subscriber.next(elm);
			}
		},
		error => subscriber.error(error),
		() => subscriber.complete());

		if ( ! _stack) {
			// pass the stack downward
			subscriber.next(stack);
		}

		// make sure we return the subscription
		return subscription;
	});

	// inject operators
	injectOperators(observable);

	// return the observable
	return observable;
};
