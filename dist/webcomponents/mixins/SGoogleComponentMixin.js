'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mixwith = require('../../js/vendors/mixwith');

var _googleMaps = require('google-maps');

var _googleMaps2 = _interopRequireDefault(_googleMaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _mixwith.Mixin)(function (superclass) {
	return function (_superclass) {
		_inherits(SGoogleComponent, _superclass);

		function SGoogleComponent() {
			_classCallCheck(this, SGoogleComponent);

			return _possibleConstructorReturn(this, _superclass.apply(this, arguments));
		}

		/**
   * Return a promise that load the google api
   * @return 	{Promise}
   */
		SGoogleComponent.prototype._loadGoogleApi = function _loadGoogleApi() {
			// set some static variables on the google loader
			if (this.props.apiKey) {
				_googleMaps2.default.KEY = this.props.apiKey;
			}
			if (this.props.client) {
				_googleMaps2.default.CLIENT = this.props.client;
			}
			if (this.props.version) {
				_googleMaps2.default.VERSION = this.props.version;
			}
			if (this.props.libraries) {
				_googleMaps2.default.LIBRARIES = this.props.libraries;
			}
			if (this.props.language) {
				_googleMaps2.default.LANGUAGE = this.props.language;
			}
			if (this.props.region) {
				_googleMaps2.default.REGION = this.props.region;
			}
			return new Promise(function (resolve, reject) {
				// load the map api
				_googleMaps2.default.load(function (google) {
					// resolve the promise
					resolve(google);
				});
			});
		};

		/**
   * _google
   * Get the google api
   * @type 	{Object}
   */


		_createClass(SGoogleComponent, [{
			key: '_google',
			get: function get() {
				return window.google;
			}
		}], [{
			key: 'mountDependencies',


			/**
    * Return a list of promises to resolve before init the component
    * @return 	{Array} 	An array of promises to resolve
    */
			get: function get() {
				return [function () {
					return this._loadGoogleApi();
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
      * Set the api key used to reach the google services
      * @prop
      * @type		{String}
      */
					apiKey: null,

					/**
      * Set the client api id used to reach google services
      * @prop
      * @type 		{String}
      */
					client: null,

					/**
      * Set the version of the api to load
      * @prop
      * @type		{String}
      */
					version: null,

					/**
      * Set the libraries to load
      * @prop
      * @type		{Array}
      */
					libraries: null,

					/**
      * Set the language to use
      * @prop
      * @type  	{String}
      */
					language: null,

					/**
      * Store the region to use
      * @prop
      * @type 	{String}
      */
					region: null
				};
			}
		}]);

		return SGoogleComponent;
	}(superclass);
});