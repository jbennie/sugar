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
const observeStack = [];
let domObserver = null;

__domReady(() => {

	domObserver = new MutationObserver((mutations) => {

		// loop on mutations
		mutations.forEach((mutation) => {
			// addedNodes
			if (mutation.addedNodes && mutation.addedNodes.length) {
				for(let j=0; j<mutation.addedNodes.length; j++) {
					const addedNode = mutation.addedNodes[j];

					// some nodes does not interesting us
					if ( ! addedNode.nodeName
						|| addedNode.nodeName.toLowerCase() === '#text'
						|| addedNode.nodeName.toLowerCase() === '#comment'
					) {
						continue;
					}

					// check if the element match the selector
					for(let i=0; i<observeStack.length; i++) {
						const observe = observeStack[i];

						// rootNode
						if (observe.settings.rootNode) {
							if ( ! observe.settings.rootNode.contains(addedNode)) {
								// this node is not interesting for us
								continue;
							}
						}

						// match the selector
						if (__matches(addedNode, observe.selector)) {
							observe.observer.next(addedNode);
						} else {
							// if (addedNode.querySelectorAll !== undefined) {
							// 	const nodes = addedNode.querySelectorAll(observe.selector);
							// 	if (nodes.length) {
							// 		// it's not the element itself that has been added
							// 		// but we will try to find any elements into the added one
							// 		[].forEach.call(nodes, (elm) => {
							// 			observe.observer(elm);
							// 		});
							// 	}
							// }
						}
					}
				}
			}

			// removedNodes
			if (mutation.removedNodes && mutation.removedNodes.length) {

				for(let j=0; j<mutation.removedNodes.length; j++) {
					const removedNode = mutation.removedNodes[j];

					// some nodes does not interesting us
					if ( ! removedNode.nodeName
						|| removedNode.nodeName.toLowerCase() === '#text'
						|| removedNode.nodeName.toLowerCase() === '#comment'
					) {
						continue;
					}

					// check if the element match the selector
					for(let i=0; i<observeStack.length; i++) {
						const observe = observeStack[i];

						// emit the detached event
						// that will be captured by
						// any children that need this
						if ( ! removedNode._removedEventDispatched) {
							if (removedNode.querySelectorAll) {
								[].forEach.call(removedNode.querySelectorAll('[s-component]'), (elm) => {
									const e = new SEvent('detached');
									elm.dispatchEvent(e);
								});
								removedNode._removedEventDispatched = true;
								setTimeout(() => {
									removedNode._removedEventDispatched = false;
								});
							}
						}

						// if no onNodeRemoved
						// continue to the next node
						if ( ! observe.settings.onNodeRemoved || observe.settings.onNodeRemoved.length <= 0) {
							continue;
						}

						// match the selector
						if (__matches(removedNode, observe.selector)) {
							observe.settings.onNodeRemoved.forEach((cb) => {
								cb(removedNode);
							})
						}
					}
				}
			}
		});
	});

	// observeStack.forEach((observe) => {
	// 	let rootNode = observe.settings.rootNode || document.body;
	// 	[].forEach.call(rootNode.querySelectorAll(observe.selector), (node) => {
	// 		console.log('found node', node);
	// 		observe.observer.next(node);
	// 	});
	// });

	domObserver.observe(document.body, {
		childList : true,
		subtree : true
	});

});

export default function querySelectorLive(selector, settings = {}) {

	// process onNodeRemoved setting
	// to ensure that it's an array
	if (settings.onNodeRemoved
		&& typeof(settings.onNodeRemoved) === 'function') {
		settings.onNodeRemoved = [settings.onNodeRemoved];
	}

	// extend settings
	settings = {
		onNodeRemoved : [],
		rootNode : null,
		...settings
	};

	const observerSettings = {
		selector,
		settings
	};

	const observable = new Observable(observer => {
		observerSettings.observer = observer;
		// select first time
		__domReady(() => {
			const rootNode = settings.rootNode || document.body;
			[].forEach.call(rootNode.querySelectorAll(selector), (node) => {
				observer.next(node);
			});
		});

		// unsubscribe routine
		return () => {
			const idx = observeStack.indexOf(observerSettings);
			if (idx !== -1) {
				observeStack.splice(idx,1);
			}
		}
	});

	// inject operators
	injectOperators(observable);

	// pass down the observable the selector
	observable._settings = {
		selector,
		settings
	};

	// save the new observe settings in stack
	observeStack.push(observerSettings);

	// return the observable
	return observable;



	// const observable = new Observable(observer => {
	//
	// 	let mutationSubscription = null;
	//
	// 	// make a query on existing elements
	// 	__domReady(() => {
	//
	// 		// observe the dom
	// 		const domObservable = mutationObservable(settings.rootNode, settings.mutationObserverSettings);
	//
	// 		function _processAddedNode(node) {
	// 			// check if the element match the selector
	// 			if (__matches(node, selector)) {
	// 				// notify of new node
	// 				observer.next(node);
	// 			} else {
	// 				if (node.querySelectorAll !== undefined) {
	// 					const nodes = node.querySelectorAll(selector);
	// 					if (nodes.length) {
	// 						// it's not the element itself that has been added
	// 						// but we will try to find any elements into the added one
	// 						[].forEach.call(nodes, (elm) => {
	// 							_processAddedNode(elm);
	// 						});
	// 					}
	// 				}
	// 			}
	// 		}
	//
	// 		function _processRemovedNode(node) {
	//
	// 			// emit the detached event
	// 			// that will be captured by
	// 			// any children that need this
	// 			if ( ! node._removedEventDispatched) {
	// 				if (node.querySelectorAll) {
	// 					[].forEach.call(node.querySelectorAll('[s-component]'), (elm) => {
	// 						const e = new SEvent('detached');
	// 						elm.dispatchEvent(e);
	// 					});
	// 					node._removedEventDispatched = true;
	// 					setTimeout(() => {
	// 						node._removedEventDispatched = false;
	// 					});
	// 				}
	// 			}
	//
	// 			// check if the element removed is the one that
	// 			// we are interested in
	// 			if (__matches(node, selector)) {
	// 				// loop on each onNodeRemoved callbacks
	// 				settings.onNodeRemoved.forEach((cb) => {
	// 					cb(node);
	// 				});
	// 			}
	// 		}
	//
	// 		// subscribe to mutations
	// 		mutationSubscription = domObservable.subscribe((mutation) => {
	// 			// check if the mutation match the selector
	// 			if (mutation.addedNodes) {
	// 				for (let i=0; i<mutation.addedNodes.length; i++) {
	// 					const node = mutation.addedNodes[i];
	// 					_processAddedNode(node);
	// 				}
	// 			}
	// 			if (settings.onNodeRemoved && mutation.removedNodes) {
	// 				for (let i=0; i<mutation.removedNodes.length; i++) {
	// 					const node = mutation.removedNodes[i];
	// 					_processRemovedNode(node);
	// 				}
	// 			}
	// 		});
	//
	// 		// fetch element in the page first time
	// 		const elms = settings.rootNode.querySelectorAll(selector);
	// 		[].forEach.call(elms, (elm) => {
	// 			_processAddedNode(elm);
	// 		});
	//
	// 	});
	//
	// 	// unsubscribe routine
	// 	return () => {
	// 		if (mutationSubscription) mutationSubscription.unsubscribe();
	// 	}
	// });
	// // share the observable
	// observable.share();



	// save the selector and settings
	// currentSelectors.push({
	// 	settings,
	// 	observable,
	// 	selector
	// });
	// selectorsStack[selector] = currentSelectors;

	// return the observable
	// return observable;
}
