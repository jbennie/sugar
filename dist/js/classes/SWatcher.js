'use strict';

exports.__esModule = true;

var _constructorName = require('../utils/objects/constructorName');

var _constructorName2 = _interopRequireDefault(_constructorName);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class 		SWathcer
 * This class allows you to easily monitor some object properties and get the new and old value of it
 *
 * @example 	js
 * // create the watcher instance
 * const watcher = new SWatcher();
 *
 * // object to watch
 * let myObject = {
 * 		title : 'Hello World'
 * };
 *
 * // watch the object
 * watcher.watch(myObject, 'title', (newVal, oldVal) => {
 *  	// do something when the title changes
 * });
 *
 * // update the title
 * myObject.title = 'Hello Universe';
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
var SWatcher = function () {

	/**
  * @constructor
  */
	function SWatcher() {
		_classCallCheck(this, SWatcher);

		this._watchStack = {};
	}

	/**
  * Destroy the watcher
  */


	// static setters = {
	// 	CSSStyleDeclaration : (obj, property, value) => {
	// 		obj.setProperty(property, value);
	// 	}
	// }

	/**
  * Watch stack
  * @type 		{Object}
  */


	SWatcher.prototype.destroy = function destroy() {}
	// @TODO watcher destroy implementation


	/**
  * Internal implementation of the defineProp
  * @param 		{Object} 	obj 		The object to watch
  * @param 		{String} 	property 	The property of the object to watch
  * @param 		{Mixed} 	value 		The initial value of the property
  * @param 		{String} 	objPath 	The object property path to watch
  */
	;

	SWatcher.prototype._defineProp = function _defineProp(obj, property, value, objPath) {
		var _this2 = this;

		// do not define multiple time the description
		if (this._watchStack[objPath]) return;

		// store the current value
		var val = value;
		var descriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

		// custom setter check
		var _set = function _set(value) {
			// check if have a custom setter for this object
			// if (customSetter) {
			// 	customSetter(obj, property, value);
			// 	val = value;
			// }
			// descriptor
			if (descriptor && descriptor.set) {
				var ret = descriptor.set(value);
				if (ret) {
					val = ret;
				} else {
					val = descriptor.get();
				}
			} else {
				val = value;
			}

			// apply the proxy for arrays, etc...
			val = _this2._applyProxy(val, objPath, function (newVal) {
				val = newVal;
			});
		};

		// get the setter
		// let customSetter;
		// for (let name in SWatcher.setters) {
		// 	if (__constructorName(obj) === name) {
		// 		customSetter = SWatcher.setters[name];
		// 		break;
		// 	}
		// }

		// set the value
		_set(value);

		// make sure we have the good descriptor
		var d = Object.getOwnPropertyDescriptor(obj, property);
		Object.defineProperty(obj, property, {
			get: function get() {
				var _val = val;
				if (descriptor && descriptor.get) {
					_val = descriptor.get();
				}
				return _val;
			},
			set: function set(v) {
				var oldValue = val;
				// internal set to use the good setter
				_set(v);
				// _notify of new update
				_this2._notify(objPath, val, oldValue);
			},
			configurable: descriptor && descriptor.configurable !== undefined ? descriptor.configurable : false,
			enumarable: descriptor && descriptor.enumarable !== undefined ? descriptor.enumarable : true
		});
	};

	/**
  * Override some array methods to be able to notify of changes
  * @param 		{Array} 	array 			The array to process
  * @param 		{Array} 	methods 		The methods to override
  * @param 		{String} 	objPath 		The object property path to watch
  * @param 		{Function} 	setValueCb 		A callback function that will set the updated value
  */


	SWatcher.prototype._overrideArrayMethod = function _overrideArrayMethod(array, methods, objPath, setValueCb) {
		var _this = this;

		// grab the old value
		var oldVal = array.slice(0);

		// loop on each methods to override
		methods.forEach(function (method) {
			array[method] = function () {
				// apply the push
				var ret = Array.prototype[method].apply(this, arguments);
				// set value callback
				setValueCb(this);
				// _notify
				_this._notify(objPath, this, oldVal);
				// return the new value
				return ret;
			};
		});
	};

	/**
  * Apply a proxy on the variable to detect changes
  * on arrays, etc...
  * @param 		{Mixed} 	value 		The value on which to apply the proxy
  * @param 		{String} 	objPath 	The object property path to watch
  * @param 		{Function} 	setValueCb 	A function that will be responsible to set the new value intarnally
  * @return 		{Mixed} 				Return the value
  */


	SWatcher.prototype._applyProxy = function _applyProxy(value, objPath, setValueCb) {
		// if is an array
		if (value instanceof Array) {
			// override methods
			this._overrideArrayMethod(value, ['push', 'splice', 'pop', 'shift', 'unshift', 'reverse', 'sort'], objPath, setValueCb);
		}
		return value;
	};

	/**
  * Watch something on an object
  * @param 		{Object} 		object 		The object to watch
  * @param 		{String} 		path 		The property path to watch on the object
  * @param 		{Function} 		cb 			The callback called when the property is updated
  */


	SWatcher.prototype.watch = function watch(object, path, cb) {
		var _this3 = this;

		// split the path by ',' to watch multiple properties
		if (typeof path === 'string') {
			path = path.split(',');
		}
		if (!path instanceof Array) {
			throw "The 'path' parameter has to be a string or an array...";
		}
		// loop on each path to watch
		path.forEach(function (p) {
			_this3._watch(object, p.trim(), cb);
		});
	};

	/**
  * Internal watch$
  * @param 		{Object} 		object 		The object to watch
  * @param 		{String} 		path 		The property path to watch on the object
  * @param 		{Function} 		cb 			The callback called when the property is updated
  */


	SWatcher.prototype._watch = function _watch(object, path, cb) {
		// check if the path parameter has already a descriptor
		var split = path.split('.');
		var obj = object;
		var property = null;
		if (split.length > 1) {
			property = split.pop();
			obj = (0, _get3.default)(object, split.join('.'));
		} else {
			property = split[0];
		}
		var currentValue = null;
		currentValue = (0, _get3.default)(object, path);

		// if is undefined, create the value at null
		if (obj === undefined || currentValue === undefined) {
			(0, _set3.default)(obj, path, null);
			// _set(this, split.join('.'),null);
			// throw `It's not possible to watch the property ${path} cause it does not exist...`;
		};

		// define the property proxy
		this._defineProp(obj, property, currentValue, path);

		// register new watch
		if (!this._watchStack[path]) {
			this._watchStack[path] = [];
		}
		this._watchStack[path].push(cb);
	};

	/**
  * Tell that something has changed
  * @param 		{String} 		path 		The object property path that has been updated
  * @param 		{Mixed} 		newValue 	The new property value
  * @param 		{Mixed} 		oldValue 	The old property value
  */


	SWatcher.prototype._notify = function _notify(path, newValue, oldValue) {
		if (this._watchStack[path] !== undefined && newValue !== oldValue) {
			this._watchStack[path].forEach(function (cb) {
				cb(newValue, oldValue);
			});
		}
	};

	return SWatcher;
}();

exports.default = SWatcher;