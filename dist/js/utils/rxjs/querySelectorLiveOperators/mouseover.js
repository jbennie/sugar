'use strict';

exports.__esModule = true;

exports.default = function () {
	var _this = this;

	var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

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

			var onMouseOver = function onMouseOver(e) {
				// is is a callback
				// use it
				if (cb) {
					cb(elm);
				} else {
					// send the stack downward
					subscriber.next(elm);
				}
				// remove the listener
				elm.removeEventListener('mouseover', onMouseOver);
			};

			// listen for mouseover on the element
			elm.addEventListener('mouseover', onMouseOver);
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