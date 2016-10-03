import SObject from '../core/SObject'
import SimpleAjax from 'simple-ajax'
import {Observable} from 'rxjs/Observable'
import strToHtml from '../utils/string/strToHtml'
import htmlToStr from '../utils/string/htmlToStr'
import SAjaxRequest from './SAjaxRequest'

/**
 * @class 		SAjax 	{SObject}
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
 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
 */
export default class SAjax extends SObject {

	/**
	 * Store the observable instance on which you can subscribe for responses
	 * @type 	{Observable}[https://github.com/ReactiveX/rxjs]
	 */
	observable = null;

	/**
	 * Store the request settings to use
	 * @type 	{SAjaxRequest}
	 */
	_requestSettings = {};

	/**
	 * The SimpleAjax instance used to make requests under the hood
	 * @type 	{SimpleAjax}[https://github.com/MauriceButler/simple-ajax]
	 */
	_simpleAjax = null;

	/**
	 * Store the Observable observer to be able to call his methods outside
	 * @type 	{Object}
	 */
	_observer = null;

	/**
	 * Store how many requests have been sent
	 * @type 	{Integer}
	 */
	_requestsCount = 0;

	/**
	 * Store the settings around the request
	 * @type 	{Object}
	 */
	_settings = {

		/**
		 * Set the interval time between each requests if the sendCount setting is specified
		 * @setting
		 * @type 		{Number}
		 * @default 	1000
		 */
		sendInterval : 1000,

		/**
		 * Set how many times the request has to be sent
		 * @setting
		 * @type 		{Integer}
		 * @default 	null
		 */
		sendCount : null,

		/**
		 * A function that will be called before each requests to have a change to update some request params
		 * Must return the new request params
		 * Will recieve the actual request params and the request count as parameter
		 * @setting
		 * @type 		{Function}
		 * @default 	null
		 */
		beforeSend : null
	};

	/**
	 * @constructor
	 * @param 	{SAjaxRequest} 		request 		The request object used to make ajax call
	 * @param 	{Object} 			[settings={}] 	Some settings around the request
 	 */
	constructor(request, settings = {}) {

		// init parent
		super();

		// if the request is not an SAjaxRequest, create it
		if ( ! request instanceof SAjaxRequest) {
			this._requestSettings = new SAjaxRequest(request);
		} else {
			this._requestSettings = request;
		}

		// extend settings
		Object.assign(this._settings, settings);

		// create the observable property
		this.observable = new Observable(observer => {
			// store the observer into the instance
			this._observer = observer;
		});
	}

	/**
	 * Create the request
	 */
	_createRequest() {

		// process request settings
		if (this._settings.beforeSend) {
			this._requestSetting = this._settings.beforeSend(this._requestSettings, this._requestsCount);
		}

		// create the new simple ajax instance
		const simpleAjax = new SimpleAjax(this._requestSettings);
		simpleAjax._requestSettings = Object.assign({}, this._requestSettings);

		// listen request states
		simpleAjax.on('success', (e) => {
			// grab response
			let response = e.target.response;

			// check if the url has an hash
			// and that the request dataType is html
			const urlParts = simpleAjax._requestSettings.url.toString().split('#');
			if (this._requestSettings.dataType === 'html'
				&& urlParts.length >= 2 && document !== undefined && document.querySelector !== undefined
			) {
				const html = strToHtml(response);
				const part = html.querySelector(`#${urlParts[1]}`);
				if (part) {
					response = htmlToStr(part);
				}
			}

			// auto convert JSON response
			if (simpleAjax._requestSettings.dataType
				&& simpleAjax._requestSettings.dataType.toLowerCase() === 'json'
			) {
				response = JSON.parse(response);
			}

			// push the result into the observer
			if (this._observer)
				this._observer.next(response);
			// notify Promise
			if (this._resolve)
				this._resolve(response);
		});
		simpleAjax.on('error', (e) => {
			// error
			if (this._observer)
				this._observer.error(e.target.response);
			// notify promise
			if (this._reject)
				this._reject(e.target.response);
		});
		simpleAjax.on('complete', (e) => {
			// check the settings to see if we need to do it again
			// after a certain timeout
			if (this._settings.sendInterval) {
				// handle sendCount
				if (this._settings.sendCount
					&& this._requestsCount >= this._settings.sendCount) {
					// notify subscriber
					if (this._observer) {
						this._observer.complete();
					}
					// stop here
					return;
				}
				// wait the requested timeout and send a new request
				setTimeout(() => {
					this.send();
				}, this._settings.sendInterval);
			}
		});

		// save into instance
		this._simpleAjax = simpleAjax;
	}

	/**
	 * Send the request and return a promise
	 * @return 	{Promise} 	The promise through which you will be notified when data are here
	 */
	send() {

		// create the new request
		this._createRequest();

		// update request count
		this._requestsCount++;

		// return a promise
		return new Promise((resolve, reject) => {

			// set the resolve and reject callback in the instance
			this._resolve = resolve;
			this._reject = reject;

			// send the request
			this._simpleAjax.send();
		});
	}
}
