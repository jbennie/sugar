'use strict';

exports.__esModule = true;

exports.default = function () {
	var _this = this;

	var observable = new _Observable.Observable(function (subscriber) {
		var source = _this;
		observable._settings = source._settings;

		// subscribe to the source
		var subscription = source.subscribe(function (elm) {
			try {
				// check if the element has already been getted for this selector
				if (!elm._querySelectorLiveOnce) elm._querySelectorLiveOnce = {};
				if (!elm._querySelectorLiveOnce[source._settings.selector]) {
					// push the element in subscriber
					subscriber.next(elm);
					// set that we have already selector this element
					elm._querySelectorLiveOnce[source._settings.selector] = true;
				}
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

	// return the observable
	return observable;
};

var _Observable = require('rxjs/Observable');

var _injectOperators = require('./injectOperators');

var _injectOperators2 = _interopRequireDefault(_injectOperators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;