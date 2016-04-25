import sString from '../core/s-string'

export default (superclass) => class SWatchable extends superclass {

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

	/**
	 * Watch something on the element
	 */
	watch(what, cb) {
		// register new watch
		if ( ! this._watchStack[what]) {
			this._watchStack[what] = [];
		}
		this._watchStack[what].push(cb);
	}

	/**
	 * Update something that need to be notified
	 */
	set(what, value, fromMutation = false) {

		// loop through each modified elements
		let splitParts = what.split('.');
		const splitPartsLength = splitParts.length - 1;
		for (let i = splitPartsLength; i>=0; i--) {
			
			const splitPath = splitParts.join('.');
			let oldValue = (() => {
				return eval(`this.${splitPath}`);
			}).call(this);
			if (typeof(oldValue) == 'object') {
				oldValue = {...{},...oldValue};
			}

			// set the new value only if is the targeted
			// one
			if (i >= splitPartsLength) {
				// set the new value
				if (typeof(value) == 'string') {
					(() => {
						eval(`this.${splitPath} = "${value}";`);
					}).call(this);
				} else {
					(() => {
						eval(`this.${what} = ${value};`);
					}).call(this);
				}
				// handle if is an attribute
				// and the this.elm exist
				if ( ! fromMutation && splitParts[0] == 'attr' && splitParts[1] && this.elm) {
					this.elm.setAttribute(sString.uncamelize(splitParts[1],'-'), value);
				}
			}

			let newValue = (() => {
				eval(`this.${splitPath}`);
			}).call(this);

			// check if has some registerer
			if (this._watchStack[splitPath]) {
				this._watchStack[splitPath].forEach((cb) => {
					cb(newValue, oldValue);
				});
			}

			// pop splitpart
			splitParts.pop();
		}

		
	}

	/**
	 * Unset a value
	 */
	unset(what) {
		// get the current value
		const oldValue = eval(`this.${what}`);
		// unset the value
		eval(`delete this.${what}`);
		// check if has some registerer
		if (this._watchStack[what]) {
			this._watchStack[what].forEach((cb) => {
				cb(undefined, oldValue);
			});
		}
	}
}