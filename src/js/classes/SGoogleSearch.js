/**
 * @class 		SGoogleSearch
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

import SAjax from '../classes/SAjax'

export default class SGoogleSearch {

	/**
	 * Store the api key used to reach the google services
	 * @private
	 * @name 		_apiKey
	 * @type 		{String}
	 */
	_apiKey = null;

	/**
	 * Store the context key used to reach the good google search instance
	 * @private
	 * @name 		_cx
	 * @type 		{String}
	 */
	_cx = null;

	/**
	 * Store the actual query object to be able to call
	 * next page etc...
	 * @private
	 * @name 		_settings
	 * @type 		{Object}
	 */
	_settings = {

		/**
		 * How many results by page wanted
		 * Can be between 1 and 10
		 * @setting
		 * @name 		num
		 * @type 		{Integer}
		 * @default 	10
		 */
		num : 10,

		/**
		 * The page to request
		 * @setting
		 * @name 		page
		 * @type 		{Integer}
		 * @default 	1
		 */
		page : 1

	};

	/**
	 * Store the google search url
	 * @private
	 * @name 		_searchUrl
	 * @type 		{String}
	 */
	_searchUrl = 'https://www.googleapis.com/customsearch/v1';

	/**
	 * Store the current page
	 * @private
	 * @name 		_page
	 * @type 		{Integer}
	 */
	_page = 1;

	/**
	 * The keywords searched
	 * @private
	 * @name 		_keywords
	 * @type 		{String}
	 */
	_keywords = null;

	/**
	 * @constructor
	 * @param 	{String} 	apiKey 		The google api key to reach the services
	 * @param 	{String} 	cx 			The google custom search context
	 */
	constructor(apiKey, cx) {
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
	_generateSearchUrl() {
		// construct url
		let queryString = '';
		for (let key in this._settings) {
			queryString += `&${key}=${this._settings[key]}`;
		}
		queryString = queryString.substr(1);
		queryString = `?${queryString}`;

		// process the url
		return this._searchUrl + queryString;
	}

	/**
	 * Launch a search
	 * @name 	search
	 * @param 	{String} 	keywords 	The keywords to search
	 * @param 	{Object} 	settings 	The settings object
	 * @return 	{Promise} 				A promise of results
	 */
	search(keywords, settings = {}) {
		return new Promise((resolve, reject) => {

			// save the keywords into the instance
			this._keywords = keywords;

			// reset the page count
			this._page = settings.page || 1;

			// construct query object
			const num = settings.num || 10;
			this._settings = {
				key : this._apiKey,
				cx : this._cx,
				q : keywords,
				num : num,
				start : ((this._page - 1) * num) + 1,
				...settings
			};

			// get the url
			const url = this._generateSearchUrl();

			// process to the ajax query
			const ajx = new SAjax({
				method : 'GET',
				url : url,
				dataType : 'JSON'
			});
			ajx.send().then((response) => {
				// resolve the promise
				resolve(response);
			}, (error) => {
				// reject the promise
				reject(error);
			});
		});
	}

	/**
	 * Load the next page
	 * @name 		next
	 * @return 		{Promise} 		The promise of next page results
	 */
	next() {
		// update the page count
		return this.search(this._keywords, {
			...this.query,
			page : this._page + 1
		});
	}

}
