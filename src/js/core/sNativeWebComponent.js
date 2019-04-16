import "document-register-element";
import "@ungap/custom-elements-builtin";
// import isSafari from "../utils/is/safari";
import { mix } from "../vendors/mixwith";
import SWebComponentMixin from "./SWebComponentMixin";
// import isSamsumgBrowser from "../utils/is/samsungBrowser";
// import isUcBrowser from "../utils/is/ucBrowser";
const extendsStack = {};
export default function sNativeWebComponent(HTMLElementToExtend) {
	// if (!isSafari() && !isSamsumgBrowser() && !isUcBrowser()) {
		HTMLElementToExtend = (function(OriginalHTMLElement) {
			if (!window[OriginalHTMLElement.name]) return OriginalHTMLElement;
			if (extendsStack[OriginalHTMLElement.name])
				return extendsStack[OriginalHTMLElement.name];
			function BabelHTMLElement() {
				const newTarget = this.__proto__.constructor;
				return Reflect.construct(OriginalHTMLElement, [], newTarget);
			}
			Object.setPrototypeOf(BabelHTMLElement, OriginalHTMLElement);
			Object.setPrototypeOf(
				BabelHTMLElement.prototype,
				OriginalHTMLElement.prototype
			);
			extendsStack[HTMLElementToExtend.name] = BabelHTMLElement;
			return BabelHTMLElement;
		})(HTMLElementToExtend);
	// }


	return mix(HTMLElementToExtend).with(SWebComponentMixin);
}
