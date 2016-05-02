/**
 * Grab all the visible viewport
 */
import isVisible from './isVisible'
import closestNotVisible from './closestNotVisible'

export default function querySelectorViewportVisible(selector, rootNode = document) {
	// return array
	let elms = [];
	// grab the elements in the page
	[].forEach.call(rootNode.querySelectorAll(selector), (elm) => {
		if (inViewport(elm) && isVisible(elm) && ! closestNotVisible(elm)) {
			elms.push(elm);
		}
	});
	// return the elements
	return elms;
}