import { mix } from './sMix'
import SWebComponentMixin from './SWebComponentMixin'

export default class SWebComponent extends mix(HTMLElement).with(SWebComponentMixin) {

	/**
	 * Constructor
	 */
	constructor() { super(); }
}
