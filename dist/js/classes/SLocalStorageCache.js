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

var SLocalStorageCache = function (_SCache) {
	_inherits(SLocalStorageCache, _SCache);

	function SLocalStorageCache(name) {
		_classCallCheck(this, SLocalStorageCache);

		// grab the cache
		var _this = _possibleConstructorReturn(this, (SLocalStorageCache.__proto__ || Object.getPrototypeOf(SLocalStorageCache)).call(this, name));

		var ls = localStorage.getItem(_this.name);
		if (!ls) return _possibleConstructorReturn(_this);
		_this.cache = JSON.parse(ls);
		return _this;
	}

	/**
  * Save the cache
  */


	_createClass(SLocalStorageCache, [{
		key: 'save',
		value: function save() {
			localStorage.setItem(this.name, JSON.stringify(this.cache));
		}
	}]);

	return SLocalStorageCache;
}(_SCache3.default);

exports.default = SLocalStorageCache;