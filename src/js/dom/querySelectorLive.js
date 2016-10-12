import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/share'
import _isEqual from 'lodash/isEqual'
import 'mutationobserver-shim'
import '../polyfills/queryselector-scope.js'
import mutationObservable from './mutationObservable'
import injectOperators from '../utils/rxjs/querySelectorLiveOperators/injectOperators'
import __matches from './matches'
import __domReady from './domReady'
import __uniqid from '../utils/uniqid'
import SEvent from '../classes/SEvent'

/**
 * Observe the dom to get all the elements that matches the passed selector at any point in time
 *
 * @param 		{String} 						selector 				The css selector to monitor in the dom
 * @param 		{Object} 						[settings=null] 		The settings to pass to the selector
 * @return 		{QuerySelectorLiveObservable} 							The augmented observable instance to subscribe to
 *
 * @example 	js
 * const observer = querySelectorLive('.some-cool-css-selector').subscribe((elm) => {
 * 		// do something with the element found in the dom
 * });
 *
 * // the QuerySelectorLiveObservable add some nice operators
 * // that you can use with ease like so:
 * const observer = querySelectorLive('.some-cool-css-selector').once().inViewport().subscribe((elm) => {
 * 		// do someting with the element found in the dom and that is now in the viewport
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

/**
 * The root node to start the monitoring from
 * @setting
 * @name 		rootNode
 * @type 		{HTMLElement}
 * @default 	document.body
 */

/**
 * An array of callbacks to call when the detected element is removed from the dom
 * @setting
 * @name 		onNodeRemoved
 * @type 		{Array}<Function>
 * @default 	[]
 */

// store all the selectors with their settings
// '{selector}' : {
// 		settings : {...},
// 		ovservable : ...
// }
const observeStack = {};
let domObserver = null;

function _processAddedNode(observe, addedNode) {
	// set the observerId flag to true
	if ( ! addedNode._sQuerySelectorLive) addedNode._sQuerySelectorLive = {};

	// Push the node downward the observable
	// only if has not already been done for this particular node
	// and observer.
	// This will be allowed again when the node has been removed
	// from node or has been changed and that he matches not anymore
	// the selector
	if (addedNode._sQuerySelectorLive[observe.observerId]) return false;

	// push the node downward
	observe.observer.next(addedNode);

	// set the flag that this node has been handled for this particular observer
	addedNode._sQuerySelectorLive[observe.observerId] = true;
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
	const keys = Object.keys(observeStack);
	for(let i=0; i<keys.length; i++) {
		const observe = observeStack[keys[i]];

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

	// stop if the node is not marked with the observer id
	if ( ! removedNode._sQuerySelectorLive
		|| ! removedNode._sQuerySelectorLive[observe.observerId]) {
		return false;
	}

	// reset the flag that tell that whis node has been
	// already handled for this particular observer
	// if (removedNode._sQuerySelectorLive) {
	delete removedNode._sQuerySelectorLive[observe.observerId];

	// if no onNodeRemoved
	// continue to the next node
	if ( ! observe.settings.onNodeRemoved || observe.settings.onNodeRemoved.length <= 0) {
		return false;
	}

	// match the selector
	// if (__matches(removedNode, observe.selector)) {
	observe.settings.onNodeRemoved.forEach((cb) => {
		cb(removedNode);
	});
	// }

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
	const keys = Object.keys(observeStack);
	for(let i=0; i<keys.length; i++) {
		const observe = observeStack[keys[i]];

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

		// process the removed node
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
	const keys = Object.keys(observeStack);
	for(let i=0; i<keys.length; i++) {
		const observe = observeStack[keys[i]];

		// match the selector
		if (__matches(node, observe.selector)) {

			// rootNode
			if (observe.settings.rootNode) {
				if ( ! observe.settings.rootNode.contains(node)) {
					// this node is not interesting for us
					continue;
				}
			}

			// process the added node
			if ( ! _processAddedNode(observe, node)) {
				continue;
			}
		} else {
			// process the removedNode
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

	const obsId = __uniqid();

	const observerSettings = {
		selector,
		settings,
		observerId : obsId
	};

	const observable = new Observable(observer => {
		observerSettings.observer = observer;

		// save the new observe settings in stack
		// observeStack.push(observerSettings);
		observeStack[obsId] = observerSettings;

		// select first time
		__domReady(() => {
			const rootNode = settings.rootNode || document.body;
			[].forEach.call(rootNode.querySelectorAll(selector), (node) => {
				_processAddedNode(observerSettings, node);
			});
		});

		// unsubscribe routine
		return () => {
			delete observeStack[obsId];
		}
	});

	// inject operators
	injectOperators(observable);

	// pass down the observable the selector
	observable._settings = {
		selector,
		settings
	};

	// return the observable
	return observable;
}
