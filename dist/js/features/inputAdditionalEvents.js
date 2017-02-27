'use strict';

var _fastdom = require('fastdom');

var _fastdom2 = _interopRequireDefault(_fastdom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('coco');

function handleInputAttributes(e) {
	var field = e.target ? e.target : e;
	if (!field || !field.tagName) return;
	switch (field.tagName) {
		case 'INPUT':
		case 'TEXTAREA':
			_fastdom2.default.mutate(function () {
				if (e.keyCode) {
					switch (e.keyCode) {
						case 13:
							// enter
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