/**
 * @name 	inputAdditionalAttributes
 * Add some attributes on inputs, textarea and select to help with styling purposes and more.
 * Here's the attributes added:
 * - `has-value`: When the input has a value in it
 * - `empty`: When the input is has no value in it
 * - `dirty`: When the input has been touched
 * @example 	js
 * import 'coffeekraken-sugar/js/features/inputAdditionalAttributes'
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */

import fastdom from 'fastdom'
import __querySelectorLive from '../dom/querySelectorLive'

function handleInputAttributes(eOrElm, setDirty = true) {
	const field = eOrElm.target ? eOrElm.target : eOrElm;
	if ( ! field || ! field.tagName) return;
	switch(field.tagName) {
		case 'INPUT':
		case 'TEXTAREA':
		case 'SELECT':
			fastdom.mutate(() => {
				if (field.type && (field.type === 'checkbox' || field.type === 'radio')) return;
				if (field.value && ! field.hasAttribute('has-value')) {
					field.setAttribute('has-value', true);
					field.removeAttribute('empty');
				} else if (field.value === undefined || field.value === null || field.value === '') {
					field.removeAttribute('has-value');
					field.removeAttribute('value');
					if ( ! field.hasAttribute('empty')) {
						field.setAttribute('empty', true);
					}
				}
				if (setDirty) {
					if ( ! field.hasAttribute('dirty')) {
						field.setAttribute('dirty', true);
					}
				}
			});
		break;
	}
}

function handleFormSubmitOrReset(e) {
	// loop on each form elements
	[].forEach.call(e.target.elements, (field) => {
		// reset the field attributes
		handleInputAttributes(field);
		// stop here if is a submit
		if (e.type === 'submit') return;
		// remove dirty attribute
		fastdom.mutate(() => {
			field.removeAttribute('dirty');
		});
	});
}

__querySelectorLive('select, textarea, input:not([type="submit"])', (elm) => {
	handleInputAttributes(elm, false);
});

document.addEventListener('change', handleInputAttributes);
document.addEventListener('keyup', handleInputAttributes);
document.addEventListener('reset', handleFormSubmitOrReset);
document.addEventListener('submit', handleFormSubmitOrReset);
