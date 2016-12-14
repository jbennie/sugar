'use strict';

exports.__esModule = true;

/**
 * List of attributes to observe
 * @setting
 * @name 		attributes
 * @type 		{Array}
 * @default 	null
 */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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


exports.default = function (target) {
	var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


	var observable = new _Observable.Observable(function (observer) {

		// create a new observer
		var mutationObserver = new MutationObserver(function (mutations) {
			var mutedAttrs = {};
			// loop on mutations
			mutations.forEach(function (mutation) {
				// push mutation
				if (!mutedAttrs[mutation.attribute]) {
					observer.next(mutation);
					mutedAttrs[mutation.attribute] = true;
				}
			});
			mutedAttrs = {};
		});
		mutationObserver.observe(target, _extends({
			attributes: true
		}, settings));
		// unsubscribe routine
		return function () {
			mutationObserver.disconnect();
		};
	});

	return observable;
};

var _Observable = require('rxjs/Observable');