'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SDebug = function () {
	function SDebug() {
		_classCallCheck(this, SDebug);
	}

	SDebug.prototype.start = function start() {
		this._startTime = performance.now();
	};

	SDebug.prototype.stop = function stop() {
		var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		this._stopTime = performance.now();
		console.warn(msg || 'PERFORMANCE', this._stopTime - this._startTime + 'ms');
	};

	return SDebug;
}();

if (!window.sugar) window.sugar = {};
window.sugar.debug = new SDebug();
exports.default = SDebug;