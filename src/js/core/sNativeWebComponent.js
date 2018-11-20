import '@webcomponents/webcomponentsjs'
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'
import { mix } from '../vendors/mixwith'
import SWebComponentMixin from './SWebComponentMixin'
export default function sNativeWebComponent(HTMLElementToExtend) {
	if (typeof HTMLElementToExtend !== 'function'){
    	var _HTMLElementToExtend = function(){};
    	_HTMLElementToExtend.prototype = HTMLElementToExtend.prototype;
    	HTMLElementToExtend = _HTMLElementToExtend;
	}
	return mix(HTMLElementToExtend).with(SWebComponentMixin);
}
