/**
 * Detect if is in viewport
 */
export default function isInViewport(elm, offset = { top:0, right:0, bottom:0, left:0 }) {
	const rect = elm.getBoundingClientRect();
	return (
		rect.top + offset.top >= 0 &&
		rect.left + offset.left >= 0 &&
		rect.bottom - offset.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
		rect.right - offset.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	);
}
