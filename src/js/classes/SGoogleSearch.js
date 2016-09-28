import SAjax from '../classes/SAjax'

export default class SGoogleSearch {

	/**
	 * _apiKey
	 * Store the api key used to reach the google services
	 * @type 	{String}
	 */
	_apiKey = null;

	/**
	 * _cx
	 * Store the context key used to reach the good google search instance
	 * @type 	{String}
	 */
	_cx = null;

	/**
	 * _query
	 * Store the actual query object to be able to call
	 * next page etc...
	 * @type 	{Object}
	 */
	_query = null;

	/**
	 * _searchUrl
	 * Store the google search url
	 * @type 	{String}
	 */
	_searchUrl = 'https://www.googleapis.com/customsearch/v1';

	/**
	 * _page
	 * Store the current page
	 * @type 	{Integer}
	 */
	_page = 1;

	/**
	 * _keywords
	 * The keywords searched
	 * @type 	{String}
	 */
	_keywords = null;

	/**
	 * Constructor
	 * @param 	{String} 	apiKey 		The google api key to reach the services
	 * @param 	{String} 	cx 		The google custom search context
	 */
	constructor(apiKey, cx) {
		// save the props
		this._apiKey = apiKey;
		this._cx = cx;
	}

	/**
	 * _generateSearchUrl
	 * Generate and return the correct search url depending on
	 * parameters like the current page, etc...
	 * @return 	{String} 	The generated url
	 */
	_generateSearchUrl() {
		// construct url
		let queryString = '';
		for (let key in this._query) {
			queryString += `&${key}=${this._query[key]}`;
		}
		queryString = queryString.substr(1);
		queryString = `?${queryString}`;

		// process the url
		return this._searchUrl + queryString;
	}

	/**
	 * search
	 * Launch a search
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
			this._query = {
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
	 * next
	 * Load the next page
	 * @return 	{SGoogleSearch}
	 */
	next() {
		// update the page count
		return this.search(this._keywords, {
			...this.query,
			page : this._page + 1
		});
	}

}
