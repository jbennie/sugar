import SWebComponent from '../../../js/core/SWebComponent'
import SGradientSvgFilter from '../../../js/filters/SGradientSvgFilter'

export default class SGradientComponent extends SWebComponent {

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
            /**
			 * The colors wanted for your gradient
			 * @prop
			 * @type  		{Array}
			 */
			colors : ['#a3385e','#f2bc2b'],

			/**
			 * The type of gradient wanted (linear, radial)
			 * @prop
			 * @type 		{String}
			 * @default 	linear
			 */
			type : 'linear',
		}
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

        let type = this.props.type;
		// create a new svg filter
		this._gradientFilter = new SGradientSvgFilter();
		if (type == 'radial') {
			this._gradientFilter.radial(this.props.colors);
		} else {
			this._gradientFilter.linear(this.props.colors);
		}
		// apply the filter
		this._gradientFilter.applyTo(this);
	}

}
