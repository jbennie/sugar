import { mix } from '../vendors/mixwith'
import SWebComponentMixin from './SWebComponentMixin'

export default class SAnchorWebComponent extends mix(HTMLAnchorElement).with(SWebComponentMixin) {
}
