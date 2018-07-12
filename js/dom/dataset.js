'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = dataset;

var _uncamelize = require('../utils/string/uncamelize');

var _uncamelize2 = _interopRequireDefault(_uncamelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @TODO : delete this method and find a way to replace it by a polyfill
function dataset(elm, key) {
	var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	if (!elm.getAttribute) return;
	if (!value) {
		return elm.dataset[key] || getAttribute('data-' + (0, _uncamelize2.default)(key));
	} else {
		// try to set the value
		var _dataset = elm.dataset;
		if (_dataset) {
			if (elm.dataset[key]) {
				elm.dataset[key] = value;
			} else {
				// set the data through setAttribute
				elm.setAttribute('data-' + (0, _uncamelize2.default)(key), value);
			}
		} else {
			// set the data through setAttribute
			// cause no support for dataset
			elm.setAttribute('data-' + (0, _uncamelize2.default)(key), value);
		}
		// return the element
		return elm;
	}
}