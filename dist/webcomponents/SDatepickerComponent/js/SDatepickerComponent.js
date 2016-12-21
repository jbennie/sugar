'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _getAnimationProperties = require('../../../js/dom/getAnimationProperties');

var _getAnimationProperties2 = _interopRequireDefault(_getAnimationProperties);

var _style = require('../../../js/dom/style');

var _style2 = _interopRequireDefault(_style);

var _flatpickr = require('flatpickr/dist/flatpickr');

var _flatpickr2 = _interopRequireDefault(_flatpickr);

var _dispatchEvent = require('../../../js/dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _integer = require('../../../js/utils/is/integer');

var _integer2 = _interopRequireDefault(_integer);

var _autoCast = require('../../../js/utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SDatepickerComponent = function (_SWebComponent) {
	_inherits(SDatepickerComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SDatepickerComponent() {
		_classCallCheck(this, SDatepickerComponent);

		return _possibleConstructorReturn(this, _SWebComponent.call(this));
	}

	/**
  * Default props
  * @definition 		SWebComponent.defaultProps
  */


	/**
  * Component css
  * @definition 		SWebcomponent.css
  */
	SDatepickerComponent.css = function css(componentName, componentNameDash) {
		return '\n\t\t\t.flatpickr-input {\n\t\t\t\tcursor: pointer;\n\t\t\t\tz-index: 1\n\t\t\t}\n\t\t\t.flatpickr-mobileInput {\n\t\t\t\topacity: 0;\n\t\t\t\tvisibility: hidden;\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 0;\n\t\t\t\theight: 0;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tpadding: 0\n\t\t\t}\n\t\t\t.flatpickr-calendar {\n\t\t\t\tbackground: #fff;\n\t\t\t\topacity:0;\n\t\t\t\tpointer-events: none;\n\t\t\t\tmargin-top:-20px;\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding:1em;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop:0; left: -200vw;\n\t\t\t}\n\t\t\t.flatpickr-calendar.open {\n\t\t\t\topacity: 1;\n\t\t\t\tz-index: 99999;\n\t\t\t\tmargin-top:0;\n\t\t\t\tpointer-events: all;\n\t\t\t\ttop:0; left:0;\n\t\t\t}\n\t\t\t.flatpickr-calendar.inline {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tposition: relative;\n\t\t\t\topacity:1;\n\t\t\t\tmargin-top:0;\n\t\t\t\tpointer-events: all;\n\t\t\t}\n\t\t\t.flatpickr-calendar.static {\n\t\t\t\tposition: relative\n\t\t\t}\n\t\t\t.flatpickr-calendar.static.open {\n\t\t\t\tdisplay: block\n\t\t\t}\n\t\t\t.flatpickr-calendar.hasWeeks {\n\t\t\t}\n\n\t\t\t.flatpickr-month,\n\t\t\t.flatpickr-next-month i,\n\t\t\t.flatpickr-prev-month i {\n\t\t\t\tposition: relative\n\t\t\t}\n\n\t\t\t.flatpickr-month {\n\t\t\t\tuser-select:none;\n\t\t\t\twidth:100%;\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\t.flatpickr-month > span {\n\t\t\t\tvertical-align: middle;\n\t\t\t\theight: 3em;\n\t\t\t\tline-height: 3em;\n\t\t\t}\n\n\t\t\t.flatpickr-next-month,\n\t\t\t.flatpickr-prev-month {\n\t\t\t\ttext-decoration: none;\n\t\t\t\tcursor: pointer;\n\t\t\t\twidth: 3em;\n\t\t\t\tdisplay : inline-block !important;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t.flatpickr-next-month[style*="none"],\n\t\t\t.flatpickr-prev-month[style*="none"] {\n\t\t\t\tpointer-events:none;\n\t\t\t\topacity: .4;\n\t\t\t}\n\t\t\t.flatpickr-next-month svg,\n\t\t\t.flatpickr-prev-month svg {\n\t\t\t\theight: 1em;\n\t\t\t}\n\t\t\t.flatpickr-next-month svg path,\n\t\t\t.flatpickr-prev-month svg path {\n\t\t\t\tfill: inherit\n\t\t\t}\n\t\t\t.flatpickr-current-month {\n\t\t\t\tflex: 1 auto;\n\t\t\t}\n\t\t\t.flatpickr-current-month .cur-month {\n\t\t\t\tfont-weight: bold;\n\t\t\t}\n\t\t\t.flatpickr-current-month .cur-year {\n\t\t\t\tpadding: 0;\n\t\t\t\tmargin: 0;\n\t\t\t\twidth: 3.2em;\n\t\t\t\tdisplay: inline;\n\t\t\t\tfont-size: inherit;\n\t\t\t\tline-height: 0;\n\t\t\t\theight: initial;\n\t\t\t\tborder: 0;\n\t\t\t\tborder-radius: 0;\n\t\t\t\tvertical-align: initial;\n\t\t\t\toutline:none;\n\t\t\t}\n\t\t\t.flatpickr-current-month .cur-year:hover {\n\t\t\t\tbackground: rgba(0, 0, 0, .05)\n\t\t\t}\n\t\t\t.flatpickr-weekdays {\n\t\t\t\tpadding:.5em 0;\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\tspan.flatpickr-weekday {\n\t\t\t\tcursor: default;\n\t\t\t\tmargin: 0;\n\t\t\t\ttext-align: center;\n\t\t\t\tdisplay:inline-block;\n\t\t\t\twidth: 5em;\n\t\t\t\tfont-size:.6em;\n\t\t\t\tpadding:.5em 0;\n\t\t\t}\n\n\t\t\t.flatpickr-rContainer {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: 21em;\n\t\t\t}\n\t\t\t.flatpickr-days {\n\t\t\t\toutline: 0;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\t\t\t.flatpickr-day {\n\t\t\t\twidth: 3em;\n\t\t\t\theight: 3em;\n\t\t\t\tline-height: 3em;\n\t\t\t\tcursor: pointer;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tmargin: 0;\n\t\t\t\ttext-align: center;\n\t\t\t}\n\t\t\t.flatpickr-day.disabled,\n\t\t\t.flatpickr-day.disabled:hover,\n\t\t\t.flatpickr-day.nextMonthDay,\n\t\t\t.flatpickr-day.notAllowed,\n\t\t\t.flatpickr-day.notAllowed.nextMonthDay,\n\t\t\t.flatpickr-day.notAllowed.prevMonthDay,\n\t\t\t.flatpickr-day.prevMonthDay {\n\t\t\t\tcolor: rgba(57, 57, 57, .3);\n\t\t\t\tbackground: 0 0;\n\t\t\t\tborder-color: transparent;\n\t\t\t\tcursor: default\n\t\t\t}\n\t\t\t.flatpickr-weekwrapper {\n\t\t\t\tpadding-top:.5em;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tfloat: left\n\t\t\t}\n\t\t\t.flatpickr-weekwrapper .flatpickr-weeks {\n\t\t\t\tpadding: .5em .25rem 0 .25em;\n\t\t\t}\n\t\t\t.flatpickr-weekwrapper .flatpickr-weekday {\n\t\t\t\tfloat: none;\n\t\t\t\twidth: 100%\n\t\t\t}\n\t\t\t.flatpickr-weekwrapper span.flatpickr-day {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 100%\n\t\t\t}\n\t\t\t.flatpickr-time {\n\t\t\t\toverflow: auto;\n\t\t\t\ttext-align: center;\n\t\t\t\tborder-top: 0;\n\t\t\t\toutline: 0;\n\t\t\t\tdisplay: block;\n\t\t\t\tdisplay: flex;\n\t\t\t\tmin-width:10em;\n\t\t\t}\n\t\t\t.flatpickr-am-pm {\n\t\t\t\tuser-select:none;\n\t\t\t}\n\t\t\t.flatpickr-am-pm,\n\t\t\t.flatpickr-time input,\n\t\t\t.flatpickr-time-separator {\n\t\t\t\theight: 3em;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tline-height: 3em;\n\t\t\t\tcolor: #393939\n\t\t\t}\n\t\t\t.flatpickr-time input {\n\t\t\t\tfont-size: 1em;\n\t\t\t\tbackground: 0 0;\n\t\t\t\tbox-shadow: none;\n\t\t\t\tborder: 0;\n\t\t\t\tborder-radius: 0;\n\t\t\t\tflex: 1;\n\t\t\t\twidth: 33%;\n\t\t\t\tmin-width: 33%;\n\t\t\t\ttext-align: center;\n\t\t\t\tmargin: 0;\n\t\t\t\tpadding: 0;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\t.flatpickr-time input.flatpickr-minute {\n\t\t\t\twidth: 26%;\n\t\t\t}\n\t\t\t.flatpickr-time input.flatpickr-second {\n\t\t\t}\n\t\t\t.flatpickr-time input:focus {\n\t\t\t\toutline: 0;\n\t\t\t\tborder: 0\n\t\t\t}\n\n\t\t\t.flatpickr-time.has-seconds input[type=number] {\n\t\t\t\twidth: 25%;\n\t\t\t\tmin-width: 25%\n\t\t\t}\n\t\t\t.hasTime .flatpickr-days,\n\t\t\t.hasWeeks .flatpickr-days {\n\t\t\t\tborder-bottom: 0;\n\t\t\t\tborder-bottom-right-radius: 0;\n\t\t\t\tborder-bottom-left-radius: 0\n\t\t\t}\n\t\t\t.hasWeeks .flatpickr-days {\n\t\t\t\tborder-left: 0\n\t\t\t}\n\n\t\t\t.flatpickr-am-pm {\n\t\t\t\toutline: 0;\n\t\t\t\twidth: 21%;\n\t\t\t\tpadding: 0 2%;\n\t\t\t\tcursor: pointer;\n\t\t\t\ttext-align: left;\n\t\t\t}\n\n\t\t\t@media all and (-ms-high-contrast: none) {\n\t\t\t\t.flatpickr-month {\n\t\t\t\t\tpadding: 0\n\t\t\t\t}\n\t\t\t\t.flatpickr-month svg {\n\t\t\t\t\ttop: 0 !important\n\t\t\t\t}\n\t\t\t}\n\t\t';
	};

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */


	SDatepickerComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);

		// get the datepicker input target
		this._target = this;
		if (this.props.for) {
			// try to get the input
			var input = document.querySelector('[name="' + this.props.for + '"],input#' + this.props.for);
			if (input) {
				this._target = input;
			}
		}

		// instanciate the datepicker
		this._instanciateDatepicker();
	};

	/**
  * Create datepicker instance
  */


	SDatepickerComponent.prototype._instanciateDatepicker = function _instanciateDatepicker() {
		var _this2 = this;

		this._flatpickr = new _flatpickr2.default(this._target, {
			clickOpens: this.props.clickOpens,
			dateFormat: this.props.dateFormat,
			defaultDate: this._target.value || this.props.defaultDate,
			disable: this.props.disable,
			enable: this.props.enable,
			enableTime: this.props.enableTime,
			enableSeconds: this.props.enableSeconds,
			hourIncrement: this.props.hourIncrement,
			inline: this.props.inline,
			maxDate: this.props.maxDate,
			minDate: this.props.minDate,
			minuteIncrement: this.props.minuteIncrement,
			noCalendar: this.props.noCalendar,
			onChange: function onChange(dateObj, dateStr, instance) {
				_this2.props.onChange && _this2.props.onChange(dateObj, dateStr, instance);
				_this2.dispatchComponentEvent('change', {
					dateObj: dateObj,
					dateStr: dateStr,
					instance: instance
				});
			},
			onClose: this.props.onClose,
			onOpen: function onOpen(dateObj, dateStr, instance) {
				_this2.props.onOpen && _this2.props.onOpen(dateObj, dateStr, instance);
			},
			onReady: function onReady(dateObj, dateStr, instance) {
				_this2.props.onReady && _this2.props.onReady(dateObj, dateStr, instance);
				if (_this2._target.tagName.toLowerCase() === 'input') {
					if (!_this2._target.value) {
						instance.setDate(_this2.props.minDate || new Date());
					}
					instance.triggerChange();
				}
			},
			parseDate: this.props.parseDate ? this.props.parseDate.bind(this) : function (date) {
				// if the date is a time only
				if (this.props.noCalendar && this.props.enableTime) {
					return new Date(Date.parse('2000.01.01 ' + date));
				} else if ((0, _integer2.default)((0, _autoCast2.default)(date))) {
					// it's a timestamp
					return new Date(parseInt(date) * 1000);
				}
				return new Date(Date.parse(date));
			}.bind(this),
			shorthandCurrentMonth: this.props.shorthandCurrentMonth,
			time_24hr: this.props.time24hr,
			utc: this.props.utc,
			weekNumbers: this.props.weekNumbers,
			wrap: this.props.wrap
		});
	};

	/**
  * Will receive prop
  */


	SDatepickerComponent.prototype.componentWillReceiveProp = function componentWillReceiveProp(name, newVal, oldVal) {
		switch (name) {
			case 'color':
				break;
			default:
				// destroy and recreate the datepicker
				this._flatpickr.destroy();
				this._instanciateDatepicker();
				break;
		}
	};

	/**
  * Render
  * @definition 		SWebComponent.render
  */


	SDatepickerComponent.prototype.render = function render() {
		_SWebComponent.prototype.render.call(this);
		// copy props
		if (this.props.color) {
			this._flatpickr.calendarContainer.setAttribute('color', this.props.color);
		}
	};

	_createClass(SDatepickerComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {

				/**
     * Specify the name or id of the field to link the datepicker to
     * @type  		{String}
     */
				for: null,

				/**
     * Displays the calendar inline
     * @type 		{Boolean}
     */
				inline: false,

				/**
     * Specify the color to use to skin the datepicker.
     * @physicalProp
     * @observed
     * @type		{String}
     */
				color: null,

				/**
     * Allows the user to enter a date directly input the input field. By default, direct entry is disabled.
     * @type 		{Boolean}
     */
				allowInput: false,

				/**
     * Clicking on the input opens the date (time) picker. Disable this if you wish to open the calendar manually with `.open()`
     * @type 		{Boolean}
     */
				clickOpens: true,

				/**
     * A string of characters which are used to define how the date will be displayed in the input box. The supported characters are defined in the table below.
     * @type 		{String}
     */
				dateFormat: 'Y-m-d',

				/**
     * Set the initial selected date. Same as preloading a date string into an input's value attribute, but can also handle a Date object.
     * @type 		{Date}{String}
     */
				defaultDate: null,

				/**
     * Disable some dates
     * @see 		https://chmln.github.io/flatpickr/#disable
     * @type 		{Array}
     */
				disable: [],

				/**
     * Specify if the datepicker is disabled or not
     * @physicalProp
     * @observed
     * @type 		{Boolean}
     */
				disabled: false,

				/**
     * Disable all dates except the ones you specify.
     * @see 		https://chmln.github.io/flatpickr/#enable
     * @type 		{Array}
     */
				enable: [],

				/**
     * Enables time picker
     * @type 		{Boolean}
     */
				enableTime: false,

				/**
     * Enables seconds in the time picker.
     * @type 		{Boolean}
     */
				enableSeconds: false,

				/**
     * Adjusts the step for the hour input (incl. scrolling)
     * @type 		{Integer}
     */
				hourIncrement: 1,

				/**
     * Adjusts the step for the minute input (incl. scrolling)
     * @type 		{Integer}
     */
				minuteIncrement: 5,

				/**
     * The maximum date that a user can pick to.
     * @type 		{Date}{String}
     */
				maxDate: null,

				/**
     * The minimum date that a user can start picking from
     * @type 		{Date){String}}
     */
				minDate: null,

				/**
     * Hides the calendar. For use along with enableTime.
     * @type 		{Boolean}
     */
				noCalendar: false,

				/**
     * Function(s) to trigger on every date selection
     * @see 		https://chmln.github.io/flatpickr/#eventsAPI
     * @type 		{Function}
     */
				onChange: null,

				/**
     * Function(s) to trigger on every time the calendar is closed
     * @see 		https://chmln.github.io/flatpickr/#eventsAPI
     * @type 		{Function}
     */
				onClose: null,

				/**
     * Function(s) to trigger on every time the calendar is opened
     * @see 		https://chmln.github.io/flatpickr/#eventsAPI
     * @type 		{Function}
     */
				onOpen: null,

				/**
     * Function to trigger when the calendar is ready
     * @see 		https://chmln.github.io/flatpickr/#eventsAPI
     * @type 		{Function}
     */
				onReady: null,

				/**
     * Function that expects a date string and must return a Date object
     * @type 		{Function}
     */
				parseDate: false,

				/**
     * Show the month using the shorthand version (ie, Sep instead of September).
     * @type 		{Boolean}
     */
				shorthandCurrentMonth: false,

				/**
     * Displays time picker in 24 hour mode without AM/PM selection when enabled.
     * @type 		{Boolean}
     */
				time24hr: true,

				/**
     * When true, dates will parsed, formatted, and displayed in UTC. It's recommended that date strings contain the timezone, but not necessary
     * @type 		{Boolean}
     */
				utc: false,

				/**
     * Enables display of week numbers in calendar
     * @type 		{Boolean}
     */
				weekNumbers: false,

				/**
     * flatpickr can parse an input group of textboxes and buttons, common in Bootstrap and other frameworks.
     * @see 		https://chmln.github.io/flatpickr/#strap
     * @type 		{Boolean}
     */
				wrap: false

			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return ['color'];
		}
	}]);

	return SDatepickerComponent;
}(_SWebComponent3.default);

exports.default = SDatepickerComponent;