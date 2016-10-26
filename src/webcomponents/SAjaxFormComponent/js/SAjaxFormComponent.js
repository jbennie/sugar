import SWebComponent from '../../../js/core/SWebComponent'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __style from '../../../js/dom/style'
import Flatpickr from 'flatpickr/dist/flatpickr'
import __dispatchEvent from '../../../js/dom/dispatchEvent'
import SAjax from '../../../js/classes/SAjax'
import _get from 'lodash/get'

export default class SAjaxFormComponent extends SWebComponent {

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
			 * Specify the name or id of the field to link the datepicker to
			 * @type  		{String}
			 */
			for : null,

			/**
			 * Specify if need to hide the form on result
			 */
			hideFormOnSuccess : false,

			/**
			 * Specify if need to hide the form on error
			 */
			hideFormOnError : false,

			/**
			 * Specify the hide form timeout
			 */
			displayResultTimeout : 2000,

			/**
			 * Path that specify where the response to display
			 * lives in the response JSON
			 */
			successPath : null,

			/**
			 * Path that specify where the error to display
			 * lives in the response JSON
			 */
			errorPath : null
		}
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return []
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// required properties
		if ( ! this.props.for) {
			throw `The SAjaxFormComponent component need a props.for property`;
		}

		// find the form bound to the component
		this._form = document.querySelector(`form[name="${this.props.for}"],form#${this.props.for}`);

		// no form found
		if ( ! this._form) {
			throw `The form named ${this.props.for} does not exist in the page.`;
		}

		// listen for surmit to hook with ajax send instead
		setTimeout(() => {
			this._form.addEventListener('submit', this._onSubmit.bind(this));
		});
	}

	/**
	 * Unmount component
	 * @definition 		SWebComponent.componentUnmount
	 */
	componentUnmount() {
		super.componentUnmount();

		// stop listening for form submit
		this._form.removeEventListener('submit', this._onSubmit);
	}

	/**
	 * On form submit
	 * @param 		{Event} 		e 		The submit event
	 */
	_onSubmit(e) {
		console.log('submit', e);

		e.preventDefault();

		// check validity
		if ( ! this._form.checkValidity()) return;

		// create ajax instance
		const ajx = new SAjax({
			url : this._form.getAttribute('action'),
			method : this._form.getAttribute('method') || 'POST'
		});

		// send the request
		ajx.send().then((response) => {
			console.log('response', response);
			// handle response
			this._handleSuccess(response);
		}, (error) => {
			console.error('error', error);
		});


	}

	/**
	 * Handle response
	 * @param 		{Mixed} 		response 		The ajax response
	 */
	_handleSuccess(response) {
		// check the response type
		if (typeof(response) === 'string') {
			// assume that the response is some kind of text, or html.
			// set it directly into the html
			this.innerHTML = response;
		} else if (typeof(response) === 'object'
				  && this.props.successPath
		) {
			// try to get the success message
			const msg = _get(response, this.props.successPath);
			if ( ! msg) return;
			this.innerHTML = msg;
		}

		// check if need to hide the form
		if (this.props.hideFormOnSuccess) {
			// hide the form
			this._form.style.display = 'none';
		}

		if (this.props.displayResultTimeout) {
			setTimeout(() => {
				// empty the element
				this.innerHTML = '';
				this._form.style.display = '';
			}, this.props.displayResultTimeout);
		}
	}

	/**
	 * Render
	 * @definition 		SWebComponent.render
	 */
	render() {
		super.render();
		// copy props
		if (this.props.color) {
			this._flatpickr.calendarContainer.setAttribute('color', this.props.color);
		}
	}
}

// register component
SWebComponent.define('s-ajax-form', SAjaxFormComponent);
