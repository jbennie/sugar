import _get from 'lodash/get'

export default function propertyProxy(obj, property, _descriptor) {

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

	_set(val);

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
