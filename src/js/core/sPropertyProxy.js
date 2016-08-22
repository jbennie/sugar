import _get from 'lodash/get';

export default function sPropertyProxy(obj, property, desc) {

	// store the current value
	let val = null;
	let descriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

	// custom setter check
	const _set = (value) => {
		if (descriptor && descriptor.set) {
			let ret = descriptor.set(value);
			if (ret) {
				if (desc.set) {
					val = desc.set(value);
				} else {
					val = ret;
				}
			} else {
				if (desc.set) {
					val = desc.set(descriptor.get());
				} else {
					val = descriptor.get();
				}
			}
		} else {
			if (desc.set) {
				val = desc.set(value);
			} else {
				val = value;
			}
		}
	}

	// set the value
	_set(_get(obj, property));

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
		},
		configurable : descriptor && descriptor.configurable !== undefined ? descriptor.configurable : false,
		enumarable : descriptor && descriptor.enumarable !== undefined ? descriptor.enumarable : true,
		// writable : descriptor && descriptor.writable !== undefined ? descriptor.writable : true
	});

	// set the value the first time
	obj[property] = _get(obj, property);

}
