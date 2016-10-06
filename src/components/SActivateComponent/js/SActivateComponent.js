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
import SComponent from '../../../js/core/SComponent'
import __scrollTop from '../../../js/dom/scrollTop'
import __uniqid from '../../../js/utils/uniqid'
import __querySelectorLive from '../../../js/dom/querySelectorLive';

import STemplate from '../../../js/core/STemplate'

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
	 * targets
	 * Store all the targets of the component
	 * @type 	[Array]
	 */
	targets = [];

	/**
	 * _parentActivateComponent
	 * Store the parent activate component instance
	 * to activate it when this component is activated
	 * @type 	{SActivateComponent}
	 */
	_parentActivateComponent = null;

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
			beforeActivate : null,
			afterActivate : null,
			beforeUnactivate : null,
			afterUnactivate : null
		}, settings);
	}

	/**
	 * Init
	 */
	_init() {

		// init component
		super._init();

		// watch some attributes
		this.watch(`attr.href,attr.${this.componentName},attr.${this.componentName}Target`, (newVal, oldVal) => {
			this.update();
		});

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
							this.elm.setAttribute(this.componentNameDash+'-group', sibling_grp);
						}
					}
				}
			});

			// if we don't have any group yet
			if ( ! this._getGroup(this.elm)) {
			// if ( ! this.dataset(`${this.componentName}Group`)) {
				this.elm.setAttribute(this.componentNameDash+'-group','group-'+Math.round(Math.random()*99999999));
				// this.dataset(`${this.componentName}Group`, 'group-'+Math.round(Math.random()*99999999));
				this.elm.sActivateGeneratedGroup = true;
			}
		}

		// check if we are in another s-activate element
		this._parentActivateComponent = this._getClosestActivateComponent();

		// listen for click
		this.elm.addEventListener(this.settings.trigger, (e) => {
			// if (e.target !== this.elm) return;
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

		// wait a loop to activate the element if needed
		// we wait to be sure all the elements on the pages have
		// been inited
		setTimeout(() => {
			// manage the active class
			if (this.elm.classList.contains(this.settings.activeClass)) {
				this._activate();
			}
			// check with anchor if need to activate the element
			if (this.settings.anchor) {
				let hash = document.location.hash;
				if (hash) {
					if (hash.substr(1) === this.settings.id) {
						this._activate();
					}
				}
			}
		});
	}

	/**
	 * enable
	 * Enable the component
	 * Called automatically by the _onAdded method
	 * @return 	{SActivateComponent}
	 */
	enable() {
		super.enable();
	}

	/**
	 * disable
	 * Disable the component
	 * Called automatically by the _onRemoved method
	 * @return 	{SActivateComponent}
	 */
	disable() {
		super.disable();
	}

	/**
	 * When the element is added to the dom
	 */
	_onAdded() {
		super._onAdded();
		// check if has an unactivate trigger
		let unactivate_trigger = this.settings.unactivateTrigger;
		if (unactivate_trigger) {
			this.elm.addEventListener(unactivate_trigger, this._onElmUnactivate.bind(this));
			if (unactivate_trigger == 'mouseleave' || unactivate_trigger == 'mouseout') {
				[].forEach.call(this.targets, (target) => {
					target.addEventListener('mouseenter', this._onTargetMouseEnter.bind(this));
					target.addEventListener(unactivate_trigger, this._onTargetUnactivate.bind(this));
				});
			}
		}
	}

	/**
	 * When the element is removed from dom
	 */
	_onRemoved() {
		if (this.settings.unactivateTrigger) {
			this.elm.removeEventListener(this.settings.unactivateTrigger, this._onElmUnactivate);
			[].forEach.call(this.targets, (target) => {
				target.removeEventListener('mouseenter', this._onTargetMouseEnter);
				target.removeEventListener(this.settings.unactivateTrigger, this._onTargetUnactivate);
			});
		}
		super._onRemoved();
	}

	/**
	 * Destroy routine
	 */
	destroy() {
		delete window._sActivateStack[this.settings.id];
		super.destroy();
	}

	/**
	 * Element unactivate
	 */
	_onElmUnactivate(e) {
		this._unactivateSetTimeout = setTimeout(() => {
			this.unactivate();
		}, this.settings.unactivateTimeout);
	}

	/**
	 * Targer mouseenter callback
	 */
	_onTargetMouseEnter(e) {
		// clear the unactivate timeout
		clearTimeout(this._unactivateSetTimeout);
	}

	/**
	 * Target uncactivate callback
	 */
	_onTargetUnactivate(e) {
		this._unactivateSetTimeout = setTimeout(() => {
			this.unactivate();
		}, this.settings.unactivateTimeout);
	}

	/**
	 * Get target
	 */
	_getTarget(elm) {
		if (elm[this.componentName]) {
			return elm[this.componentName].target;
		}
		return elm.getAttribute(`data-${this.componentNameDash}`) || elm.getAttribute(this.componentNameDash) || elm.getAttribute('href');
	}

	/**
	 * Get group
	 */
	_getGroup(elm) {
		return elm.getAttribute(this.componentNameDash+'-group') || elm.getAttribute('data-'+this.componentNameDash+'-group');
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
		[].forEach.call(document.body.querySelectorAll(`[data-${this.componentNameDash}-group="${grp}"],[${this.componentNameDash}-group="${grp}"]`), (group_elm) => {
			// get the api
			let api = group_elm[this.componentName];
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
		if (this._parentActivateComponent) {
			this._parentActivateComponent._activate();
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

		// get the target
		this.target = this.attr[this.componentName] || this.attr.href;

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
			const id = `${this.componentNameDash}-${__uniqid()}`;
			if (this.elm.getAttribute('id') == null) {
				this.elm.setAttribute('id', id);
			}
			this.target = `#${id}`;
		}

		// save in stack id an id exist
		if (this.settings.id) {
			window._sActivateStack[this.settings.id] = this;
		}

		// update the targets array
		if (this.target) {
			this.targets = scope.querySelectorAll(this.target);
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
				// && elm._sActivateTrigger[this.componentName] // and the trigger is the same instance type
				&& elm._sActivateTrigger !== this.elm
			) {
				return elm._sActivateTrigger[this.componentName];
			}
			elm = elm.parentNode;
		}
		return false;
	}
}

// STemplate integration
STemplate.registerComponentIntegration('SActivateComponent', (component) => {
	component.targets.forEach((target) => {
		STemplate.keepAttribute(target, 'id');
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SActivateComponent = SActivateComponent;

// export
export default SActivateComponent;
