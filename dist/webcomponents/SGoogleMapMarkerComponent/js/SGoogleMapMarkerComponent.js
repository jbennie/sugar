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

var _whenAttribute = require('../../../js/dom/whenAttribute');

var _whenAttribute2 = _interopRequireDefault(_whenAttribute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SGoogleMapMarkerComponent = function (_mix$with) {
	_inherits(SGoogleMapMarkerComponent, _mix$with);

	function SGoogleMapMarkerComponent() {
		_classCallCheck(this, SGoogleMapMarkerComponent);

		return _possibleConstructorReturn(this, _mix$with.apply(this, arguments));
	}

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SGoogleMapMarkerComponent.prototype.componentMount = function componentMount() {
		_mix$with.prototype.componentMount.call(this);

		// get the map instance to use for this marker.
		// this is grabed from the parent node that need to be a google-map component
		if (!this.map) {
			throw 'The "' + this._componentNameDash + '" component has to be a direct child of a "SGoogleMapComponent"';
		}

		// add the marker to the map
		// load the map api
		if (!this._marker) {
			this._initMarker();
		} else {
			this._marker.setMap(this.map);
		}
	};

	/**
  * Init the marker
  */


	SGoogleMapMarkerComponent.prototype._initMarker = function _initMarker() {
		this._marker = new this._google.maps.Marker(this.props);
		this._marker.setMap(this.map);
	};

	/**
  * Component unmount
  * @definition 		SWebComponent.componentUnmount
  */


	SGoogleMapMarkerComponent.prototype.componentUnmount = function componentUnmount() {
		_mix$with.prototype.componentUnmount.call(this);
	};

	/**
  * Component will receive props
  * @definition 		SWebComponent.componentWillReceiveProps
  */


	SGoogleMapMarkerComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		if (!this._marker) return;
		this._marker.setOptions(nextProps);
	};

	/**
  * Access the google map instance
  * @return 	{Map} 	The google map instance
  */


	_createClass(SGoogleMapMarkerComponent, [{
		key: 'map',
		get: function get() {
			return this.parentNode.map;
		}
	}], [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {};
		}

		/**
   * Mount dependencies
   * @definition 		SWebComponent.mountDependencies
   */

	}, {
		key: 'mountDependencies',
		get: function get() {
			return [function () {
				return (0, _whenAttribute2.default)(this.parentNode, 'inited');
			}];
		}
	}]);

	return SGoogleMapMarkerComponent;
}((0, _mixwith.mix)(_SWebComponent2.default).with(_SGoogleComponentMixin2.default));

// STemplate integration


exports.default = SGoogleMapMarkerComponent;
_sTemplateIntegrator2.default.registerComponentIntegration(SGoogleMapMarkerComponent, function (component) {
	if (component._mapElm) {
		_sTemplateIntegrator2.default.ignore(component._mapElm);
	}
	if (component._placeholder) {
		_sTemplateIntegrator2.default.ignore(component._placeholder);
	}
});