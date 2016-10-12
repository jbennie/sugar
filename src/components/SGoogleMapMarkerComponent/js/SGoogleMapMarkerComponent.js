import SGoogleComponent from '../../SGoogleComponent';

class SGoogleMapMarkerComponent extends SGoogleComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sGoogleMapMarker', type, settings);
	}

	/**
	 * _marker
	 * Store the marker instance in which to attach the marker
	 * @type 	{Map}
	 */
	_marker = null;

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sGoogleMapMarker') {

		// init component
		super(elm, {

			/**
			 * The settings of this component are the exact same as the
			 * google map marker options
			 */

			 ...settings

		}, name);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		// watch settings to set new map options
		this.watchSettings((newVal, oldVal, updated) => {
			// set marker options
			this._setMarkerOptions(newVal);
		});
	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SGoogleMapMarkerComponent}
	 */
	enable() {
		// add the marker to the map
		// load the map api
		if ( ! this._marker) {
			this._initMarker();
		} else {
			this._marker.setMap(this.settings.map);
		}
		super.enable();
		return this;
	}

	/**
	 * disable
	 * Disable the component
	 * @return 	{SGoogleMapMarkerComponent}
	 */
	disable() {
		// remove the marker
		this._marker.setMap(null);
		super.disable();
		return this;
	}

	/**
	 * _initMarker
	 * @return {void}
	 */
	_initMarker() {
		this._marker = new this._google.maps.Marker(this.settings);
	}

	/**
	 * _setMarkerOptions
	 * @param 	{Object} 	options 	The new marker options
	 * @return	{void}
	 */
	_setMarkerOptions(options) {
		if ( ! this._marker) return;
		this._marker.setOptions(options);
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SGoogleMapMarkerComponent = SGoogleMapMarkerComponent;

// export modules
export default SGoogleMapMarkerComponent;
