

export default (superclass) => class SWatchableAttributes extends superclass {

	/**	
	 * Constructor
	 */
	constructor() {
		super(...arguments);

		// setTimeout(() => {

			// make sure we have an 'attr' attribute
			// on the object
			if ( ! this.attr) {
				this.attr = {};
			}

			
		// });
	}
}