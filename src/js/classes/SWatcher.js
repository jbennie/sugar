import __constructorName from '../utils/objects/constructorName'
import _get from 'lodash/get';
import _set from 'lodash/set';

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
export default class SWatcher {

	// static setters = {
	// 	CSSStyleDeclaration : (obj, property, value) => {
	// 		obj.setProperty(property, value);
	// 	}
	// }

	/**
	 * Watch stack
	 * @type 		{Object}
	 */
	_watchStack = {};

	/**
	 * @constructor
	 */
	constructor() {
	}

	/**
	 * Destroy the watcher
	 */
	destroy() {
		// @TODO watcher destroy implementation
	}

	/**
	 * Internal implementation of the defineProp
	 * @param 		{Object} 	obj 		The object to watch
	 * @param 		{String} 	property 	The property of the object to watch
	 * @param 		{Mixed} 	value 		The initial value of the property
	 * @param 		{String} 	objPath 	The object property path to watch
	 */
	_defineProp(obj, property, value, objPath) {

		// do not define multiple time the description
		if (this._watchStack[objPath]) return;

		// store the current value
		let val = value;
		let descriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

		// custom setter check
		const _set = (value) => {
			// check if have a custom setter for this object
			// if (customSetter) {
			// 	customSetter(obj, property, value);
			// 	val = value;
			// }
			// descriptor
			if (descriptor && descriptor.set) {
				let ret = descriptor.set(value);
				if (ret) {
					val = ret;
				} else {
					val = descriptor.get();
				}
			} else {
				val = value;
			}

			// apply the proxy for arrays, etc...
			val = this._applyProxy(val, objPath, (newVal) => {
				val = newVal;
			});
		}

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
		let d = Object.getOwnPropertyDescriptor(obj, property);
		Object.defineProperty(obj, property, {
			get : () => {
				let _val = val;
				if (descriptor && descriptor.get) {
					_val = descriptor.get();
				}
				return _val;
			},
			set : (v) => {
				const oldValue = val;
				// internal set to use the good setter
				_set(v);
				// _notify of new update
				this._notify(objPath, val, oldValue);
			},
			configurable : descriptor && descriptor.configurable !== undefined ? descriptor.configurable : false,
			enumarable : descriptor && descriptor.enumarable !== undefined ? descriptor.enumarable : true,
			// writable : descriptor && descriptor.writable !== undefined ? descriptor.writable : true
		});
	}

	/**
	 * Override some array methods to be able to notify of changes
	 * @param 		{Array} 	array 			The array to process
	 * @param 		{Array} 	methods 		The methods to override
	 * @param 		{String} 	objPath 		The object property path to watch
	 * @param 		{Function} 	setValueCb 		A callback function that will set the updated value
	 */
	_overrideArrayMethod(array, methods, objPath, setValueCb) {
		const _this = this;

		// grab the old value
		const oldVal = array.slice(0);

		// loop on each methods to override
		methods.forEach((method) => {
			array[method] = function() {
				// apply the push
				const ret = Array.prototype[method].apply(this,arguments);
				// set value callback
				setValueCb(this);
				// _notify
				_this._notify(objPath, this, oldVal);
				// return the new value
				return ret;
			}
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
	_applyProxy(value, objPath, setValueCb) {
		// if is an array
		if (value instanceof Array) {
			// override methods
			this._overrideArrayMethod(value, [
				'push','splice','pop','shift','unshift','reverse','sort'
			], objPath, setValueCb);
		}
		return value;
	}

	/**
	 * Watch something on an object
	 * @param 		{Object} 		object 		The object to watch
	 * @param 		{String} 		path 		The property path to watch on the object
	 * @param 		{Function} 		cb 			The callback called when the property is updated
	 */
	watch(object, path, cb) {
		// split the path by ',' to watch multiple properties
		if ( typeof(path) === 'string') {
			path = path.split(',');
		}
		if ( ! path instanceof Array) {
			throw "The 'path' parameter has to be a string or an array...";
		}
		// loop on each path to watch
		path.forEach((p) => {
			this._watch(object, p.trim(), cb);
		});
	}

	/**
	 * Internal watch$
	 * @param 		{Object} 		object 		The object to watch
	 * @param 		{String} 		path 		The property path to watch on the object
	 * @param 		{Function} 		cb 			The callback called when the property is updated
	 */
	_watch(object, path, cb) {
		// check if the path parameter has already a descriptor
		const split = path.split('.');
		let obj = object;
		let property = null;
		if (split.length > 1) {
			property = split.pop();
			obj = _get(object, split.join('.'));
		} else {
			property = split[0];
		}
		let currentValue = null;
		currentValue = _get(object, path);

		// if is undefined, create the value at null
		if ( obj === undefined || currentValue === undefined) {
			_set(obj, path, null);
			// _set(this, split.join('.'),null);
			// throw `It's not possible to watch the property ${path} cause it does not exist...`;
		};

		// define the property proxy
		this._defineProp(obj, property, currentValue, path);

		// register new watch
		if ( ! this._watchStack[path]) {
			this._watchStack[path] = [];
		}
		this._watchStack[path].push(cb);
	}

	/**
	 * Tell that something has changed
	 * @param 		{String} 		path 		The object property path that has been updated
	 * @param 		{Mixed} 		newValue 	The new property value
	 * @param 		{Mixed} 		oldValue 	The old property value
	 */
	_notify(path, newValue, oldValue) {
		if (this._watchStack[path] !== undefined && newValue !== oldValue) {
			this._watchStack[path].forEach((cb) => {
				cb(newValue, oldValue);
			});
		}
	}
}
