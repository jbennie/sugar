/**
 * Detect if is edge
 * @example 	js
 * import isEdge from 'coffeekraken-sugar/js/utils/is/edge'
 * if (isEdge()) {
 *   // do something cool
 * }
 *
 * @return    {Boolean}    true if is edge, false if not
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
export default function isEdge() {
	return (navigator.userAgent.indexOf('Edge') > -1)
}
