// import { mix } from '../vendors/mixwith'
// import SWebComponentMixin from './SWebComponentMixin'

import native from './sNativeWebComponent'
export default class SAnchorWebComponent extends native(HTMLAnchorElement) {}

// if (typeof HTMLAnchorElement !== 'function'){
//     var _HTMLAnchorElement = function(){};
//     _HTMLAnchorElement.prototype = HTMLAnchorElement.prototype;
//     HTMLAnchorElement = _HTMLAnchorElement;
// }
//
// export default class SAnchorWebComponent extends mix(HTMLAnchorElement).with(SWebComponentMixin) {
// }
