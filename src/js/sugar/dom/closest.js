/**
 * Get closest 
 */
import matches as __matches from './matches'

export default function closest(elm, selector) {
	elm = elm.parentNode;
	while(elm && elm != document) {
		if (__matches(elm, selector)) {
			return elm;
		}
		elm = elm.parentNode;
	}
	return false;
}