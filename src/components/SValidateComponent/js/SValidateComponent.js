/*
 * SValidateComponent.js
 *
 * Component that allows to stick an element to the top of the screen
 *
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  25.07.16
 * @updated  25.07.16
 * @version  1.0.0
 */
import SComponent from '../../../js/core/SComponent'
import __querySelectorLive from '../../../js/dom/querySelectorLive'
import _extend from 'lodash/extend'
import __closest from '../../../js/dom/closest'
import __isColor from '../../../js/utils/is/color'
import __isEmail from '../../../js/utils/is/email'
import __isUrl from '../../../js/utils/is/url'
import __isNumber from '../../../js/utils/is/number'
import __isInteger from '../../../js/utils/is/integer'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'

class SValidateComponent extends SComponent {

	/**
	 * Registered validators
	 * @type 	{Object}
	 */
	static validators = {};

	/**
	 * Messages
	 * @type 	{Object}
	 */
	static messages = {
		required : 'This field is required',
		min : 'This field value must greater or equal than %min',
		max : 'This field value must lower or equal than %max',
		maxlength : 'This field must be shorter than %maxlength',
		pattern : 'This field must respect this pattern "%pattern"',
		integer : 'This field must be an integer',
		number : 'This field must be a number',
		range : 'This field must stand between %min and %max',
		email : 'This field must be a valid email address',
		color : 'This field must be a valid color',
		url : 'This field must be a valid url'
	};

	/**
	 * Register a validator
	 * @param 	{String} 	name 		The name of the validator
	 * @param 	{Object} 	validator 	The validator settings
	 */
	static registerValidator(name, settings = {}) {
		// check settings
		if ( ! settings.validate || typeof(settings.validate) !== 'function') {
			throw `The validator ${name} need his validate setting to be a function that return true or false`;
		}
		// set the new validator
		SValidateComponent.validators[name] = settings;
	}

	/**
	 * _isValid
	 * Store if the field is valid or not
	 * @type 	{Boolean}
	 */
	_isValid = true;

	/**
	 * _isDirty
	 * Store if the field is dirty or not
	 * @type 	{Boolean}
	 */
	_isDirty = false;

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sValidate') {
		super(elm, {

			/**
			 * validate
			 * The list of validators to apply on the element
			 * @type 	{String}
			 */
			validate : '@',

			/**
			 * on
			 * Specify when the validation has to be triggered
			 * @type 	{String}
			 */
			on : 'change',

			/**
			 * timeout
			 * Specify a timeout before validating the field
			 * @type 	{Integer}
			 */
			timeout : 200,

			/**
			 * validators
			 * Store the specific validators settings for this particular instance
			 * @type 	{Object}
			 */
			validators : {},

			/**
			 * messages
			 * Store the specific messages wanted for this particular instance
			 * @type 	{Object}
			 */
			messages : {},

			/**
			 * apply
			 * The function to use to apply the error message
			 * @type 	{Object}
			 */
			apply : {},

			...settings

		}, name);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		// extend messages with the static ones
		this._messages = {
			...SValidateComponent.messages,
			...this.settings.messages
		};

		// extend validators with the static ones
		this._validators = _extend(
			SValidateComponent.validators,
			this.settings.validators
		);

		// apply standard validators
		this._applyStandardValidators();

		// listen when to trigger the validation
		if (this.settings.on) {

			// if is a select, a checkbox or a radio

			this.elm.addEventListener(this.settings.on, (e) => {
				// validate directly if no timeout
				if ( ! this.settings.timeout) this.validate();
				else {
					// wait before validating
					clearTimeout(this._timeout);
					this._timeout = setTimeout(() => {
						this.validate();
					}, this.settings.timeout);
				}
			});
		}

		// try to find the closest form to listen when it is submitted
		const formElm = __closest(this.elm, 'form');
		this._formElm = formElm;
		if (formElm) {
			formElm.setAttribute('novalidate', true);
			// formElm._sValidateComponentSubmitHandler = true;
			formElm.addEventListener('submit', (e) => {
				const isValid = this.validate();
				// validate the input
				if ( ! isValid) {
					e.preventDefault();
					e.stopPropagation();
				}
			});
		}
	}

	/**
	 * render
	 * Render the component
	 * @return 	{void}
	 */
	render() {
		// if is dirty
		if (this._isDirty) {
			this.addComponentClass(this.elm, null, null, 'dirty');
			if (this._isValid) {
				this.removeComponentClass(this.elm, null, null, 'invalid');
				this.addComponentClass(this.elm, null, null, 'valid');
			} else {
				this.addComponentClass(this.elm, null, null, 'invalid');
				this.removeComponentClass(this.elm, null, null, 'valid');
			}
		}
	}

	/**
	 * Apply the validation
	 */
	validate() {

		let invalidType = null;
		let applyFn = null;
		let message = null;

		// set that is dirty
		this._isDirty = true;

		// loop on each validators and launch them
		const validators = this.settings.validate.split(',');
		for (let i=0; i<validators.length; i++) {
			const name = validators[i];

			// check if the value is null and the validator name if not
			// "required" to not launch the validation
			if ( ! this.getValue() && name !== 'required') continue;

			// process to validation
			if (this._validators[name] && ! this._validators[name].validate(this)) {

				// set the invalid type
				invalidType = name;

				// set the invalid class on the element itself
				this._isValid = false;

				// get the message
				message = this._validators[name].message;
				if (typeof(message) === 'function') message = message(this, this._messages[name]);
				else message = this._messages[name];
				// apply the error message
				applyFn = this.settings.apply[name] || this.settings.apply['default'];
				// stop the loop
				break;
			}
		}

		// if it's the same invalid type
		// do nothing
		if (this._invalidType && this._invalidType === invalidType) {
			this._isValid = false;
			return false;
		} else if (invalidType) {
			// save the invalid type
			this._invalidType = invalidType;
		}

		// unapply
		if ( this._unApply) {
			this._unApply();
			this._unApply = null;
		}

		if (applyFn) {
			this._unApply = applyFn(this.elm, message);
		}

		if ( ! invalidType) {
			this._isValid = true;
		} else {
			this._isValid = false;
		}

		// render
		this.render();

		// the input is valid
		return this._isValid;
	}

	/**
	 * Get the value
	 */
	getValue() {
		const value = this.elm.value;
		if ( value === '') return null;
		return value;
	}

	/**
	 * Apply standard validators
	 * This check the element attributes like the type, required, etc...
	 * to apply the standard validators
	 */
	_applyStandardValidators() {
		let validators = this.settings.validate;
		if (validators) validators = validators.split(',');
		else validators = [];
		const type = this.attr.type;
		// required
		if (this.attr.required !== undefined && validators.indexOf('required') === -1) {
			validators.push('required');
		}

		// range
		if (this.attr.min && this.attr.max) {
			if (validators.indexOf('range') === -1) {
				validators.push('range');
			}
		} else {
			// max
			if (this.attr.max && validators.indexOf('max') === -1) {
				validators.push('max');
			}
			// min
			if (this.attr.min && validators.indexOf('min') === -1) {
				validators.push('min');
			}
		}
		// maxlength
		if (this.attr.maxlength && validators.indexOf('maxlength') === -1) {
			validators.push('maxlength');
		}
		// pattern
		if (this.attr.pattern && validators.indexOf('pattern') === -1) {
			validators.push('pattern');
		}
		// number
		if (type === 'number' && validators.indexOf('number') === -1) {
			validators.push('number');
		}
		// range
		if (type === 'range' && validators.indexOf('range') === -1) {
			validators.push('range');
		}
		// color
		if (type === 'color' && validators.indexOf('color') === -1) {
			validators.push('color');
		}
		// email
		if (type === 'email' && validators.indexOf('email') === -1) {
			validators.push('email');
		}
		// url
		if (type === 'url' && validators.indexOf('url') === -1) {
			validators.push('url');
		}
		// set the validators back in settings
		this.settings.validate = validators.join(',');
	}
}

// required validator
SValidateComponent.registerValidator('required', {
	validate : (api) => {
		if (api.attr.required === undefined) return true;
		return (api.getValue() !== null);
	}
});

// min validator
SValidateComponent.registerValidator('min', {
	validate : (api) => {
		let value = api.getValue();
		return (value !== null && value >= api.attr.min);
	},
	message : (api, message) => {
		return message.replace('%min', api.attr.min);
	}
});

// max validator
SValidateComponent.registerValidator('max', {
	validate : (api) => {
		let value = api.getValue();
		return (value !== null && value <= api.attr.max);
	},
	message : (api, message) => {
		return message.replace('%max', api.attr.max);
	}
});

// range validator
SValidateComponent.registerValidator('range', {
	validate : (api) => {
		let value = api.getValue();
		return (value !== null && value <= api.attr.max && value >= api.attr.min);
	},
	message : (api, message) => {
		return message.replace('%max', api.attr.max).replace('%min', api.attr.min);
	}
});

// maxlength validator
SValidateComponent.registerValidator('maxlength', {
	validate : (api) => {
		return (api.getValue().toString().length <= api.attr.maxlength);
	},
	message : (api, message) => {
		return message.replace('%maxlength', api.attr.maxlength);
	}
});

// pattern validator
SValidateComponent.registerValidator('pattern', {
	validate : (api) => {
		const reg = new RegExp(api.attr.pattern);
		return (api.getValue().toString().match(reg));
	},
	message : (api, message) => {
		return message.replace('%pattern', api.attr.pattern);
	}
});

// number validator
SValidateComponent.registerValidator('number', {
	validate : (api) => {
		return __isNumber(api.getValue());
	}
});

// integer validator
SValidateComponent.registerValidator('integer', {
	validate : (api) => {
		return __isInteger(api.getValue());
	}
});

// color validator
SValidateComponent.registerValidator('color', {
	validate : (api) => {
		return __isColor(api.getValue());
	}
});

// email validator
SValidateComponent.registerValidator('email', {
	validate : (api) => {
		return __isEmail(api.getValue());
	}
});

// url validator
SValidateComponent.registerValidator('url', {
	validate : (api) => {
		return __isUrl(api.getValue());
	}
});

// STemplate integration
sTemplateIntegrator.registerComponentIntegration('SValidateComponent', (component) => {
	sTemplateIntegrator.ignore(component.elm, {
		class : [
			component.componentClassName(null, null, 'valid'),
			component.componentClassName(null, null, 'dirty'),
			component.componentClassName(null, null, 'invalid'),
			component.componentClassName(null, null, 'required')
		]
	});
	if (component._formElm) {
		sTemplateIntegrator.ignore(component._formElm, {
			novalidate : true
		});
	}
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SValidateComponent = SValidateComponent;

// export
export default SValidateComponent;
