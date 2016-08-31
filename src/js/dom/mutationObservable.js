import _isEqual from 'lodash/isEqual';
import 'rxjs/add/operator/share'
import {Observable} from 'rxjs/Observable'

const selectorsStack = [];

// save nodes that's have a mutation observer on it
const nodesStack = new Map();

export default function mutationObservable(target, settings = {}) {

	// detect if already exist
	let currentObservers = nodesStack.get(target);
	if (currentObservers) {
		// loop on current observers
		for (let i=0; i<currentObservers.length; i++) {
			const obs = currentObservers[i];
			if (_isEqual(obs.settings, settings)) {
				// return the same observer
				return obs.observable;
			}
		}
	} else {
		currentObservers = [];
	}

	// we don't have any observer for now
	// so create it
	const observable = new Observable(observer => {

		// create a new observer
		const mutationObserver = new MutationObserver((mutations) => {
			// loop on mutations
			mutations.forEach((mutation) => {
				// push mutation
				observer.next(mutation);
			});
		});
		mutationObserver.observe(target, settings);

		// unsubscribe routine
		return () => {
			mutationObserver.disconnect();
		}

	}).share();

	// save the new observable into the stack
	const obs = {
		settings,
		observable
	};
	// add the observer into the stack
	currentObservers.push(obs);
	// save into the stack
	nodesStack.set(target, currentObservers);

	// return the observable
	return observable;
}
