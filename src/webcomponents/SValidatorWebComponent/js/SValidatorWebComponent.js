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
			 * Specify the validators order
			 * @type 	{Array}
			 */
			validateOrder : null,

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
		this._targets = document.querySelectorAll(`[name="${this.props.for}"],#${this.props.for}`);

		// check the target
		if ( ! this._targets) {
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
			[].forEach.call(this._targets, (target) => {
				const type = target.getAttribute('type');
				const listener = (type === 'checkbox' || type === 'radio') ? 'change' : this.props.on;
				// if is a select, a checkbox or a radio
				target.addEventListener(listener, (e) => {
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
			});
		}

		// try to find the closest form to listen when it is submitted
		const formElm = __closest(this._targets[0], 'form');
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

		// create the validators array to loop through
		const validatorsList = [];
		for (let name in this.props) {
			// if the prop is not a validator
			// continue to the next prop
			if ( ! this._validators[name] || name === 'required') continue;
			// add the validator in the list
			validatorsList.push(name);
		}
		if (this.props.required) validatorsList.unshift('required');

		console.log('validatorsList', validatorsList);

		// loop on each validators and launch them
		for (let i in validatorsList) {
			const name = validatorsList[i];

			// process to validation
			if ( ! this._validators[name].validate(this._targets)) {

				// set the invalid type
				invalidType = name;

				// set the invalid class on the element itself
				this._isValid = false;

				// get the message
				message = this._validators[name].message;
				if (typeof(message) === 'function') message = message(this._targets, this._messages[name]);
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

		console.log('applyFn', applyFn);

		// unapply
		if ( this._unApply) {
			this._unApply();
			this._unApply = null;
		}

		if (applyFn) {
			applyFn = applyFn.bind(this);
			console.log('message', message);
			this._unApply = applyFn(this._targets, message, this._invalidType);
		}

		if ( ! invalidType) {
			this._isValid = true;
		} else {
			this._isValid = false;
		}

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
		const value = this._targets.value;
		if ( value === '') return null;
		return value;
	}

	/**
	 * Apply standard validators
	 * This check the element attributes like the type, required, etc...
	 * to apply the standard validators
	 */
	_applyStandardValidators() {

		// if their's more than 1 target,
		// mean that it's a radio or a checkbox group
		// and we do not get the standard validators
		if (this._targets.length > 1) return;

		// get the type
		const type = this._targets[0].getAttribute('type');

		// switch on type
		switch(type) {
			case 'email':
			case 'integer':
			case 'url':
			case 'number':
			case 'color':
				this.setAttribute(type, true);
			break;
		}

		// set the type if exist
		if (type) {
			this.setAttribute('type', type);
		}

		// required
		if (this._targets[0].getAttribute('required') !== undefined) {
			this.setAttribute('required', true);
		}

		// range
		if (this._targets[0].getAttribute('min') && this._targets[0].getAttribute('max')) {
			this.setAttribute('min', this._targets[0].getAttribute('min'));
			this.setAttribute('max', this._targets[0].getAttribute('max'));
		} else {
			// max
			if (this._targets[0].getAttribute('max')) {
				this.setAttribute('max', this._targets[0].getAttribute('max'));
			}
			// min
			if (this._targets[0].getAttribute('min')) {
				this.setAttribute('min', this._targets[0].getAttribute('min'));
			}
		}
		// maxlength
		if (this._targets[0].getAttribute('maxlength')) {
			this.setAttribute('maxlength', this._targets[0].getAttribute('maxlength'));
		}
		// pattern
		if (this._targets[0].getAttribute('pattern')) {
			this.setAttribute('pattern', this._targets[0].getAttribute('pattern'));
		}
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
			this.addComponentClass(this._targets, null, null, 'dirty');
			if (this._isValid) {
				this.removeComponentClass(this._targets, null, null, 'invalid');
				this.addComponentClass(this._targets, null, null, 'valid');
			} else {
				this.addComponentClass(this._targets, null, null, 'invalid');
				this.removeComponentClass(this._targets, null, null, 'valid');
			}
		}
	}
}

// required validator
SValidatorComponent.registerValidator('required', {
	validate : (targets) => {
		let res = false;
		[].forEach.call(targets, (target) => {
			if (target.checked !== undefined) {
				if (target.checked) res = true;
			} else {
				if ( target.value ) res = true;
			}
		});
		return res;
	}
});

// min validator
SValidatorComponent.registerValidator('min', {
	validate : (targets) => {
		if ( ! this.props.min) throw `The "min" validator need the "props.min" property to be specified...`;
		if (targets.length === 1) {
			// get the value
			return (parseFloat(targets[0].value) >= this.props.min);
		} else if (target.length > 1) {
			// assume that it's some checkboxes
			let checkedCount = 0;
			[].forEach.call(targets, (target) => {
				if (target.checked) checkedCount++;
			});
			// check result
			return (checkedCount >= this.props.min);
		}
	},
	message : (target, message) => {
		return message.replace('%min', this.props.min);
	}
});

// max validator
SValidatorComponent.registerValidator('max', {
	validate : (targets) => {
		if ( ! this.props.max) throw `The "max" validator need the "props.max" property to be specified...`;
		if (targets.length === 1) {
			// get the value
			return (parseFloat(targets[0].value) <= this.props.max);
		} else if (target.length > 1) {
			// assume that it's some checkboxes
			let checkedCount = 0;
			[].forEach.call(targets, (target) => {
				if (target.checked) checkedCount++;
			});
			// check result
			return (checkedCount <= this.props.max);
		}
	},
	message : (target, message) => {
		return message.replace('%max', this.props.max);
	}
});

// range validator
SValidatorComponent.registerValidator('range', {
	validate : (targets) => {
		// check the min and max
		if ( ! SValidatorComponent.validators.min.validate(targets)) return false;
		if ( ! SValidatorComponent.validators.max.validate(targets)) return false;
		return true;
	},
	message : (targets, message) => {
		return message.replace('%max', this.props.max).replace('%min', this.props.min);
	}
});

// maxlength validator
SValidatorComponent.registerValidator('maxlength', {
	validate : (targets) => {
		if (targets.length > 1) throw 'The "maxlength" validator does not work on multiple targets fields...';
		return (targets[0].value.toString().length <= this.props.maxlength);
	},
	message : (targets, message) => {
		return message.replace('%maxlength', target.props.maxlength);
	}
});

// pattern validator
SValidatorComponent.registerValidator('pattern', {
	validate : (targets) => {
		if (targets.length > 1) throw 'The "pattern" validator does not work on multiple targets fields...';
		const reg = new RegExp(this.props.pattern);
		return (targets[0].value.toString().match(reg));
	},
	message : (targets, message) => {
		return message.replace('%pattern', target.props.pattern);
	}
});

// number validator
SValidatorComponent.registerValidator('number', {
	validate : (targets) => {
		if (targets.length > 1) throw 'The "number" validator does not work on multiple targets fields...';
		return __isNumber(targets[0].value);
	}
});

// integer validator
SValidatorComponent.registerValidator('integer', {
	validate : (targets) => {
		if (targets.length > 1) throw 'The "integer" validator does not work on multiple targets fields...';
		return __isInteger(targets[0].value);
	}
});

// color validator
SValidatorComponent.registerValidator('color', {
	validate : (targets) => {
		if (targets.length > 1) throw 'The "color" validator does not work on multiple targets fields...';
		return __isColor(targets[0].value);
	}
});

// email validator
SValidatorComponent.registerValidator('email', {
	validate : (targets) => {
		if (targets.length > 1) throw 'The "email" validator does not work on multiple targets fields...';
		return __isEmail(targets[0].value);
	}
});

// url validator
SValidatorComponent.registerValidator('url', {
	validate : (targets) => {
		if (targets.length > 1) throw 'The "url" validator does not work on multiple targets fields...';
		return __isUrl(targets[0].value);
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
