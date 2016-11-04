import SWebComponent from '../../../js/core/SWebComponent'
import __realHeight from '../../../js/dom/realHeight'
import __getStyleProperty from '../../../js/dom/getStyleProperty'
import __style from '../../../js/dom/style'

export default class SReadMoreComponent extends SWebComponent {

	constructor() {
		super();
	}

	/**
	 * Default props
	 * @definition 		SWebComponent.getDefaultProps
	 */
	static get defaultProps() {
		return {
			/**
			 * Set the threshold difference height between the content and the
			 * actual read more size under which the read more will not been enabled
			 * @prop
			 * @type 		{Number}
			 */
			threshold : null,

			active : false,

			disabled : false,

			height : null

		};
	}

	static get physicalProps() {
		return ['disabled','active'];
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// check threshold
		if (this.props.threshold) {
			this._checkThreshold();
		}

		// apply base style
		this._applyInitialStyle();

		// update targeted and original height
		this._updateTargetedAndOriginalHeight();

		// listen for click on the element
		this.addEventListener('click', this._onClick.bind(this));
	}

	/**
	 * Unmount component
	 * @definition 		SWebComponent.componentUnmount
	 */
	componentUnmount() {
		super.componentUnmount();
	}

	/**
	 * Apply initial style
	 */
	_applyInitialStyle() {
		__style(this, {
			overflow : 'hidden',
			display : 'block'
		});
	}

	/**
	 * On click on the read more
	 */
	_onClick(e) {
		// toggle the active state
		this.setProp('active', ! this.props.active);
	}

	/**
	 * Update targeted and original height
	 */
	_updateTargetedAndOriginalHeight() {
		// check if has an targeted height
		let targetedHeight = this.props.height || this.style.maxHeight || __getStyleProperty(this, 'maxHeight');
		if (targetedHeight === 'none') {
			targetedHeight = null;
		}
		if (targetedHeight) {
			targetedHeight = parseFloat(targetedHeight);
		}

		// check the actual height of the target
		const realHeight = __realHeight(this);

		this._targetedHeight = targetedHeight;
		this._originalHeight = realHeight;
	}

	/**
	 * Check threshold to disable the read more if needed
	 */
	_checkThreshold() {
		// check if the targetedHeight is lower that the actual height
		if (this._targetedHeight + this.props.threshold >= this._originalHeight) {
			// disable the component
			this.setProp('disable', true);
		}
	}

	/**
	 * Render the component
	 * @definition 		SWebComponent.render
	 */
	render() {
		if (this.props.active) {
			// open the read more
			__style(this, {
				height : this._originalHeight + 'px'
			});
		} else {
			__style(this, {
				height : this._targetedHeight + 'px'
			});
		}
	}
}
