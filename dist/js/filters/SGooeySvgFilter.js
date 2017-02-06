'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SSvgFilter2 = require('./SSvgFilter');

var _SSvgFilter3 = _interopRequireDefault(_SSvgFilter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @name 			SGooeySvgFilter
 * @extends 		SSvgFilter
 * This class represent a gooey SVG filter that can be applied on any HTMLElement.
 *
 * @example 		js
 * const filter = new SGooeySvgFilter();
 * filter.applyTo(myCoolHTMLElement);
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */
var SGooeySvgFilter = function (_SSvgFilter) {
	_inherits(SGooeySvgFilter, _SSvgFilter);

	/**
  * @constructor
  * @param 		{Number} 		amount 		The amount of effect to apply
  */
	function SGooeySvgFilter() {
		var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

		_classCallCheck(this, SGooeySvgFilter);

		var _this = _possibleConstructorReturn(this, _SSvgFilter.call(this, '\n\t\t\t<feGaussianBlur in="SourceGraphic" stdDeviation="' + amount + '" result="blur" />\n\t\t\t<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ' + (parseInt(amount) + 9) + ' -9" result="gooey" />\n\t\t\t<feComposite in="SourceGraphic" in2="gooey" operator="atop"/>\n\t\t'));

		_this._blur = _this.filter.querySelector('feGaussianBlur');
		_this._color_matrix = _this.filter.querySelector('feColorMatrix');
		return _this;
	}

	/**
  * The blur amount to produce the effect
  * @type 	{Number}
  */


	_createClass(SGooeySvgFilter, [{
		key: 'blur',
		set: function set(value) {
			this._blur.setAttribute('stdDeviation', value);
		}

		/**
   * The contrast amount to produce the effect
   * @type 	{Number}
   */

	}, {
		key: 'contrast',
		set: function set(value) {
			// get value
			var v = this._color_matrix.getAttribute('values');
			// process
			v = v.split(' ');
			v[v.length - 2] = value;
			// apply the new filter
			this._color_matrix.setAttribute('values', v.join(' '));
		}

		/**
   * The shrink amount to produce the effect
   * @type 	{Number}
   */

	}, {
		key: 'shrink',
		set: function set(value) {
			// get value
			var v = this._color_matrix.getAttribute('values');
			// process
			v = v.split(' ');
			v[v.length - 1] = value;
			// apply the new filter
			this._color_matrix.setAttribute('values', v.join(' '));
		}

		/**
   * The overall amount of effect to produce
   * @type 	{Number}
   */

	}, {
		key: 'amount',
		set: function set(value) {
			this._blur.setAttribute('stdDeviation', value);
			this._color_matrix.setAttribute('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ' + (parseInt(value) + 9) + ' -9');
		}
	}]);

	return SGooeySvgFilter;
}(_SSvgFilter3.default);

// expose in window.sugar


if (window.sugar == null) {
	window.sugar = {};
}
window.sugar.SGooeySvgFilter = SGooeySvgFilter;

// export modules
exports.default = SGooeySvgFilter;