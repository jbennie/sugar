'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _SAjax = require('../classes/SAjax');

var _SAjax2 = _interopRequireDefault(_SAjax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @name 		SGoogleSearch
                                                                                                                                                           * This class let you make with ease search requests to the google custom search service
                                                                                                                                                           * with useful features like:
                                                                                                                                                           * - Simple pagination system
                                                                                                                                                           * - Promise support
                                                                                                                                                           *
                                                                                                                                                           * @example 	js
                                                                                                                                                           * // create a google search instance
                                                                                                                                                           * const googleSearch = new SGoogleSearch('myApiKey', 'myCustomSearchContextKey');
                                                                                                                                                           *
                                                                                                                                                           * // make a search...
                                                                                                                                                           * googleSearch.search('hello world').then((response) => {
                                                                                                                                                           * 		// do something with the google response...
                                                                                                                                                           * });
                                                                                                                                                           *
                                                                                                                                                           * // get the nexts results
                                                                                                                                                           * googleSearch.next().then((response) => {
                                                                                                                                                           * 		// do something with the new response...
                                                                                                                                                           * });
                                                                                                                                                           *
                                                                                                                                                           * @see 		https://developers.google.com/custom-search/
                                                                                                                                                           * @author 		Olivier Bossel<olivier.bossel@gmail.com>
                                                                                                                                                           */

var SGoogleSearch = function () {

	/**
  * @constructor
  * @param 	{String} 	apiKey 		The google api key to reach the services
  * @param 	{String} 	cx 			The google custom search context
  */


	/**
  * Store the current page
  * @private
  * @name 		_page
  * @type 		{Integer}
  */


	/**
  * Store the actual query object to be able to call
  * next page etc...
  * @private
  * @name 		_settings
  * @type 		{Object}
  */


	/**
  * Store the api key used to reach the google services
  * @private
  * @name 		_apiKey
  * @type 		{String}
  */
	function SGoogleSearch(apiKey, cx) {
		_classCallCheck(this, SGoogleSearch);

		this._apiKey = null;
		this._cx = null;
		this._settings = {

			/**
    * How many results by page wanted
    * Can be between 1 and 10
    * @setting
    * @name 		num
    * @type 		{Integer}
    * @default 	10
    */
			num: 10,

			/**
    * The page to request
    * @setting
    * @name 		page
    * @type 		{Integer}
    * @default 	1
    */
			page: 1

		};
		this._searchUrl = 'https://www.googleapis.com/customsearch/v1';
		this._page = 1;
		this._keywords = null;

		// save the props
		this._apiKey = apiKey;
		this._cx = cx;
	}

	/**
  * Generate and return the correct search url depending on
  * parameters like the current page, etc...
  * @private
  * @name 				_generateSearchUrl
  * @return 	{String} 	The generated url
  */


	/**
  * The keywords searched
  * @private
  * @name 		_keywords
  * @type 		{String}
  */


	/**
  * Store the google search url
  * @private
  * @name 		_searchUrl
  * @type 		{String}
  */


	/**
  * Store the context key used to reach the good google search instance
  * @private
  * @name 		_cx
  * @type 		{String}
  */


	SGoogleSearch.prototype._generateSearchUrl = function _generateSearchUrl() {
		// construct url
		var queryString = '';
		for (var key in this._settings) {
			queryString += '&' + key + '=' + this._settings[key];
		}
		queryString = queryString.substr(1);
		queryString = '?' + queryString;

		// process the url
		return this._searchUrl + queryString;
	};

	/**
  * Launch a search
  * @name 	search
  * @param 	{String} 	keywords 	The keywords to search
  * @param 	{Object} 	settings 	The settings object
  * @return 	{Promise} 				A promise of results
  */


	SGoogleSearch.prototype.search = function search(keywords) {
		var _this = this;

		var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		return new Promise(function (resolve, reject) {

			// save the keywords into the instance
			_this._keywords = keywords;

			// reset the page count
			_this._page = settings.page || 1;

			// construct query object
			var num = settings.num || 10;
			_this._settings = _extends({
				key: _this._apiKey,
				cx: _this._cx,
				q: keywords,
				num: num,
				start: (_this._page - 1) * num + 1
			}, settings);

			// get the url
			var url = _this._generateSearchUrl();

			// process to the ajax query
			var ajx = new _SAjax2.default({
				method: 'GET',
				url: url,
				dataType: 'JSON'
			});
			ajx.send().then(function (response) {
				// resolve the promise
				resolve(response);
			}, function (error) {
				// reject the promise
				reject(error);
			});
		});
	};

	/**
  * Load the next page
  * @name 		next
  * @return 		{Promise} 		The promise of next page results
  */


	SGoogleSearch.prototype.next = function next() {
		// update the page count
		return this.search(this._keywords, _extends({}, this.query, {
			page: this._page + 1
		}));
	};

	return SGoogleSearch;
}();

exports.default = SGoogleSearch;