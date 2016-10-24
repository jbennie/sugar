import querySelectorLive from './querySelectorLive'
import SElement from '../core/SElement'
import __closest from './closest'
import __whenAttribute from './whenAttribute'
import __matches from './matches'

const templateSelectors = [];

export default function querySelectorTemplateLive(selector, settings = {}) {

	// register the dependency only 1 time
	if ( ! templateSelectors.length) {

		// set SElement init dependencies
		SElement.registerInitDependency((api) => {
			return new Promise((resolve, reject) => {
				const elementId = api.elm.getAttribute('s-element');

				// build the selectors array to check if the element
				// is inside any template instance
				const selectors = templateSelectors.map((sel) => {
					return `${sel} [s-element="${elementId}"]`;
				});

				// check if the element is not inside any of the registered templates
				// meaning that we have to init it directly
				if ( ! __matches(api.elm, selectors.join(','))) {
					resolve();
					return;
				}

				// get the closest template instance
				// to wait when it is dirty (rendered)
				const closestTemplate = __closest(api.elm, templateSelectors.join(','));
				if (closestTemplate) {
					__whenAttribute(closestTemplate, 's-template-dirty').then((elm) => {
						resolve();
					});
				} else {
					resolve();
				}
			});
		});
	}

	// append new selector if needed
	if (templateSelectors.indexOf(selector) === -1) {
		templateSelectors.push(selector);
	}

	// return the querySelectorLive
	return querySelectorLive(selector, settings);
}
