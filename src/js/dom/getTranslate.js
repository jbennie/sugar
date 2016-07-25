/**
 * Get element translate values
 */
export default function getTranslate(elm, what) {
	if ( ! window.getComputedStyle) return;
	let idx, mat, style, transform;
	style = getComputedStyle(elm);
	transform = style.transform || style.webkitTransform || style.mozTransform || style.msTransform;
	mat = transform.match(/^matrix3d\((.+)\)$/);
	if (mat) {
		idx = {
			x: 12,
			y: 13,
			z: 14
		};
		return parseFloat(mat[1].split(', ')[idx[what]]);
	}
	mat = transform.match(/^matrix\((.+)\)$/);
	idx = {
		x: 4,
		y: 5,
		z: 6
	};
	if (mat) {
		return parseFloat(mat[1].split(', ')[idx[what]]);
	} else {
		return 0;
	}
}