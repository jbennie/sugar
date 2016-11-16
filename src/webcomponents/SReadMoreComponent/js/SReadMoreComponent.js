import SWebComponent from '../../../js/core/SWebComponent'
import __realHeight from '../../../js/dom/realHeight'
import __getStyleProperty from '../../../js/dom/getStyleProperty'
import __style from '../../../js/dom/style'
import __matches from '../../../js/dom/matches'

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
			threshold : 0,

			active : false,

			disabled : false,

			height : null

		};
	}

	static get physicalProps() {
		return ['disabled','active'];
	}

	/**
	 * Component will mount
	 * @definition 		SWebComponent.componentWillMount
	 */
	componentWillMount() {
		super.componentWillMount();
		this._targetedHeight;
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// apply base style
		this._applyInitialStyle();

		// update targeted and original height
		this._updateTargetedAndOriginalHeight();

		// listen for click on the element
		this.addEventListener('click', this._onClick.bind(this));

		// check threshold
		this._checkThreshold();

		// listen for update read more
		this.addEventListener(`update:height`, (e) => {
			this._updateTargetedAndOriginalHeight();
			this._checkThreshold();
		});

		// listen for content mutation
		// this._listenMutations();
	}

	/**
	 * Component unmount
	 * @definition 		SWebComponent.componentUnmount
	 */
	componentUnmount() {
		super.componentUnmount();
		if (this._sReadMoreMutationObserver) {
			this._sReadMoreMutationObserver.disconnect();
		}
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
	 * Listen mutations
	 */
	_listenMutations() {
		this._sReadMoreMutationObserver = new MutationObserver((mutations) => {
			let render = false;
			mutations.forEach((mutation) => {
				let parentNode = mutation.target.parentNode;
				if (mutation.target.nodeName === '#text') {
					parentNode = parentNode.parentNode;
				}
				if ( mutation.target !== this && parentNode === this) render = true;
			});
			if ( ! render) return;
			// update targeted and original height
			this._updateTargetedAndOriginalHeight();
			// check threshold
			this._checkThreshold();
			// render
			this.render();
		});
		this._sReadMoreMutationObserver.observe(this, {
			childList : true,
			subtree : true,
			characterData : true
		});
	}

	/**
	 * On click on the read more
	 */
	_onClick(e) {
		if (e.target !== this) return;
		// toggle the active state
		if (this.isActive()) this.unactivate();
		else this.activate();
	}

	/**
	 * Update targeted and original height
	 */
	_updateTargetedAndOriginalHeight() {
		// check if has an targeted height
		if ( ! this._targetedHeight) {
			let targetedHeight = this.props.height || this.style.maxHeight || __getStyleProperty(this, 'maxHeight');
			if (targetedHeight === 'none') {
				targetedHeight = null;
			}
			if (targetedHeight) {
				targetedHeight = parseFloat(targetedHeight);
			}
			this._targetedHeight = targetedHeight;
		}

		// check the actual height of the target
		const realHeight = __realHeight(this);
		this._originalHeight = realHeight;
	}

	/**
	 * Check threshold to disable the read more if needed
	 */
	_checkThreshold() {
		// check if the targetedHeight is lower that the actual height
		if (this._targetedHeight + this.props.threshold >= this._originalHeight) {
			// disable the component
			this.setProp('disabled', true);
		} else {
			this.setProp('disabled', false);
		}
	}

	/**
	 * Activate
	 */
	activate() {
		this.setProp('active', true);
	}

	/**
	 * Unactivate
	 */
	unactivate() {
		this.setProp('active', false);
	}

	/**
	 * Return if the read more is activate or not
	 */
	isActive() {
		return this.props.active;
	}

	/**
	 * Render the component
	 * @definition 		SWebComponent.render
	 */
	render() {
		if ( ! this.props.disabled) {
			if (this.props.active) {
				setTimeout(() => {
					// open the read more
					__style(this, {
						maxHeight : (this._originalHeight + (this._originalHeight / 100 * 10)) + 'px'
					});
				});
			} else {
				__style(this, {
					maxHeight : this._targetedHeight + 'px'
				});
			}
		} else {
			__style(this, {
				maxHeight : null
			});
		}
	}
}
