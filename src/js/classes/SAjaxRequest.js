/**
 * @name 		SAjaxRequest
 * Class that represent an ajax request that will be passed to an SAjax instance
 * @example 	js
 * const request = new SAjaxRequest({
 *  	url : '/api/...',
 *  	method : 'GET',
 *  	data : {
 *  		myVar : 'myVal'
 *  	}
 * });
 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
 */
export default class SAjaxRequest {

	/**
	 * The url to call
	 * @type 	{String}
	 */
	url = null;

	/**
	 * The request method to use like GET, POST, DELETE or PUT
	 * @type 		{String}
	 */
	method = 'GET';

	/**
	 * Use the CORS or not (only for IE)
	 * @type 		{Boolean}
	 */
	cors = true;

	/**
	 * Use the cache or not
	 * @type 		{Boolean}
	 */
	cache = true;

	/**
	 * The data that will be sent with the request in JSON format
	 * @type 		{Object}
	 */
	data = null;

	/**
	 * The data type expected from the response
	 * Accepted dataType are : text | json | html
	 * @type 		{String}
	 */
	dataType = 'text';

	/**
	 * Set the content type header to send with the request
	 * @type 		{String}
	 */
	contentType = null;

	/**
	 * Set the X-Requested-With header
	 * @type 		{String}
	 */
	requestedWith = 'XMLHttpRequest';

	/**
	 * Set the Authorization header
	 * @type 		{String}
	 */
	auth = null;

	/**
	 * Set additional headers to send with the request
	 * @type 		{Object}
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
}
