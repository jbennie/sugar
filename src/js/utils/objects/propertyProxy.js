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
 * @param 		{Boolean} 		applySetterAtStart 	If need to apply the descriptor setter directly on the current value or not
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
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function propertyProxy(obj, property, descriptor, applySetterAtStart = true) {

	// store the current value
	let val = _get(obj, property);
	let currentDescriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

	// custom setter check
	const _set = (value) => {

		if (descriptor.set) {
			value = descriptor.set(value);
		}

		// descriptor
		if (currentDescriptor && currentDescriptor.set) {
			let ret = currentDescriptor.set(value);
			if (ret) {
				val = ret;
			} else {
				val = currentDescriptor.get();
			}
		} else {
			val = value;
		}
	}

	// apply the setter if needed
	if (applySetterAtStart) _set(val);

	// make sure we have the good descriptor
	let d = Object.getOwnPropertyDescriptor(obj, property);
	Object.defineProperty(obj, property, {
		get : () => {
			let _val = val;
			if (descriptor.get) {
				_val = descriptor.get(_val);
			}
			if (currentDescriptor && currentDescriptor.get) {
				_val = currentDescriptor.get();
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
		configurable : descriptor.configurable !== undefined ? descriptor.configurable :
							currentDescriptor && currentDescriptor.configurable !== undefined ? currentDescriptor.configurable : false,
		enumarable : descriptor.enumarable !== undefined ? descriptor.enumarable :
							currentDescriptor && currentDescriptor.enumarable !== undefined ? currentDescriptor.enumarable : true,
		// writable : currentDescriptor && currentDescriptor.writable !== undefined ? currentDescriptor.writable : true
	});

	// return the value
	return val;

}
