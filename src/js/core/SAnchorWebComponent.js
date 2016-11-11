import { mix } from './sMix'
import SWebComponentMixin from './SWebComponentMixin'

export default class SAnchorWebComponent extends mix(HTMLAnchorElement).with(SWebComponentMixin) {
}
