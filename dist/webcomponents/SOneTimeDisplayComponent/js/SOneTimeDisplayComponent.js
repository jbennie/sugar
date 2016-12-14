'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SOneTimeDisplayComponent = function (_SWebComponent) {
	_inherits(SOneTimeDisplayComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SOneTimeDisplayComponent() {
		_classCallCheck(this, SOneTimeDisplayComponent);

		return _possibleConstructorReturn(this, _SWebComponent.call(this));
	}

	/**
  * Default props
  * @definition 		SWebComponent.defaultProps
  */


	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SOneTimeDisplayComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);

		// get the dismiss element
		this.addEventListener('click', this._onClick.bind(this));

		// set as block
		this.style.display = 'block';

		// update the status
		this.updateStatus();
	};

	/**
  * updateStatus
  * Update the element status
  * @return 	{SOneTimeDisplayComponent}
  */


	SOneTimeDisplayComponent.prototype.updateStatus = function updateStatus() {
		// check if is dismissed
		if (this.isDismissed()) {
			this.setProps({
				enabled: false,
				disabled: true
			});
		} else {
			this.setProps({
				enabled: true,
				disabled: false
			});
		}
	};

	/**
  * _onClick
  * When the user click inside the element
  * @param	{MouseEvent} 	e 	The mouse event
  * @return 	{void}
  */


	SOneTimeDisplayComponent.prototype._onClick = function _onClick(e) {
		// check if the clicked element is a dismiss one
		if (e.target.hasAttribute(this._componentNameDash + '-dismiss')) {
			// dismiss
			this.dismiss();
		}
	};

	/**
  * reset
  * Reset the storage
  * @return 	{SOneTimeDisplayComponent}
  */


	SOneTimeDisplayComponent.prototype.reset = function reset() {
		// reset the storage
		switch (this.props.method.toLowerCase()) {
			case 'cookie':
				_jsCookie2.default.remove(this.props.name);
				break;
			case 'localstorage':
				localStorage.removeItem(this.props.name);
				break;
			case 'sessionstorage':
				sessionStorage.removeItem(this.props.name);
				break;
		}
		// maintain chainability
		return this;
	};

	/**
  * isDismissed
  * Return if the component has been dismissed or not
  * @return 	{Boolean} 		The dismiss status
  */


	SOneTimeDisplayComponent.prototype.isDismissed = function isDismissed() {
		var dismissedTimestamp = this.getDismissedTimestamp();
		if (!dismissedTimestamp) return false;
		// check the difference between now and the dismissed
		// timestamp, depending on the timeout in settings
		var now = new Date().getTime();
		if (dismissedTimestamp + this.props.timeout < now) {
			// reset the storage
			this.reset();
			// the item is not dismissed
			return false;
		}
		// the element is dismissed
		return true;
	};

	/**
  * getDismissedTimestamp
  * Return the timestamp when the element has been dismissed
  * @return 	{Integer} 	The timestampe when the element has been dismissed
  */


	SOneTimeDisplayComponent.prototype.getDismissedTimestamp = function getDismissedTimestamp() {
		var dismissedTimestamp = void 0;
		// switch on method
		switch (this.props.method.toLowerCase()) {
			case 'cookie':
				dismissedTimestamp = _jsCookie2.default.get(this.props.name);
				break;
			case 'localstorage':
				dismissedTimestamp = localStorage.getItem(this.props.name);
				break;
			case 'sessionstorage':
				dismissedTimestamp = sessionStorage.getItem(this.props.name);break;
			default:
				throw 'You need to set a method through settings in order to use this component... {cookie|localStorage|sessionStorage}';
				break;
		}
		// the element has been dismissed
		return dismissedTimestamp;
	};

	/**
  * dismiss
  * Dismiss the displayed element
  * @return  	{SOneTimeDisplayComponent}
  */


	SOneTimeDisplayComponent.prototype.dismiss = function dismiss() {
		// switch on method
		switch (this.props.method.toLowerCase()) {
			case 'cookie':
				// set the cookie
				_jsCookie2.default.set(this.props.name, new Date().getTime(), {
					expires: new Date(new Date().getTime() + this.props.timeout)
				});
				break;
			case 'localstorage':
				localStorage.setItem(this.props.name, new Date().getTime());
				break;
			case 'sessionstorage':
				sessionstorage.setItem(this.props.name, new Date().getTime());
				break;
		}
		// update the status
		this.updateStatus();
		// maintain chainability
		return this;
	};

	_createClass(SOneTimeDisplayComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {
				/**
     * How many times to hide the element when dismissed
     * @type  	{Number}
     */
				timeout: 1000 * 60 * 60 * 24 * 365,

				/**
     * Set the method to use to store the component display status
     * @values 	{cookie,localStorage,sessionStorage}
     * @type 	{String}
     */
				method: 'cookie',

				/**
     * Set the name used to save the cookie / localStorage or sessionStorage
     * @type 	{String}
     */
				name: 's-one-time-display',

				/**
     * Set if the element is disabled or not.
     * This will be removed if the element is enabled
     * @prop
     * @physicalProp
     * @type 		{Boolean}
     */
				disabled: true,

				/**
     * Set if the element is enabled
     * This will be removed id the element is disabled
     * @prop
     * @physicalProp
     * @type 		{Boolean}
     */
				enabled: false
			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return ['enabled', 'disabled'];
		}
	}]);

	return SOneTimeDisplayComponent;
}(_SWebComponent3.default);

exports.default = SOneTimeDisplayComponent;