import SGoogleComponent from '../../core/SGoogleComponent';
import __style from '../../dom/style'

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

			/**
 			 * initOn
 			 * Set when to init the streetview if the placeholder setting is used
 			 * @type 	{String}
 			 */
 			initOn : 'click'

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
		__style(this._viewElm, {
			position : 'absolute',
			top : 0,
			left : 0,
			width : '100%',
			height : '100%'
		});

		// append a div to prevent the scroll zoom
		this._overlayElm = document.createElement('div');
		this._overlayElm.setAttribute('s-google-street-view-overlay', true);
		__style(this._overlayElm, {
			position : 'absolute',
			top : 0,
			left : 0,
			width : '100%',
			height : '100%',
			zIndex : 1,
			cursor : 'pointer',
			backgroundColor : 'transparent'
		});

		// try to get the placeholder
		this._placeholder = this.elm.querySelector(`[${this.componentNameDash}-placeholder]`);

		// manage placeholder
		if (this._placeholder) {
			this._handlePlaceholder();
		} else {
			// init directly
			this._internalInit();
		}
	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SGoogleMapComponent}
	 */
	enable() {
		// enable parent
		super.enable();
		// listen for document scroll to unactivate the scroll wheel
		// on the streetview
		document.addEventListener('scroll', this._onDocumentScroll.bind(this));
		// set the overlay pointer events to all
		this._overlayElm.style.pointerEvents = 'none';
		// listen for mouse leaving the view
		// this.elm.addEventListener('mouseleave', this._onMouseLeave.bind(this));
		// listen for click on overlay
		// this._overlayElm.addEventListener('mousemove', this._onOverlayClick.bind(this));
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
		// stop listening for document scroll
		document.removeEventListener('scroll', this._onScroll);
		// do not listen for mouse leaving the view anymore
		// this.elm.removeEventListener('mouseleave', this._onMouseLeave);
		// strop listening for click on overlay
		// this._overlayElm.removeEventListener('mousemove', this._onOverlayClick);
		// remove the map
		this.remove(this._viewElm);
		this.remove(this._overlayElm);
		// enable parent
		super.enable();
		// maintain chainability
		return this;
	}

	/**
	 * _onDocumentScroll
	 * When the document scroll
	 * @return 	{void}
	 */
	_onDocumentScroll() {
		// activate the overlay to avoid scroll into street view
		this._overlayElm.style.pointerEvents = 'all';
		// update the timeout
		clearTimeout(this._scrollTimeout);
		this._scrollTimeout = setTimeout(() => {
			this._overlayElm.style.pointerEvents = 'none';
		}, 250);
	}

	/**
	 * _handlePlaceholder
	 * Handle the placeholder setting
	 * @return 	{void}
	 */
	_handlePlaceholder() {

		// set style
		__style(this._placeholder, {
			position : 'absolute',
			top : 0,
			left : 0,
			width : '100%',
			height : '100%',
			cursor : 'pointer',
			zIndex : 2
		});

		// listen to init the map
		this._placeholder.addEventListener(this.settings.initOn, this._onPlaceholderInit.bind(this));
	}

	/**
	 * _onPlaceholderInit
	 * Proxy function of placeholder init listener
	 * @return 	{void}
	 */
	_onPlaceholderInit() {
		// remove the placeholder
		this.remove(this._placeholder);
		// stop listening for init on placeholder
		this._placeholder.removeEventListener(this.settings.initOn, this._onPlaceholderInit);
		// internal init
		this._internalInit();
	}

	/**
	 * _internalInit
	 * @return 	{void}
	 */
	_internalInit() {
		// search a view
		this._initView();

		// watch settings to set new map options
		this.watchSettings((newVal, oldVal, updated) => {
			// set map options
			this._setVIewOptions(newVal);
		});
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
		this._overlayElm.style.pointerEvents = 'none';
		// do not listen for overlay move
		this._overlayElm.removeEventListener('mousemove', this._onOverlayClick);
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
