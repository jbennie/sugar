'use strict';

var _fastdom = require('fastdom');

var _fastdom2 = _interopRequireDefault(_fastdom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleInputAttributes(eOrElm) {
	var field = eOrElm.target ? eOrElm.target : eOrElm;
	if (!field || !field.tagName) return;
	switch (field.tagName) {
		case 'INPUT':
		case 'TEXTAREA':
		case 'SELECT':
			_fastdom2.default.mutate(function () {
				if (field.type && (field.type === 'checkbox' || field.type === 'radio')) return;
				if (field.value && !field.hasAttribute('has-value')) {
					field.setAttribute('has-value', true);
					field.removeAttribute('empty');
				} else if (!field.value) {
					field.removeAttribute('has-value');
					field.removeAttribute('value');
					if (!field.hasAttribute('empty')) {
						field.setAttribute('empty', true);
					}
				}
				if (field.value && !field.hasAttribute('dirty')) {
					field.setAttribute('dirty', true);
				}
			});
			break;
	}
}

function handleFormReset(e) {
	// loop on each form elements
	[].forEach.call(e.target.elements, function (field) {
		// reset the field attributes
		handleInputAttributes(field);
		// remove dirty attribute
		_fastdom2.default.mutate(function () {
			field.removeAttribute('dirty');
		});
	});
}

document.addEventListener('change', handleInputAttributes);
document.addEventListener('keyup', handleInputAttributes);
document.addEventListener('reset', handleFormReset);