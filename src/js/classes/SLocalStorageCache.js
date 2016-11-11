import SCache from './SCache';

export default class SLocalStorageCache extends SCache {

	constructor(name) {
		super(name);
		// grab the cache
		const ls = localStorage.getItem(this.name);
		if ( ! ls) return;
		this.cache = JSON.parse(ls);
	}

	/**
	 * Save the cache
	 */
	save() {
		localStorage.setItem(this.name, JSON.stringify(this.cache));
	}
}
