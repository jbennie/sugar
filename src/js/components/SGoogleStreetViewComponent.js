import SGoogleComponent from '../core/SGoogleComponent';

class SGoogleStreetViewComponent extends SGoogleComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sGoogleStreetView', type, settings);
	}

	/**
	 * _view
	 * Store the street view instance
	 * @type 	{StreetView}
	 */
	_view = null;

	/**
	 * _markers
	 * Store the markers for this map
	 * @type 	{Array}
	 */
	_markers = [];

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sGoogleStreetView') {

		// init component
		super(name, elm, {

			/**
			 * The settings of this component are the exact same as the
			 * google streetview options
			 */

		}, settings);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		// create the map container
		this._viewElm = document.createElement('div');
		this._viewElm.setAttribute('s-google-street-view-view', true);
		this._viewElm.style.position = 'absolute';
		this._viewElm.style.top = 0;
		this._viewElm.style.left = 0;
		this._viewElm.style.width = '100%';
		this._viewElm.style.height = '100%';
		// append a div to prevent the scroll zoom
		this._overlayElm = document.createElement('div');
		this._overlayElm.setAttribute('s-google-street-view-overlay', true);
		this._overlayElm.style.position = 'absolute';
		this._overlayElm.style.top = 0;
		this._overlayElm.style.left = 0;
		this._overlayElm.style.width = '100%';
		this._overlayElm.style.height = '100%';
		this._overlayElm.style.zIndex = 1;
		this._overlayElm.style.cursor = 'pointer';
		this._overlayElm.style.background = 'transparent';

		// search a view
		this._initView();

		// watch settings to set new map options
		this.watchSettings((newVal, oldVal, updated) => {
			// set map options
			this._setVIewOptions(newVal);
		});
	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SGoogleMapComponent}
	 */
	enable() {
		// set the overlay pointer events to all
		this._overlayElm.style.pointerEvents = 'all';
		// listen for mouse leaving the view
		this.elm.addEventListener('mouseleave', this._onMouseLeave.bind(this));
		// listen for click on overlay
		this._overlayElm.addEventListener('click', this._onOverlayClick.bind(this));
		// append the map element
		this.append(this._viewElm);
		this.append(this._overlayElm);
		// maintain chainability
		return this;
	}

	/**
	 * disable
	 * Disable the component
	 * @return 	{SGoogleMapComponent}
	 */
	disable() {
		// do not listen for mouse leaving the view anymore
		this.elm.removeEventListener('mouseleave', this._onMouseLeave);
		// strop listening for click on overlay
		this._overlayElm.removeEventListener('click', this._onOverlayClick);
		// remove the map
		this.remove(this._viewElm);
		this.remove(this._overlayElm);
		// maintain chainability
		return this;
	}

	/**
	 * _onMouseLeave
	 * When the mouse leave the streetview
	 * @param 	{Event} 	e 	The mouse event
	 * @return 	{void}
	 */
	_onMouseLeave(e) {
		this._overlayElm.style.pointerEvents = 'all';
	}

	/**
	 * _onOverlayClick
	 * When the user click on the overlay to activate the streetview
	 * @param 	{Event} 	e 	The click event
	 * @return 	{void}
	 */
	_onOverlayClick(e) {
		// disable the overlay
		e.target.style.pointerEvents = 'none';
	}

	/**
	 * _initView
	 * Init the view with the location found
	 * @param 	{String} 	pano 	The pani id to init
	 * @return 	{void}
	 */
	_initView() {
		this._view = new this._google.maps.StreetViewPanorama(this._viewElm, this.settings);
	}

	/**
	 * _setVIewOptions
	 * @return	{void}
	 */
	_setVIewOptions(options) {
		if ( ! this._view) return;
		this._view.setOptions(options);
	}

	/**
	 * view
	 * Access the google view instance
	 * @return 	{Map} 	The google map instance
	 */
	get view() {
		return this._view;
	}

	// /**
	//  * _searchView
	//  * Process a search with google service to find a streetview near the location or pano passed
	//  * @return {void}
	//  */
	// _searchView() {
	//
	// 	// use the StreetViewService instance to find the closer streetview pano
	// 	const streetViewService = new this._google.maps.StreetViewService();
	//
	// 	// create the search object
	// 	let request = null;
	// 	if (this.settings.pano) {
	// 		// this is a panorama id
	// 		request = {
	// 			pano : this.settings.pano
	// 		};
	// 	} else if (this.settings.position) {
	// 		// search a streetview
	// 		request = {
	// 			location : this.settings.position,
	// 			radius : this.settings.radius
	// 		};
	// 	}
	//
	// 	// protect
	// 	if ( ! request) {
	// 		throw 'In order to instanciate a google street view component you need to pass at least a "pano" id or a "location" object...';
	// 	}
	//
	// 	// find the closer view
	// 	streetViewService.getPanorama(request, (data, status) => {
	// 		console.log('STREET', data, status);
	// 		// check the status
	// 		if (status === this._google.maps.StreetViewStatus.OK) {
	// 			// init the view
	// 			this._initView(data.location.latLng);
	// 		} else {
	// 			// no streetview found...
	// 		}
	// 	});
	// }

}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SGoogleStreetViewComponent = SGoogleStreetViewComponent;

// export modules
export default SGoogleStreetViewComponent;
