/**
 * [closestNotVisible description]
 * @param  {[type]} elm [description]
 * @return {[type]}     [description]
 */
import isVisible from './isVisible'

export default function closestNotVisible(elm) {
	elm = elm.parentNode;
	while(elm && elm != document) {
		if ( ! isVisible(elm)) {
			return elm;
		}
		elm = elm.parentNode;
	}
	return false;
}