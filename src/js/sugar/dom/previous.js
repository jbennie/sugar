/**
 * Previous
 */
import __matches from './matches'

export default function previous(elm, selector) {
	elm = elm.previousSibling;
	while(elm) {
		if (__matches(elm, selector)) {
			return elm;
		}
		elm = elm.previousSibling;
	}
	return false;
}