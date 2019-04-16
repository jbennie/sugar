"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = sNativeWebComponent;

require("document-register-element");

require("@ungap/custom-elements-builtin");

var _mixwith = require("../vendors/mixwith");

var _SWebComponentMixin = require("./SWebComponentMixin");

var _SWebComponentMixin2 = _interopRequireDefault(_SWebComponentMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import isSamsumgBrowser from "../utils/is/samsungBrowser";
// import isUcBrowser from "../utils/is/ucBrowser";

// import isSafari from "../utils/is/safari";
var extendsStack = {};
function sNativeWebComponent(HTMLElementToExtend) {
	// if (!isSafari() && !isSamsumgBrowser() && !isUcBrowser()) {
	HTMLElementToExtend = function (OriginalHTMLElement) {
		if (!window[OriginalHTMLElement.name]) return OriginalHTMLElement;
		if (extendsStack[OriginalHTMLElement.name]) return extendsStack[OriginalHTMLElement.name];
		function BabelHTMLElement() {
			var newTarget = this.__proto__.constructor;
			return Reflect.construct(OriginalHTMLElement, [], newTarget);
		}
		Object.setPrototypeOf(BabelHTMLElement, OriginalHTMLElement);
		Object.setPrototypeOf(BabelHTMLElement.prototype, OriginalHTMLElement.prototype);
		extendsStack[HTMLElementToExtend.name] = BabelHTMLElement;
		return BabelHTMLElement;
	}(HTMLElementToExtend);
	// }


	return (0, _mixwith.mix)(HTMLElementToExtend).with(_SWebComponentMixin2.default);
}