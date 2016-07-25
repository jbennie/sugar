/**
 * Get offset top of an element
 */
export default function offsetTop(elm) {
	var offsetTop = 0;
	do {
		if ( !isNaN( elm.offsetTop ) ) {
			offsetTop += elm.offsetTop;
		}
	} while( elm = elm.offsetParent );
	return offsetTop;
}