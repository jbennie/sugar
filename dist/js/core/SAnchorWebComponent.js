'use strict';

exports.__esModule = true;

var _mixwith = require('../vendors/mixwith');

var _SWebComponentMixin = require('./SWebComponentMixin');

var _SWebComponentMixin2 = _interopRequireDefault(_SWebComponentMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof HTMLAnchorElement !== 'function') {
    var _HTMLAnchorElement = function _HTMLAnchorElement() {};
    _HTMLAnchorElement.prototype = HTMLAnchorElement.prototype;
    HTMLAnchorElement = _HTMLAnchorElement;
}

var SAnchorWebComponent = function (_mix$with) {
    _inherits(SAnchorWebComponent, _mix$with);

    function SAnchorWebComponent() {
        _classCallCheck(this, SAnchorWebComponent);

        return _possibleConstructorReturn(this, _mix$with.apply(this, arguments));
    }

    return SAnchorWebComponent;
}((0, _mixwith.mix)(HTMLAnchorElement).with(_SWebComponentMixin2.default));

exports.default = SAnchorWebComponent;