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
import __querySelectorVisibleLiveOnce from '../dom/querySelectorVisibleLiveOnce';

if ( ! window._sDrawerStack) {
	window._sDrawerStack = {};
}

// Actual activate element class
class SDrawerComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sDrawer', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sDrawer', elm, {
			name : '@',
			closeOnClick : true,
			handleHash : true
		}, settings);

		// get the name
		this.name = this.settings.name;

		// add the class into the stack
		window._sDrawerStack[this.name] = this;

		// init
		this.initProxy(this._init.bind(this));
	}

	/**
	 * Init
	 */
	_init() {

		// try to find the drawer background
		this.bkg = document.querySelector('[s-drawer-bkg="'+this.name+'"]');
		if ( ! this.bkg) {
			this.bkg = document.createElement('div');
			this.bkg.setAttribute('s-drawer-bkg', this.name);
			// insert in the page
			this.elm.parentElement.insertBefore(this.bkg, this.elm.parentElement.firstChild);
		}

		// determine if has a transition
		let cs = window.getComputedStyle(this.elm);
		if (cs.transitionProperty != undefined && cs.transitionProperty != '') {
			this._transitionned = true;
		}

		// try to find the drawer overlay
		this.overlay = document.querySelector('[s-drawer-overlay="'+this.name+'"]');
		if ( ! this.overlay) {
			this.overlay = document.createElement('label');
			this.overlay.setAttribute('for', this.name);
			this.overlay.setAttribute('s-drawer-overlay', this.name);
			// insert in the page
			this.elm.parentElement.insertBefore(this.overlay, this.elm.parentElement.firstChild);
		}

		// try to find the toggle
		this.toggle = document.querySelector('[s-drawer-toggle="'+this.name+'"]');
		if ( ! this.toggle) {
			this.toggle = document.createElement('input');
			this.toggle.setAttribute('name', this.name);
			this.toggle.setAttribute('id', this.name);
			this.toggle.setAttribute('type', 'checkbox');
			this.toggle.setAttribute('s-drawer-toggle', this.name);
			// insert into page
			this.elm.parentElement.insertBefore(this.toggle, this.elm.parentElement.firstChild);
		}

		// listen for change on the toggle
		this.toggle.addEventListener('change', (e) => {
			let name = e.target.name;
			if (e.target.checked) {
				document.body.classList.add('s-drawer-'+this.name)
			} else {
				document.body.classList.remove('s-drawer-'+this.name);
			}
		});

		// listen for transitionend
		if (this._transitionned) {
			this.elm.addEventListener('transitionend', (e) => {
				if (this.toggle.checked == false) {
					document.body.classList.remove('s-drawer-'+this.name);
				}
			});
		}

		// listen for click on links into the drawer to close it
		if (this.settings.closeOnClick) {
			this.elm.addEventListener('click', (e) => {
				if (e.target.nodeName.toLowerCase() == 'a') {
					// close the drawer
					this.close();
				}
			});
		}

		// if handle hach
		if (this.settings.handleHash) {
			if (document.location.hash) {
				let hash = document.location.hash.substr(1);
				if (hash == this.name) {
					this.open();
				}
			}
		}
	}

	/**
	 * Open
	 */
	open() {
		// check the toggle
		this.toggle.setAttribute('checked', true);
		document.body.add('s-drawer-'+this.name);
		return this;
	}

	/**
	 * Close
	 */
	close() {
		// uncheck the toggle
		this.toggle.removeAttribute('checked');
		if ( ! this._transitionned) {
			document.body.classList.remove('s-drawer-'+this.name);
		}
		return this;
	}

	/**
	 * Check if is opened
	 */
	isOpen() {
		return (this.toggle.checked);
	}
}

// initOn
SDrawerComponent.initOn = function(selector, settings = {}) {
	// init the select
	return __querySelectorVisibleLiveOnce(selector).subscribe((elm) => {
		new SDrawerComponent(elm, settings);
	});
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SDrawerComponent = SDrawerComponent;

// export modules
export default SDrawerComponent;
