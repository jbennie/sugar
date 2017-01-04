'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _SGradientSvgFilter = require('../../../js/filters/SGradientSvgFilter');

var _SGradientSvgFilter2 = _interopRequireDefault(_SGradientSvgFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SGradientComponent = function (_SWebComponent) {
	_inherits(SGradientComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SGradientComponent() {
		_classCallCheck(this, SGradientComponent);

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
	SGradientComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);

		var type = this.props.type;
		// create a new svg filter
		this._gradientFilter = new _SGradientSvgFilter2.default();
		if (type == 'radial') {
			this._gradientFilter.radial(this.props.colors);
		} else {
			this._gradientFilter.linear(this.props.colors);
		}
		// apply the filter
		this._gradientFilter.applyTo(this);
	};

	_createClass(SGradientComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {
				/**
    * The colors wanted for your gradient
    * @prop
    * @type  		{Array}
    */
				colors: ['#a3385e', '#f2bc2b'],

				/**
     * The type of gradient wanted (linear, radial)
     * @prop
     * @type 		{String}
     * @default 	linear
     */
				type: 'linear'
			};
		}
	}]);

	return SGradientComponent;
}(_SWebComponent3.default);

exports.default = SGradientComponent;