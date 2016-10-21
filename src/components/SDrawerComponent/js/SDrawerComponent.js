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
import __querySelectorLive from '../../../js/dom/querySelectorLive';
import __getTransitionProperties from '../../../js/dom/getTransitionProperties'
import __fastdom from 'fastdom'

if ( ! window._sDrawerStack) {
	window._sDrawerStack = {};
}

// Actual activate element class
class SDrawerComponent extends SComponent {

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sDrawer') {
		super(elm, {
			name : '@',
			closeOnClick : true,
			handleHash : true,
			...settings
		}, name);

		// get the name
		this.componentName = this.settings.name;

		// add the class into the stack
		window._sDrawerStack[this.componentName] = this;
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		// try to find the drawer background
		this.bkg = document.querySelector('[s-drawer-bkg="'+this.componentName+'"]');
		if ( ! this.bkg) {
			this.bkg = document.createElement('div');
			__fastdom.mutate(() => {
				this.bkg.setAttribute('s-drawer-bkg', this.componentName);
				// insert in the page
				this.elm.parentElement.insertBefore(this.bkg, this.elm.parentElement.firstChild);
			});
		}

		// try to find the drawer overlay
		this.overlay = document.querySelector('[s-drawer-overlay="'+this.componentName+'"]');
		if ( ! this.overlay) {
			this.overlay = document.createElement('label');
			this.overlay.setAttribute('for', this.componentName);
			this.overlay.setAttribute('s-drawer-overlay', this.componentName);
			__fastdom.mutate(() => {
				// insert in the page
				this.elm.parentElement.insertBefore(this.overlay, this.elm.parentElement.firstChild);
			});
		}

		// try to find the toggle
		this.toggle = document.querySelector('[s-drawer-toggle="'+this.componentName+'"]');
		if ( ! this.toggle) {
			this.toggle = document.createElement('input');
			this.toggle.setAttribute('name', this.componentName);
			this.toggle.setAttribute('id', this.componentName);
			this.toggle.setAttribute('type', 'checkbox');
			this.toggle.setAttribute('s-drawer-toggle', this.componentName);
			__fastdom.mutate(() => {
				// insert into page
				this.elm.parentElement.insertBefore(this.toggle, this.elm.parentElement.firstChild);
			});
		}

		// listen for change on the toggle
		this.toggle.addEventListener('change', (e) => {
			let name = e.target.name;
			__fastdom.mutate(() => {
				if (e.target.checked) {
					document.body.classList.add('s-drawer-'+this.componentName)
				} else {
					document.body.classList.remove('s-drawer-'+this.componentName);
				}
			});
		});

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
				if (hash == this.componentName) {
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
		__fastdom.mutate(() => {
			this.toggle.setAttribute('checked', true);
			document.body.classList.add('s-drawer-'+this.componentName);
		});
		return this;
	}

	/**
	 * Close
	 */
	close() {
		// uncheck the toggle
		__fastdom.mutate(() => {
			this.toggle.removeAttribute('checked');
		});

		const transition = __getTransitionProperties(this.elm);
		setTimeout(() => {
			__fastdom.mutate(() => {
				document.body.classList.remove('s-drawer-'+this.componentName);
			});
		}, transition.totalDuration);
		return this;
	}

	/**
	 * Check if is opened
	 */
	isOpen() {
		return (this.toggle.checked);
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SDrawerComponent = SDrawerComponent;

// export modules
export default SDrawerComponent;
