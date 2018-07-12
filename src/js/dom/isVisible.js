/**
 * Check if the passed HTMLElement is visible or not.
 * Visible mean that it has not an opacity of 0, not a visibility of hidden and not a display of none
 *
 * @name 		isVisible
 * @param 		{HTMLElement} 				elm  		The element to check
 * @return 		{Boolean								If the element is visible or not
 *
 * @example  	js
 * import isVisible from 'sugarcss/js/dom/isVisible'
 * if (isVisible(myCoolHTMLElement) {
 * 		// i'm visible
 * }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isVisible(elm) {

	// assume that the script tag is always visible
	if (elm.nodeName.toLowerCase() === 'script') return true;

	// if no offset parent
	// mean that the element is not visible
	// if (elm.offsetParent === null) return false;

	// get style
	const style = window.getComputedStyle(elm, null),
		  opacity = style['opacity'],
		  visibility = style['visibility'],
		  display = style['display'];
	return (
		'0' !== opacity &&
		'none' !== display &&
		'hidden' !== visibility
	);
}
window.__isVisible = isVisible;
