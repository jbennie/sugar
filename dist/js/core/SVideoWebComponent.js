'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixwith = require('../vendors/mixwith');

var _SWebComponentMixin = require('./SWebComponentMixin');

var _SWebComponentMixin2 = _interopRequireDefault(_SWebComponentMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof HTMLVideoElement !== 'function') {
    var _HTMLVideoElement = function _HTMLVideoElement() {};
    _HTMLVideoElement.prototype = HTMLVideoElement.prototype;
    HTMLVideoElement = _HTMLVideoElement;
}

var SVideoWebComponent = function (_mix$with) {
    _inherits(SVideoWebComponent, _mix$with);

    function SVideoWebComponent() {
        _classCallCheck(this, SVideoWebComponent);

        return _possibleConstructorReturn(this, (SVideoWebComponent.__proto__ || Object.getPrototypeOf(SVideoWebComponent)).apply(this, arguments));
    }

    return SVideoWebComponent;
}((0, _mixwith.mix)(HTMLVideoElement).with(_SWebComponentMixin2.default));

exports.default = SVideoWebComponent;