import SWebComponent from '../../../js/core/SWebComponent'
import __style from '../../../js/dom/style'
import __textWidth from '../../../js/dom/textWidth'
import __getStyleProperty from '../../../js/dom/getStyleProperty'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'

export default class SLabelPushComponent extends SWebComponent {

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

		// grab the input
		this._input = this.querySelector(':scope > input');
		this._inputPaddingRight = parseInt(__getStyleProperty(this._input, 'paddingRight'));
		this._inputPaddingLeft = parseInt(__getStyleProperty(this._input, 'paddingLeft'));

		// calculate the label width
		this._label = this.querySelector(':scope > span');
		this._labelWidth = this._label.offsetWidth;

		// get the paddings
		this._labelPaddingLeft = parseInt(__getStyleProperty(this._label, 'paddingLeft'));
		this._labelPaddingRight = parseInt(__getStyleProperty(this._label, 'paddingRight'));

		const labelBackgroundColor = this._label.style.backgroundColor;
		const labelBackgroundImage = this._label.style.backgroundImage;
		this._labelBackground = labelBackgroundColor || labelBackgroundImage;

		// listen for focus in field
		this._input.addEventListener('focus', this._render.bind(this));
		this._input.addEventListener('blur', this._render.bind(this));
		this._input.addEventListener('keyup', this._render.bind(this));

		// set the position relative if needed
		const position = this.style.position;
		if ( ! position || position !== 'absolute' || position !== 'relative') {
			this.style.position = 'relative';
		}
	}

	/**
	 * render
	 * Render the component
	 * @return 	{void}
	 */
	_render(e = null) {
		if (e) {
			if (e.type === 'focus') {
				this._isFocus = true;
			} else if (e.type === 'blur') {
				this._isFocus = false;
			}
		}
		this._setInputPadding();
		this._setLabelSize();
	}

	/**
	 * _setInputPadding
	 * Set the input correct padding depending on the label size
	 * @return 	{void}
	 */
	_setInputPadding() {

		if (this._input.hasAttribute('placeholder')) {
			__style(this._input, {
				paddingLeft : this._inputPaddingLeft
			});
			return;
		}

		if (this._isFocus) {
			// set the padding
			__style(this._input, {
				paddingLeft : this._inputPaddingLeft
			});
		} else {
			if ( ! this._input.value) {
				// set the padding
				let paddingLeft = this._labelWidth;
				if (this._labelBackground) {
					paddingLeft += this._inputPaddingLeft;
				}
				__style(this._input, {
					paddingLeft : paddingLeft + 'px'
				});
			}
		}
	}

	/**
	 * _setLabelSize
	 * Set the label width depending on the input text width
	 * @return 	{void}
	 */
	_setLabelSize() {
		// if no value in input
		if ( ! this._input.value) {
			// reset the label size
			__style(this._label, {
				opacity : 1,
				width : ''
			});
			return;
		}
		// get the content width
		const width = __textWidth(this._input);
		// calculate the difference
		let diff = this._input.offsetWidth - width - this._labelPaddingLeft;

		// add the padding right if is a background
		if (this._labelBackground) {
			diff -= this._inputPaddingRight;
		}

		// set the label size
		if (diff <= this._labelPaddingLeft + this._labelPaddingRight + 10) {
			// hide the label
			__style(this._label, {
				opacity : 0
			});
			// this._label.style.opacity = 0;
		} else if (diff <= this._labelWidth) {
			__style(this._label, {
				opacity : 1,
				width : diff + 'px'
			});

		}
	}
}
