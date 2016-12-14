'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _SComponent2 = require('../../../js/core/SComponent');

var _SComponent3 = _interopRequireDefault(_SComponent2);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

var _trianglify = require('trianglify');

var _trianglify2 = _interopRequireDefault(_trianglify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('javascript-detect-element-resize');

var STrianglifyComponent = function (_SComponent) {
	_inherits(STrianglifyComponent, _SComponent);

	/**
  * @constructor
  * @param 		{HTMLElement} 		elm 					The element on which to create the trianglify effect
  * @param 		{Object} 			settings 				The component settings
  * @param 		{String} 			[name="sTrianglify"]	The component name
  */
	function STrianglifyComponent(elm) {
		var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
		var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sTrianglify';

		_classCallCheck(this, STrianglifyComponent);

		return _possibleConstructorReturn(this, _SComponent.call(this, elm, _extends({

			/**
    * The width of the generated trianglify picture
    * @setting
    * @type 		{Number}
    * @default 	elm.offsetWith
    */
			width: null,

			/**
    * The height of the generated trianglify picture
    * @setting
    * @type 		{Number}
    * @default 	elm.offsetHeight
    */
			height: null,

			/**
    * The size of each cell that will compose the trianglify picture
    * @setting
    * @type 		{Number}
    * @default 	75
    */
			cellSize: 75,

			/**
    * Decimal value between 0 and 1 (inclusive), defaults to 0.75. Specify the amount of randomness used when generating triangles.
    * @setting
    * @type 		{Number}
    * @default 	0.75
    */
			variance: .75,

			/**
    * Seeds the random number generator to create repeatable patterns. When set to null, the random number will be seeded with random values from the environment. An example usage would be passing in blog post titles as the seed to generate unique trianglify patterns for every post on a blog that won't change when the page reloads.
    * @setting
    * @type 		{Number}
    * @default 	null
    */
			seed: null,

			/**
    * String or array of CSS-formatted colors, default is 'random'.
    * Specify the color gradient used on the x axis.
    * @setting
    * @type 		{Array}{String}
    * @default 	random
    */
			xColors: 'random',

			/**
    * String or array of CSS-formatted colors, default is 'match_x'.
    * When set to 'match_x' the same gradient will be used on both axes. Otherwise, accepts the same options as xColors.
    * @setting
    * @type 		{Array}{String}
    * @default 	match_x
    */
			yColors: 'match_x',

			/**
    *  Set the color space used for generating gradients. Supported values are rgb, hsv, hsl, hsi, lab and hcl.
    * @setting
    * @type 		{String}
    * @default 	lab
    */
			colorSpace: 'lab',

			/**
    * Specify a custom function for coloring triangles, defaults to null. Accepts a function to override the standard gradient coloring that takes the x,y coordinates of a triangle's centroid as arguments and returns a CSS-formatted color string representing the color that triangle should have.
    * @setting
    * @type 		{Function}
    * @default 	null
    * @example 	js
    * var colorFunc = function(x, y) {
    * 	return 'hsl('+Math.floor(Math.abs(x*y)*360)+',80%,60%)';
    * };
    * var pattern = Trianglify({colorFunction: colorFunc})
    */
			colorFunction: null,

			/**
    * Specify the width of the stroke on triangle shapes in the pattern. The default value is the ideal value for eliminating antialiasing artifacts when rendering patterns to a canvas.
    * @setting
    * @type 		{Number}
    * @default 	1.51
    */
			strokeWidth: 1.51,

			/**
    * Array of points ([x, y]) to trianglulate. When not specified an array randomised points is generated filling the space.
    * @setting
    * @type 		{Array}
    * @default 	null
    */
			points: null

		}, settings), name));
	}

	/**
  * Init
  */


	STrianglifyComponent.prototype._init = function _init() {
		// init component
		_SComponent.prototype._init.call(this);
	};

	/**
  * Enable the component
  */


	STrianglifyComponent.prototype.enable = function enable() {
		_SComponent.prototype.enable.call(this);
		this.addComponentClass(this.elm);
		window.addResizeListener(this.elm, this._onElmResize.bind(this));
	};

	/**
  * Disable the component
  */


	STrianglifyComponent.prototype.disable = function disable() {
		_SComponent.prototype.disable.call(this);
		this.removeComponentClass(this.elm);
		window.removeResizeListener(this.elm, this._onElmResize);
	};

	/**
  * When the element is resized
  */


	STrianglifyComponent.prototype._onElmResize = function _onElmResize() {
		// create a new trianglify
		var trianglify = (0, _trianglify2.default)({
			width: this.settings.width || this.elm.offsetWidth,
			height: this.settings.height || this.elm.offsetHeight,
			cell_size: this.settings.cellSize || this.elm.offsetHeight * 2,
			x_colors: this.settings.xColors,
			y_colors: this.settings.yColors,
			color_space: this.settings.colorSpace,
			variance: this.settings.variance,
			seed: this.settings.seed,
			color_function: this.settings.colorFunction,
			stroke_width: this.settings.strokeWidth,
			points: this.settings.points
		});
		this.elm.style.backgroundImage = 'url(' + trianglify.png() + ')';
	};

	return STrianglifyComponent;
}(_SComponent3.default);

// STemplate integration


_sTemplateIntegrator2.default.registerComponentIntegration(STrianglifyComponent, function (component) {
	_sTemplateIntegrator2.default.ignore(component.elm, {
		style: true
	});
});

// export
exports.default = STrianglifyComponent;