'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = sNativeWebComponent;

require('document-register-element');

require('@ungap/custom-elements-builtin');

var _mixwith = require('../vendors/mixwith');

var _SWebComponentMixin = require('./SWebComponentMixin');

var _SWebComponentMixin2 = _interopRequireDefault(_SWebComponentMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import '@webcomponents/webcomponentsjs'
// import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
function sNativeWebComponent(HTMLElementToExtend) {

	HTMLElementToExtend = function (OriginalHTMLElement) {
		function BabelHTMLElement() {
			if (typeof Reflect == 'undefined' || typeof Reflect.construct != 'function' || typeof customElements == 'undefined') {
				// Use your favorite polyfill.
			}
			var newTarget = this.__proto__.constructor;
			return Reflect.construct(OriginalHTMLElement, [], newTarget);
		}
		Object.setPrototypeOf(BabelHTMLElement, OriginalHTMLElement);
		Object.setPrototypeOf(BabelHTMLElement.prototype, OriginalHTMLElement.prototype);
		return BabelHTMLElement;
	}(HTMLElementToExtend);

	if (typeof HTMLElementToExtend !== 'function') {
		var _HTMLElementToExtend = function _HTMLElementToExtend() {};
		_HTMLElementToExtend.prototype = HTMLElementToExtend.prototype;
		HTMLElementToExtend = _HTMLElementToExtend;
	}

	return (0, _mixwith.mix)(HTMLElementToExtend).with(_SWebComponentMixin2.default);
}