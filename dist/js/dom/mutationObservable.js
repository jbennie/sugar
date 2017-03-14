'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = mutationObservable;

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

require('rxjs/add/operator/share');

var _Observable = require('rxjs/Observable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Observe mutations on an HTMLElement and get them through the observable subscription
 *
 * @name 		mutationObservable
 * @param 		{HTMLElement} 					target 		The element to observe
 * @param 		{MutationObserverInit} 			settings 	The mutation observer settings
 * @return 		{Observable} 								The mutation observable
 *
 * @example  	js
 * import mutationObservable from 'sugarcss/js/dom/mutationObservable'
 * mutationObservable(myCoolHTMLElement).subscribe((mutation) => {
 * 		// do something with the mutation
 * });
 *
 * @see 		https://developer.mozilla.org/en/docs/Web/API/MutationObserver
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

var selectorsStack = [];

// save nodes that's have a mutation observer on it
var nodesStack = new Map();

function mutationObservable(target) {
	var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


	// detect if already exist
	var currentObservers = nodesStack.get(target);
	if (currentObservers) {
		// loop on current observers
		for (var i = 0; i < currentObservers.length; i++) {
			var _obs = currentObservers[i];
			if ((0, _isEqual3.default)(_obs.settings, settings)) {
				// return the same observer
				return _obs.observable;
			}
		}
	} else {
		currentObservers = [];
	}

	// we don't have any observer for now
	// so create it
	var observable = new _Observable.Observable(function (observer) {

		// create a new observer
		var mutationObserver = new MutationObserver(function (mutations) {
			// loop on mutations
			mutations.forEach(function (mutation) {
				// push mutation
				observer.next(mutation);
			});
		});
		mutationObserver.observe(target, settings);

		// unsubscribe routine
		return function () {
			mutationObserver.disconnect();
		};
	});

	// save the new observable into the stack
	var obs = {
		settings: settings,
		observable: observable
	};
	// add the observer into the stack
	currentObservers.push(obs);
	// save into the stack
	nodesStack.set(target, currentObservers);

	// return the observable
	return observable;
}