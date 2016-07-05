import SMix from './SMix'
import SWatchable from '../mixins/SWatchable'

export default class SObject extends SMix(SWatchable).in(class {}) {
	/**
	 * Constructor
	 */
	constructor() {
		super(...arguments);
	}
}
