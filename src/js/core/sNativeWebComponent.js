import 'document-register-element'
import '@ungap/custom-elements-builtin'
import isSafari from '../utils/is/safari'
import { mix } from '../vendors/mixwith'
import SWebComponentMixin from './SWebComponentMixin'
export default function sNativeWebComponent(HTMLElementToExtend) {

	if (!isSafari()) {
		HTMLElementToExtend = (function (OriginalHTMLElement) {
			function BabelHTMLElement()
			{
				if (typeof Reflect == 'undefined' || typeof Reflect.construct != 'function' || typeof customElements == 'undefined') {
					// Use your favorite polyfill.
				}
				const newTarget = this.__proto__.constructor;
				return Reflect.construct(OriginalHTMLElement, [], newTarget);
			}
			Object.setPrototypeOf(BabelHTMLElement, OriginalHTMLElement);
			Object.setPrototypeOf(BabelHTMLElement.prototype, OriginalHTMLElement.prototype);
			return BabelHTMLElement;
		})(HTMLElementToExtend);
	}

	if (typeof HTMLElementToExtend !== 'function'){
    	var _HTMLElementToExtend = function(){};
    	_HTMLElementToExtend.prototype = HTMLElementToExtend.prototype;
    	HTMLElementToExtend = _HTMLElementToExtend;
	}

	return mix(HTMLElementToExtend).with(SWebComponentMixin);
}
