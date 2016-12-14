'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _STemplateWebComponent = require('../../../js/core/STemplateWebComponent');

var _STemplateWebComponent2 = _interopRequireDefault(_STemplateWebComponent);

var _getAnimationProperties = require('../../../js/dom/getAnimationProperties');

var _getAnimationProperties2 = _interopRequireDefault(_getAnimationProperties);

var _style = require('../../../js/dom/style');

var _style2 = _interopRequireDefault(_style);

var _flatpickr = require('flatpickr/dist/flatpickr');

var _flatpickr2 = _interopRequireDefault(_flatpickr);

var _dispatchEvent = require('../../../js/dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _integer = require('../../../js/utils/is/integer');

var _integer2 = _interopRequireDefault(_integer);

var _autoCast = require('../../../js/utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

var _SGoogleSearch = require('../../../js/classes/SGoogleSearch');

var _SGoogleSearch2 = _interopRequireDefault(_SGoogleSearch);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SGoogleSearchComponent = function (_STemplateWebComponen) {
	_inherits(SGoogleSearchComponent, _STemplateWebComponen);

	/**
  * @constructor
  */
	function SGoogleSearchComponent() {
		_classCallCheck(this, SGoogleSearchComponent);

		return _possibleConstructorReturn(this, _STemplateWebComponen.call(this));
	}

	/**
  * Default props
  * @definition 		SWebComponent.defaultProps
  */


	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SGoogleSearchComponent.prototype.componentMount = function componentMount() {
		_STemplateWebComponen.prototype.componentMount.call(this);

		// create the google search instance
		this._googleSearch = new _SGoogleSearch2.default(this.props.apiKey, this.props.cx);

		// initial search if a keywords if specified
		if (this.props.keywords) this.search(this.props.keywords);
	};

	/**
  * search
  * Process the search
  * @param 	{String} 	keywords 	The keywords to search
  * @param 	{Object} 	settings 	The query settings
  * @return 	{Promise} 				A promise object
  */


	SGoogleSearchComponent.prototype.search = function search(keywords, settings) {
		var _this2 = this;

		// busy
		this.templateData.isBusy = true;

		// process the search
		var search = this._googleSearch.search(keywords, {
			num: 10
		});
		// listen for end of search to set data
		// into template
		search.then(function (response) {

			// budy status
			_this2.templateData.isBusy = false;

			if (!response.queries || !response.queries.nextPage) {
				_this2.templateData.noMoreResults = true;
			} else {
				_this2.templateData.noMoreResults = false;
			}

			if (response.items && response.items.length) {
				// save the results into data
				_this2.templateData.results = response.items;
			}
		});
		// return the search promise
		return search;
	};

	/**
  * next
  * Load the next results
  * @return 	{Promise} 		A promise object
  */


	SGoogleSearchComponent.prototype.next = function next() {
		var _this3 = this;

		var search = this._googleSearch.next();
		search.then(function (response) {
			if (!response.queries || !response.queries.nextPage) {
				_this3.templateData.noMoreResults = true;
			} else {
				_this3.templateData.noMoreResults = false;
			}
			if (response.items && response.items.length) {
				// add the results into data
				_this3.templateData.results = _this3.templateData.results.concat(response.items);
			}
		});
		return search;
	};

	/**
  * Template will receive data
  * @definition 		SWebTemplateComponent.templateWillReceiveData
  */


	SGoogleSearchComponent.prototype.templateWillReceiveData = function templateWillReceiveData(name, newVal, oldVal) {
		// if we have any keywords
		switch (name) {
			case 'keywords':
				this.templateData.results = [];
				if (newVal) {
					this.search(newVal);
				}
				break;
		}
	};

	/**
  * Should template update
  */


	SGoogleSearchComponent.prototype.shouldTemplateUpdate = function shouldTemplateUpdate(nextData) {
		var keys = Object.keys(nextData);
		if (keys.length === 1 && keys[0] === 'keywords') return false;
		return true;
	};

	_createClass(SGoogleSearchComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {

				/**
     * Keywords to search
     */
				keywords: null,

				/**
     * Google api key used to reach the google services
     * @prop
     * @type 		{String}
     */
				apiKey: null,

				/**
     * Google context to reach the proper custom search instance
     * @prop
     * @type 		{String}
     */
				cx: null
			};
		}

		/**
   * Template data
   */

	}, {
		key: 'defaultTemplateData',
		get: function get() {
			return {

				/**
     * Keywords that represent the search to make
     * @templateData
     * @type 		{String}
     */
				keywords: '@props.keywords',

				/**
     * Store the results array
     * @templateData
     * @type 		{Array}
     */
				results: [],

				/**
     * Flag if there's more results to show or not
     * @templateData
     * @type 		{Boolean}
     */
				noMoreResults: false,

				/**
     * Next function that can be loaded from the template
     * to load more results
     * @templateData
     * @type 		{Function}
     */
				next: '@next',

				/**
     * Flag is the search is busy
     * @templateData
     * @type 		{Boolean}
     */
				isBusy: false
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

		/**
   * Required props
   * @definition 		SWebComponent.requiredProps
   */

	}, {
		key: 'requiredProps',
		get: function get() {
			return ['apiKey', 'cx'];
		}
	}]);

	return SGoogleSearchComponent;
}(_STemplateWebComponent2.default);

exports.default = SGoogleSearchComponent;