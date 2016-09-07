let elmStack = [];
document.addEventListener('scroll', invalidate);
document.addEventListener('resize', invalidate);

function invalidate() {
	elmStack.forEach((elm) => {
		// check if the element is not in the dom anymore
		if ( ! elm || ! elm.parentNode) {
			// remove the element from the stack
			elmStack.splice(elmStack.indexOf(elm),1);
		} else {
			elm._sBoundingClientRect = null;
		}
	});
}

// export the function
export default function getBoundingClientRect(elm) {

	// add the element to the stack
	if (elmStack.indexOf(elm) === -1) {
		elmStack.push(elm);
	}
	if ( ! elm._sBoundingClientRect) {
		elm._sBoundingClientRect = elm.getBoundingClientRect();
	}
	return elm._sBoundingClientRect;
}
