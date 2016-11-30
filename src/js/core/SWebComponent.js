import { mix } from '../vendors/mixwith'
import SWebComponentMixin from './SWebComponentMixin'
if (typeof HTMLElement !== 'function'){
    var _HTMLElement = function(){};
    _HTMLElement.prototype = HTMLElement.prototype;
    HTMLElement = _HTMLElement;
}
export default class SWebComponent extends mix(HTMLElement).with(SWebComponentMixin) {

	/**
	 * Constructor
	 */
	constructor() { super(); }
}
