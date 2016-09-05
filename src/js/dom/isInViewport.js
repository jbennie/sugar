/**
 * Detect if is in viewport
 */
import __getBoundingClientRect from './getBoundingClientRect'
export default function isInViewport(elm, offset = { top:0, right:0, bottom:0, left:0 }) {

	const rect = __getBoundingClientRect(elm);
	const wh = (window.innerHeight || document.documentElement.clientHeight);
	const ww = (window.innerWidth || document.documentElement.clientWidth);
	return (
		rect.top - wh - offset.top <= 0
		&& rect.bottom + offset.bottom  >= 0
		&& rect.left - ww - offset.left <= 0
		&& rect.right + offset.right >= 0
	);
}
