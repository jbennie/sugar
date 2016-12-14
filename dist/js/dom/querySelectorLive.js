'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = querySelectorLive;

var _Observable = require('rxjs/Observable');

require('rxjs/add/operator/share');

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

require('../polyfills/queryselector-scope.js');

var _mutationObservable = require('./mutationObservable');

var _mutationObservable2 = _interopRequireDefault(_mutationObservable);

var _injectOperators = require('../utils/rxjs/querySelectorLiveOperators/injectOperators');

var _injectOperators2 = _interopRequireDefault(_injectOperators);

var _matches = require('./matches');

var _matches2 = _interopRequireDefault(_matches);

var _domReady = require('./domReady');

var _domReady2 = _interopRequireDefault(_domReady);

var _uniqid = require('../utils/uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

var _SEvent = require('../classes/SEvent');

var _SEvent2 = _interopRequireDefault(_SEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var observeStack = {};
var domObserver = null;

function _processAddedNode(observe, addedNode) {
	// set the observerId flag to true
	if (!addedNode._sQuerySelectorLive) addedNode._sQuerySelectorLive = {};

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
	if (!addedNode.nodeName || addedNode.nodeName.toLowerCase() === '#text' || addedNode.nodeName.toLowerCase() === '#comment') {
		return false;
	}

	// check if the element match the selector
	var keys = Object.keys(observeStack);

	var _loop = function _loop(i) {
		var observe = observeStack[keys[i]];

		// rootNode
		if (observe.settings.rootNode) {
			if (!observe.settings.rootNode.contains(addedNode)) {
				// this node is not interesting for us
				return 'continue';
			}
		}

		// match the selector
		if ((0, _matches2.default)(addedNode, observe.selector)) {
			_processAddedNode(observe, addedNode);
		} else {
			if (addedNode.querySelectorAll !== undefined) {
				var nodes = addedNode.querySelectorAll(observe.selector);
				if (nodes.length) {
					// it's not the element itself that has been added
					// but we will try to find any elements into the added one
					[].forEach.call(nodes, function (elm) {
						_processAddedNode(observe, elm);
					});
				}
			}
		}
	};

	for (var i = 0; i < keys.length; i++) {
		var _ret = _loop(i);

		if (_ret === 'continue') continue;
	}
	return true;
}

function _processRemovedNode(observe, removedNode) {

	// stop if the node is not marked with the observer id
	if (!removedNode._sQuerySelectorLive || !removedNode._sQuerySelectorLive[observe.observerId]) {
		return false;
	}

	// reset the flag that tell that whis node has been
	// already handled for this particular observer
	// if (removedNode._sQuerySelectorLive) {
	delete removedNode._sQuerySelectorLive[observe.observerId];

	// if no onNodeRemoved
	// continue to the next node
	if (!observe.settings.onNodeRemoved || observe.settings.onNodeRemoved.length <= 0) {
		return false;
	}

	// match the selector
	// if (__matches(removedNode, observe.selector)) {
	observe.settings.onNodeRemoved.forEach(function (cb) {
		cb(removedNode);
	});
	// }
}
function processRemoved(removedNode) {
	// some nodes does not interesting us
	if (!removedNode.nodeName || removedNode.nodeName.toLowerCase() === '#text' || removedNode.nodeName.toLowerCase() === '#comment') {
		return false;
	}

	// check if the element match the selector
	var keys = Object.keys(observeStack);
	for (var i = 0; i < keys.length; i++) {
		var _observe = observeStack[keys[i]];

		// emit the detached event
		// that will be captured by
		// any children that need this
		if (!removedNode._removedEventDispatched) {
			if (removedNode.querySelectorAll) {
				[].forEach.call(removedNode.querySelectorAll('[s-component]'), function (elm) {
					var e = new _SEvent2.default('detached');
					elm.dispatchEvent(e);
				});
				removedNode._removedEventDispatched = true;
				setTimeout(function () {
					removedNode._removedEventDispatched = false;
				});
			}
		}

		// process the removed node
		if (!_processRemovedNode(_observe, removedNode)) {
			continue;
		}
	}
	return true;
}

function processAttributes(node) {
	// some nodes does not interesting us
	if (!node.nodeName || node.nodeName.toLowerCase() === '#text' || node.nodeName.toLowerCase() === '#comment') {
		return false;
	}

	// check if the element match the selector
	var keys = Object.keys(observeStack);
	for (var i = 0; i < keys.length; i++) {
		var _observe2 = observeStack[keys[i]];

		// match the selector
		if ((0, _matches2.default)(node, _observe2.selector)) {

			// rootNode
			if (_observe2.settings.rootNode) {
				if (!_observe2.settings.rootNode.contains(node)) {
					// this node is not interesting for us
					continue;
				}
			}

			// process the added node
			if (!_processAddedNode(_observe2, node)) {
				continue;
			}
		} else {
			// process the removedNode
			if (!_processRemovedNode(_observe2, node)) {
				continue;
			}
		}
	}
	return true;
}

(0, _domReady2.default)(function () {

	domObserver = new MutationObserver(function (mutations) {
		var _loop2 = function _loop2(i) {
			var mutation = mutations[i];

			if (mutation.type === 'attributes') {
				// handle that node only once
				// by loop
				if (!mutation.target._handled) {
					mutation.target._handled = true;
					setTimeout(function () {
						delete mutation.target._handled;
					});
					processAttributes(mutation.target);
				}
			} else {

				// addedNodes
				if (mutation.addedNodes && mutation.addedNodes.length) {
					for (var j = 0; j < mutation.addedNodes.length; j++) {
						var addedNode = mutation.addedNodes[j];
						if (!processAdded(addedNode)) {
							continue;
						}
					}
				}

				// removedNodes
				if (mutation.removedNodes && mutation.removedNodes.length) {
					for (var _j = 0; _j < mutation.removedNodes.length; _j++) {
						var removedNode = mutation.removedNodes[_j];
						if (!processRemoved(removedNode)) {
							continue;
						}
					}
				}
			}
		};

		// loop on mutations
		for (var i = 0; i < mutations.length; i++) {
			_loop2(i);
		}
	});

	domObserver.observe(document.body, {
		childList: true,
		subtree: true,
		attributes: true
	});
});

function querySelectorLive(selector) {
	var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


	// process onNodeRemoved setting
	// to ensure that it's an array
	if (settings.onNodeRemoved && typeof settings.onNodeRemoved === 'function') {
		settings.onNodeRemoved = [settings.onNodeRemoved];
	}

	// extend settings
	settings = _extends({
		onNodeRemoved: [],
		rootNode: null
	}, settings);

	var obsId = (0, _uniqid2.default)();

	var observerSettings = {
		selector: selector,
		settings: settings,
		observerId: obsId
	};

	var observable = new _Observable.Observable(function (observer) {
		observerSettings.observer = observer;

		// save the new observe settings in stack
		// observeStack.push(observerSettings);
		observeStack[obsId] = observerSettings;

		// select first time
		(0, _domReady2.default)(function () {
			var rootNode = settings.rootNode || document.body;
			[].forEach.call(rootNode.querySelectorAll(selector), function (node) {
				_processAddedNode(observerSettings, node);
			});
		});

		// unsubscribe routine
		return function () {
			delete observeStack[obsId];
		};
	});

	// inject operators
	(0, _injectOperators2.default)(observable);

	// pass down the observable the selector
	observable._settings = {
		selector: selector,
		settings: settings
	};

	// return the observable
	return observable;
}