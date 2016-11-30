import sTemplateIntegrator from '../core/sTemplateIntegrator'
import fastdom from 'fastdom'

function handleInputAttributes(eOrElm) {
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
				} else if ( ! field.value && field.hasAttribute('has-value')) {
					field.removeAttribute('has-value');
					if ( ! field.hasAttribute('empty')) {
						field.setAttribute('empty', true);
					}
				}
				if (field.value && ! field.hasAttribute('dirty')) {
					field.setAttribute('dirty', true);
				}
			});
		break;
	}
}

function handleFormReset(e) {
	// loop on each form elements
	[].forEach.call(e.target.elements, (field) => {
		// reset the field attributes
		handleInputAttributes(field);
		// remove dirty attribute
		fastdom.mutate(() => {
			field.removeAttribute('dirty');
		});
	});
}

document.addEventListener('change', handleInputAttributes);
document.addEventListener('keyup', handleInputAttributes);
document.addEventListener('reset', handleFormReset);

sTemplateIntegrator.registerComponentIntegration([HTMLInputElement,HTMLSelectElement], (input) => {
	sTemplateIntegrator.ignore(input, {
		"has-value" : true,
		empty : true,
		dirty : true
	});
});
