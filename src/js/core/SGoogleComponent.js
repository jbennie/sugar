import SComponent from '../core/SComponent';
import GoogleMapsLoader from 'google-maps'

class SGoogleComponent extends SComponent {

	/**
	 * APIKEY
	 * Store the api key used to reach google services
	 * @type 	{String}
	 */
	static APIKEY = null;

	/**
	 * CLIENT
	 * Store the client api id used to reach google services
	 * @type 	{String}
	 */
	static CLIENT = null;

	/**
	 * VERSION
	 * Store the api version to use on google services
	 * @type 	{String}
	 */
	static VERSION = null;

	/**
	 * LIBRARIES
	 * Store the libraries to load
	 * @type 	{Array}
	 */
	static LIBRARIES = null;

	/**
	 * LANGUAGE
	 * Set the language to use
	 * @type 	{String}
	 */
	static LANGUAGE = null;

	/**
	 * REGION
	 * Store the region to use
	 * @type 	{String}
	 */
	static REGION = null;

	/**
	 * Constructor
	 */
	constructor(name, elm, default_settings, settings) {
		// init component
		super(name, elm, default_settings, settings);
	}

	/**
	 * _initDependencies
	 * Return a list of promises to resolve before init the component
	 * @return 	{Array} 	An array of promises to resolve
	 */
	_initDependencies() {
		return [this._loadGoogleApi()];
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();
	}

	/**
	 * _loadGoogleApi
	 * Return a promise that load the google api
	 * @return 	{Promise}
	 */
	_loadGoogleApi() {

		// set some static variables on the google loader
		if (SGoogleComponent.APIKEY) {
			GoogleMapsLoader.KEY = SGoogleComponent.APIKEY;
		}
		if (SGoogleComponent.CLIENT) {
			GoogleMapsLoader.CLIENT = SGoogleComponent.CLIENT;
		}
		if (SGoogleComponent.VERSION) {
			GoogleMapsLoader.VERSION = SGoogleComponent.VERSION;
		}
		if (SGoogleComponent.LIBRARIES) {
			GoogleMapsLoader.LIBRARIES = SGoogleComponent.LIBRARIES;
		}
		if (SGoogleComponent.LANGUAGE) {
			GoogleMapsLoader.LANGUAGE = SGoogleComponent.LANGUAGE;
		}
		if (SGoogleComponent.REGION) {
			GoogleMapsLoader.REGION = SGoogleComponent.REGION;
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
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SGoogleComponent = SGoogleComponent;

// export modules
export default SGoogleComponent;
