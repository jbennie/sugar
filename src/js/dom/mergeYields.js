export default function mergeYields(destination, source) {

	// find yields in the templateInProps
	const destinationYields = destination.querySelectorAll('[yield]');
	// if we have some yields,
	// we process them.
	// otherwise, we considere the _templateInProps
	// as the template itself
	if (destinationYields.length) {
		// process the yields
		[].forEach.call(destinationYields, (yieldElm) => {
			// if the yield as a value,
			// we will try to find the corresponding yield in the
			// template
			const yieldId = yieldElm.getAttribute('yield');
			let yieldSelector = '[yield]';
			if (yieldId) {
				yieldSelector = `[yield="${yieldId}"]`;
			}
			// we need to find the proper yield id
			const sourceYield = source.querySelector(yieldSelector);
			if (sourceYield) {
				// set the yield content into the inPropTemplate
				yieldElm.removeAttribute('yield');
				yieldElm.appendChild(sourceYield.cloneNode(true));
			} else {
				// theirs no yield in the template,
				// so use the template itself as yield content
				yieldElm.removeAttribute('yield');
				yieldElm.innerHTML = source.innerHTML;
			}
		});
	}
	// return the destination
	return destination;
}
