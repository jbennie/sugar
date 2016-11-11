import __autoCast from '../utils/string/autoCast'
export default class SCache {

	/**
	 * Store the cache name
	 * @type 		{String}
	 */
	name = null;

	/**
	 * Store the cache object
	 * @type 		{Object}
	 */
	cache = {};

	/**
	 * @constructor
	 * @param 		{String} 		name 		The name of the cache
	 */
	constructor(name, settings = {}) {
		// set the cache name
		this.name = name;
		this.settings = {
			lifetime : 3600 * 24,
			maxItems : 2000,
			strategy : 'LRU',
			...settings
		}
	}

	/**
	 * Get a value from the cache
	 * @param 		{String} 		id 		The id of the cache element to retreive
	 * @return 		{Mixed} 				The cache value or null if not exist
	 */
	get(id) {
		// get the data into the storage
		const cacheObj = this.cache[id];
		if ( ! cacheObj) return;
		// check the lifetime
		if (this.now > cacheObj.expire) {
			// delete the cache item
			delete this.cache[id];
			// save the cache
			this.save();
			// we not have any cache left
			return null;
		}
		// otherwise, the value is valid so return it
		return __autoCast(cacheObj.value);
	}

	/**
	 * Get the now timestamp
	 * @return 		{Integer} 					The timestamp of now
	 */
	get now() {
		return Math.round(new Date().getTime() / 1000);
	}

	/**
	 * Set a value in the cache
	 * @param 		{String} 		id 			The id of the cache element to set
	 * @param 		{Mixed} 		value 		The value to set in cache
	 * @param 		{Integer} 		lifetime	The lifetime of this value in cache
	 */
	set(id, value, lifetime = null) {
		let cacheObj = {};
		// check if already have this item to update if
		// if (this.cache[id]) {
		// 	cacheObj = this.cache[id];
		// 	// update the cache
		// 	cacheObj = {
		// 		...cacheObj,
		// 		value,
		// 		updated : this.now
		// 	}
		// } else {
			// create the cache object that need to be stored
			cacheObj = {
				id,
				value,
				lifetime : lifetime || this.settings.lifetime,
				expire : this.now + (lifetime || this.settings.lifetime),
				created : this.now,
				updated : null
			};
			// set the cache object into cache
			this.cache[id] = cacheObj;
		// }
		// save the cache
		this.save();
		// return the value to store
		return cacheObj;
	}
}
