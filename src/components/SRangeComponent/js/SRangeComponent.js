/*
 * Sugar-activate.js
#
 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
#
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  20.01.16
 * @updated  20.01.16
 * @version  1.0.0
 */
import SComponent from '../../../js/core/SComponent'
import __throttle from '../../../js/utils/functions/throttle'
import noUiSlider from 'nouislider';
import STemplate from '../../../js/core/STemplate'
import __dispatchEvent from '../../../js/dom/dispatchEvent'
import __insertAfter from '../../../js/dom/insertAfter'

// class
class SRangeComponent extends SComponent {

	/**
	 * formaters
	 * Store the formaters functions
	 * @type 	{Object}
	 */
	static formaters = {

		// round the value
		rounded : (value, target, api) => {
			return Math.round(value);
		}

	};

	/**
	 * _formater
	 * Store the formater function that will be used to bound
	 * the value into the html
	 * @type 	{Function}
	 */
	_formater = (value, destination, api) => {
		return value;
	};

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sRange') {
		super(elm, {
			start : 0,
			end : null,
			min : null,
			max : null,
			step : null,
			margin : null,
			limit : null,
			orientation : 'horizontal',
			direction : 'ltr',
			tooltips : true,
			connect : true,
			tooltip : true,
			value : '@value',
			formater : null,
			updateInterval : null,
			...settings
		}, name);
	}

	/**
	 * On added to dom
	 */
	_init() {
		// init component
		super._init();

		// manage the formater setting
		if (this.settings.formater) {
			if (typeof(this.settings.formater) === 'string') {
				if ( ! SRangeComponent.formaters[this.settings.formater]) {
					throw `The formater "${this.settings.formater}" does not exist. Make sure to register if through the static method SRangeComponent.registerFormater`;
				}
				this._formater = SRangeComponent.formaters[this.settings.formater];
			} else if (typeof(this.settings.formater) === 'function') {
				this._formater = this.settings.formater;
			}
		}

		// create the container for the slider
		this.container = document.createElement('div');
		this.container.className = this.elm.className;
		this.addComponentClass(this.container);

		// range element
		this.rangeElm = document.createElement('div');
		this.container.appendChild(this.rangeElm);

		// init new noUiSlider
		let start = this.settings.start;
		if (this.settings.end) {
			start = [start, this.settings.end];
		}

		let connect = this.settings.connect;
		if (this.settings.end === null && connect !== false) {
			connect = 'lower';
		} else if (connect === null) {
			connect = false;
		}

		let args = {
			start : start,
			connect : connect,
			orientation : this.settings.orientation,
			direction : this.settings.direction,
			range : {
				min : this.settings.min || this.settings.start || 0,
				max : this.settings.max || this.settings.end || 100
			}
		};

		if (this.settings.margin) {
			args.margin = this.settings.margin;
		}
		if (this.settings.limit) {
			args.limit = this.settings.limit;
		}
		if (this.settings.step) {
			args.step = this.settings.step;
		}
		this.slider = noUiSlider.create(this.rangeElm, args);

		// set the value
		if (this.attr.value) {
			this.slider.set(this.attr.value.toString().split(','));
		}

		// remove the noUi-background class on the main element
		this.rangeElm.classList.remove('noUi-background');

		// query references
		this.handleStartElm = this.container.querySelector('.noUi-origin:first-of-type .noUi-handle');
		this.handleEndElm = this.container.querySelector('.noUi-origin:last-of-type .noUi-handle');
		if (this.handleStartElm === this.handleEndElm) this.handleEndElm = null;
		this.connectElm = this.container.querySelector('.noUi-connect');
		this.baseElm = this.container.querySelector('.noUi-base');

		// create handleValueElm
		if (this.handleStartElm) {
			this.handleStartValueElm = document.createElement('div');
			this.handleStartValueElm.classList.add('noUi-handle__value');
			this.handleStartElm.appendChild(this.handleStartValueElm);
		}
		if (this.handleEndElm) {
			this.handleEndValueElm = document.createElement('div');
			this.handleEndValueElm.classList.add('noUi-handle__value');
			this.handleEndElm.appendChild(this.handleEndValueElm);
		}

		// create new noUi-background.noUi-origin for the lower background
		this.backgroundLowerElm = document.createElement('div');
		this.backgroundLowerElm.classList.add('noUi-origin');
		this.backgroundLowerElm.classList.add('noUi-background');
		this.backgroundLowerElm.style.right = '100%';

		// append the element to the base
		this.baseElm.appendChild(this.backgroundLowerElm);

		// init tooltip
		if (this.settings.tooltips)
			this._initTooltip();

		// keep track of busy status
		this.slider.on('start', (e) => {
			this._busy = true;
		});
		this.slider.on('end', (e) => {
			this._busy = false;
		});

		// listen when slider has his value updated
		// the change event will not be fired during the dragging
		this.slider.on('change', (e) => {
			// update attribute value
			this._updateAttributeValue();
		});

		this.watch('settings.value', (newVal, oldVal) => {
			// set the new values to the slider
			// but this, only if the slider is not
			// busy, mean that the user is using it
			if ( ! this._busy) {
				this.slider.set(newVal.toString().split(','));
			}
		});

		// set values first time
		this._boundValuesInHtml();

		// throttled update
		let _throttledUpdateFn = null;
		if (this.settings.updateInterval) {
			_throttledUpdateFn = __throttle(() => {
				this._updateAttributeValue();
			}, this.settings.updateInterval);
		}

		// listen for update in slider
		this.slider.on('update', (e) => {
			// update values
			this._boundValuesInHtml();
			// check if need to update
			if (_throttledUpdateFn) _throttledUpdateFn();
		});

	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SRangeComponent}
	 */
	enable() {

		// enable super
		super.enable();

		// hide the base input
		this._hideRealInput();

		// do not animate anything at start
		this.container.classList.add('clear-transmations'); // do not animate anything at initialisation

		// append the slider into the dom
		__insertAfter(this.container, this.elm);

		// remove the no-transmations class to let animations do their job
		setTimeout(() => {
			this.container.classList.remove('clear-transmations');
		});

		// maintain chainability
		return this;
	}

	/**
	 * disable
	 * Disable the component
	 * @return 	{SRangeComponent}
	 */
	disable() {

		// remove the range element from dom
		if (this.container.parentNode) {
			this.container.parentNode.removeChild(this.container);
		}

		// show the base input
		this._showRealInput();

		// disable parent
		super.disable();

		// maintain chainability
		return this;
	}

	/**
	 * Hide the base input
	 */
	_hideRealInput() {
		if (this.isDisabled()) return;
		// hide the base input
		this.elm.style.position = 'absolute';
		this.elm.style.left = '-4000px';
		this.elm.style.opacity = 0;
	}

	/**
	 * Show the base input
	 */
	_showRealInput() {
		this.elm.style.position = '';
		this.elm.style.left = '';
		this.elm.style.opacity = 1;
	}

	/**
	 * Update attribute value
	 */
	_updateAttributeValue() {
		// set new value in attributes
		const value = this.slider.get();
		if (typeof(value) === 'number' || typeof(value) === 'string') {
			this.attr.value = this._formater(value, 'input', this);
		} else {
			this.attr.value = this.slider.get().map((val) => {
				return this._formater(val, 'input', this);
			}).join(',');
		}
		// trigger a change event
		__dispatchEvent(this.elm, 'keyup');
		__dispatchEvent(this.elm, 'keydown');
	}

	/**
	 * Set tooltip values
	 */
	_boundValuesInHtml() {

		const values = [].concat(this.slider.get());

		// if we have 2 values
		// we set the width of the .noUi-target.noUi-background:before
		// to the left percentage of the lower handle
		if (values.length == 2) {
			setTimeout(() => {
				this.backgroundLowerElm.style.right = 100 - parseInt(this.connectElm.style.left) + '%';
			});
		}

		// handle values
		if (this.handleStartValueElm && values[0] !== undefined) {
			this.handleStartValueElm.innerHTML = this._formater(
				values[0],
				'handle',
				this
			);
		}
		if (this.handleEndValueElm && values[1] !== undefined) {
			this.handleEndValueElm.innerHTML = this._formater(
				values[1],
				'handle',
				this
			);
		}

		// set tooltips
		if (this.tooltipStartElm && values[0] !== undefined) {
			this.tooltipStartElm.innerHTML = this._formater(
				values[0],
				'tooltip',
				this
			);
		}
		if (this.tooltipEndElm && values[1] !== undefined) {
			this.tooltipEndElm.innerHTML = this._formater(
				values[1],
				'tooltip',
				this
			);
		}
	}

	/**
	 * Init tooltip
	 */
	_initTooltip() {
		// append tooltip in the handles
		if (this.handleStartElm) {
			// generate html structure
			const tooltipStartElm = document.createElement('div');
			tooltipStartElm.classList.add('tooltip');
			this.handleStartElm.appendChild(tooltipStartElm);
			this.tooltipStartElm = tooltipStartElm;
		}
		if (this.handleEndElm) {
			// generate html structure
			const tooltipEndElm = document.createElement('div');
			tooltipEndElm.classList.add('tooltip');
			this.handleEndElm.appendChild(tooltipEndElm);
			this.tooltipEndElm = tooltipEndElm;
		}
	}
}

// STemplate integration
STemplate.registerComponentIntegration('SRangeComponent', (component) => {
	STemplate.ignore(component.container)
			 .ignore(component.elm, {
				style : true
			 });
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SRangeComponent = SRangeComponent;

// export modules
export default SRangeComponent;
