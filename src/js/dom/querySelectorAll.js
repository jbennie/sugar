import __isVisible from './isVisible'
import __isInViewport from './isInViewport';
import __closestNotVisible from './closestNotVisible'

/**
 * Enhanced proxy of the Element.querySelectorAll function that let you specify
 * if you want elements that are visible, or even that are in the viewport
 *
 * @name 		querySelectorAll
 * @param 		{String} 				selector 			The css selector to search
 * @param 		{Object} 				settings	 		The settings of the query
 * @return 		{Array}<HTMLElement> 						The founded elements
 *
 * @example 	js
 * // simple query
 * const elms = querySelectorAll('.a-cool-css-selector');
 *
 * // get elements that are in the viewport
 * const elms = querySelectorAll('.a-cool-css-selector', {
 * 		inViewport : true
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */

/**
 * If we want only visible elements
 * @setting
 * @name 		visible
 * @type 		{Boolean}
 * @default 	false
 */

/**
 * If we want only elements that are in the viewport
 * @setting
 * @name 		inViewport
 * @type 		{Boolean}
 * @default 	false
 */

/**
 * The root node to start the query from
 * @setting
 * @name 		rootNode
 * @type 		{HTMLElement}
 * @default 	document.body
 */

export default function querySelectorAll(selector, settings = {}) {

	// extend settings
	settings = {
		visible : null,
		inViewport : null,
		rootNode : document.body,
		...settings
	};

	// results array
	const results = [];

	// grab the element into the dom
	const elms = settings.rootNode.querySelectorAll(selector);

	// loop on the found elements
	[].forEach.call(elms, (elm) => {
		// check settings
		if (settings.visible) {
			if ( ! __isVisible(elm)
				|| ! __closestNotVisible(elm)
			) return;
		}
		if (settings.inViewport) {
			if ( ! __isInViewport(elm)) return;
		}

		// add the element to the result array
		results.push(elm);
	});

	// return the elements
	return results;
}
