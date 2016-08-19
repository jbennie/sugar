import __mutationObservable from './mutationObservable'

export default function(target, settings = {}) {

	const observable = Observable.create(observer => {

		// create a new observer
		const mutationObserver = new MutationObserver((mutations) => {
			// loop on mutations
			mutations.forEach((mutation) => {
				// push mutation
				observer.next(mutation);
			});
		});
		mutationObserver.observe(target, {
			attributes : true,
			characterData : true,
			...settings
		});
		// unsubscribe routine
		return () => {
			mutationObserver.disconnect();
		}
	});

	return observable;
}
