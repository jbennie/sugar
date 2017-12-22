'use strict';

var _fastdom = require('fastdom');

var _fastdom2 = _interopRequireDefault(_fastdom);

var _querySelectorLive = require('coffeekraken-sugar/js/dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleInputAttributes(eOrElm) {
	var setDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

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
				} else if (field.value === undefined || field.value === null || field.value === '') {
					field.removeAttribute('has-value');
					field.removeAttribute('value');
					if (!field.hasAttribute('empty')) {
						field.setAttribute('empty', true);
					}
				}
				if (setDirty) {
					if (!field.hasAttribute('dirty')) {
						field.setAttribute('dirty', true);
					}
				}
			});
			break;
	}
}

function handleFormSubmitOrReset(e) {
	// loop on each form elements
	[].forEach.call(e.target.elements, function (field) {
		// reset the field attributes
		handleInputAttributes(field);
		// stop here if is a submit
		if (e.type === 'submit') return;
		// remove dirty attribute
		_fastdom2.default.mutate(function () {
			field.removeAttribute('dirty');
		});
	});
}

(0, _querySelectorLive2.default)('select, textarea, input:not([type="submit"])', function (elm) {
	handleInputAttributes(elm, false);
});

document.addEventListener('change', handleInputAttributes);
document.addEventListener('keyup', handleInputAttributes);
document.addEventListener('reset', handleFormSubmitOrReset);
document.addEventListener('submit', handleFormSubmitOrReset);