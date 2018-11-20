'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = sNativeWebComponent;

require('@webcomponents/webcomponentsjs');

require('@webcomponents/webcomponentsjs/custom-elements-es5-adapter');

var _mixwith = require('../vendors/mixwith');

var _SWebComponentMixin = require('./SWebComponentMixin');

var _SWebComponentMixin2 = _interopRequireDefault(_SWebComponentMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sNativeWebComponent(HTMLElementToExtend) {
   if (typeof HTMLElementToExtend !== 'function') {
      var _HTMLElementToExtend = function _HTMLElementToExtend() {};
      _HTMLElementToExtend.prototype = HTMLElementToExtend.prototype;
      HTMLElementToExtend = _HTMLElementToExtend;
   }
   return (0, _mixwith.mix)(HTMLElementToExtend).with(_SWebComponentMixin2.default);
}