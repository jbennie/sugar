'use strict';

exports.__esModule = true;
exports.default = dispatchEvent;

var _SEvent = require('../classes/SEvent');

var _SEvent2 = _interopRequireDefault(_SEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper to quickly display an event with some optional data attached to it
 *
 * @name 		dispatchEvent
 * @param 		{HTMLElement} 					target  		The element to dispatch the event from
 * @param 		{String} 						name 			The event name to dispatch
 * @param 		{Mixed} 						data 			The data to attache to the event
 *
 * @example  	js
 * import dispatchEvent from 'sugarcss/js/dom/dispatchEvent'
 * dispatchEvent(myCoolHTMLElement, 'myCoolEventName', {
 * 		var1 : 'value1'
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function dispatchEvent(target, name) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  // create new event
  var e = new _SEvent2.default(name, {
    detail: data,
    bubbles: true,
    cancelable: true
  });
  target.dispatchEvent(e);
}