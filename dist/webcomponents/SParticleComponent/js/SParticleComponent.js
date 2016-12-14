'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _getAnimationProperties = require('../../../js/dom/getAnimationProperties');

var _getAnimationProperties2 = _interopRequireDefault(_getAnimationProperties);

var _style = require('../../../js/dom/style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SParticleComponent = function (_SWebComponent) {
	_inherits(SParticleComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SParticleComponent() {
		_classCallCheck(this, SParticleComponent);

		return _possibleConstructorReturn(this, _SWebComponent.call(this));
	}

	/**
  * Default props
  * @definition 		SWebComponent.getDefaultProps
  */


	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SParticleComponent.prototype.componentMount = function componentMount() {
		var _this2 = this;

		_SWebComponent.prototype.componentMount.call(this);

		// set position
		(0, _style2.default)(this, {
			position: 'absolute'
		});

		var lifetime = this.props.lifetime;
		if (!lifetime) {
			// get the animation properties
			var animation = (0, _getAnimationProperties2.default)(this);
			lifetime = animation.totalDuration;
		}

		// wait till the animation is finished to remove the particle from DOM
		setTimeout(function () {
			if (_this2.parentNode) {
				_this2.parentNode.removeChild(_this2);
			}
		}, lifetime);
	};

	/**
  * Render
  * @definition 		SWebComponent.render
  */


	SParticleComponent.prototype.render = function render() {
		_SWebComponent.prototype.render.call(this);
	};

	_createClass(SParticleComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {
				lifetime: null
			};
		}
	}]);

	return SParticleComponent;
}(_SWebComponent3.default);

exports.default = SParticleComponent;