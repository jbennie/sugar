import SInputWebComponent from '../../../js/core/SInputWebComponent'
import __throttle from '../../../js/utils/functions/throttle'
import noUiSlider from 'nouislider';
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'
import __dispatchEvent from '../../../js/dom/dispatchEvent'
import __insertAfter from '../../../js/dom/insertAfter'

export default class SRangeComponent extends SInputWebComponent {

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
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {
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
			value : null,
			formater : null,
			color : 'default',
			updateInterval : null
		}
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return ['color'];
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// default formater
		this._formater = (value, destination, api) => {
			return value;
		};

		// manage the formater setting
		if (this.props.formater) {
			if (typeof(this.props.formater) === 'string') {
				if ( ! SRangeComponent.formaters[this.props.formater]) {
					throw `The formater "${this.props.formater}" does not exist. Make sure to register if through the static method SRangeComponent.registerFormater`;
				}
				this._formater = SRangeComponent.formaters[this.props.formater];
			} else if (typeof(this.props.formater) === 'function') {
				this._formater = this.props.formater;
			}
		}

		// create the container for the slider
		this.container = document.createElement('div');
		this.container.setAttribute(`${this._componentNameDash}-container`, true);

		// range element
		this.rangeElm = document.createElement('div');
		this.container.appendChild(this.rangeElm);

		// init new noUiSlider
		let start = this.props.start;
		if (this.props.end) {
			start = [start, this.props.end];
		}

		let connect = this.props.connect;
		if (this.props.end === null && connect !== false) {
			connect = 'lower';
		} else if (connect === null) {
			connect = false;
		}

		let args = {
			start : start,
			connect : connect,
			orientation : this.props.orientation,
			direction : this.props.direction,
			range : {
				min : this.props.min || this.props.start || 0,
				max : this.props.max || this.props.end || 100
			}
		};

		if (this.props.margin) {
			args.margin = this.props.margin;
		}
		if (this.props.limit) {
			args.limit = this.props.limit;
		}
		if (this.props.step) {
			args.step = this.props.step;
		}
		this.slider = noUiSlider.create(this.rangeElm, args);

		// set the value
		if (this.props.value) {
			this.slider.set(this.props.value.toString().split(','));
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
		if (this.props.tooltips)
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

		// this.watch('settings.value', (newVal, oldVal) => {
		// 	// set the new values to the slider
		// 	// but this, only if the slider is not
		// 	// busy, mean that the user is using it
		// 	if ( ! this._busy) {
		// 		this.slider.set(newVal.toString().split(','));
		// 	}
		// });

		// set values first time
		this._boundValuesInHtml();

		// throttled update
		let _throttledUpdateFn = null;
		if (this.props.updateInterval) {
			_throttledUpdateFn = __throttle(() => {
				this._updateAttributeValue();
			}, this.props.updateInterval);
		}

		// listen for update in slider
		this.slider.on('update', (e) => {
			// update values
			this._boundValuesInHtml();
			// check if need to update
			if (_throttledUpdateFn) _throttledUpdateFn();
		});

		// hide the base input
		this._hideRealInput();

		// do not animate anything at start
		this.container.classList.add('clear-transmations'); // do not animate anything at initialisation

		// append the slider into the dom
		__insertAfter(this.container, this);

		// remove the no-transmations class to let animations do their job
		setTimeout(() => {
			this.container.classList.remove('clear-transmations');
		});
	}

	/**
	 * Component will receive prop
	 * @definition 		SWebComponent.componentWillReceiveProp
	 */
	componentWillReceiveProp(name, newVal, oldVal) {
		switch(name) {
			case 'value':
				// set the new values to the slider
				// but this, only if the slider is not
				// busy, mean that the user is using it
				if ( ! this._busy) {
					this.slider.set(newVal.toString().split(','));
				}
			break;
		}
	}

	/**
	 * Hide the base input
	 */
	_hideRealInput() {
		// hide the base input
		this.style.position = 'absolute';
		this.style.left = '-4000px';
		this.style.opacity = 0;
	}

	/**
	 * Show the base input
	 */
	_showRealInput() {
		this.style.position = '';
		this.style.left = '';
		this.style.opacity = 1;
	}

	/**
	 * Update attribute value
	 */
	_updateAttributeValue() {
		// set new value in attributes
		const value = this.slider.get();
		let newValue = value;
		if (typeof(value) === 'number' || typeof(value) === 'string') {
			newValue = this._formater(value, 'input', this);
		} else {
			newValue = this.slider.get().map((val) => {
				return this._formater(val, 'input', this);
			}).join(',');
		}
		// trigger a change event
		this.setAttribute('value', newValue);
		this.value = newValue;
		__dispatchEvent(this, 'change');
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

sTemplateIntegrator.registerComponentIntegration('SRangeComponent', (component) => {
	sTemplateIntegrator.ignore(component, {
		style : true,
		value : true
	 });
});
