'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebSTemplateComponent = require('../../../js/core/SWebSTemplateComponent');

var _SWebSTemplateComponent2 = _interopRequireDefault(_SWebSTemplateComponent);

var _getAnimationProperties = require('../../../js/dom/getAnimationProperties');

var _getAnimationProperties2 = _interopRequireDefault(_getAnimationProperties);

var _style = require('../../../js/dom/style');

var _style2 = _interopRequireDefault(_style);

var _flatpickr = require('flatpickr/dist/flatpickr');

var _flatpickr2 = _interopRequireDefault(_flatpickr);

var _dispatchEvent = require('../../../js/dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

var _formSerialize = require('form-serialize');

var _formSerialize2 = _interopRequireDefault(_formSerialize);

var _sendForm = require('../../../js/dom/sendForm');

var _sendForm2 = _interopRequireDefault(_sendForm);

var _matches = require('../../../js/dom/matches');

var _matches2 = _interopRequireDefault(_matches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SAjaxFormComponent = function (_SWebSTemplateCompone) {
	_inherits(SAjaxFormComponent, _SWebSTemplateCompone);

	/**
  * @constructor
  */
	function SAjaxFormComponent() {
		_classCallCheck(this, SAjaxFormComponent);

		return _possibleConstructorReturn(this, _SWebSTemplateCompone.call(this));
	}

	/**
  * Default props
  * @definition 		SWebComponent.defaultProps
  */


	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SAjaxFormComponent.prototype.componentMount = function componentMount() {
		var _this2 = this;

		_SWebSTemplateCompone.prototype.componentMount.call(this);

		// required properties
		if (!this.props.for) {
			throw 'The SAjaxFormComponent component need a props.for property';
		}

		// find the form bound to the component
		this._form = document.querySelector('form[name="' + this.props.for + '"],form#' + this.props.for);

		// no form found
		if (!this._form) {
			throw 'The form named ' + this.props.for + ' does not exist in the page.';
		}

		// listen for surmit to hook with ajax send instead
		setTimeout(function () {
			_this2._form.addEventListener('submit', _this2._onSubmit.bind(_this2));
		});
	};

	/**
  * Unmount component
  * @definition 		SWebComponent.componentUnmount
  */


	SAjaxFormComponent.prototype.componentUnmount = function componentUnmount() {
		_SWebSTemplateCompone.prototype.componentUnmount.call(this);

		// stop listening for form submit
		this._form.removeEventListener('submit', this._onSubmit);
	};

	/**
  * On form submit
  * @param 		{Event} 		e 		The submit event
  */


	SAjaxFormComponent.prototype._onSubmit = function _onSubmit(e) {
		var _this3 = this;

		e.preventDefault();

		// check validity
		if (!this._form.checkValidity()) return;

		// send form
		(0, _sendForm2.default)(this._form).then(function (response) {
			// handle response
			_this3._handleSuccess(response);
		}, function (error) {
			_this3._handleError(error);
		});
	};

	/**
  * Handle response
  * @param 		{Mixed} 		response 		The ajax response
  */


	SAjaxFormComponent.prototype._handleSuccess = function _handleSuccess(response) {
		var _this4 = this;

		// reset form
		this._form.reset();
		[].forEach.call(this._form.elements, function (formField) {
			if ((0, _matches2.default)(formField, 'input:not([type="submit"]):not([type="checkbox"]):not([type="radio"])')) {
				formField.removeAttribute('value');
			}
		});

		// check the response type
		if (typeof response === 'string') {
			// assume that the response is some kind of text, or html.
			// set it directly into the html
			this.templateData.success = response;
		} else if ((typeof response === 'undefined' ? 'undefined' : _typeof(response)) === 'object' && this.props.successPath) {
			// try to get the success message
			var msg = (0, _get3.default)(response, this.props.successPath);
			if (!msg) return;
			this.templateData.success = msg;
		}

		// check if need to hide the form
		if (this.props.hideFormOnSuccess) {
			// hide the form
			this._form.style.display = 'none';
		}

		if (this.props.displayResultTimeout) {
			setTimeout(function () {
				// empty the element
				_this4.templateData.success = null;
				_this4._form.style.display = '';
			}, this.props.displayResultTimeout);
		}
	};

	/**
  * Handle error response
  * @param 		{Mixed} 		error 		The error response from the server
  */


	SAjaxFormComponent.prototype._handleError = function _handleError(error) {
		var _this5 = this;

		// check the error type
		if (typeof error === 'string') {
			// assume that the error is some kind of text, or html.
			// set it directly into the html
			this.templateData.error = error;
		} else if ((typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object' && this.props.errorPath) {
			// try to get the error message
			var msg = (0, _get3.default)(error, this.props.errorPath);
			if (!msg) return;
			this.templateData.error = msg;
		}

		// check if need to hide the form
		if (this.props.hideFormOnError) {
			// hide the form
			this._form.style.display = 'none';
		}

		if (this.props.displayResultTimeout) {
			setTimeout(function () {
				// empty the element
				_this5.templateData.error = null;
				_this5._form.style.display = '';
			}, this.props.displayResultTimeout);
		}
	};

	_createClass(SAjaxFormComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {

				/**
     * Specify the name or id of the field to link the datepicker to
     * @prop
     * @type  		{String}
     */
				for: null,

				/**
     * Specify if need to hide the form on result
     * @prop
     * @type 		{Boolean}
     */
				hideFormOnSuccess: false,

				/**
     * Specify if need to hide the form on error
     * @prop
     * @type 		{Boolean}
     */
				hideFormOnError: false,

				/**
     * Specify the hide form timeout
     * @prop
     * @type 		{Number}
     */
				displayResultTimeout: 2000,

				/**
     * Path that specify where the response to display
     * lives in the response JSON
     * @prop
     * @type 		{String}
     */
				successPath: null,

				/**
     * Path that specify where the error to display
     * lives in the response JSON
     * @prop
     * @type 		{String}
     */
				errorPath: null,

				/**
     * Content type header that will be sent with the request
     * @prop
     * @type 		{String}
     */
				enctype: 'application/x-www-form-urlencoded'
			};
		}

		/**
   * Default template data
   * @definition 		SWebTemplateComponent.defaultTemplateData
   */

	}, {
		key: 'defaultTemplateData',
		get: function get() {
			return {
				/**
     * Store the success response
     * @templateData
     * @type 		{Mixed}
     */
				success: null,

				/**
     * Store the error response
     * @templateData
     * @type		{Mixed}}
     */
				error: null
			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return [];
		}
	}]);

	return SAjaxFormComponent;
}(_SWebSTemplateComponent2.default);

// STemplate integration


exports.default = SAjaxFormComponent;
_sTemplateIntegrator2.default.registerComponentIntegration(SAjaxFormComponent, function (component) {
	if (component._form) {
		_sTemplateIntegrator2.default.ignore(component._form, {
			loading: true,
			style: true
		});
	}
});