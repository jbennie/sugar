import SWebComponent from '../../../js/core/SWebComponent'
import SMotionblurSvgFilter from '../../../js/filters/SMotionblurSvgFilter'

export default class SMotionBlurComponent extends SWebComponent {

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
			 * Amount of motion blur to apply
			 * @prop
			 * @type 		{Number}
			 */
			amount : 0.5
		}
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();
		// create a new svg filter
		this._motionBlurFilter = new SMotionblurSvgFilter(this.props.amount);
		// apply the filter
		this._motionBlurFilter.applyTo(this);
	}

	/**
	 * Unmount component
	 * @definition 			SWebComponent.componentUnmount
	 */
	componentUnmount() {
		super.componentUnmount();
		if (this._motionBlurFilter) {
			this._motionBlurFilter.destroy();
			delete this._motionBlurFilter;
		}
	}

	/**
	 * Component will receive prop
	 * @definition 		SWebComponent.componentWillReceiveProp
	 */
	componentWillReceiveProp(name, newVal, oldVal) {
		switch(name) {
			case 'amount':
				this._motionBlurFilter.amount = newVal;
			break;
		}
	}
}
