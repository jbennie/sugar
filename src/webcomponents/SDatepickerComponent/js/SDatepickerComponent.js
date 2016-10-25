import SWebComponent from '../../../js/core/SWebComponent'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __style from '../../../js/dom/style'
import Flatpickr from 'flatpickr/dist/flatpickr'

export default class SDatepickerComponent extends SWebComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Default props
	 * @definition 		SWebComponent.getDefaultProps
	 */
	static get defaultProps() {
		return {
			for : null,
			inline : false,
			color : null
		}
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// get the datepicker input target
		let target = this;
		if (this.props.for) {
			// try to get the input
			const input = document.querySelector(`[name="${this.props.for}"],input#${this.props.for}`);
			if (input) {
				target = input;
			}
		}
		this._flatpickr = new Flatpickr(target, {
			inline : this.props.inline
		});

		// copy props
		if (this.props.color) {
			this._flatpickr.calendarContainer.setAttribute('color', this.props.color);
		}
	}

	/**
	 * Render
	 * @definition 		SWebComponent.render
	 */
	render() {
		super.render();
	}
}

// register component
SWebComponent.define('s-datepicker', SDatepickerComponent);
