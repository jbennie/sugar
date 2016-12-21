'use strict';

exports.__esModule = true;

exports.default = function (selector) {
	var _this = this;

	var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var observable = new _Observable.Observable(function (subscriber) {
		var source = _this;
		observable._settings = source._settings;

		// subscribe to the source
		var subscription = source.subscribe(function (elm) {

			// if is a callback,
			// mean that we do not touch
			// the current stream
			if (cb) {
				// pass the element downward directly
				subscriber.next(elm);
			}

			// check that the element is not in the particular selector
			if (!(0, _closest2.default)(elm, selector)) {
				// if is a callback
				// use it
				if (cb) {
					cb(elm);
				} else {
					// pass the element downward
					subscriber.next(elm);
				}
			}
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

var _closest = require('../../../dom/closest');

var _closest2 = _interopRequireDefault(_closest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;