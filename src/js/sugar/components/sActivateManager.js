/*
 * Sugar-activate.js
#
 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
#
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  20.01.16
 * @updated  20.01.16
 * @version  1.0.0
 */
import SActivateComponent from './SActivateComponent'
import querySelectorLiveOnce from '../dom/querySelectorLiveOnce'

// save all the activate elements
if ( ! window._sActivateStack) {
	window._sActivateStack = {};
}

class SActivateManager {

	/**
	 * Constructor
	 */
	constructor() {
	}

	/**
	 * Find a special activate element
	 */
	find(id) {
		if ( ! window._sActivateStack[id]) return false;
		return window._sActivateStack[id];
	}

	/**
	 * Activate a special id
	 */
	activate(id) {
		let item = this.find(id);
		if (item) item.activate();
	}

	/**
	 * Unactivate
	 */
	unactivate(id) {
		let item = this.find(id);
		if (item) item.unactivate();
	}
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.sActivateManager = new SActivateManager();

// export
export default window.sugar.sActivateManager;
