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

var SGoogleStreetviewComponent = function (_mix$with) {
	_inherits(SGoogleStreetviewComponent, _mix$with);

	function SGoogleStreetviewComponent() {
		var _temp, _this, _ret;

		_classCallCheck(this, SGoogleStreetviewComponent);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _mix$with.call.apply(_mix$with, [this].concat(args))), _this), _this._view = null, _temp), _possibleConstructorReturn(_this, _ret);
	}

	/**
  * Store the street view instance
  * @type 	{StreetView}
  */


	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SGoogleStreetviewComponent.prototype.componentMount = function componentMount() {
		_mix$with.prototype.componentMount.call(this);

		// create the map container
		this._viewElm = document.createElement('div');
		this._viewElm.setAttribute('s-google-street-view-view', true);
		(0, _style2.default)(this._viewElm, {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%'
		});

		// append a div to prevent the scroll zoom
		this._overlayElm = document.createElement('div');
		this._overlayElm.setAttribute('s-google-street-view-overlay', true);
		(0, _style2.default)(this._overlayElm, {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: 1,
			cursor: 'pointer',
			backgroundColor: 'transparent'
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

		// listen for document scroll to unactivate the scroll wheel
		// on the streetview
		document.addEventListener('scroll', this._onDocumentScroll.bind(this));
		// set the overlay pointer events to all
		this._overlayElm.style.pointerEvents = 'none';

		// append the map and overlay
		this.appendChild(this._viewElm);
		this.appendChild(this._overlayElm);
	};

	/**
  * Component unmount
  * @definition 		SWebComponent.componentUnmount
  */


	SGoogleStreetviewComponent.prototype.componentUnmount = function componentUnmount() {
		_mix$with.prototype.componentUnmount.call(this);

		// stop listening for document scroll
		document.removeEventListener('scroll', this._onDocumentScroll);
	};

	/**
  * Component will receive props
  * @definition 		SWebComponent.componentWillReceiveProps
  */


	SGoogleStreetviewComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		if (!this.view) return;
		this.view.setOptions(nextProps);
	};

	/**
  * _onDocumentScroll
  * When the document scroll
  * @return 	{void}
  */


	SGoogleStreetviewComponent.prototype._onDocumentScroll = function _onDocumentScroll() {
		var _this2 = this;

		// activate the overlay to avoid scroll into street view
		this._overlayElm.style.pointerEvents = 'all';
		// update the timeout
		clearTimeout(this._scrollTimeout);
		this._scrollTimeout = setTimeout(function () {
			_this2._overlayElm.style.pointerEvents = 'none';
		}, 250);
	};

	/**
  * Handle the placeholder element
  */


	SGoogleStreetviewComponent.prototype._handlePlaceholder = function _handlePlaceholder() {
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


	SGoogleStreetviewComponent.prototype._onPlaceholderInit = function _onPlaceholderInit() {
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


	SGoogleStreetviewComponent.prototype._internalInit = function _internalInit() {
		// init the map
		this._initView();
	};

	/**
  * _onOverlayClick
  * When the user click on the overlay to activate the streetview
  * @param 	{Event} 	e 	The click event
  * @return 	{void}
  */


	SGoogleStreetviewComponent.prototype._onOverlayClick = function _onOverlayClick(e) {
		// disable the overlay
		this._overlayElm.style.pointerEvents = 'none';
		// do not listen for overlay move
		this._overlayElm.removeEventListener('mousemove', this._onOverlayClick);
	};

	/**
  * Init the view with the location found
  * @param 	{String} 	pano 	The pani id to init
  */


	SGoogleStreetviewComponent.prototype._initView = function _initView() {
		this._view = new this._google.maps.StreetViewPanorama(this._viewElm, this.props);
	};

	/**
  * Access the google view instance
  * @return 	{Map} 	The google map instance
  */


	_createClass(SGoogleStreetviewComponent, [{
		key: 'view',
		get: function get() {
			return this._view;
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
     * Set when to init the map if the placeholder setting is used
     * @type 	{String}
     */
				initOn: 'click'

			};
		}
	}]);

	return SGoogleStreetviewComponent;
}((0, _mixwith.mix)(_SWebComponent2.default).with(_SGoogleComponentMixin2.default));

// STemplate integration


exports.default = SGoogleStreetviewComponent;
_sTemplateIntegrator2.default.registerComponentIntegration(SGoogleStreetviewComponent, function (component) {
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