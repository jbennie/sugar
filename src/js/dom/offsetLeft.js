/**
 * Get offset left of an element
 */
export default function offsetLeft(elm) {
	var offsetLeft = 0;
	do {
		if ( !isNaN( elm.offsetLeft ) ) {
			offsetLeft += elm.offsetLeft;
		}
	} while( elm = elm.offsetParent );
	return offsetLeft;
}