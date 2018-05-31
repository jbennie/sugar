'use strict';

var _fastdom = require('fastdom');

var _fastdom2 = _interopRequireDefault(_fastdom);

var _dispatchEvent = require('../dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name 	inputAdditionalEvents
 * Add some events on some DOM Elements. Here's the list:
 * **input/textarea**: `onenter`, `onescape`
 * @exemple 	js
 * import 'coffeekraken-sugar/features/inputAdditionalEvents'
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

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
							if (field.hasAttribute('onenter')) {
								eval(field.getAttribute('onenter'));
								(0, _dispatchEvent2.default)(field, 'onenter');
							}
							break;
						case 27:
							if (field.hasAttribute('onescape')) {
								eval(field.getAttribute('onescape'));
								(0, _dispatchEvent2.default)(field, 'onescape');
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