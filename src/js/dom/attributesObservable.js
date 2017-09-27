import {Observable} from 'rxjs/Observable'

/**
 * Observe attributes on an HTMLElement and get mutations through the observable subscription
 *
 * @name 		attributesObservable
 * @param 		{HTMLElement} 					target 		The element to observe
 * @param 		{MutationObserverInit} 			settings 	The mutation observer settings
 * @return 		{Observable} 								The mutation observable
 *
 * @example  	js
 * import attributesObservable from 'sugarcss/js/dom/attributesObservable'
 * attributesObservable(myCoolHTMLElement).subscribe((mutation) => {
 * 		// do something with the mutation
 * });
 *
 * @see 		https://developer.mozilla.org/en/docs/Web/API/MutationObserver
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function(target, settings = {}) {

	const observable = new Observable(observer => {

		// create a new observer
		const mutationObserver = new MutationObserver((mutations) => {
			let mutedAttrs = {};
			// loop on mutations
			mutations.forEach((mutation) => {
				// push mutation
				if ( ! mutedAttrs[mutation.attribute]) {
					observer.next(mutation);
					mutedAttrs[mutation.attribute] = true;
				}
			});
			mutedAttrs = {};
		});
		mutationObserver.observe(target, {
			attributes : true,
			// characterData : true,
			...settings
		});
		// unsubscribe routine
		return () => {
			mutationObserver.disconnect();
		}
	});

	return observable;
}

/**
 * List of attributes to observe
 * @setting
 * @name 		attributes
 * @type 		{Array}
 * @default 	null
 */
