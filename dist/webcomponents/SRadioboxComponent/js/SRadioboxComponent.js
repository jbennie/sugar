'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SInputWebComponent2 = require('../../../js/core/SInputWebComponent');

var _SInputWebComponent3 = _interopRequireDefault(_SInputWebComponent2);

var _getAnimationProperties = require('../../../js/dom/getAnimationProperties');

var _getAnimationProperties2 = _interopRequireDefault(_getAnimationProperties);

var _style = require('../../../js/dom/style');

var _style2 = _interopRequireDefault(_style);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SRadioboxComponent = function (_SInputWebComponent) {
	_inherits(SRadioboxComponent, _SInputWebComponent);

	/**
  * @constructor
  */
	function SRadioboxComponent() {
		_classCallCheck(this, SRadioboxComponent);

		return _possibleConstructorReturn(this, _SInputWebComponent.call(this));
	}

	/**
  * Default props
  * @definition 		SWebComponent.getDefaultProps
  */


	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SRadioboxComponent.prototype.componentMount = function componentMount() {
		_SInputWebComponent.prototype.componentMount.call(this);
		// try to get the id or name of the input
		var input_for = this.id || this.name;

		// stop if already the s-radiobox div
		if (this.nextSibling && this.nextSibling.nodeName != '#text' && this.nextSibling.classList.contains(this.componentClassName())) return;

		// remove the base input from the display
		this.style.position = 'absolute';
		this.style.left = '-299vw';

		// append an empty element after the input to style it
		var nodeType = 'div';
		if (this.parentNode.nodeName.toLowerCase() !== 'label') {
			nodeType = 'label';
		}
		var styleNode = document.createElement(nodeType);
		this.addComponentClass(styleNode);
		if (nodeType === 'label' && input_for) {
			styleNode.setAttribute('for', input_for);
		}
		this.parentNode.insertBefore(styleNode, this.nextSibling);
	};

	/**
  * Render
  * @definition 		SWebComponent.render
  */


	SRadioboxComponent.prototype.render = function render() {
		_SInputWebComponent.prototype.render.call(this);
	};

	_createClass(SRadioboxComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {
				color: 'default'
			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return ['color'];
		}
	}]);

	return SRadioboxComponent;
}(_SInputWebComponent3.default);

// STemplate integration


exports.default = SRadioboxComponent;
_sTemplateIntegrator2.default.registerComponentIntegration(SRadioboxComponent, function (component) {
	_sTemplateIntegrator2.default.ignore(component, {
		style: true,
		color: true
	});
});