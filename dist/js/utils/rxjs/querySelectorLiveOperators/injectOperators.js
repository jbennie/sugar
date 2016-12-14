'use strict';

exports.__esModule = true;

exports.default = function (destination) {
	destination.once = _once2.default;
	destination.visible = _visible2.default;
	destination.inViewport = _inViewport2.default;
	destination.group = _group2.default;
	destination.notIn = _notIn2.default;
	destination.mouseover = _mouseover2.default;
	destination.stack = _stack2.default;
};

var _once = require('./once');

var _once2 = _interopRequireDefault(_once);

var _visible = require('./visible');

var _visible2 = _interopRequireDefault(_visible);

var _inViewport = require('./inViewport');

var _inViewport2 = _interopRequireDefault(_inViewport);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _notIn = require('./notIn');

var _notIn2 = _interopRequireDefault(_notIn);

var _mouseover = require('./mouseover');

var _mouseover2 = _interopRequireDefault(_mouseover);

var _stack = require('./stack');

var _stack2 = _interopRequireDefault(_stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;