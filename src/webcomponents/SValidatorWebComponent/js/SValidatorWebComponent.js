import SWebComponent from '../../../js/core/SWebComponent'
import _extend from 'lodash/extend'
import __closest from '../../../js/dom/closest'
import __isColor from '../../../js/utils/is/color'
import __isEmail from '../../../js/utils/is/email'
import __isUrl from '../../../js/utils/is/url'
import __isNumber from '../../../js/utils/is/number'
import __isInteger from '../../../js/utils/is/integer'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'
import __autoCast from '../../../js/utils/string/autoCast'

export default class SValidatorComponent extends SWebComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

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
		SValidatorComponent.validators[name] = settings;
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
	 * Default props
	 * @definition 		SWebComponent.getDefaultProps
	 */
	static get defaultProps() {
		return {

			/**
			 * Specify the target of the validator
			 * @type 	{String}
			 */
			for : null,

			/**
			 * The list of validators to apply on the element
			 * @type 	{String}
			 */
			validate : null,

			/**
			 * Specify when the validation has to be triggered
			 * @type 	{String}
			 */
			on : 'change',

			/**
			 * Tell if the validator is active, meaning that their's a message to display
			 * @physicalProp
			 * @type 		{Boolean}
			 */
			active : false,

			/**
			 * Specify a timeout before validating the field
			 * @type 	{Integer}
			 */
			timeout : 200,

			/**
			 * Store the specific validators for this particular instance
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
		}
	}

	static get physicalProps() {
		return ['active'];
	}

	/**
	 * Component will mount
	 */
	componentWillMount() {
		super.componentWillMount();
	}

	/**
	 * Mount the component
	 */
	componentMount() {
		super.componentMount();

		// protect
		if ( ! this.props.for) {
			throw `The SValidatorComponent need a "for" property that target a form input to handle validation for...`;
		}
		// get the input
		this._target = document.querySelector(`[name="${this.props.for}"],#${this.props.for}`);

		// check the target
		if ( ! this._target) {
			throw `The form field named "${this.props.for}" has not been found in the current document`;
		}

		// extend messages with the static ones
		this._messages = {
			...SValidatorComponent.messages,
			...this.props.messages
		};

		// extend validators with the static ones
		this._validators = _extend(
			SValidatorComponent.validators,
			this.props.validators
		);

		// apply standard validators
		this._applyStandardValidators();

		// listen when to trigger the validation
		if (this.props.on) {

			// if is a select, a checkbox or a radio
			this._target.addEventListener(this.props.on, (e) => {
				// validate directly if no timeout
				if ( ! this.props.timeout) this.validate();
				else {
					// wait before validating
					clearTimeout(this._timeout);
					this._timeout = setTimeout(() => {
						this.validate();
					}, this.props.timeout);
				}
			});
		}

		// try to find the closest form to listen when it is submitted
		const formElm = __closest(this._target, 'form');
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
	 * Apply the validation
	 */
	validate() {

		let invalidType = null;
		let applyFn = null;
		let message = null;

		// set that is dirty
		this._isDirty = true;

		// loop on each validators and launch them
		const validators = this.props.validate.split(',');
		for (let i=0; i<validators.length; i++) {
			const name = validators[i];

			// check if the value is null and the validator name if not
			// "required" to not launch the validation
			if ( ! this._getFieldValue() && name !== 'required') continue;

			// process to validation
			if (this._validators[name] && ! this._validators[name].validate(this._target, this._getFieldValue())) {

				// set the invalid type
				invalidType = name;

				// set the invalid class on the element itself
				this._isValid = false;

				// get the message
				message = this._validators[name].message;
				if (typeof(message) === 'function') message = message(this._target, this._messages[name]);
				else message = this._messages[name];
				// apply the error message
				applyFn = this.props.apply[name] || this.props.apply['default'];
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
		} else {
			this._invalidType = null;
		}

		// unapply
		if ( this._unApply) {
			this._unApply();
			this._unApply = null;
		}

		if (applyFn) {
			applyFn = applyFn.bind(this);
			this._unApply = applyFn(this._target, message, this._invalidType);
		}

		if ( ! invalidType) {
			this._isValid = true;
		} else {
			this._isValid = false;
		}

		// render
		// this.render();

		if (this._isValid) {
			this.setProp('active', false);
		} else {
			this.setProp('active', true);
		}

		// the input is valid
		return this._isValid;
	}

	/**
	 * Get the value
	 */
	_getFieldValue() {
		const value = this._target.value;
		if ( value === '') return null;
		return value;
	}

	/**
	 * Apply standard validators
	 * This check the element attributes like the type, required, etc...
	 * to apply the standard validators
	 */
	_applyStandardValidators() {
		let validators = this.props.validate;
		if (validators) validators = validators.split(',');
		else validators = [];
		const type = this._target.getAttribute('type');
		// required
		if (this._target.getAttribute('required') !== undefined && validators.indexOf('required') === -1) {
			validators.push('required');
		}

		// range
		if (this._target.getAttribute('min') && this._target.getAttribute('max')) {
			if (validators.indexOf('range') === -1) {
				validators.push('range');
			}
		} else {
			// max
			if (this._target.getAttribute('max') && validators.indexOf('max') === -1) {
				validators.push('max');
			}
			// min
			if (this._target.getAttribute('min') && validators.indexOf('min') === -1) {
				validators.push('min');
			}
		}
		// maxlength
		if (this._target.getAttribute('maxlength') && validators.indexOf('maxlength') === -1) {
			validators.push('maxlength');
		}
		// pattern
		if (this._target.getAttribute('pattern') && validators.indexOf('pattern') === -1) {
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
		this.props.validate = validators.join(',');
	}

	/**
	 * Unmount the component
	 */
	componentUnmount() {
		super.componentUnmount();
	}

	/**
	 * Render
	 */
	render() {
		super.render();
		// if is dirty
		if (this._isDirty) {
			this.addComponentClass(this._target, null, null, 'dirty');
			if (this._isValid) {
				this.removeComponentClass(this._target, null, null, 'invalid');
				this.addComponentClass(this._target, null, null, 'valid');
			} else {
				this.addComponentClass(this._target, null, null, 'invalid');
				this.removeComponentClass(this._target, null, null, 'valid');
			}
		}
	}
}

// required validator
SValidatorComponent.registerValidator('required', {
	validate : (target, value) => {
		if ( ! target.hasAttribute('required') === undefined) return true;
		return (value !== null);
	}
});

// min validator
SValidatorComponent.registerValidator('min', {
	validate : (target, value) => {
		return (value !== null && value >= parseFloat(target.getAttribute('min')));
	},
	message : (target, message) => {
		return message.replace('%min', target.getAttribute('min'));
	}
});

// max validator
SValidatorComponent.registerValidator('max', {
	validate : (target, value) => {
		return (value !== null && value <= parseFloat(target.getAttribute('max')));
	},
	message : (target, message) => {
		return message.replace('%max', target.getAttribute('max'));
	}
});

// range validator
SValidatorComponent.registerValidator('range', {
	validate : (target, value) => {
		return (value !== null && value <= parseFloat(target.getAttribute('max')) && value >= parseFloat(target.getAttribute('min')));
	},
	message : (target, message) => {
		return message.replace('%max', target.getAttribute('max')).replace('%min', target.getAttribute('min'));
	}
});

// maxlength validator
SValidatorComponent.registerValidator('maxlength', {
	validate : (target, value) => {
		return (value.toString().length <= target.getAttribute('maxlength'));
	},
	message : (target, message) => {
		return message.replace('%maxlength', target.getAttribute('maxlength'));
	}
});

// pattern validator
SValidatorComponent.registerValidator('pattern', {
	validate : (target, value) => {
		const reg = new RegExp(target.getAttribute('pattern'));
		return (value.toString().match(reg));
	},
	message : (target, message) => {
		return message.replace('%pattern', target.getAttribute('pattern'));
	}
});

// number validator
SValidatorComponent.registerValidator('number', {
	validate : (target, value) => {
		return __isNumber(value);
	}
});

// integer validator
SValidatorComponent.registerValidator('integer', {
	validate : (target, value) => {
		return __isInteger(value);
	}
});

// color validator
SValidatorComponent.registerValidator('color', {
	validate : (target, value) => {
		return __isColor(value);
	}
});

// email validator
SValidatorComponent.registerValidator('email', {
	validate : (target, value) => {
		return __isEmail(value);
	}
});

// url validator
SValidatorComponent.registerValidator('url', {
	validate : (target, value) => {
		return __isUrl(value);
	}
});

// STemplate integration
sTemplateIntegrator.registerComponentIntegration('SValidatorComponent', (component) => {
	sTemplateIntegrator.ignore(component, {
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

// detine the component
SWebComponent.define('s-validator', SValidatorComponent);
