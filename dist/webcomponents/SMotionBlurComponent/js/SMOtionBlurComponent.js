'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _SMotionblurSvgFilter = require('../../../js/filters/SMotionblurSvgFilter');

var _SMotionblurSvgFilter2 = _interopRequireDefault(_SMotionblurSvgFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SMotionBlurComponent = function (_SWebComponent) {
	_inherits(SMotionBlurComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SMotionBlurComponent() {
		_classCallCheck(this, SMotionBlurComponent);

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
	SMotionBlurComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);
		// create a new svg filter
		this._motionBlurFilter = new _SMotionblurSvgFilter2.default(this.props.amount);
		// apply the filter
		this._motionBlurFilter.applyTo(this);
	};

	/**
  * Unmount component
  * @definition 			SWebComponent.componentUnmount
  */


	SMotionBlurComponent.prototype.componentUnmount = function componentUnmount() {
		_SWebComponent.prototype.componentUnmount.call(this);
		if (this._motionBlurFilter) {
			this._motionBlurFilter.destroy();
			delete this._motionBlurFilter;
		}
	};

	/**
  * Component will receive prop
  * @definition 		SWebComponent.componentWillReceiveProp
  */


	SMotionBlurComponent.prototype.componentWillReceiveProp = function componentWillReceiveProp(name, newVal, oldVal) {
		switch (name) {
			case 'amount':
				this._motionBlurFilter.amount = newVal;
				break;
		}
	};

	_createClass(SMotionBlurComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {
				/**
     * Amount of motion blur to apply
     * @prop
     * @type 		{Number}
     */
				amount: 0.5
			};
		}
	}]);

	return SMotionBlurComponent;
}(_SWebComponent3.default);

exports.default = SMotionBlurComponent;