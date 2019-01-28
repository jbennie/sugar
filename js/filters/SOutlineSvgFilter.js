'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SSvgFilter2 = require('./SSvgFilter');

var _SSvgFilter3 = _interopRequireDefault(_SSvgFilter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @name 			SOutlineSvgFilter
 * @extends 		SSvgFilter
 * This class represent an outline filter that can be applied on any HTMLElement.
 *
 * @example 		js
 * const filter = new SOutlineSvgFilter();
 * filter.applyTo(myCoolHTMLElement);
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
var SOutlineSvgFilter = function (_SSvgFilter) {
	_inherits(SOutlineSvgFilter, _SSvgFilter);

	/**
  * @constructor
  * @param 		{Number} 		amount 		The amount of effect to apply
  */
	function SOutlineSvgFilter() {
		var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

		_classCallCheck(this, SOutlineSvgFilter);

		var _this = _possibleConstructorReturn(this, (SOutlineSvgFilter.__proto__ || Object.getPrototypeOf(SOutlineSvgFilter)).call(this, '\n\t\t\t<feMorphology operator="dilate" radius="' + radius + '"\n\t\t\tin="SourceGraphic" result="THICKNESS" />\n\t\t\t<feComposite operator="out" in="THICKNESS" in2="SourceGraphic" ></feComposite>\n\t\t'));

		_this._$morphology = _this.filter.querySelector('feMorphology');
		return _this;
	}

	/**
  * The radius to produce the effect
  * @type 	{Number}
  */


	_createClass(SOutlineSvgFilter, [{
		key: 'radius',
		set: function set(value) {
			this._$morphology.setAttribute('radius', value);
		}
	}]);

	return SOutlineSvgFilter;
}(_SSvgFilter3.default);

// export modules


exports.default = SOutlineSvgFilter;