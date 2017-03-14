import { mix } from '../vendors/mixwith'
import SWebComponentMixin from './SWebComponentMixin'

if (typeof HTMLInputElement !== 'function'){
    var _HTMLInputElement = function(){};
    _HTMLInputElement.prototype = HTMLInputElement.prototype;
    HTMLInputElement = _HTMLInputElement;
}

export default class SInputWebComponent extends mix(HTMLInputElement).with(SWebComponentMixin) {
}
