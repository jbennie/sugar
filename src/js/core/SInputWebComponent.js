import { mix } from '../vendors/mixwith'
import SWebComponentMixin from './SWebComponentMixin'

export default class SInputWebComponent extends mix(HTMLInputElement).with(SWebComponentMixin) {

	/**
	 * Constructor
	 */
	constructor() { super(); }
}
