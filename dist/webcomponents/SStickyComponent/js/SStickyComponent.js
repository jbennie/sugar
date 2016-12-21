'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _scrollTop = require('../../../js/dom/scrollTop');

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _offset = require('../../../js/dom/offset');

var _offset2 = _interopRequireDefault(_offset);

var _getAnimationProperties = require('../../../js/dom/getAnimationProperties');

var _getAnimationProperties2 = _interopRequireDefault(_getAnimationProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SStickyComponent = function (_SWebComponent) {
	_inherits(SStickyComponent, _SWebComponent);

	function SStickyComponent() {
		_classCallCheck(this, SStickyComponent);

		return _possibleConstructorReturn(this, _SWebComponent.apply(this, arguments));
	}

	/**
  * Component will mount
  * @definition 		SWebComponent.componentWillMount
  */
	SStickyComponent.prototype.componentWillMount = function componentWillMount() {
		_SWebComponent.prototype.componentWillMount.call(this);

		/**
   * Update counter to update the sizes, offsets, etc not at each scroll event
   * @type 	{Integer}
   */
		this._updateCounter = 0;

		/**
   * Store the reset timeout to be able to clear it when needed
   * @type 	{Timeout}
   */
		this._resetTimeout = null;

		/**
   * Store the sticked element height
   * @type 	{Number}
   */
		this._elmHeight = 0;

		/**
   * Store the element width to apply it when position is fixed, etc...
   * @type 	{Number}
   */
		this._elmWidth = 0;

		/**
   * Store the reference to the element used as top boundary
   * @type 	{Element}
   */
		this._topElm = null;

		/**
   * Store the reference to the element used as bottom boundary
   * @type 	{Element}
   */
		this._bottomElm = null;
	};

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */


	SStickyComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);

		// save initial element setup
		this.base_position = this.style.position;
		this.base_top = parseInt(this.style.top) || 0;
		this.base_height = parseInt(this.offsetHeight);

		// get top element
		this._topElm = this.props.topElm || this.parentNode;
		this._bottomElm = this.props.bottomElm || this.parentNode;

		// listen for scroll
		window.addEventListener('scroll', this._onScroll.bind(this));

		// listen for resize
		window.addEventListener('resize', this._onResize.bind(this));

		// first call of onScroll
		this._onScroll(null);
	};

	/**
  * On scroll
  */


	SStickyComponent.prototype._onScroll = function _onScroll(e) {
		// handle disabled
		if (this.props.disabled === true) {
			if (this.isSticked()) this.reset();
			return;
		};
		if (typeof this.props.disabled === 'function' && this.props.disabled(this)) {
			if (this.isSticked()) this.reset();
			return;
		}

		// calculate the detect offset
		var offsetTopDetection = this.props.offsetTopDetection;
		if (typeof this.props.offsetTopDetection === 'function') {
			offsetTopDetection = this.props.offsetTopDetection(this);
		}
		offsetTopDetection = parseInt(offsetTopDetection);

		// manage recalc
		this._updateCounter -= 1;
		if (this._updateCounter <= 0) {
			this._update();
		}

		// scrollTop
		var scrollTop = (0, _scrollTop2.default)() + offsetTopDetection;
		scrollTop = (0, _scrollTop2.default)();

		if (scrollTop > this.boundary.bottom - this._elmHeight - (this.props.offsetTop + this.props.offsetBottom)) {
			// update needReset status
			this.needReset = true;
			// clear the _resetTimeout
			clearTimeout(this._resetTimeout);
			// the element need to be sticked on top of the window
			if (this.base_position === 'fixed') {
				this.style.top = this.boundary.bottom - scrollTop - this._elmHeight - this.props.offsetBottom + this.base_top;
			} else {
				this.style.position = 'absolute';
				this.style.bottom = this.props.offsetBottom + 'px';
				this.style.top = 'auto';
				this.addComponentClass(this, null, null, 'sticked');
			}
			// handle placeholder if needed
			if (this.props.placeholder) {
				this._addPlaceholder();
			}
			// add dirty class
			this.addComponentClass(this, null, null, 'dirty');
		} else if (scrollTop - offsetTopDetection > this.boundary.top) {
			// update needReset status
			this.needReset = true;
			// clear the _resetTimeout
			clearTimeout(this._resetTimeout);
			// the element need to be sticked on bottom of the
			// relative element
			this.style.position = 'fixed';
			this.style.top = this.props.offsetTop + 'px';
			this.style.bottom = 'auto';
			this.style.width = this._elmWidth + 'px';
			this.addComponentClass(this, null, null, 'sticked');
			// handle placeholder if needed
			if (this.props.placeholder) {
				this._addPlaceholder();
			}
			// add dirty class
			this.addComponentClass(this, null, null, 'dirty');
		} else {
			// no more sticked
			this.reset();
		}
	};

	/**
  * On resize
  */


	SStickyComponent.prototype._onResize = function _onResize(e) {
		var _this2 = this;

		clearTimeout(this.resizeTimeout);
		this.resizeTimeout = setTimeout(function () {
			// update
			_this2._update();
		}, this.props.resizeTimeout);
	};

	/**
  * Add placeholder
  */


	SStickyComponent.prototype._addPlaceholder = function _addPlaceholder() {
		var _this3 = this;

		// create if needed
		if (!this.placeholderElm) {
			this.placeholderElm = document.createElement('div');
			this.addComponentClass(this.placeholderElm, 'placeholder');
		}
		this.placeholderElm.style.width = this._elmWidth + 'px';
		this.placeholderElm.style.height = this.base_height + 'px';

		// add the placeholder into the dom
		if (!this.placeholderElm.parentNode) {
			this.mutate(function () {
				_this3.parentNode.insertBefore(_this3.placeholderElm, _this3);
			});
		}
	};

	/**
  * Update sizes, etc...
  */


	SStickyComponent.prototype._update = function _update() {

		// bottom
		var bottom = this.props.bottom;
		if (typeof this.props.bottom !== 'number') {
			bottom = (0, _offset2.default)(this._bottomElm).top + this._bottomElm.offsetHeight;
		}

		// top
		var top = this.props.top;
		if (typeof this.props.top !== 'number') {
			top = (0, _offset2.default)(this._topElm).top;
		}

		// calculate boundaries
		this.boundary = {
			top: top,
			bottom: bottom
		};

		// element height
		if (!this.props.height) {
			this._elmHeight = this.offsetHeight;
		} else if (typeof this.props.height === 'string') {
			this._elmHeight = document.querySelector(this.props.height).offsetHeight;
		} else if (typeof this.props.height === 'number') {
			this._elmHeight = this.props.height;
		}

		// element width
		if (!this.props.width) {
			if (this.isSticked()) {
				this._elmWidth = this.parentNode.offsetWidth;
			} else {
				this._elmWidth = this.offsetWidth;
			}
		} else if (typeof this.props.width === 'string') {
			this._elmWidth = document.querySelector(this.props.width).offsetWidth;
		} else if (typeof this.props.width === 'number') {
			this._elmWidth = this.props.width;
		}

		if (!this.isSticked()) {
			this.style.width = null;
		} else {
			// set element width
			this.style.width = this._elmWidth + 'px';
		}

		// reset update counter
		this._updateCounter = this.props.updateEvery;
	};

	/**
  * Reset
  */


	SStickyComponent.prototype.reset = function reset() {
		var _this4 = this;

		if (!this.needReset) return;
		this.needReset = false;

		// add the out class
		this.addComponentClass(this, null, null, 'out');

		// get animation properties to wait if needed
		setTimeout(function () {
			var animationProperties = (0, _getAnimationProperties2.default)(_this4);

			clearTimeout(_this4._resetTimeout);
			_this4._resetTimeout = setTimeout(function () {

				// reset the element style
				_this4.style.position = '';
				_this4.style.top = '';
				_this4.style.bottom = '';
				_this4.style.width = '';

				// remove the placeholder if exist
				if (_this4.placeholderElm && _this4.placeholderElm.parentNode) {
					_this4.placeholderElm.parentNode.removeChild(_this4.placeholderElm);
				}

				// remove the out class
				_this4.removeComponentClass(_this4, null, null, 'out');
				// remove the sticked class
				_this4.removeComponentClass(_this4, null, null, 'sticked');
			}, animationProperties.totalDuration);
		});
	};

	/**
  * Check if is sticked
  */


	SStickyComponent.prototype.isSticked = function isSticked() {
		return this.hasComponentClass(this, null, null, 'sticked');
	};

	_createClass(SStickyComponent, null, [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {
				/**
     * Specify the top element to use as boundary
     * @prop
     * @type 	{Element}
     */
				topElm: null,

				/**
     * Specify the bottom element to use as boundary
     * @prop
     * @type 	{Element}
     */
				bottomElm: null,

				/**
     * An offset top that will be applied when sticked
     * @prop
     * @type 	{number}
     */
				offsetTop: 0,

				/**
     * An offset bottom that will be applied when sticked
     * @prop
     * @type 	{Number}
     */
				offsetBottom: 0,

				/**
     * A boolean or a function that return if the sitcky effect is disabled
     * @prop
     * @type 	{Boolean|Function}
     */
				disabled: false,

				/**
     * A number that specify the offset top before triggering the sticky
     * @prop
     * @type 	{Number}
     */
				offsetTopDetection: 0,

				/**
     * Specify if a ghost placeholder has to replace the sticked element into the DOM
     * @prop
     * in order to keep the same scroll height
     * @type 	{Boolean}
     */
				placeholder: true,

				/**
     * Specify the number of scroll event to wait before update the references and sizes
     * @prop
     * @type 	{Integer}
     */
				updateEvery: 5,

				/**
     * How long to wait after a window resize before updating sizes etc...
     * @prop
     * @type 	{Number}
     */
				resizeTimeout: 50
			};
		}
	}]);

	return SStickyComponent;
}(_SWebComponent3.default);

exports.default = SStickyComponent;