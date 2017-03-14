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

		// subscribe to the source
		var subscription = source.subscribe(function (elm) {
			try {
				// if is a callback,
				// mean that we do not touch
				// the current stream
				if (cb) {
					// pass the element downward directly
					subscriber.next(elm);
				}

				// wait until the element is visible
				(0, _whenVisible2.default)(elm).then(function () {
					// if is a callback,
					// use it
					if (cb) {
						cb(elm);
					} else {
						// pass the element downward
						subscriber.next(elm);
					}
				});
			} catch (e) {
				subscriber.error(e);
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

	// return observable
	return observable;
};

var _Observable = require('rxjs/Observable');

var _whenVisible = require('../../../dom/whenVisible');

var _whenVisible2 = _interopRequireDefault(_whenVisible);

var _injectOperators = require('./injectOperators');

var _injectOperators2 = _interopRequireDefault(_injectOperators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;