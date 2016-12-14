'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SInputWebComponent2 = require('../../../js/core/SInputWebComponent');

var _SInputWebComponent3 = _interopRequireDefault(_SInputWebComponent2);

var _throttle = require('../../../js/utils/functions/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

var _nouislider = require('nouislider');

var _nouislider2 = _interopRequireDefault(_nouislider);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

var _dispatchEvent = require('../../../js/dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _insertAfter = require('../../../js/dom/insertAfter');

var _insertAfter2 = _interopRequireDefault(_insertAfter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SRangeComponent = function (_SInputWebComponent) {
	_inherits(SRangeComponent, _SInputWebComponent);

	function SRangeComponent() {
		_classCallCheck(this, SRangeComponent);

		return _possibleConstructorReturn(this, _SInputWebComponent.apply(this, arguments));
	}

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SRangeComponent.prototype.componentMount = function componentMount() {
		var _this2 = this;

		_SInputWebComponent.prototype.componentMount.call(this);

		// default formater
		this._formater = function (value, destination, api) {
			return value;
		};

		// manage the formater setting
		if (this.props.formater) {
			if (typeof this.props.formater === 'string') {
				if (!SRangeComponent.formaters[this.props.formater]) {
					throw 'The formater "' + this.props.formater + '" does not exist. Make sure to register if through the static method SRangeComponent.registerFormater';
				}
				this._formater = SRangeComponent.formaters[this.props.formater];
			} else if (typeof this.props.formater === 'function') {
				this._formater = this.props.formater;
			}
		}

		// create the container for the slider
		this.container = document.createElement('div');
		this.container.setAttribute(this._componentNameDash + '-container', true);
		this.container.setAttribute('class', this.className);

		// range element
		this.rangeElm = document.createElement('div');
		this.container.appendChild(this.rangeElm);

		// init new noUiSlider
		var start = this.props.start;
		if (this.props.end) {
			start = [start, this.props.end];
		}

		var connect = this.props.connect;
		if (this.props.end === null && connect !== false) {
			connect = 'lower';
		} else if (connect === null) {
			connect = false;
		}

		var args = {
			start: start,
			connect: connect,
			orientation: this.props.orientation,
			direction: this.props.direction,
			range: {
				min: this.props.min || this.props.start || 0,
				max: this.props.max || this.props.end || 100
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
		this.slider = _nouislider2.default.create(this.rangeElm, args);

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
		if (this.props.tooltips) this._initTooltip();

		// keep track of busy status
		this.slider.on('start', function (e) {
			_this2._busy = true;
		});
		this.slider.on('end', function (e) {
			_this2._busy = false;
		});

		// listen when slider has his value updated
		// the change event will not be fired during the dragging
		this.slider.on('change', function (e) {
			// update attribute value
			_this2._updateAttributeValue();
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
		var _throttledUpdateFn = null;
		if (this.props.updateInterval) {
			_throttledUpdateFn = (0, _throttle2.default)(function () {
				_this2._updateAttributeValue();
			}, this.props.updateInterval);
		}

		// listen for update in slider
		this.slider.on('update', function (e) {
			// update values
			_this2._boundValuesInHtml();
			// check if need to update
			if (_throttledUpdateFn) _throttledUpdateFn();
		});

		// hide the base input
		this._hideRealInput();

		// do not animate anything at start
		this.container.classList.add('clear-transmations'); // do not animate anything at initialisation

		// append the slider into the dom
		(0, _insertAfter2.default)(this.container, this);

		// remove the no-transmations class to let animations do their job
		setTimeout(function () {
			_this2.container.classList.remove('clear-transmations');
		});
	};

	/**
  * Component will receive prop
  * @definition 		SWebComponent.componentWillReceiveProp
  */


	SRangeComponent.prototype.componentWillReceiveProp = function componentWillReceiveProp(name, newVal, oldVal) {
		switch (name) {
			case 'value':
				// set the new values to the slider
				// but this, only if the slider is not
				// busy, mean that the user is using it
				if (!this._busy) {
					this.slider.set(newVal.toString().split(','));
				}
				break;
		}
	};

	/**
  * Hide the base input
  */


	SRangeComponent.prototype._hideRealInput = function _hideRealInput() {
		// hide the base input
		this.style.position = 'absolute';
		this.style.left = '-4000px';
		this.style.opacity = 0;
	};

	/**
  * Show the base input
  */


	SRangeComponent.prototype._showRealInput = function _showRealInput() {
		this.style.position = '';
		this.style.left = '';
		this.style.opacity = 1;
	};

	/**
  * Update attribute value
  */


	SRangeComponent.prototype._updateAttributeValue = function _updateAttributeValue() {
		var _this3 = this;

		// set new value in attributes
		var value = this.slider.get();
		var newValue = value;
		if (typeof value === 'number' || typeof value === 'string') {
			newValue = this._formater(value, 'input', this);
		} else {
			newValue = this.slider.get().map(function (val) {
				return _this3._formater(val, 'input', _this3);
			}).join(',');
		}
		// trigger a change event
		this.setAttribute('value', newValue);
		this.value = newValue;
		(0, _dispatchEvent2.default)(this, 'change');
	};

	/**
  * Set tooltip values
  */


	SRangeComponent.prototype._boundValuesInHtml = function _boundValuesInHtml() {
		var _this4 = this;

		var values = [].concat(this.slider.get());

		// if we have 2 values
		// we set the width of the .noUi-target.noUi-background:before
		// to the left percentage of the lower handle
		if (values.length == 2) {
			setTimeout(function () {
				_this4.backgroundLowerElm.style.right = 100 - parseInt(_this4.connectElm.style.left) + '%';
			});
		}

		// handle values
		if (this.handleStartValueElm && values[0] !== undefined) {
			this.handleStartValueElm.innerHTML = this._formater(values[0], 'handle', this);
		}
		if (this.handleEndValueElm && values[1] !== undefined) {
			this.handleEndValueElm.innerHTML = this._formater(values[1], 'handle', this);
		}

		// set tooltips
		if (this.tooltipStartElm && values[0] !== undefined) {
			this.tooltipStartElm.innerHTML = this._formater(values[0], 'tooltip', this);
		}
		if (this.tooltipEndElm && values[1] !== undefined) {
			this.tooltipEndElm.innerHTML = this._formater(values[1], 'tooltip', this);
		}
	};

	/**
  * Init tooltip
  */


	SRangeComponent.prototype._initTooltip = function _initTooltip() {
		// append tooltip in the handles
		if (this.handleStartElm) {
			// generate html structure
			var tooltipStartElm = document.createElement('div');
			tooltipStartElm.classList.add('tooltip');
			this.handleStartElm.appendChild(tooltipStartElm);
			this.tooltipStartElm = tooltipStartElm;
		}
		if (this.handleEndElm) {
			// generate html structure
			var tooltipEndElm = document.createElement('div');
			tooltipEndElm.classList.add('tooltip');
			this.handleEndElm.appendChild(tooltipEndElm);
			this.tooltipEndElm = tooltipEndElm;
		}
	};

	_createClass(SRangeComponent, null, [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {
				start: 0,
				end: null,
				min: null,
				max: null,
				step: null,
				margin: null,
				limit: null,
				orientation: 'horizontal',
				direction: 'ltr',
				tooltips: true,
				connect: true,
				tooltip: true,
				value: null,
				formater: null,
				color: 'default',
				updateInterval: null
			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   */


		/**
   * formaters
   * Store the formaters functions
   * @type 	{Object}
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return ['color'];
		}
	}]);

	return SRangeComponent;
}(_SInputWebComponent3.default);

SRangeComponent.formaters = {

	// round the value
	rounded: function rounded(value, target, api) {
		return Math.round(value);
	}

};
exports.default = SRangeComponent;


_sTemplateIntegrator2.default.registerComponentIntegration(SRangeComponent, function (component) {
	_sTemplateIntegrator2.default.ignore(component, {
		style: true,
		value: true
	});
});