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
import { SugarElement, SugarDom } from './sugar-core'
var _get = require('lodash/get');

// make sure we have a sugar property on window
if (window.sugar == null) { window.sugar = {}; }

// save all the activate elements
let _sActivateStack = {};

// Actual activate element class
class SugarActivateElement extends SugarElement {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SugarElement.setup('sActivate', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sActivate', elm, {
			active_class: 'active',
			history: true,
			anchor: true,
			toggle : false
		}, settings);

		this._inited = true;
		this._tabs = {};

		this.elm.sActivate = this;

		// init
		this.init();
	}

	/**
	 * Init
	 */
	init() {
		if (this.inited) {
			return;
		}
		this.inited = true;
		let group = this.dataset('sActivateGroup');

		// save in stack
		_sActivateStack[this.dataset('sActivate')] = this;

		// update references
		this.update();

		// handle history if needed
		if (this.setting('history')) {
			this._handleHistory();
		}

		// managing group
		if (! group) {
			[].forEach.call(this.elm.parentNode.childNodes, (sibling) => {
				if ( ! this.dataset('sActivateGroup')) {
					let sActivate = this.dataset('sActivate', null, sibling);
					if (sActivate) {
						let sibling_grp = this.dataset('sActivateGroup', null, sibling);
						if (sibling_grp && sibling.sActivateGeneratedGroup) {
							this.dataset('sActivateGroup', sibling_grp);
						}
					}
				}
			});

			// if we don't have any group yet
			if ( ! this.dataset('sActivateGroup')) {
				this.dataset('sActivateGroup', 'group-'+Math.round(Math.random()*99999999));
				this.elm.sActivateGeneratedGroup = true;
			}
		}

		// check if we are in another s-activate element
		let closest = this._getClosestActivate();
		if (closest) {
			// save the closest content reference
			this.parentActivate = document.body.querySelector('[data-s-activate="'+closest.id+'"]');
		}

		// listen for click
		this.elm.addEventListener('click', (e) => {

			// if toggle
			if (this.setting('toggle') && this.isActive()) {
				// unactivate
				this.unactivate();
				// check if has a hash
				if (this.setting('history')) {
					window.history.back();
				}
			} else {
				if (this.setting('history')) {
					// simply activate again if the same id that anchor
					// this can happened when an element has history to false
					if (document.location.hash && document.location.hash.substr(1) == this.dataset('sActivate')) {
						this._activate();
					} else {
						// simply change the hash 
						// the event listener will take care of activate the
						// good element
						document.location.hash = this.dataset('sActivate');
					}
				} else {
					// activate the element
					this._activate();
				}
			}	
		});

		// if the element has the active class
		if (this.hasClass('active')) {
			this._activate();
		}

		// if need to handle anchor
		if (this.setting('anchor')) {
			let hash = document.location.hash;
			if (hash) {
				hash = hash.substr(1);
				if (hash == this.dataset('sActivate')) {
					this._activate();
				}
			}
		}
	}

	/**
	 * Check if is active
	 */
	isActive() {
		return this.hasClass('active');
	}

	/**
	 * Activate the element
	 */
	_activate() {
		// unactive all group elements
		let grp = this.dataset('sActivateGroup');
		[].forEach.call(document.body.querySelectorAll('[data-s-activate-group="'+grp+'"]'), (group_elm) => {
			// get the api
			let api = group_elm.sActivate;
			// unactive element
			if (api) {
				api.unactivate();
			}
		});

		// activate the element
		this.addClass('active');

		// activate all the targets
		[].forEach.call(this.targets, (target_elm) => {
			// remove the active class on target
			this.addClass('active', target_elm);
		});

		// if has a perent, activate it
		if (this.parentActivate) {
			let parent_api = this.parentActivate.sActivate;
			if (parent_api) {
				parent_api._activate();
			}
		}
	}

	/**
	 * Handle history
	 */
	_handleHistory() {
		window.addEventListener('hashchange', (e) => {
			let hash = document.location.hash;
			if (hash) {
				hash = hash.substr(1);
				if (hash == this.dataset('sActivate')) {
					this._activate();
				}
			}
		});
	}

	/**
	 * Activate the element
	 */
	activate() {
		if (this.setting('history')) {
			// change hash
			document.location.hash = this.dataset('sActivate');
		} else {
			// activate simply
			this._activate();
		}
	}

	/**
	 * Unactive
	 */
	unactivate() {
		// unactive the item itself
		this.removeClass('active');

		// unactive targets
		[].forEach.call(this.targets, (target) => {
			this.removeClass('active', target);
		});
	}

	/**
	 * Update targets, etc...
	 */
	update(scope = document.body) {
		this.targets = scope.querySelectorAll('#'+this.dataset('sActivate'));
	}

	/**
	 * Get closest 
	 */
	_getClosestActivate() {
		let elm = this.elm.parentNode;
		while(elm && elm != document) {
			if (elm.id && _sActivateStack[elm.id]) {
				return elm;
			}
			elm = elm.parentNode;
		}
		return false;
	}
}

class SugarActivateManager extends SugarDom {
	
	/**
	 * Constructor
	 */
	constructor() {
		// init parent
		super();

		// what that the dom is ready
		this.domReady(() => {
			this._init();
		});
	}

	/**
	 * Init
	 */
	_init() {
		// init all elements in the page
		[].forEach.call(document.body.querySelectorAll('[data-s-activate]'), (elm) => {
			new SugarActivateElement(elm);
		});
		// listen for new elements
		this._listenMutations();

		// listen for new element
		this.onInserted('[data-s-activate]', (element) => {
			if (!element.sActivate) {
				new SugarActivateElement(element);
			}
		});
	}

	/**
	 * Find a special activate element
	 */
	find(id) {
		if ( ! _sActivateStack[id]) return false;
		return _sActivateStack[id];
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

	/**
	 * Listen for nodes
	 */
	_listenMutations() {
		document.addEventListener('DOMNodeInserted', (e) => {
			let elm = e.target;
			if (this.dataset(elm, 'sActivate') && ! _sActivateStack[this.dataset(elm, 'sActivate')]) {
				// new activate element
				new SugarActivateElement(elm);
			}
		});
	}
};

// expose in window
window.sugar.activateManager = new SugarActivateManager();
window.sugar.ActivateElement = SugarActivateElement;
window.sugar.ActivateManager = SugarActivateManager;

// export modules
module.exports = {
	activateManager : window.sugar.activateManager,
	ActivateManager : SugarActivateManager,
	ActivateElement : SugarActivateElement
};