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
	 * @name 	lifetime
	 * The lifetime in second of the cache items by default. Can be set individually by cache item
	 * @setting
	 * @type 	{Integer}
	 * @default 	86400
	 */

	/**
	 * @constructor
	 * @param 		{String} 		name 		The name of the cache
	 * @param 		{Object} 		[settings={}] 	The cache settings
	 */
	constructor(name, settings = {}) {
		// set the cache name
		this.name = name;
		this.settings = {
			lifetime : 3600 * 24,
			...settings
		}
	}

	/**
	 * @name 	get
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
			this._save();
			// we not have any cache left
			return null;
		}
		// otherwise, the value is valid so return it
		return __autoCast(cacheObj.value);
	}

	/**
	 * @name 	now
	 * Get the now timestamp
	 * @return 		{Integer} 					The timestamp of now
	 */
	get now() {
		return Math.round(new Date().getTime() / 1000);
	}

	/**
	 * @name 	set
	 * Set a value in the cache
	 * @param 		{String} 		id 			The id of the cache element to set
	 * @param 		{Mixed} 		value 		The value to set in cache
	 * @param 		{Integer} 		lifetime	The lifetime of this value in cache
	 */
	set(id, value, lifetime = null) {
		let cacheObj = {};
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
		// save the cache
		this._save();
		// return the value to store
		return cacheObj;
	}
}
