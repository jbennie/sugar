'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var _this = this;

	var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	var observable = new _Observable.Observable(function (subscriber) {
		var source = _this;
		observable._settings = source._settings;
		var timeout = null;
		var stack = [];

		// subscribe to the source
		var subscription = source.subscribe(function (elm) {

			// if is a callback,
			// mean that we do not touch
			// the current stream
			if (cb) {
				// pass the element downward directly
				subscriber.next(elm);
			}

			// add the element to stack
			stack.push(elm);
			// clear the timeout
			clearTimeout(timeout);
			// set a new timeout to wait next loop to
			// send the elements into the stream
			timeout = setTimeout(function () {
				// if is a callback
				// use it
				if (cb) {
					cb(stack);
				} else {
					// send the stack downward
					subscriber.next(stack);
				}
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

	// inject operators
	(0, _injectOperators2.default)(observable);

	// return the observable
	return observable;
};

var _Observable = require('rxjs/Observable');

var _injectOperators = require('./injectOperators');

var _injectOperators2 = _interopRequireDefault(_injectOperators);

var _whenInViewport = require('../../../dom/whenInViewport');

var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;