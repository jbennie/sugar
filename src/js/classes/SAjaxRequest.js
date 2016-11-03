/**
 * @class 		SAjaxRequest
 * Class that represent an ajax request that will be passed to an SAjax instance
 *
 * @example 	js
 * const request = new SAjaxRequest({
 *  	url : '/api/...',
 *  	method : 'GET',
 *  	data : {
 *  		myVar : 'myVal'
 *  	}
 * });
 *
 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
 */
export default class SAjaxRequest {

	/**
	 * The url to call
	 * @type 	{String}
	 */
	_url = null;

	/**
	 * The request method to use like GET, POST, DELETE or PUT
	 * @type 		{String}
	 * @default 	GET
	 */
	method = 'GET';

	/**
	 * Use the CORS or not (only for IE)
	 * @type 		{Boolean}
	 * @default 	true
	 */
	cors = true;

	/**
	 * Use the cache or not
	 * @type 		{Boolean}
	 * @default 	true
	 */
	cache = true;

	/**
	 * The data that will be sent with the request in JSON format
	 * @type 		{Object}
	 * @default 	null
	 */
	data = null;

	/**
	 * The data type expected from the response
	 * Accepted dataType are : text | json | html
	 * @type 		{String}
	 * @default 	text
	 */
	dataType = 'text';

	/**
	 * Set the content type header to send with the request
	 * @type 		{String}
	 * @default 	null
	 */
	contentType = null;

	/**
	 * Set the X-Requested-With header
	 * @type 		{String}
	 * @default 	XMLHttpRequest
	 */
	requestedWith = 'XMLHttpRequest';

	/**
	 * Set the Authorization header
	 * @type 		{String}
	 * @default 	null
	 */
	auth = null;

	/**
	 * Set additional headers to send with the request
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

	/**
	 * Get the url
	 */
	get url() {
		return unescape(this._url);
	}

	/**
	 * Set the url
	 */
	set url(value) {
		this._url = value;
	}
}
