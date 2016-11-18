import SWebComponent from '../../../js/core/SWebComponent'
import SGoogleComponentMixin from '../../mixins/SGoogleComponentMixin'
import { mix } from 'mixwith'
import __style from '../../../js/dom/style'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'

export default class SGoogleMapComponent extends mix(SWebComponent).with(SGoogleComponentMixin) {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {

			/**
			 * Set the initial zoom of the map
			 * @type 	{integer}
			 */
			zoom : 4,

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
		this._mapElm = document.createElement('div');
		this._mapElm.setAttribute('s-google-map-map', true);

		// set the style to the map elm
		__style(this._mapElm, {
			position : 'absolute',
			top : 0,
			left : 0,
			width : '100%',
			height : '100%'
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

		// append the map elm
		this.appendChild(this._mapElm);
	}

	/**
	 * Component unmount
	 * @definition 		SWebComponent.componentUnmount
	 */
	componentUnmount() {
		super.componentUnmount();
	}

	/**
	 * Component will receive props
	 * @definition 		SWebComponent.componentWillReceiveProps
	 */
	componentWillReceiveProps(nextProps) {
		if ( ! this._map) return;
		this._map.setOptions(nextProps);
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
		this._initMap();
	}

	/**
	 * Init the map
	 */
	_initMap() {
		this._map = new this._google.maps.Map(this._mapElm, this.props);
		// set the component as inited
		// used by the markers to init when the map is ok
		this.setAttribute('inited', true);
	}

	/**
	 * Access the google map instance
	 * @return 	{Map} 	The google map instance
	 */
	get map() {
		return this._map;
	}

}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration(SGoogleMapComponent, (component) => {
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
