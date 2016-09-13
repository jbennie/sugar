/**
 * Make a selector detectable when new element are pushed in the page
 */
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/share'
import _isEqual from 'lodash/isEqual'
import 'mutationobserver-shim'
import 'classlist.js'
import '../vendors/queryselector-scope.js'
import mutationObservable from './mutationObservable'
import injectOperators from '../rxjs/querySelectorLiveOperators/injectOperators'
import __matches from './matches'
import __domReady from './domReady'
import SEvent from '../core/SEvent'

// store all the selectors with their settings
// '{selector}' : {
// 		settings : {...},
// 		ovservable : ...
// }
const selectorsStack = {};

export default function querySelectorLive(selector, settings = {}) {

	// check if already the same selector
	let currentSelectors = selectorsStack[selector];
	if (currentSelectors) {
		for(let i=0; i<currentSelectors.length; i++) {
			if (_isEqual(settings, currentSelectors[i].settings)) {
				// return the same observer
				return currentSelectors[i].observable;
			}
		}
	} else {
		currentSelectors = [];
	}

	// process onNodeRemoved setting
	// to ensure that it's an array
	if (settings.onNodeRemoved
		&& typeof(settings.onNodeRemoved) === 'function') {
		settings.onNodeRemoved = [settings.onNodeRemoved];
	}

	// extend settings
	settings = {
		onNodeRemoved : [],
		rootNode : document.body,
		mutationObserverSettings : {
			childList : true,
			subtree : true
		},
		...settings
	};

	const observable = new Observable(observer => {

		let mutationSubscription = null;

		// make a query on existing elements
		__domReady(() => {

			// observe the dom
			const domObservable = mutationObservable(settings.rootNode, settings.mutationObserverSettings);

			function _processAddedNode(node) {
				// check if the element match the selector
				if (__matches(node, selector)) {
					// notify of new node
					observer.next(node);
				} else {
					if (node.querySelectorAll !== undefined) {
						const nodes = node.querySelectorAll(selector);
						if (nodes.length) {
							// it's not the element itself that has been added
							// but we will try to find any elements into the added one
							[].forEach.call(nodes, (elm) => {
								_processAddedNode(elm);
							});
						}
					}
				}
			}

			function _processRemovedNode(node) {

				// emit the detached event
				// that will be captured by
				// any children that need this
				if ( ! node._removedEventDispatched) {
					if (node.querySelectorAll) {
						[].forEach.call(node.querySelectorAll('[s-component]'), (elm) => {
							const e = new SEvent('detached');
							elm.dispatchEvent(e);
						});
						node._removedEventDispatched = true;
						setTimeout(() => {
							node._removedEventDispatched = false;
						});
					}
				}

				// check if the element removed is the one that
				// we are interested in
				if (__matches(node, selector)) {
					// loop on each onNodeRemoved callbacks
					settings.onNodeRemoved.forEach((cb) => {
						cb(node);
					});
				}
			}

			// subscribe to mutations
			mutationSubscription = domObservable.subscribe((mutation) => {
				// check if the mutation match the selector
				if (mutation.addedNodes) {
					for (let i=0; i<mutation.addedNodes.length; i++) {
						const node = mutation.addedNodes[i];
						_processAddedNode(node);
					}
				}
				if (settings.onNodeRemoved && mutation.removedNodes) {
					for (let i=0; i<mutation.removedNodes.length; i++) {
						const node = mutation.removedNodes[i];
						_processRemovedNode(node);
					}
				}
			});

			// fetch element in the page first time
			const elms = settings.rootNode.querySelectorAll(selector);
			[].forEach.call(elms, (elm) => {
				_processAddedNode(elm);
			});

		});

		// unsubscribe routine
		return () => {
			if (mutationSubscription) mutationSubscription.unsubscribe();
		}
	});
	// share the observable
	observable.share();

	// inject operators
	injectOperators(observable);

	// pass down the observable the selector
	observable._settings = {
		selector,
		settings
	};

	// save the selector and settings
	currentSelectors.push({
		settings,
		observable,
		selector
	});
	selectorsStack[selector] = currentSelectors;

	// return the observable
	return observable;
}
