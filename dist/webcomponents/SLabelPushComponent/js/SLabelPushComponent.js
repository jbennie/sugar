'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _style = require('../../../js/dom/style');

var _style2 = _interopRequireDefault(_style);

var _textWidth = require('../../../js/dom/textWidth');

var _textWidth2 = _interopRequireDefault(_textWidth);

var _getStyleProperty = require('../../../js/dom/getStyleProperty');

var _getStyleProperty2 = _interopRequireDefault(_getStyleProperty);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SLabelPushComponent = function (_SWebComponent) {
	_inherits(SLabelPushComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SLabelPushComponent() {
		_classCallCheck(this, SLabelPushComponent);

		return _possibleConstructorReturn(this, _SWebComponent.call(this));
	}

	/**
  * Default props
  * @definition 		SWebComponent.defaultProps
  */


	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SLabelPushComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);

		// grab the input
		this._input = this.querySelector(':scope > input');
		this._inputPaddingRight = parseInt((0, _getStyleProperty2.default)(this._input, 'paddingRight'));
		this._inputPaddingLeft = parseInt((0, _getStyleProperty2.default)(this._input, 'paddingLeft'));

		// calculate the label width
		this._label = this.querySelector(':scope > span');
		this._labelWidth = this._label.offsetWidth;

		// get the paddings
		this._labelPaddingLeft = parseInt((0, _getStyleProperty2.default)(this._label, 'paddingLeft'));
		this._labelPaddingRight = parseInt((0, _getStyleProperty2.default)(this._label, 'paddingRight'));

		var labelBackgroundColor = this._label.style.backgroundColor;
		var labelBackgroundImage = this._label.style.backgroundImage;
		this._labelBackground = labelBackgroundColor || labelBackgroundImage;

		// listen for focus in field
		this._input.addEventListener('focus', this._render.bind(this));
		this._input.addEventListener('blur', this._render.bind(this));
		this._input.addEventListener('keyup', this._render.bind(this));

		// set the position relative if needed
		var position = this.style.position;
		if (!position || position !== 'absolute' || position !== 'relative') {
			this.style.position = 'relative';
		}

		// listen for input change to set the correct attribute
		// this._input.addEventListener('keyup', this._handleHasValueAttribute.bind(this));
		// if (this._input.form) {
		// 	this._input.form.addEventListener('reset', () => {
		// 		setTimeout(() => {
		// 			this._handleHasValueAttribute();
		// 		});
		// 	});
		// }
	};

	/**
  * render
  * Render the component
  * @return 	{void}
  */


	SLabelPushComponent.prototype._render = function _render() {
		var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		if (e) {
			if (e.type === 'focus') {
				this._isFocus = true;
			} else if (e.type === 'blur') {
				this._isFocus = false;
			}
		}
		this._setInputPadding();
		this._setLabelSize();
	};

	/**
  * _setInputPadding
  * Set the input correct padding depending on the label size
  * @return 	{void}
  */


	SLabelPushComponent.prototype._setInputPadding = function _setInputPadding() {

		if (this._input.hasAttribute('placeholder')) {
			(0, _style2.default)(this._input, {
				paddingLeft: this._inputPaddingLeft
			});
			return;
		}

		if (this._isFocus) {
			// set the padding
			(0, _style2.default)(this._input, {
				paddingLeft: this._inputPaddingLeft
			});
		} else {
			if (!this._input.value) {
				// set the padding
				var paddingLeft = this._labelWidth;
				if (this._labelBackground) {
					paddingLeft += this._inputPaddingLeft;
				}
				(0, _style2.default)(this._input, {
					paddingLeft: paddingLeft + 'px'
				});
			}
		}
	};

	/**
  * _setLabelSize
  * Set the label width depending on the input text width
  * @return 	{void}
  */


	SLabelPushComponent.prototype._setLabelSize = function _setLabelSize() {
		// if no value in input
		if (!this._input.value) {
			// reset the label size
			(0, _style2.default)(this._label, {
				opacity: 1,
				width: ''
			});
			return;
		}
		// get the content width
		var width = (0, _textWidth2.default)(this._input);
		// calculate the difference
		var diff = this._input.offsetWidth - width - this._labelPaddingLeft;

		// add the padding right if is a background
		if (this._labelBackground) {
			diff -= this._inputPaddingRight;
		}

		// set the label size
		if (diff <= this._labelPaddingLeft + this._labelPaddingRight + 10) {
			// hide the label
			(0, _style2.default)(this._label, {
				opacity: 0
			});
			// this._label.style.opacity = 0;
		} else if (diff <= this._labelWidth) {
			(0, _style2.default)(this._label, {
				opacity: 1,
				width: diff + 'px'
			});
		}
	};

	_createClass(SLabelPushComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {};
		}
	}]);

	return SLabelPushComponent;
}(_SWebComponent3.default);

// STemplate integration


exports.default = SLabelPushComponent;
_sTemplateIntegrator2.default.registerComponentIntegration(SLabelPushComponent, function (component) {
	if (component._input) {
		_sTemplateIntegrator2.default.ignore(component._input, {
			style: true
		});
	}
	if (component._label) {
		_sTemplateIntegrator2.default.ignore(component._label, {
			style: true
		});
	}
});