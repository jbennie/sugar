import { mix } from '../vendors/mixwith'
import SWebComponentMixin from './SWebComponentMixin'

if (typeof HTMLVideoElement !== 'function'){
    var _HTMLVideoElement = function(){};
    _HTMLVideoElement.prototype = HTMLVideoElement.prototype;
    HTMLVideoElement = _HTMLVideoElement;
}

export default class SVideoWebComponent extends mix(HTMLVideoElement).with(SWebComponentMixin) {
}
