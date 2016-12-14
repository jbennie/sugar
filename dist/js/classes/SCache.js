'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _autoCast = require('../utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SCache = function () {

	/**
  * @constructor
  * @param 		{String} 		name 		The name of the cache
  */


	/**
  * Store the cache name
  * @type 		{String}
  */
	function SCache(name) {
		var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, SCache);

		this.name = null;
		this.cache = {};

		// set the cache name
		this.name = name;
		this.settings = _extends({
			lifetime: 3600 * 24,
			maxItems: 2000,
			strategy: 'LRU'
		}, settings);
	}

	/**
  * Get a value from the cache
  * @param 		{String} 		id 		The id of the cache element to retreive
  * @return 		{Mixed} 				The cache value or null if not exist
  */


	/**
  * Store the cache object
  * @type 		{Object}
  */


	SCache.prototype.get = function get(id) {
		// get the data into the storage
		var cacheObj = this.cache[id];
		if (!cacheObj) return;
		// check the lifetime
		if (this.now > cacheObj.expire) {
			// delete the cache item
			delete this.cache[id];
			// save the cache
			this.save();
			// we not have any cache left
			return null;
		}
		// otherwise, the value is valid so return it
		return (0, _autoCast2.default)(cacheObj.value);
	};

	/**
  * Get the now timestamp
  * @return 		{Integer} 					The timestamp of now
  */


	/**
  * Set a value in the cache
  * @param 		{String} 		id 			The id of the cache element to set
  * @param 		{Mixed} 		value 		The value to set in cache
  * @param 		{Integer} 		lifetime	The lifetime of this value in cache
  */
	SCache.prototype.set = function set(id, value) {
		var lifetime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		var cacheObj = {};
		// check if already have this item to update if
		// if (this.cache[id]) {
		// 	cacheObj = this.cache[id];
		// 	// update the cache
		// 	cacheObj = {
		// 		...cacheObj,
		// 		value,
		// 		updated : this.now
		// 	}
		// } else {
		// create the cache object that need to be stored
		cacheObj = {
			id: id,
			value: value,
			lifetime: lifetime || this.settings.lifetime,
			expire: this.now + (lifetime || this.settings.lifetime),
			created: this.now,
			updated: null
		};
		// set the cache object into cache
		this.cache[id] = cacheObj;
		// }
		// save the cache
		this.save();
		// return the value to store
		return cacheObj;
	};

	_createClass(SCache, [{
		key: 'now',
		get: function get() {
			return Math.round(new Date().getTime() / 1000);
		}
	}]);

	return SCache;
}();

exports.default = SCache;