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
import SComponent from '../core/SComponent'
import querySelectorLive from '../dom/querySelectorLive'
import __next from '../dom/next'
import __previous from '../dom/previous'
import __offset from '../dom/offset'
import __scrollTop from '../dom/scrollTop'
import __uniqid from '../tools/uniqid'
import __throttle from '../functions/throttle'
import SEvent from '../core/SEvent'
import noUiSlider from 'nouislider';

// class
class SRangeComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sRange', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sRange', elm, {
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
			updateInterval : null
		}, settings);

		// init
		this.initProxy(this._init.bind(this));

		console.warn('RANGE', this);
	}

	/**
	 * On added to dom
	 */
	_init() {

		// create the container for the slider
		this.container = document.createElement('div');
		this.container.className = this.elm.className;
		this.container.classList.add('s-range');
		this.container.classList.add('clear-transmations'); // do not animate anything at initialisation

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

		// hide the base input
		this.hideRealInput();

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
			console.warn('new value', newVal, oldVal);
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

		// append the slider into the dom
		this.elm.parentNode.insertBefore(this.container, this.elm);

		// remove the no-transmations class to let animations do their job
		setTimeout(() => {
			this.container.classList.remove('clear-transmations');
		});

		// specify what to do after updating the element
		// with the sTemplate
		this.elm.addEventListener('sTemplate:updated', (e) => {
			// hide the real input
			this.hideRealInput();
		});

	}

	/**
	 * Hide the base input
	 */
	hideRealInput() {
		// hide the base input
		// this.elm.style.position = 'absolute';
		// this.elm.style.left = '-4000px';
		// this.elm.style.opacity = 0;
	}

	/**
	 * Update attribute value
	 */
	_updateAttributeValue() {
		// set new value in attributes
		const value = this.slider.get();
		if (typeof(value) === 'number' || typeof(value) === 'string') {
			if (this.settings.formater) {
				this.attr.value = this.settings.formater(value, 'input');
			} else {
				this.attr.value = value;
			}
		} else {
			if (this.settings.formater) {
				this.attr.value = this.slider.get().map((val) => {
					return this.settings.formater(val, 'input');
				}).join(',');
			} else {
				this.attr.value = this.slider.get().join(',');
			}
		}
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
			if (this.settings.formater) {
				this.handleStartValueElm.innerHTML = this.settings.formater(
					values[0],
					'handle'
				);

			} else {
				this.handleStartValueElm.innerHTML = Math.round(values[0]);
			}
		}
		if (this.handleEndValueElm && values[1] !== undefined) {
			if (this.settings.formater) {
				this.handleEndValueElm.innerHTML = this.settings.formater(
					values[1],
					'handle'
				);

			} else {
				this.handleEndValueElm.innerHTML = Math.round(values[1]);
			}
		}

		// set tooltips
		if (this.tooltipStartElm && values[0] !== undefined) {
			if (this.settings.formater) {
				this.tooltipStartElm.innerHTML = this.settings.formater(
					values[0],
					'tooltip'
				);
			} else {
				this.tooltipStartElm.innerHTML = Math.round(values[0]);
			}
		}
		if (this.tooltipEndElm && values[1] !== undefined) {
			if (this.settings.formater) {
				this.tooltipEndElm.innerHTML = this.settings.formater(
					values[1],
					'tooltip'
				);
			} else {
				this.tooltipEndElm.innerHTML = Math.round(values[1]);
			}
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

// default formaters
SRangeComponent.percentFormater = function(value, target) {
	if (target === 'tooltip') {
		return Math.round(value) + '%';
	}
	return Math.round(value);
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SRangeComponent = SRangeComponent;

// initOn
SRangeComponent.initOn = function(selector, settings = {}) {
	// init the select
	return querySelectorLive(selector).visible().once().subscribe((elm) => {
		new SRangeComponent(elm, {
			formater : SRangeComponent.percentFormater,
			...settings
		});
	});
};

// export modules
export default SRangeComponent;
