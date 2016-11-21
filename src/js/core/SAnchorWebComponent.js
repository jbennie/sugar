import { mix } from 'mixwith'
import SWebComponentMixin from './SWebComponentMixin'

if (typeof HTMLAnchorElement !== 'function'){
    var _HTMLAnchorElement = function(){};
    _HTMLAnchorElement.prototype = HTMLAnchorElement.prototype;
    HTMLAnchorElement = _HTMLAnchorElement;
}

export default class SAnchorWebComponent extends mix(HTMLAnchorElement).with(SWebComponentMixin) {
}
