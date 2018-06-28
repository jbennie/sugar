'use strict';

var _Observable = require('rxjs/Observable');

_Observable.Observable.prototype.groupByTimeout = function (properties) {
	var _this = this;

	var observable = new _Observable.Observable(function (subscriber) {
		var source = _this;
		var timeout = null;
		var stack = [];

		// subscribe to the source
		var subscription = source.subscribe(function (elm) {
			// add the element to stack
			stack.push(elm);
			// clear the timeout
			clearTimeout(timeout);
			// set a new timeout to wait next loop to
			// send the elements into the stream
			timeout = setTimeout(function () {
				// send the stack downward
				subscriber.next(stack);
				// clean stack
				stack = [];
			});
		}, function (error) {
			return subscriber.error(error);
		}, function () {
			return subscriber.complete();
		});

		// make sure we return the subscription
		return subscription;
	});

	// return the observable
	return observable;
};