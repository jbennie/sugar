'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var SAjaxRequest = function () {

	/**
  * @constructor
  * @param 	{Object} 	params 		The request params
  */


	/**
  * Set the Authorization header
  * @type 		{String}
  */


	/**
  * Set the content type header to send with the request
  * @type 		{String}
  */


	/**
  * The data that will be sent with the request in JSON format
  * @type 		{Object}
  */


	/**
  * Use the CORS or not (only for IE)
  * @type 		{Boolean}
  */


	/**
  * The url to call
  * @type 	{String}
  */
	function SAjaxRequest(params) {
		_classCallCheck(this, SAjaxRequest);

		this.url = null;
		this.method = 'GET';
		this.cors = true;
		this.cache = true;
		this.data = null;
		this.dataType = 'text';
		this.contentType = null;
		this.requestedWith = 'XMLHttpRequest';
		this.auth = null;
		this.headers = null;

		// check parameters
		if (!this._checkParams(params)) return;
		// set the parameters
		Object.assign(this, params);
	}

	/**
  * Check the parameters passed to the request
  * @param 	(Object) 	params 	 	The request params
  * @return 	{Boolean} 				True if params are ok, false if
  */


	/**
  * Set additional headers to send with the request
  * @type 		{Object}
  */


	/**
  * Set the X-Requested-With header
  * @type 		{String}
  */


	/**
  * The data type expected from the response
  * Accepted dataType are : text | json | html
  * @type 		{String}
  */


	/**
  * Use the cache or not
  * @type 		{Boolean}
  */


	/**
  * The request method to use like GET, POST, DELETE or PUT
  * @type 		{String}
  */


	_createClass(SAjaxRequest, [{
		key: '_checkParams',
		value: function _checkParams(params) {
			// loop on each params
			for (var key in params) {
				if (!this.hasOwnProperty(key)) {
					throw 'The SAjaxRequest does not support the passed "' + key + '" parameter...';
					return false;
				}
			}
			// all ok
			return true;
		}
	}]);

	return SAjaxRequest;
}();

exports.default = SAjaxRequest;