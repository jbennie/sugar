import _get from 'lodash/get'
/**
 * Create a proxy for and object property.
 * This gives you the possibility to process the data of the property
 * when it is getted or setted.
 *
 * @name 		propertyProxy
 * @param 		{Object} 		obj 			The object on which to create the proxy
 * @param 		{String} 		property 		The property name that will be proxied
 * @param 		{Object} 		descriptor 		A descriptor object that contains at least a get or a set method, or both
 * @param 		{Boolean} 		applySetter 	If need to apply the descriptor setter directly on the current value or not
 *
 * @example 	js
 * const myObject = {
 * 		title : 'World'
 * };
 * // create the proxy
 * propertyProxy(myObject, 'title', {
 * 		get : (value) => {
 * 			return `Hello ${value}`;
 * 		},
 * 		set : (value) => {
 * 			return `Youhou ${value}`;
 * 		}
 * });
 * console.log(myObject.title) => 'Hello World';
 * myObject.title = 'Universe';
 * console.log(myObject.title) => 'Hello Youhou Universe';
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function propertyProxy(obj, property, _descriptor, applySetter = true) {

	// store the current value
	let val = _get(obj, property);
	let descriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

	// custom setter check
	const _set = (value) => {

		if (_descriptor.set) {
			value = _descriptor.set(value);
		}

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
	}

	// apply the setter if needed
	if (applySetter) _set(val);

	// make sure we have the good descriptor
	let d = Object.getOwnPropertyDescriptor(obj, property);
	Object.defineProperty(obj, property, {
		get : () => {
			let _val = val;
			if (_descriptor.get) {
				_val = _descriptor.get(_val);
			}
			if (descriptor && descriptor.get) {
				_val = descriptor.get();
			}
			return _val;
		},
		set : (v) => {
			// const oldValue = val;
			// internal set to use the good setter
			_set(v);
			// notify of new update
			// this.notify(objPath, val, oldValue);
		},
		configurable : descriptor && descriptor.configurable !== undefined ? descriptor.configurable : false,
		enumarable : descriptor && descriptor.enumarable !== undefined ? descriptor.enumarable : true,
		// writable : descriptor && descriptor.writable !== undefined ? descriptor.writable : true
	});

	// return the value
	return val;

}
