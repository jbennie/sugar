/**
 * Get a translate properties of an HTMLElement
 *
 * @name 		getTranslateProperties
 * @param 		{HTMLElement} 					elm  		The element to get the properties from
 * @return 		{Object} 									The translate x,y and z properties
 *
 * @example  	js
 * import getTranslateProperties from 'sugarcss/js/dom/getTranslateProperties'
 * const props = getTranslateProperties(myCoolHTMLElement);
 * // output format
 * // {
 * // 	x : 100,
 * // 	y : 0,
 * // 	z : 0
 * // }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
export default function getTranslateProperties(elm) {
	if ( ! window.getComputedStyle) return;
	let idx, mat, style, transform;
	style = getComputedStyle(elm);
	transform = style.transform || style.webkitTransform || style.mozTransform || style.msTransform;
	mat = transform.match(/^matrix3d\((.+)\)$/);
	if (mat) {
		return {
			x : parseFloat(mat[1].split(', ')[12]),
			y : parseFloat(mat[1].split(', ')[13]),
			z : parseFloat(mat[1].split(', ')[14)
		};
	}
	mat = transform.match(/^matrix\((.+)\)$/);
	if (mat) {
		return {
			x : parseFloat(mat[1].split(', ')[4]),
			y : parseFloat(mat[1].split(', ')[5]),
			z : parseFloat(mat[1].split(', ')[6])
		};
	} else {
		return {
			x : 0,
			y : 0,
			z : 0
		};
	}
}
