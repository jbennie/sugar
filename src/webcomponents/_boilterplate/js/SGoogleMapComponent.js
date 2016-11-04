import SWebComponent from '../../../js/core/SWebComponent'

export default class SGoogleMapComponent extends SWebComponent {

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
		}
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();
	}

	/**
	 * Component will receive prop
	 * @definition 		SWebComponent.componentWillReceiveProp
	 */
	componentWillReceiveProp(name, newVal, oldVal) {

	}

}

// register component
SWebComponent.define('s-google-map', SGoogleMapComponent);
