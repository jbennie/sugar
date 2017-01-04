'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent = require('../../../js/core/SWebComponent');

var _SWebComponent2 = _interopRequireDefault(_SWebComponent);

var _SGoogleComponentMixin = require('../../mixins/SGoogleComponentMixin');

var _SGoogleComponentMixin2 = _interopRequireDefault(_SGoogleComponentMixin);

var _mixwith = require('../../../js/vendors/mixwith');

var _style = require('../../../js/dom/style');

var _style2 = _interopRequireDefault(_style);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SGoogleMapComponent = function (_mix$with) {
	_inherits(SGoogleMapComponent, _mix$with);

	function SGoogleMapComponent() {
		_classCallCheck(this, SGoogleMapComponent);

		return _possibleConstructorReturn(this, _mix$with.apply(this, arguments));
	}

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SGoogleMapComponent.prototype.componentMount = function componentMount() {
		_mix$with.prototype.componentMount.call(this);

		// create the map container
		this._mapElm = document.createElement('div');
		this._mapElm.setAttribute('s-google-map-map', true);

		// set the style to the map elm
		(0, _style2.default)(this._mapElm, {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%'
		});

		// try to get the placeholder
		this._placeholder = this.querySelector(this._componentNameDash + '-placeholder');

		// manage placeholder
		if (this._placeholder) {
			this._handlePlaceholder();
		} else {
			// init directly
			this._internalInit();
		}

		// append the map elm
		this.appendChild(this._mapElm);
	};

	/**
  * Component unmount
  * @definition 		SWebComponent.componentUnmount
  */


	SGoogleMapComponent.prototype.componentUnmount = function componentUnmount() {
		_mix$with.prototype.componentUnmount.call(this);
	};

	/**
  * Component will receive props
  * @definition 		SWebComponent.componentWillReceiveProps
  */


	SGoogleMapComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		if (!this._map) return;
		this._map.setOptions(nextProps);
	};

	/**
  * Handle the placeholder element
  */


	SGoogleMapComponent.prototype._handlePlaceholder = function _handlePlaceholder() {
		// set style
		(0, _style2.default)(this._placeholder, {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			cursor: 'pointer',
			zIndex: 1
		});

		// listen to init the map
		this._placeholder.addEventListener(this.props.initOn, this._onPlaceholderInit.bind(this));
	};

	/**
  * Proxy function of placeholder init listener
  */


	SGoogleMapComponent.prototype._onPlaceholderInit = function _onPlaceholderInit() {
		// remove the placeholder
		this._placeholder.parentNode.removeChild(this._placeholder);
		// stop listening for init on placeholder
		this._placeholder.removeEventListener(this.props.initOn, this._onPlaceholderInit);
		// internal init
		this._internalInit();
	};

	/**
  * Init the map
  */


	SGoogleMapComponent.prototype._internalInit = function _internalInit() {
		// init the map
		this._initMap();
	};

	/**
  * Init the map
  */


	SGoogleMapComponent.prototype._initMap = function _initMap() {
		this._map = new this._google.maps.Map(this._mapElm, this.props);
		// set the component as inited
		// used by the markers to init when the map is ok
		this.setAttribute('inited', true);
	};

	/**
  * Access the google map instance
  * @return 	{Map} 	The google map instance
  */


	_createClass(SGoogleMapComponent, [{
		key: 'map',
		get: function get() {
			return this._map;
		}
	}], [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {

				/**
     * Set the initial zoom of the map
     * @type 	{integer}
     */
				zoom: 4,

				/**
     * Set when to init the map if the placeholder setting is used
     * @type 	{String}
     */
				initOn: 'click'

			};
		}
	}]);

	return SGoogleMapComponent;
}((0, _mixwith.mix)(_SWebComponent2.default).with(_SGoogleComponentMixin2.default));

// STemplate integration


exports.default = SGoogleMapComponent;
_sTemplateIntegrator2.default.registerComponentIntegration(SGoogleMapComponent, function (component) {
	if (component._mapElm) {
		_sTemplateIntegrator2.default.ignore(component._mapElm);
	}
	if (component._placeholder) {
		_sTemplateIntegrator2.default.ignore(component._placeholder);
	}
	component.ignore({
		inited: true
	});
});