import _get from 'lodash/get'
import SWatcher from '../../classes/SWatcher'

/**
 * Resolve a promise when the wanted property on the passed object exist or pass the check function provided
 *
 * @name 		whenProperty
 * @param 		{Object} 					object 				The object on which to monitor the property
 * @param 		{String} 					property 			The property to monitor
 * @param 		{Function} 					[checkFn=null] 		An optional function to check the property. The promise is resolved when this function return true
 * @return 		(Promise) 										The promise that will be resolved when the property exist on the object (and that it passes the checkFn)
 *
 * @example 	js
 * import whenProperty from 'sugarcss/js/utils/objects/whenProperty'
 *
 * const myObj = {
 *  	title : 'Hello'
 * };
 *
 * whenProperty(myObj, 'title').then((value) => {
 * 		// the object has a title property now
 * });
 *
 * // with a checkFn
 * whenProperty(myObj, 'title', (newVal, oldVal) => {
 * 		// when the property is 'Hello World'
 * 		return newVal === 'Hello World';
 * }).then((value) => {
 * 		// do something with your Hello World
 * });
 *
 * setTimeout(() => {
 * 		// this will resolve the promise
 * 		myObj.title = 'Hello World';
 * },1000);
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function whenProperty(object, property, checkFn = null) {
	return new Promise((resolve, reject) => {

		const value = _get(object, property);
		if (value) {
			if (checkFn && checkFn(value, value)) {
				resolve(value);
				return;
			} else if (! checkFn) {
				resolve(value);
				return;
			}
		}

		const watcher = new SWatcher();
		let ok = false;
		watcher.watch(object, property, (newVal, oldVal) => {
			if (ok) return;
			if (checkFn && checkFn(newVal, oldVal)) {
				ok = true;
				resolve(newVal);
				watcher.destroy();
			} else if ( ! checkFn) {
				ok = true;
				resolve(value);
				watcher.destroy();
			}
		});
	});
}
