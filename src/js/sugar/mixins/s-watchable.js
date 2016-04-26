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
	 * Tell that something has changed
	 */
	notify(propertyPath, newValue, oldValue) {
		if (this._watchStack[propertyPath] && newValue !== oldValue) {
			this._watchStack[propertyPath].forEach((cb) => {
				cb(newValue, oldValue);
			});	
		}
	}

	_defineProp(currentObj, property, currentSplitPath, currentValue) {
		let val = currentValue;
		Object.defineProperty(currentObj, property, {
			get : () => val,
			set : (value) => {
				const oldValue = val;
				val = value;
				this.notify(`${currentSplitPath}.${property}`, val, oldValue);
				// currentObj[property] = value;
				// console.log('set', property, currentSplitPath, value);
				// const oldValue = this._watchValues[currentSplitPath][property];
				// if (oldValue !== value) {
				// 	this._watchValues[currentSplitPath][property] = value;
				// }
				// notify update
				// this.notify(currentSplitPath, value, oldValue);
			}
		});
		// return currentObj;
	}

	/**
	 * Update something that need to be notified
	 */
	watchable(path, value = null) {

		// check if already has a value
		const currentValue = (() => {
			try {
				return eval(`this.${path}`);
			} catch(e) {}
		}).call(this);
		// const ccccc = (() => {
		// 	try {
		// 		let sp = path.split('.');
		// 		sp.pop();
		// 		return eval(`this.${sp.join('.')}`);
		// 	} catch(e) {}
		// }).call(this);
		// console.log('JUIHIUHUIHUIH', ccccc);

		if ( ! value && currentValue) {
			value = currentValue;
		}

		// create the tree if needed
		let splitParts = path.split('.'),
			splitPartsLength = splitParts.length,
			currentSplitParts = [],
			currentSplitPath = null,
			currentObj = {},
			firstObj = null,
			currentWatchValues = this._watchValues;
		for (let i=0; i<splitPartsLength; i++) {

			currentSplitParts.push(splitParts[i]);
			currentSplitPath = currentSplitParts.join('.');


			

			// console.log(i, splitParts[i]);

			// currentObj = newObject;

			// // if ( ! currentObj) currentObj = {};
			// if (i == 0) newObject = this;
			// // else newObject = {};

			// Object.defineProperty(newObject, splitParts[i], {
			// 	get : () => currentObj[splitParts[i]],
			// 	set : (value) => {
			// 		currentObj[splitParts[i]] = value;
			// 	}
			// });

			// // new current object
			// newObject =  

			// console.log()

			
			if (splitParts[i+1]) {
				this._defineProp(currentObj, splitParts[i+1], currentSplitPath, value);
				// this._watchValues[currentSplitPath] = currentObj;
				if (i <= 0) {
					firstObj = currentObj;
				}
				// try to get the current object
				let co = (() => {
					try {
						return eval(`this.${currentSplitPath}`);
					} catch(e) {}
				}).call(this);
				console.warn('COOO', currentSplitPath, co);

				currentObj = co || {};

			} else {
				// this._watchValues[currentSplitPath] = value;

				Object.defineProperty(this, splitParts[0], {
					get : () => firstObj,
					set : (value) => {
						const oldValue = firstObj;
						// this._watchValues[splitParts[0]] = value;
						// notify update
						this.notify(splitParts[0], value, oldValue);
					}
				})

			}
			// currentObj = this

			// // this._watchValues[currentSplitPath] = currentObj;
			// if (currentObj === this) {
			// 	currentObj = {};
			// }
			// // } else {
			// // 	currentObj == this._watchValues[currentSplitPath];
			// // }
			// this._watchValues[currentSplitPath] = currentObj;
			
			



			// if ( ! currentObj[splitParts[i]]) {
			// 	currentObj[splitParts[i]] = {};
			// 	currentWatchValues[currentSplitParts.join('.')] = currentObj[splitParts[i]];

			// 	console.log(currentObj);
			// 	console.log(currentWatchValues);

			// 	Object.defineProperty(currentObj, splitParts[i], {
			// 		get : () => {
			// 		 	return currentWatchValues[currentSplitParts.join('.')];
			// 		},
			// 		set : (value) => {
			// 			currentWatchValues[currentSplitParts.join('.')] = value;
			// 			// currentObj[splitParts[i]] = value;
			// 		}
			// 	})
			// 	currentObj = currentObj[splitParts[i]];
			// 	// currentWatchValues = currentWatchValues[splitParts[i]];
			// }


			// currentSplitParts.push(splitParts[i]);
			// if ( ! currentObj[splitParts[i]]) {
			// 	currentObj[splitParts[i]] = {};
			// 	currentWatchValues[currentSplitParts.join('.')] = currentObj[splitParts[i]];

			// 	console.log(currentObj);
			// 	console.log(currentWatchValues);

			// 	Object.defineProperty(currentObj, splitParts[i], {
			// 		get : () => {
			// 		 	return currentWatchValues[currentSplitParts.join('.')];
			// 		},
			// 		set : (value) => {
			// 			currentWatchValues[currentSplitParts.join('.')] = value;
			// 			// currentObj[splitParts[i]] = value;
			// 		}
			// 	})
			// 	currentObj = currentObj[splitParts[i]];
			// 	// currentWatchValues = currentWatchValues[splitParts[i]];
			// }
		}

		// set the property on the object itself

		// console.log('COCO', this.coco);


		// register the setter
		

		// console.log('currentValue', currentValue);

		// new watchable value
		


		// loop through each modified elements
		// let splitParts = what.split('.');
		// const splitPartsLength = splitParts.length - 1;
		// for (let i = splitPartsLength; i>=0; i--) {
			
		// 	const splitPath = splitParts.join('.');
		// 	let oldValue = (() => {
		// 		return eval(`this.${splitPath}`);
		// 	}).call(this);
		// 	if (typeof(oldValue) == 'object') {
		// 		oldValue = {...{},...oldValue};
		// 	}

		// 	// set the new value only if is the targeted
		// 	// one
		// 	if (i >= splitPartsLength) {
		// 		// set the new value
		// 		if (typeof(value) == 'string') {
		// 			(() => {
		// 				eval(`this.${splitPath} = "${value}";`);
		// 			}).call(this);
		// 		} else {
		// 			(() => {
		// 				eval(`this.${what} = ${value};`);
		// 			}).call(this);
		// 		}
		// 		// handle if is an attribute
		// 		// and the this.elm exist
		// 		// if ( ! fromMutation && splitParts[0] == 'attr' && splitParts[1] && this.elm) {
		// 		// 	this.elm.setAttribute(sString.uncamelize(splitParts[1],'-'), value);
		// 		// }
		// 	}

		// 	let newValue = (() => {
		// 		eval(`this.${splitPath}`);
		// 	}).call(this);

		// 	// notify of new value
		// 	this.notify(this[splitPath], value, oldValue);

		// 	// pop splitpart
		// 	splitParts.pop();
		// }
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