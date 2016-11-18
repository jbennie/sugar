import SWebComponent from '../../../js/core/SWebComponent'
import SGoogleComponentMixin from '../../mixins/SGoogleComponentMixin'
import { mix } from 'mixwith'
import __style from '../../../js/dom/style'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'

export default class SGoogleStreetviewComponent extends mix(SWebComponent).with(SGoogleComponentMixin) {

	/**
	 * Store the street view instance
	 * @type 	{StreetView}
	 */
	_view = null;

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {

			/**
			 * Set when to init the map if the placeholder setting is used
			 * @type 	{String}
			 */
			initOn : 'click'

		}
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

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
		this._placeholder = this.querySelector(`${this._componentNameDash}-placeholder`);

		// manage placeholder
		if (this._placeholder) {
			this._handlePlaceholder();
		} else {
			// init directly
			this._internalInit();
		}

		// listen for document scroll to unactivate the scroll wheel
		// on the streetview
		document.addEventListener('scroll', this._onDocumentScroll.bind(this));
		// set the overlay pointer events to all
		this._overlayElm.style.pointerEvents = 'none';

		// append the map and overlay
		this.appendChild(this._viewElm);
		this.appendChild(this._overlayElm);
	}

	/**
	 * Component unmount
	 * @definition 		SWebComponent.componentUnmount
	 */
	componentUnmount() {
		super.componentUnmount();

		// stop listening for document scroll
		document.removeEventListener('scroll', this._onDocumentScroll);
	}



	/**
	 * Component will receive props
	 * @definition 		SWebComponent.componentWillReceiveProps
	 */
	componentWillReceiveProps(nextProps) {
		if ( ! this.view) return;
		this.view.setOptions(nextProps);
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
	 * Handle the placeholder element
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
			zIndex : 1
		});

		// listen to init the map
		this._placeholder.addEventListener(this.props.initOn, this._onPlaceholderInit.bind(this));
	}

	/**
	 * Proxy function of placeholder init listener
	 */
	_onPlaceholderInit() {
		// remove the placeholder
		this._placeholder.parentNode.removeChild(this._placeholder);
		// stop listening for init on placeholder
		this._placeholder.removeEventListener(this.props.initOn, this._onPlaceholderInit);
		// internal init
		this._internalInit();
	}

	/**
	 * Init the map
	 */
	_internalInit() {
		// init the map
		this._initView();
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
	 * Init the view with the location found
	 * @param 	{String} 	pano 	The pani id to init
	 */
	_initView() {
		this._view = new this._google.maps.StreetViewPanorama(this._viewElm, this.props);
	}

	/**
	 * Access the google view instance
	 * @return 	{Map} 	The google map instance
	 */
	get view() {
		return this._view;
	}

}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration(SGoogleStreetviewComponent, (component) => {
	if (component._mapElm) {
		sTemplateIntegrator.ignore(component._mapElm);
	}
	if (component._placeholder) {
		sTemplateIntegrator.ignore(component._placeholder);
	}
	component.ignore({
		inited : true
	});
});
