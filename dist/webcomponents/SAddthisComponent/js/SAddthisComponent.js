'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _dispatchEvent = require('../../../js/dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _sAddThisLoaded = null;

var SAddthisComponent = function (_SWebComponent) {
	_inherits(SAddthisComponent, _SWebComponent);

	function SAddthisComponent() {
		_classCallCheck(this, SAddthisComponent);

		return _possibleConstructorReturn(this, _SWebComponent.apply(this, arguments));
	}

	/**
  * Component will mount
  * @definition 		SWebComponent.componentWillMount
  */
	SAddthisComponent.prototype.componentWillMount = function componentWillMount() {
		_SWebComponent.prototype.componentWillMount.call(this);
		// set the pubid in window if exist in settings
		if (this.props.pubid) {
			window.addthis_config = window.addthis_config || {};
			window.addthis_config.pubid = this.props.pubid;
		}
	};

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */


	SAddthisComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);
		// init the button
		this._addthis.toolbox(this, window.addthis_config || {}, this.props);
	};

	_createClass(SAddthisComponent, null, [{
		key: 'mountDependencies',


		/**
   * Mount dependencies
   * @definition 		SWebComponent.mountDependencies
   */
		get: function get() {
			return [function () {
				var _this2 = this;

				return new Promise(function (resolve, reject) {
					// check if already loaded
					if (window.addthis) {
						_this2._addthis = window.addthis;
						resolve(_this2._addthis);
						return;
					}
					// if already a loader
					if (_sAddThisLoaded) {
						document.body.addEventListener('addthis:loaded', function (e) {
							_this2._addthis = window.addthis;
							resolve(_this2._addthis);
						});
						return;
					}

					// map the loaded function into the window
					_sAddThisLoaded = function _sAddThisLoaded() {
						_this2._addthis = window.addthis;
						_this2._addthis.init();
						(0, _dispatchEvent2.default)(document.body, 'addthis:loaded');
						resolve(_this2._addthis);
					};
					// check if addThis is loaded
					// (function checkIfLoaded() {
					// 	if (window.addthis) {
					// 		_sAddThisLoaded();
					// 		return;
					// 	}
					// 	setTimeout(checkIfLoaded, 50);
					// })();
					// add the script the the page
					var script = document.createElement('script');
					script.type = 'text/javascript';
					script.src = 'http://s7.addthis.com/js/300/addthis_widget.js#async=1';
					document.body.appendChild(script);
				});
			}];
		}

		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */

	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				/**
     * The public id used to reach addthis service
     * @prop
     * @type 	{String}
     */
				pubid: null,

				/**
     * The url to share
     * @prop
     * @type 	{String}
     */
				url: window.location.url,

				/**
     * The title to share
     * @prop
     * @type 	{String}
     */
				title: document.title,

				/**
     * The description to share
     * @prop
     * @type 	{String}
     */
				description: null,

				/**
     * The swfurl to share
     * @prop
     * @type 	{String}
     */
				swfurl: null,

				/**
     * The width of the popup
     * @prop
     * @type 	{String}
     */
				width: null,

				/**
     * The height of the popup
     * @prop
     * @type 	{String}
     */
				height: null,

				/**
     * The email_template to share
     * @prop
     * @type 	{String}
     */
				email_template: null,

				/**
     * The email_vars to share
     * @prop
     * @type 	{String}
     */
				email_vars: null
			};
		}
	}]);

	return SAddthisComponent;
}(_SWebComponent3.default);

exports.default = SAddthisComponent;