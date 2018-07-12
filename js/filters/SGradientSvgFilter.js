'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SSvgFilter2 = require('./SSvgFilter');

var _SSvgFilter3 = _interopRequireDefault(_SSvgFilter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @name 			SGradientSvgFilter
 * @extends 		SSvgFilter
 * This SVG filter class apply either a linear or a radial gradient of your choice
 * on an HTMLElement.
 * This is useful cause the gradient will only be applied on part of the elements that is really visible and will respect the opacity
 * of each parts
 *
 * @example 		js
 * const filter = new SGradientSvgFilter();
 * filter.linear(['red','blue','green']);
 * filter.applyTo(myCoolHTMLElement);
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */
var SGradientSvgFilter = function (_SSvgFilter) {
	_inherits(SGradientSvgFilter, _SSvgFilter);

	/**
  * @constructor
  */
	function SGradientSvgFilter() {
		_classCallCheck(this, SGradientSvgFilter);

		var _this = _possibleConstructorReturn(this, (SGradientSvgFilter.__proto__ || Object.getPrototypeOf(SGradientSvgFilter)).call(this, '\n\t\t\t<feImage xlink:href="" x="0" y="0" result="IMAGEFILL" preserveAspectRatio="none" />\n\t\t\t<feComposite operator="in" in="IMAGEFILL" in2="SourceAlpha" />\n\t\t'));

		_this._image = _this.filter.querySelector('feImage');
		_this._tile = _this.filter.querySelector('feTile');
		return _this;
	}

	/**
  * Linear gradient
  * @param 		{Array} 			colors 			An array of colors for your gradient
  * @param 		{Object} 			settings 		The settings of your gradient that consist of an object like : ```{width: 512, height: 512, x0: 0, x1: 512, y0: 0, y1: 1}```
  */


	_createClass(SGradientSvgFilter, [{
		key: 'linear',
		value: function linear(colors) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var width = settings.width || 512,
			    height = settings.height || 512,
			    x0 = settings.x0 || 0,
			    x1 = settings.x1 || width,
			    y0 = settings.y0 || 0,
			    y1 = settings.y1 || 0;
			var can = document.createElement('canvas');
			can.setAttribute('width', width);
			can.setAttribute('height', height);
			var ctx = can.getContext('2d'),
			    grad = ctx.createLinearGradient(x0, y0, x1, y1);
			// loop on each colors
			var i = 0;
			colors.forEach(function (color) {
				grad.addColorStop(1 / (colors.length - 1) * i, color);
				i++;
			});
			ctx.fillStyle = grad;
			ctx.fillRect(0, 0, width, height);
			this.grad64 = can.toDataURL();
			this._image.setAttribute('xlink:href', this.grad64);
		}

		/**
   * Linear gradient
   * @param 		{Array} 			colors 			An array of colors for your gradient
   * @param 		{Object} 			settings 		The settings of your gradient that consist of an object like : ```{width: 512, height: 512, x0: 256, x1: 256, y0: 256, y1: 256, r0: 0, r1: 512}```
   */

	}, {
		key: 'radial',
		value: function radial(colors) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


			var width = settings.width || 512,
			    height = settings.height || 512,
			    x0 = settings.x0 || width / 2,
			    x1 = settings.x1 || width / 2,
			    r0 = settings.r0 || 0,
			    y0 = settings.y0 || height / 2,
			    y1 = settings.y1 || height / 2,
			    r1 = settings.r1 || width;
			var can = document.createElement('canvas');
			can.setAttribute('width', width);
			can.setAttribute('height', height);
			var ctx = can.getContext('2d'),
			    grad = ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
			// loop on each colors
			var i = 0;
			colors.forEach(function (color) {
				grad.addColorStop(1 / (colors.length - 1) * i, color);
				i++;
			});
			ctx.fillStyle = grad;
			ctx.fillRect(0, 0, width, height);
			this.grad64 = can.toDataURL();
			this._image.setAttribute('xlink:href', this.grad64);
		}

		/**
   * Apply the filter to element
   * @override
   * @param 		{HTMLElement} 		elm 		The element on which to apply the filter
   */

	}, {
		key: 'applyTo',
		value: function applyTo(elm) {
			_get(SGradientSvgFilter.prototype.__proto__ || Object.getPrototypeOf(SGradientSvgFilter.prototype), 'applyTo', this).call(this, elm);
			this._setImageSize();
			window.addEventListener('resize', this._onWindowResize.bind(this));
		}

		/**
   * Remove the filter from element
   * @override
   * @param 	{HTMLElement} 	elm 	The element to unapply the filter from
   */

	}, {
		key: 'unapplyFrom',
		value: function unapplyFrom(elm) {
			_get(SGradientSvgFilter.prototype.__proto__ || Object.getPrototypeOf(SGradientSvgFilter.prototype), 'unapplyFrom', this).call(this, elm);
			window.removeEventListener('resize', this._onWindowResize);
		}

		/**
   * When the window is resizing
   * @param 		{Event} 		e 		The resize event
   */

	}, {
		key: '_onWindowResize',
		value: function _onWindowResize(e) {
			// set the image size
			this._setImageSize();
		}

		/**
   * Set image width
   */

	}, {
		key: '_setImageSize',
		value: function _setImageSize() {
			var width = this.elms[0].offsetWidth,
			    height = this.elms[0].offsetHeight;
			if (width >= height) {
				this._image.setAttribute('width', width);
				this._image.removeAttribute('height');
			} else {
				this._image.setAttribute('height', height);
				this._image.removeAttribute('width');
			}
			// this._image.setAttribute('width', width);
			// this._image.setAttribute('height', height);
		}
	}]);

	return SGradientSvgFilter;
}(_SSvgFilter3.default);

// export modules


exports.default = SGradientSvgFilter;