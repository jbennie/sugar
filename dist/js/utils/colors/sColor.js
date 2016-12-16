'use strict';

exports.__esModule = true;
exports.default = sColor;

var _SColor = require('../../classes/SColor');

var _SColor2 = _interopRequireDefault(_SColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sColor(color) {
	return new _SColor2.default(color);
}