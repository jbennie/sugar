import sDom from '../core/s-dom'
import SDrawerElement from './s-drawer-element'

if ( ! window._sDrawerStack) {
	window._sDrawerStack = {};
}

class SDrawerManager {
	
	/**
	 * Constructor
	 */
	constructor() {

		// what that the dom is ready
		sDom.domReady(() => {
			this._init();
		});
	}

	/**
	 * Init
	 */
	_init() {
		// listen for new element
		sDom.querySelectorLive('[data-s-drawer]', (elm) => {
			new SDrawerElement(elm);
		});
	}

	/**
	 * Find a special activate element
	 */
	find(id) {
		if ( ! window._sDrawerStack[id]) return false;
		return window._sDrawerStack[id];
	}

	/**
	 * Open a special id
	 */
	open(id) {
		let item = this.find(id);
		if (item) return item.open();
	}

	/**
	 * Close
	 */
	close(id) {
		let item = this.find(id);
		if (item) return item.close();
	}

	/**
	 * Is open
	 */
	isOpen(id) {
		let item = this.find(id);
		if (item) return item.isOpen();
	}
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.sDrawerManager = new SDrawerManager();

// export
export default window.sugar.sDrawerManager;