import querySelectorLive from './querySelectorLive'
import SElement from '../core/SElement'
import __closest from './closest'
import __whenAttribute from './whenAttribute'
export default function querySelectorTemplateLive(selector, settings = {}) {

	// set SElement init dependencies
	SElement.registerInitDependency((element) => {
		return new Promise((resolve, reject) => {
			const closestTemplate = __closest(element.elm, selector);
			if (closestTemplate) {
				__whenAttribute(closestTemplate, 's-template-dirty').then((elm) => {
					resolve();
				});
			} else {
				resolve();
			}
		});
	});
	// return the querySelectorLive
	return querySelectorLive(selector, settings);
}
