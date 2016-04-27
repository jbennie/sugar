import sString from '../core/s-string'
import sTools from '../core/s-tools'
let _get = require('lodash/get');

export default (superclass) => class SWatchable extends superclass {

	/**
	 * Setters methods
	 */
	static setters = {
		CSSStyleDeclaration : (obj, property, value) => {
			obj.setProperty(property, value);	
		}
	}

	/**
	 * Watch stack
	 */
	_watchStack = {};

	/**	
	 * Constructor
	 */
	constructor() {
		super(...arguments);
	}

	_defineProp(obj, property, value, objPath) {

		// do not define multiple time the description
		if (this._watchStack[objPath]) return;

		// const o = obj;
		// console.warn('_defineProp', o, property, value, objPath);

		let val = value;
		let descriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);
		
		// get the setter
		let customSetter;
		for (let name in SWatchable.setters) {
			if (sTools.constructorName(obj) === name) {
				customSetter = SWatchable.setters[name];
				break;
			}
		}

		// custom setter check
		const _set = (value) => {
			// check if have a custom setter for this object
			if (customSetter) {
				customSetter(obj, property, value);
				val = value;
			}
			// descriptor
			else if (descriptor && descriptor.set) {
				let ret = descriptor.set(value);
				if (ret) {
					val = ret;
				} else {
					val = descriptor.get();
				}	
			} else {
				val = value;
			}
		}
		
		// make sure we have the good descriptor
		let d = Object.getOwnPropertyDescriptor(obj, property);
		Object.defineProperty(obj, property, {
			get : () => {
				// console.log('get', property);
				if (descriptor && descriptor.get) {
					return descriptor.get();
				}
				return val;
			},
			set : (v) => {
				const oldValue = val;
				// internal set to use the good setter
				_set(v);
				// notify of new update
				this.notify(objPath, val, oldValue);
			},
			configurable : descriptor && descriptor.configurable !== undefined ? descriptor.configurable : false,
			enumarable : descriptor && descriptor.enumarable !== undefined ? descriptor.enumarable : true,
			// writable : descriptor && descriptor.writable !== undefined ? descriptor.writable : true 
		});
	}

	/**
	 * Watch something on the element
	 */
	watch(what, cb) {
		// check if the what parameter has already a descriptor
		const split = what.split('.');
		let obj = this;
		let property = null;
		if (split.length > 1) {
			property = split.pop();
			obj = _get(this, split.join('.'));
		} else {
			property = split[0];
		}
		let currentValue = null;
		currentValue = _get(this, what);
		
		// if is undefined, throw an error
		if ( obj === undefined || currentValue === undefined) {
			throw `It's not possible to watch the property ${what} cause it does not exist...`;
		};

		// define the property proxy		
		this._defineProp(obj, property, currentValue, what);

		// register new watch
		if ( ! this._watchStack[what]) {
			this._watchStack[what] = [];
		}
		this._watchStack[what].push(cb);
	}

	/**
	 * Tell that something has changed
	 */
	notify(propertyPath, newValue, oldValue) {
		if (this._watchStack[propertyPath] && newValue !== oldValue) {
			this._watchStack[propertyPath].forEach((cb) => {
				cb(newValue, oldValue);
			});	
		}
	}
}