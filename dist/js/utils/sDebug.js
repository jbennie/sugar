'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SDebug = function () {
	function SDebug() {
		_classCallCheck(this, SDebug);
	}

	_createClass(SDebug, [{
		key: 'start',
		value: function start() {
			this._startTime = performance.now();
		}
	}, {
		key: 'stop',
		value: function stop() {
			var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			this._stopTime = performance.now();
			console.warn(msg || 'PERFORMANCE', this._stopTime - this._startTime + 'ms');
		}
	}]);

	return SDebug;
}();

if (!window.sugar) window.sugar = {};
window.sugar.debug = new SDebug();
exports.default = SDebug;