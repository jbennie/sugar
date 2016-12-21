'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _debounce = require('../../../js/utils/functions/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

var _whenAttribute = require('../../../js/dom/whenAttribute');

var _whenAttribute2 = _interopRequireDefault(_whenAttribute);

var _propertyProxy = require('../../../js/utils/objects/propertyProxy');

var _propertyProxy2 = _interopRequireDefault(_propertyProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SResponsiveImgComponent = function (_SWebComponent) {
	_inherits(SResponsiveImgComponent, _SWebComponent);

	function SResponsiveImgComponent() {
		_classCallCheck(this, SResponsiveImgComponent);

		return _possibleConstructorReturn(this, _SWebComponent.apply(this, arguments));
	}

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SResponsiveImgComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);

		// get the original src
		this._originalSrc = this.getAttribute('src') || this.getAttribute('data-src');

		// stop here if the image has no src
		if (!this._originalSrc) return;

		// set the width if not specified
		var width = this.style.width;
		if (!width) {
			this.setAttribute('width', '100%');
		}

		// throttle the window resize function to avoid to much
		// calls
		this._onWindowResize = (0, _debounce2.default)(this.__onWindowResize.bind(this), 500);

		// listen for window resize
		window.addEventListener('resize', this._onWindowResize);

		// first resize
		this.__onWindowResize();
	};

	/**
  * Component unmount
  * @definition 		SWebComponent.componentUnmount
  */


	SResponsiveImgComponent.prototype.componentUnmount = function componentUnmount() {
		_SWebComponent.prototype.componentUnmount.call(this);
		// stop listening for window resize
		window.removeEventListener('resize', this._onWindowResize);
	};

	/**
  * Component will receive prop
  * @definition 		SWebComponent.componentWillReceiveProp
  */


	SResponsiveImgComponent.prototype.componentWillReceiveProp = function componentWillReceiveProp(name, newVal, oldVal) {
		switch (name) {
			case 'dataSrc':
				if (!newVal) return;
				if (!newVal.toString().match(/^[a-zA-Z0-9_\/]/)) return;
				// save the new original src
				this._originalSrc = newVal;
				// apply the new src
				this._applySrc();
				break;
		}
	};

	/**
  * Apply the good src to the image
  * @return 	{void}
  */


	SResponsiveImgComponent.prototype._applySrc = function _applySrc() {
		// calculate the width of the image
		var imageWidth = this.offsetWidth;
		var appliedWidth = this.props.widths[0] || 0;

		// grab the best available width
		for (var i = 0; i < this.props.widths.length; i++) {
			var width = this.props.widths[i];
			var widthObj = width;

			// if is an object
			if ((typeof width === 'undefined' ? 'undefined' : _typeof(width)) === 'object') {
				width = width.width;
			}

			appliedWidth = widthObj;
			if (imageWidth < width) {
				// that mean that the image is larger
				// that the current applied width
				// so we stop the loop
				break;
			}
		}

		// process the appliedWidthObj variable
		if (typeof appliedWidth === 'number') {
			appliedWidth = {
				width: appliedWidth,
				name: appliedWidth.toString()
			};
		}

		// make sure we have a name
		if (!appliedWidth.name) {
			appliedWidth.name = appliedWidth.width.toString();
		}

		// check pixel ratios
		if (window.devicePixelRatio && appliedWidth.pixelRatios) {
			if (appliedWidth.pixelRatios.indexOf(window.devicePixelRatio) !== -1) {
				appliedWidth.pixelRatio = window.devicePixelRatio;
			}
		}

		// conpute the src
		var src = this._computeSrc(appliedWidth);

		// load and set the src
		this._loadAndSetSrc(src);
	};

	/**
  * Load the new image and set the src
  * @param 	{String} 	src 	The src to set
  * @return 	{void}
  */


	SResponsiveImgComponent.prototype._loadAndSetSrc = function _loadAndSetSrc(src) {
		var _this2 = this;

		// load the new image
		var img = new Image();
		img.onload = function () {
			// set the new src
			_this2.setAttribute('src', src);
			// onSrcApplied callback
			_this2.props.onSrcApplied && _this2.props.onSrcApplied.apply(_this2, [src]);
		};
		img.src = src;
	};

	/**
  * Compute the new src
  * @param 	{Object} 	widthObj 	The width object that will be applied
  * @return 	{String} 				The new src to apply
  */


	SResponsiveImgComponent.prototype._computeSrc = function _computeSrc(widthObj) {

		// store the new src
		var src = this._originalSrc;
		// check if has a computeSrc setting
		if (this.props.computeSrc) {
			src = this.props.computeSrc.apply(this, [src, widthObj]);
		}
		// compute the tokens
		src = src.replace(/\{[a-zA-Z0-9_-]+\}/g, function (match) {
			var key = match.replace('{', '').replace('}', '');
			if (widthObj[key]) {
				return widthObj[key];
			}
			return match;
		});

		// return the computed src
		return src;
	};

	/**
  * When the window is resized
  * @param 	{Event} 	e 	The event
  * @return 	{void}
  */


	SResponsiveImgComponent.prototype.__onWindowResize = function __onWindowResize(e) {
		// apply the good image src
		this._applySrc();
	};

	_createClass(SResponsiveImgComponent, null, [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {
				/**
     * Store the available widths for this image
     * @type 	{String|Array}
     */
				widths: [],

				/**
     * Data src to delay the download of the image
     * @prop
     * @type 		{String}
     */
				dataSrc: null,

				/**
     * Src of the image
     * @prop
     * @type 		{String}
     */
				src: null,

				/**
     * Callback when the src has been applied
     * @prop
     * @type 		{Function}
     */
				onSrcApplied: null
			};
		}

		/**
   * Mount dependencies
   * @definition 		SWebComponent.mountDependencies
   */

	}, {
		key: 'mountDependencies',
		get: function get() {
			return [function () {
				return (0, _whenAttribute2.default)(this, 'data-src', function (value) {
					if (!value) return;
					return value.toString().match(/^[a-zA-Z0-9_\/]/) !== null;
				});
			}];
		}
	}]);

	return SResponsiveImgComponent;
}(_SWebComponent3.default);

exports.default = SResponsiveImgComponent;


_sTemplateIntegrator2.default.registerComponentIntegration(SResponsiveImgComponent, function (component) {
	_sTemplateIntegrator2.default.ignore(component, {
		width: true,
		src: true
	});
});