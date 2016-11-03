import SWebComponent from '../../../js/core/SWebComponent'
import SGooeySvgFilter from '../../../js/filters/SGooeySvgFilter'

export default class SGooeyComponent extends SWebComponent {

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
			 * The overall amount of effect
			 * @prop
			 * @type 		{Number}
			 */
			amount : 10,

			/**
			 * The blur amount to produce the effect
			 * @prop
			 * @type 		{Number}
			 */
			blur : null,

			/**
			 * The contrast amount to produce the effect
			 * @prop
			 * @type 		{Number}
			 */
			contrast : null,

			/**
			 * The shrink amount to produce the effect
			 * @prop
			 * @type 		{Number}
			 */
			shrink : null
		}
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();
		// create a new svg filter
		this._gooeyFilter = new SGooeySvgFilter(this.props.amount);
		// apply the filter
		this._gooeyFilter.applyTo(this);
		// apply base props
		if (this.props.blur) this._gooeyFilter.blur = this.props.blur;
		if (this.props.contrast) this._gooeyFilter.contrast = this.props.contrast;
		if (this.props.shrink) this._gooeyFilter.shrink = this.props.shrink;
	}

	/**
	 * Component will receive prop
	 * @definition 		SWebComponent.componentWillReceiveProp
	 */
	componentWillReceiveProp(name, newVal, oldVal) {
		switch(name) {
			case 'amount':
			case 'blur':
			case 'contrast':
			case 'shrink':
				this._gooeyFilter[name] = newVal;
			break;
		}
	}

}

// register component
SWebComponent.define('s-gooey', SGooeyComponent);
