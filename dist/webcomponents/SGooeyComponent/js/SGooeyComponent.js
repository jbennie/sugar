'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _SGooeySvgFilter = require('../../../js/filters/SGooeySvgFilter');

var _SGooeySvgFilter2 = _interopRequireDefault(_SGooeySvgFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SGooeyComponent = function (_SWebComponent) {
	_inherits(SGooeyComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SGooeyComponent() {
		_classCallCheck(this, SGooeyComponent);

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
	SGooeyComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);
		// create a new svg filter
		this._gooeyFilter = new _SGooeySvgFilter2.default(this.props.amount);
		// apply the filter
		this._gooeyFilter.applyTo(this);
		// apply base props
		if (this.props.blur) this._gooeyFilter.blur = this.props.blur;
		if (this.props.contrast) this._gooeyFilter.contrast = this.props.contrast;
		if (this.props.shrink) this._gooeyFilter.shrink = this.props.shrink;
	};

	/**
  * Component will receive prop
  * @definition 		SWebComponent.componentWillReceiveProp
  */


	SGooeyComponent.prototype.componentWillReceiveProp = function componentWillReceiveProp(name, newVal, oldVal) {
		switch (name) {
			case 'amount':
			case 'blur':
			case 'contrast':
			case 'shrink':
				this._gooeyFilter[name] = newVal;
				break;
		}
	};

	_createClass(SGooeyComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {
				/**
     * The overall amount of effect
     * @prop
     * @type 		{Number}
     */
				amount: 10,

				/**
     * The blur amount to produce the effect
     * @prop
     * @type 		{Number}
     */
				blur: null,

				/**
     * The contrast amount to produce the effect
     * @prop
     * @type 		{Number}
     */
				contrast: null,

				/**
     * The shrink amount to produce the effect
     * @prop
     * @type 		{Number}
     */
				shrink: null
			};
		}
	}]);

	return SGooeyComponent;
}(_SWebComponent3.default);

exports.default = SGooeyComponent;