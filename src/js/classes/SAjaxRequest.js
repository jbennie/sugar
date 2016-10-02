/**
 * Class that represent an ajax request that will be passed to an SAjax instance
 * @class SAjaxRequest
 * @example js
 * const request = new SAjaxRequest({
 *  	url : '/api/...',
 *  	method : 'GET',
 *  	data : {
 *  		myVar : 'myVal'
 *  	}
 * });
 */
export default class SAjaxRequest {

	/**
	 * The url to call
	 * @name 	url
	 * @type 	{String}
	 */
	url = null;

	/**
	 * The request method to use like GET, POST, DELETE or PUT
	 * @name 		methods
	 * @type 		{String}
	 * @default 	GET
	 */
	method = 'GET';

	/**
	 * Use the CORS or not (only for IE)
	 * @name 		cors
	 * @type 		{Boolean}
	 * @default 	true
	 */
	cors = true;

	/**
	 * Use the cache or not
	 * @name 		cache
	 * @type 		{Boolean}
	 * @default 	true
	 */
	cache = true;

	/**
	 * The data that will be sent with the request in JSON format
	 * @name 		data
	 * @type 		{Object}
	 * @default 	null
	 */
	data = null;

	/**
	 * The data type expected from the response
	 * Accepted dataType are : text | json | html
	 * @name 		dataType
	 * @type 		{String}
	 * @default 	text
	 */
	dataType = 'text';

	/**
	 * Set the content type header to send with the request
	 * @name 		contentType
	 * @type 		{String}
	 * @default 	null
	 */
	contentType = null;

	/**
	 * Set the X-Requested-With header
	 * @name 		requestedWith
	 * @type 		{String}
	 * @default 	XMLHttpRequest
	 */
	requestedWith = 'XMLHttpRequest';

	/**
	 * Set the Authorization header
	 * @name 		auth
	 * @type 		{String}
	 * @default 	null
	 */
	auth = null;

	/**
	 * Set additional headers to send with the request
	 * @name 		headers
	 * @type 		{Object}
	 * @default 	null
	 */
	headers = null;

	/**
	 * @constructor
	 * @param 	{Object} 	params 		The request params
	 */
	constructor(params) {
		// check parameters
		if ( ! this._checkParams(params)) return;
		// set the parameters
		Object.assign(this, params);
	}

	/**
	 * Check the parameters passed to the request
	 * @private
	 * @name 	_checkParams
	 * @param 	(Object) 	params 	 	The request params
	 * @return 	{Boolean} 				True if params are ok, false if
	 */
	_checkParams(params) {
		// loop on each params
		for (let key in params) {
			if ( ! this.hasOwnProperty(key)) {
				throw `The SAjaxRequest does not support the passed "${key}" parameter...`;
				return false;
			}
		}
		// all ok
		return true;
	}
}
