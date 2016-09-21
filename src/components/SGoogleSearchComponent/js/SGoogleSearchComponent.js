import STemplateComponent from '../../STemplateComponent';
import querySelectorLive from '../../../js/dom/querySelectorLive'
import SGoogleSearch from '../../../js/classes/SGoogleSearch'

class SGoogleSearchComponent extends STemplateComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sGoogleSearch', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sGoogleSearch') {

		// init component
		super(elm, {

			/**
			 * apiKey
			 * The api key used to reach the google services
			 * @type 	{String}
			 */
			apiKey : null,

			/**
			 * cx
			 * The context key used to reach the google custom search instance
			 * @type 	{String}
			 */
			cx : null,

			/**
			 * keywords
			 * The keywords to use for the search
			 * @type 	{String}
			 */
			keywords : '',

			/**
			 * data
			 * The data used in the template
			 * @type 	{Object}
			 */
			data : {

				// the keywords
				keywords : '@settings.keywords',

				// results
				results : [],

				// noMoreResults
				noMoreResults : false

			},

			// extend with passed settings
			...settings
		}, name);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		// check the settings
		if ( ! this.settings.apiKey) {
			throw `You need to specify the "apiKey" setting in order to use the SGoogleSearchComponent`;
		}
		if ( ! this.settings.cx) {
			throw `You need to specify the "cx" setting in order to use the SGoogleSearchComponent`;
		}

		// create the google search instance
		this._googleSearch = new SGoogleSearch(this.settings.apiKey, this.settings.cx);

		// listen for change in keywords
		this.watch('data.keywords', (newVal, oldVal) => {
			if ( ! newVal) {
				this.data.results = [];
				return;
			}
			console.log('new val', newVal);
			// process search
			this.search(newVal);
		});
	}

	/**
	 * search
	 * Process the search
	 * @param 	{String} 	keywords 	The keywords to search
	 * @param 	{Object} 	settings 	The query settings
	 * @return 	{Promise} 				A promise object
	 */
	search(keywords, settings) {

		// process the search
		const search = this._googleSearch.search(this.data.keywords, {
			num : 10
		});
		// listen for end of search to set data
		// into template
		search.then((response) => {

			if ( ! response.queries || ! response.queries.nextPage) {
				this.data.noMoreResults = true;
			} else {
				this.data.noMoreResults = false;
			}

			if (response.items && response.items.length) {
				// save the results into data
				this.data.results = response.items;
			}
		});
		// return the search promise
		return search;
	}

	/**
	 * next
	 * Load the next results
	 * @return 	{Promise} 		A promise object
	 */
	next() {
		const search = this._googleSearch.next();
		search.then((response) => {
			if ( ! response.queries || ! response.queries.nextPage) {
				this.data.noMoreResults = true;
			} else {
				this.data.noMoreResults = false;
			}
			if (response.items && response.items.length) {
				// add the results into data
		    	this.data.results = this.data.results.concat(response.items);
			}
		});
		return search;
	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SGoogleSearchComponent}
	 */
	enable() {
		// enable parent
		super.enable();
		// maintain chainability
		return this;
	}

	/**
	 * disable
	 * Disable the component
	 * @return 	{SGoogleSearchComponent}
	 */
	disable() {
		// disable parent
		super.disable();
		// maintain chainability
		return this;
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SGoogleSearchComponent = SGoogleSearchComponent;

// export modules
export default SGoogleSearchComponent;
