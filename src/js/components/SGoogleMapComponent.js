import SGoogleComponent from '../core/SGoogleComponent';
import querySelectorLive from './../dom/querySelectorLive'
import SGoogleMapMarkerComponent from './SGoogleMapMarkerComponent'
import __camelize from './../string/camelize'

class SGoogleMapComponent extends SGoogleComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sGoogleMap', type, settings);
	}

	/**
	 * _map
	 * Store the map instance
	 * @type 	{Map}
	 */
	_map = null;

	/**
	 * _markers
	 * Store the markers for this map
	 * @type 	{Array}
	 */
	_markers = [];

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sGoogleMap') {

		// init component
		super(name, elm, {

			/**
			 * The settings of this component are the exact same as the
			 * google map options
			 */

			/**
			 * zoom
			 * Set the initial zoom of the map
			 * @type 	{integer}
			 */
			zoom : 4

		}, settings);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		// create the map container
		this._mapElm = document.createElement('div');
		this._mapElm.setAttribute('s-google-map-map', true);
		this._mapElm.setAttribute('s-template-exclude', true);
		this._mapElm.style.position = 'absolute';
		this._mapElm.style.top = 0;
		this._mapElm.style.left = 0;
		this._mapElm.style.width = '100%';
		this._mapElm.style.height = '100%';

		// init the map
		this._initMap();

		// listen for markers
		querySelectorLive(`[${this.name_dash}-marker]`, {
			rootNode : this.elm,
			onNodeRemoved : (node) => {
				// remove the marker from the stack
				this._markers.forEach((marker, index) => {
					if (marker.elm === node) {
						this._markers.splice(index, 1);
					}
				});
				console.warn('removed', node, this._markers);
			}
		}).once().subscribe((elm) => {
			console.warn('new marker', elm);
			this._markers.push(new SGoogleMapMarkerComponent(elm, {
				map : this._map
			}, __camelize(`${this.name_dash}-marker`)));
		});

		// watch settings to set new map options
		this.watchSettings((newVal, oldVal, updated) => {
			// set map options
			this._setMapOptions(newVal);
		});
	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SGoogleMapComponent}
	 */
	enable() {
		// append the map element
		this.append(this._mapElm);
		// maintain chainability
		return this;
	}

	/**
	 * disable
	 * Disable the component
	 * @return 	{SGoogleMapComponent}
	 */
	disable() {
		// remove the map
		this.remove(this._mapElm);
		// maintain chainability
		return this;
	}

	/**
	 * _initMap
	 * @return {void}
	 */
	_initMap() {
		this._map = new this._google.maps.Map(this._mapElm, this.settings);
	}

	/**
	 * _setMapOptions
	 * @return	{void}
	 */
	_setMapOptions(options) {
		if ( ! this._map) return;
		this._map.setOptions(options);
	}

	/**
	 * map
	 * Access the google map instance
	 * @return 	{Map} 	The google map instance
	 */
	get map() {
		return this._map;
	}

	/**
	 * markers
	 * Access the google map markers
	 * @return 	{Array} 	The array of markers
	 */
	get markers() {
		return this._markers;
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SGoogleMapComponent = SGoogleMapComponent;

// export modules
export default SGoogleMapComponent;
