import SWebSTemplateComponent from '../../../js/core/SWebSTemplateComponent'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __style from '../../../js/dom/style'
import Flatpickr from 'flatpickr/dist/flatpickr'
import __dispatchEvent from '../../../js/dom/dispatchEvent'
import __isInteger from '../../../js/utils/is/integer'
import __autoCast from '../../../js/utils/string/autoCast'
import SGoogleSearch from '../../../js/classes/SGoogleSearch'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'

export default class SGoogleSearchComponent extends SWebSTemplateComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {

			/**
			 * Keywords to search
			 */
			keywords : null,

			/**
			 * Google api key used to reach the google services
			 * @prop
			 * @type 		{String}
			 */
			apiKey : null,

			/**
			 * Google context to reach the proper custom search instance
			 * @prop
			 * @type 		{String}
			 */
			cx : null
		}
	}

	/**
	 * Template data
	 */
	static get defaultTemplateData() {
		return {

			/**
			 * Keywords that represent the search to make
			 * @templateData
			 * @type 		{String}
			 */
			keywords : '@props.keywords',

			/**
			 * Store the results array
			 * @templateData
			 * @type 		{Array}
			 */
			results : [],

			/**
			 * Flag if there's more results to show or not
			 * @templateData
			 * @type 		{Boolean}
			 */
			noMoreResults : false,

			/**
			 * Next function that can be loaded from the template
			 * to load more results
			 * @templateData
			 * @type 		{Function}
			 */
			next : '@next'
		}
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return []
	}

	/**
	 * Required props
	 * @definition 		SWebComponent.requiredProps
	 */
	static get requiredProps() {
		return ['apiKey','cx'];
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// create the google search instance
		this._googleSearch = new SGoogleSearch(this.props.apiKey, this.props.cx);
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
		const search = this._googleSearch.search(keywords, {
			num : 10
		});
		// listen for end of search to set data
		// into template
		search.then((response) => {

			if ( ! response.queries || ! response.queries.nextPage) {
				this.templateData.noMoreResults = true;
			} else {
				this.templateData.noMoreResults = false;
			}

			if (response.items && response.items.length) {
				// save the results into data
				this.templateData.results = response.items;
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
				this.templateData.noMoreResults = true;
			} else {
				this.templateData.noMoreResults = false;
			}
			if (response.items && response.items.length) {
				// add the results into data
		    	this.templateData.results = this.templateData.results.concat(response.items);
			}
		});
		return search;
	}

	/**
	 * Template will receive data
	 * @definition 		SWebTemplateComponent.templateWillReceiveData
	 */
	templateWillReceiveData(name, newVal, oldVal) {
		// if we have any keywords
		switch(name) {
			case 'keywords':
				if (newVal) {
					this.search(newVal);
				} else {
					this.templateData.results = [];
				}
			break;
		}
	}

	/**
	 * Should template update
	 */
	shouldTemplateUpdate(nextData) {
		const keys = Object.keys(nextData);
		if (keys.length === 1 && keys[0] === 'keywords') return false;
		return true;
	}
}

// register component
SWebSTemplateComponent.define('s-google-search', SGoogleSearchComponent);
