'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class = require('../../SSlideshowComponent/class');

var _class2 = _interopRequireDefault(_class);

var _querySelectorLive = require('../../../js/dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

var _isInViewport = require('../../../js/dom/isInViewport');

var _isInViewport2 = _interopRequireDefault(_isInViewport);

var _autoCast = require('../../../js/utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

var _STimer = require('../../../js/classes/STimer');

var _STimer2 = _interopRequireDefault(_STimer);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SSlideshowInteractiveComponent = function (_SSlideshowComponentC) {
	_inherits(SSlideshowInteractiveComponent, _SSlideshowComponentC);

	function SSlideshowInteractiveComponent() {
		_classCallCheck(this, SSlideshowInteractiveComponent);

		return _possibleConstructorReturn(this, _SSlideshowComponentC.apply(this, arguments));
	}

	/**
  * Component will mount
  * @definition 			SWebComponent.componentWillMount
  */
	SSlideshowInteractiveComponent.prototype.componentWillMount = function componentWillMount() {
		_SSlideshowComponentC.prototype.componentWillMount.call(this);
	};

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */


	SSlideshowInteractiveComponent.prototype.componentMount = function componentMount() {
		_SSlideshowComponentC.prototype.componentMount.call(this);
	};

	/**
  * Component unmount
  * @definition 		SWebComponent.componentUnmount
  */


	SSlideshowInteractiveComponent.prototype.componentUnmount = function componentUnmount() {
		_SSlideshowComponentC.prototype.componentUnmount.call(this);
	};

	/**
  * When the user click on the slideshow
  * @param 	{Event} 	e 	The event
  */


	SSlideshowInteractiveComponent.prototype._onClick = function _onClick(e) {
		// check if we click on a goto element
		var goTo = e.target.getAttribute(this._componentNameDash + '-goto');
		if (goTo) {
			// go to wanted slide
			this.goTo((0, _autoCast2.default)(goTo));
		} else {
			if (this.props.changeOnClick) {
				if (this.props.direction === 'forward') {
					this.next();
				} else {
					this.previous();
				}
			}
		}
	};

	/**
  * When the user has clicked on the next button
  * @param 	{Event} 	e 	The event
  */


	SSlideshowInteractiveComponent.prototype._onNextClick = function _onNextClick(e) {
		e.preventDefault();
		e.stopPropagation();
		this.next();
	};

	/**
  * When the user has clicked on the previous button
  * @param 	{Event} 	e 	The event
  */


	SSlideshowInteractiveComponent.prototype._onPreviousClick = function _onPreviousClick(e) {
		e.preventDefault();
		e.stopPropagation();
		this.previous();
	};

	/**
  * When the element is enabled
  * @return 	{SSlideshowComponent}
  */


	SSlideshowInteractiveComponent.prototype.enable = function enable() {
		_SSlideshowComponentC.prototype.enable.call(this);

		// listen for click on element
		this.addEventListener('click', this._onClick.bind(this));

		// enable keyboard navigation
		if (this.props.keyboardEnabled) {
			this._initKeyboardNavigation();
		}
		// enable touch navigation
		if (this.props.touchEnabled) {
			this._initTouchNavigation();
		}

		// init the previous and next navigation
		this._initPreviousAndNextButtons();

		// maintain chainability
		return this;
	};

	/**
  * When the element is disabled
  * @return 	{SSlideshowComponent}
  */


	SSlideshowInteractiveComponent.prototype.disable = function disable() {
		_SSlideshowComponentC.prototype.disable.call(this);
		// disable keyboard navigation
		document.removeEventListener('keyup', this._onKeyup);
		// do not listen for click anymore
		this.removeEventListener('click', this._onClick);
		// disable touch navigation
		this.removeEventListener('swipeleft', this._onSwipe);
		this.removeEventListener('swiperight', this._onSwipe);
		// do not listen for previous and next click
		this._refs.previous && this._refs.previous.removeEventListener('click', this._onPreviousClick);
		this._refs.next && this._refs.next.removeEventListener('click', this._onNextClick);
		// maintain chainability
		return this;
	};

	/**
  * When the element is destroyed
  */


	SSlideshowInteractiveComponent.prototype.destroy = function destroy() {
		_SSlideshowComponentC.prototype.destroy.call(this);
	};

	/**
  * Init the previous and next buttons
  */


	SSlideshowInteractiveComponent.prototype._initPreviousAndNextButtons = function _initPreviousAndNextButtons() {
		// if the next element exist
		if (this._refs.next) {
			this._refs.next.addEventListener('click', this._onNextClick.bind(this));
		}
		// if the previous element exist
		if (this._refs.previous) {
			this._refs.previous.addEventListener('click', this._onPreviousClick.bind(this));
		}
	};

	/**
  * Init the keyboard navigation
  */


	SSlideshowInteractiveComponent.prototype._initKeyboardNavigation = function _initKeyboardNavigation() {
		// listen for keyup event
		document.addEventListener('keyup', this._onKeyup.bind(this));
	};

	/**
  * Init the touch navigation
  */


	SSlideshowInteractiveComponent.prototype._initTouchNavigation = function _initTouchNavigation() {
		// listen for swiped
		this.addEventListener('swipeleft', this._onSwipe.bind(this));
		this.addEventListener('swiperight', this._onSwipe.bind(this));
	};

	/**
  * When the user has swiped on the slideshow
  * @param 	{Event} 	e 	The event
  */


	SSlideshowInteractiveComponent.prototype._onSwipe = function _onSwipe(e) {
		// check the swipe direction
		switch (e.type) {
			case 'swipeleft':
				this.next();
				break;
			case 'swiperight':
				this.previous();
				break;
		}
	};

	/**
  * When the user has released a keyboard key
  * @param 	{Event} 	e 	The event
  */


	SSlideshowInteractiveComponent.prototype._onKeyup = function _onKeyup(e) {
		// do nothing if the slideshow is not in viewport
		if (!(0, _isInViewport2.default)(this)) return;

		// check the key
		switch (e.keyCode) {
			case 39:
				// right arrow
				this.next();
				break;
			case 37:
				// left arrow
				this.previous();
				break;
		}
	};

	/**
     * Go find into dom every elements needed for the slideshow
     * @return 	{void}
  */


	SSlideshowInteractiveComponent.prototype._updateReferences = function _updateReferences() {
		_SSlideshowComponentC.prototype._updateReferences.call(this);
		// grab the next and previous element
		this._refs.next = this.querySelector(this._componentNameDash + '-next, [' + this._componentNameDash + '-next]');
		this._refs.previous = this.querySelector(this._componentNameDash + '-previous, [' + this._componentNameDash + '-previous]');
	};

	_createClass(SSlideshowInteractiveComponent, null, [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {

				/**
     * Change slide when click on the slideshow depending on the props.direction setting
     * @prop
     * @type 	{Boolean}
     */
				changeOnClick: false,

				/**
     * Set the direction of the slideshow when click
     * @prop
     * @type 		{String}
     * @values 		forward|backward
     */
				direction: 'forward',

				/**
     * Set if the keyboard navigation is enabled
     * @prop
     * @type 	{Boolean}
     */
				keyboardEnabled: true,

				/**
     * Set if the touch navigation is enabled
     * @prop
     * @type 	{Boolean}
     */
				touchEnabled: true
			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return [];
		}
	}]);

	return SSlideshowInteractiveComponent;
}(_class2.default);

exports.default = SSlideshowInteractiveComponent;