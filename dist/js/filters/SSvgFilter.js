'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uniqid = require('../utils/uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name 			SSvgFilter
 * This class allows you to create with ease some complexe SVG filters and to apply it on any HTMLElement that you want
 * by extending this class like so
 *
 * @example 		js
 * class MyBlurFilter extends SSvgFilter {
 *
 * 		constructor(amount = 8) {
 * 			super(`
 * 				<feGaussianBlur in="SourceGraphic" stdDeviation="${amount}" result="blur" />
 * 			`);
 * 		}
 * }
 *
 * // using your filter
 * const myFilter = new MyBlurFilter(10);
 * myFilter.applyTo(myCoolHTMLElement);
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */

var _sSvgFilters = [];
var _sIsSvgInjected = false;

var SSvgFilter = function () {

	/**
  * @constructor
  * @param 			{String} 			The SVG filter string representation
  */
	function SSvgFilter(filter_content) {
		_classCallCheck(this, SSvgFilter);

		// save the reference of each elements
		this.elms = [];

		// save parameters
		this.filter_content = filter_content;

		// generate a uniqid
		this.id = 's-svg-filter-' + (0, _uniqid2.default)();

		// if need to inject svg
		if (!document.body.querySelector('#s-svg-filters')) SSvgFilter._injectFiltersContainer();

		// insert the filter
		this._insertFilter();
	}

	/**
  * Apply the filter to an element
  * @param 		{HTMLElement} 			elm 			The element on which to apply the filter
  */


	_createClass(SSvgFilter, [{
		key: 'applyTo',
		value: function applyTo(elm) {
			var _this = this;

			['-webkit-', '-moz-', '-ms-', '-o-', ''].forEach(function (vendor) {
				elm.style[vendor + 'filter'] = 'url("#' + _this.id + '")';
			});
			this.elms.push(elm);
		}

		/**
   * Unapply from
   * @param 		{HTMLElement} 			elm 			The element from which to remove the filter
   */

	}, {
		key: 'unapplyFrom',
		value: function unapplyFrom(elm) {
			['-webkit-', '-moz-', '-ms-', '-o-', ''].forEach(function (vendor) {
				delete elm.style[vendor + 'filter'];
			});
			// remove from stack
			var idx = this.elms.indexOf(elm);
			if (idx) this.elms.splice(idx, 1);
		}

		/**
   * Insert the filter
   */

	}, {
		key: '_insertFilter',
		value: function _insertFilter() {
			var svg = '\n\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n\t\t\t\t<defs>\n\t\t\t\t</defs>\n\t\t\t</svg>\n\t\t';
			var div = document.createElement('div');
			div.innerHTML = svg;
			var defs = div.querySelector('defs');

			// add the filter to the svg
			this.filter_content = '<filter id="' + this.id + '">' + this.filter_content + '</filter>';
			defs.innerHTML = this.filter_content;
			this.filter = defs.querySelector('#' + this.id);
			this.svg = div.querySelector('svg');
			SSvgFilter.filtersContainer.appendChild(this.svg);
		}

		/**
   * Destroy the filter
   */

	}, {
		key: 'destroy',
		value: function destroy() {
			var _this2 = this;

			// loop on each element savec in stack to remove the filter
			this.elms.forEach(function (elm) {
				_this2.unapplyFrom(elm);
			});
			// remove the filter from the html
			this.svg.parentNode.removeChild(this.svg);
		}

		/**
   * Inject the svg that will contains all the filters created through this class
   * @private
   */

	}], [{
		key: '_injectFiltersContainer',
		value: function _injectFiltersContainer() {
			var style = ['position:absolute;', 'left:-1000px;', 'top:-300px;'];
			if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
				style.push('display:none;');
			}
			SSvgFilter.filtersContainer = document.createElement('div');
			SSvgFilter.filtersContainer.id = 's-svg-filters';
			SSvgFilter.filtersContainer.style = style.join(' ');
			document.body.appendChild(SSvgFilter.filtersContainer);
		}
	}]);

	return SSvgFilter;
}();

exports.default = SSvgFilter;