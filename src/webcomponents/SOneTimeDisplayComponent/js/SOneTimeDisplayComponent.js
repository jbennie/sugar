import SWebComponent from '../../../js/core/SWebComponent'
import Cookies from 'js-cookie'

export default class SOneTimeDisplayComponent extends SWebComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {
			/**
			 * How many times to hide the element when dismissed
			 * @type  	{Number}
			 */
			timeout : 1000 * 60 * 60 * 24 * 365,

			/**
			 * Set the method to use to store the component display status
			 * @values 	{cookie,localStorage,sessionStorage}
			 * @type 	{String}
			 */
			method : 'cookie',

			/**
			 * Set the name used to save the cookie / localStorage or sessionStorage
			 * @type 	{String}
			 */
			name : 's-one-time-display',

			/**
			 * Set if the element is disabled or not.
			 * This will be removed if the element is enabled
			 * @prop
			 * @physicalProp
			 * @type 		{Boolean}
			 */
			disabled : true,

			/**
			 * Set if the element is enabled
			 * This will be removed id the element is disabled
			 * @prop
			 * @physicalProp
			 * @type 		{Boolean}
			 */
			enabled : false
		}
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return ['enabled','disabled'];
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// get the dismiss element
		this.addEventListener('click', this._onClick.bind(this));

		// set as block
		this.style.display = 'block';

		// update the status
		this.updateStatus();
	}

	/**
	 * updateStatus
	 * Update the element status
	 * @return 	{SOneTimeDisplayComponent}
	 */
	updateStatus() {
		// check if is dismissed
		if (this.isDismissed()) {
			this.setProps({
				enabled : false,
				disabled : true
			});
		} else {
			this.setProps({
				enabled : true,
				disabled : false
			});
		}
	}

	/**
	 * _onClick
	 * When the user click inside the element
	 * @param	{MouseEvent} 	e 	The mouse event
	 * @return 	{void}
	 */
	_onClick(e) {
		// check if the clicked element is a dismiss one
		if (e.target.hasAttribute(`${this._componentNameDash}-dismiss`)) {
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
		switch(this.props.method.toLowerCase()) {
			case 'cookie':
				Cookies.remove(this.props.name);
			break;
			case 'localstorage':
				localStorage.removeItem(this.props.name);
			break;
			case 'sessionstorage':
				sessionStorage.removeItem(this.props.name);
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
		if (dismissedTimestamp + this.props.timeout < now) {
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
		switch(this.props.method.toLowerCase()) {
			case 'cookie':
				dismissedTimestamp = Cookies.get(this.props.name);
			break;
			case 'localstorage':
				dismissedTimestamp = localStorage.getItem(this.props.name);
			break;
			case 'sessionstorage':
				dismissedTimestamp = sessionStorage.getItem(this.props.name);			break;
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
		switch(this.props.method.toLowerCase()) {
			case 'cookie':
				// set the cookie
				Cookies.set(this.props.name, new Date().getTime(), {
					expires : new Date(new Date().getTime() + this.props.timeout)
				});
			break;
			case 'localstorage':
				localStorage.setItem(this.props.name, new Date().getTime());
			break;
			case 'sessionstorage':
				sessionstorage.setItem(this.props.name, new Date().getTime());
			break;
		}
		// update the status
		this.updateStatus();
		// maintain chainability
		return this;
	}
}
