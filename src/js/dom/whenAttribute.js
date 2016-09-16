import __attributesObservable from './attributesObservable'
import __autoCast from '../string/autoCast'

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
