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
import __querySelectorLive from '../dom/querySelectorLive'
import __next from '../dom/next'
import __previous from '../dom/previous'
import __offset from '../dom/offset'
import __scrollTop from '../dom/scrollTop'
import __uniqid from '../tools/uniqid'
import SEvent from '../core/SEvent'
import noUiSlider from 'nouislider';

// class
class SRangeInputElement extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sRangeInput', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sRangeInput', elm, {
			start : 0,
			end : 100,
			min : 0,
			max : 100,
			connect : true,
			tooltip : true,
			value : '@value',
			formater : null
		}, settings);

		// init
		this.initProxy(this._init.bind(this));
		// this._init();
	}

	/**
	 * On added to dom
	 */
	_init() {
		if (this._inited) return;
		this._inited = true;

		console.warn('INIT');

		// create the container for the slider
		this.container = document.createElement('div');
		this.container.className = this.elm.className;

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

		this.slider = noUiSlider.create(this.container, {
			start : start,
			connect : connect,
			range : {
				min : this.settings.min,
				max : this.settings.max
			}
		});

		// setTimeout(() => {
		// 	console.log('UP');
		// 	this.attr.type = 'password';
		// },2000);

		// query references
		this.handleStartElm = this.container.querySelector('.noUi-origin:first-of-type .noUi-handle');
		this.handleEndElm = this.container.querySelector('.noUi-origin:last-of-type .noUi-handle');
		if (this.handleStartElm === this.handleEndElm) this.handleEndElm = null;

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

		// hide the base input
		this.elm.style.display = 'none';

		// append the slider into the dom
		this.elm.parentNode.insertBefore(this.container, this.elm);

		// init tooltip
		this._initTooltip();

		// set values first time
		this._boundValuesInHtml();

		// listen for update in slider
		this.slider.on('update', (e) => {
			// update values
			this._boundValuesInHtml();
		});
		this.slider.on('change', (e) => {
			// set new value in attributes
			// console.log('new vl', this.slider.get());
			this.attr.value = this.slider.get().join(',');
		});

		this.watcher.watch(this, 'settings.value', (newVal, oldVal) => {
			// console.log('update setting value', newVal, oldVal);

			// set the new values to the slider
			this.slider.set(newVal.split(','));

			console.warn('VALUE!!!', this.elm.getAttribute('value'));

		});

		// this.elm.addEventListener('change', (e) => {
		// 	console.log('new value', e);
		// 	this.settings.value = e.target.value;
		// });
	}

	/**
	 * Set tooltip values
	 */
	_boundValuesInHtml() {
		const values = this.slider.get();
		if (this.tooltipStartElm && values[0] !== undefined) {
			if (this.settings.formater) {
				this.tooltipStartElm.innerHTML = this.settings.formater(
					values[0],
					'tooltip'
				);
				this.handleStartValueElm.innerHTML = this.settings.formater(
					values[0],
					'handle'
				);

			} else {
				this.tooltipStartElm.innerHTML = Math.round(values[0]);
				this.handleStartValueElm.innerHTML = Math.round(values[0]);
			}
		}
		if (this.tooltipEndElm && values[1] !== undefined) {
			if (this.settings.formater) {
				this.tooltipEndElm.innerHTML = this.settings.formater(
					values[1],
					'tooltip'
				);
				this.handleEndValueElm.innerHTML = this.settings.formater(
					values[1],
					'handle'
				);

			} else {
				this.tooltipEndElm.innerHTML = Math.round(values[1]);
				this.handleEndValueElm.innerHTML = Math.round(values[1]);
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

// init the select
__querySelectorLive('input[s-range-input]', (elm) => {
	new SRangeInputElement(elm, {
		formater : (value, destination) => {
			if (destination === 'tooltip') {
				return Math.round(value) + '%';
			}
			return Math.round(value);
		}
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SRangeInputElement = SRangeInputElement;

// export modules
export default SRangeInputElement;
