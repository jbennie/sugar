/**
 * Next
 */
import __matches from './matches'

export default function next(elm, selector) {
	elm = elm.nextSibling;
	while(elm) {
		if (__matches(elm, selector)) {
			return elm;
		}
		elm = elm.nextSibling;
	}
	return false;
}