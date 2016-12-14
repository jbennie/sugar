'use strict';

exports.__esModule = true;

exports.default = function () {
	var _this = this;

	var _stack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	var observable = new _Observable.Observable(function (subscriber) {
		var source = _this;
		observable._settings = source._settings;

		// create the stack
		var stack = _stack || [];

		// add a onNodeRemoved callback
		source._settings.settings.onNodeRemoved.push(function (elm) {
			// remove the node from the stack
			var idx = stack.indexOf(elm);
			if (idx !== -1) {
				stack.splice(idx, 1);
			}
		});

		// subscribe to the source
		var subscription = source.subscribe(function (elm) {

			// check if the elm has a next sibling
			var next = elm.nextSibling;
			if (next) {
				var idx = stack.indexOf(next);
				if (idx !== -1) {
					// add the elm just before the next sibling into the stack
					stack.splice(idx, 0, elm);
				} else {
					// insert the elm at the end
					// (would normally never happened...)
					stack.push(elm);
				}
			} else {
				// add the elm to the end
				stack.push(elm);
			}

			// if a stack is passed as argument
			// mean that we just want to fill the passed stack
			// and continue to pass downward each new elements
			if (_stack) {
				subscriber.next(elm);
			}
		}, function (error) {
			return subscriber.error(error);
		}, function () {
			return subscriber.complete();
		});

		if (!_stack) {
			// pass the stack downward
			subscriber.next(stack);
		}

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