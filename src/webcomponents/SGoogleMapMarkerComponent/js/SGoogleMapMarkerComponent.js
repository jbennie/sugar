import SWebComponent from '../../../js/core/SWebComponent'
import SGoogleComponentMixin from '../../mixins/SGoogleComponentMixin'
import { mix } from 'mixwith'
import __style from '../../../js/dom/style'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'
import __whenAttribute from '../../../js/dom/whenAttribute'

export default class SGoogleMapMarkerComponent extends mix(SWebComponent).with(SGoogleComponentMixin) {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {}
	}

	/**
	 * Mount dependencies
	 * @definition 		SWebComponent.mountDependencies
	 */
	static get mountDependencies() {
		return [function() {
			return __whenAttribute(this.parentNode, 'inited');
		}];
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// get the map instance to use for this marker.
		// this is grabed from the parent node that need to be a google-map component
		if ( ! this.map) {
			throw `The "${this._componentNameDash}" component has to be a direct child of a "SGoogleMapComponent"`;
		}

		// add the marker to the map
		// load the map api
		if ( ! this._marker) {
			this._initMarker();
		} else {
			this._marker.setMap(this.map);
		}
	}

	/**
	 * Init the marker
	 */
	_initMarker() {
		this._marker = new this._google.maps.Marker(this.props);
		this._marker.setMap(this.map);
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
		if ( ! this._marker) return;
		this._marker.setOptions(nextProps);
	}

	/**
	 * Access the google map instance
	 * @return 	{Map} 	The google map instance
	 */
	get map() {
		return this.parentNode.map;
	}

}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration('SGoogleMapMarkerComponent', (component) => {
	if (component._mapElm) {
		sTemplateIntegrator.ignore(component._mapElm);
	}
	if (component._placeholder) {
		sTemplateIntegrator.ignore(component._placeholder);
	}
});

// register component
SWebComponent.define('s-google-map-marker', SGoogleMapMarkerComponent);
