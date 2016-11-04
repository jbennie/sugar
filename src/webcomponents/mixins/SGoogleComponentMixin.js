import { Mixin } from 'mixwith'
import GoogleMapsLoader from 'google-maps'

export default Mixin((superclass) => class SGoogleComponent extends superclass {

	/**
	 * Return a list of promises to resolve before init the component
	 * @return 	{Array} 	An array of promises to resolve
	 */
	static get mountDependencies() {
		return [function() {
			return this._loadGoogleApi();
		}];
	}

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {

			/**
			 * Set the api key used to reach the google services
			 * @prop
			 * @type		{String}
			 */
			apiKey : null,

			/**
			 * Set the client api id used to reach google services
			 * @prop
			 * @type 		{String}
			 */
			client : null,

			/**
			 * Set the version of the api to load
			 * @prop
			 * @type		{String}
			 */
			version : null,

			/**
			 * Set the libraries to load
			 * @prop
			 * @type		{Array}
			 */
			libraries : null,

			/**
			 * Set the language to use
			 * @prop
			 * @type  	{String}
			 */
			language : null,

			/**
			 * Store the region to use
			 * @prop
			 * @type 	{String}
			 */
			region : null
		}
	}

	/**
	 * Return a promise that load the google api
	 * @return 	{Promise}
	 */
	_loadGoogleApi() {
		// set some static variables on the google loader
		if (this.props.apiKey) {
			GoogleMapsLoader.KEY = this.props.apiKey;
		}
		if (this.props.client) {
			GoogleMapsLoader.CLIENT = this.props.client;
		}
		if (this.props.version) {
			GoogleMapsLoader.VERSION = this.props.version;
		}
		if (this.props.libraries) {
			GoogleMapsLoader.LIBRARIES = this.props.libraries;
		}
		if (this.props.language) {
			GoogleMapsLoader.LANGUAGE = this.props.language;
		}
		if (this.props.region) {
			GoogleMapsLoader.REGION = this.props.region;
		}
		return new Promise((resolve, reject) => {
			// load the map api
			GoogleMapsLoader.load((google) => {
				// resolve the promise
				resolve(google);
			});
		});
	}

	/**
	 * _google
	 * Get the google api
	 * @type 	{Object}
	 */
	get _google() {
		return window.google;
	}

});
