import SWebTemplateComponent from '../../../js/core/SWebTemplateComponent'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __style from '../../../js/dom/style'
import Flatpickr from 'flatpickr/dist/flatpickr'
import __dispatchEvent from '../../../js/dom/dispatchEvent'
import __isInteger from '../../../js/utils/is/integer'
import __autoCast from '../../../js/utils/string/autoCast'
import SGoogleSearch from '../../../js/classes/SGoogleSearch'

export default class SGoogleSearchComponent extends SWebTemplateComponent {

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
			cx : null,

			/**
			 * The data used in the template
			 * @type 		{Object}
			 */
			data : {

				// the keywords
				keywords : '@props.keywords',

				// results
				results : [],

				// noMoreResults
				noMoreResults : false

			}
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
	 * Component will receive props
	 * @definition 		SWebComponent.componentWillReceiveProps
	 */
	componentWillReceiveProps(nextProps) {
		console.log('next props', nextProps);
	}


	/**
	 * Render
	 * @definition 		SWebComponent.render
	 */
	render() {
		super.render();
		console.log('render', this.props);
	}
}

// register component
SWebTemplateComponent.define('s-google-search', SGoogleSearchComponent);
