import SWebSTemplateComponent from '../../../js/core/SWebSTemplateComponent'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __style from '../../../js/dom/style'
import Flatpickr from 'flatpickr/dist/flatpickr'
import __dispatchEvent from '../../../js/dom/dispatchEvent'
import _get from 'lodash/get'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'
import __formSerialize from 'form-serialize'
import __sendForm from '../../../js/dom/sendForm'
import __matches from '../../../js/dom/matches'

export default class SAjaxFormComponent extends SWebSTemplateComponent {

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
			 * @prop
			 * @type  		{String}
			 */
			for : null,

			/**
			 * Specify if need to hide the form on result
			 * @prop
			 * @type 		{Boolean}
			 */
			hideFormOnSuccess : false,

			/**
			 * Specify if need to hide the form on error
			 * @prop
			 * @type 		{Boolean}
			 */
			hideFormOnError : false,

			/**
			 * Specify the hide form timeout
			 * @prop
			 * @type 		{Number}
			 */
			displayResultTimeout : 2000,

			/**
			 * Path that specify where the response to display
			 * lives in the response JSON
			 * @prop
			 * @type 		{String}
			 */
			successPath : null,

			/**
			 * Path that specify where the error to display
			 * lives in the response JSON
			 * @prop
			 * @type 		{String}
			 */
			errorPath : null,

			/**
			 * Content type header that will be sent with the request
			 * @prop
			 * @type 		{String}
			 */
			enctype : 'application/x-www-form-urlencoded'
		}
	}

	/**
	 * Default template data
	 * @definition 		SWebTemplateComponent.defaultTemplateData
	 */
	static get defaultTemplateData() {
		return {
			/**
			 * Store the success response
			 * @templateData
			 * @type 		{Mixed}
			 */
			success : null,

			/**
			 * Store the error response
			 * @templateData
			 * @type		{Mixed}}
			 */
			error : null
		};
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
		e.preventDefault();

		// check validity
		if ( ! this._form.checkValidity()) return;

		// send form
		__sendForm(this._form).then((response) => {
			// handle response
			this._handleSuccess(response);
		}, (error) => {
			this._handleError(error);
		});
	}

	/**
	 * Handle response
	 * @param 		{Mixed} 		response 		The ajax response
	 */
	_handleSuccess(response) {
		// reset form
		this._form.reset();
		[].forEach.call(this._form.elements, (formField) => {
			if (__matches(formField, 'input:not([type="submit"]):not([type="checkbox"]):not([type="radio"])')) {
				formField.removeAttribute('value');
			}
		});

		// check the response type
		if (typeof(response) === 'string') {
			// assume that the response is some kind of text, or html.
			// set it directly into the html
			this.templateData.success = response;
		} else if (typeof(response) === 'object'
				  && this.props.successPath
		) {
			// try to get the success message
			const msg = _get(response, this.props.successPath);
			if ( ! msg) return;
			this.templateData.success = msg;
		}

		// check if need to hide the form
		if (this.props.hideFormOnSuccess) {
			// hide the form
			this._form.style.display = 'none';
		}

		if (this.props.displayResultTimeout) {
			setTimeout(() => {
				// empty the element
				this.templateData.success = null;
				this._form.style.display = '';
			}, this.props.displayResultTimeout);
		}
	}

	/**
	 * Handle error response
	 * @param 		{Mixed} 		error 		The error response from the server
	 */
	_handleError(error) {
		// check the error type
		if (typeof(error) === 'string') {
			// assume that the error is some kind of text, or html.
			// set it directly into the html
			this.templateData.error = error;
		} else if (typeof(error) === 'object'
				  && this.props.errorPath
		) {
			// try to get the error message
			const msg = _get(error, this.props.errorPath);
			if ( ! msg) return;
			this.templateData.error = msg;
		}

		// check if need to hide the form
		if (this.props.hideFormOnError) {
			// hide the form
			this._form.style.display = 'none';
		}

		if (this.props.displayResultTimeout) {
			setTimeout(() => {
				// empty the element
				this.templateData.error = null;
				this._form.style.display = '';
			}, this.props.displayResultTimeout);
		}
	}
}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration(SAjaxFormComponent, (component) => {
	if (component._form) {
		sTemplateIntegrator.ignore(component._form, {
			loading : true,
			style : true
		});
	}
});
