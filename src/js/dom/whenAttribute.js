import __attributesObservable from './attributesObservable'
import __autoCast from '../utils/string/autoCast'

/**
 * Resolve a promise when the wanted attribute on the passed HTMLElement exist or pass the check function provided
 *
 * @name 		whenAttribute
 * @param 		{HTMLElement} 				elm 				The HTMLElement on which to monitor the property
 * @param 		{String} 					attribute 			The attribute to monitor
 * @param 		{Function} 					[checkFn=null] 		An optional function to check the attribute. The promise is resolved when this function return true
 * @return 		(Promise) 										The promise that will be resolved when the attribute exist on the element (and that it passes the checkFn)
 *
 * @example 	js
 * import whenAttribute from 'sugarcss/js/dom/whenAttribute'
 * whenAttribute(myCoolHTMLElement, 'value').then((value) => {
 * 		// the value attribute exist on the element
 * });
 * // with a checkFn
 * whenAttribute(myCoolHTMLElement, 'value', (newVal, oldVal) => {
 * 		// make sure the value is a number
 * 		return typeof(newVal) === 'number';
 * }).then((value) => {
 * 		// do something with your number value...
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function whenAttribute(elm, attrName, checkFn = null) {
	return new Promise((resolve, reject) => {

		if (elm.hasAttribute(attrName)) {
			const value = __autoCast(elm.getAttribute(attrName));
			if (checkFn && checkFn(value, value)) {
				resolve(value);
				return;
			} else if ( ! checkFn) {
				resolve(value);
				return;
			}
		}

		const obs = __attributesObservable(elm).subscribe((mutation) => {
			if (mutation.attributeName === attrName) {
				const value = __autoCast(mutation.target.getAttribute(mutation.attributeName));
				if (checkFn && checkFn(value, mutation.oldValue)) {
					resolve(value);
					obs.unsubscribe();
				} else if ( ! checkFn) {
					resolve(value);
					obs.unsubscribe();
				}
			}
		});
	});
}
