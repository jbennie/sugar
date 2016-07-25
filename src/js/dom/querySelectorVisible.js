/**
 * Grab all the visible elements
 */
import closestNotVisible from './closestNotVisible'

export default function querySelectorVisible(selector, rootNode = document) {
	// return array
	let elms = [];
	// grab the elements in the page
	[].forEach.call(rootNode.querySelectorAll(selector), (elm) => {
		if (isVisible(elm) && ! closestNotVisible(elm)) {
			elms.push(elm);
		}
	});
	// return the elements
	return elms;
}