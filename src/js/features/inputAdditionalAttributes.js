import sTemplateIntegrator from '../core/sTemplateIntegrator'
import fastdom from 'fastdom'

function handleInputAttributes(e) {
	if ( ! e.target || ! e.target.tagName) return;
	switch(e.target.tagName) {
		case 'INPUT':
		case 'TEXTAREA':
		case 'SELECT':
			fastdom.mutate(() => {
				if (e.type && (e.type === 'checkbox' || e.type === 'radio')) return;
				if (e.target.value && ! e.target.hasAttribute('has-value')) {
					e.target.setAttribute('has-value', true);
					e.target.removeAttribute('empty');
				} else if ( ! e.target.value && e.target.hasAttribute('has-value')) {
					e.target.removeAttribute('has-value');
					if ( ! e.target.hasAttribute('empty')) {
						e.target.setAttribute('empty', true);
					}
				}
				if (e.target.value && ! e.target.hasAttribute('dirty')) {
					e.target.setAttribute('dirty', true);
				}
			});
		break;
	}
}
document.addEventListener('change', handleInputAttributes);
document.addEventListener('keyup', handleInputAttributes);

sTemplateIntegrator.registerComponentIntegration(['HTMLInputElement','HTMLSelectElement'], (input) => {
	sTemplateIntegrator.ignore(input, {
		"has-value" : true,
		empty : true,
		dirty : true
	});
});
