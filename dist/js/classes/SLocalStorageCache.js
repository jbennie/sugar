'use strict';

exports.__esModule = true;

var _SCache2 = require('./SCache');

var _SCache3 = _interopRequireDefault(_SCache2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SLocalStorageCache = function (_SCache) {
	_inherits(SLocalStorageCache, _SCache);

	function SLocalStorageCache(name) {
		_classCallCheck(this, SLocalStorageCache);

		// grab the cache
		var _this = _possibleConstructorReturn(this, _SCache.call(this, name));

		var ls = localStorage.getItem(_this.name);
		if (!ls) return _possibleConstructorReturn(_this);
		_this.cache = JSON.parse(ls);
		return _this;
	}

	/**
  * Save the cache
  */


	SLocalStorageCache.prototype.save = function save() {
		localStorage.setItem(this.name, JSON.stringify(this.cache));
	};

	return SLocalStorageCache;
}(_SCache3.default);

exports.default = SLocalStorageCache;