/**
 * Ajax request wrapper
 */
import SObject from './SObject'
import SimpleAjax from 'simple-ajax'
import {Observable} from 'rxjs/Observable'
import strToHtml from '../string/strToHtml'
import htmlToStr from '../string/htmlToStr'

export default class SAjax extends SObject {

	/**
	 * _requestSettings
	 * Store the request settings to use
	 * @type 	{Object}
	 */
	_requestSettings = {};

	/**
	 * _simpleAjax
	 * The SimpleAjax instance
	 * @type 	{SimpleAjax}
	 */
	_simpleAjax = null;

	/**
	 * _observer
	 * Store the Observable observer to be able to call his methods outside
	 * @type 	{Object}
	 */
	_observer = null;

	/**
	 * _requestsCount
	 * Store how many requests have been sent
	 * @type 	{Integer}
	 */
	_requestsCount = 0;

	/**
	 * Constructor
	 */
	constructor(request) {

		// init parent
		super();

		// save the settings
		this._requestSettings = request;

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
		if (this._requestSettings.beforeSend) {
			this._requestSetting = this._requestSettings.beforeSend(this._requestSettings, this._requestsCount);
		}

		// create the new simple ajax instance
		const simpleAjax = new SimpleAjax(this._requestSettings);
		simpleAjax._requestSettings = Object.assign({}, this._requestSettings);

		// listen request states
		simpleAjax.on('success', (e) => {
			// grab response
			let response = e.target.response;
			// check if the url has an hash
			const urlParts = simpleAjax._requestSettings.url.toString().split('#');
			if (urlParts.length >= 2 && document !== undefined && document.querySelector !== undefined) {
				const html = strToHtml(response);
				const part = html.querySelector(`#${urlParts[1]}`);
				if (part) {
					response = htmlToStr(part);
				}
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
			if (this._requestSettings.sendInterval) {
				// handle sendCount
				if (this._requestSettings.sendCount
					&& this._requestsCount >= this._requestSettings.sendCount) {
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
				}, this._requestSettings.sendInterval);
			}
		});

		// save into instance
		this._simpleAjax = simpleAjax;
	}

	/**
	 * Send the request
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
