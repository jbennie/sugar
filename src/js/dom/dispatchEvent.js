import SEvent from '../classes/SEvent';

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
export default function dispatchEvent(target, name, data = null) {
	// create new event
	const e = new SEvent(name, {
		detail: data,
		bubbles : true,
		cancelable : true
	});
	target.dispatchEvent(e);
}
