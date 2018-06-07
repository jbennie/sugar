/**
 * @name 	inputAdditionalEvents
 * Add some events on some DOM Elements. Here's the list:
 * **input/textarea**: `onenter`, `onescape`
 * @example 	js
 * import 'coffeekraken-sugar/js/features/inputAdditionalEvents'
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

import fastdom from 'fastdom'
import __dispatchEvent from '../dom/dispatchEvent'

function handleInputAttributes(e) {
	const field = e.target ? e.target : e;
	if ( ! field || ! field.tagName) return;
	switch(field.tagName) {
		case 'INPUT':
		case 'TEXTAREA':
			fastdom.mutate(() => {
				if (e.keyCode) {
					switch(e.keyCode) {
						case 13: // enter
							if (field.hasAttribute('onenter')) {
								eval(field.getAttribute('onenter'));
								__dispatchEvent(field, 'onenter');
							}
						break;
						case 27:
							if (field.hasAttribute('onescape')) {
								eval(field.getAttribute('onescape'));
								__dispatchEvent(field, 'onescape');
							}
						break;
					}
				}
			});
		break;
	}
}

document.addEventListener('change', handleInputAttributes);
document.addEventListener('keyup', handleInputAttributes);
