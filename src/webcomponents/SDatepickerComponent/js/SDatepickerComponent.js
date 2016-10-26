import SWebComponent from '../../../js/core/SWebComponent'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __style from '../../../js/dom/style'
import Flatpickr from 'flatpickr/dist/flatpickr'
import __dispatchEvent from '../../../js/dom/dispatchEvent'

export default class SDatepickerComponent extends SWebComponent {

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
			 * Specify the name or id of the field to link the datepicker to
			 * @type  		{String}
			 */
			for : null,

			/**
			 * Displays the calendar inline
			 * @type 		{Boolean}
			 */
			inline : false,

			/**
			 * Specify the color to use to skin the datepicker.
			 * @physicalProp
			 * @observed
			 * @type		{String}
			 */
			color : null,

			/**
			 * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
			 * @type 		{Boolean}
			 */
			allowInput : false,

			/**
			 * Clicking on the input opens the date (time) picker. Disable this if you wish to open the calendar manually with `.open()`
			 * @type 		{Boolean}
			 */
			clickOpens : true,

			/**
			 * A string of characters which are used to define how the date will be displayed in the input box. The supported characters are defined in the table below.
			 * @type 		{String}
			 */
			dateFormat : 'Y-m-d',

			/**
			 * Set the initial selected date. Same as preloading a date string into an input's value attribute, but can also handle a Date object.
			 * @type 		{Date}{String}
			 */
			defaultDate : null,

			/**
			 * Disable some dates
			 * @see 		https://chmln.github.io/flatpickr/#disable
			 * @type 		{Array}
			 */
			disable : [],

			/**
			 * Specify if the datepicker is disabled or not
			 * @physicalProp
			 * @observed
			 * @type 		{Boolean}
			 */
			disabled : false,

			/**
			 * Disable all dates except the ones you specify.
			 * @see 		https://chmln.github.io/flatpickr/#enable
			 * @type 		{Array}
			 */
			enable : [],

			/**
			 * Enables time picker
			 * @type 		{Boolean}
			 */
			enableTime : false,

			/**
			 * Enables seconds in the time picker.
			 * @type 		{Boolean}
			 */
			enableSeconds : false,

			/**
			 * Adjusts the step for the hour input (incl. scrolling)
			 * @type 		{Integer}
			 */
			hourIncrement : 1,

			/**
			 * Adjusts the step for the minute input (incl. scrolling)
			 * @type 		{Integer}
			 */
			minuteIncrement : 5,

			/**
			 * The maximum date that a user can pick to.
			 * @type 		{Date}{String}
			 */
			maxDate : null,

			/**
			 * The minimum date that a user can start picking from
			 * @type 		{Date){String}}
			 */
			minDate : null,

			/**
			 * Hides the calendar. For use along with enableTime.
			 * @type 		{Boolean}
			 */
			noCalendar : {},

			/**
			 * Function(s) to trigger on every date selection
			 * @see 		https://chmln.github.io/flatpickr/#eventsAPI
			 * @type 		{Function}
			 */
			onChange : null,

			/**
			 * Function(s) to trigger on every time the calendar is closed
			 * @see 		https://chmln.github.io/flatpickr/#eventsAPI
			 * @type 		{Function}
			 */
			onClose : null,

			/**
			 * Function(s) to trigger on every time the calendar is opened
			 * @see 		https://chmln.github.io/flatpickr/#eventsAPI
			 * @type 		{Function}
			 */
			onOpen : null,

			/**
			 * Function to trigger when the calendar is ready
			 * @see 		https://chmln.github.io/flatpickr/#eventsAPI
			 * @type 		{Function}
			 */
			onReady : null,

			/**
			 * Function that expects a date string and must return a Date object
			 * @type 		{Function}
			 */
			parseDate : false,

			/**
			 * Show the month using the shorthand version (ie, Sep instead of September).
			 * @type 		{Boolean}
			 */
			shorthandCurrentMonth : false,

			/**
			 * Displays time picker in 24 hour mode without AM/PM selection when enabled.
			 * @type 		{Boolean}
			 */
			time24hr : true,

			/**
			 * When true, dates will parsed, formatted, and displayed in UTC. It's recommended that date strings contain the timezone, but not necessary
			 * @type 		{Boolean}
			 */
			utc : false,

			/**
			 * Enables display of week numbers in calendar
			 * @type 		{Boolean}
			 */
			weekNumbers : false,

			/**
			 * flatpickr can parse an input group of textboxes and buttons, common in Bootstrap and other frameworks.
			 * @see 		https://chmln.github.io/flatpickr/#strap
			 * @type 		{Boolean}
			 */
			wrap : false

		}
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return ['color']
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// get the datepicker input target
	 	this._target = this;
		if (this.props.for) {
			// try to get the input
			const input = document.querySelector(`[name="${this.props.for}"],input#${this.props.for}`);
			if (input) {
				this._target = input;
			}
		}

		// instanciate the datepicker
		this._instanciateDatepicker();
	}

	/**
	 * Create datepicker instance
	 */
	_instanciateDatepicker() {
		this._flatpickr = new Flatpickr(this._target, {
			clickOpens : this.props.clickOpens,
			dateFormat : this.props.dateFormat,
			defaultDate : this.props.defaultDate,
			disable : this.props.disable,
			enable : this.props.enable,
			enableTime : this.props.enableTime,
			enableSeconds : this.props.enableSeconds,
			hourIncrement : this.props.hourIncrement,
			inline : this.props.inline,
			maxDate : this.props.maxDate,
			minDate : this.props.minDate,
			minuteIncrement : this.props.minuteIncrement,
			noCalendar : this.props.noCalendar,
			onChange : (dateObj, dateStr, instance) => {
				this.props.onChange && this.props.onChange(dateObj, dateStr, instance);
				// set the value on the input
				if (this._target.tagName.toLowerCase() === 'input') {
					this._target.setAttribute('value', dateStr);
				}
				this.dispatchComponentEvent('change', {
					dateObj,
					dateStr,
					instance
				});
			},
			onClose : this.props.onClose,
			onOpen : (dateObj, dateStr, instance) => {
				this.props.onOpen && this.props.onOpen(dateObj, dateStr, instance);
				if (this._target.tagName.toLowerCase() === 'input'
					&& ! this._target.hasAttribute('value')
				) {
					instance.setDate(this.props.minDate || new Date());
					instance.triggerChange();
				}
			},
			onReady : (dateObj, dateStr, instance) => {
				this.props.onReady && this.props.onReady(dateObj, dateStr, instance);
				if (this._target.tagName.toLowerCase() === 'input'
					&& ! this._target.hasAttribute('value')
				) {
					instance.setDate(this.props.minDate || new Date());
					instance.triggerChange();
				}
			},
			parseDate : this.props.parseDate || function(date) {
				// if the date is a time only
				if (this.props.noCalendar && this.props.enableTime) {
					return new Date(Date.parse(`2000.01.01 ${date}`));
				}
				return new Date(Date.parse(date));
			}.bind(this),
			shorthandCurrentMonth : this.props.shorthandCurrentMonth,
			time_24hr : this.props.time24hr,
			utc : this.props.utc,
			weekNumbers : this.props.weekNumbers,
			wrap : this.props.wrap
		});
	}

	/**
	 * Will receive prop
	 */
	componentWillReceiveProp(name, newVal, oldVal) {
		switch(name) {
			case 'color':
			break;
			default:
				// destroy and recreate the datepicker
				this._flatpickr.destroy();
				this._instanciateDatepicker();
			break;
		}
	}

	/**
	 * Render
	 * @definition 		SWebComponent.render
	 */
	render() {
		super.render();
		// copy props
		if (this.props.color) {
			this._flatpickr.calendarContainer.setAttribute('color', this.props.color);
		}
	}
}

// register component
SWebComponent.define('s-datepicker', SDatepickerComponent);
