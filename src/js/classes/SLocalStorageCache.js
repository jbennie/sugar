import SCache from './SCache';

/**
 * @name 	SLocalStorageCache
 * @extends 	SCache
 * Create a simple localStorage cache
 * @example 	js
 * import SLocalStorageCache from 'coffeekraken-sugar/js/classes/SLocalStorageCache'
 * const myCache = new SLocalStorageCache('my-cache', {
 * 	lifetime: 3600
 * });
 * // set an item into the cache
 * myCache.set('my-cool-item', 'something');
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default class SLocalStorageCache extends SCache {

	/**
	 * Create a new local storage cache
	 *
	 * @constructor
	 * @param 	{String} 	name 			The cache name
	 * @param  	{Object} 	[settings={}]	The cache settings passed to the SCache class
	 */
	constructor(name, settings = {}) {
		super(name, settings);
		// grab the cache
		const ls = localStorage.getItem(this.name);
		if ( ! ls) return;
		this.cache = JSON.parse(ls);
	}

	/**
	 * Save the cache
	 */
	_save() {
		localStorage.setItem(this.name, JSON.stringify(this.cache));
	}
}
