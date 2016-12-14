'use strict';

exports.__esModule = true;
exports.default = undefined;

var _customEvent = require('custom-event');

var _customEvent2 = _interopRequireDefault(_customEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _customEvent2.default;

/**
 * @constructor
 * @param  		{String} 	name 		The event name
 * @param 		{Object} 	settings 	The event settings
 */

/**
 * Set if the event is cancelable or not
 * @setting
 * @name 		cancelable
 * @type 		{Boolean}
 * @default 	true
 */

/**
 * Set if the event will bubble or not
 * @setting
 * @name 		bubbles
 * @type 		{Boolean}
 * @default 	true
 */

/**
 * Pass an object that will be sent with the event
 * @setting
 * @name 		detail
 * @type 		{Object}
 * @default 	null
 */
/**
 * @class 		SEvent
 * Proxy class to create custom events that can be dispatched
 * through the standard dispatch method on any HTMLElement
 *
 * @example 	js
 * let myEvent = new SEvent('myCoolEvent', {
 * 		cancelable : true,
 * 		bubbles : false,
 * 		detail : {
 * 			// some datas to send with the event
 * 		}
 * });
 * // dispatch the event from an HTMLElement
 * myHTMLElement.dispatch(myEvent);
 *
 * @see 		https://www.npmjs.com/package/customevent
 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
 */