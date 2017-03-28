'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constructorName = require('../utils/objects/constructorName');

var _constructorName2 = _interopRequireDefault(_constructorName);

var _get2 = require('lodash/get');

var _get3 = _interopRequireDefault(_get2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @name 		SWathcer
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


	_createClass(SWatcher, [{
		key: 'destroy',
		value: function destroy() {}
		// @TODO watcher destroy implementation


		/**
   * Internal implementation of the defineProp
   * @param 		{Object} 	obj 		The object to watch
   * @param 		{String} 	property 	The property of the object to watch
   * @param 		{Mixed} 	value 		The initial value of the property
   * @param 		{String} 	objPath 	The object property path to watch
   */

	}, {
		key: '_defineProp',
		value: function _defineProp(obj, property, value, objPath) {
			var _this2 = this;

			var descriptor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;


			// do not define multiple time the description
			if (this._watchStack[objPath]) return;

			// store the current value
			var val = value;
			var currentDescriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

			// custom setter check
			var _set = function _set(value) {
				// check if have a custom setter for this object
				// if (customSetter) {
				// 	customSetter(obj, property, value);
				// 	val = value;
				// }
				// descriptor
				if (currentDescriptor && currentDescriptor.set) {
					var ret = currentDescriptor.set(value);
					if (ret) {
						val = ret;
					} else {
						val = currentDescriptor.get();
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

			// make sure we have the good currentDescriptor
			var d = Object.getOwnPropertyDescriptor(obj, property);
			Object.defineProperty(obj, property, {
				get: function get() {
					var _val = val;
					if (currentDescriptor && currentDescriptor.get) {
						_val = currentDescriptor.get();
					}
					if (descriptor && descriptor.get) {
						_val = descriptor.get(_val);
					}
					return _val;
				},
				set: function set(v) {
					var oldValue = val;
					if (descriptor && descriptor.set) {
						v = descriptor.set(v);
					}
					// internal set to use the good setter
					_set(v);
					// _notify of new update
					_this2._notify(objPath, val, oldValue);
				},
				configurable: descriptor && descriptor.configurable !== undefined ? descriptor.configurable : currentDescriptor && currentDescriptor.configurable !== undefined ? currentDescriptor.configurable : false,
				enumarable: descriptor && descriptor.enumarable !== undefined ? descriptor.enumarable : currentDescriptor && currentDescriptor.enumarable !== undefined ? currentDescriptor.enumarable : true
			});
		}

		/**
   * Override some array methods to be able to notify of changes
   * @param 		{Array} 	array 			The array to process
   * @param 		{Array} 	methods 		The methods to override
   * @param 		{String} 	objPath 		The object property path to watch
   * @param 		{Function} 	setValueCb 		A callback function that will set the updated value
   */

	}, {
		key: '_overrideArrayMethod',
		value: function _overrideArrayMethod(array, methods, objPath, setValueCb) {
			var _this = this;

			// grab the old value
			var oldVal = array.slice(0);

			// loop on each methods to override
			methods.forEach(function (method) {
				array[method] = function () {
					// array items info object
					var updateInfo = {
						type: Array,
						method: method
					};
					if (method === 'push' || method === 'unshift' || method === 'concat') {
						updateInfo.addedItems = Array.prototype.slice.call(arguments);
					} else if (method === 'pop') {
						updateInfo.removedItems = [oldVal[oldVal.length - 1]];
					} else if (method === 'shift') {
						updateInfo.removedItems = [oldVal[0]];
					}
					// @TODO Check and add missed methods to watch array
					// apply the push
					var ret = Array.prototype[method].apply(this, arguments);
					// set value callback
					setValueCb(this);
					// _notify
					_this._notify(objPath, this, oldVal, updateInfo);
					// return the new value
					return ret;
				};
			});
		}

		/**
   * Apply a proxy on the variable to detect changes
   * on arrays, etc...
   * @param 		{Mixed} 	value 		The value on which to apply the proxy
   * @param 		{String} 	objPath 	The object property path to watch
   * @param 		{Function} 	setValueCb 	A function that will be responsible to set the new value intarnally
   * @return 		{Mixed} 				Return the value
   */

	}, {
		key: '_applyProxy',
		value: function _applyProxy(value, objPath, setValueCb) {
			// if is an array
			if (value instanceof Array) {
				// override methods
				this._overrideArrayMethod(value, ['push', 'splice', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'concat'], objPath, setValueCb);
			}
			return value;
		}

		/**
   * Watch something on an object
   * @param 		{Object} 		object 		The object to watch
   * @param 		{String} 		path 		The property path to watch on the object
   * @param 		{Function} 		cb 			The callback called when the property is updated
   */

	}, {
		key: 'watch',
		value: function watch(object, path, cb) {
			var _this3 = this;

			var descriptor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			// split the path by ',' to watch multiple properties
			if (typeof path === 'string') {
				path = path.split(',');
			}
			if (!path instanceof Array) {
				throw "The 'path' parameter has to be a string or an array...";
			}
			// loop on each path to watch
			path.forEach(function (p) {
				_this3._watch(object, p.trim(), cb, descriptor);
			});
		}

		/**
   * Internal watch$
   * @param 		{Object} 		object 		The object to watch
   * @param 		{String} 		path 		The property path to watch on the object
   * @param 		{Function} 		cb 			The callback called when the property is updated
   */

	}, {
		key: '_watch',
		value: function _watch(object, path, cb) {
			var descriptor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

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
			this._defineProp(obj, property, currentValue, path, descriptor);

			// register new watch
			if (!this._watchStack[path]) {
				this._watchStack[path] = [];
			}
			this._watchStack[path].push(cb);
		}

		/**
   * Tell that something has changed
   * @param 		{String} 		path 		The object property path that has been updated
   * @param 		{Mixed} 		newValue 	The new property value
   * @param 		{Mixed} 		oldValue 	The old property value
   * @param 		{Object} 		[updateInfo=null] 	An object that add information about the update like addedItems for array, etc...
   */

	}, {
		key: '_notify',
		value: function _notify(path, newValue, oldValue) {
			var updateInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			if (this._watchStack[path] !== undefined && newValue !== oldValue) {
				this._watchStack[path].forEach(function (cb) {
					cb(newValue, oldValue, updateInfo);
				});
			}
		}
	}]);

	return SWatcher;
}();

exports.default = SWatcher;