/*
 * SOneTimeDisplayComponent.js
 * This element allows you to manage same columns height very easily
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  04.07.16
 * @updated  04.07.16
 * @version  1.0.0
 */
import SComponent from '../../../js/core/SComponent'
import Cookies from 'js-cookie'

class SOneTimeDisplayComponent extends SComponent {

	/**
	 * constructor
	 * Construct the component
	 * @param 	{HTMLElement} 	elm 		The dom element that the component handle
	 * @param 	{Object} 		settings 	The settings to use for the component
	 * @param 	{String} 		name 		The name of the component in camelCase
	 * @return 	{SOneTimeDisplayComponent}
	 */
	constructor(elm, settings = {}, name = 'sOneTimeDisplayComponent') {
		super(elm, {
			/**
			 * timeout
			 * How many times to hide the element when dismissed
			 * @type  	{Number}
			 */
			timeout : 1000 * 60 * 60 * 24 * 365,

			/**
			 * method
			 * Set the method to use to store the component display status
			 * @values 	{cookie,localStorage,sessionStorage}
			 * @type 	{String}
			 */
			method : 'cookie',

			/**
			 * name
			 * Set the name used to save the cookie / localStorage or sessionStorage
			 * @type 	{String}
			 */
			name : 's-one-time-display',

			...settings

		}, name);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();
	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SOneTimeDisplayComponent}
	 */
	enable() {
		super.enable();

		// add the component class
		this.addComponentClass(this.elm);

		// get the dismiss element
		this.elm.addEventListener('click', this._onClick.bind(this));

		// update the status
		this.updateStatus();

		// maintain chainability
		return this;
	}

	/**
	 * updateStatus
	 * Update the element status
	 * @return 	{SOneTimeDisplayComponent}
	 */
	updateStatus() {
		// check if is dismissed
		if (this.isDismissed()) {
			// add the dismissed class
			this.addComponentClass(this.elm, null, null, 'dismissed');
			// remove the displayed class
			this.removeComponentClass(this.elm, null, null, 'displayed');
		} else {
			// remove the dismissed class
			this.removeComponentClass(this.elm, null, null, 'dismissed');
			// add the displayed class
			this.addComponentClass(this.elm, null, null, 'displayed');
		}
	}

	/**
	 * disable
	 * Disable the component
	 * @return 	{SOneTimeDisplayComponent}
	 */
	disable() {
		// get the dismiss element
		this.elm.removeEventListener('click', this._onClick);

		// remove the classes
		this.removeComponentClass(this.elm);
		this.removeComponentClass(this.elm, null, null, 'dismissed');
		this.removeComponentClass(this.elm, null, null, 'displayed');

		// disable
		super.disable();

		// maintain chainability
		return this;
	}

	/**
	 * _onClick
	 * When the user click inside the element
	 * @param	{MouseEvent} 	e 	The mouse event
	 * @return 	{void}
	 */
	_onClick(e) {
		// check if the clicked element is a dismiss one
		if (e.target.hasAttribute(`${this.componentNameDash}-dismiss`)) {
			// dismiss
			this.dismiss();
		}
	}

	/**
	 * reset
	 * Reset the storage
	 * @return 	{SOneTimeDisplayComponent}
	 */
	reset() {
		// reset the storage
		switch(this.settings.method.toLowerCase()) {
			case 'cookie':
				Cookies.remove(this.settings.name);
			break;
			case 'localstorage':
				localStorage.removeItem(this.settings.name);
			break;
			case 'sessionstorage':
				sessionStorage.removeItem(this.settings.name);
			break;
		}
		// maintain chainability
		return this;
	}

	/**
	 * isDismissed
	 * Return if the component has been dismissed or not
	 * @return 	{Boolean} 		The dismiss status
	 */
	isDismissed() {
		const dismissedTimestamp = this.getDismissedTimestamp();
		if ( ! dismissedTimestamp) return false;
		// check the difference between now and the dismissed
		// timestamp, depending on the timeout in settings
		const now = new Date().getTime();
		if (dismissedTimestamp + this.settings.timeout < now) {
			// reset the storage
			this.reset();
			// the item is not dismissed
			return false;
		}
		// the element is dismissed
		return true;
	}

	/**
	 * getDismissedTimestamp
	 * Return the timestamp when the element has been dismissed
	 * @return 	{Integer} 	The timestampe when the element has been dismissed
	 */
	getDismissedTimestamp() {
		let dismissedTimestamp;
		// switch on method
		switch(this.settings.method.toLowerCase()) {
			case 'cookie':
				dismissedTimestamp = Cookies.get(this.settings.name);
			break;
			case 'localstorage':
				dismissedTimestamp = localStorage.getItem(this.settings.name);
			break;
			case 'sessionstorage':
				dismissedTimestamp = sessionStorage.getItem(this.settings.name);			break;
			default:
				throw 'You need to set a method through settings in order to use this component... {cookie|localStorage|sessionStorage}';
			break;
		}
		// the element has been dismissed
		return dismissedTimestamp;
	}

	/**
	 * dismiss
	 * Dismiss the displayed element
	 * @return  	{SOneTimeDisplayComponent}
	 */
	dismiss() {
		// switch on method
		switch(this.settings.method.toLowerCase()) {
			case 'cookie':
				// set the cookie
				Cookies.set(this.settings.name, new Date().getTime(), {
					expires : new Date(new Date().getTime() + this.settings.timeout)
				});
			break;
			case 'localstorage':
				localStorage.setItem(this.settings.name, new Date().getTime());
			break;
			case 'sessionstorage':
				sessionstorage.setItem(this.settings.name, new Date().getTime());
			break;
		}
		// update the status
		this.updateStatus();
		// maintain chainability
		return this;
	}
}

// @TODO : STemplate integration

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SOneTimeDisplayComponent = SOneTimeDisplayComponent;

// export
export default SOneTimeDisplayComponent;
