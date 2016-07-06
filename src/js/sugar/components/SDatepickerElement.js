import SComponent from '../core/SComponent'
import Pikaday from 'pikaday-time'
import sSettings from '../core/sSettings'
import __querySelectorLive from '../dom/querySelectorLive';

// Date picker
class SDatepickerElement extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sDatepicker', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name='sDatepicker') {
		super(name, elm, {
		}, settings);

		// init
		this.initProxy(this._init.bind(this));
	}

	/**
	 * Init
	 */
	_init() {
		// try to get the theme automatically
		let theme = null;
		// console.warn('settings', sSettings);

		if (sSettings.colors) {
			for (let prop in sSettings.colors) {
				// console.log('PROP', this.elm.classList);
				if (this.elm.classList.contains(prop)
					|| this.elm.classList.contains('input--'+prop)) {
					theme = prop;
					break;
				}
			}
		}

		// check if a "from" is specified
		let from = this.settings.from;
		if (from) {
			// listen for change on the input
			document.querySelector(from).addEventListener('change', (e) => {
				// check if we have the pikaday instance
				if (e.target.sDatepicker && e.target.sDatepicker.picker) {
					// get the picker date
					let date = e.target.sDatepicker.picker.getDate();
					this.picker.setStartRange(date);
					this.picker.setMinDate(date);
					e.target.sDatepicker.picker.setStartRange(date);
					e.target.sDatepicker.picker.hide();
					e.target.sDatepicker.picker.show();
				}
			});
		}

		// check if a "to" is specified
		let to = this.settings.to;
		if (to) {
			// listen for change on the input
			document.querySelector(to).addEventListener('change', (e) => {
				// check if we have the pikaday instance
				if (e.target.sDatepicker && e.target.sDatepicker.picker) {
					// get the picker date
					let date = e.target.sDatepicker.picker.getDate();
					this.picker.setEndRange(date);
					this.picker.setMaxDate(date);
					e.target.sDatepicker.picker.setEndRange(date);
					e.target.sDatepicker.picker.hide();
					e.target.sDatepicker.picker.show();
				}
			});
		}

		// init the picker
		this.picker = new Pikaday({...{
			field : this.elm,
			showTime : false,
			theme : theme
		}, ...this.settings});
	}
}

__querySelectorLive('input[s-datepicker]', (elm) => {
	new SDatepickerElement(elm);
});

__querySelectorLive('input[s-datetimepicker]', (elm) => {
	new SDatepickerElement(elm, {
		autoClose : true,
		showTime : true
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SDatepickerElement = SDatepickerElement;

// export modules
export default SDatepickerElement;
