import fastdom from 'fastdom'

console.log('coco');

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
							console.log('eneter', field);
							if (field.hasAttribute('onenter')) {
								eval(field.getAttribute('onenter'));
							}
						break;
						case 27:
							if (field.hasAttribute('onescape')) {
								eval(field.getAttribute('onescape'));
							}
						break;
					}
				}

				// if (field.type && (field.type === 'checkbox' || field.type === 'radio')) return;
				// if (field.value && ! field.hasAttribute('has-value')) {
				// 	field.setAttribute('has-value', true);
				// 	field.removeAttribute('empty');
				// } else if ( ! field.value && field.hasAttribute('has-value')) {
				// 	field.removeAttribute('has-value');
				// 	if ( ! field.hasAttribute('empty')) {
				// 		field.setAttribute('empty', true);
				// 	}
				// }
				// if (field.value && ! field.hasAttribute('dirty')) {
				// 	field.setAttribute('dirty', true);
				// }
			});
		break;
	}
}

document.addEventListener('change', handleInputAttributes);
document.addEventListener('keyup', handleInputAttributes);
