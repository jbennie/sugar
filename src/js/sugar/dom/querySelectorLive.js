/**
 * Make a selector detectable when new element are pushed in the page
 */
import 'rxjs/add/operator/share'
import {Observable} from 'rxjs/Observable'
import _isEqual from 'lodash/isEqual'
import 'mutationobserver-shim'
import 'classlist.js'
import '../vendors/queryselector-scope.js'
import mutationObservable from './mutationObservable'


import __matches from './matches'
import __domReady from './domReady'

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

	const observable = Observable.create(observer => {

		let mutationSubscription = null;

		// make a query on existing elements
		__domReady(() => {

			// extend settings
			settings = {...{
				onNodeRemoved : null,
				rootNode : document.body,
				groupNodes : false,
				once : false,
				mutationObserverSettings : {
					childList : true
				}
			}, ...settings};

			// observe the dom
			const domObservable = mutationObservable(settings.rootNode, settings.mutationObserverSettings);

			let groupedNodes = [];
			let groupedNodesTimeout = null;
			function _processAddedNode(node) {
				// handle once
				if ( ! node._querySelectorLiveOnceAdd) node._querySelectorLiveOnceAdd = {};
				if (settings.once && node._querySelectorLiveOnceAdd[selector] === true) return;
				// set the _querySelectorLiveOnceAdd item on the item
				node._querySelectorLiveOnceAdd[selector] = true;
				// check if the element match the selector
				if (__matches(node, selector)) {
					if (settings.groupNodes) {
						groupedNodes.push(node);
						clearTimeout(groupedNodesTimeout);
						groupedNodesTimeout = setTimeout(() => {
							observer.next(groupedNodes);
							groupedNodes = [];
						});
					} else {
						// notify of new node
						observer.next(node);
					}
				}
			}

			let groupesNodesRemoved = [];
			let groupedNodesRemovedTimeout = null;
			function _processRemovedNode(node) {
				if ( ! node._querySelectorLiveOnceRemove) node._querySelectorLiveOnceRemove = {};
				if (settings.once && node._querySelectorLiveOnceRemove[selector] === true) return;
				node._querySelectorLiveOnceRemove[selector] = true;
				if (__matches(node, selector)) {
					if (settings.groupNodes) {
						groupedNodesRemove.push(node);
						clearTimeout(groupedNodesRemoveTimeout);
						groupedNodesRemoveTimeout = setTimeout(() => {
							settings.onNodeRemoved(groupedNodesRemove);
							groupedNodesRemove = [];
						});
					} else {
						// notify of new node
						settings.onNodeRemoved(node);
					}
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
