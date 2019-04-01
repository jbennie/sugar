'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SObject2 = require('../core/SObject');

var _SObject3 = _interopRequireDefault(_SObject2);

var _simpleAjax = require('simple-ajax');

var _simpleAjax2 = _interopRequireDefault(_simpleAjax);

var _Observable = require('rxjs/Observable');

var _strToHtml = require('../utils/strings/strToHtml');

var _strToHtml2 = _interopRequireDefault(_strToHtml);

var _htmlToStr = require('../utils/strings/htmlToStr');

var _htmlToStr2 = _interopRequireDefault(_htmlToStr);

var _SAjaxRequest = require('./SAjaxRequest');

var _SAjaxRequest2 = _interopRequireDefault(_SAjaxRequest);

var _autoCast = require('../utils/strings/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @name 		SAjax
 * @extends 	SObject
 * Class that allows to simply handle ajax requests with ease.
 * This class give some useful features like :
 * - Promise support
 * - Observable support
 * - Recursive requests
 * @example 	js
 * const ajx = new SAjax({
 * 		url : 'api/...',
 * 		method : 'GET',
 * 		data : {
 * 			myVar : 'myVal'
 * 		}
 * }, {
 * 		sendCount : 10,
 * 		sendInterval : 2000,
 * 		beforeSend : (request, sendCount) => {
 * 			request.data.page = sendCount+1;
 * 			return request;
 * 		}
 * });
 *
 * // optionally listen for data through observable
 * ajx.observable.subscribe((response) => {
 * 		// do something with the response here...
 * }, (error) => {
 * 		// something went wrong
 * }, () => {
 * 		// all the requests have been sent
 * });
 *
 * // send and listen for data
 * ajx.send().then((response) => {
 * 		// do something with response here...
 * }, (error) => {
 * 		// something went wrong...
 * });
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
var SAjax = function (_SObject) {
	_inherits(SAjax, _SObject);

	/**
  * @constructor
  * @param 	{SAjaxRequest} 		request 		The request object used to make ajax call
  * @param 	{Object} 			[settings={}] 	Some settings around the request
 	 */


	/**
  * Store how many requests have been sent
  * @type 	{Integer}
  */


	/**
  * The SimpleAjax instance used to make requests under the hood
  * @type 	{SimpleAjax}[https://github.com/MauriceButler/simple-ajax]
  */


	/**
  * Store the observable instance on which you can subscribe for responses
  * @type 	{Observable}
  */
	function SAjax(request) {
		var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, SAjax);

		// if the request is not an SAjaxRequest, create it
		var _this = _possibleConstructorReturn(this, (SAjax.__proto__ || Object.getPrototypeOf(SAjax)).call(this));

		// init parent


		_this.observable = null;
		_this._requestSettings = {};
		_this._simpleAjax = null;
		_this._observer = null;
		_this._requestsCount = 0;
		_this._settings = {

			/**
    * Set the interval time between each requests if the sendCount setting is specified
    * @setting
    * @type 		{Number}
    * @default 	1000
    */
			sendInterval: 1000,

			/**
    * Set how many times the request has to be sent
    * @setting
    * @type 		{Integer}
    * @default 	null
    */
			sendCount: null,

			/**
    * A function that will be called before each requests to have a change to update some request params
    * Must return the new request params
    * Will recieve the actual request params and the request count as parameter
    * @setting
    * @type 		{Function}
    * @default 	null
    */
			beforeSend: null,

			/**
    * A cache instance that will be used
    * @setting
    * @type 		{SCache}
    * @default 	null
    */
			cache: null
		};
		if (!(request instanceof _SAjaxRequest2.default)) {
			_this._requestSettings = new _SAjaxRequest2.default(request);
		} else {
			_this._requestSettings = request;
		}

		// extend settings
		Object.assign(_this._settings, settings);

		// create the observable property
		_this.observable = new _Observable.Observable(function (observer) {
			// store the observer into the instance
			_this._observer = observer;
		});
		return _this;
	}

	/**
  * Create the request
  */


	/**
  * Store the settings around the request
  * @type 	{Object}
  */


	/**
  * Store the Observable observer to be able to call his methods outside
  * @type 	{Object}
  */


	/**
  * Store the request settings to use
  * @type 	{SAjaxRequest}
  */


	_createClass(SAjax, [{
		key: '_createRequest',
		value: function _createRequest() {
			var _this2 = this;

			// process request settings
			if (this._settings.beforeSend) {
				this._requestSetting = this._settings.beforeSend(this._requestSettings, this._requestsCount);
			}

			// check type and datas
			// to set datas as query string if is a GET request
			if (this._requestSettings.method.toLowerCase() === 'get' && this._requestSettings.data && typeof this._requestSettings.data === 'string') {
				// append the data to the URL
				var start = '?';
				if (this._requestSettings.url.indexOf('?') !== -1) {
					start = '&';
				}
				this._requestSettings.url += '' + start + this._requestSettings.data;
			}

			// create the new simple ajax instance
			var simpleAjax = new _simpleAjax2.default(_extends({}, this._requestSettings, {
				url: this._requestSettings.url.split(/#|%23/)[0]
			}));
			simpleAjax._requestSettings = Object.assign({}, this._requestSettings);

			// listen request states
			simpleAjax.on('success', function (e) {
				// grab response
				var response = e.target.response;

				// get the content type
				var contentType = simpleAjax.request.getResponseHeader('content-type');

				// switch on content type
				switch (true) {
					case contentType.indexOf('text/html') === 0:
						// check if the url has an hash
						// and that the request dataType is html
						var urlParts = simpleAjax._requestSettings.url.toString().split(/#|%23/);
						if (urlParts.length >= 2 && document !== undefined && document.querySelector !== undefined) {
							var html = (0, _strToHtml2.default)(response);
							if (html.id === urlParts[1]) {
								response = (0, _htmlToStr2.default)(html);
							} else {
								var part = html.querySelector('#' + urlParts[1]);
								if (part) {
									response = (0, _htmlToStr2.default)(part);
								}
							}
						}
						break;
					case contentType.indexOf('application/json') === 0:
						response = JSON.parse(response);
						break;
				}

				// check if need to store response in cache
				if (_this2._settings.cache) {
					console.log('set', simpleAjax._requestSettings.url, response);
					_this2._settings.cache.set(simpleAjax._requestSettings.url, response);
				}

				// push the result into the observer
				if (_this2._observer) _this2._observer.next(response);
				// notify Promise
				if (_this2._resolve) _this2._resolve(response);
			});
			simpleAjax.on('error', function (e) {
				// error
				if (_this2._observer) _this2._observer.error(e.target.response);
				// notify promise
				if (_this2._reject) _this2._reject(e.target.response);
			});
			simpleAjax.on('complete', function (e) {
				// check the settings to see if we need to do it again
				// after a certain timeout
				if (_this2._settings.sendInterval) {
					// handle sendCount
					if (_this2._settings.sendCount && _this2._requestsCount >= _this2._settings.sendCount) {
						// notify subscriber
						if (_this2._observer) {
							_this2._observer.complete();
						}
						// stop here
						return;
					} else if (_this2._settings.sendCount) {
						// wait the requested timeout and send a new request
						setTimeout(function () {
							_this2.send();
						}, _this2._settings.sendInterval);
					}
				}
			});

			// save into instance
			this._simpleAjax = simpleAjax;
		}

		/**
   * Send the request and return a promise
   * @return 	{Promise} 	The promise through which you will be notified when data are here
   */

	}, {
		key: 'send',
		value: function send() {
			var _this3 = this;

			// create the new request
			this._createRequest();

			// update request count
			this._requestsCount++;

			// return a promise
			return new Promise(function (resolve, reject) {

				// check if a cache exist and if we have the content
				if (_this3._settings.cache) {
					var response = _this3._settings.cache.get(_this3._requestSettings.url);
					if (response) {
						resolve(response);
						return;
					}
				}

				// set the resolve and reject callback in the instance
				_this3._resolve = resolve;
				_this3._reject = reject;

				// send the request
				_this3._simpleAjax.send();
			});
		}
	}]);

	return SAjax;
}(_SObject3.default);

exports.default = SAjax;