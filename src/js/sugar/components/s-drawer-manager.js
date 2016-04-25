import sDom from '../core/s-dom'
import SDrawerElement from './s-drawer-element'

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

		// init all elements in the page
		[].forEach.call(document.body.querySelectorAll('[data-s-drawer]'), (elm) => {
			new SDrawerElement(elm);
		});

		// listen for new element
		sDom.querySelectorLive('[data-s-drawer]', (element) => {
			new SDrawerElement(element);
		});
	}

	/**
	 * Find a special activate element
	 */
	find(id) {
		if ( ! _sDrawerStack[id]) return false;
		return _sDrawerStack[id];
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