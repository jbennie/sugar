class SDebug {
	start() {
		this._startTime = performance.now();
	}
	stop(msg = null) {
		this._stopTime = performance.now();
		console.warn(msg || 'PERFORMANCE', this._stopTime - this._startTime + 'ms');
	}
}

if ( ! window.sugar) window.sugar = {};
window.sugar.debug = new SDebug();
export default SDebug;
