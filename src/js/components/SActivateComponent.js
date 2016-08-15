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
import __scrollTop from '../dom/scrollTop'
import __uniqid from '../tools/uniqid'
import __querySelectorLive from '../dom/querySelectorLive';

// save all the activate elements
if ( ! window._sActivateStack) {
	window._sActivateStack = {};
}

// Actual activate element class
class SActivateComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings, name = 'sActivate') {
		SComponent.setup(name, type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sActivate') {
		super(name, elm, {
			target : '@',
			id : null,
			group : null,
			activeTargetClass : null,
			activeClass : 'active',
			history : true,
			anchor : true,
			toggle : false,
			trigger : 'click',
			unactivateTrigger : null,
			unactivateTimeout : 200,
			preventScroll : false,
			beforeInit : null,
			afterInit : null,
			beforeActivate : null,
			afterActivate : null,
			beforeUnactivate : null,
			afterUnactivate : null
		}, settings);
		// init
		this.initProxy(this.init.bind(this));
	}

	/**
	 * Init
	 */
	init() {
		// before init
		this.settings.beforeInit && this.settings.beforeInit(this);

		// get the target
		if ( ! this.settings.target) {
			this.settings.target = this.elm.getAttribute('href');
		}
		this.target = this.settings.target;

		// if the target is an id
		// and the setting "id" is not set
		// set the setting with the target id
		if ( ! this.settings.id
			&& (typeof(this.target) === 'string' && this.target.substr(0,1) !== '.')
		) {
			if (this.target.substr(0,1) === '#') {
				this.settings.id = this.target.substr(1);
			} else {
				this.settings.id = this.target;
			}
		} else if ( ! this.settings.id) {
			this.settings.id = __uniqid();
		}

		// if don't have any target
		// mean that it's the element itself
		// so check if already an id
		// otherwise, set a new one
		if ( ! this.target) {
			const id = `${this.name_dash}-${__uniqid()}`;
			if (this.elm.getAttribute('id') == null) {
				this.elm.setAttribute('id', id);
			}
			this.target = `#${id}`;
		}

		// save in stack id an id exist
		if (this.settings.id) {
			window._sActivateStack[this.settings.id] = this;
		}

		// update references
		this.update();

		// handle history if needed
		if (this.settings.history) {
			this._handleHistory();
		}

		if ( ! this._getGroup(this.elm)) {
			[].forEach.call(this.elm.parentNode.childNodes, (sibling) => {
				if ( ! this._getGroup(this.elm) && sibling.nodeName != '#text' && sibling.nodeName != '#coment') {
					let target = this._getTarget(sibling);
					if (target) {
						let sibling_grp = this._getGroup(sibling);
						if (sibling_grp && sibling.sActivateGeneratedGroup) {
							this.elm.setAttribute(this.name_dash+'-group', sibling_grp);
						}
					}
				}
			});

			// if we don't have any group yet
			if ( ! this._getGroup(this.elm)) {
			// if ( ! this.dataset(`${this.name}Group`)) {
				this.elm.setAttribute(this.name_dash+'-group','group-'+Math.round(Math.random()*99999999));
				// this.dataset(`${this.name}Group`, 'group-'+Math.round(Math.random()*99999999));
				this.elm.sActivateGeneratedGroup = true;
			}
		}

		// check if we are in another s-activate element
		this.parentActivateComponent = this._getClosestActivateComponent();

		// listen for click
		this.elm.addEventListener(this.settings.trigger, (e) => {
			if (e.target !== this.elm) return;
			e.preventDefault();
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
					// simply activate again if the same id that anchor
					// this can happened when an element has history to false
					if (document.location.hash && document.location.hash === this.settings.id) {
						this._activate();
					} else {
						// save the scroll position
						// this._scrollTop = __scrollTop();
						// simply change the hash
						// the event listener will take care of activate the
						// good element
						if (this.settings.preventScroll) {
							window.history.pushState({
								url : this.settings.id
							},null,`${document.location.pathname}${this.settings.id}`);
							this._processHistoryChange();
						} else {
							document.location.hash = `${this.settings.id}`;
						}
					}
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

		// wait a loop to activate the element if needed
		// we wait to be sure all the elements on the pages have
		// been inited
		setTimeout(() => {
			// if the element has the active class
			if ( ! document.location.hash || ! this.settings.anchor) {
				if (this.elm.classList.contains(this.settings.activeClass)) {
					this._activate();
				}
			} else if (this.settings.anchor) {
				let hash = document.location.hash;
				if (hash) {
					if (hash.substr(1) === this.settings.id) {
						this._activate();
					}
				}
			}
		});

		// init callback
		this.settings.afterInit && this.settings.afterInit(this);
	}

	/**
	 * Get target
	 */
	_getTarget(elm) {
		if (elm[this.name]) {
			return elm[this.name].target;
		}
		return elm.getAttribute(`data-${this.name_dash}`) || elm.getAttribute(this.name_dash) || elm.getAttribute('href');
	}

	/**
	 * Get group
	 */
	_getGroup(elm) {
		return elm.getAttribute(this.name_dash+'-group') || elm.getAttribute('data-'+this.name_dash+'-group');
	}

	/**
	 * Check if is active
	 */
	isActive() {
		return this.elm.classList.contains(this.settings.activeClass);
	}

	/**
	 * Activate the element
	 */
	_activate() {

		// before activate callback
		this.settings.beforeActivate && this.settings.beforeActivate(this);

		// unactive all group elements
		let grp = this._getGroup(this.elm);
		[].forEach.call(document.body.querySelectorAll(`[data-${this.name_dash}-group="${grp}"],[${this.name_dash}-group="${grp}"]`), (group_elm) => {
			// get the api
			let api = group_elm[this.name];
			// unactive element
			if (api) {
				api.unactivate();
			}
		});

		// activate the element
		this.elm.classList.add(this.settings.activeClass);

		// activate all the targets
		[].forEach.call(this.targets, (target_elm) => {
			// remove the active class on target
			target_elm.classList.add(this.settings.activeTargetClass || this.settings.activeClass);
		});

		// if has a perent, activate it
		if (this.parentActivateComponent) {
			this.parentActivateComponent._activate();
		}

		// callback
		this.settings.afterActivate && this.settings.afterActivate(this);
	}

	/**
	 * Handle history
	 */
	_handleHistory() {
		if ( ! this.settings.preventScroll) {
			window.addEventListener('hashchange', (e) => {
				this._processHistoryChange();
			});
		} else {
			window.addEventListener('popstate', (e) => {
				this._processHistoryChange();
			});
		}
	}

	/**
	 * Process history change
	 */
	_processHistoryChange() {
		let hash = document.location.hash;
		if (hash) {
			if (hash.substr(1) === this.settings.id) {
				this._activate();
			}
		}
	}

	/**
	 * Activate the element
	 */
	activate() {
		if (this.settings.history) {
			if (this.settings.preventScroll) {
				window.history.pushState(null,null,`${document.location.pathname}#${this.settings.id}`);
				this._processHistoryChange();
			} else {
				document.location.hash = this.settings.id;
			}
		} else {
			// activate simply
			this._activate();
		}
	}

	/**
	 * Unactive
	 */
	unactivate() {

		// before unactivate
		this.settings.beforeUnactivate && this.settings.onBeforeUnactivate(this);

		// unactive the item itself
		this.elm.classList.remove(this.settings.activeClass);

		// unactive targets
		[].forEach.call(this.targets, (target) => {
			target.classList.remove(this.settings.activeTargetClass || this.settings.activeClass);
		});

		// callback
		this.settings.afterUnactivate && this.settings.afterUnactivate(this);
	}

	/**
	 * Update targets, etc...
	 */
	update(scope = document.body) {
		// process target
		let target = this.target;
		// if ( typeof(target) === 'string') {
		// 	if (target.substr(0,1) !== '.'
		// 		|| target.substr(0,1) !== '#') {
		// 		target = `[${target}]`;
		// 	}
		// }
		if (target) {
			this.targets = scope.querySelectorAll(target);
			[].forEach.call(this.targets, (t) => {
				t._sActivateTrigger = this.elm;
			});
		} else {
			this.targets = [];
		}
	}

	/**
	 * Get closest
	 */
	_getClosestActivateComponent() {
		let elm = this.elm.parentNode;
		while(elm && elm != document) {
			if (
				elm._sActivateTrigger // if the element is a target of an activate component
				// && elm._sActivateTrigger[this.name] // and the trigger is the same instance type
				&& elm._sActivateTrigger !== this.elm
			) {
				return elm._sActivateTrigger[this.name];
			}
			elm = elm.parentNode;
		}
		return false;
	}
}

// initOn
SActivateComponent.initOn = function(selector, settings = {}) {
	// init the select
	return __querySelectorLive(selector).visible().once().subscribe((elm) => {
		new SActivateComponent(elm, settings);
	});
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SActivateComponent = SActivateComponent;

// export
export default SActivateComponent;
