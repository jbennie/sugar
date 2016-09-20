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

if ( ! window.sugar) window.sugar = {};
window.sugar._sQuerySelectorLive = {};

function _processAddedNode(observe, addedNode) {

	// save the selector into the node
	if (window.sugar._sQuerySelectorLive[observe.selector].indexOf(addedNode) === -1) {
		window.sugar._sQuerySelectorLive[observe.selector].push(addedNode);

		// push the node downward the observable
		observe.observer.next(addedNode);
	}
}
function processAdded(addedNode) {
	// some nodes does not interesting us
	if ( ! addedNode.nodeName
		|| addedNode.nodeName.toLowerCase() === '#text'
		|| addedNode.nodeName.toLowerCase() === '#comment'
	) {
		return false;
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
			_processAddedNode(observe, addedNode);
		} else {
			if (addedNode.querySelectorAll !== undefined) {
				const nodes = addedNode.querySelectorAll(observe.selector);
				if (nodes.length) {
					// it's not the element itself that has been added
					// but we will try to find any elements into the added one
					[].forEach.call(nodes, (elm) => {
						_processAddedNode(observe, elm);
					});
				}
			}
		}
	}
	return true;
}

function _processRemovedNode(observe, removedNode) {
	// remove the element from the selectors stack
	if (window.sugar._sQuerySelectorLive[observe.selector]) {
		const idx = window.sugar._sQuerySelectorLive[observe.selector].indexOf(removedNode);
		// if we have a node that match
		if (idx !== -1) {
			// remmove from the stack
			window.sugar._sQuerySelectorLive[observe.selector].splice(idx,1);

			// if no onNodeRemoved
			// continue to the next node
			if ( ! observe.settings.onNodeRemoved || observe.settings.onNodeRemoved.length <= 0) {
				return false;
			}

			// match the selector
			if (__matches(removedNode, observe.selector)) {
				// console.error('removed node', removedNode, observe.selector);
				observe.settings.onNodeRemoved.forEach((cb) => {
					cb(removedNode);
				});
			}
		}
	}
}
function processRemoved(removedNode) {
	// some nodes does not interesting us
	if ( ! removedNode.nodeName
		|| removedNode.nodeName.toLowerCase() === '#text'
		|| removedNode.nodeName.toLowerCase() === '#comment'
	) {
		return false;
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

		if ( ! _processRemovedNode(observe, removedNode)) {
			continue;
		}
	}
	return true;
}

function processAttributes(node) {
	// some nodes does not interesting us
	if ( ! node.nodeName
		|| node.nodeName.toLowerCase() === '#text'
		|| node.nodeName.toLowerCase() === '#comment'
	) {
		return false;
	}

	// check if the element match the selector
	for(let i=0; i<observeStack.length; i++) {
		const observe = observeStack[i];

		// rootNode
		if (observe.settings.rootNode) {
			if ( ! observe.settings.rootNode.contains(node)) {
				// this node is not interesting for us
				continue;
			}
		}

		// match the selector
		if (__matches(node, observe.selector)) {
			if ( ! _processAddedNode(observe, node)) {
				continue;
			}
		} else {
			if ( ! _processRemovedNode(observe, node)) {
				continue;
			}
		}
	}
	return true;
}

__domReady(() => {

	domObserver = new MutationObserver((mutations) => {

		// loop on mutations
		for (let i=0; i<mutations.length; i++) {
			const mutation = mutations[i];

			if (mutation.type === 'attributes') {
				// handle that node only once
				// by loop
				if ( ! mutation.target._handled) {
					mutation.target._handled = true;
					setTimeout(() => {
						delete mutation.target._handled;
					});
					processAttributes(mutation.target);
				}
			} else {

				// addedNodes
				if (mutation.addedNodes && mutation.addedNodes.length) {
					for(let j=0; j<mutation.addedNodes.length; j++) {
						const addedNode = mutation.addedNodes[j];
						if ( ! processAdded(addedNode)) {
							continue;
						}
					}
				}

				// removedNodes
				if (mutation.removedNodes && mutation.removedNodes.length) {
					for(let j=0; j<mutation.removedNodes.length; j++) {
						const removedNode = mutation.removedNodes[j];
						if ( ! processRemoved(removedNode)) {
							continue;
						}
					}
				}
			}
		}
	});

	domObserver.observe(document.body, {
		childList : true,
		subtree : true,
		attributes : true
	});

});

export default function querySelectorLive(selector, settings = {}) {

	if ( ! window.sugar._sQuerySelectorLive[selector])
		window.sugar._sQuerySelectorLive[selector] = [];

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
				processAdded(node, {
					selector
				});
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
}
