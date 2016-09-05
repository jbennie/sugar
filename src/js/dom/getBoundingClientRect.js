let invalidate = false;
let invalidateTimeout = null;

// invalidate the client bounding on scroll and resize
function _invalidate() {
	invalidate = true;
	clearTimeout(invalidateTimeout);
	invalidateTimeout = setTimeout(() => {
		invalidate = false;
	});
}
document.addEventListener('scroll', _invalidate);
document.addEventListener('resize', _invalidate);

// export the function
export default function getBoundingClientRect(elm) {	
	if (invalidate) {
		elm._sBoundingClientRect = null;
	}
	if ( ! elm._sBoundingClientRect) {
		elm._sBoundingClientRect = elm.getBoundingClientRect();
	}
	return elm._sBoundingClientRect;
}
