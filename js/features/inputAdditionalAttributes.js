"use strict";

var _fastdom = require("fastdom");

var _fastdom2 = _interopRequireDefault(_fastdom);

var _querySelectorLive = require("../dom/querySelectorLive");

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function handleInputAttributes(eOrElm) {
	var setDirty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	var forceDirty = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	var field = eOrElm.target ? eOrElm.target : eOrElm;
	if (!field || !field.tagName) return;
	switch (field.tagName) {
		case "INPUT":
		case "TEXTAREA":
		case "SELECT":
			_fastdom2.default.mutate(function () {
				if (field.type && (field.type === "checkbox" || field.type === "radio")) return;
				if (field.value && !field.hasAttribute("has-value")) {
					field.setAttribute("has-value", true);
					field.removeAttribute("empty");
				} else if (field.value === undefined || field.value === null || field.value === "") {
					field.removeAttribute("has-value");
					field.removeAttribute("value");
					if (!field.hasAttribute("empty")) {
						field.setAttribute("empty", true);
					}
				}
				if (setDirty) {
					if (!field.hasAttribute("dirty") && (field.value || forceDirty)) {
						field.setAttribute("dirty", true);
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
		handleInputAttributes(field, true, true);
		// stop here if is a submit
		if (e.type === "submit") return;
		// remove dirty attribute
		_fastdom2.default.mutate(function () {
			field.removeAttribute("dirty");
		});
	});
}

(0, _querySelectorLive2.default)('select, textarea, input:not([type="submit"])', function (elm) {
	handleInputAttributes(elm, false);
});

document.addEventListener("change", handleInputAttributes);
document.addEventListener("keyup", handleInputAttributes);
document.addEventListener("reset", handleFormSubmitOrReset);
document.addEventListener("submit", handleFormSubmitOrReset);