/**
 * Check if is visible
 */
export default function isVisible(elm) {

	// assume that the script tag is always visible
	if (elm.nodeName.toLowerCase() === 'script') return true;

	// if no offset parent
	// mean that the element is not visible
	// if (elm.offsetParent === null) return false;

	// get style
	const style = document.defaultView.getComputedStyle(elm, null),
		  opacity = style['opacity'],
		  visibility = style['visibility'],
		  display = style['display'];
	return (
		'0' !== opacity &&
		'none' !== display &&
		'hidden' !== visibility
	);
}
