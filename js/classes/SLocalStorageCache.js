'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SCache2 = require('./SCache');

var _SCache3 = _interopRequireDefault(_SCache2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @name 	SLocalStorageCache
 * @extends 	SCache
 * Create a simple localStorage cache
 * @example 	js
 * import SLocalStorageCache from 'coffeekraken-sugar/js/classes/SLocalStorageCache'
 * const myCache = new SLocalStorageCache('my-cache', {
 * 	lifetime: 3600
 * });
 * // set an item into the cache
 * myCache.set('my-cool-item', 'something');
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
var SLocalStorageCache = function (_SCache) {
	_inherits(SLocalStorageCache, _SCache);

	/**
  * Create a new local storage cache
  *
  * @constructor
  * @param 	{String} 	name 			The cache name
  * @param  	{Object} 	[settings={}]	The cache settings passed to the SCache class
  */
	function SLocalStorageCache(name) {
		var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, SLocalStorageCache);

		// grab the cache
		var _this = _possibleConstructorReturn(this, (SLocalStorageCache.__proto__ || Object.getPrototypeOf(SLocalStorageCache)).call(this, name, settings));

		var ls = localStorage.getItem(_this.name);
		if (!ls) return _possibleConstructorReturn(_this);
		_this.cache = JSON.parse(ls);
		return _this;
	}

	/**
  * Save the cache
  */


	_createClass(SLocalStorageCache, [{
		key: '_save',
		value: function _save() {
			localStorage.setItem(this.name, JSON.stringify(this.cache));
		}
	}]);

	return SLocalStorageCache;
}(_SCache3.default);

exports.default = SLocalStorageCache;