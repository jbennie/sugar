import STemplateWebComponent from '../../../js/core/STemplateWebComponent'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __style from '../../../js/dom/style'
import Flatpickr from 'flatpickr/dist/flatpickr'
import __dispatchEvent from '../../../js/dom/dispatchEvent'
import __isInteger from '../../../js/utils/is/integer'
import __autoCast from '../../../js/utils/string/autoCast'
import SGoogleSearch from '../../../js/classes/SGoogleSearch'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'

export default class SGoogleSearchComponent extends STemplateWebComponent {

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
			next : '@next',

			/**
			 * Flag is the search is busy
			 * @templateData
			 * @type 		{Boolean}
			 */
			isBusy : false
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

		// initial search if a keywords if specified
		if (this.props.keywords) this.search(this.props.keywords);
	}

	/**
	 * search
	 * Process the search
	 * @param 	{String} 	keywords 	The keywords to search
	 * @param 	{Object} 	settings 	The query settings
	 * @return 	{Promise} 				A promise object
	 */
	search(keywords, settings) {

		// busy
		this.templateData.isBusy = true;

		// process the search
		const search = this._googleSearch.search(keywords, {
			num : 10
		});
		// listen for end of search to set data
		// into template
		search.then((response) => {

			// budy status
			this.templateData.isBusy = false;

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
				this.templateData.results = [];
				if (newVal) {
					this.search(newVal);
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
