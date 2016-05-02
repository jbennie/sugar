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
import SComponent from '../core/SComponent'

// save all the activate elements
if ( ! window._sActivateStack) {
	window._sActivateStack = {};
}

// Actual activate element class
class SActivateElement extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sActivate', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sActivate', elm, {
			activeClass : 'active',
			history : true,
			anchor : true,
			toggle : false,
			trigger : 'click',
			unactivateTrigger : null,
			unactivateTimeout : 200
		}, settings);

		this._inited = true;
		this._tabs = {};

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
		window._sActivateStack[this.dataset('sActivate')] = this;

		// update references
		this.update();

		// handle history if needed
		if (this.settings.history) {
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
		this.elm.addEventListener(this.settings.trigger, (e) => {
			// clear unactivate timeout
			clearTimeout(this._unactivateSetTimeout);
			// if toggle
			if (this.settings.toggle && this.isActive()) {
				// unactivate
				this.unactivate();
				// check if has a hash
				if (this.settings.history) {
					window.history.back();
				}
			} else {
				if (this.settings.history) {
					setTimeout(() => {
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
					});
				} else {
					// activate the element
					this._activate();
				}
			}	
		});
		// check if has an unactivate trigger
		let unactivate_trigger = this.settings.unactivateTrigger;
		if (unactivate_trigger) {
			this.elm.addEventListener(unactivate_trigger, (e) => {
				this._unactivateSetTimeout = setTimeout(() => {
					this.unactivate();
				}, this.settings.unactivateTimeout);		
			});
			if (unactivate_trigger == 'mouseleave' || unactivate_trigger == 'mouseout') {
				[].forEach.call(this.targets, (target) => {
					target.addEventListener('mouseenter', (e) => {
						// clear the unactivate timeout
						clearTimeout(this._unactivateSetTimeout);
					});
					target.addEventListener(unactivate_trigger, (e) => {
						this._unactivateSetTimeout = setTimeout(() => {
							this.unactivate();
						}, this.settings.unactivateTimeout);	
					});
				});
			}
		}

		// if the element has the active class
		if (this.elm.classList.contains('active')) {
			this._activate();
		}

		// if need to handle anchor
		if (this.settings.anchor) {
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
		return this.elm.classList.contains('active');
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
		this.elm.classList.add('active');

		// activate all the targets
		[].forEach.call(this.targets, (target_elm) => {
			// remove the active class on target
			target_elm.classList.add('active');
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
		if (this.settings.history) {
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
		this.elm.classList.remove('active');

		// unactive targets
		[].forEach.call(this.targets, (target) => {
			target.classList.remove('active');
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
			if (elm.id && window._sActivateStack[elm.id]) {
				return elm;
			}
			elm = elm.parentNode;
		}
		return false;
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SActivateElement = SActivateElement;

// export
export default SActivateElement;