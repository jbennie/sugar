'use strict';

exports.__esModule = true;
exports.default = getBoundingClientRect;
/**
 * Proxy to the HTMLElement.getBoundingClientRect function.
 * This proxy make some optimisations like it store in cache the
 * result in the element while no invalidate actions has been made
 * like scrolling or resizing the window...
 *
 * @name 		closest
 * @param 		{HTMLElement} 					elm  		The element to start on
 * @return 		{Object} 									The bouding client rect object
 *
 * @example  	js
 * import getBoundingClientRect from 'sugarcss/js/dom/getBoundingClientRect'
 * const rect = getBoundingClientRect(myCoolHTMLElement);
 *
 * @see 		https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
var elmStack = [];
document.addEventListener('scroll', invalidate);
document.addEventListener('resize', invalidate);

function invalidate() {
	elmStack.forEach(function (elm) {
		// check if the element is not in the dom anymore
		if (!elm || !elm.parentNode) {
			// remove the element from the stack
			elmStack.splice(elmStack.indexOf(elm), 1);
		} else {
			elm._sBoundingClientRect = null;
		}
	});
}

// export the function
function getBoundingClientRect(elm) {

	// add the element to the stack
	if (elmStack.indexOf(elm) === -1) {
		elmStack.push(elm);
	}
	if (!elm._sBoundingClientRect) {
		elm._sBoundingClientRect = elm.getBoundingClientRect();
	}
	return elm._sBoundingClientRect;
}