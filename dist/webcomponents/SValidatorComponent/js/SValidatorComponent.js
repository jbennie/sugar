'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _extend2 = require('lodash/extend');

var _extend3 = _interopRequireDefault(_extend2);

var _closest = require('../../../js/dom/closest');

var _closest2 = _interopRequireDefault(_closest);

var _color = require('../../../js/utils/is/color');

var _color2 = _interopRequireDefault(_color);

var _email = require('../../../js/utils/is/email');

var _email2 = _interopRequireDefault(_email);

var _url = require('../../../js/utils/is/url');

var _url2 = _interopRequireDefault(_url);

var _number = require('../../../js/utils/is/number');

var _number2 = _interopRequireDefault(_number);

var _integer = require('../../../js/utils/is/integer');

var _integer2 = _interopRequireDefault(_integer);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

var _autoCast = require('../../../js/utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

var _uniqid = require('../../../js/utils/uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

var _dispatchEvent = require('../../../js/dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _printf = require('../../../js/utils/string/printf');

var _printf2 = _interopRequireDefault(_printf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// store all the overidded checkValidity function on the forms
var formsCheckValidityFn = {};
// store the default messages
var __messages = {
	required: 'This field is required',
	min: 'This field value must greater or equal than %s',
	max: 'This field value must lower or equal than %s',
	maxlength: 'This field must be shorter than %s',
	pattern: 'This field must respect this pattern "%s"',
	integer: 'This field must be an integer',
	number: 'This field must be a number',
	range: 'This field must stand between %s and %s',
	email: 'This field must be a valid email address',
	color: 'This field must be a valid color',
	url: 'This field must be a valid url'
};

var SValidatorComponent = function (_SWebComponent) {
	_inherits(SValidatorComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SValidatorComponent() {
		_classCallCheck(this, SValidatorComponent);

		var _this = _possibleConstructorReturn(this, _SWebComponent.call(this));

		_this._isValid = true;
		_this._isDirty = false;
		return _this;
	}

	/**
  * Registered validators
  * @type 	{Object}
  */


	/**
  * Set the messages
  * @param 		{Object} 		messages 		An object of messages to override
  */
	SValidatorComponent.setMessages = function setMessages() {
		var messages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		__messages = _extends({}, __messages, messages);
	};

	/**
  * Return the messages object computed
  * @return 			{Object} 			The final messages for this instance
  */


	/**
  * Register a validator
  * @param 	{String} 	name 		The name of the validator
  * @param 	{Object} 	validator 	The validator settings
  */
	SValidatorComponent.registerValidator = function registerValidator(name) {
		var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		// check settings
		if (!settings.validate || typeof settings.validate !== 'function') {
			throw 'The validator ' + name + ' need his validate setting to be a function that return true or false';
		}
		// set the new validator
		SValidatorComponent.validators[name] = settings;
	};

	/**
  * _isValid
  * Store if the field is valid or not
  * @type 	{Boolean}
  */


	/**
  * _isDirty
  * Store if the field is dirty or not
  * @type 	{Boolean}
  */


	/**
  * Component will mount
  */
	SValidatorComponent.prototype.componentWillMount = function componentWillMount() {
		_SWebComponent.prototype.componentWillMount.call(this);

		// init properties
		this._isValid = null;
	};

	/**
  * Mount the component
  */


	SValidatorComponent.prototype.componentMount = function componentMount() {
		var _this2 = this;

		_SWebComponent.prototype.componentMount.call(this);

		// protect
		if (!this.props.for) {
			throw 'The SValidatorComponent need a "for" property that target a form input to handle validation for...';
		}

		var form = this._getForm();
		if (form) {
			form.addEventListener('reset', function (e) {
				// reset the isValid cache to trigger a new validation next time
				_this2._isValid = null;
			});
		}

		// get the scope to find for fields
		var scope = this._getForm();
		if (!scope) scope = document;

		// get the input
		this._targets = scope.querySelectorAll('[name="' + this.props.for + '"], #' + this.props.for);

		// check the target
		if (!this._targets) {
			throw 'The form field named "' + this.props.for + '" has not been found in the current document';
		}

		// ensure the form has a name or an id
		this._ensureFormHasNameOrId();

		// process each targets
		[].forEach.call(this._targets, function (target) {
			// override the checkValidity function on each targets
			target.checkValidity = _this2.validate.bind(_this2);
		});

		// extend validators with the static ones
		this._validators = (0, _extend3.default)(SValidatorComponent.validators, this.props.validators);

		// apply standard validators
		this._applyStandardValidators();

		// listen when to trigger the validation
		if (this.props.on) {
			[].forEach.call(this._targets, function (target) {
				var type = target.getAttribute('type');
				var listener = type === 'checkbox' || type === 'radio' ? 'change' : _this2.props.on;
				target._originalValue = target.value;
				// listen new values
				target.addEventListener('paste', _this2._onNewFieldValue.bind(_this2));
				target.addEventListener(listener, _this2._onNewFieldValue.bind(_this2));
			});
		}

		// init the parent form element
		this._initParentFormIfNeeded();
	};

	/**
  * When the field get a new value, launch the validation
  * @param 		{Event} 		e 		The event that trigget the value update
  */


	SValidatorComponent.prototype._onNewFieldValue = function _onNewFieldValue(e) {
		var _this3 = this;

		// set the field as dirty
		if (e.target.value !== e.target._originalValue) {
			e.target._isDirty = true;
		}
		// bust the cache when the field is updated
		// to trigger a new validation next time
		this._isValid = null;

		// validate directly if no timeout
		if (!this.props.timeout) this.validate();else {
			// wait before validating
			clearTimeout(this._timeout);
			this._timeout = setTimeout(function () {
				_this3.validate();
			}, this.props.timeout);
		}
	};

	/**
  * Ensure form has a name or an id
  */


	SValidatorComponent.prototype._ensureFormHasNameOrId = function _ensureFormHasNameOrId() {
		var form = this._getForm();
		if (form) {
			if (!form.name && !form.id) {
				var formId = 's-validator-form-' + (0, _uniqid2.default)();
				form.setAttribute('id', formId);
				return 'form#' + formId;
			}
		}
	};

	/**
  * Get form selector
  * @return 		{String} 			The form selector that target the form that handle the validated field
  */


	SValidatorComponent.prototype._getFormSelector = function _getFormSelector() {
		var form = this._getForm();
		if (form.name) {
			return 'form[name="' + form.name + '"]';
		} else if (form.id) {
			return 'form#' + form.id;
		}
	};

	/**
  * Get form that handle the validated field
  * @return 		{String} 			The form element that handle the validated field
  */


	SValidatorComponent.prototype._getForm = function _getForm() {
		if (this._formElm) return this._formElm;
		this._formElm = (0, _closest2.default)(this, 'form');
		return this._formElm;
	};

	/**
  * Init the parent form if not already inited by another validator
  */


	SValidatorComponent.prototype._initParentFormIfNeeded = function _initParentFormIfNeeded() {
		// try to find the closest form to listen when it is submitted
		var formElm = this._getForm();
		if (formElm) {
			// override the checkValidity function
			// on the form (only once)
			if (!formsCheckValidityFn[formElm.name || formElm.id]) {
				formsCheckValidityFn[formElm.name || formElm.id] = function () {
					// store result
					var res = true;
					// loop on each fields of the form to validate
					formElm._sValidators.forEach(function (validator) {
						if (!validator.validate(true)) res = false;
					});
					// return the result
					return res;
				};
				formElm.checkValidity = formsCheckValidityFn[formElm.name || formElm.id];

				// do not validate the form with
				// html5 built in validation
				formElm.setAttribute('novalidate', true);

				// check validity on submit
				formElm.addEventListener('submit', function (e) {
					if (!formElm.checkValidity()) {
						e.stopPropagation();
						e.preventDefault();
					}
				});
			}

			// register validator on the form element
			// to be able to check the validity after
			if (!formElm._sValidators) formElm._sValidators = [];
			formElm._sValidators.push(this);
		}
	};

	/**
  * Apply the validation
  */


	SValidatorComponent.prototype.validate = function validate() {
		var fromSubmit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


		// use the cache if possible
		if (this._isValid !== null) return this._isValid;

		var invalidType = null;
		var applyFn = null;
		var message = null;

		// set that is dirty
		if (fromSubmit) {
			this._isDirty = true;
		} else {
			if (this._targets.length === 1) {
				this._isDirty = this._targets[0]._isDirty || false;
			} else {
				this._isDirty = true;
			}
		}

		// create the validators array to loop through
		var validatorsList = [];
		for (var name in this.props) {
			// if the prop is not a validator
			// continue to the next prop
			if (!this._validators[name] || name === 'required') continue;
			// add the validator in the list
			validatorsList.push(name);
		}
		if (this.props.required) validatorsList.unshift('required');

		// loop on each validators and launch them
		for (var i = 0; i < validatorsList.length; i++) {
			var _name = validatorsList[i];

			// get the validator parameters
			var validatorArguments = this.props[_name];
			if (typeof validatorArguments === 'string') {
				validatorArguments = validatorArguments.split(':').map(function (val) {
					return (0, _autoCast2.default)(val);
				});
			} else {
				validatorArguments = [validatorArguments];
			}

			// prepare array of arguments for validate and message functions
			var validateArguments = [].concat(validatorArguments),
			    messageArguments = [].concat(validatorArguments);
			validateArguments.unshift(this._targets);
			messageArguments.unshift(this.messages[_name]);

			// process to validation
			if (!this._validators[_name].validate.apply(this, validateArguments)) {

				// set the invalid type
				invalidType = _name;

				// set the invalid class on the element itself
				this._isValid = false;

				// get the message
				message = this._validators[_name].message;
				if (typeof message === 'function') message = message.call(this, messageArguments);else message = this.messages[_name];
				// apply the error message
				applyFn = this.props.apply[_name] || this.props.apply['default'];
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
		if (this._unApply) {
			this._unApply();
			this._unApply = null;
		}

		// apply
		if (applyFn) {
			applyFn = applyFn.bind(this);
			this._unApply = applyFn(this._targets, message, this._invalidType);
		}

		// update the isValid flag
		if (!invalidType) {
			this._isValid = true;
		} else {
			this._isValid = false;
		}

		// set the active property
		// if the field is dirty
		if (this._isDirty) {
			if (this._isValid) {
				this.setProp('active', false);
			} else {
				this.setProp('active', true);
			}
		}

		// render
		this.render();

		// the input is valid
		return this._isValid;
	};

	/**
  * Apply standard validators
  * This check the element attributes like the type, required, etc...
  * to apply the standard validators
  */


	SValidatorComponent.prototype._applyStandardValidators = function _applyStandardValidators() {

		// if their's more than 1 target,
		// mean that it's a radio or a checkbox group
		// and we do not get the standard validators
		if (this._targets.length > 1) return;

		// get the type
		var type = this._targets[0].getAttribute('type');

		// switch on type
		switch (type) {
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
		if (this._targets[0].hasAttribute('required')) {
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
	};

	/**
  * Unmount the component
  */


	SValidatorComponent.prototype.componentUnmount = function componentUnmount() {
		_SWebComponent.prototype.componentUnmount.call(this);
	};

	/**
  * Check if is valid
  * @return 		{Boolean} 			true if the validator is valid, false it not
  */


	SValidatorComponent.prototype.checkValidity = function checkValidity() {
		return this.validate(true);
	};

	/**
  * Render
  */


	SValidatorComponent.prototype.render = function render() {
		_SWebComponent.prototype.render.call(this);
		// if is dirty
		if (this._isDirty) {
			if (this._isValid) {
				[].forEach.call(this._targets, function (target) {
					target.removeAttribute('invalid');
					if (!target.hasAttribute('valid')) {
						target.setAttribute('valid', true);
					}
				});
			} else {
				[].forEach.call(this._targets, function (target) {
					target.removeAttribute('valid');
					if (!target.hasAttribute('invalid')) {
						target.setAttribute('invalid', true);
					}
				});
			}
		}
	};

	_createClass(SValidatorComponent, [{
		key: 'messages',
		get: function get() {
			return _extends({}, __messages, this.props.messages);
		}
	}], [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.getDefaultProps
   */
		get: function get() {
			return {

				/**
     * Specify the target of the validator
     * @type 	{String}
     */
				for: null,

				/**
     * Specify when the validation has to be triggered
     * @type 	{String}
     */
				on: 'change',

				/**
     * Tell if the validator is active, meaning that their's a message to display
     * @physicalProp
     * @type 		{Boolean}
     */
				active: false,

				/**
     * Specify a timeout before validating the field
     * @type 	{Integer}
     */
				timeout: 200,

				/**
     * Store the specific validators for this particular instance
     * @type 	{Object}
     */
				validators: {},

				/**
     * Specify the validators order
     * @type 	{Array}
     */
				validateOrder: null,

				/**
     * messages
     * Store the specific messages wanted for this particular instance
     * @type 	{Object}
     */
				messages: {},

				/**
     * apply
     * The function to use to apply the error message
     * @type 	{Object}
     */
				apply: {}
			};
		}
	}, {
		key: 'physicalProps',
		get: function get() {
			return ['active'];
		}
	}]);

	return SValidatorComponent;
}(_SWebComponent3.default);

// required validator


SValidatorComponent.validators = {};
exports.default = SValidatorComponent;
SValidatorComponent.registerValidator('required', {
	validate: function validate(targets) {
		var res = false;
		[].forEach.call(targets, function (target) {
			if (target.type && target.type.toLowerCase() === 'checkbox') {
				if (target.checked) res = true;
			} else if (target.value && target.value !== '') {
				res = true;
			}
		});
		return res;
	}
});

// min validator
SValidatorComponent.registerValidator('min', {
	validate: function validate(targets, min) {
		if (!min) throw 'The "min" validator need the "props.min" property to be specified...';
		if (targets.length === 1) {
			// get the value
			return parseFloat(targets[0].value) >= min;
		} else if (target.length > 1) {
			var _ret = function () {
				// assume that it's some checkboxes
				var checkedCount = 0;
				[].forEach.call(targets, function (target) {
					if (target.checked) checkedCount++;
				});
				// check result
				return {
					v: checkedCount >= min
				};
			}();

			if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		}
	},
	message: function message(_message, min) {
		return (0, _printf2.default)(_message, min);
	}
});

// max validator
SValidatorComponent.registerValidator('max', {
	validate: function validate(targets, max) {
		if (!max) throw 'The "max" validator need the "props.max" property to be specified...';
		if (targets.length === 1) {
			// get the value
			return parseFloat(targets[0].value) <= max;
		} else if (target.length > 1) {
			var _ret2 = function () {
				// assume that it's some checkboxes
				var checkedCount = 0;
				[].forEach.call(targets, function (target) {
					if (target.checked) checkedCount++;
				});
				// check result
				return {
					v: checkedCount <= max
				};
			}();

			if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
		}
	},
	message: function message(_message2, max) {
		return (0, _printf2.default)(_message2, max);
	}
});

// range validator
SValidatorComponent.registerValidator('range', {
	validate: function validate(targets) {
		var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		// check the min and max
		if (!SValidatorComponent.validators.min.validate(targets, min || undefined.props.min)) return false;
		if (!SValidatorComponent.validators.max.validate(targets, max || undefined.props.max)) return false;
		return true;
	},
	message: function message(_message3) {
		var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
		var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		min = min || undefined.props.min;
		max = max || undefined.props.max;
		return (0, _printf2.default)(_message3, min, max);
	}
});

// maxlength validator
SValidatorComponent.registerValidator('maxlength', {
	validate: function validate(targets, maxlength) {
		if (targets.length > 1) throw 'The "maxlength" validator does not work on multiple targets fields...';
		return targets[0].value.toString().length <= maxlength;
	},
	message: function message(_message4, maxlength) {
		return (0, _printf2.default)(_message4, maxlength);
	}
});

// pattern validator
SValidatorComponent.registerValidator('pattern', {
	validate: function validate(targets, pattern) {
		if (targets.length > 1) throw 'The "pattern" validator does not work on multiple targets fields...';
		var reg = new RegExp(pattern);
		return targets[0].value.toString().match(reg);
	},
	message: function message(_message5, pattern) {
		return (0, _printf2.default)(_message5, pattern);
	}
});

// number validator
SValidatorComponent.registerValidator('number', {
	validate: function validate(targets) {
		if (targets.length > 1) throw 'The "number" validator does not work on multiple targets fields...';
		return (0, _number2.default)(targets[0].value);
	}
});

// integer validator
SValidatorComponent.registerValidator('integer', {
	validate: function validate(targets) {
		if (targets.length > 1) throw 'The "integer" validator does not work on multiple targets fields...';
		return (0, _integer2.default)(targets[0].value);
	}
});

// color validator
SValidatorComponent.registerValidator('color', {
	validate: function validate(targets) {
		if (targets.length > 1) throw 'The "color" validator does not work on multiple targets fields...';
		return (0, _color2.default)(targets[0].value);
	}
});

// email validator
SValidatorComponent.registerValidator('email', {
	validate: function validate(targets) {
		if (targets.length > 1) throw 'The "email" validator does not work on multiple targets fields...';
		return (0, _email2.default)(targets[0].value);
	}
});

// url validator
SValidatorComponent.registerValidator('url', {
	validate: function validate(targets) {
		if (targets.length > 1) throw 'The "url" validator does not work on multiple targets fields...';
		return (0, _url2.default)(targets[0].value);
	}
});

// STemplate integration
_sTemplateIntegrator2.default.registerComponentIntegration([HTMLSelectElement, HTMLInputElement], function (component) {
	_sTemplateIntegrator2.default.ignore(component, {
		valid: true,
		invalid: true
	});
	if (component.form) {
		_sTemplateIntegrator2.default.ignore(component.form, {
			novalidate: true
		});
	}
});