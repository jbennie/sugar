/**
 * Add an event listener that will be trigerred only once
 *
 * @param    {HTMLElement}    elm    The element to add the event listener on
 * @param    {String}    event    The event to listen for
 * @param    {Function}    callback    The callback function to call on event
 * @param    {Mixed}     [bind=null]    The object to bind to the callback function
 * @param    {Boolean}    [useCapture=false]    Use capture phase or not
 * @param    {object}    [options={}]    An options object that specifies characteristics about the event listener
 * @return    {Function}    The remove event listener function
 *
 * @example    js
 * import addEventListenerOnce from 'coffeekraken-sugar/js/dom/addEventListenerOnce'
 * const removeEventListener = addEventListenerOnce(myElm, 'click', (e) => {
 *     // do something on click
 * })
 * // remove event listener if wanted
 * removeEventListener()
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function addEventListenerOnce(elm, event, callback, bind = null, useCapture = false, options = {}) {
	// bind
	if (bind) {
		callback = callback.bind(bind)
	}

	// event handler
	function eventHandler(e) {
		// call the callback
		callback(e)
		// remove the event listener
		elm.removeEventListener(event, eventHandler, useCapture, options)
	}
	// add the listener to the element
	elm.addEventListener(event, eventHandler, useCapture, options)
	// return the removeEventListener function
	return () => {
		elm.removeEventListener(event, eventHandler, useCapture, options)
	}
}
